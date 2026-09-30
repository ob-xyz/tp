import { useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "@remix-run/react";
import { json, type HeadersFunction, type LinksFunction } from "@remix-run/node";

import Altcha from "../components/altcha";
import FeedEmbed, { getCachedHeight } from "../components/feed-embed";

import {
  listFinishedCampaigns,
  getLatestCampaignPerDay,
  getCampaignDate,
  getIssueWithin,
  peekIssue,
  warmIssues,
} from "../utils/poast-feeds.server";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" },
];

export const headers: HeadersFunction = ({ loaderHeaders }) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? "no-store",
});

export function shouldRevalidate() {
  return false;
}

/* -------------------------------------------------------------------------- */
/*                                   CONFIG                                   */
/* -------------------------------------------------------------------------- */

const FEED_LIMIT = 30;

// The newest issue is rendered into the first server response. If Listmonk
// hasn't produced it within this long, the page ships without it and the
// browser fetches it immediately (with priority) instead.
const TOP_WAIT_MS = 4000;

const WORK_TIMEZONE = "America/Toronto";

type Feed = {
  id: string;
  subject: string;
  date: string;
  dateLabel: string;
  html?: string;
};

function formatDateLabel(rawDate: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: WORK_TIMEZONE,
    }).format(new Date(rawDate));
  } catch {
    return "";
  }
}

/* -------------------------------------------------------------------------- */
/*                                   LOADER                                   */
/* -------------------------------------------------------------------------- */

export async function loader() {
  const campaigns = await listFinishedCampaigns(); // cached, stale-on-error
  const daily = getLatestCampaignPerDay(campaigns, FEED_LIMIT);

  const feeds: Feed[] = daily.map((campaign) => {
    const id = String(campaign.id);
    const date = getCampaignDate(campaign) || new Date().toISOString();

    return {
      id,
      subject: campaign.subject || "The Poast",
      date,
      dateLabel: formatDateLabel(date),
    };
  });

  // 1) The newest issue: wait for it (bounded) and inline it. Instant when warm.
  if (feeds[0]) {
    const top = peekIssue(feeds[0].id) ?? (await getIssueWithin(feeds[0].id, TOP_WAIT_MS));
    if (top) feeds[0].html = top.body;
  }

  // 2) The second issue, only if it's already in memory (never waits).
  if (feeds[1]) {
    const second = peekIssue(feeds[1].id);
    if (second) feeds[1].html = second.body;
  }

  // 3) Everything else warms in the background, AFTER the top issue
  //    has resolved, so it never competes with it.
  warmIssues(feeds.slice(1).map((f) => f.id));

  const degraded = campaigns.length === 0;

  return json(
    { feeds, degraded },
    {
      headers: {
        // Never cache an empty/failed result.
        "Cache-Control": degraded
          ? "no-store"
          : "public, max-age=30, s-maxage=60, stale-while-revalidate=3600",
      },
    }
  );
}

/* -------------------------------------------------------------------------- */
/*            CLIENT-SIDE FETCH QUEUE (max 2 in flight, with priority)        */
/* -------------------------------------------------------------------------- */

const MAX_CONCURRENT = 2;
let active = 0;
const waiting: Array<() => void> = [];

function schedule<T>(task: () => Promise<T>, priority = false): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const run = () => {
      active++;
      task()
        .then(resolve, reject)
        .finally(() => {
          active--;
          waiting.shift()?.();
        });
    };

    // Priority work never waits behind other cards.
    if (priority || active < MAX_CONCURRENT) run();
    else waiting.push(run);
  });
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Returns HTML, or null if the issue doesn't exist (404). */
async function fetchIssue(id: string, signal: AbortSignal) {
  const url = `/feeds/full/${encodeURIComponent(id)}`;
  let lastError: unknown;

  for (let attempt = 0; attempt < 3; attempt++) {
    if (signal.aborted) throw new DOMException("Aborted", "AbortError");
    try {
      const res = await fetch(url, {
        signal,
        headers: { Accept: "text/html" },
      });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error(`Issue request failed: ${res.status}`);
      const text = await res.text();
      if (!text) throw new Error("Empty issue");
      return text;
    } catch (error) {
      if (signal.aborted) throw error;
      lastError = error;
      await sleep(300 * (attempt + 1));
    }
  }
  throw lastError;
}

/* -------------------------------------------------------------------------- */
/*                                  FEED CARD                                 */
/* -------------------------------------------------------------------------- */

function FeedCard({ feed, priority }: { feed: Feed; priority: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [html, setHtml] = useState<string | null>(feed.html ?? null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (html || failed) return;

    const controller = new AbortController();

    const load = () =>
      schedule(() => fetchIssue(feed.id, controller.signal), priority)
        .then((result) => {
          if (controller.signal.aborted) return;
          if (result) setHtml(result);
          else setFailed(true);
        })
        .catch((error) => {
          if (controller.signal.aborted) return;
          console.error(`[feeds] Failed to load issue ${feed.id}:`, error);
          setFailed(true);
        });

    // Top card: no observer, no waiting. Start the moment we mount.
    if (priority) {
      load();
      return () => controller.abort();
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        load();
      },
      { rootMargin: "1200px 0px", threshold: 0 }
    );

    observer.observe(element);

    return () => {
      controller.abort();
      observer.disconnect();
    };
  }, [feed.id, html, failed, priority]);

  return (
    <section className="feed-archive-item" data-feed-id={feed.id}>
      <div ref={ref}>
        {html ? (
          <FeedEmbed
            id={feed.id}
            html={html}
            title={feed.subject}
            interactive
            fallbackHeight={900}
          />
        ) : failed ? (
          <Link
            to={`/feeds/${feed.id}`}
            prefetch="intent"
            className="feeds-empty feed-fallback"
            style={{
              display: "block",
              padding: "32px 24px",
              textAlign: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <strong>{feed.subject}</strong>
            {feed.dateLabel && (
              <div style={{ opacity: 0.6, marginTop: 6 }}>{feed.dateLabel}</div>
            )}
            <div style={{ opacity: 0.6, marginTop: 6 }}>Read this edition</div>
          </Link>
        ) : (
          <div
            className="feeds-skeleton feed-lazy-placeholder"
            aria-hidden="true"
            style={{
              width: "100%",
              height: getCachedHeight(feed.id, true) ?? 900,
            }}
          />
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    PAGE                                    */
/* -------------------------------------------------------------------------- */

export default function Feeds() {
  const { feeds, degraded } = useLoaderData<typeof loader>();

  return (
    <div className="feeds-page">
      <header className="feed-topbar">
        <Link className="feed-mark" to="/">
          <img src="/img/tp.png" alt="The Poast" loading="eager" decoding="async" />
        </Link>

        <a href="#subscribe" className="feed-subscribe">
          Subscribe
        </a>
      </header>

      <main className="feeds-stream">
        {feeds.length === 0 ? (
          <div className="feeds-empty">
            {degraded
              ? "The archive is taking a moment. Please refresh shortly."
              : "No feeds yet."}
          </div>
        ) : (
          feeds.map((feed, index) => (
            <FeedCard key={feed.id} feed={feed} priority={index === 0} />
          ))
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
            By submitting, you agree to our <Link to="/policies/terms">Terms</Link>{" "}
            &amp; <Link to="/policies/privacy">Privacy Policy</Link>.
          </p>
        </form>
      </footer>
    </div>
  );
}