import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => ({
  title: "request received - thepoast",
  robots: "noindex",
});

export default function ThankYou() {
  return (
    <div className="feed-page ad-booking-page">
      <header className="feed-topbar">
        <Link className="feed-mark" to="/" aria-label="Return to thepoast homepage">
          <img src="/img/tp.png" alt="thepoast" decoding="async" />
        </Link>
      </header>

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
            Thanks for your interest in advertising with thepoast.
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
          ← Return to thepoast
        </Link>
      </main>
    </div>
  );
}