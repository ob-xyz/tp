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
  title: "The Poast",
  description: "Get caught up. That's it. That's The Poast.",
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
    "name": "The Poast",
    "alternateName": ["thepoast", "The Poast Newsletter", "thepoast.com", "the poast feed", "the poast", "poast"],
    "url": "https://thepoast.com",
    "logo": "https://thepoast.com/favicon.ico",
    "description": "Get caught up. That's it. That's The Poast"
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