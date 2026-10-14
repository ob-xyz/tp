import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Link } from "@remix-run/react";
import type {
  HeadersFunction,
  LinksFunction,
  MetaFunction
} from "@remix-run/node";

import Altcha from "../components/altcha";
import FeedEmbed from "../components/feed-embed";

export const meta: MetaFunction = () => {
  return {
    title: "thepoast",
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

export const headers: HeadersFunction = () => ({
  "Cache-Control":
    "public, max-age=30, s-maxage=60, stale-while-revalidate=300",
});

/**
 * How far down the screen the end of the feed has to get before the banner
 * slides up. 0.85 = once the end of the feed is within the bottom 15% of the
 * viewport. Lower it (e.g. 0.6) to trigger later, raise it (e.g. 1) to
 * trigger the moment the end of the feed appears.
 */
const BANNER_TRIGGER = .85;

/**
 * Watches an invisible marker placed right after the feed (i.e. right after
 * the iframe's "You're all caught up"). Once the reader has scrolled to or
 * past it, `reached` flips to true. Scrolling back up flips it back.
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
        window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER,
      );
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    // The iframe resizes itself as the feed loads, which moves the marker
    // without any scrolling, so re-check when the layout changes too.
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

export default function Index() {
  const { endRef, reached } = useReachedEndOfFeed();
  const [expanded, setExpanded] = useState(false);
  // True when the reader tapped the top bar's Subscribe (banner opens right away)
  const [forced, setForced] = useState(false);

  const footerRef = useRef<HTMLElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const prevReached = useRef(false);

  const bannerVisible = reached || forced;

  // If the reader scrolls back up out of the end zone, release the forced state
  useEffect(() => {
    if (prevReached.current && !reached) setForced(false);
    prevReached.current = reached;
  }, [reached]);

  // Put the cursor in the email field as soon as the form appears
  useEffect(() => {
    if (expanded) emailRef.current?.focus({ preventScroll: true });
  }, [expanded]);

  // Top bar Subscribe: open the email form, raise the banner, glide to the end
  const handleTopbarSubscribe = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setExpanded(true);
    setForced(true);
    footerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div className="feed-page">
      {/* Sticky top bar hides while the bottom banner is up (both are CTAs) */}
      <header className={`feed-topbar${reached ? " is-hidden" : ""}`}>
        <Link className="feed-mark" to="/">
          <img
            src="/img/tp.png"
            alt="thepoast"
            decoding="async"
          />
        </Link>

        <a
          className="feed-subscribe"
          onClick={handleTopbarSubscribe}
        >
          Subscribe
        </a>
      </header>

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

        {/* Marker for the end of the feed ("You're all caught up") */}
        <div ref={endRef} className="feed-end-marker" aria-hidden="true" />

              {/* Fades out as the banner rises over it */}
      <footer
        ref={footerRef}
        className={`feed-footer${bannerVisible ? " is-covered" : ""}`}
      >
        <div className="feed-footer-links">
          <Link to="/about">about</Link>
          <Link to="/archive">archive</Link>
          <Link to="/partner">partner</Link>
          <Link to="/policies/privacy">privacy</Link>
          <Link to="/policies/terms">terms</Link>
          <Link to="/book">advertise</Link>
          <Link to="/submit-post">submit post</Link>
        </div>
        <p className="feed-copyright">thepoast © 2026</p>
      </footer>

      {/* Bottom sheet banner, slides up after the end of the feed */}
      <aside
        className={`feed-banner${bannerVisible ? " is-visible" : ""}`}
        aria-label="Subscribe to thepoast"
        aria-hidden={!bannerVisible}
      >
        <div className="feed-banner-inner">
          <div className="feed-banner-title">Get The Poast for free</div>

          {!expanded ? (
            <button
              type="button"
              className="feed-banner-btn"
              onClick={() => setExpanded(true)}
            >
              Subscribe
            </button>
          ) : (
            <form
              method="post"
              action="https://app.thepoast.com/subscription/form"
              className="feed-banner-form"
            >
              <div className="feed-input-bar">
                <input
                  className="feed-input email-input"
                  type="email"
                  name="email"
                  required
                  ref={emailRef}
                  placeholder="Email Address *"
                />

                <button className="feed-submit" type="submit">
                  Subscribe
                </button>
              </div>

              {/* Fixed two-column row: the legal text never shifts when
                  the checkbox flips to "Verified" */}
              <div className="feed-verify-row">
                <div className="feed-altcha-wrap">
                  <Altcha />
                </div>

                <div className="feed-legal">
                  By submitting, you agree to our{" "}
                  <Link to="/policies/terms">terms</Link> &amp;{" "}
                  <Link to="/policies/privacy">privacy</Link>
                </div>
              </div>

              <input
                id="6d48f"
                type="hidden"
                name="l"
                value="6d48fffe-7d37-4c14-b317-3e4cda33a647"
              />

              <input type="hidden" name="nonce" />
            </form>
          )}
        </div>
      </aside>
      </main>
    </div>
  );
}