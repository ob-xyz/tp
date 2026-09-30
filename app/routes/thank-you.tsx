import type { HeadersFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=60, s-maxage=120, stale-while-revalidate=600",
});

export default function AdvertiseSuccess() {
  return (
    <div className="feed-page ad-booking-page">
      <main className="ad-booking-card ad-success-card">
        <div className="ad-success-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <div className="ad-booking-header">
          <h1 className="ad-booking-title">Booking Request Received!</h1>
          <p className="ad-booking-sub">
            Thanks for reaching out to partner with The Poast. We’ve received your campaign details and will get back to you within 24 hours.
          </p>
        </div>

        <div className="ad-success-steps">
          <div className="step-item">
            <span className="step-num">1</span>
            <div className="step-content">
              <strong>Review &amp; Date Confirmation</strong>
              <p>We’ll verify availability for your target run date and review your copy requirements.</p>
            </div>
          </div>

          <div className="step-item">
            <span className="step-num">2</span>
            <div className="step-content">
              <strong>Ad Preview &amp; Invoice</strong>
              <p>We’ll send over a preview proof of your ad layout along with a direct checkout link.</p>
            </div>
          </div>
        </div>

        <Link to="/" className="back-btn">
        ← Return to The Poast
        </Link>
      </main>
    </div>
  );
}