// app/utils/ad-results.ts
//
// Shared (client + server) constants, types and helpers for the results
// dashboard. Pure functions only. No secrets, no network.

import { findRun, displayName, getRuns, runKey } from "~/data/ad-results";
import type { AdRun } from "~/data/ad-results";

export const PLACEMENTS_PAID = ["Top Feed — $500", "Mid Feed — $300"] as const;
export const RAW_PLACEMENTS = ["Top Feed", "Mid Feed"] as const;
export const PAYMENT_METHODS = ["Credit Card", "Insertion Order"] as const;
export const CREATIVES = ["Same ad", "New ad"] as const;

export type Placement = (typeof RAW_PLACEMENTS)[number];
export type PaymentMethod = (typeof PAYMENT_METHODS)[number];
export type Creative = (typeof CREATIVES)[number];

export type FieldName = "startDate" | "placement" | "paymentMethod" | "creative" | "altcha";

export type ActionData = {
  error?: string;
  debug?: string;
  fieldErrors?: Partial<Record<FieldName, string>>;
};

export const int = (value: number): string => value.toLocaleString("en-US");

export const pct = (part: number, whole: number): string =>
  whole > 0 ? `${((part / whole) * 100).toFixed(2)}%` : "—";

export function formatDate(value: string): string {
  const [y, m, d] = value.split("-").map(Number);
  if (!y || !m || !d) return value;
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export type ResultsData = {
  slug: string;
  name: string;
  runs: AdRun[];
  currentId: string;
  latestId: string;
  totals: { campaigns: number; clicks: number; ctr: string; hasStats: boolean };
  defaultPlacement: Placement;
};

/** Everything the dashboard needs for one company. Caller checks hasResults() first. */
export function buildResultsData(slug: string, runParam?: string | null): ResultsData {
  const runs = getRuns(slug);
  const current = findRun(slug, runParam) ?? runs[0];

  // Totals across every run that has results in.
  const withStats = runs.filter((r) => r.stats);
  const totals = {
    campaigns: runs.length,
    clicks: withStats.reduce((sum, r) => sum + (r.stats?.clicks ?? 0), 0),
    ctr: pct(
      withStats.reduce((sum, r) => sum + (r.stats?.uniqueClicks ?? 0), 0),
      withStats.reduce((sum, r) => sum + (r.stats?.sent ?? 0), 0)
    ),
    hasStats: withStats.length > 0,
  };

  // Pre-select the placement they used last time.
  const last = runs[0]?.placement ?? "";
  const defaultPlacement: Placement = (RAW_PLACEMENTS as readonly string[]).includes(last)
    ? (last as Placement)
    : "Top Feed";

  return {
    slug,
    name: displayName(slug),
    runs,
    currentId: runKey(current),
    latestId: runKey(runs[0]),
    totals,
    defaultPlacement,
  };
}