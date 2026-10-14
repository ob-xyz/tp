import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Link, useCatch, useLoaderData } from "@remix-run/react";
import {
  json,
  type HeadersFunction,
  type LinksFunction,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";

import FeedTopbar from "../../components/feed-topbar";
import FeedFooter from "../../components/feed-footer";
import FeedSubscribeBanner from "../../components/feed-subscribe-banner";
import FeedEmbed from "../../components/feed-embed";

export const meta: MetaFunction = () => {
  return {
    title: "Issue / thepoast",
  };
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" },
];

export const headers: HeadersFunction = () => ({
  "Cache-Control":
    "public, max-age=30, s-maxage=60, stale-while-revalidate=300",
});

const BANNER_TRIGGER = 0.85;

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.id;

  if (!id || !/^\d+$/.test(id)) {
    throw new Response("Bad campaign ID", { status: 400 });
  }

  return json({ id });
}

/**
 * Watches an invisible marker placed right after the issue. Once the reader
 * has scrolled to or past it, `reached` flips to true. Scrolling back up
 * flips it back.
 */
function useReachedEndOfFeed() {
  const endRef = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const el = endRef.current;
    if (!el) return;

    let frame = 0;

    const check = () => {
      frame = 0;
      const top = el.getBoundingClientRect().top;
      // scrollY guard: never pop the banner before the reader has scrolled
      setReached(
        window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER
      );
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    // The iframe resizes itself as the issue loads, which moves the marker
    // without any scrolling, so re-check when layout changes too.
    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined" && el.parentElement) {
      resizeObserver = new ResizeObserver(schedule);
      resizeObserver.observe(el.parentElement);
    }

    check();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resizeObserver?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return { endRef, reached };
}

export default function ArchiveIssue() {
  const { id } = useLoaderData<typeof loader>();

  const { endRef, reached } = useReachedEndOfFeed();
  const [forced, setForced] = useState(false);
  const [expandBanner, setExpandBanner] = useState(false);

  const footerRef = useRef<HTMLDivElement>(null);
  const previousReached = useRef(false);

  const bannerVisible = reached || forced;

  // Scrolling back up out of the end zone releases the forced state
  useEffect(() => {
    if (previousReached.current && !reached) {
      setForced(false);
      setExpandBanner(false);
    }
    previousReached.current = reached;
  }, [reached]);

  // Top bar Subscribe: open the email form, raise the banner, glide to the end
  const handleTopbarSubscribe = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setForced(true);
    setExpandBanner(true);
    footerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div className="feed-page">
      <FeedTopbar
        hidden={reached}
        onSubscribe={handleTopbarSubscribe}
      />

      <main className="feed-stream">
        <div className="feed-embed loaded">
          <FeedEmbed
            id={id}
            src={`/feeds/full/${id}`}
            title={`Issue ${id}`}
            interactive
            bordered
            hideTopBorder
            fallbackHeight={900}
          />
        </div>

        {/* Marker for the end of the issue */}
        <div ref={endRef} className="feed-end-marker" aria-hidden="true" />
      </main>

      <div ref={footerRef}>
        <FeedFooter covered={bannerVisible} />
      </div>

      <FeedSubscribeBanner
        visible={bannerVisible}
        forceExpanded={expandBanner}
      />
    </div>
  );
}

/**
 * Remix v1: handles the thrown 400 Response from the loader.
 */
export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div className="feed-page">
      <FeedTopbar showSubscribe={false} />

      <main className="feed-stream">
        <section className="feeds-empty">
          <p>
            {caught.status === 400
              ? "That issue link doesn't look right."
              : "This issue isn't available right now."}
          </p>
          <p>
            <Link to="/archive">← Back to the archive</Link>
          </p>
        </section>
      </main>

      <FeedFooter />
    </div>
  );
}