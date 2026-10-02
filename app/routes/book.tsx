import type {
  ActionFunctionArgs,
  HeadersFunction,
  LinksFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, Form, useActionData } from "@remix-run/react";

import Altcha from "~/components/altcha";
import subscribeStyles from "~/style/scss/subscribe.css";
// NOTE: adjust this path if your compiled book.scss lives somewhere else.
import bookStyles from "~/style/scss/book.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: subscribeStyles },
  { rel: "stylesheet", href: bookStyles },
];

// TEMPORARY: shows the real error under the banner so we can diagnose.
// Set to false (or delete) once the form works.
const SHOW_ERROR_DETAILS = true;

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=60, s-maxage=120, stale-while-revalidate=600",
});

/* -------------------------------------------------------------------------- */
/*                               TYPES & HELPERS                              */
/* -------------------------------------------------------------------------- */

type FieldName =
  | "company"
  | "website"
  | "name"
  | "email"
  | "targetDate"
  | "budget"
  | "notes"
  | "source"
  | "altcha";

type ActionData = {
  error?: string;
  debug?: string;
  fieldErrors?: Partial<Record<FieldName, string>>;
};

type Lead = {
  company: string;
  website: string;
  contactName: string;
  email: string;
  targetDate: string;
  budget: string;
  notes: string;
  previousCampaign: string; // optional; "" when not provided
};

const str = (value: FormDataEntryValue | null, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

// Deliberately strict: no quotes or whitespace (the email is also used in a
// Listmonk query string on the duplicate-lookup path).
const EMAIL_RE = /^[^\s@'"\\]+@[^\s@'"\\]+\.[^\s@'"\\]+$/;

function normalizeWebsite(raw: string): string | null {
  if (!raw) return null;
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const url = new URL(withProtocol);
    if (!url.hostname.includes(".")) return null;
    return url.toString();
  } catch {
    return null;
  }
}

/**
 * Listmonk only has a single `name` column. Its templates split that on the
 * first space: FirstName = first word, LastName = everything after.
 * So "Alex Acme Inc" => FirstName "Alex", LastName "Acme Inc".
 * The real full contact name is preserved in attribs.contact_name.
 */
function buildSubscriberName(contactName: string, company: string): string {
  const first = contactName.split(/\s+/)[0] || contactName;
  return `${first} ${company}`.trim();
}

/* -------------------------------------------------------------------------- */
/*                                LISTMONK API                                */
/* -------------------------------------------------------------------------- */

function listmonkConfig() {
  // Accepts either naming style; URL falls back to your Listmonk domain.
  const baseUrl = (
    process.env.LISTMONK_URL || "https://app.thepoast.com"
  ).replace(/\/+$/, "");
  const apiUser = process.env.LISTMONK_API_USER || process.env.LISTMONK_USERNAME;
  const apiToken = process.env.LISTMONK_API_TOKEN || process.env.LISTMONK_TOKEN;
  // Advertiser list = numeric ID 31 (UUID 36b8c160-7d12-4103-aaba-8e3cd90d9d64).
  // Override with LISTMONK_ADVERTISER_LIST_ID if it ever changes.
  const listId = Number(process.env.LISTMONK_ADVERTISER_LIST_ID || 31);

  const missing: string[] = [];
  if (!apiUser) missing.push("LISTMONK_USERNAME");
  if (!apiToken) missing.push("LISTMONK_TOKEN");
  if (!Number.isInteger(listId) || listId < 1) {
    missing.push("LISTMONK_ADVERTISER_LIST_ID (numeric list ID, e.g. 31)");
  }
  if (missing.length) {
    throw new Error(`Missing or invalid env vars: ${missing.join(", ")}`);
  }

  return { baseUrl, apiUser: apiUser as string, apiToken: apiToken as string, listId };
}

async function listmonk(path: string, init: RequestInit = {}) {
  const { baseUrl, apiUser, apiToken } = listmonkConfig();
  return fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${apiUser}:${apiToken}`,
      ...(init.headers || {}),
    },
  });
}

function explainListmonkFailure(step: string, status: number, body: string) {
  let hint = "";
  if (status === 401) {
    hint =
      "Listmonk rejected the credentials. Check LISTMONK_API_USER / LISTMONK_API_TOKEN (the user must be an API user, and the token is shown only once when it's created).";
  } else if (status === 403) {
    hint =
      "The API user is authenticated but lacks permission. Give its role 'subscribers:manage' (and 'subscribers:get_all') plus access to the advertiser list.";
  } else if (status === 404) {
    hint =
      "Listmonk URL/path not found. Check LISTMONK_URL (no trailing path, e.g. https://app.thepoast.com).";
  } else if (status === 400) {
    hint =
      "Listmonk rejected the data. This is often a wrong LISTMONK_ADVERTISER_LIST_ID (it must be the numeric list ID, not the UUID).";
  }
  return `Listmonk ${step} failed (HTTP ${status}). ${hint} Response: ${body.slice(0, 300)}`;
}

/**
 * Creates the advertiser in Listmonk's `subscribers` table (and adds them to the
 * advertiser list). If the email already exists (409), we merge the new booking
 * into the existing subscriber instead of failing.
 */
async function saveAdvertiserLead(lead: Lead) {
  const { listId } = listmonkConfig();
  const now = new Date().toISOString();

  const bookingRequest = {
    submitted_at: now,
    company: lead.company,
    website: lead.website,
    start_date: lead.targetDate,
    budget: lead.budget,
    notes: lead.notes,
    previous_campaign: lead.previousCampaign,
  };

  // NOTE: `source` is already used above as the lead-origin attribute
  // ("advertise-form"), so the user's link is stored as `previous_campaign`.
  const attribs = {
    subscriber_type: "advertiser",
    source: "advertise-form",
    company: lead.company,
    website: lead.website,
    contact_name: lead.contactName,
    start_date: lead.targetDate,
    budget: lead.budget,
    notes: lead.notes,
    // Only set when provided, so a later submission without a link
    // doesn't wipe a previously saved one when merging.
    ...(lead.previousCampaign
      ? { previous_campaign: lead.previousCampaign }
      : {}),
    last_submitted_at: now,
    ad_requests: [bookingRequest],
  };

  const name = buildSubscriberName(lead.contactName, lead.company);

  // 1) Try to create
  const createRes = await listmonk("/api/subscribers", {
    method: "POST",
    body: JSON.stringify({
      email: lead.email,
      name,
      status: "enabled",
      lists: [listId],
      preconfirm_subscriptions: true,
      attribs,
    }),
  });

  if (createRes.ok) return;

  if (createRes.status !== 409) {
    throw new Error(
      explainListmonkFailure("create", createRes.status, await createRes.text())
    );
  }

  // 2) Already exists: look them up and merge
  const query = `subscribers.email = '${lead.email.replace(/'/g, "''")}'`;
  const findRes = await listmonk(
    `/api/subscribers?per_page=1&query=${encodeURIComponent(query)}`
  );
  if (!findRes.ok) {
    throw new Error(
      explainListmonkFailure("lookup", findRes.status, await findRes.text())
    );
  }
  const found = await findRes.json();
  const existing = found?.data?.results?.[0];
  if (!existing) {
    throw new Error("Listmonk said the email exists but lookup returned nothing");
  }

  const existingAttribs = existing.attribs ?? {};
  const history = Array.isArray(existingAttribs.ad_requests)
    ? existingAttribs.ad_requests
    : [];

  // PUT replaces list memberships, so keep every list they're already on.
  const listIds = Array.from(
    new Set<number>([
      ...((existing.lists ?? []) as { id: number }[]).map((l) => l.id),
      listId,
    ])
  );

  const updateRes = await listmonk(`/api/subscribers/${existing.id}`, {
    method: "PUT",
    body: JSON.stringify({
      email: existing.email,
      name,
      status: existing.status,
      lists: listIds,
      preconfirm_subscriptions: true,
      attribs: {
        ...existingAttribs,
        ...attribs,
        ad_requests: [...history, bookingRequest].slice(-20),
      },
    }),
  });

  if (!updateRes.ok) {
    throw new Error(
      explainListmonkFailure("update", updateRes.status, await updateRes.text())
    );
  }
}

/* -------------------------------------------------------------------------- */
/*                                   ACTION                                   */
/* -------------------------------------------------------------------------- */

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  // Honeypot (same field name Listmonk's own form uses). Bots fill it, humans
  // never see it. Pretend success so they don't retry.
  if (str(formData.get("nonce"), 200)) {
    return redirect("/thank-you");
  }

  const company = str(formData.get("company"), 200);
  const websiteRaw = str(formData.get("website"), 300);
  const contactName = str(formData.get("name"), 200);
  const email = str(formData.get("email"), 254).toLowerCase();
  const targetDate = str(formData.get("targetDate"), 10);
  const budget = str(formData.get("budget"), 50);
  const notes = str(formData.get("notes"), 5000);
  const sourceRaw = str(formData.get("source"), 300);
  const altcha = str(formData.get("altcha"), 20000);

  const fieldErrors: ActionData["fieldErrors"] = {};

  if (!company) fieldErrors.company = "Please enter your company.";
  if (!contactName) fieldErrors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid work email.";

  const website = normalizeWebsite(websiteRaw);
  if (!website) fieldErrors.website = "Please enter a valid website.";

  // Optional: only validated if the person filled it in.
  let previousCampaign = "";
  if (sourceRaw) {
    const normalized = normalizeWebsite(sourceRaw);
    if (normalized) {
      previousCampaign = normalized;
    } else {
      fieldErrors.source = "Please enter a valid link, or leave this blank.";
    }
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(targetDate) || Number.isNaN(Date.parse(targetDate))) {
    fieldErrors.targetDate = "Please choose a start date.";
  }

  // The Altcha widget adds its solved payload as the `altcha` field.
  // Set ALTCHA_REQUIRED=false in your env to disable this check.
  if (process.env.ALTCHA_REQUIRED !== "false" && !altcha) {
    fieldErrors.altcha = "Please complete the verification and try again.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return json<ActionData>(
      { error: "Please fix the highlighted fields.", fieldErrors },
      { status: 400 }
    );
  }

  try {
    await saveAdvertiserLead({
      company,
      website: website as string,
      contactName,
      email,
      targetDate,
      budget,
      notes,
      previousCampaign,
    });
  } catch (err) {
    console.error("[book] failed to save advertiser lead:", err);

    // Network-level failures (DNS, TLS, refused) surface as "fetch failed"
    // with the real reason on err.cause.
    const cause = (err as { cause?: { code?: string; message?: string } })?.cause;
    const reason =
      (err instanceof Error ? err.message : String(err)) +
      (cause ? ` [${cause.code || cause.message}]` : "");

    return json<ActionData>(
      {
        error:
          "Something went wrong sending your request. Please try again in a moment.",
        // Set BOOK_DEBUG=true in your env to see the real reason on the page.
        debug:
          SHOW_ERROR_DETAILS || process.env.BOOK_DEBUG === "true"
            ? reason
            : undefined,
      },
      { status: 500 }
    );
  }

  return redirect("/thank-you");
}

/* -------------------------------------------------------------------------- */
/*                                    PAGE                                    */
/* -------------------------------------------------------------------------- */

export default function Advertise() {
  const actionData = useActionData<ActionData>();
  const errors = actionData?.fieldErrors ?? {};

  const fieldError = (name: FieldName) =>
    errors[name] ? (
      <span className="ad-field-error" id={`${name}-error`} role="alert">
        {errors[name]}
      </span>
    ) : null;

  return (
    <div className="feed-page ad-booking-page">
      <header className="feed-topbar">
        <Link
          className="feed-mark"
          to="/"
        >
          <img
            src="/img/tp.png"
            alt="The Poast"
            decoding="async"
          />
        </Link>
      </header>

      <main className="ad-booking-card">
        <div className="ad-booking-header">
          <h1 className="ad-booking-title">Advertise with us</h1>
          <p className="ad-booking-sub">
            Find your next customer in The Poast
          </p>
        </div>

        <Form method="post" className="ad-booking-form">
          {actionData?.error && (
            <div className="ad-form-error" role="alert">
              {actionData.error}
              {actionData.debug && (
                <code className="ad-form-error-debug">{actionData.debug}</code>
              )}
            </div>
          )}

          {/* Contact Details */}
          <div className="form-group-row">
            <div className="form-field">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                required
                autoComplete="organization"
                placeholder="Company Name *"
                aria-invalid={errors.company ? true : undefined}
                aria-describedby={errors.company ? "company-error" : undefined}
              />
              {fieldError("company")}
            </div>

            <div className="form-field">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                required
                autoComplete="url"
                inputMode="url"
                placeholder="https://"
                aria-invalid={errors.website ? true : undefined}
                aria-describedby={errors.website ? "website-error" : undefined}
              />
              {fieldError("website")}
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-field">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="Name *"
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {fieldError("name")}
            </div>

            <div className="form-field">
              <label htmlFor="email">Work Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                inputMode="email"
                placeholder="Email *"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {fieldError("email")}
            </div>
          </div>

          {/* Campaign Details */}
          <div className="form-group-row">
            <div className="form-field">
              <label htmlFor="targetDate">Start Date</label>
              <input
                type="date"
                id="targetDate"
                name="targetDate"
                required
                aria-invalid={errors.targetDate ? true : undefined}
                aria-describedby={
                  errors.targetDate ? "targetDate-error" : undefined
                }
              />
              {fieldError("targetDate")}
            </div>

            <div className="form-field">
              <label htmlFor="budget">Ad Budget</label>
              <select id="budget" name="budget" defaultValue="">
                <option value="" disabled>
                  Select range...
                </option>
                <option value="$1,000-$10,000">$1,000 – $10,000</option>
                <option value="$10,000-$50,000">$10,000 – $50,000</option>
                <option value="$50,000-$100,000">$50,000 – $100,000</option>
                <option value="$100,000+">$100,000+</option>
              </select>
            </div>
          </div>

          {/* Campaign Goals / Notes */}
          <div className="form-field full-width">
            <label htmlFor="notes">Campaign Details (optional)</label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              maxLength={5000}
              placeholder="Tell us about your campaign..."
            />
          </div>

          <div className="form-field full-width">
            <label htmlFor="source">Link to previous campaign (optional)</label>
            <input
              type="text"
              id="source"
              name="source"
              autoComplete="off"
              inputMode="url"
              placeholder="https://"
              aria-invalid={errors.source ? true : undefined}
              aria-describedby={errors.source ? "source-error" : undefined}
            />
            {fieldError("source")}
          </div>

          {/* Honeypot: hidden from humans, bots fill it in */}
          <input
            type="text"
            name="nonce"
            className="hp-field"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Verification Widget */}
          <div className="subscribe-altcha">
            <Altcha />
            {fieldError("altcha")}
          </div>

          <button type="submit" className="ad-submit-btn">
            Submit Booking Request
          </button>

          <p className="subscribe-legal ad-legal">
            We review all inquiries within 24 hours. By submitting, you agree to
            our <Link to="/policies/terms">Terms</Link> &amp;{" "}
            <Link to="/policies/privacy">Privacy Policy</Link>.
          </p>
        </Form>

        <Link to="/" className="back-btn">
          ← Return to The Poast
        </Link>
      </main>
    </div>
  );
}