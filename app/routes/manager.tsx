import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import type { CSSProperties, ReactNode } from "react";

import FeedTopbar from "~/components/feed-topbar";
import FeedFooter from "~/components/feed-footer";

export const meta: MetaFunction = () => {
  return {
    title: "Campaign Manager / thepoast",
    description:
      "Book a new campaign, share an existing one, or explore our media kit, all in one place.",
  };
};

/* -------------------------------------------------------------------------- */
/*                                   Icons                                    */
/* -------------------------------------------------------------------------- */

type IconProps = { children: ReactNode };

const Glyph = ({ children }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

const BoltIcon = () => (
  <Glyph>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </Glyph>
);

const MegaphoneIcon = () => (
  <Glyph>
    <path d="M3 10v4h3l7 4V6L6 10H3Z" />
    <path d="M16.5 8.5a5 5 0 0 1 0 7" />
    <path d="M19 6a8.5 8.5 0 0 1 0 12" />
  </Glyph>
);

const LinkIcon = () => (
  <Glyph>
    <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" />
    <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" />
  </Glyph>
);

const ChartIcon = () => (
  <Glyph>
    <path d="M5 20v-7" />
    <path d="M12 20V5" />
    <path d="M19 20V9" />
  </Glyph>
);

const ArchiveIcon = () => (
  <Glyph>
    <rect x="3" y="4" width="18" height="4" rx="1" />
    <path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8" />
    <path d="M10 12h4" />
  </Glyph>
);

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

type PortalItem = {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
  /** Icon gradient, top to bottom */
  from: string;
  to: string;
};

// The big widget at the top: the fastest way to get started.
const FEATURED: PortalItem & { cta: string; note: string } = {
  href: "/book",
  title: "Book a quick campaign",
  description:
    "Find your next customers in thepoast.",
  icon: <BoltIcon />,
  from: "#ffb340",
  to: "#ff8a00",
  cta: "Book now",
  note: "We reply within 48 hours",
};

// The app grid. Add, remove or reorder freely, the layout adapts.
const APPS: PortalItem[] = [
  {
    href: "/partner",
    title: "New Campaign",
    description: "Start here if your campaign has a goal, budget, or schedule.",
    icon: <MegaphoneIcon />,
    from: "#5e9bff",
    to: "#2f6bf2",
  },
  {
    href: "/link",
    title: "Existing Campaign",
    description: "Already running ads on social? Send us the link.",
    icon: <LinkIcon />,
    from: "#46d37a",
    to: "#1fa653",
  },
  {
    href: "/media-kit",
    title: "Media Kit",
    description: "Learn about our audience, stats, and more.",
    icon: <ChartIcon />,
    from: "#b77bff",
    to: "#8a45e8",
  },
  {
    href: "/archive",
    title: "Our Archive",
    description: "Browse an archive of everything we've published so far.",
    icon: <ArchiveIcon />,
    from: "#8e9aaf",
    to: "#5b6577",
  },
];

const tint = (from: string, to: string, index: number) =>
  ({ "--from": from, "--to": to, "--i": index }) as CSSProperties;

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export default function Portal() {
  return (
    <div className="feed-page ad-booking-page pt-page">
      <FeedTopbar
        showSubscribe={false}
        onSubscribe={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
      />

      <main className="ad-booking-card pt-card">
        <Link
          to={FEATURED.href}
          prefetch="intent"
          className="pt-featured"
          style={tint(FEATURED.from, FEATURED.to, 0)}
        >
          <span className="pt-icon pt-icon-lg" aria-hidden="true">
            {FEATURED.icon}
          </span>
          <span className="pt-featured-body">
            <span className="pt-eyebrow">{FEATURED.note}</span>
            <span className="pt-featured-title">{FEATURED.title}</span>
            <span className="pt-desc">{FEATURED.description}</span>
          </span>
          <span className="pt-featured-cta">
            {FEATURED.cta}
          </span>
        </Link>

        <nav className="pt-grid" aria-label="Portal">
          {APPS.map((app, i) => (
            <Link
              key={app.href}
              to={app.href}
              prefetch="intent"
              className="pt-tile"
              style={tint(app.from, app.to, i + 1)}
            >
              <span className="pt-tile-top">
                <span className="pt-icon" aria-hidden="true">
                  {app.icon}
                </span>
              </span>
              <span className="pt-tile-body">
                <span className="pt-tile-title">{app.title}</span>
                <span className="pt-desc">{app.description}</span>
              </span>
            </Link>
          ))}
        </nav>

        <Link to="/" className="back-btn">
          ← Return to thepoast
        </Link>
      </main>

      <FeedFooter />
    </div>
  );
}