import type { LoaderFunctionArgs } from "@remix-run/node";
import { getLeadStoryHtml } from "../utils/poast-feeds.server";

const HTML_HEADERS = {
  "Content-Type": "text/html; charset=utf-8",

  /*
   * Browser can reuse the preview for 10 minutes.
   * CDN/server can keep it for 1 hour.
   * Stale content can continue serving for 24 hours
   * while the cache refreshes in the background.
   */
  "Cache-Control":
    "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400",

  "X-Content-Type-Options": "nosniff",
};

export async function loader({
  params,
}: LoaderFunctionArgs) {
  const id = params.id;

  /*
   * Only numeric campaign IDs are valid.
   */
  if (!id || !/^\d+$/.test(id)) {
    return new Response(
      "Bad campaign ID",
      {
        status: 400,
        headers: {
          "Cache-Control":
            "no-store",
          "Content-Type":
            "text/plain; charset=utf-8",
        },
      }
    );
  }

  try {
    /*
     * getLeadStoryHtml() handles:
     *
     * - in-memory caching
     * - concurrent request deduplication
     * - stale fallback
     * - Listmonk fetching/rendering
     *
     * So this route stays extremely thin.
     */
    const html =
      await getLeadStoryHtml(id);

    if (!html) {
      return new Response(
        "Lead story unavailable",
        {
          status: 404,
          headers: {
            "Cache-Control":
              "public, max-age=30",
            "Content-Type":
              "text/plain; charset=utf-8",
          },
        }
      );
    }

    return new Response(
      html,
      {
        status: 200,
        headers: HTML_HEADERS,
      }
    );
  } catch (error) {
    console.error(
      `[feeds] Failed to render preview ${id}:`,
      error
    );

    /*
     * 503 tells the browser/client this was
     * temporary rather than a missing campaign.
     */
    return new Response(
      "Preview temporarily unavailable",
      {
        status: 503,
        headers: {
          "Cache-Control":
            "no-store",
          "Retry-After": "2",
          "Content-Type":
            "text/plain; charset=utf-8",
        },
      }
    );
  }
}