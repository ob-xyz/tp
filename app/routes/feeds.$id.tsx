import {
  json,
  type HeadersFunction,
  type LinksFunction,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import {
  isRouteErrorResponse,
  Link,
  useLoaderData,
  useRouteError,
  type ShouldRevalidateFunction,
} from "@remix-run/react";

import Altcha from "../components/altcha";
import FeedEmbed from "../components/feed-embed";

import scroll from "~/style/scss/components/showscroll.css";

import { getIssue } from "../utils/poast-feeds.server";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: scroll,
  },
  {
    rel: "preconnect",
    href: "https://img.thepoast.com",
  },
  {
    rel: "dns-prefetch",
    href: "https://img.thepoast.com",
  },
];

export const headers: HeadersFunction = ({
  loaderHeaders,
}) => ({
  "Cache-Control":
    loaderHeaders.get("Cache-Control") ??
    "no-store",
});

export const shouldRevalidate: ShouldRevalidateFunction = ({
  currentParams,
  nextParams,
}) => {
  return currentParams.id !== nextParams.id;
};

export async function loader({
  params,
}: LoaderFunctionArgs) {
  const id = params.id;

  if (!id || !/^\d+$/.test(id)) {
    throw new Response("Feed Not Found", {
      status: 404,
      headers: {
        "Cache-Control":
          "public, max-age=30",
        "Content-Type":
          "text/plain; charset=utf-8",
      },
    });
  }

  let feed;

  try {
    feed = await getIssue(id);
  } catch (error) {
    console.error(
      `[feeds] Failed to load issue ${id}:`,
      error
    );

    throw new Response(
      "Temporarily unavailable",
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store",
          "Retry-After": "2",
          "Content-Type":
            "text/plain; charset=utf-8",
        },
      }
    );
  }

  if (!feed) {
    throw new Response(
      "Feed Not Found",
      {
        status: 404,
        headers: {
          "Cache-Control":
            "public, max-age=15",
          "Content-Type":
            "text/plain; charset=utf-8",
        },
      }
    );
  }

  return json(
    { feed },
    {
      headers: {
        "Cache-Control":
          "public, max-age=300, s-maxage=1800, stale-while-revalidate=86400",
      },
    }
  );
}

function TopBar() {
  return (
    <header className="feed-topbar">
      <Link
        className="feed-mark"
        to="/"
      >
        <img
          src="/img/tp.png"
          alt="The Poast"
          loading="eager"
          decoding="async"
        />
      </Link>

      <a
        href="#subscribe"
        className="feed-subscribe"
      >
        Subscribe
      </a>
    </header>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  const status =
    isRouteErrorResponse(error)
      ? error.status
      : 500;

  return (
    <div className="feed-detail-page">
      <TopBar />

      <main
        className="feed-detail-stream"
        style={{
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <p>
          {status === 404
            ? "We couldn't find that edition."
            : "This edition is taking a moment to load."}
        </p>

        <p
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
          }}
        >
          <button
            type="button"
            onClick={() =>
              window.location.reload()
            }
          >
            Try again
          </button>

          <Link to="/today">
            Back to archive
          </Link>
        </p>
      </main>
    </div>
  );
}

export default function FeedDetail() {
  const { feed } =
    useLoaderData<typeof loader>();

  return (
    <div className="feed-detail-page">
      <TopBar />

      <main className="feed-detail-stream">
        <FeedEmbed
          key={feed.id}
          id={feed.id}
          html={feed.body}
          title={feed.subject}
          interactive
          fallbackHeight={800}
        />
      </main>

      <footer
        className="feed-footer"
        id="subscribe"
      >
        <form
          method="post"
          action="https://app.thepoast.com/subscription/form"
          className="feed-subscribe-form"
        >
          <p className="feed-subscribe-heading">
            Get The Poast for free
          </p>

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
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </footer>
    </div>
  );
}