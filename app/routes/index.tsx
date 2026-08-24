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
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type Campaign = {
  id: number | string;
  subject?: string;
  body?: string;
  updated_at?: string;
  created_at?: string;
};

type Article = {
  id: number | string;
  subject: string;
  date: string;
  excerpt: string;
  coverImage: string | null;
};

/* -------------------------------------------------------------------------- */
/*                                   CACHE                                    */
/* -------------------------------------------------------------------------- */

const CACHE_TTL_MS = 10 * 60 * 1000;

/*
 * Add any campaign/article IDs you never want to show
 * in the "Past issues" archive here.
 */
const SKIPPED_ARTICLE_IDS = new Set(["725", "724"]);

let cachedArticles:
  | {
      data: Article[];
      timestamp: number;
    }
  | null = null;

function articleResponse(articles: Article[]) {
  return json(
    { articles },
    {
      headers: {
        "Cache-Control":
          "public, max-age=60, s-maxage=600, stale-while-revalidate=86400",
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

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeoutId);
  }
}

/* -------------------------------------------------------------------------- */
/*                                GET EXCERPT                                 */
/* -------------------------------------------------------------------------- */

function getExcerpt(
  html: string = "",
  subject: string = "",
  length = 140
) {
  if (!html) return "";

  let text = String(html)
    // Remove Go template tags like {{ ... }}
    .replace(/\{\{[\s\S]*?\}\}/g, "")

    // Remove the explicit tagline
    .replace(
      /<p[^>]*class=["']tagline["'][^>]*>[\s\S]*?<\/p>/gi,
      ""
    )

    // Remove tables containing header/profile metadata
    .replace(/<table[\s\S]*?<\/table>/gi, "")

    // Remove known newsletter/header text
    .replace(
      /^[\s\S]*?today['’]?s\s+feed\s+is\s+a\s+\d+\s+minute[^·]*[·]?\s*/i,
      ""
    )
    .replace(/^Hey\s+[\s\S]*?read\s*[·]?\s*/i, "")
    .replace(/The Poast\s*of the day/gi, "")

    // Strip remaining HTML
    .replace(/<[^>]+>/g, " ")

    // Remove URLs
    .replace(
      /\b(?:https?:\/\/)?(?:www\.)?[\w-]+(?:\.[\w-]+)+[^\s]*/gi,
      ""
    )

    // Remove UI text
    .replace(/\b(?:View Online|Sign Up)\b/gi, "")

    // Normalize whitespace
    .replace(/\s+/g, " ")
    .trim();

  // Remove the subject if it appears at the beginning
  if (subject) {
    const escapedSubject = String(subject).replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );

    text = text.replace(
      new RegExp(`^${escapedSubject}\\s*`, "i"),
      ""
    );

    // Fallback: remove the first 3 words of the subject if repeated
    const words = String(subject)
      .split(/\s+/)
      .filter(Boolean);

    if (words.length > 0) {
      const firstFewWords = words
        .slice(0, 3)
        .map((word) =>
          word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        )
        .join("\\s+");

      text = text.replace(
        new RegExp(`^${firstFewWords}\\s*`, "i"),
        ""
      );
    }
  }

  // Clean leading junk/punctuation
  text = text
    .replace(/^(?:[a-z0-9][^\s]*\s+)+(?=[A-Z])/i, "")
    .replace(/^[\s,·•:;-]+/, "")
    .trim();

  return text.length > length
    ? `${text.slice(0, length).trim()}...`
    : text;
}

/* -------------------------------------------------------------------------- */
/*                              GET COVER IMAGE                               */
/* -------------------------------------------------------------------------- */

function getCoverImage(html: string = "") {
  if (!html) return null;

  const imgRegex =
    /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;

  let match;
  let firstValidImage: string | null = null;

  while ((match = imgRegex.exec(String(html))) !== null) {
    const fullTag = match[0];
    const src = match[1];

    const isAvatarOrIcon =
      /avatar|headshot|profile|logo|icon|author/i.test(
        `${fullTag} ${src}`
      );

    if (isAvatarOrIcon) {
      continue;
    }

    /*
     * Preserve the original behavior:
     * if there are 2 or more valid images,
     * use the second valid image.
     */
    if (firstValidImage) {
      return src;
    }

    firstValidImage = src;
  }

  /*
   * If there was only one valid image,
   * use that one.
   */
  return firstValidImage;
}

/* -------------------------------------------------------------------------- */
/*                        GET UNIQUE DAILY CAMPAIGNS                          */
/* -------------------------------------------------------------------------- */

function getUniqueDailyCampaigns(
  campaigns: Campaign[],
  cutoffDate: Date,
  limit = 12
) {
  const seenDates = new Set<string>();
  const result: Campaign[] = [];

  for (const campaign of campaigns) {
    /*
     * Skip manually excluded articles.
     *
     * IDs are converted to strings so this works whether
     * Listmonk returns the ID as a number or string.
     */
    if (SKIPPED_ARTICLE_IDS.has(String(campaign.id))) {
      continue;
    }

    const rawDate =
      campaign.updated_at || campaign.created_at;

    if (!rawDate) {
      continue;
    }

    const campaignDate = new Date(rawDate);

    if (
      Number.isNaN(campaignDate.getTime()) ||
      campaignDate < cutoffDate
    ) {
      continue;
    }

    const dateKey = campaignDate
      .toISOString()
      .slice(0, 10);

    /*
     * Only show one campaign per day.
     *
     * Since the campaigns are already sorted by updated_at DESC,
     * the first campaign encountered for each date is used.
     */
    if (seenDates.has(dateKey)) {
      continue;
    }

    seenDates.add(dateKey);
    result.push(campaign);

    /*
     * Stop immediately once we have enough articles.
     */
    if (result.length >= limit) {
      break;
    }
  }

  return result;
}

/* -------------------------------------------------------------------------- */
/*                                   LOADER                                   */
/* -------------------------------------------------------------------------- */

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const now = Date.now();

  /*
   * Fast in-memory cache.
   */
  if (
    cachedArticles &&
    now - cachedArticles.timestamp < CACHE_TTL_MS
  ) {
    return articleResponse(cachedArticles.data);
  }

  const username = process.env.LISTMONK_USERNAME;
  const token = process.env.LISTMONK_TOKEN;

  if (!username || !token) {
    console.error("Missing Listmonk credentials");

    return articleResponse(
      cachedArticles?.data || []
    );
  }

  const authHeader = `Basic ${Buffer.from(
    `${username}:${token}`
  ).toString("base64")}`;

  const headers = {
    Authorization: authHeader,
    Accept: "application/json",
  };

  try {
    /*
     * Fetch enough campaigns to find the latest 12 unique days.
     */
    const response = await fetchWithTimeout(
      "https://app.thepoast.com/api/campaigns?status=finished&order_by=updated_at&order=DESC&per_page=20",
      {
        headers,
      },
      3500
    );

    if (!response.ok) {
      console.error(
        `Feed Error: ${response.status} ${response.statusText}`
      );

      return articleResponse(
        cachedArticles?.data || []
      );
    }

    const data = await response.json();

    const campaigns: Campaign[] =
      data?.data?.results ||
      data?.data ||
      [];

    const cutoffDate = new Date(
      "2026-08-07T00:00:00Z"
    );

    const targetCampaigns = getUniqueDailyCampaigns(
      campaigns,
      cutoffDate,
      12
    );

    /*
     * Fetch full campaign details in parallel only when
     * the campaign list does not already contain the body.
     */
    const fullArticles = await Promise.all(
      targetCampaigns.map(async (campaign) => {
        let bodyContent = campaign.body || "";

        if (!bodyContent && campaign.id) {
          try {
            const detailResponse =
              await fetchWithTimeout(
                `https://app.thepoast.com/api/campaigns/${campaign.id}`,
                {
                  headers,
                },
                2500
              );

            if (detailResponse.ok) {
              const detailData =
                await detailResponse.json();

              bodyContent =
                detailData?.data?.body || "";
            }
          } catch {
            /*
             * Graceful fallback:
             * the article can still render without an
             * excerpt or cover image.
             */
          }
        }

        return {
          id: campaign.id,

          subject:
            campaign.subject || "Untitled Issue",

          /*
           * updated_at corresponds to the campaign's
           * completion/ended time.
           */
          date:
            campaign.updated_at ||
            campaign.created_at ||
            new Date().toISOString(),

          excerpt: getExcerpt(
            bodyContent,
            campaign.subject || ""
          ),

          coverImage: getCoverImage(
            bodyContent
          ),
        };
      })
    );

    cachedArticles = {
      data: fullArticles,
      timestamp: now,
    };

    return articleResponse(fullArticles);
  } catch (error) {
    console.error(
      "Failed to load feed:",
      error
    );

    return articleResponse(
      cachedArticles?.data || []
    );
  }
}

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function Index() {
  const { articles } =
    useLoaderData<typeof loader>();

  const [showModal, setShowModal] =
    useState(false);

  const [showStickyNav, setShowStickyNav] =
    useState(false);

  const headerImgRef =
    useRef<HTMLImageElement>(null);

  /* ---------------------------- SUBSCRIBE POPUP --------------------------- */

  useEffect(() => {
    const isSubscribed = localStorage.getItem(
      "thepoast_subscribed"
    );

    const hasSeenThisSession =
      sessionStorage.getItem(
        "thepoast_seen_session"
      );

    if (isSubscribed || hasSeenThisSession) {
      return;
    }

    const timer = window.setTimeout(() => {
      setShowModal(true);

      sessionStorage.setItem(
        "thepoast_seen_session",
        "true"
      );
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  /* ----------------------------- ESC TO CLOSE ----------------------------- */

  useEffect(() => {
    const handleEsc = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEsc
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEsc
      );
    };
  }, []);

  /* ------------------------------ STICKY NAV ------------------------------ */

  useEffect(() => {
    const headerImg =
      headerImgRef.current;

    if (!headerImg) {
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          setShowStickyNav(
            !entry.isIntersecting
          );
        },
        {
          threshold: 0,
          rootMargin:
            "-500px 0px 0px 0px",
        }
      );

    observer.observe(headerImg);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container">

      {/* STICKY SUBSCRIBE NAV */}
      <div
        className={`sticky-nav${
          showStickyNav ? " visible" : ""
        }`}
      >
        <img
          className="sticky-logo"
          src="/img/ja.png"
          alt="The Poast"
          loading="lazy"
          decoding="async"
        />

        <Link
          to="/subscribe"
          className="sticky-subscribe"
        >
          Subscribe
        </Link>
      </div>

      {/* POPUP MODAL */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={() =>
            setShowModal(false)
          }
        >
          <div
            className="modal-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <img
              src="/img/ja6.png"
              alt="The Poast"
              loading="eager"
              decoding="async"
            />

            <p>
              Trusted by 15,000+ execs and builders
            </p>

            <p>
              Scroll less. Know more.
            </p>

            <p>
              Just scroll The Poast for a daily fast
              feed of business-minded news.
            </p>

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

                <button
                  className="submit"
                  type="submit"
                >
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

              <input
                type="hidden"
                name="nonce"
              />
            </form>

            <button
              type="button"
              className="dismiss-text"
              onClick={() =>
                setShowModal(false)
              }
            >
              No thanks! I'm already subscribed
            </button>
          </div>
        </div>
      )}

      {/* HEADER SECTION */}
      <div className="header">

        <div className="nav">
          <img
            className="logo"
            src="/img/ja.png"
            alt="The Poast Logo"
            loading="eager"
            decoding="async"
          />

          <Link
            className="info"
            to="/info"
          >
            <img
              src="/img/social/info.png"
              alt="More Info"
              loading="lazy"
              decoding="async"
            />
          </Link>
        </div>

        <h1>
          Scroll less.
          <br />
          Know more.
        </h1>

        <h2>
          Every day, 15,000+ execs and builders scroll
          The Poast for a fast feed of business-minded
          news, posts, and snarky comments.
        </h2>

        <div className="outer-header">

          <div className="inner-header">
            <div className="social">

              <a
                className="x"
                href="https://x.com/thepoast"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/social/x.png"
                  alt="X (Twitter)"
                  loading="lazy"
                  decoding="async"
                />
              </a>

              <a
                className="ig"
                href="https://instagram.com/thepoast"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/social/instagram.png"
                  alt="Instagram"
                  loading="lazy"
                  decoding="async"
                />
              </a>

              <a
                className="li"
                href="https://linkedin.com/company/thepoast"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/social/linkedin.png"
                  alt="LinkedIn"
                  loading="lazy"
                  decoding="async"
                />
              </a>

              <a
                className="yt"
                href="https://youtube.com/@thepoast"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/social/youtube.png"
                  alt="YouTube"
                  loading="lazy"
                  decoding="async"
                />
              </a>

            </div>
          </div>

          <div className="inner-header2">
            <Link to="/subscribe">
              Subscribe
            </Link>
          </div>

        </div>

        <img
          ref={headerImgRef}
          className="headerimg"
          src="/img/ja6.png"
          alt="The Poast"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

      </div>

      {/* ARCHIVE FEED SECTION */}
      {articles.length > 0 && (
        <main className="feed-container">

          <h1>Past issues</h1>

          <p>
            Just scroll to read it for free
          </p>

          <section className="article-grid">
            {articles.map(
              (
                article: Article,
                index: number
              ) => (
                <Link
                  key={article.id}
                  to={`/articles/${article.id}`}
                  className="article-card-link"
                >
                  <article className="feed-card">

                    {article.coverImage && (
                      <div className="card-image-wrapper">
                        <img
                          src={article.coverImage}
                          alt={article.subject}
                          loading={
                            index < 3
                              ? "eager"
                              : "lazy"
                          }
                          decoding="async"
                        />
                      </div>
                    )}

                    <div className="card-content">

                      <span className="card-date">
                        {new Date(
                          article.date
                        ).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>

                      <h2 className="card-title">
                        {article.subject}
                      </h2>

                      <p className="card-excerpt">
                        {article.excerpt}
                      </p>

                    </div>

                  </article>
                </Link>
              )
            )}
          </section>

        </main>
      )}

    </div>
  );
}