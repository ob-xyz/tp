import type { LoaderFunctionArgs } from "@remix-run/node";
import { getLeadStoryHtml } from "../utils/poast-feeds.server";

const HTML_HEADERS = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control":
    "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400",
  "X-Content-Type-Options": "nosniff",
};

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.id;

  if (!id || !/^\d+$/.test(id)) {
    return new Response("Bad campaign ID", {
      status: 400,
      headers: { "Cache-Control": "no-store" },
    });
  }

  try {
    // Cached in memory, deduped across concurrent requests,
    // and served stale if Listmonk is slow or down.
    const html = await getLeadStoryHtml(id);

    if (!html) {
      return new Response("Lead story unavailable", {
        status: 404,
        headers: { "Cache-Control": "public, max-age=30" },
      });
    }

    return new Response(html, { status: 200, headers: HTML_HEADERS });
  } catch (error) {
    console.error(`[feeds] Failed to render preview ${id}:`, error);

    // 503 (not 404) so the client retries instead of giving up.
    return new Response("Preview temporarily unavailable", {
      status: 503,
      headers: {
        "Cache-Control": "no-store",
        "Retry-After": "2",
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}