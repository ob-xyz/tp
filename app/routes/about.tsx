import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import Altcha from "~/components/altcha";

export const meta: MetaFunction = () => {
  return {
    title: "About - The Poast",
    description: "Learn more about The Poast.",
  };
};

const AUDIENCE = ["Founders", "Executives", "Builders"];

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

export default function About() {
  return (
    <div className="feed-page ad-booking-page about-page">
      <header className="feed-topbar">
        <Link className="feed-mark" to="/">
          <img
            src="/img/tp.png"
            alt="The Poast"
            loading="eager"
            decoding="async"
          />
        </Link>

        <Link to="#subscribe" className="feed-subscribe">
          Subscribe
        </Link>
      </header>

      <main className="ad-booking-card about-card">
        <div className="ad-booking-header">
          <div className="ad-badge">About The Poast</div>
        </div>

        <section className="about-section" aria-labelledby="about-what">
          <h2 className="about-section-title" id="about-what">
            What's The Poast?
          </h2>
          <p className="about-text">
            We're a daily feed of snarky comments and posts from across the business world.
          </p>
        </section>

        <section className="about-section" aria-labelledby="about-who">
          <h2 className="about-section-title" id="about-who">
            Who reads it?
          </h2>
          <p className="about-text">
             We're frequently read by people who like to get things done.
          </p>
          <div className="about-chips">
            {AUDIENCE.map((group) => (
              <span className="about-chip" key={group}>
                {group}
              </span>
            ))}
          </div>
        </section>

        <section className="about-section" aria-labelledby="about-expect">
          <h2 className="about-section-title" id="about-expect">
            What to expect
          </h2>
          <div className="about-grid">
            {PRINCIPLES.map((item) => (
              <article className="about-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="about-cta">
          <Link to="/" className="about-btn">
            Return to The Poast
          </Link>
          <Link to="/book" className="back-btn">
            Advertise with us
          </Link>
        </div>

      <footer
        className="feed-footer"
        id="subscribe"
      >

        <form
          method="post"
          action="https://app.thepoast.com/subscription/form"
          className="feed-subscribe-form"
        >
        <div className="feed-header">
          Get The Poast
        </div>
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

          <p className="feed-legal">
            By submitting, you agree to our{" "}
            <Link to="/policies/terms">
              Terms
            </Link>{" "}
            &amp;{" "}
            <Link to="/policies/privacy">
              Privacy
            </Link>
            <br />
            <div className="innerfeed-legal">
            <Link className="space" to="/about">About</Link>
            <Link className="space" to="/archive">Archive</Link>
            <Link className="space" to="/submit-post">Submit Post</Link>
            <Link className="space" to="/partner">Partner</Link>
            <Link className="space" to="/book">Advertise</Link>
            <p className="copyright">
              © 2026 The Poast
            </p>
            </div>
          </p>
        </form>
      </footer>
      </main>
    </div>
  );
}