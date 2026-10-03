import { Link } from "@remix-run/react";
import type {
  HeadersFunction,
  LinksFunction,
} from "@remix-run/node";

import Altcha from "../components/altcha";
import FeedEmbed from "../components/feed-embed";

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

export default function Index() {
  return (
    <div className="feed-page">
      <header className="feed-topbar">
        <Link className="feed-mark" to="/">
          <img
            src="/img/tp.png"
            alt="The Poast"
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
        className="feed-footer"
        id="subscribe"
      >
        <form
          method="post"
          action="https://app.thepoast.com/subscription/form"
          className="feed-subscribe-form"
        >
          <p className="feed-subscribe-heading">
            Get The Poast for free
          </p>

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
            .
            <br />
            <br />
            <Link className="space" to="/about">About</Link>
            <Link className="space" to="/archive">Archive</Link>
            <Link className="space" to="/submit-post">Submit Post</Link>
            <Link className="space" to="/media-kit">Media Kit</Link>
            <Link className="space" to="/partner">Partner</Link>
            <Link className="space" to="/book">Advertise</Link>
          </p>
        </form>
      </footer>
    </div>
  );
}