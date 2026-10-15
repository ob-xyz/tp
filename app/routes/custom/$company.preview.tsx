import type { LoaderFunctionArgs } from "@remix-run/node";
import { getCampaignPreview } from "~/utils/poast-feeds.server";

// Keep the same campaign mapping dictionary here (or move it to a shared file)
const CAMPAIGN_MAP: Record<string, number> = {
  free: 4,
  advertise: 5,
  fin: 507,
  stripe: 451,
};

const PREVIEW_CACHE_CONTROL =
  "public, max-age=60, s-maxage=300, stale-while-revalidate=86400";

const EMAIL_LOGO_BLOCK =
  /<p\b[^>]*class=["']tac["'][^>]*>\s*<a\b[^>]*>\s*<img\b[^>]*src=["']https:\/\/img\.thepoast\.com\/tp_u6yYte\.png["'][^>]*>\s*<\/a>\s*<\/p>/i;

const EMAIL_FOOTER_BLOCK =
  /<div\b[^>]*class=["'][^"']*footer[^"']*["'][\s\S]*?<\/div>/gi;

export async function loader({ params }: LoaderFunctionArgs) {
  const company = params.company?.toLowerCase() || "";
  const campaignId = CAMPAIGN_MAP[company];

  if (!campaignId) {
    return new Response("Campaign not found", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  try {
    const rawHtml = await getCampaignPreview(campaignId);

    if (!rawHtml) {
      return new Response("Campaign preview unavailable", {
        status: 404,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    const body = rawHtml
      .replace(EMAIL_LOGO_BLOCK, "")
      .replace(EMAIL_FOOTER_BLOCK, "");

    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": PREVIEW_CACHE_CONTROL,
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error(`[preview] Failed to load campaign for ${company}:`, error);
    return new Response("Temporarily unavailable", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}