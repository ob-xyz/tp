import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

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
  title: "The Poast : You're all caught up",
  description: "The most interesting people, and posts. With a side of snarky comments. Enjoy something new, every day.",
  viewport: "width=device-width,initial-scale=1"
});

export default function App() {
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
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}