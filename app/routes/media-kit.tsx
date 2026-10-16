import type { MetaFunction } from "@remix-run/node";
import { Link, PrefetchPageLinks, useNavigate } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

import { MEDIA_KIT } from "~/components/media-kit";

export const meta: MetaFunction = () => {
  return {
    title: "Media kit / thepoast",
    description: "Find out who reads thepoast.",
  };
};

const STATS = [
  { value: "27k+", label: "Email subscribers" },
  { value: "70k+", label: "Weekly readers" },
  { value: "36%", label: "Average open rate" },
  { value: "30k+", label: "Monthly web visitors" },
];

const AUDIENCE = ["Founders", "Executives", "Builders", "Investors", "Marketers"];

const FORMATS = [
  {
    title: "Repurpose campaigns from social media",
    body: "Already running ads? Repurpose one of them in thepoast.",
  },
  {
    title: "Link to your landing page",
    body: "Avoid in-app browsers and get every link click landing on your page.",
  },
  {
    title: "Track and measure your ads",
    body: "Track and measure ads using your own UTM link, or we'll give you one.",
  },
];

const STEPS = [
  {
    title: "Send a booking request",
    body: "Tell us about your company, start date, budget, and any ads you're already running.",
  },
  {
    title: "We reply within 48 hours",
    body: "You'll get availability, options, and next steps by email.",
  },
  {
    title: "Approve and launch",
    body: "Once creative is approved, your campaign goes live on your start date.",
  },
];

const PARTNER_PATH = "/partner";
const BANNER_TRIGGER = 0.75;

function useReachedEndOfPage() {
  const endRef = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const element = endRef.current;
    if (!element) return;

    let frame = 0;
    const check = () => {
      frame = 0;
      const top = element.getBoundingClientRect().top;
      setReached(window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined" && element.parentElement) {
      resizeObserver = new ResizeObserver(schedule);
      resizeObserver.observe(element.parentElement);
    }

    check();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resizeObserver?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return { endRef, reached };
}

export default function MediaKit() {
  const { endRef, reached } = useReachedEndOfPage();
  const navigate = useNavigate();

  return (
    <div className="feed-page ad-booking-page mk-page">
      {/* Warm the /partner route so Get Started feels instant */}
      <PrefetchPageLinks page={PARTNER_PATH} />

      <header className={`feed-topbar${reached ? " is-hidden" : ""}`}>
        <Link className="feed-mark" to="/">
          <img src="/img/tp.png" alt="thepoast" decoding="async" />
        </Link>

        <Link className="feed-subscribe" to={PARTNER_PATH} prefetch="intent">
          Get Started
        </Link>
      </header>

      <main className="ad-booking-card mk-card">
        <div className="ad-booking-header">
          <div className="ad-badge">Media Kit</div>
        </div>

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

        <section className="mk-section" aria-labelledby="mk-formats-title">
          <h2 className="mk-section-title" id="mk-formats-title">
            Advertise with us
          </h2>
          <div className="mk-formats">
            {FORMATS.map((format) => (
              <article className="mk-format" key={format.title}>
                <h3>{format.title}</h3>
                <p>{format.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mk-section" aria-labelledby="mk-pricing-title">
          <h2 className="mk-section-title" id="mk-pricing-title">
            Pricing
          </h2>
          <div className="mk-tiers">
            {MEDIA_KIT.placements.map((placement) => (
              <article className="mk-tier" key={placement.name}>
                <h3 className="mk-tier-name">{placement.name}</h3>
                <p className="mk-tier-note">{placement.note}</p>
                <div className="mk-tier-cost">
                  <span className="mk-tier-price">{placement.price}</span>
                  <span className="mk-tier-unit">{MEDIA_KIT.priceUnit}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

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

        <div ref={endRef} className="feed-end-marker" aria-hidden="true" />
      </main>

      <footer className={`feed-footer${reached ? " is-covered" : ""}`}>
        <div className="feed-footer-links">
          <Link to="/about">about</Link>
          <Link to="/archive">archive</Link>
          <Link to="/submit-post">submit post</Link>
          <Link to="/policies/privacy">privacy</Link>
          <Link to="/policies/terms">terms</Link>
          <Link to="/book">advertise</Link>
          <Link to="/manager">ads manager</Link>
        </div>
        <p className="feed-copyright">thepoast © 2026</p>
      </footer>

      <aside
        className={`feed-banner${reached ? " is-visible" : ""}`}
        aria-label="Get Started"
        aria-hidden={!reached}
      >
        <div className="feed-banner-inner">
          <div className="feed-banner-title">
            Better business performance, fueled by AI
          </div>

          <button
            type="button"
            className="feed-banner-btn"
            tabIndex={reached ? 0 : -1}
            onClick={() => navigate(PARTNER_PATH)}
          >
            Get Started
          </button>
        </div>
      </aside>
    </div>
  );
}