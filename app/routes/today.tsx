import { useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "@remix-run/react";
import {
  json,
  type HeadersFunction,
  type LinksFunction,
} from "@remix-run/node";

import Altcha from "../components/altcha";
import FeedEmbed, { getCachedHeight } from "../components/feed-embed";

import {
  listFinishedCampaigns,
  getLatestCampaignPerDay,
  getCampaignDate,
  getDateKey,
  peekLeadStoryHtml,
  warmLeadStories,
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

const FEED_LIMIT = 30;
const INLINE_COUNT = 3; // first N cards ship with HTML if already warm
const FEED_START_DATE = "2026-09-23";

type Feed = {
  id: string;
  subject: string;
  date: string;
  html?: string;
};

export async function loader() {
  const campaigns = await listFinishedCampaigns(); // cached + stale-on-error

  const sinceCutoff = campaigns.filter((campaign) => {
    const d = getCampaignDate(campaign);
    if (!d) return false;
    try {
      return getDateKey(d) >= FEED_START_DATE;
    } catch {
      return false;
    }
  });

  const daily = getLatestCampaignPerDay(sinceCutoff, FEED_LIMIT);

  const feeds: Feed[] = daily.map((campaign, index) => {
    const id = String(campaign.id);
    return {
      id,
      subject: campaign.subject || "The Poast",
      date: getCampaignDate(campaign) || new Date().toISOString(),
      // Only present if already rendered in server memory (never waits).
      html: index < INLINE_COUNT ? peekLeadStoryHtml(id) ?? undefined : undefined,
    };
  });

  // Fire-and-forget: render lead stories + issues in the background
  // so previews and click-throughs are instant.
  warmLeadStories(feeds.map((f) => f.id));

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
/*                 CLIENT-SIDE FETCH QUEUE (max 3 in flight)                  */
/* -------------------------------------------------------------------------- */

const MAX_CONCURRENT = 3;
let active = 0;
const waiting: Array<() => void> = [];

function schedule<T>(task: () => Promise<T>): Promise<T> {
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
    if (active < MAX_CONCURRENT) run();
    else waiting.push(run);
  });
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Returns HTML, or null if the campaign has no lead story (404). */
async function fetchLead(id: string, signal: AbortSignal) {
  const url = `/feeds/preview/${encodeURIComponent(id)}`;
  let lastError: unknown;

  for (let attempt = 0; attempt < 3; attempt++) {
    if (signal.aborted) throw new DOMException("Aborted", "AbortError");
    try {
      const res = await fetch(url, {
        signal,
        headers: { Accept: "text/html" },
      });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error(`Preview failed: ${res.status}`);
      const text = await res.text();
      if (!text) throw new Error("Empty preview");
      return text;
    } catch (error) {
      if (signal.aborted) throw error;
      lastError = error;
      await sleep(500 * (attempt + 1));
    }
  }
  throw lastError;
}

/* -------------------------------------------------------------------------- */
/*                                  FEED CARD                                 */
/* -------------------------------------------------------------------------- */

function formatDate(date: string) {
  try {
    return new Date(date).toLocaleDateString("en-CA", {
      timeZone: "America/Toronto",
      dateStyle: "long",
    });
  } catch {
    return "";
  }
}

function FeedCard({ feed }: { feed: Feed }) {
  const ref = useRef<HTMLDivElement>(null);
  const [html, setHtml] = useState<string | null>(feed.html ?? null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (html || failed) return;
    const element = ref.current;
    if (!element) return;

    const controller = new AbortController();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();

        schedule(() => fetchLead(feed.id, controller.signal))
          .then((result) => {
            if (controller.signal.aborted) return;
            if (result) setHtml(result);
            else setFailed(true);
          })
          .catch((error) => {
            if (controller.signal.aborted) return;
            console.error(`[feeds] Failed to load feed ${feed.id}:`, error);
            setFailed(true);
          });
      },
      { rootMargin: "1200px 0px", threshold: 0 }
    );

    observer.observe(element);

    return () => {
      controller.abort();
      observer.disconnect();
    };
  }, [feed.id, html, failed]);

  return (
    <section className="feed-archive-item" data-feed-id={feed.id}>
      <div ref={ref} style={{ position: "relative" }}>
        {html ? (
          <>
            <FeedEmbed id={feed.id} html={html} title={feed.subject} />
            {/* Real client-side link: prefetches the campaign on hover/touch. */}
            <Link
              to={`/feeds/${feed.id}`}
              prefetch="intent"
              aria-label={`Read: ${feed.subject}`}
              style={{ position: "absolute", inset: 0, zIndex: 1 }}
            />
          </>
        ) : failed ? (
          <Link
            to={`/feeds/${feed.id}`}
            prefetch="intent"
            className="feed-fallback"
            style={{
              display: "block",
              padding: "32px 24px",
              textAlign: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <strong>{feed.subject}</strong>
            <div style={{ opacity: 0.6, marginTop: 6 }}>
              {formatDate(feed.date)}
            </div>
          </Link>
        ) : (
          <div
            className="feed-lazy-placeholder"
            aria-hidden="true"
            style={{
              width: "100%",
              height: getCachedHeight(feed.id) ?? 360,
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

export default function Today() {
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
          <section className="feeds-empty">
            <p>
              {degraded
                ? "The archive is taking a moment. Please refresh shortly."
                : "No feeds yet."}
            </p>
          </section>
        ) : (
          feeds.map((feed) => <FeedCard key={feed.id} feed={feed} />)
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