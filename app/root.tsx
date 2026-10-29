import { useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation,
} from "@remix-run/react";
import { useNavigationType } from "react-router-dom";

import globalStyles from "~/style/global/global.css";
import NotFound from "~/routes/$";

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/png",
    },
    {
      rel: "stylesheet",
      href: globalStyles,
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "thepoast - no bots, no spam.",
  description: "No bots. No spam. Just the best things you haven't seen.",
  viewport: "width=device-width,initial-scale=1"
});

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (hash || navType === "POP") return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, [pathname, hash, navType]);

  return null;
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <meta name="color-scheme" content="light dark" />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#050505"
          media="(prefers-color-scheme: dark)"
        />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document>
      {caught.status === 404 ? (
        <NotFound />
      ) : (
        <main style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
          <h1>
            {caught.status} {caught.statusText}
          </h1>
          <p>Something went wrong.</p>
          <a href="/">Back to thepoast</a>
        </main>
      )}
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document>
      <main style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
        <h1>Something went wrong</h1>
        <p>We hit an unexpected error.</p>
        <a href="/">Back to thepoast</a>
      </main>
    </Document>
  );
}

export default function App() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "thepoast",
    "alternateName": ["the poast", "The Poast Newsletter", "thepoast.com", "the poast feed", "the poast website", "poast", "poast app", "the poast app", "the poast news"],
    "url": "https://thepoast.com",
    "logo": "https://thepoast.com/favicon.ico",
    "description": "Just open and scroll whenever you like. No account required."
  };

  return (
    <html lang="en">
      <head>
        <Meta />
        <meta name="color-scheme" content="light dark" />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#050505"
          media="(prefers-color-scheme: dark)"
        />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body>
        <Outlet />
        {/* ScrollToTop must come after ScrollRestoration so it runs last */}
        <ScrollRestoration />
        <ScrollToTop />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}