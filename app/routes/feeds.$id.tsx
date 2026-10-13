import type { LoaderFunctionArgs } from "@remix-run/node";
import { getIssue } from "../utils/poast-feeds.server";

const HTML_HEADERS = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control":
    "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400",
  "X-Content-Type-Options": "nosniff",
};

export async function loader({
  params,
}: LoaderFunctionArgs) {
  const id = params.id;

  if (!id || !/^\d+$/.test(id)) {
    return new Response(
      "Bad campaign ID",
      {
        status: 400,
        headers: {
          "Cache-Control": "no-store",
          "Content-Type":
            "text/plain; charset=utf-8",
        },
      }
    );
  }

  try {
    // Cached, deduped, stale-on-error.
    const issue = await getIssue(id);

    if (!issue) {
      return new Response(
        "Issue unavailable",
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
      issue.body,
      {
        status: 200,
        headers: HTML_HEADERS,
      }
    );
  } catch (error) {
    console.error(
      `[feeds] Failed to render issue ${id}:`,
      error
    );

    // 503 tells the client this is temporary
    // and allows its retry logic to run.
    return new Response(
      "Issue temporarily unavailable",
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store",
          "Retry-After": "2",
          "Content-Type":
            "text/plain; charset=utf-8",
        },
      }
    );
  }
}