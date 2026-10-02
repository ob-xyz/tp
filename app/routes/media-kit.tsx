import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import subscribeStyles from "~/style/scss/subscribe.css";
import bookStyles from "~/style/scss/book.css";
import mediaKitStyles from "~/style/scss/media-kit.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: subscribeStyles },
  { rel: "stylesheet", href: bookStyles },
  { rel: "stylesheet", href: mediaKitStyles },
];

export const meta: MetaFunction = () => {
  return {
    title: "Media Kit : The Poast",
    description: "Who reads The Poast and how to reach them.",
  };
};

/* -------------------------------------------------------------------------- */
/*   EDIT THIS SECTION: replace the placeholders with your real numbers.      */
/*   Only publish figures you can back up; advertisers will ask.              */
/* -------------------------------------------------------------------------- */

const STATS = [
  { value: "25,500", label: "Subscribers" },
  { value: "36.6%", label: "Average open rate" },
  { value: "2.2%", label: "Average click rate" },
  { value: "30", label: "Issues per month" },
];

const AUDIENCE = ["Founders", "Executives", "Builders", "Investors", "Marketers"];

const FORMATS = [
  {
    title: "Sponsored placement",
    body: "Your message placed inside the issue, written to fit the format readers already know.",
  },
  {
    title: "Existing social ads",
    body: "Bring an ad that's already performing on social and we'll adapt it for our audience.",
  },
  {
    title: "Custom campaign",
    body: "Multi-issue or multi-channel plans built around your launch or goal.",
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
            alt="The Poast"
            loading="eager"
            decoding="async"
          />
        </Link>

        <Link to="/subscribe" className="feed-subscribe">
          Subscribe
        </Link>
      </header>

      <main className="ad-booking-card mk-card">
        <div className="ad-booking-header">
          <h1 className="ad-booking-title">The Poast</h1>
          <p className="ad-booking-sub">
            Frequently read by people who like to get stuff done
          </p>
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
            Ways to advertise
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
            About The Poast
          </Link>
        </div>
      </main>
    </div>
  );
}