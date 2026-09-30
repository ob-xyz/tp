import type { HeadersFunction } from "@remix-run/node";
import { Link, Form } from "@remix-run/react";
import Altcha from "~/components/altcha";

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=60, s-maxage=120, stale-while-revalidate=600",
});

export default function Advertise() {
  return (
    <div className="feed-page ad-booking-page">
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

      <main className="ad-booking-card">
        {/* Main Heading & Subtitle using Site-Wide Typography */}
        <div className="ad-booking-header">
          <h1 className="ad-booking-title">Advertise with us</h1>
          <p className="ad-booking-sub">
            Try new or existing ads already running on social. Reach an engaged audience of founders, execs, and builders today.
          </p>
        </div>

        <Form method="post" className="ad-booking-form">
          {/* Contact Details */}
          <div className="form-group-row">
            <div className="form-field">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                required
                placeholder="Your Company Name *"
              />
            </div>

            <div className="form-field">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                required
                placeholder="https://company.com"
              />
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-field">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Alex Smith"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Work Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="alex@company.com"
              />
            </div>
          </div>

          {/* Campaign Details */}
          <div className="form-group-row">
            <div className="form-field">
              <label htmlFor="targetDate">Start Date</label>
              <input
                type="date"
                id="targetDate"
                name="targetDate"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="budget">Ad Budget</label>
              <select id="budget" name="budget" defaultValue="">
                <option value="" disabled>
                  Select range...
                </option>
                <option value="1,000-10,000">$1,000 – $10,000</option>
                <option value="10,000-50,000">$10,000 – $50,000</option>
                <option value="50,000-100,000">$50,000 – $100,000</option>
                <option value="100,000+">$100,000+</option>
              </select>
            </div>
          </div>

          {/* Campaign Goals / Notes */}
          <div className="form-field full-width">
            <label htmlFor="notes">Campaign Details &amp; Goals</label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Paste a link to an existing campaign running on social media."
            />
          </div>

          {/* Verification Widget */}
          <div className="subscribe-altcha">
            <Altcha />
          </div>

          <button type="submit" className="ad-submit-btn">
            Submit Booking Request
          </button>

          <p className="subscribe-legal ad-legal">
            We review all inquiries within 24 hours. By submitting, you agree to our{" "}
            <Link to="/policies/terms">Terms</Link> &amp;{" "}
            <Link to="/policies/privacy">Privacy Policy</Link>.
          </p>
        </Form>
      </main>
    </div>
  );
}