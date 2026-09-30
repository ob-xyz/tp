import { getLiveIssue } from "../utils/poast-feeds.server";

const LIVE_CACHE_CONTROL =
  "public, max-age=20, s-maxage=30, stale-while-revalidate=600";

export async function loader() {
  const issue = await getLiveIssue();

  if (!issue) {
    return new Response(
      `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>The Poast</title>
</head>
<body>
<p>The Poast is loading. Please refresh shortly.</p>
</body>
</html>`,
      {
        status: 503,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
          "X-Content-Type-Options": "nosniff",
        },
      }
    );
  }

  return new Response(issue.body, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": LIVE_CACHE_CONTROL,
      "X-Content-Type-Options": "nosniff",
    },
  });
}

export default function Live() {
  return null;
}