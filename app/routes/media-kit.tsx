import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import FeedTopbar from "~/components/feed-topbar";
import FeedFooter from "~/components/feed-footer";
import FeedSubscribeBanner from "~/components/feed-subscribe-banner";

export const meta: MetaFunction = () => {
  return {
    title: "Media kit / thepoast",
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
    title: "Repurpose campaigns from social media",
    body: "Already running ads? Repurpose one of them in thepoast.",
  },
  {
    title: "Link to your landing page",
    body: "Avoid in-app browsers and get every link click landing on your page.",
  },
    {
    title: "Track and measure every ad",
    body: "Track and measure every ad with your own UTM link, or we can do it for you.",
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
  const [forced, setForced] = useState(false);
  const [expandBanner, setExpandBanner] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const previousReached = useRef(false);

  const bannerVisible = reached || forced;

  useEffect(() => {
    if (previousReached.current && !reached) {
      setForced(false);
      setExpandBanner(false);
    }
    previousReached.current = reached;
  }, [reached]);

  const handleTopbarSubscribe = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setForced(true);
    setExpandBanner(true);
    footerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div className="feed-page ad-booking-page mk-page">
      <FeedTopbar hidden={reached} onSubscribe={handleTopbarSubscribe} />

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
            Why advertise with us?
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

        <Link to="/manager" className="back-btn">
          ← Return to Campaign Manager
        </Link>

        <div ref={endRef} className="feed-end-marker" aria-hidden="true" />
      </main>

      <div ref={footerRef}>
        <FeedFooter covered={bannerVisible} />
      </div>

      <FeedSubscribeBanner visible={bannerVisible} forceExpanded={expandBanner} />
    </div>
  );
}