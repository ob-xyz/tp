import type { LoaderFunctionArgs } from "@remix-run/node";
import { getCampaignPreview, prepareIssueHtml } from "~/utils/poast-feeds.server";
import { CAMPAIGN_MAP } from "~/data/campaigns";


// CSS snippet precisely targeting the elements you provided
const HIDE_EXTRANEOUS_STYLES = `
<style>
  /* Hide all storyboards except the target 2nd ad unit */
  .storyboard {
    display: none !important;
  }
  .storyboard:nth-of-type(2) {
    display: block !important;
  }

  /* Target and hide 'You're all caught up' and the template footer directly */
  p.tac,
  div.footer {
    display: none !important;
  }
</style>
`;

export async function loader({ params }: LoaderFunctionArgs) {
  const company = params.company?.toLowerCase() || "";
  const campaignId = CAMPAIGN_MAP[company];

  if (!campaignId) {
    return new Response("Ad unit not found", { status: 404 });
  }

  try {
    const rawHtml = await getCampaignPreview(campaignId);

    if (!rawHtml) {
      return new Response("Preview unavailable", { status: 404 });
    }

    let fullHtml = prepareIssueHtml(rawHtml, new Date());

    // Inject CSS to clean up the bottom elements
    if (fullHtml.includes("</head>")) {
      fullHtml = fullHtml.replace("</head>", `${HIDE_EXTRANEOUS_STYLES}</head>`);
    } else {
      fullHtml = `<head>${HIDE_EXTRANEOUS_STYLES}</head>${fullHtml}`;
    }

    return new Response(fullHtml, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=60, s-maxage=300",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error(`[storyboard] Failed for ${company}:`, error);
    return new Response("Temporarily unavailable", { status: 503 });
  }
}