import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import FeedTopbar from "~/components/feed-topbar";
import FeedFooter from "~/components/feed-footer";
import FeedSubscribeBanner from "~/components/feed-subscribe-banner";

export const meta: MetaFunction = () => {
  return {
    title: "About / thepoast",
    description: "Learn more about thepoast.",
  };
};

const AUDIENCE = [
  "Founders",
  "Executives",
  "Builders",
];

const PRINCIPLES = [
  {
    title: "Read it for free",
    body: "Read it every day at thepoast.com",
  },
  {
    title: "Subscribe for free",
    body: "Get it in your inbox daily",
  },
  {
    title: "Submit a post",
    body: "Wanna submit a post? Just send it our way",
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

      setReached(
        window.scrollY > 0 &&
          top <= window.innerHeight * BANNER_TRIGGER,
      );
    };

    const schedule = () => {
      if (!frame) {
        frame = requestAnimationFrame(check);
      }
    };

    window.addEventListener("scroll", schedule, {
      passive: true,
    });

    window.addEventListener("resize", schedule);

    let resizeObserver: ResizeObserver | undefined;

    if (
      typeof ResizeObserver !== "undefined" &&
      element.parentElement
    ) {
      resizeObserver = new ResizeObserver(schedule);
      resizeObserver.observe(element.parentElement);
    }

    check();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);

      resizeObserver?.disconnect();

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return {
    endRef,
    reached,
  };
}

export default function About() {
  const { endRef, reached } = useReachedEndOfPage();

  const [forced, setForced] = useState(false);

  const footerRef = useRef<HTMLElement>(null);
  const previousReached = useRef(false);

  const bannerVisible = reached || forced;

  useEffect(() => {
    if (previousReached.current && !reached) {
      setForced(false);
    }

    previousReached.current = reached;
  }, [reached]);

  const handleTopbarSubscribe = (
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();

    setForced(true);

    footerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  return (
    <div className="feed-page ad-booking-page about-page">
      <FeedTopbar
        hidden={reached}
        onSubscribe={handleTopbarSubscribe}
      />

      <main className="ad-booking-card about-card">
        <div className="ad-booking-header">
          <div className="ad-badge">
            About Us
          </div>
        </div>

        <section
          className="about-section"
          aria-labelledby="about-what"
        >
          <h2
            className="about-section-title"
            id="about-what"
          >
            What's thepoast?
          </h2>

          <p className="about-text">
            We're a daily feed of snarky comments and posts from
            across the business world.
          </p>
        </section>

        <section
          className="about-section"
          aria-labelledby="about-who"
        >
          <h2
            className="about-section-title"
            id="about-who"
          >
            Who reads it?
          </h2>

          <p className="about-text">
            We're frequently read by people who like to get things
            done.
          </p>

          <div className="about-chips">
            {AUDIENCE.map((group) => (
              <span
                className="about-chip"
                key={group}
              >
                {group}
              </span>
            ))}
          </div>
        </section>

        <section
          className="about-section"
          aria-labelledby="about-expect"
        >
          <h2
            className="about-section-title"
            id="about-expect"
          >
            What to expect
          </h2>

          <div className="about-grid">
            {PRINCIPLES.map((item) => (
              <article
                className="about-item"
                key={item.title}
              >
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="about-cta">
          <Link
            to="/"
            className="about-btn"
          >
            Return to thepoast
          </Link>

          <Link
            to="/book"
            className="back-btn"
          >
            Advertise with us
          </Link>
        </div>

        <div
          ref={endRef}
          className="feed-end-marker"
          aria-hidden="true"
        />
      </main>

      <div ref={footerRef}>
        <FeedFooter covered={bannerVisible} />
      </div>

      <FeedSubscribeBanner
        visible={bannerVisible}
      />
    </div>
  );
}