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
  useLocation,
} from "@remix-run/react";
import { useNavigationType } from "react-router-dom";

import globalStyles from "~/style/global/global.css";

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
  title: "thepoast - no log in. no sign up.",
  description: "A place to waste more time. Just visit and scroll whenever you like. No account required.",
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