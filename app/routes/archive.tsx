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
  getDateKey,
  warmLeadStories,
} from "../utils/poast-feeds.server";

export const meta: MetaFunction = () => {
  return {
    title: "Archive / thepoast",
    description: "Create a new ad campaign for your company or brand here.",
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
const FEED_START_DATE = "2026-09-23";
const BANNER_TRIGGER = 0.75;

type Feed = {
  id: string;
  subject: string;
  date: string;
};

export async function loader() {
  const campaigns = await listFinishedCampaigns();

  const sinceCutoff = campaigns.filter((campaign) => {
    const date = getCampaignDate(campaign);

    if (!date) return false;

    try {
      return getDateKey(date) >= FEED_START_DATE;
    } catch {
      return false;
    }
  });

  const daily = getLatestCampaignPerDay(
    sinceCutoff,
    FEED_LIMIT
  );

  const feeds: Feed[] = daily.map((campaign) => ({
    id: String(campaign.id),
    subject: campaign.subject || "thepoast",
    date:
      getCampaignDate(campaign) ||
      new Date().toISOString(),
  }));

  if (feeds.length > 0) {
    warmLeadStories(feeds.map((feed) => feed.id));
  }

  const degraded = campaigns.length === 0;

  return json(
    {
      feeds,
      degraded,
    },
    {
      headers: {
        "Cache-Control": degraded
          ? "no-store"
          : "public, max-age=30, s-maxage=60, stale-while-revalidate=3600",
      },
    }
  );
}

const MAX_CONCURRENT = 3;
let active = 0;
const waiting: Array<() => void> = [];

function schedule<T>(
  task: () => Promise<T>
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

    if (active < MAX_CONCURRENT) {
      run();
    } else {
      waiting.push(run);
    }
  });
}

const sleep = (ms: number) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

async function fetchLead(
  id: string,
  signal: AbortSignal
) {
  const url = `/feeds/preview/${encodeURIComponent(id)}`;

  let lastError: unknown;

  for (let attempt = 0; attempt < 3; attempt++) {
    if (signal.aborted) {
      throw new DOMException(
        "Aborted",
        "AbortError"
      );
    }

    try {
      const response = await fetch(url, {
        signal,
        headers: {
          Accept: "text/html",
        },
      });

      if (response.status === 404) {
        return null;
      }

      if (!response.ok) {
        throw new Error(
          `Preview failed: ${response.status}`
        );
      }

      const text = await response.text();

      if (!text) {
        throw new Error("Empty preview");
      }

      return text;
    } catch (error) {
      if (signal.aborted) {
        throw error;
      }

      lastError = error;
      await sleep(500 * (attempt + 1));
    }
  }

  throw lastError;
}

function formatDate(date: string) {
  try {
    return new Date(date).toLocaleDateString(
      "en-CA",
      {
        timeZone: "America/Toronto",
        dateStyle: "long",
      }
    );
  } catch {
    return "";
  }
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
}: {
  feed: Feed;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const [html, setHtml] = useState<string | null>(
    null
  );

  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (html || failed) return;

    const element = ref.current;

    if (!element) return;

    const controller = new AbortController();

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) {
            return;
          }

          observer.disconnect();

          schedule(() =>
            fetchLead(
              feed.id,
              controller.signal
            )
          )
            .then((result) => {
              if (controller.signal.aborted) {
                return;
              }

              if (result) {
                setHtml(result);
              } else {
                setFailed(true);
              }
            })
            .catch((error) => {
              if (controller.signal.aborted) {
                return;
              }
              setFailed(true);
            });
        },
        {
          rootMargin: "1800px 0px",
          threshold: 0,
        }
      );

    observer.observe(element);

    return () => {
      controller.abort();
      observer.disconnect();
    };
  }, [
    feed.id,
    html,
    failed,
  ]);

  return (
    <section
      className="feed-archive-item"
      data-feed-id={feed.id}
    >
      <div
        ref={ref}
        style={{
          position: "relative",
        }}
      >
        {html ? (
          <>
            <FeedEmbed
              id={feed.id}
              html={html}
              title={feed.subject}
            />

            <Link
              to={`/feeds/${feed.id}`}
              prefetch="intent"
              aria-label={`Read: ${feed.subject}`}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
              }}
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
            <strong>
              {feed.subject}
            </strong>

            <div
              style={{
                opacity: 0.6,
                marginTop: 6,
              }}
            >
              {formatDate(feed.date)}
            </div>
          </Link>
        ) : (
          <div
            className="feed-lazy-placeholder"
            aria-hidden="true"
            style={{
              width: "100%",
              height:
                getCachedHeight(feed.id) ??
                360,
            }}
          />
        )}
      </div>
    </section>
  );
}

export default function Today() {
  const {
    feeds,
    degraded,
  } = useLoaderData<typeof loader>();

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
          <section className="feeds-empty">
            <p>
              {degraded
                ? "The archive is taking a moment. Please refresh shortly."
                : "No feeds yet."}
            </p>
          </section>
        ) : (
          feeds.map((feed) => (
            <FeedCard
              key={feed.id}
              feed={feed}
            />
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