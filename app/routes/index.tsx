import { useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "@remix-run/react";
import {
  json,
  type LinksFunction,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import Altcha from "../components/altcha";
import scroll from "~/style/scss/components/showscroll.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: scroll },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" },
];

/* -------------------------------------------------------------------------- */
/*                                   CONFIG                                   */
/* -------------------------------------------------------------------------- */

const DRAFT_CAMPAIGN_ID = 1;
const WORK_TIMEZONE = "America/New_York";
const WORK_START_HOUR = 9;

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type Campaign = {
  id: number | string;
  subject?: string;
  body?: string;
  updated_at?: string;
  created_at?: string;
};

type IssueMode = "sent" | "draft";

type LatestIssue = {
  id: number | string;
  subject: string;
  date: string;
  body: string;
};

type IssuePayload = {
  mode: IssueMode;
  issue: LatestIssue | null;
};

/* -------------------------------------------------------------------------- */
/*                             PERSISTENT CACHE                               */
/* -------------------------------------------------------------------------- */

const SENT_CHECK_TTL_MS = 60 * 1000;
const SENT_CONTENT_TTL_MS = 30 * 60 * 1000;
const DRAFT_CONTENT_TTL_MS = 30 * 1000;

let cachedLatestMeta: { data: Campaign | null; timestamp: number } | null = null;
let cachedSentIssue: { data: LatestIssue | null; timestamp: number } | null = null;
let cachedDraftIssue: { data: LatestIssue | null; timestamp: number } | null = null;

function issueResponse(mode: IssueMode, issue: LatestIssue | null) {
  return json(
    { mode, issue } satisfies IssuePayload,
    {
      headers: {
        "Cache-Control":
          "public, max-age=60, s-maxage=300, stale-while-revalidate=86400",
      },
    }
  );
}

/* -------------------------------------------------------------------------- */
/*                              FETCH WITH TIMEOUT                            */
/* -------------------------------------------------------------------------- */

async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeout = 3000
) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function fetchCampaignPreviewHtml(
  id: number | string,
  headers: Record<string, string>
): Promise<string> {
  const response = await fetchWithTimeout(
    `https://app.thepoast.com/api/campaigns/${id}/preview`,
    { headers },
    3000
  );

  if (response && response.ok) {
    return await response.text();
  }

  return "";
}

/* -------------------------------------------------------------------------- */
/*                              TIMEZONE HELPERS                              */
/* -------------------------------------------------------------------------- */

function getZonedParts(date: Date, timeZone: string) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const get = (type: string) =>
    parts.find((part) => part.type === type)?.value ?? "";

  const rawHour = Number(get("hour"));

  return {
    dateKey: `${get("year")}-${get("month")}-${get("day")}`,
    hour: rawHour === 24 ? 0 : rawHour,
  };
}

/* -------------------------------------------------------------------------- */
/*                        GO-STYLE DATE TEMPLATE RESOLUTION                   */
/* -------------------------------------------------------------------------- */

function formatGoDate(date: Date, layout: string): string {
  const pad = (value: number) => String(value).padStart(2, "0");

  const monthNamesLong = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const monthNamesShort = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const weekdayLong = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ];
  const weekdayShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = date.getDay();

  const tokens: Array<[string, string]> = [
    ["Monday", weekdayLong[weekday]],
    ["January", monthNamesLong[month - 1]],
    ["2006", String(year)],
    ["Mon", weekdayShort[weekday]],
    ["Jan", monthNamesShort[month - 1]],
    ["06", pad(year % 100)],
    ["02", pad(day)],
    ["01", pad(month)],
    ["2", String(day)],
    ["1", String(month)],
  ];

  let result = "";
  let i = 0;

  outer: while (i < layout.length) {
    for (const [token, value] of tokens) {
      if (layout.startsWith(token, i)) {
        result += value;
        i += token.length;
        continue outer;
      }
    }
    result += layout[i];
    i += 1;
  }

  return result;
}

function resolveTemplateTags(html: string, referenceDate: Date): string {
  const withDates = html.replace(
    /\{\{\s*Date\s+"([^"]*)"\s*\}\}/gi,
    (_match, layout: string) => {
      try {
        return formatGoDate(referenceDate, layout);
      } catch {
        return "";
      }
    }
  );

  return withDates.replace(/\{\{[\s\S]*?\}\}/g, "");
}

/* -------------------------------------------------------------------------- */
/*                          PREPARE ISSUE HTML FOR IFRAME                     */
/* -------------------------------------------------------------------------- */

function prepareIssueHtml(html: string = "", referenceDate: Date): string {
  if (!html) return "";

  const resolved = resolveTemplateTags(html, referenceDate);

  const injected = `
    <base target="_blank">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        overflow-x: hidden !important;
        -webkit-text-size-adjust: 100%;
      }
      img, table, td, th {
        max-width: 100% !important;
      }
      img {
        height: auto !important;
      }
    </style>
  `;

  if (/<head[^>]*>/i.test(resolved)) {
    return resolved.replace(/<head[^>]*>/i, (match) => `${match}${injected}`);
  }

  if (/<html[^>]*>/i.test(resolved)) {
    return resolved.replace(
      /<html([^>]*)>/i,
      (match, attrs) => `<html${attrs}><head>${injected}</head>`
    );
  }

  return `<head>${injected}</head>${resolved}`;
}

/* -------------------------------------------------------------------------- */
/*                        METADATA + DRAFT HELPERS                            */
/* -------------------------------------------------------------------------- */

async function getLatestMeta(
  headers: Record<string, string>
): Promise<Campaign | null> {
  const metaCheckNow = Date.now();

  if (
    cachedLatestMeta &&
    metaCheckNow - cachedLatestMeta.timestamp < SENT_CHECK_TTL_MS
  ) {
    return cachedLatestMeta.data;
  }

  const response = await fetchWithTimeout(
    "https://app.thepoast.com/api/campaigns?status=finished&order_by=updated_at&order=DESC&per_page=1",
    { headers },
    3000
  );

  if (response && response.ok) {
    const data = await response.json();
    const campaigns: Campaign[] = data?.data?.results || data?.data || [];
    const latest = campaigns[0] || null;

    cachedLatestMeta = { data: latest, timestamp: metaCheckNow };
    return latest;
  }

  return cachedLatestMeta?.data ?? null;
}

async function resolveDraftIssue(
  now: Date,
  previewHeaders: Record<string, string>
): Promise<LatestIssue | null> {
  const draftCheckNow = Date.now();

  if (
    cachedDraftIssue &&
    draftCheckNow - cachedDraftIssue.timestamp < DRAFT_CONTENT_TTL_MS
  ) {
    return cachedDraftIssue.data;
  }

  const draftBody = await fetchCampaignPreviewHtml(
    DRAFT_CAMPAIGN_ID,
    previewHeaders
  );

  if (!draftBody) {
    return cachedDraftIssue?.data ?? null;
  }

  const draftIssue: LatestIssue = {
    id: DRAFT_CAMPAIGN_ID,
    subject: "Today's Edition (Live Draft)",
    date: now.toISOString(),
    body: prepareIssueHtml(draftBody, now),
  };

  cachedDraftIssue = { data: draftIssue, timestamp: draftCheckNow };
  return draftIssue;
}

/* -------------------------------------------------------------------------- */
/*                                   LOADER                                   */
/* -------------------------------------------------------------------------- */

export async function loader({ request }: LoaderFunctionArgs) {
  const now = new Date();
  const { dateKey: todayKey, hour: currentHour } = getZonedParts(
    now,
    WORK_TIMEZONE
  );

  const username = process.env.LISTMONK_USERNAME;
  const token = process.env.LISTMONK_TOKEN;

  if (!username || !token) {
    return issueResponse("sent", cachedSentIssue?.data ?? null);
  }

  const authHeader = `Basic ${Buffer.from(`${username}:${token}`).toString("base64")}`;

  const headers = { Authorization: authHeader, Accept: "application/json" };
  const previewHeaders = { Authorization: authHeader, Accept: "text/html" };

  const isWorkingHoursGuess = currentHour >= WORK_START_HOUR;

  const [latestMeta, speculativeDraftIssue] = await Promise.all([
    getLatestMeta(headers),
    isWorkingHoursGuess
      ? resolveDraftIssue(now, previewHeaders)
      : Promise.resolve(null),
  ]);

  const latestDateRaw = latestMeta?.updated_at || latestMeta?.created_at;
  const latestKey = latestDateRaw
    ? getZonedParts(new Date(latestDateRaw), WORK_TIMEZONE).dateKey
    : null;

  const isSentToday = latestKey === todayKey;
  const showDraft = !isSentToday && isWorkingHoursGuess;

  if (showDraft && speculativeDraftIssue) {
    return issueResponse("draft", speculativeDraftIssue);
  }

  if (!latestMeta) {
    return issueResponse("sent", cachedSentIssue?.data ?? null);
  }

  const sentCheckNow = Date.now();

  if (
    cachedSentIssue &&
    String(cachedSentIssue.data?.id) === String(latestMeta.id) &&
    sentCheckNow - cachedSentIssue.timestamp < SENT_CONTENT_TTL_MS
  ) {
    return issueResponse("sent", cachedSentIssue.data);
  }

  const sentBody = await fetchCampaignPreviewHtml(latestMeta.id, previewHeaders);

  if (!sentBody) {
    return issueResponse("sent", cachedSentIssue?.data ?? null);
  }

  const sentReferenceDate = latestDateRaw ? new Date(latestDateRaw) : now;

  const sentIssue: LatestIssue = {
    id: latestMeta.id,
    subject: latestMeta.subject || "Untitled Issue",
    date: latestDateRaw || now.toISOString(),
    body: prepareIssueHtml(sentBody, sentReferenceDate),
  };

  cachedSentIssue = { data: sentIssue, timestamp: sentCheckNow };
  return issueResponse("sent", sentIssue);
}

/* -------------------------------------------------------------------------- */
/*                                 FEED EMBED                                 */
/* -------------------------------------------------------------------------- */

function FeedEmbed({ html, title }: { html: string; title: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const frame = iframeRef.current;
    if (!frame) return;

    const updateHeight = () => {
      const doc = frame.contentDocument;
      if (doc) {
        const height = Math.max(
          doc.documentElement?.scrollHeight || 0,
          doc.body?.scrollHeight || 0
        );
        if (height > 0) {
          frame.style.height = `${height}px`;
          setLoaded(true);
        }
      }
    };

    // Initial check
    updateHeight();

    // Re-check as images load inside iframe
    const doc = frame.contentDocument;
    if (doc) {
      doc.addEventListener("DOMContentLoaded", updateHeight);
      
      // Use ResizeObserver inside iframe document body if supported
      if (doc.body && typeof ResizeObserver !== "undefined") {
        const observer = new ResizeObserver(updateHeight);
        observer.observe(doc.body);
        return () => observer.disconnect();
      }
    }
  }, [html]);

  return (
    <div className={`feed-embed${loaded ? " loaded" : ""}`}>
      {!loaded && <div className="feed-skeleton" style={{ minHeight: "400px" }} />}

      <iframe
        ref={iframeRef}
        srcDoc={html}
        title={title}
        onLoad={() => {
          const frame = iframeRef.current;
          if (frame?.contentDocument) {
            const height = Math.max(
              frame.contentDocument.documentElement?.scrollHeight || 0,
              frame.contentDocument.body?.scrollHeight || 0
            );
            if (height > 0) frame.style.height = `${height}px`;
          }
          setLoaded(true);
        }}
        loading="eager"
        sandbox="allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        scrolling="no"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function Index() {
  const { mode, issue } = useLoaderData<typeof loader>();
  const isDraft = mode === "draft";

  return (
    <div className="feed-page">
      <header className="feed-topbar">
        <Link className="feed-mark" to="/">
          <img
            src="/img/ja.png"
            alt="The Poast"
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* {isDraft && (
          <div className="feed-status">
            <span className="status-dot" />
            Today's edition
          </div>
        )} */}

        <a href="#subscribe" className="feed-subscribe">
          Subscribe
        </a>
      </header>

      <main className="feed-stream">
        {issue ? (
          <FeedEmbed key={issue.id} html={issue.body} title={issue.subject} />
        ) : (
          <div className="feed-empty">Check back soon for today&rsquo;s issue.</div>
        )}
      </main>
      <footer className="feed-footer" id="subscribe">
        <form
          method="post"
          action="https://app.thepoast.com/subscription/form"
          className="feed-subscribe-form"
        >
          <p className="feed-subscribe-heading">Get The Poast sent to you</p>

          {/* Single Line Input Bar */}
          <div className="feed-input-bar">
            <input
              className="feed-input email-input"
              type="email"
              name="email"
              required
              placeholder="Email Address *"
            />
            <button className="feed-submit" type="submit">
              Subscribe
            </button>
          </div>

          {/* Centered Minimalist Altcha Container */}
          <div className="feed-altcha-wrap">
            <Altcha />
          </div>

          {/* Hidden Listmonk Inputs */}
          <input
            id="6d48f"
            type="hidden"
            name="l"
            value="6d48fffe-7d37-4c14-b317-3e4cda33a647"
          />
          <input type="hidden" name="nonce" />

          {/* Subtle Footnote */}
          <p className="feed-legal">
            By submitting, you agree to our{" "}
            <Link to="/policies/terms">Terms</Link> &amp;{" "}
            <Link to="/policies/privacy">Privacy Policy</Link>.
          </p>
        </form>
      </footer>
    </div>
  );
}