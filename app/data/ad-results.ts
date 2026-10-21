// app/data/ad-results.ts
//
// THE FILE YOU EDIT. One entry per company that has run an ad.
// Add a company  -> add a key below (the key is the URL slug, lowercase).
// Add a campaign -> add an object to that company's `runs` array.
// Companies listed here get the results dashboard instead of the free-offer /
// sample / book pages (see the two small patches in the README).
//
// ---------------------------------------------------------------------------
// HOW TO ADD A RUN (copy this block):
//
//   {
//     date: "2026-10-27",        // send date, YYYY-MM-DD (also the run's URL id)
//     campaignId: 512,           // Listmonk campaign ID
//     post: 4,                   // storyboard position in that issue (the nth-of-type number).
//                                // Shifts with how many posts run ahead of the ad: bump it
//                                // up/down until the preview shows the right ad.
//     placement: "Mid Feed",     // optional label shown on the page
//     stats: {                   // leave `stats` out until results are in
//       sent: 10450,
//       opens: 5120,
//       clicks: 212,             // total clicks
//       uniqueClicks: 168,       // unique people who clicked
//       openRate: 49,            // optional, in percent. Leave out to auto-calculate (opens / sent)
//       ctr: 1.61,               // optional, in percent. Leave out to auto-calculate (uniqueClicks / sent)
//     },
//     note: "Best day of the week for us.",   // optional one-liner
//   },
//
// Optional per-run extras:
//   id: "oct-27-b"        use instead of `date` for the URL if you send 2 on one day
//   showPreview: false    hide the live preview of the ad
//   image: "https://img.thepoast.com/....png"   screenshot shown when showPreview is false
// ---------------------------------------------------------------------------

export type RunStats = {
  sent: number;
  opens: number;
  clicks: number;
  uniqueClicks: number;
  /** Open rate in percent (e.g. 49 or 48.97). Optional: calculated from opens / sent when omitted. */
  openRate?: number;
  /** Click-through rate in percent (e.g. 1.61). Optional: calculated from uniqueClicks / sent when omitted. */
  ctr?: number;
};

export type AdRun = {
  id?: string;
  date: string;
  campaignId: number;
  post: number;
  placement?: string;
  stats?: RunStats;
  note?: string;
  showPreview?: boolean;
  image?: string;
};

export type AdAccount = {
  /** Display name. Defaults to the capitalized slug. */
  name?: string;
  runs: AdRun[];
};

export const AD_RESULTS: Record<string, AdAccount> = {
  fin: {
    name: "Fin",
    runs: [
      {
        date: "2026-10-20",
        campaignId: 507,
        post: 3,
        placement: "Top Feed",
        stats: {
          sent: 10450,
          opens: 5120,
          clicks: 215, // total clicks
          uniqueClicks: 168, // unique people who clicked
          openRate: 49, // percent, optional (auto-calculated if removed)
          ctr: 1.61, // percent, optional (auto-calculated if removed)
        },
      },
            {
        date: "2026-11-21",
        campaignId: 507,
        post: 3,
        placement: "Mid Feed",
        stats: {
          sent: 10450,
          opens: 5120,
          clicks: 200, // total clicks
          uniqueClicks: 168, // unique people who clicked
          openRate: 44.21, // percent, optional (auto-calculated if removed)
          ctr: 1.61, // percent, optional (auto-calculated if removed)
        },
      },
    ],
  },
};

/* ------------------------------ helpers ---------------------------------- */

const formatPct = (value: number): string => `${value.toFixed(2)}%`;

/** Open rate as a string like "49.00%". Uses `openRate` if set, otherwise opens / sent. */
export function getOpenRate(stats: RunStats): string {
  if (typeof stats.openRate === "number") return formatPct(stats.openRate);
  return stats.sent > 0 ? formatPct((stats.opens / stats.sent) * 100) : "0.00%";
}

/** Click-through rate as a string like "1.61%". Uses `ctr` if set, otherwise uniqueClicks / sent. */
export function getCtr(stats: RunStats): string {
  if (typeof stats.ctr === "number") return formatPct(stats.ctr);
  return stats.sent > 0 ? formatPct((stats.uniqueClicks / stats.sent) * 100) : "0.00%";
}

export const runKey = (run: AdRun): string => run.id ?? run.date;

export function getAccount(slug: string): AdAccount | null {
  const account = AD_RESULTS[slug.toLowerCase()];
  return account && account.runs.length > 0 ? account : null;
}

export const hasResults = (slug: string): boolean => getAccount(slug) !== null;

/** Newest first. */
export function getRuns(slug: string): AdRun[] {
  const account = getAccount(slug);
  if (!account) return [];
  return [...account.runs].sort((a, b) => b.date.localeCompare(a.date));
}

/** The requested run, or the latest one when `key` is missing / unknown. */
export function findRun(slug: string, key?: string | null): AdRun | null {
  const runs = getRuns(slug);
  if (runs.length === 0) return null;
  return runs.find((r) => runKey(r) === key) ?? runs[0];
}

export function displayName(slug: string): string {
  return getAccount(slug)?.name ?? slug.charAt(0).toUpperCase() + slug.slice(1);
}