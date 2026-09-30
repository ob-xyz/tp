import type { LoaderFunctionArgs } from "@remix-run/node";
import { getIssue } from "../utils/poast-feeds.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.id;

  if (!id || !/^\d+$/.test(id)) {
    return new Response("Bad campaign ID", {
      status: 400,
      headers: { "Cache-Control": "no-store" },
    });
  }

  try {
    const issue = await getIssue(id); // cached, deduped, stale-on-error

    if (!issue) {
      return new Response("Issue unavailable", {
        status: 404,
        headers: { "Cache-Control": "public, max-age=30" },
      });
    }

    return new Response(issue.body, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control":
          "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error(`[feeds] Failed to render issue ${id}:`, error);

    // 503, not 404, so the client retries instead of giving up.
    return new Response("Issue temporarily unavailable", {
      status: 503,
      headers: {
        "Cache-Control": "no-store",
        "Retry-After": "2",
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}