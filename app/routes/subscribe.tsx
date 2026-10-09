import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import Altcha from "../components/altcha";

export const meta: MetaFunction = () => {
  return {
    title: "subscribe - thepoast",
    description: "Get thepoast sent to inbox every day.",
  };
};

export default function Subscribe() {
  return (
    <div className="subscribe-page">
      <main className="subscribe-card">
        <Link
          to="/"
          className="subscribe-logo"
          aria-label="thepoast home"
        >
          <img
            src="/img/tp.png"
            alt="thepoast"
            decoding="async"
          />
        </Link>

      <footer
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

          {/* div, not p: a <div>/<p> inside a <p> is invalid HTML and
              causes hydration warnings */}
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

        <Link to="/" className="back-btn">
          ← Return to thepoast
        </Link>
      </main>
    </div>
  );
}