import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Altcha from "../components/altcha";
import logo from "~/../public/img/tp.png";
import subscribeStyles from "~/style/scss/subscribe.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: subscribeStyles },
];

export const meta: MetaFunction = () => ({
  title: "Subscribe : The Poast",
  description:
    "Get caught up right here, right now.",
});

export default function Subscribe() {
  return (
    <div className="subscribe-page">
      <main className="subscribe-card">
        <Link to="/" className="subscribe-logo" aria-label="The Poast home">
          <img src={logo} alt="The Poast" />
        </Link>

        <h1 className="subscribe-title">Get The Poast for free</h1>
        <p className="subscribe-sub">
          Get caught up right here, right now.
        </p>

        <form
          method="post"
          action="https://app.thepoast.com/subscription/form"
          className="subscribe-form"
        >
          <div className="subscribe-input-bar">
            <label htmlFor="subscribe-email" className="sr-only">
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

          <p className="subscribe-legal">
            By submitting, you agree to our{" "}
            <Link className="sm" to="/policies/terms">Terms</Link> &amp;{" "}
            <Link className="sm" to="/policies/privacy">Privacy Policy</Link>.
          </p>
        </form>

        <Link to="/" className="subscribe-back">
          Read today&rsquo;s edition first &rarr;
        </Link>
      </main>
    </div>
  );
}