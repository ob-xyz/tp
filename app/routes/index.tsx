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

export function shouldRevalidate() {
  return false;
}

/* -------------------------------------------------------------------------- */
/*                                   CONFIG                                   */
/* -------------------------------------------------------------------------- */

/*
 * The campaign always used as the "live draft" while today's edition is
 * being written. Change if the scratchpad campaign's ID ever changes.
 */
const DRAFT_CAMPAIGN_ID = 1;

/*
 * Working-hours window, in this timezone. Before WORK_START_HOUR, the
 * homepage shows the most recent finished send (red) even if nothing has
 * gone out yet today. From WORK_START_HOUR onward, it shows the live
 * draft (green) UNTIL a finished campaign dated today actually appears —
 * at which point it flips back to red automatically, whenever that
 * happens to be.
 */
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
/*                                   CACHE                                    */
/* -------------------------------------------------------------------------- */

const SENT_CHECK_TTL_MS = 60 * 1000; // how often we re-check whether today's issue has gone out
const SENT_CONTENT_TTL_MS = 10 * 60 * 1000; // finished issue body rarely changes once sent
const DRAFT_CONTENT_TTL_MS = 60 * 1000; // draft changes throughout the day while being written

let cachedLatestMeta:
  | { data: Campaign | null; timestamp: number }
  | null = null;

let cachedSentIssue:
  | { data: LatestIssue | null; timestamp: number }
  | null = null;

let cachedDraftIssue:
  | { data: LatestIssue | null; timestamp: number }
  | null = null;

function issueResponse(mode: IssueMode, issue: LatestIssue | null) {
  return json(
    { mode, issue } satisfies IssuePayload,
    {
      headers: {
        "Cache-Control":
          "public, max-age=30, s-maxage=60, stale-while-revalidate=300",
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
  timeout = 3500
) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeoutId);
  }
}

/*
 * Uses Listmonk's /preview endpoint rather than the raw campaign `body`
 * field. `body` is only the inner content — the dark-card styling, layout,
 * and template wrapper come from the campaign's associated template and
 * are NOT included in `body`. /preview returns the fully rendered HTML
 * exactly as it would be sent (template applied, merge tags resolved by
 * Listmonk itself), so it's the correct source for anything meant to
 * visually match the real send.
 */
async function fetchCampaignPreviewHtml(
  id: number | string,
  headers: Record<string, string>
): Promise<string> {
  try {
    const response = await fetchWithTimeout(
      `https://app.thepoast.com/api/campaigns/${id}/preview`,
      { headers },
      3500
    );

    if (response.ok) {
      return await response.text();
    }
  } catch {
    /* graceful fallback handled by caller */
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
    // "24" shows up for midnight in some locale outputs; normalize to 0.
    hour: rawHour === 24 ? 0 : rawHour,
  };
}

/* -------------------------------------------------------------------------- */
/*                        GO-STYLE DATE TEMPLATE RESOLUTION                   */
/* -------------------------------------------------------------------------- */

/*
 * Campaign bodies use Listmonk/Go-style merge tags like {{ Date "Jan 2" }},
 * which are only filled in by Listmonk's own send pipeline. Since we pull
 * the raw body directly from the API (outside that pipeline), these tags
 * arrive unresolved. This does a single-pass, longest-token-first
 * substitution using Go's reference-date layout tokens, covering the
 * common date/weekday tokens. Anything left over (an unrecognized tag) is
 * stripped rather than shown as raw {{ }} syntax.
 */
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

  /*
   * Longest tokens first, so e.g. "Monday" is matched before "Mon", and
   * "2006" is matched before "06" — this is a single left-to-right scan,
   * so a substituted value is never re-scanned for further token matches.
   */
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

  // Anything else unresolved gets removed rather than shown raw.
  return withDates.replace(/\{\{[\s\S]*?\}\}/g, "");
}

/* -------------------------------------------------------------------------- */
/*                          PREPARE ISSUE HTML FOR IFRAME                     */
/* -------------------------------------------------------------------------- */

/*
 * - Resolves {{ Date "..." }} merge tags (see above)
 * - Injects <base target="_blank"> so links open in a new tab
 * - Injects a mobile viewport meta tag
 * - Injects a responsive image/table reset (max-width, not width, so it
 *   only caps oversized elements — small icons/badges are untouched, and
 *   it doesn't need to fight the template's own <style> block, since
 *   max-width and width are different properties)
 */
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
/*                                   LOADER                                   */
/* -------------------------------------------------------------------------- */

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const now = new Date();
  const { dateKey: todayKey, hour: currentHour } = getZonedParts(
    now,
    WORK_TIMEZONE
  );

  const username = process.env.LISTMONK_USERNAME;
  const token = process.env.LISTMONK_TOKEN;

  if (!username || !token) {
    console.error("Missing Listmonk credentials");
    return issueResponse("sent", cachedSentIssue?.data ?? null);
  }

  const authHeader = `Basic ${Buffer.from(
    `${username}:${token}`
  ).toString("base64")}`;

  const headers = {
    Authorization: authHeader,
    Accept: "application/json",
  };

  // /preview returns HTML directly, not JSON — separate Accept header.
  const previewHeaders = {
    Authorization: authHeader,
    Accept: "text/html",
  };

  /* ------------------------- STEP 1: latest finished ----------------------- */
  /*
   * Cheap metadata-only check, short TTL, used purely to decide whether
   * today's issue has already gone out.
   */
  let latestMeta: Campaign | null = null;
  const metaCheckNow = Date.now();

  if (
    cachedLatestMeta &&
    metaCheckNow - cachedLatestMeta.timestamp < SENT_CHECK_TTL_MS
  ) {
    latestMeta = cachedLatestMeta.data;
  } else {
    try {
      const response = await fetchWithTimeout(
        "https://app.thepoast.com/api/campaigns?status=finished&order_by=updated_at&order=DESC&per_page=1",
        { headers },
        3500
      );

      if (response.ok) {
        const data = await response.json();
        const campaigns: Campaign[] =
          data?.data?.results || data?.data || [];

        latestMeta = campaigns[0] || null;
        cachedLatestMeta = { data: latestMeta, timestamp: metaCheckNow };
      } else {
        console.error(
          `Feed Error: ${response.status} ${response.statusText}`
        );
        latestMeta = cachedLatestMeta?.data ?? null;
      }
    } catch (error) {
      console.error("Failed to check latest campaign:", error);
      latestMeta = cachedLatestMeta?.data ?? null;
    }
  }

  const latestDateRaw = latestMeta?.updated_at || latestMeta?.created_at;
  const latestKey = latestDateRaw
    ? getZonedParts(new Date(latestDateRaw), WORK_TIMEZONE).dateKey
    : null;

  const isSentToday = latestKey === todayKey;
  const isWorkingHours = currentHour >= WORK_START_HOUR;
  const showDraft = !isSentToday && isWorkingHours;

  /* ----------------------------- DRAFT BRANCH ------------------------------ */

  if (showDraft) {
    const draftCheckNow = Date.now();

    if (
      cachedDraftIssue &&
      draftCheckNow - cachedDraftIssue.timestamp < DRAFT_CONTENT_TTL_MS
    ) {
      return issueResponse("draft", cachedDraftIssue.data);
    }

    const draftBody = await fetchCampaignPreviewHtml(
      DRAFT_CAMPAIGN_ID,
      previewHeaders
    );

    if (draftBody) {
      const draftIssue: LatestIssue = {
        id: DRAFT_CAMPAIGN_ID,
        subject: "Today's Edition (Live Draft)",
        date: now.toISOString(),
        body: prepareIssueHtml(draftBody, now),
      };

      cachedDraftIssue = { data: draftIssue, timestamp: draftCheckNow };
      return issueResponse("draft", draftIssue);
    }

    // If the draft fetch fails, fall through to the sent branch below
    // rather than showing nothing.
  }

  /* ------------------------------ SENT BRANCH ------------------------------ */

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

  const sentBody = await fetchCampaignPreviewHtml(
    latestMeta.id,
    previewHeaders
  );

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
/*                                ISSUE FRAME                                 */
/* -------------------------------------------------------------------------- */

function IssueFrame({
  html,
  title,
}: {
  html: string;
  title: string;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    const frame = iframeRef.current;
    const doc = frame?.contentDocument;

    if (frame && doc) {
      const height = Math.max(
        doc.documentElement?.scrollHeight || 0,
        doc.body?.scrollHeight || 0
      );

      if (height > 0) {
        frame.style.height = `${height}px`;
      }
    }

    setLoaded(true);
  };

  return (
    <div className={`phone-frame${loaded ? " loaded" : ""}`}>
      <div className="phone-notch" />

      <div className="phone-screen">
        {!loaded && <div className="phone-skeleton" />}

        <iframe
          ref={iframeRef}
          srcDoc={html}
          title={title}
          onLoad={handleLoad}
          loading="eager"
          sandbox="allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          scrolling="no"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function Index() {
  const { mode, issue } = useLoaderData<typeof loader>();

  const [showModal, setShowModal] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);

  /* ---------------------------- SUBSCRIBE POPUP --------------------------- */

  useEffect(() => {
    const isSubscribed = localStorage.getItem("thepoast_subscribed");
    const hasSeenThisSession = sessionStorage.getItem("thepoast_seen_session");

    if (isSubscribed || hasSeenThisSession) {
      return;
    }

    const timer = window.setTimeout(() => {
      setShowModal(true);
      sessionStorage.setItem("thepoast_seen_session", "true");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  /* ----------------------------- ESC TO CLOSE ----------------------------- */

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  /* ------------------------------ STICKY NAV ------------------------------ */

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDraft = mode === "draft";

  return (
    <div className="container">

      {/* STICKY SUBSCRIBE NAV */}
      <div className={`sticky-nav${showStickyNav ? " visible" : ""}`}>
        <Link className="sticky-logo" to="/">
          <img
            src="/img/ja.png"
            alt="The Poast"
            loading="lazy"
            decoding="async"
          />
        </Link>

        <Link to="/subscribe" className="sticky-subscribe">
          Subscribe
        </Link>
      </div>

      {/* POPUP MODAL */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src="/img/ja6.png"
              alt="The Poast"
              loading="eager"
              decoding="async"
            />

            <p>Trusted by 25,000+ execs and builders</p>
            <p>Get The Poast for free</p>
            <p>Subscribe for the world's best posts, delivered to your inbox.</p>

            <form
              method="post"
              action="https://app.thepoast.com/subscription/form"
            >
              <div className="input-wrapper">
                <input
                  className="email"
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address *"
                />

                <button className="submit" type="submit">
                  Subscribe
                </button>
              </div>

              <Altcha />

              <input
                id="6d48f"
                type="hidden"
                name="l"
                value="6d48fffe-7d37-4c14-b317-3e4cda33a647"
              />

              <input type="hidden" name="nonce" />
            </form>

            <button
              type="button"
              className="dismiss-text"
              onClick={() => setShowModal(false)}
            >
              No thanks! I'm already subscribed
            </button>
          </div>
        </div>
      )}

      {/* HEADER SECTION */}
      <div className="header">
        <div className="nav">
          <Link to="/" className="logo">
            <img
              src="/img/ja.png"
              alt="The Poast Logo"
              loading="eager"
              decoding="async"
            />
          </Link>
        </div>
      </div>

      {/* TODAY'S EDITION — LIVE PHONE FRAME */}
      <main className="today-container">
        <div className="today-label">
          <span className={`pulse-dot ${isDraft ? "draft" : "sent"}`} />
          {isDraft ? "Live \u2014 Today\u2019s Edition" : "Today\u2019s Edition"}
        </div>

        {issue ? (
          <IssueFrame html={issue.body} title={issue.subject} />
        ) : (
          <div className="today-empty">
            Check back soon for today&rsquo;s issue.
          </div>
        )}

        <Link to="/subscribe" className="today-subscribe">
          Get The Poast sent to you &rarr;
        </Link>
      </main>

    </div>
  );
}