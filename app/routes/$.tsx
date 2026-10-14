import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Link } from "@remix-run/react";
import type {
  HeadersFunction,
  LinksFunction,
  MetaFunction
} from "@remix-run/node";

import FeedTopbar from "../components/feed-topbar";
import FeedFooter from "../components/feed-footer";
import FeedSubscribeBanner from "../components/feed-subscribe-banner";
import FeedEmbed, { getCachedHeight } from "../components/feed-embed";

export const meta: MetaFunction = () => ({
  title: "404 / thepoast",
  robots: "noindex",
});

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

export const headers: HeadersFunction = () => ({
  "Cache-Control":
    "public, max-age=30, s-maxage=60, stale-while-revalidate=300",
});

const BANNER_TRIGGER = 0.75;

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

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined" && element.parentElement) {
      resizeObserver = new ResizeObserver(schedule);
      resizeObserver.observe(element.parentElement);
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

export default function NotFound() {
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
    <div className="feed-page">
      <FeedTopbar 
        hidden={reached} 
        onSubscribe={handleTopbarSubscribe}
        leftContent={
          <div className="feed-status">
            <span className="status-dot" />
            404 Error
          </div>
        }
      />

      <main className="feed-stream">
        <div className="feed-embed loaded">
          <FeedEmbed
            id="live"
            src="/live"
            title="Today's Edition"
            interactive
            bordered
            hideTopBorder
            fallbackHeight={900}
          />
        </div>

        <div ref={endRef} className="feed-end-marker" aria-hidden="true" />
      </main>

      <div ref={footerRef}>
        <FeedFooter covered={bannerVisible} />
      </div>

      <FeedSubscribeBanner visible={bannerVisible} forceExpanded={expandBanner} />
    </div>
  );
}