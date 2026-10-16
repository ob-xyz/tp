import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLoaderData, useCatch } from "@remix-run/react";
import type {
  LoaderFunctionArgs,
  HeadersFunction,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";

import FeedEmbed from "~/components/feed-embed";
import MediaKit, { MEDIA_KIT } from "~/components/media-kit";
import NotFound from "~/routes/$"; // your existing custom 404 page
import bookStyles from "../../style/scss/custom/custom.css";

// Map your company slugs to their Listmonk campaign IDs here!
const CAMPAIGN_MAP: Record<string, number> = {
  free: 4,
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
    title: "thepoast",
  };
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: bookStyles },
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
  const [kitOpen, setKitOpen] = useState(false);

  const bannerVisible = reached;

  return (
    <div className="feed-page">
<header className={`feed-topbar${reached ? " is-hidden" : ""}`}>
  <Link className="feed-mark" to="/">
    <img src="/img/tp.png" alt="thepoast" decoding="async" />
  </Link>

  {/* <Link className="feed-subscribe" to={`/${company}/book`}>
    Get Started
  </Link> */}
</header>

      <main className="feed-stream">
        <div className="mk-promo-wrap">
          <Link to={`/${company}/book?free=1`} className="mk-promo">
            Book your first ad for free! Get started →
          </Link>
        </div>

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
          <Link to="/book">advertise</Link>
          <Link to="/manager">ads manager</Link>
          </div>
          <p className="feed-copyright">thepoast © 2026</p>
        </footer>

        <aside
          className={`feed-banner${bannerVisible ? " is-visible" : ""}`}
          aria-label="Get Started"
          aria-hidden={!bannerVisible}
        >
          <div className="feed-banner-inner">
            <div className="feed-banner-title">
              Better business performance, fueled by email
            </div>

            <button
              type="button"
              className="feed-banner-btn"
              onClick={() => navigate(`/${company}/book`)}
            >
              Get Started
            </button>

            <button
              type="button"
              className="back-btn"
              tabIndex={bannerVisible ? 0 : -1}
              onClick={() => setKitOpen(true)}
              style={{ marginTop: "0rem" }}
              
            >
              Audience details
            </button>
          </div>
        </aside>
      </main>

      <MediaKit
        open={kitOpen}
        onClose={() => setKitOpen(false)}
        ctaLabel="Get Started"
        onCta={() => navigate(`/${company}/book`)}
      />
    </div>
  );
}