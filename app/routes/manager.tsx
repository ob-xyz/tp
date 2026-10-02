import type {
  ActionFunctionArgs,
  HeadersFunction,
} from "@remix-run/node";
import { useState, useEffect, memo, useRef } from "react";
import type { ReactNode, RefObject } from "react";
import { json, redirect } from "@remix-run/node";
import { Link, Form, useActionData, useNavigation } from "@remix-run/react";

import Altcha from "~/components/altcha";


// Where customers land after a successful (or honeypot-caught) submission.
// Must match the route file name: app/routes/thank-you.tsx -> "/thank-you".
const THANK_YOU_PATH = "/thank-you";

// Never leak server error details to visitors unless explicitly enabled
// with BOOK_DEBUG=true in the environment.
const SHOW_ERROR_DETAILS = false;

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
  | "campaignName"
  | "objective"
  | "targetDate"
  | "endDate"
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
  campaignName: string;
  objective: string;
  targetDate: string;
  endDate: string;
  budget: string;
  notes: string;
  previousCampaign: string;
};

// X-style Ad Campaign Objectives for The Poast feed
const OBJECTIVES = [
  {
    value: "reach",
    label: "Reach",
    icon: "megaphone",
    description: "Show your ads to the maximum number of people.",
    howItWorks:
      "Your ads will be optimized to reach as many unique people as possible within your budget.",
    goodFor: ["Brand awareness", "Impressions"],
  },
  {
    value: "engagements",
    label: "Engagements",
    icon: "heart",
    description: "Get people to engage with your post.",
    howItWorks:
      "Your ads will be shown to people most likely to like, reply to, or repost your content.",
    goodFor: ["Link clicks", "Product page views"],
  },
  {
    value: "website_traffic",
    label: "Website traffic",
    icon: "globe",
    description: "Send people to your website or landing page.",
    howItWorks:
      "We'll show your ads to people most likely to click through to your site and take action.",
    goodFor: ["Link clicks", "Landing page views"],
  },
  {
    value: "video_views",
    label: "Video views",
    icon: "video",
    description: "Promote your videos to people most likely to watch them.",
    howItWorks:
      "Your video will be served to users who are most likely to watch it, maximizing completed views.",
    goodFor: ["Video views", "Brand awareness"],
  },
  {
    value: "app_installs",
    label: "App installs",
    icon: "smartphone",
    description: "Drive downloads to your mobile app.",
    howItWorks:
      "Ads link directly to your app store listing and target people most likely to download.",
    goodFor: ["App installs", "App clicks"],
  },
  {
    value: "sales",
    label: "Sales",
    icon: "shopping_bag",
    description: "Drive purchases, sign-ups, or other conversions on your website.",
    howItWorks:
      "We'll optimize delivery toward people most likely to complete a purchase or other conversion event on your site.",
    goodFor: ["Conversions", "Website purchases"],
  },
] as const;

type ObjectiveIcon = (typeof OBJECTIVES)[number]["icon"];

const ObjectiveIconSvg = memo(({ name }: { name: ObjectiveIcon }) => {
  const paths: Record<ObjectiveIcon, ReactNode> = {
    heart: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
    video: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="3" ry="3" />
        <path d="M10 9l5 3-5 3V9z" />
      </>
    ),
    smartphone: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
      </>
    ),
    shopping_bag: (
      <>
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </>
    ),
    megaphone: (
      <>
        <path d="M3 11l18-5v12L3 13v-2z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
});

ObjectiveIconSvg.displayName = "ObjectiveIconSvg";

const BUDGET_OPTIONS = [
  { value: "$1,500 - $3,000", label: "$1,500 – $3,000" },
  { value: "$3,000 - $7,500", label: "$3,000 – $7,500" },
  { value: "$7,500 - $15,000", label: "$7,500 – $15,000" },
  { value: "$15,000+", label: "$15,000+" },
] as const;

const str = (value: FormDataEntryValue | null, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

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

function buildSubscriberName(contactName: string, company: string): string {
  const first = contactName.split(/\s+/)[0] || contactName;
  return `${first} ${company}`.trim();
}

/* -------------------------------------------------------------------------- */
/*                                LISTMONK API                                */
/* -------------------------------------------------------------------------- */

function listmonkConfig() {
  const baseUrl = (
    process.env.LISTMONK_URL || "https://app.thepoast.com"
  ).replace(/\/+$/, "");
  const apiUser = process.env.LISTMONK_API_USER || process.env.LISTMONK_USERNAME;
  const apiToken = process.env.LISTMONK_API_TOKEN || process.env.LISTMONK_TOKEN;
  const listId = Number(process.env.LISTMONK_ADVERTISER_LIST_ID || 31);

  const missing: string[] = [];
  if (!apiUser) missing.push("LISTMONK_USERNAME");
  if (!apiToken) missing.push("LISTMONK_TOKEN");
  if (!Number.isInteger(listId) || listId < 1) {
    missing.push("LISTMONK_ADVERTISER_LIST_ID");
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
    hint = "Listmonk rejected credentials. Check LISTMONK_API_USER / LISTMONK_API_TOKEN.";
  } else if (status === 403) {
    hint = "API user lacks permission. Assign 'subscribers:manage' role.";
  } else if (status === 404) {
    hint = "Listmonk URL not found. Check LISTMONK_URL.";
  } else if (status === 400) {
    hint = "Listmonk rejected data. Verify numeric LISTMONK_ADVERTISER_LIST_ID.";
  }
  return `Listmonk ${step} failed (HTTP ${status}). ${hint} Response: ${body.slice(0, 300)}`;
}

async function saveAdvertiserLead(lead: Lead) {
  const { listId } = listmonkConfig();
  const now = new Date().toISOString();

  const bookingRequest = {
    submitted_at: now,
    company: lead.company,
    website: lead.website,
    campaign_name: lead.campaignName,
    objective: lead.objective,
    start_date: lead.targetDate,
    end_date: lead.endDate,
    budget: lead.budget,
    notes: lead.notes,
    previous_campaign: lead.previousCampaign,
  };

  const attribs = {
    subscriber_type: "advertiser",
    source: "advertise-form",
    company: lead.company,
    website: lead.website,
    contact_name: lead.contactName,
    campaign_name: lead.campaignName,
    objective: lead.objective,
    start_date: lead.targetDate,
    end_date: lead.endDate,
    budget: lead.budget,
    notes: lead.notes,
    ...(lead.previousCampaign ? { previous_campaign: lead.previousCampaign } : {}),
    last_submitted_at: now,
    ad_requests: [bookingRequest],
  };

  const name = buildSubscriberName(lead.contactName, lead.company);

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
    throw new Error("Listmonk said email exists but lookup returned nothing");
  }

  const existingAttribs = existing.attribs ?? {};
  const history = Array.isArray(existingAttribs.ad_requests)
    ? existingAttribs.ad_requests
    : [];

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

  if (str(formData.get("nonce"), 200)) {
    return redirect(THANK_YOU_PATH);
  }

  const company = str(formData.get("company"), 200);
  const websiteRaw = str(formData.get("website"), 300);
  const contactName = str(formData.get("name"), 200);
  const email = str(formData.get("email"), 254).toLowerCase();
  const campaignNameRaw = str(formData.get("campaignName"), 120);
  const objectiveValue = str(formData.get("objective"), 30);
  const targetDate = str(formData.get("targetDate"), 10);
  const endDate = str(formData.get("endDate"), 10);
  const budget = str(formData.get("budget"), 50);
  const notes = str(formData.get("notes"), 5000);
  const sourceRaw = str(formData.get("source"), 300);
  const altcha = str(formData.get("altcha"), 20000);

  const fieldErrors: ActionData["fieldErrors"] = {};

  if (!company) fieldErrors.company = "Please enter your company name.";
  if (!contactName) fieldErrors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid work email.";

  const website = normalizeWebsite(websiteRaw);
  if (!website) fieldErrors.website = "Please enter a valid website URL.";

  let previousCampaign = "";
  if (sourceRaw) {
    const normalized = normalizeWebsite(sourceRaw);
    if (normalized) {
      previousCampaign = normalized;
    } else {
      fieldErrors.source = "Please enter a valid URL, or leave this field blank.";
    }
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(targetDate) || Number.isNaN(Date.parse(targetDate))) {
    fieldErrors.targetDate = "Please select a campaign start date.";
  }

  if (!fieldErrors.targetDate) {
    // Allow yesterday (UTC) so customers in timezones ahead/behind the server still pass.
    const earliest = new Date(Date.now() - 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);
    if (targetDate < earliest) {
      fieldErrors.targetDate = "Start date can't be in the past.";
    }
  }

  if (endDate) {
    const validEnd =
      /^\d{4}-\d{2}-\d{2}$/.test(endDate) && !Number.isNaN(Date.parse(endDate));
    if (!validEnd) {
      fieldErrors.endDate = "Please select a valid end date, or leave blank.";
    } else if (!fieldErrors.targetDate && endDate < targetDate) {
      fieldErrors.endDate = "End date must be on or after the start date.";
    }
  }

  const objective = OBJECTIVES.find((o) => o.value === objectiveValue);
  if (!objective) fieldErrors.objective = "Please choose a campaign placement objective.";

  if (process.env.ALTCHA_REQUIRED !== "false" && !altcha) {
    fieldErrors.altcha = "Please complete the security verification below.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return json<ActionData>(
      { error: "Please review and complete the highlighted fields.", fieldErrors },
      { status: 400 }
    );
  }

  const campaignName = campaignNameRaw || `${company} — ${targetDate}`;

  try {
    await saveAdvertiserLead({
      company,
      website: website as string,
      contactName,
      email,
      campaignName,
      objective: (objective as (typeof OBJECTIVES)[number]).label,
      targetDate,
      endDate,
      budget,
      notes,
      previousCampaign,
    });
  } catch (err) {
    console.error("[book] failed to save advertiser lead:", err);

    const cause = (err as { cause?: { code?: string; message?: string } })?.cause;
    const reason =
      (err instanceof Error ? err.message : String(err)) +
      (cause ? ` [${cause.code || cause.message}]` : "");

    return json<ActionData>(
      {
        error: "Unable to process booking request right now. Please try again.",
        debug:
          SHOW_ERROR_DETAILS || process.env.BOOK_DEBUG === "true"
            ? reason
            : undefined,
      },
      { status: 500 }
    );
  }

  return redirect(THANK_YOU_PATH);
}

/* -------------------------------------------------------------------------- */
/*                                    PAGE                                    */
/* -------------------------------------------------------------------------- */

export default function Advertise() {
  const actionData = useActionData<ActionData>();
  const errors = actionData?.fieldErrors ?? {};
  const navigation = useNavigation();
  // Stay "busy" through the redirect to /thank-you so the form can't be double-submitted.
  const submitting =
    navigation.state === "submitting" ||
    (navigation.state === "loading" && navigation.formMethod === "POST");

  const [objectiveValue, setObjectiveValue] = useState<string>(OBJECTIVES[0].value);
  const selectedObjective =
    OBJECTIVES.find((o) => o.value === objectiveValue) ?? OBJECTIVES[0];

  const targetDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);

  const [startDate, setStartDate] = useState("");
  const [minDate, setMinDate] = useState<string | undefined>(undefined);

  // Local "today" computed on the client only (avoids SSR hydration mismatch).
  useEffect(() => {
    const d = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    setMinDate(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
  }, []);

  // After a failed submit, jump to the first problem.
  useEffect(() => {
    if (!actionData) return;
    const invalid = document.querySelector<HTMLElement>(
      '.ad-booking-form [aria-invalid="true"]'
    );
    if (invalid) {
      invalid.focus();
      return;
    }
    document
      .querySelector<HTMLElement>(".ad-form-error, .ad-field-error")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [actionData]);

  const openPicker = (ref: RefObject<HTMLInputElement>) => {
    if (ref.current) {
      if ("showPicker" in ref.current && typeof ref.current.showPicker === "function") {
        try {
          ref.current.showPicker();
        } catch {
          ref.current.focus();
        }
      } else {
        ref.current.focus();
      }
    }
  };

  const fieldError = (name: FieldName) =>
    errors[name] ? (
      <span className="ad-field-error" id={`${name}-error`} role="alert">
        {errors[name]}
      </span>
    ) : null;

  return (
    <div className="feed-page ad-booking-page">
      <header className="feed-topbar">
        <Link className="feed-mark" to="/" aria-label="Return to The Poast homepage">
          <img src="/img/tp.png" alt="The Poast" decoding="async" />
        </Link>
      </header>

      <main className="ad-booking-card">
        <div className="ad-booking-header">
          <div className="ad-badge">New Campaign</div>
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

          {/* Section 1: Campaign Setup & Objectives */}
          <div className="ad-form-section ad-form-setup">
            <div className="form-field ad-name-card">
              <input
                type="text"
                id="campaignName"
                name="campaignName"
                maxLength={120}
                autoComplete="off"
                placeholder="Campaign Name *"
                aria-describedby="campaignName-hint"
              />
              <p className="ad-field-hint" id="campaignName-hint">
                Leave blank and we'll generate one automatically.
              </p>
            </div>

            <fieldset
              className="form-field ad-objective-group"
              aria-describedby={errors.objective ? "objective-error" : "objective-hint"}
            >
              <legend>Ad Objective</legend>
              <p className="ad-field-hint" id="objective-hint">
                Pick the objective that best matches your goals.
              </p>

              <div className="ad-objectives">
                {OBJECTIVES.map((option) => (
                  <label key={option.value} className="ad-objective">
                    <input
                      type="radio"
                      name="objective"
                      value={option.value}
                      checked={objectiveValue === option.value}
                      onChange={() => setObjectiveValue(option.value)}
                    />
                    <span className="ad-objective-card">
                      <span className="ad-objective-head">
                        <span className="ad-objective-icon">
                          <ObjectiveIconSvg name={option.icon} />
                        </span>
                        {option.label}
                      </span>
                      <span className="ad-objective-desc">{option.description}</span>
                    </span>
                  </label>
                ))}
              </div>

              {/* Dynamic Objective Detail Card matching X-style layout */}
              <div className="ad-objective-detail" aria-live="polite">
                <div className="ad-detail-inner" key={selectedObjective.value}>
                  <div className="ad-detail-head">
                    <span className="ad-detail-icon">
                      <ObjectiveIconSvg name={selectedObjective.icon} />
                    </span>
                    <span className="ad-detail-name">{selectedObjective.label}</span>
                  </div>
                  <p className="ad-detail-lead">{selectedObjective.description}</p>

                  <p className="ad-detail-heading">How it works</p>
                  <p className="ad-detail-text">{selectedObjective.howItWorks}</p>

                  <p className="ad-detail-heading">Good for</p>
                  <ul className="ad-detail-tags">
                    {selectedObjective.goodFor.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {fieldError("objective")}
            </fieldset>
          </div>

          {/* Section 2: Contact Details */}
          <div className="ad-form-section">
            <h2 className="ad-section-heading">Advertiser Information</h2>
            <div className="form-group-row">
              <div className="form-field">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  autoComplete="organization"
                  placeholder="Company *"
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
                  placeholder="Website *"
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
                  placeholder="Business Email *"
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {fieldError("email")}
              </div>
            </div>
          </div>

          {/* Section 3: Schedule & Budget */}
          <div className="ad-form-section">
            <h2 className="ad-section-heading">Schedule & Budget</h2>
            <div className="form-group-row">
              <div className="form-field">
                <label htmlFor="targetDate">Target Start Date</label>
                <div
                  className="ad-date-input-wrapper"
                  onClick={() => openPicker(targetDateRef)}
                >
                  <input
                    ref={targetDateRef}
                    type="date"
                    id="targetDate"
                    name="targetDate"
                    required
                    min={minDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    aria-invalid={errors.targetDate ? true : undefined}
                    aria-describedby={errors.targetDate ? "targetDate-error" : undefined}
                  />
                  <span className="ad-date-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </span>
                </div>
                {fieldError("targetDate")}
              </div>

              <div className="form-field">
                <label htmlFor="endDate">End Date (Optional)</label>
                <div
                  className="ad-date-input-wrapper"
                  onClick={() => openPicker(endDateRef)}
                >
                  <input
                    ref={endDateRef}
                    type="date"
                    id="endDate"
                    name="endDate"
                    min={startDate || minDate}
                    aria-invalid={errors.endDate ? true : undefined}
                    aria-describedby={errors.endDate ? "endDate-error" : undefined}
                  />
                  <span className="ad-date-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </span>
                </div>
                {fieldError("endDate")}
              </div>
            </div>

            <fieldset className="form-field ad-budget">
              <div className="ad-chips">
                {BUDGET_OPTIONS.map((option) => (
                  <label key={option.value} className="ad-chip">
                    <input type="radio" name="budget" value={option.value} defaultChecked={option.value === BUDGET_OPTIONS[0].value} />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Section 4: Campaign Details */}
          <div className="ad-form-section">
            <h2 className="ad-section-heading">More Context</h2>
            <div className="form-field full-width">
              <textarea
                id="notes"
                name="notes"
                rows={4}
                maxLength={5000}
                placeholder="Share your UTM tracking code, landing page URL, or a few details about your campaign..."
              />
            </div>
            
            <h2 className="ad-section-heading">Submit Existing Campaign</h2>
            <div className="form-field full-width">
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
          </div>

          {/* Security Honeypot */}
          <input
            type="text"
            name="nonce"
            className="hp-field"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Section 5: Verification & Submit */}
          <div className="ad-form-section ad-form-submit">
            <div className="subscribe-altcha">
              <Altcha />
              {fieldError("altcha")}
            </div>

            <button
              type="submit"
              className="ad-submit-btn"
              disabled={submitting}
              aria-busy={submitting}
            >
              {submitting ? "Submitting Request..." : "Submit Booking Request"}
            </button>

            <p className="subscribe-legal ad-legal">
              Inquiries receive custom media kit availability within 24 business hours. By submitting, you agree to our <Link to="/policies/terms">Terms</Link> &amp; <Link to="/policies/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </Form>

        <Link to="/" className="back-btn">
          ← Return to The Poast Feed
        </Link>
      </main>
    </div>
  );
}