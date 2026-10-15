import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLoaderData, useCatch } from "@remix-run/react";
import type {
  LoaderFunctionArgs,
  HeadersFunction,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";

import FeedEmbed from "~/components/feed-embed";
import NotFound from "~/routes/$"; // your existing custom 404 page

// Map your company slugs to their Listmonk campaign IDs here!
const CAMPAIGN_MAP: Record<string, number> = {
  livead: 4,
  advertise: 5,
  fin: 507,
  stripe: 451,
};

export async function loader({ params }: LoaderFunctionArgs) {
  const company = params.company?.toLowerCase() || "";
  const campaignId = CAMPAIGN_MAP[company];

  if (!campaignId) {
    throw new Response("Advertiser campaign not found", { status: 404 });
  }

  // Capitalize nicely for titles (e.g., "fin" -> "Fin")
  const companyName = company.charAt(0).toUpperCase() + company.slice(1);

  return { company, companyName, campaignId };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  // On a caught 404, data is undefined
  if (!data) {
    return { title: "404 / thepoast", robots: "noindex" };
  }
  return {
    title: `${data.companyName} x thepoast`,
  };
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" },
];

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=300",
});

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <NotFound />;
  }

  // Anything other than a 404 falls through to the ErrorBoundary
  throw new Error(`Unexpected response: ${caught.status}`);
}

const BANNER_TRIGGER = 0.85;

function useReachedEndOfFeed() {
  const endRef = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const el = endRef.current;
    if (!el) return;

    let frame = 0;

    const check = () => {
      frame = 0;
      const top = el.getBoundingClientRect().top;
      setReached(
        window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER
      );
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined" && el.parentElement) {
      resizeObserver = new ResizeObserver(schedule);
      resizeObserver.observe(el.parentElement);
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

export default function DynamicCampaignPage() {
  const { company, companyName } = useLoaderData<typeof loader>();
  const { endRef, reached } = useReachedEndOfFeed();
  const navigate = useNavigate();
  const footerRef = useRef<HTMLElement>(null);

  const bannerVisible = reached;

  return (
    <div className="feed-page">
      <header
        className={`feed-topbar${reached ? " is-hidden" : ""}`}
        style={{
          borderLeft: "none",
          borderRight: "none",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          paddingLeft: "16px",
          paddingRight: "0.4rem",
        }}
      >
        {/* Left empty spacer to balance the grid */}
        <div aria-hidden="true" />

        {/* Center Logo */}
        <Link className="feed-mark" to="/" style={{ justifySelf: "center" }}>
          <img src="/img/tp.png" alt="thepoast" decoding="async" />
        </Link>

        {/* Right Button */}
        <div style={{ justifySelf: "end", marginRight: "0.4rem" }}>
          <button
            type="button"
            className="feed-banner-btn"
            style={{
              padding: "8px 14px",
              fontSize: "13px",
              width: "auto",
              height: "auto",
              flexShrink: 0,
            }}
            onClick={() => navigate(`/${company}/book`)}
          >
            Book Ad
          </button>
        </div>
      </header>

      <main className="feed-stream">
        <div className="feed-embed loaded">
          <FeedEmbed
            id={`${company}-campaign`}
            src={`/custom/${company}/preview`}
            title={`${companyName} x thepoast Campaign`}
            interactive
            bordered
            hideTopBorder
            fallbackHeight={900}
          />
        </div>

        <div ref={endRef} className="feed-end-marker" aria-hidden="true" />

        <footer
          ref={footerRef}
          className={`feed-footer${bannerVisible ? " is-covered" : ""}`}
        >
          <div className="feed-footer-links">
            <Link to="/about">about</Link>
            <Link to="/archive">archive</Link>
            <Link to="/submit-post">submit post</Link>
            <Link to="/policies/privacy">privacy</Link>
            <Link to="/policies/terms">terms</Link>
            <Link to="/manager">manager</Link>
            <Link to="/partner">partner</Link>
            <Link to="/book">advertise</Link>
          </div>
          <p className="feed-copyright">thepoast © 2026</p>
        </footer>

        <aside
          className={`feed-banner${bannerVisible ? " is-visible" : ""}`}
          aria-label="Book Ad"
          aria-hidden={!bannerVisible}
        >
          <div className="feed-banner-inner">
            <div className="feed-banner-title">
              Run your campaign in thepoast
            </div>

            <button
              type="button"
              className="feed-banner-btn"
              onClick={() => navigate(`/${company}/book`)}
            >
              Book Ad
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}