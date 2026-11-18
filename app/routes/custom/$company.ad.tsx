// app/routes/custom/$company.ad.tsx
//
// Resource route (no default export): serves "the ad as it ran" for the results
// dashboard, e.g.  /custom/fin/ad?run=2026-10-20
//
// Works exactly like $company.storyboard.tsx: loads the FULL campaign HTML and
// uses CSS to show only `.storyboard:nth-of-type(post)`. So `post` in
// ~/data/ad-results.ts is the same number you'd toggle by hand: bump it up or
// down until the right ad shows.
import type { LoaderFunctionArgs } from "@remix-run/node";

import { findRun } from "~/data/ad-results";
import {
  getCampaign,
  getCampaignDate,
  getCampaignPreview,
  getRenderedCampaignHtml,
  prepareIssueHtml,
} from "~/utils/poast-feeds.server";

const HEADERS = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control": "public, max-age=300, s-maxage=600, stale-while-revalidate=3600",
  "X-Content-Type-Options": "nosniff",
  "X-Robots-Tag": "noindex, nofollow",
};

const hideAllButStyles = (post: number) => `
<style>
  /* Hide every storyboard except the target one (same trick as the sample page) */
  .storyboard { display: none !important; }
  .storyboard:nth-of-type(${post}) { display: block !important; }

  /* Hide the logo row and template footer */
  p.tac,
  div.footer { display: none !important; }
</style>
`;

export async function loader({ params, request }: LoaderFunctionArgs) {
  const slug = params.company?.toLowerCase() || "";
  const run = findRun(slug, new URL(request.url).searchParams.get("run"));

  if (!run) throw new Response("Not found", { status: 404 });

  const post = Math.max(1, Math.min(99, Math.floor(Number(run.post)) || 1));

  try {
    let rawHtml = await getCampaignPreview(run.campaignId);

    // Fallback if Listmonk's preview endpoint has nothing: render body + template.
    const campaign = await getCampaign(run.campaignId);
    if (!rawHtml && campaign) rawHtml = (await getRenderedCampaignHtml(campaign)) || null;

    if (!rawHtml) {
      return new Response("Preview unavailable", {
        status: 404,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    // Resolve date template tags against the campaign's own send date.
    const sent = campaign ? getCampaignDate(campaign) : null;
    const reference = sent && Number.isFinite(new Date(sent).getTime()) ? new Date(sent) : new Date();

    let html = prepareIssueHtml(rawHtml, reference);
    const styles = hideAllButStyles(post);

    html = html.includes("</head>")
      ? html.replace("</head>", `${styles}</head>`)
      : `<head>${styles}</head>${html}`;

    return new Response(html, { status: 200, headers: HEADERS });
  } catch (error) {
    console.error(`[results] ad preview failed for ${slug}:`, error);
    return new Response("Temporarily unavailable", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
    });
  }
}