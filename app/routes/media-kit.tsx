import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import Altcha from "~/components/altcha";

export const meta: MetaFunction = () => {
  return {
    title: "media kit - thepoast",
    description: "Find out who reads thepoast.",
  };
};
const STATS = [
  { value: "27k+", label: "Email subscribers" },
  { value: "10k+", label: "Daily readers" },
  { value: "30k+", label: "Monthly web visitors" },
  { value: "36%", label: "Average open rate" },
];

const AUDIENCE = ["Founders", "Executives", "Builders", "Investors", "Marketers"];

const FORMATS = [
  {
    title: "Full creative control",
    body: "It's your ad, run your way. Use images, videos, or plain-jane text to find your next customer.",
  },
  {
    title: "Link clicks that land",
    body: "Every ad click lands on your landing page, not some pesky in-app browser.",
  },
  {
    title: "Use existing campaigns",
    body: "Already have a proven ad that works? Run it in thepoast. Measure its performance.",
  },
];

const STEPS = [
  {
    title: "Send a booking request",
    body: "Tell us about your company, start date, budget, and any ads you're already running.",
  },
  {
    title: "We reply within 24 hours",
    body: "You'll get availability, options, and next steps by email.",
  },
  {
    title: "Approve and launch",
    body: "Once creative is approved, your campaign goes live on your start date.",
  },
];

export default function MediaKit() {
  return (
    <div className="feed-page ad-booking-page mk-page">
      <header className="feed-topbar">
        <Link className="feed-mark" to="/">
          <img
            src="/img/tp.png"
            alt="thepoast"
            loading="eager"
            decoding="async"
          />
        </Link>

        <Link to="#subscribe" className="feed-subscribe">
          Subscribe
        </Link>
      </header>

      <main className="ad-booking-card mk-card">
        <div className="ad-booking-header">
          <div className="ad-badge">Media Kit</div>
        </div>

        {/* By the numbers */}
        <section className="mk-section" aria-labelledby="mk-stats-title">
          <h2 className="mk-section-title" id="mk-stats-title">
            By the numbers
          </h2>
          <div className="mk-stats">
            {STATS.map((stat) => (
              <div className="mk-stat" key={stat.label}>
                <span className="mk-stat-value">{stat.value}</span>
                <span className="mk-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Audience */}
        <section className="mk-section" aria-labelledby="mk-audience-title">
          <h2 className="mk-section-title" id="mk-audience-title">
            Who reads us
          </h2>
          <div className="mk-chips">
            {AUDIENCE.map((group) => (
              <span className="mk-chip" key={group}>
                {group}
              </span>
            ))}
          </div>
        </section>

        {/* Formats */}
        <section className="mk-section" aria-labelledby="mk-formats-title">
          <h2 className="mk-section-title" id="mk-formats-title">
            Why advertise with us?
          </h2>
          <div className="mk-formats">
            {FORMATS.map((format) => (
              <article className="mk-format" key={format.title}>
                <h3>{format.title}</h3>
                <p>{format.body}</p>
                <span className="mk-format-note">{format.note}</span>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mk-section" aria-labelledby="mk-steps-title">
          <h2 className="mk-section-title" id="mk-steps-title">
            How it works
          </h2>
          <div className="ad-success-steps">
            {STEPS.map((step, i) => (
              <div className="step-item" key={step.title}>
                <span className="step-num">{i + 1}</span>
                <div className="step-content">
                  <strong>{step.title}</strong>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mk-cta">
          {/* Change "/book" if your booking page lives at a different URL */}
          <Link to="/book" className="mk-btn">
            Advertise with us
          </Link>
          <Link to="/about" className="back-btn">
            About thepoast
          </Link>
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
    </div>
  );
}