import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return {
    title: "About : The Poast",
    description: "Get caught up right here, right now",
  };
};

/* -------------------------------------------------------------------------- */
/*   EDIT THIS SECTION: adjust the copy so it sounds like you.                */
/* -------------------------------------------------------------------------- */

const AUDIENCE = ["Founders", "Executives", "Builders"];

const PRINCIPLES = [
  {
    title: "Free to read",
    body: "Read it for free every day at thepoast.com",
  },
  {
    title: "Free to join",
    body: "Subscribe with just your email. No subscription fee always free",
  },
  {
    title: "We love tips",
    body: "Got a story or a tip? Send it our way and we'll reply within 24 hours",
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

        <Link to="/subscribe" className="feed-subscribe">
          Subscribe
        </Link>
      </header>

      <main className="ad-booking-card about-card">
        <div className="ad-booking-header">
          <h1 className="ad-booking-title">About The Poast</h1>
          <p className="ad-booking-sub">Trusted by 25,000+</p>
        </div>

        <section className="about-section" aria-labelledby="about-what">
          <h2 className="about-section-title" id="about-what">
            What's The Poast?
          </h2>
          <p className="about-text">
            We're the easiest way to know what's happening in the world
          </p>
        </section>

        <section className="about-section" aria-labelledby="about-who">
          <h2 className="about-section-title" id="about-who">
            Who reads it?
          </h2>
          <p className="about-text">
             Frequently read by people who like to get stuff done
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
          <Link to="/subscribe" className="about-btn">
            Subscribe for free
          </Link>
          <Link to="/submit-post" className="back-btn">
            Submit Post
          </Link>
          <Link to="/book" className="back-btn">
            Advertise with us
          </Link>
        </div>
      </main>
    </div>
  );
}