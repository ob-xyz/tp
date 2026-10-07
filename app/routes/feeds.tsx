import { useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "@remix-run/react";
import {
  json,
  type HeadersFunction,
  type LinksFunction,
  type MetaFunction
} from "@remix-run/node";

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
    title: "Past Feeds - The Poast",
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

/* -------------------------------------------------------------------------- */
/*                                   CONFIG                                   */
/* -------------------------------------------------------------------------- */

const FEED_LIMIT = 30;

const WORK_TIMEZONE = "America/Toronto";

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

/* -------------------------------------------------------------------------- */
/*                                   LOADER                                   */
/* -------------------------------------------------------------------------- */

export async function loader() {
  /*
   * Only fetch lightweight campaign metadata here.
   *
   * The actual issue HTML is deliberately NOT fetched during
   * the initial document request.
   */
  const campaigns = await listFinishedCampaigns();

  const daily = getLatestCampaignPerDay(
    campaigns,
    FEED_LIMIT
  );

  const feeds: Feed[] = daily.map((campaign) => {
    const id = String(campaign.id);

    const date =
      getCampaignDate(campaign) ||
      new Date().toISOString();

    return {
      id,
      subject:
        campaign.subject || "The Poast",
      date,
      dateLabel: formatDateLabel(date),
    };
  });

  /*
   * Warm the server-side issue cache in the background.
   *
   * This does NOT block the initial response.
   */
  if (feeds.length > 0) {
    warmIssues(
      feeds.map((feed) => feed.id)
    );
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

/* -------------------------------------------------------------------------- */
/*            CLIENT-SIDE FETCH QUEUE (max 2 in flight, priority)             */
/* -------------------------------------------------------------------------- */

const MAX_CONCURRENT = 2;

let active = 0;

const waiting: Array<() => void> = [];

function schedule<T>(
  task: () => Promise<T>,
  priority = false
): Promise<T> {
  return new Promise<T>(
    (resolve, reject) => {
      const run = () => {
        active++;

        task()
          .then(resolve, reject)
          .finally(() => {
            active--;
            waiting.shift()?.();
          });
      };

      /*
       * Priority requests start immediately.
       *
       * Normal archive requests wait behind the
       * active concurrency limit.
       */
      if (
        priority ||
        active < MAX_CONCURRENT
      ) {
        run();
      } else {
        waiting.push(run);
      }
    }
  );
}

const sleep = (ms: number) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

/* -------------------------------------------------------------------------- */
/*                              FETCH FULL ISSUE                              */
/* -------------------------------------------------------------------------- */

/**
 * Returns full issue HTML, or null when the issue
 * doesn't have a usable page.
 */
async function fetchIssue(
  id: string,
  signal: AbortSignal
) {
  const url =
    `/feeds/full/${encodeURIComponent(id)}`;

  let lastError: unknown;

  for (
    let attempt = 0;
    attempt < 3;
    attempt++
  ) {
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
          `Issue request failed: ${response.status}`
        );
      }

      const text =
        await response.text();

      if (!text) {
        throw new Error(
          "Empty issue"
        );
      }

      return text;
    } catch (error) {
      if (signal.aborted) {
        throw error;
      }

      lastError = error;

      /*
       * Retry quickly. In the normal case the
       * server-side cache makes this unnecessary.
       */
      await sleep(
        300 * (attempt + 1)
      );
    }
  }

  throw lastError;
}

/* -------------------------------------------------------------------------- */
/*                                  FEED CARD                                 */
/* -------------------------------------------------------------------------- */

function FeedCard({
  feed,
  priority,
}: {
  feed: Feed;
  priority: boolean;
}) {
  const ref =
    useRef<HTMLDivElement>(null);

  const [html, setHtml] =
    useState<string | null>(null);

  const [failed, setFailed] =
    useState(false);

  useEffect(() => {
    if (html || failed) {
      return;
    }

    const controller =
      new AbortController();

    const load = () => {
      schedule(
        () =>
          fetchIssue(
            feed.id,
            controller.signal
          ),
        priority
      )
        .then((result) => {
          if (
            controller.signal.aborted
          ) {
            return;
          }

          if (result) {
            setHtml(result);
          } else {
            setFailed(true);
          }
        })
        .catch((error) => {
          if (
            controller.signal.aborted
          ) {
            return;
          }

          console.error(
            `[feeds] Failed to load issue ${feed.id}:`,
            error
          );

          setFailed(true);
        });
    };

    /*
     * The first issue starts immediately.
     *
     * No IntersectionObserver means there is
     * absolutely no waiting for the first card.
     */
    if (priority) {
      load();

      return () => {
        controller.abort();
      };
    }

    const element = ref.current;

    if (!element) {
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            !entry?.isIntersecting
          ) {
            return;
          }

          observer.disconnect();

          load();
        },
        {
          /*
           * Load substantially ahead of the
           * reader so scrolling feels instant.
           */
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
    priority,
  ]);

  return (
    <section
      className="feed-archive-item"
      data-feed-id={feed.id}
    >
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
            <strong>
              {feed.subject}
            </strong>

            {feed.dateLabel && (
              <div
                style={{
                  opacity: 0.6,
                  marginTop: 6,
                }}
              >
                {feed.dateLabel}
              </div>
            )}

            <div
              style={{
                opacity: 0.6,
                marginTop: 6,
              }}
            >
              Read this edition
            </div>
          </Link>
        ) : (
          <div
            className="feeds-skeleton feed-lazy-placeholder"
            aria-hidden="true"
            style={{
              width: "100%",
              height:
                getCachedHeight(
                  feed.id,
                  true
                ) ?? 900,
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
  const {
    feeds,
    degraded,
  } = useLoaderData<
    typeof loader
  >();

  return (
    <div className="feeds-page">
      <header className="feed-topbar">
        <Link
          className="feed-mark"
          to="/"
        >
          <img
            src="/img/tp.png"
            alt="The Poast"
            decoding="async"
          />
        </Link>

        <a
          href="#subscribe"
          className="feed-subscribe"
        >
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
          feeds.map(
            (feed, index) => (
              <FeedCard
                key={feed.id}
                feed={feed}
                priority={index === 0}
              />
            )
          )
        )}
      </main>

      <footer
        className="feed-footer"
        id="subscribe"
      >

        <form
          method="post"
          action="https://app.thepoast.com/subscription/form"
          className="feed-subscribe-form"
        >
        <div className="feed-header">
          Get The Poast
        </div>
          <div className="feed-input-bar">
            <input
              className="feed-input email-input"
              type="email"
              name="email"
              required
              placeholder="Email Address *"
            />

            <button
              className="feed-submit"
              type="submit"
            >
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

          <input
            type="hidden"
            name="nonce"
          />

          <p className="feed-legal">
            By submitting, you agree to our{" "}
            <Link to="/policies/terms">
              Terms
            </Link>{" "}
            &amp;{" "}
            <Link to="/policies/privacy">
              Privacy
            </Link>
            <br />
            <div className="innerfeed-legal">
            <Link className="space" to="/about">About</Link>
            <Link className="space" to="/archive">Archive</Link>
            <Link className="space" to="/submit-post">Submit Post</Link>
            <Link className="space" to="/partner">Partner</Link>
            <Link className="space" to="/book">Advertise</Link>
            <p className="copyright">
              © 2026 The Poast
            </p>
            </div>
          </p>
        </form>
      </footer>
    </div>
  );
}