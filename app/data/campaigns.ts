// Add a new company here and it works across the sample page, /book,
// /preview and /storyboard routes automatically.
export const CAMPAIGN_MAP: Record<string, number> = {
  foryou: 3,
  fin: 507,
  stripe: 451,
  checksum: 789,
  youdotcom: 790,
  attio: 791,
};

/** Returns the campaign ID for a slug, or undefined if unknown. */
export function getCampaignId(slug: string | undefined): number | undefined {
  return CAMPAIGN_MAP[(slug ?? "").toLowerCase()];
}