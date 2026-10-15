import { Fragment, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  Link,
  useLoaderData,
  useActionData,
  Form,
  useNavigation,
  useCatch,
} from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type {
  LoaderFunctionArgs,
  ActionFunctionArgs,
  HeadersFunction,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";

import FeedEmbed from "~/components/feed-embed";
import Altcha from "~/components/altcha";
import NotFound from "~/routes/$"; // your existing custom 404 page
import bookStyles from "../../style/scss/custom/custom.css";

const CAMPAIGN_MAP: Record<string, number> = {
  livead: 4,
  advertise: 5,
  fin: 507,
  stripe: 451,
};

const BANNER_TRIGGER = 0.85;

const STEPS = ["Preview", "Schedule", "Confirm"] as const;
const PLACEMENTS_PAID = ["Top of Feed — $2,500", "Mid Feed — $1,000"] as const;
const PLACEMENTS_FREE = ["Top of Feed", "Mid Feed"] as const;
const RAW_PLACEMENTS = ["Top of Feed", "Mid Feed"] as const;
const PAYMENT_METHODS = ["Credit Card", "Insertion Order", "Free"] as const;

type Placement = (typeof RAW_PLACEMENTS)[number];
type PaymentMethod = (typeof PAYMENT_METHODS)[number];

type FieldName = "company" | "startDate" | "placement" | "paymentMethod" | "notes" | "altcha";

type ActionData = {
  error?: string;
  debug?: string;
  fieldErrors?: Partial<Record<FieldName, string>>;
};

type CampaignLead = {
  company: string;
  startDate: string;
  placement: string;
  paymentMethod: string;
  notes: string;
  campaignId: number;
};

const str = (value: FormDataEntryValue | null, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

function formatDate(value: string): string {
  const [y, m, d] = value.split("-").map(Number);
  if (!y || !m || !d) return value;
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

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
  if (status === 401) hint = "Listmonk rejected credentials.";
  else if (status === 403) hint = "API user lacks permission.";
  else if (status === 404) hint = "Listmonk URL/path not found.";
  else if (status === 400) hint = "Listmonk rejected data. Check list ID.";
  return `Listmonk ${step} failed (HTTP ${status}). ${hint} Response: ${body.slice(0, 300)}`;
}

async function saveCampaignBooking(lead: CampaignLead, companySlug: string) {
  const { listId } = listmonkConfig();
  const now = new Date().toISOString();

  const bookingRequest = {
    submitted_at: now,
    company: lead.company,
    start_date: lead.startDate,
    placement: lead.placement,
    payment_method: lead.paymentMethod,
    notes: lead.notes,
    campaign_id: lead.campaignId,
  };

  const attribs = {
    subscriber_type: "advertiser",
    source: `${companySlug}-booking-flow`,
    company: lead.company,
    start_date: lead.startDate,
    placement: lead.placement,
    payment_method: lead.paymentMethod,
    notes: lead.notes,
    last_submitted_at: now,
    ad_requests: [bookingRequest],
  };

  const email = `campaign+${companySlug}@thepoast.com`;
  const name = `${lead.company} Campaign Lead`;

  const createRes = await listmonk("/api/subscribers", {
    method: "POST",
    body: JSON.stringify({
      email,
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

  const query = `subscribers.email = '${email.replace(/'/g, "''")}'`;
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

export async function loader({ params }: LoaderFunctionArgs) {
  const company = params.company?.toLowerCase() || "";
  const campaignId = CAMPAIGN_MAP[company];

  if (!campaignId) {
    throw new Response("Campaign not found", { status: 404 });
  }

  const companyName = company.charAt(0).toUpperCase() + company.slice(1);

  return {
    company,
    companyName,
    campaignId,
  };
}

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const companySlug = params.company?.toLowerCase() || "unknown";

  if (str(formData.get("nonce"), 200)) {
    return redirect("/thank-you");
  }

  const company = str(formData.get("company"), 200);
  const startDate = str(formData.get("startDate"), 50);
  const placement = str(formData.get("placement"), 50);
  const paymentMethod = str(formData.get("paymentMethod"), 50);
  const notes = str(formData.get("notes"), 5000);
  const altcha = str(formData.get("altcha"), 20000);

  const fieldErrors: ActionData["fieldErrors"] = {};

  if (!company) fieldErrors.company = "Company name is required.";
  if (!startDate) fieldErrors.startDate = "Please select a target start date.";
  if (!["Top of Feed", "Mid Feed"].includes(placement)) {
    fieldErrors.placement = "Please select a valid placement.";
  }
  if (!["Credit Card", "Insertion Order", "Free"].includes(paymentMethod)) {
    fieldErrors.paymentMethod = "Please select a payment method.";
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

  const campaignId = CAMPAIGN_MAP[companySlug] || 0;

  try {
    await saveCampaignBooking(
      {
        company,
        startDate,
        placement,
        paymentMethod,
        notes,
        campaignId,
      },
      companySlug
    );
  } catch (err) {
    console.error("[book] failed to save campaign booking lead:", err);
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

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return { title: "404 / thepoast", robots: "noindex" };
  }
  return {
    title: `Book ${data.companyName} x thepoast`,
  };
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: bookStyles },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" },
];

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=300",
});

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <NotFound />;
  }

  throw new Error(`Unexpected response: ${caught.status}`);
}

function useReachedEndOfFeed() {
  const endRef = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const el = endRef.current;
    if (!el) return;

    let frame = 0;
    const check = () => {
      frame = 0;
      const top = el.getBoundingClientRect().top;
      setReached(window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined" && el.parentElement) {
      resizeObserver = new ResizeObserver(schedule);
      resizeObserver.observe(el.parentElement);
    }

    check();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resizeObserver?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return { endRef, reached };
}

/* ------------------------------------------------------------------ */
/* Small UI pieces                                                     */
/* ------------------------------------------------------------------ */

function CalendarIcon() {
  return (
    <svg
      className="bk-date-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4.5" width="18" height="16.5" rx="3" />
      <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function Segmented<T extends string>({
  label,
  options,
  rawOptions,
  value,
  onChange,
}: {
  label: string;
  options: readonly T[];
  rawOptions?: readonly string[];
  value: T;
  onChange: (next: T) => void;
}) {
  const lookupArray = rawOptions ? rawOptions : options;
  const index = Math.max(0, lookupArray.indexOf(value));

  return (
    <div
      className={`bk-seg is-${options.length}`}
      role="group"
      aria-label={label}
      style={{ "--bk-i": index, "--bk-n": options.length } as CSSProperties}
    >
      <span className="bk-seg-thumb" aria-hidden="true" />
      {options.map((option, i) => {
        const rawValue = rawOptions ? rawOptions[i] : option;
        const isActive = rawValue === value;
        return (
          <button
            type="button"
            key={option}
            aria-pressed={isActive}
            className={`bk-seg-btn${isActive ? " is-active" : ""}`}
            onClick={() => onChange(rawValue as T)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function AdvertiserBookPage() {
  const { company, companyName } = useLoaderData<typeof loader>();
  const actionData = useActionData<ActionData>();
  const errors: Partial<Record<FieldName, string>> = actionData?.fieldErrors ?? {};
  const { endRef, reached } = useReachedEndOfFeed();
  const navigation = useNavigation();

  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [startDate, setStartDate] = useState("");
  const [placement, setPlacement] = useState<Placement>("Top of Feed");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("Credit Card");
  const [notes, setNotes] = useState("");
  const [stepError, setStepError] = useState("");
  const [minDate, setMinDate] = useState("");
  const [isEditingCreative, setIsEditingCreative] = useState(false);

  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    const d = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    setMinDate(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
  }, []);

  const openPicker = (input: HTMLInputElement) => {
    try {
      input.showPicker();
    } catch {}
  };

  const goToReview = () => {
    if (!startDate) {
      setStepError("Please select a target start date before proceeding.");
      return;
    }
    if (minDate && startDate < minDate) {
      setStepError("Please choose a start date that isn't in the past.");
      return;
    }
    setStepError("");
    setStep(3);
  };

  const summaryRows: { label: string; value: string }[] = [
    { label: "Advertiser", value: companyName },
    { label: "Target Date", value: startDate ? formatDate(startDate) : "Earliest Available" },
    { label: "Placement", value: placement },
    { label: "Payment Method", value: paymentMethod },
  ];

  const serverFieldMessages = Object.entries(errors)
    .filter(([key, message]) => key !== "altcha" && message)
    .map(([, message]) => message as string);

  const submitLabel = isSubmitting
    ? "Submitting..."
    : paymentMethod === "Insertion Order"
    ? "Lock In Insertion Order →"
    : paymentMethod === "Free"
    ? "Lock In Free Campaign →"
    : "Proceed with Credit Card →";

  // Dynamic placement options depending on payment method
  const currentPlacements = paymentMethod === "Free" ? PLACEMENTS_FREE : PLACEMENTS_PAID;

  return (
    <div className="feed-page bk">
      {/* Sticky Top Bar */}
      <header
        className={`feed-topbar${reached ? " is-hidden" : ""}`}
        style={{ borderLeft: "none", borderRight: "none" }}
      >
        <Link className="feed-mark" to="/">
          <img src="/img/tp.png" alt="thepoast" decoding="async" />
        </Link>
      </header>

      <main className="feed-stream bk-main">

        {/* Stepper */}
        <ol className="bk-steps" aria-label="Progress">
          {STEPS.map((label, i) => {
            const n = (i + 1) as 1 | 2 | 3;
            const state = step === n ? "current" : step > n ? "done" : "todo";
            return (
              <Fragment key={label}>
                {i > 0 && (
                  <li
                    className={`bk-step-line${step >= n ? " is-done" : ""}`}
                    aria-hidden="true"
                  />
                )}
                <li
                  className={`bk-step is-${state}`}
                  aria-current={state === "current" ? "step" : undefined}
                >
                  <button
                    type="button"
                    className="bk-step-btn"
                    disabled={state !== "done"}
                    onClick={() => setStep(n)}
                  >
                    <span className="bk-step-dot">
                      {state === "done" ? <CheckIcon /> : n}
                    </span>
                    <span className="bk-step-label">{label}</span>
                  </button>
                </li>
              </Fragment>
            );
          })}
        </ol>

        {/* STEP 1: PREVIEW CREATIVE */}
        {step === 1 && (
          <div className="bk-card">
            <h1 className="bk-title">Here's how your ad will look</h1>

            <div className="feed-embed loaded bk-preview">
              <FeedEmbed
                id={`${company}-ad-storyboard`}
                src={`/custom/${company}/storyboard`}
                title={`${companyName} Target Ad Unit`}
                interactive
                bordered={false}
                fallbackHeight={350}
              />
            </div>

            <button
              type="button"
              className="bk-btn bk-btn-primary bk-btn-block"
              onClick={() => setStep(2)}
            >
              Looks Great — Select Send Date →
            </button>
            <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
              {!isEditingCreative ? (
                <button
                  type="button"
                  onClick={() => setIsEditingCreative(true)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#a1a1a6",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    textDecoration: "underline",
                    marginTop: "1rem",
                  }}
                >
                  Want to use a different ad?
                </button>
              ) : (
                <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#161616", borderRadius: "12px", border: "1px solid #2a2a2a", fontSize: "0.85rem", color: "#a1a1a6" }}>
                  No problem! Customize your campaign or link a different ad in the final step.
                </div>
              )}
            </div>
          </div>
        )}

        {/* STEP 2: SCHEDULE & PLACEMENT */}
        {step === 2 && (
          <div className="bk-card">

            <div className="bk-fields">

              {/* TARGET START DATE */}
              <div className="bk-group">
                <span className="bk-label" id="bk-date-label">Target Start Date</span>

                <label className="bk-date">
                  <span className={`bk-date-text${startDate ? "" : " is-empty"}`}>
                    {startDate ? formatDate(startDate) : "Select launch date"}
                  </span>
                  <CalendarIcon />
                  <input
                    type="date"
                    className="bk-date-input"
                    aria-labelledby="bk-date-label"
                    value={startDate}
                    min={minDate || undefined}
                    onClick={(e) => openPicker(e.currentTarget)}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                      setStepError("");
                    }}
                  />
                </label>

                {(stepError || errors.startDate) && (
                  <span className="bk-error" role="alert">
                    {stepError || errors.startDate}
                  </span>
                )}
              </div>

              {/* SELECT PLACEMENT */}
              <div className="bk-group">
                <span className="bk-label">Select Placement</span>
                <Segmented
                  label="Placement"
                  options={currentPlacements}
                  rawOptions={RAW_PLACEMENTS}
                  value={placement}
                  onChange={setPlacement}
                />
              </div>

              {/* PAYMENT METHOD */}
              <div className="bk-group">
                <span className="bk-label">Payment Method</span>
                <Segmented
                  label="Payment method"
                  options={PAYMENT_METHODS}
                  value={paymentMethod}
                  onChange={setPaymentMethod}
                />
              </div>

            </div>

            <div className="bk-actions">
              <button
                type="button"
                className="bk-btn bk-btn-secondary"
                onClick={() => setStep(1)}
              >
                ← Back
              </button>

              <button
                type="button"
                className="bk-btn bk-btn-primary"
                onClick={goToReview}
              >
                Review Order →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: FINAL REVIEW & SUBMIT */}
        {step === 3 && (
          <Form method="post" className="bk-card">
            {actionData?.error && (
              <div className="bk-alert" role="alert">
                {actionData.error}
                {serverFieldMessages.length > 0 && (
                  <ul>
                    {serverFieldMessages.map((message) => (
                      <li key={message}>{message}</li>
                    ))}
                  </ul>
                )}
                {actionData.debug && <code>{actionData.debug}</code>}
              </div>
            )}

            <input type="hidden" name="company" value={companyName} />
            <input type="hidden" name="startDate" value={startDate} />
            <input type="hidden" name="placement" value={placement} />
            <input type="hidden" name="paymentMethod" value={paymentMethod} />
            <input
              type="text"
              name="nonce"
              className="hp-field"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ display: "none" }}
            />

            {/* Quick Preview Thumbnail Header on Step 3 */}
            <div style={{ marginBottom: "1.5rem" }}>
              <span className="bk-label" style={{ marginBottom: "0.5rem", textAlign: "center" }}>Ad Preview</span>
              <div className="feed-embed loaded bk-preview" style={{ maxHeight: "220px", overflow: "hidden", marginBottom: 0 }}>
                <FeedEmbed
                  id={`${company}-ad-thumbnail`}
                  src={`/custom/${company}/storyboard`}
                  title={`${companyName} Target Ad Unit`}
                  interactive={false}
                  bordered={false}
                  fallbackHeight={220}
                />
              </div>
            </div>

            <dl className="bk-summary">
              {summaryRows.map((row) => (
                <div key={row.label} className="bk-row">
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="bk-group" style={{ marginBottom: "1.5rem" }}>
              <label className="bk-label" htmlFor="bk-notes">
                Additional Notes (Optional)
              </label>
              <textarea
                id="bk-notes"
                name="notes"
                className="bk-textarea"
                rows={3}
                placeholder="Special instructions or tracking links..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <div className="bk-altcha">
              <Altcha />
            </div>
            {errors.altcha && (
              <span className="bk-error" role="alert" style={{ marginBottom: "1.25rem" }}>
                {errors.altcha}
              </span>
            )}

            <div className="bk-actions">
              <button
                type="button"
                className="bk-btn bk-btn-secondary"
                onClick={() => setStep(2)}
              >
                ← Back
              </button>

              <button
                type="submit"
                className="bk-btn bk-btn-primary"
                disabled={isSubmitting}
              >
                {submitLabel}
              </button>
            </div>
          </Form>
        )}

        <div ref={endRef} className="feed-end-marker" aria-hidden="true" />
        <Link to={`/${company}`} className="back-btn">
          ← Return to Sample
        </Link>
      </main>

      <footer className="feed-footer">
        <div className="feed-footer-links">
          <Link to="/about">about</Link>
          <Link to="/archive">archive</Link>
          <Link to="/submit-post">submit post</Link>
          <Link to="/policies/privacy">privacy</Link>
          <Link to="/policies/terms">terms</Link>
          <Link to="/manager">manager</Link>
          <Link to="/partner">partner</Link>
          <Link to="/book">advertise</Link>
        </div>
        <p className="feed-copyright">thepoast © 2026</p>
      </footer>
    </div>
  );
}