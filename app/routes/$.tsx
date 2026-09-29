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

const LIVE_CAMPAIGN_ID = 1;

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type LatestIssue = {
  id: number | string;
  subject: string;
  date: string;
  body: string;
};

type IssuePayload = {
  issue: LatestIssue | null;
  isDraft: boolean;
};

/* -------------------------------------------------------------------------- */
/*                             PERSISTENT CACHE                               */
/* -------------------------------------------------------------------------- */

const CONTENT_TTL_MS = 30 * 1000;

let cachedIssue: { data: LatestIssue | null; timestamp: number } | null = null;

function issueResponse(issue: LatestIssue | null, isDraft = true) {
  return json(
    { issue, isDraft } satisfies IssuePayload,
    {
      headers: {
        "Cache-Control":
          "public, max-age=30, s-maxage=60, stale-while-revalidate=86400",
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
      .footer {
        display: none !important;
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

export async function loader({ request }: LoaderFunctionArgs) {
  const now = new Date();
  const username = process.env.LISTMONK_USERNAME;
  const token = process.env.LISTMONK_TOKEN;

  if (!username || !token) {
    return issueResponse(cachedIssue?.data ?? null, true);
  }

  const checkNow = Date.now();
  if (cachedIssue && checkNow - cachedIssue.timestamp < CONTENT_TTL_MS) {
    return issueResponse(cachedIssue.data, true);
  }

  const authHeader = `Basic ${Buffer.from(`${username}:${token}`).toString("base64")}`;
  const previewHeaders = { Authorization: authHeader, Accept: "text/html" };

  const body = await fetchCampaignPreviewHtml(
    LIVE_CAMPAIGN_ID,
    previewHeaders
  );

  if (!body) {
    return issueResponse(cachedIssue?.data ?? null, true);
  }

  const issue: LatestIssue = {
    id: LIVE_CAMPAIGN_ID,
    subject: "Today's Edition",
    date: now.toISOString(),
    body: prepareIssueHtml(body, now),
  };

  cachedIssue = { data: issue, timestamp: checkNow };
  return issueResponse(issue, true);
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

    updateHeight();

    const doc = frame.contentDocument;
    if (doc) {
      doc.addEventListener("DOMContentLoaded", updateHeight);

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
  const { issue, isDraft } = useLoaderData<typeof loader>();

  return (
    <div className="feed-page">
      <header className="feed-topbar">
        {isDraft && (
          <div className="feed-status">
            <span className="status-dot" />
            404 Error
          </div>
        )}
        <Link className="feed-mark" to="/">
          <img
            src="/img/tp.png"
            alt="The Poast"
            loading="eager"
            decoding="async"
          />
        </Link>

        <a href="#subscribe" className="feed-subscribe">
          Subscribe
        </a>
      </header>

      <main className="feed-stream">
        {issue ? (
          <FeedEmbed key={issue.id} html={issue.body} title={issue.subject} />
        ) : (
          <div className="feed-empty">Check back soon for today&rsquo;s edition.</div>
        )}
      </main>

      <footer className="feed-footer" id="subscribe">
        <form
          method="post"
          action="https://app.thepoast.com/subscription/form"
          className="feed-subscribe-form"
        >
          <p className="feed-subscribe-heading">Get The Poast for free</p>

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

          <div className="feed-altcha-wrap">
            <Altcha />
          </div>

          <input
            id="6d48f"
            type="hidden"
            name="l"
            value="6d48fffe-7d37-4c14-b317-3e4cda33a647"
          />
          <input type="hidden" name="nonce" />

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