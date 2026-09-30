import { Link, useLoaderData } from "@remix-run/react";
import { json, type HeadersFunction, type LinksFunction } from "@remix-run/node";

import Altcha from "../components/altcha";
import FeedEmbed from "../components/feed-embed";
import scroll from "~/style/scss/components/showscroll.css";

import { getLiveIssue, peekLiveIssue } from "../utils/poast-feeds.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: scroll },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" },
];

export const headers: HeadersFunction = ({ loaderHeaders }) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? "no-store",
});

/* -------------------------------------------------------------------------- */
/*                                   LOADER                                   */
/* -------------------------------------------------------------------------- */

export async function loader() {
  // Instant when warm (the normal case). Only a truly cold server waits.
  const issue = peekLiveIssue() ?? (await getLiveIssue());

  return json(
    { issue },
    {
      headers: {
        // Never cache an empty/failed result.
        "Cache-Control": issue
          ? "public, max-age=30, s-maxage=60, stale-while-revalidate=3600"
          : "no-store",
      },
    }
  );
}

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function Index() {
  const { issue } = useLoaderData<typeof loader>();

  return (
    <div className="feed-page">
      <header className="feed-topbar">
        <Link className="feed-mark" to="/">
          <img
            src="/img/tp.png"
            alt="The Poast"
            loading="eager"
            decoding="async"
          />
        </Link>

        <a href="#subscribe" className="feed-subscribe">
          Subscribe
        </a>
      </header>

      <main className="feed-stream">
        {issue ? (
          <div className="feed-embed loaded">
            <FeedEmbed
              key={issue.id}
              id="live"
              html={issue.body}
              title={issue.subject}
              interactive
              fallbackHeight={900}
            />
          </div>
        ) : (
          <div className="feed-empty">
            Check back soon for today&rsquo;s edition.
          </div>
        )}
      </main>

      <footer className="feed-footer" id="subscribe">
        <form
          method="post"
          action="https://app.thepoast.com/subscription/form"
          className="feed-subscribe-form"
        >
          <p className="feed-subscribe-heading">Get The Poast for free</p>

          <div className="feed-input-bar">
            <input
              className="feed-input email-input"
              type="email"
              name="email"
              required
              placeholder="Email Address *"
            />
            <button className="feed-submit" type="submit">
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
          <input type="hidden" name="nonce" />

          <p className="feed-legal">
            By submitting, you agree to our{" "}
            <Link to="/policies/terms">Terms</Link> &amp;{" "}
            <Link to="/policies/privacy">Privacy Policy</Link>.
          </p>
        </form>
      </footer>
    </div>
  );
}