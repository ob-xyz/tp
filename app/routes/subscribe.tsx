import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useRef, useEffect } from "react";

import FeedTopbar from "~/components/feed-topbar";
import FeedFooter from "~/components/feed-footer";
import Altcha from "~/components/altcha";

export const meta: MetaFunction = () => {
  return {
    title: "Subscribe / thepoast",
    description: "Get thepoast sent to your inbox every day.",
  };
};

export default function Subscribe() {
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <div className="subscribe-page feed-page">
      <FeedTopbar showSubscribe={false} />

      <main className="subscribe-card-wrap">
        <div className="subscribe-card">
          <h1 className="subscribe-title">Get The Poast</h1>
          <p className="subscribe-sub">
            Get the top stories from across the business world delivered to your inbox daily.
          </p>

          <form
            method="post"
            action="https://app.thepoast.com/subscription/form"
            className="subscribe-form"
          >
            <div className="subscribe-input-bar">
              <input
                className="subscribe-input email-input"
                type="email"
                name="email"
                required
                ref={emailRef}
                placeholder="Email Address *"
              />
              <button className="subscribe-submit" type="submit">
                Subscribe
              </button>
            </div>

            <div className="subscribe-altcha">
              <Altcha />
            </div>

            <input
              id="6d48f"
              type="hidden"
              name="l"
              value="6d48fffe-7d37-4c14-b317-3e4cda33a647"
            />
            <input type="hidden" name="nonce" />

            <div className="feed-legal">
              By submitting, you agree to our{" "}
              <Link to="/policies/terms">terms</Link> &amp;{" "}
              <Link to="/policies/privacy">privacy</Link>
            </div>
          </form>

          <Link to="/" className="back-btn">
            ← Back to thepoast
          </Link>
        </div>
      </main>

      <FeedFooter />
    </div>
  );
}