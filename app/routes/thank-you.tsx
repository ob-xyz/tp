import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import subscribeStyles from "~/style/scss/subscribe.css";
// NOTE: adjust this path if your compiled book.scss lives somewhere else.
import bookStyles from "~/style/scss/book.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: subscribeStyles },
  { rel: "stylesheet", href: bookStyles },
];

export default function ThankYou() {
  return (
    <div className="feed-page ad-booking-page">
      <main className="ad-booking-card ad-success-card">
        <div className="ad-success-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <div className="ad-booking-header">
          <h1 className="ad-booking-title">Request received</h1>
          <p className="ad-booking-sub">
            Thanks for your interest in advertising with The Poast.
          </p>
        </div>

        <div className="ad-success-steps">
          <div className="step-item">
            <span className="step-num">1</span>
            <div className="step-content">
              <strong>We review your request</strong>
              <p>Our team looks at every inquiry within 24 hours.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">2</span>
            <div className="step-content">
              <strong>We reach out by email</strong>
              <p>Expect a note with availability, pricing, and next steps.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">3</span>
            <div className="step-content">
              <strong>Your campaign goes live</strong>
              <p>Once creative is approved, we schedule your start date.</p>
            </div>
          </div>
        </div>

        <Link to="/" className="back-btn ad-success-btn">
          ← Return to The Poast
        </Link>
      </main>
    </div>
  );
}