import { useEffect, useRef, useState } from "react";
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
    title: "home - thepoast",
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
 * Hides the sticky top bar once the footer (with its own subscribe CTA)
 * scrolls into view. Increase the % in rootMargin to hide it sooner.
 */
function useHideTopbarNearFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { footerRef, hidden };
}

export default function Index() {
  const { footerRef, hidden } = useHideTopbarNearFooter();

  return (
    <div className="feed-page">
      <header className={`feed-topbar${hidden ? " is-hidden" : ""}`}>
        <Link className="feed-mark" to="/">
          <img
            src="/img/tp.png"
            alt="thepoast"
            decoding="async"
          />
        </Link>

        <a href="#subscribe" className="feed-subscribe">
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
            fallbackHeight={900}
          />
        </div>
      </main>

      <footer
        ref={footerRef}
        className="feed-footer"
        id="subscribe"
      >
        <form
          method="post"
          action="https://app.thepoast.com/subscription/form"
          className="feed-subscribe-form"
        >
          <div className="feed-header">Get thepoast</div>

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
          <div className="feed-legal">
            by submitting, you agree to our{" "}
            <Link to="/policies/terms">terms</Link>{" "}
            &amp;{" "}
            <Link to="/policies/privacy">privacy</Link>
            <div className="innerfeed-legal">
              <Link className="space" to="/about">about</Link>
              <Link className="space" to="/archive">archive</Link>
              <Link className="space" to="/submit-post">submit post</Link>
              <Link className="space" to="/partner">partner</Link>
              <Link className="space" to="/book">advertise</Link>
              <p className="copyright">thepoast © 2026</p>
            </div>
          </div>
        </form>
      </footer>
    </div>
  );
}