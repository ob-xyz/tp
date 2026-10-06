import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import Altcha from "../components/altcha";

export const meta: MetaFunction = () => {
  return {
    title: "Subscribe : The Poast",
    description: "We find everything worth seeing and bring it to you every day.",
  };
};

export default function Subscribe() {
  return (
    <div className="subscribe-page">
      <main className="subscribe-card">
        <Link
          to="/"
          className="subscribe-logo"
          aria-label="The Poast home"
        >
          <img
            src="/img/tp.png"
            alt="The Poast"
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

        <Link to="/" className="back-btn">
          ← Return to The Poast
        </Link>
      </main>
    </div>
  );
}