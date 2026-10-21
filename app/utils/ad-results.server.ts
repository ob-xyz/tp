// app/utils/ad-results.server.ts
//
// Saves a "run another ad" request from the results dashboard into Listmonk,
// using the same advertiser subscriber (campaign+<slug>@thepoast.com) and
// `ad_requests` history the original book flow uses.

import { json, redirect } from "@remix-run/node";

import { displayName, getAccount, getRuns } from "~/data/ad-results";
import { CREATIVES, PAYMENT_METHODS, RAW_PLACEMENTS } from "~/utils/ad-results";
import type { ActionData } from "~/utils/ad-results";
import { upsertSubscriber } from "~/utils/poast.server";

export type RebookRequest = {
  slug: string;
  company: string;
  startDate: string;
  placement: string;
  paymentMethod: string;
  creative: string;
  notes: string;
  previousCampaignId: number | null;
};

export async function saveRebookRequest(req: RebookRequest) {
  const listId = Number(process.env.LISTMONK_ADVERTISER_LIST_ID || 31);
  const now = new Date().toISOString();

  const entry = {
    submitted_at: now,
    type: "rebook",
    company: req.company,
    start_date: req.startDate,
    placement: req.placement,
    payment_method: req.paymentMethod,
    creative: req.creative,
    notes: req.notes,
    previous_campaign_id: req.previousCampaignId,
  };

  await upsertSubscriber({
    email: `campaign+${req.slug}@thepoast.com`,
    name: `${req.company} Campaign Lead`,
    listId,
    attribs: {
      subscriber_type: "advertiser",
      source: `${req.slug}-rebook-flow`,
      company: req.company,
      start_date: req.startDate,
      placement: req.placement,
      payment_method: req.paymentMethod,
      creative: req.creative,
      notes: req.notes,
      last_submitted_at: now,
    },
    historyKey: "ad_requests",
    historyEntry: entry,
  });
}

const str = (value: FormDataEntryValue | null, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

/**
 * POST handler for the "run another ad" form. Wire it up as the route action:
 *   export const action = ({ request, params }) =>
 *     handleRebookAction(request, params.company?.toLowerCase() || "");
 */
export async function handleRebookAction(request: Request, slug: string) {
  if (!getAccount(slug)) throw new Response("Not found", { status: 404 });

  const formData = await request.formData();

  // Honeypot
  if (str(formData.get("nonce"), 200)) {
    return redirect("/thank-you");
  }

  const startDate = str(formData.get("startDate"), 50);
  const placement = str(formData.get("placement"), 50);
  const paymentMethod = str(formData.get("paymentMethod"), 50);
  const creative = str(formData.get("creative"), 50);
  const notes = str(formData.get("notes"), 5000);
  const altcha = str(formData.get("altcha"), 20000);

  const fieldErrors: ActionData["fieldErrors"] = {};

  if (!/^\d{4}-\d{2}-\d{2}$/.test(startDate)) {
    fieldErrors.startDate = "Please select a target start date.";
  }
  if (!(RAW_PLACEMENTS as readonly string[]).includes(placement)) {
    fieldErrors.placement = "Please select a valid placement.";
  }
  if (!(PAYMENT_METHODS as readonly string[]).includes(paymentMethod)) {
    fieldErrors.paymentMethod = "Please select a payment method.";
  }
  if (!(CREATIVES as readonly string[]).includes(creative)) {
    fieldErrors.creative = "Please choose which ad to run.";
  }
  if (process.env.ALTCHA_REQUIRED !== "false" && !altcha) {
    fieldErrors.altcha = "Please complete the verification check.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return json<ActionData>(
      { error: "Please fix the highlighted fields.", fieldErrors },
      { status: 400 }
    );
  }

  try {
    await saveRebookRequest({
      slug,
      company: displayName(slug),
      startDate,
      placement,
      paymentMethod,
      creative,
      notes,
      previousCampaignId: getRuns(slug)[0]?.campaignId ?? null,
    });
  } catch (err) {
    console.error("[results] failed to save rebook request:", err);
    const reason = err instanceof Error ? err.message : String(err);
    return json<ActionData>(
      {
        error: "Something went wrong submitting your booking. Please try again.",
        debug: process.env.NODE_ENV !== "production" ? reason : undefined,
      },
      { status: 500 }
    );
  }

  return redirect("/thank-you");
}