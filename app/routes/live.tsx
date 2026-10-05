import { getLiveIssue } from "../utils/poast-feeds.server";

const LIVE_CACHE_CONTROL =
  "public, max-age=20, s-maxage=30, stale-while-revalidate=600";

const EMAIL_LOGO_BLOCK =
  /<p\b[^>]*class=["']tac["'][^>]*>\s*<a\b[^>]*>\s*<img\b[^>]*src=["']https:\/\/img\.thepoast\.com\/tp_u6yYte\.png["'][^>]*>\s*<\/a>\s*<\/p>/i;

export async function loader() {
  const issue = await getLiveIssue();

  if (!issue) {
    return new Response(
      `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>The Poast</title>
<style>
html,
body {
  margin: 0;
  padding: 0;
  background: #fff;
  color: #111;
}

@media (prefers-color-scheme: dark) {
  html,
  body {
    background: #000;
    color: #fff;
  }
}
</style>
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

  // Website only: remove the email-template logo so it doesn't double up
  // with the site's own header logo. The email itself is untouched.
  const body = issue.body.replace(EMAIL_LOGO_BLOCK, "");

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": LIVE_CACHE_CONTROL,
      "X-Content-Type-Options": "nosniff",
    },
  });
}