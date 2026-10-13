import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Link, useLoaderData } from "@remix-run/react";
import {
  json,
  type HeadersFunction,
  type LinksFunction,
  type MetaFunction
} from "@remix-run/node";

import FeedTopbar from "../components/feed-topbar";
import FeedFooter from "../components/feed-footer";
import FeedSubscribeBanner from "../components/feed-subscribe-banner";
import Altcha from "../components/altcha";
import FeedEmbed, {
  getCachedHeight,
} from "../components/feed-embed";

import {
  listFinishedCampaigns,
  getLatestCampaignPerDay,
  getCampaignDate,
  warmIssues,
} from "../utils/poast-feeds.server";

export const meta: MetaFunction = () => {
  return {
    title: "Past feeds / thepoast",
    description: "See every feed we've ever posted.",
  };
};

export const links: LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://img.thepoast.com",
  },
  {
    rel: "dns-prefetch",
    href: "https://img.thepoast.com",
  },
];

export const headers: HeadersFunction = ({
  loaderHeaders,
}) => ({
  "Cache-Control":
    loaderHeaders.get("Cache-Control") ?? "no-store",
});

export function shouldRevalidate() {
  return false;
}

const FEED_LIMIT = 30;
const WORK_TIMEZONE = "America/Toronto";
const BANNER_TRIGGER = 0.75;

type Feed = {
  id: string;
  subject: string;
  date: string;
  dateLabel: string;
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

export async function loader() {
  const campaigns = await listFinishedCampaigns();
  const daily = getLatestCampaignPerDay(campaigns, FEED_LIMIT);

  const feeds: Feed[] = daily.map((campaign) => {
    const id = String(campaign.id);
    const date = getCampaignDate(campaign) || new Date().toISOString();
    return {
      id,
      subject: campaign.subject || "thepoast",
      date,
      dateLabel: formatDateLabel(date),
    };
  });

  if (feeds.length > 0) {
    warmIssues(feeds.map((feed) => feed.id));
  }

  const degraded = campaigns.length === 0;

  return json(
    { feeds, degraded },
    {
      headers: {
        "Cache-Control": degraded
          ? "no-store"
          : "public, max-age=30, s-maxage=60, stale-while-revalidate=3600",
      },
    }
  );
}

const MAX_CONCURRENT = 2;
let active = 0;
const waiting: Array<() => void> = [];

function schedule<T>(
  task: () => Promise<T>,
  priority = false
): Promise<T> {
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

    if (priority || active < MAX_CONCURRENT) {
      run();
    } else {
      waiting.push(run);
    }
  });
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchIssue(id: string, signal: AbortSignal) {
  const url = `/feeds/full/${encodeURIComponent(id)}`;
  let lastError: unknown;

  for (let attempt = 0; attempt < 3; attempt++) {
    if (signal.aborted) {
      throw new DOMException("Aborted", "AbortError");
    }

    try {
      const response = await fetch(url, {
        signal,
        headers: { Accept: "text/html" },
      });

      if (response.status === 404) return null;
      if (!response.ok) throw new Error(`Issue request failed: ${response.status}`);

      const text = await response.text();
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

function useReachedEndOfPage() {
  const endRef = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const element = endRef.current;
    if (!element) return;

    let frame = 0;
    const check = () => {
      frame = 0;
      const top = element.getBoundingClientRect().top;
      setReached(window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER);
    };

    const scheduleCheck = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    window.addEventListener("scroll", scheduleCheck, { passive: true });
    window.addEventListener("resize", scheduleCheck);

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined" && element.parentElement) {
      resizeObserver = new ResizeObserver(scheduleCheck);
      resizeObserver.observe(element.parentElement);
    }

    check();

    return () => {
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      resizeObserver?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return { endRef, reached };
}

function FeedCard({
  feed,
  priority,
}: {
  feed: Feed;
  priority: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [html, setHtml] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (html || failed) return;

    const controller = new AbortController();
    const load = () => {
      schedule(() => fetchIssue(feed.id, controller.signal), priority)
        .then((result) => {
          if (controller.signal.aborted) return;
          if (result) setHtml(result);
          else setFailed(true);
        })
        .catch(() => setFailed(true));
    };

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
      { rootMargin: "1800px 0px", threshold: 0 }
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
          <FeedEmbed id={feed.id} html={html} title={feed.subject} interactive fallbackHeight={900} />
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
            {feed.dateLabel && <div style={{ opacity: 0.6, marginTop: 6 }}>{feed.dateLabel}</div>}
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

export default function Feeds() {
  const { feeds, degraded } = useLoaderData<typeof loader>();
  const { endRef, reached } = useReachedEndOfPage();
  const [forced, setForced] = useState(false);
  const [expandBanner, setExpandBanner] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const previousReached = useRef(false);

  const bannerVisible = reached || forced;

  useEffect(() => {
    if (previousReached.current && !reached) {
      setForced(false);
      setExpandBanner(false);
    }
    previousReached.current = reached;
  }, [reached]);

  const handleTopbarSubscribe = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setForced(true);
    setExpandBanner(true);
    footerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div className="feed-page feeds-page">
      <FeedTopbar hidden={reached} onSubscribe={handleTopbarSubscribe} />

      <main className="feeds-stream">
        {feeds.length === 0 ? (
          <div className="feeds-empty">
            {degraded ? "The archive is taking a moment. Please refresh shortly." : "No feeds yet."}
          </div>
        ) : (
          feeds.map((feed, index) => (
            <FeedCard key={feed.id} feed={feed} priority={index === 0} />
          ))
        )}

        <div ref={endRef} className="feed-end-marker" aria-hidden="true" />
      </main>

      <div ref={footerRef}>
        <FeedFooter covered={bannerVisible} />
      </div>

      <FeedSubscribeBanner visible={bannerVisible} forceExpanded={expandBanner} />
    </div>
  );
}