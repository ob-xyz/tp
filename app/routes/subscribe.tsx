import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import Altcha from "../components/altcha";

export const meta: MetaFunction = () => {
  return {
    title: "Subscribe : The Poast",
    description: "Get caught up right here, right now.",
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

        <h1 className="subscribe-title">
          Get The Poast for free
        </h1>

        <p className="subscribe-sub">
          Get caught up right here, right now.
        </p>

        <form
          method="post"
          action="https://app.thepoast.com/subscription/form"
          className="subscribe-form"
        >
          <div className="subscribe-input-bar">
            <label
              htmlFor="subscribe-email"
              className="sr-only"
            >
              Email address
            </label>

            <input
              id="subscribe-email"
              className="subscribe-input"
              type="email"
              name="email"
              required
              autoComplete="email"
              inputMode="email"
              placeholder="Email Address *"
            />

            <button
              className="subscribe-submit"
              type="submit"
            >
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

          <input
            type="hidden"
            name="nonce"
          />

          <p className="subscribe-legal">
            By submitting, you agree to our{" "}
            <Link to="/policies/terms">
              Terms
            </Link>{" "}
            &amp;{" "}
            <Link to="/policies/privacy">
              Privacy Policy
            </Link>
            .
            <br />
            <br />
            <Link to="/submit-post">Submit Post</Link>
            {" · "}
            <Link to="/read-more">Read More</Link>
            {" · "}
            <Link to="/book">Advertise</Link>
            {" · "}
            <Link to="/media-kit">Media Kit</Link>
            {" · "}
            <Link to="/about">About</Link>
          </p>
        </form>

        <Link to="/" className="back-btn">
          ← Return to The Poast
        </Link>
      </main>
    </div>
  );
}