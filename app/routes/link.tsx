import type {
  ActionFunctionArgs,
  HeadersFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, Form, useActionData, useNavigation } from "@remix-run/react";
import { useState } from "react";

import FeedTopbar from "~/components/feed-topbar";
import FeedFooter from "~/components/feed-footer";
import Altcha from "~/components/altcha";

export const meta: MetaFunction = () => {
  return {
    title: "Share your campaign / thepoast",
    description:
      "Already running ads on social? Share a link and we'll convert it to a thepoast campaign.",
  };
};

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=60, s-maxage=120, stale-while-revalidate=600",
});

const PAYMENT_METHODS = ["Credit Card", "Insertion Order"] as const;

type FieldName =
  | "company"
  | "firstName"
  | "lastName"
  | "email"
  | "link"
  | "paymentMethod"
  | "altcha";

type FormValues = {
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  link: string;
  paymentMethod: string;
};

type ActionData = {
  error?: string;
  debug?: string;
  fieldErrors?: Partial<Record<FieldName, string>>;
  values?: FormValues;
};

type Lead = FormValues;

/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

const str = (value: FormDataEntryValue | null, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const EMAIL_RE = /^[^\s@'"\\]+@[^\s@'"\\]+\.[^\s@'"\\]+$/;

function normalizeUrl(raw: string): string | null {
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

function buildSubscriberName(
  firstName: string,
  lastName: string,
  company: string,
): string {
  return `${firstName} ${lastName}`.trim() || company;
}

/* -------------------------------------------------------------------------- */
/*                                   Listmonk                                 */
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

  return {
    baseUrl,
    apiUser: apiUser as string,
    apiToken: apiToken as string,
    listId,
  };
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
    hint = "Listmonk rejected credentials.";
  } else if (status === 403) {
    hint = "API user lacks permission.";
  } else if (status === 404) {
    hint = "Listmonk URL/path not found.";
  } else if (status === 400) {
    hint = "Listmonk rejected data. Check list ID.";
  }
  return `Listmonk ${step} failed (HTTP ${status}). ${hint} Response: ${body.slice(0, 300)}`;
}

async function saveAdvertiserLead(lead: Lead) {
  const { listId } = listmonkConfig();
  const now = new Date().toISOString();

  // One entry per submission. `request_type` lets you tell these apart from
  // quick bookings (book.tsx) when you look at a subscriber's history.
  const bookingRequest = {
    request_type: "campaign-link",
    submitted_at: now,
    company: lead.company,
    first_name: lead.firstName,
    last_name: lead.lastName,
    link: lead.link,
    payment_method: lead.paymentMethod,
  };

  const attribs = {
    subscriber_type: "advertiser",
    source: "campaign-link-form",
    company: lead.company,
    contact_name: `${lead.firstName} ${lead.lastName}`.trim(),
    first_name: lead.firstName,
    last_name: lead.lastName,
    link: lead.link,
    payment_method: lead.paymentMethod,
    last_submitted_at: now,
    ad_requests: [bookingRequest],
  };

  const name = buildSubscriberName(lead.firstName, lead.lastName, lead.company);

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
      explainListmonkFailure("create", createRes.status, await createRes.text()),
    );
  }

  // Subscriber already exists: look them up and append to their history.
  const query = `subscribers.email = '${lead.email.replace(/'/g, "''")}'`;
  const findRes = await listmonk(
    `/api/subscribers?per_page=1&query=${encodeURIComponent(query)}`,
  );
  if (!findRes.ok) {
    throw new Error(
      explainListmonkFailure("lookup", findRes.status, await findRes.text()),
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
    ]),
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
      explainListmonkFailure("update", updateRes.status, await updateRes.text()),
    );
  }
}

/* -------------------------------------------------------------------------- */
/*                                    Action                                  */
/* -------------------------------------------------------------------------- */

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  // Honeypot: bots fill this in. Pretend it worked.
  if (str(formData.get("nonce"), 200)) {
    return redirect("/thank-you");
  }

  const values: FormValues = {
    company: str(formData.get("company"), 200),
    firstName: str(formData.get("firstName"), 100),
    lastName: str(formData.get("lastName"), 100),
    email: str(formData.get("email"), 254).toLowerCase(),
    link: str(formData.get("link"), 500),
    paymentMethod: str(formData.get("paymentMethod"), 50),
  };
  const altcha = str(formData.get("altcha"), 20000);

  const fieldErrors: NonNullable<ActionData["fieldErrors"]> = {};

  if (!values.company) fieldErrors.company = "Please enter your company.";
  if (!values.firstName) fieldErrors.firstName = "Please enter your first name.";
  if (!values.lastName) fieldErrors.lastName = "Please enter your last name.";
  if (!EMAIL_RE.test(values.email)) {
    fieldErrors.email = "Please enter a valid work email.";
  }

  const link = normalizeUrl(values.link);
  if (!link) fieldErrors.link = "Please enter a valid link.";

  if (!(PAYMENT_METHODS as readonly string[]).includes(values.paymentMethod)) {
    fieldErrors.paymentMethod = "Please choose a payment method.";
  }

  if (process.env.ALTCHA_REQUIRED !== "false" && !altcha) {
    fieldErrors.altcha = "Please complete the verification and try again.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return json<ActionData>(
      { error: "Please fix the highlighted fields.", fieldErrors, values },
      { status: 400 },
    );
  }

  try {
    await saveAdvertiserLead({ ...values, link: link as string });
  } catch (err) {
    console.error("[book/new] failed to save advertiser lead:", err);
    const cause = (err as { cause?: { code?: string; message?: string } })?.cause;
    const reason =
      (err instanceof Error ? err.message : String(err)) +
      (cause ? ` [${cause.code || cause.message}]` : "");

    return json<ActionData>(
      {
        error:
          "Something went wrong sending your request. Please try again in a moment.",
        // Internal error details are only shown when BOOK_DEBUG=true.
        debug: process.env.BOOK_DEBUG === "true" ? reason : undefined,
        values,
      },
      { status: 500 },
    );
  }

  return redirect("/thank-you");
}

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

// book.scss gives every <textarea> a 120px min-height and big rounded corners.
// These inline overrides make the link box a true single row that matches the
// inputs, without touching the shared stylesheet.
const singleRowTextarea: React.CSSProperties = {
  minHeight: 0,
  height: "3.1rem",
  lineHeight: 1.3,
  resize: "none",
  overflow: "hidden",
  borderRadius: "0.8rem",
  whiteSpace: "nowrap",
};

export default function Advertise() {
  const actionData = useActionData<ActionData>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const errors = actionData?.fieldErrors ?? {};
  const values = actionData?.values;

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>(
    values?.paymentMethod || PAYMENT_METHODS[0],
  );

  const fieldError = (name: FieldName) =>
    errors[name] ? (
      <span className="ad-field-error" id={`${name}-error`} role="alert">
        {errors[name]}
      </span>
    ) : null;

  const a11y = (name: FieldName) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <div className="feed-page ad-booking-page">
      <FeedTopbar
        showSubscribe={false}
        onSubscribe={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
      />

      <main className="ad-booking-card">
        <div className="ad-booking-header">
          <span className="ad-badge">Repurpose a campaign</span>
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

          <div className="form-group-row">
            <div className="form-field">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                maxLength={100}
                autoComplete="given-name"
                placeholder="First Name *"
                defaultValue={values?.firstName}
                {...a11y("firstName")}
              />
              {fieldError("firstName")}
            </div>

            <div className="form-field">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                maxLength={100}
                autoComplete="family-name"
                placeholder="Last Name *"
                defaultValue={values?.lastName}
                {...a11y("lastName")}
              />
              {fieldError("lastName")}
            </div>
          </div>

          <div className="form-field full-width">
            <label id="payment-label">Payment Method</label>
            <input
              type="hidden"
              name="paymentMethod"
              value={selectedPaymentMethod}
            />
            <div
              className="pill-group"
              role="group"
              aria-labelledby="payment-label"
            >
              {PAYMENT_METHODS.map((method) => (
                <button
                  type="button"
                  key={method}
                  className={`pill-btn ${
                    selectedPaymentMethod === method ? "active" : ""
                  }`}
                  aria-pressed={selectedPaymentMethod === method}
                  onClick={() => setSelectedPaymentMethod(method)}
                >
                  {method}
                </button>
              ))}
            </div>
            {fieldError("paymentMethod")}
          </div>

          <div className="form-field full-width">
            <label htmlFor="link">Link to existing social media campaign</label>
            <textarea
              id="link"
              name="link"
              rows={1}
              required
              maxLength={500}
              inputMode="url"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              placeholder="http://linkedin.com/ad-library/*******"
              defaultValue={values?.link}
              style={singleRowTextarea}
              {...a11y("link")}
            />
            {fieldError("link")}
          </div>

          {/* Honeypot: hidden from people, irresistible to bots */}
          <input
            type="text"
            name="nonce"
            className="hp-field"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <button type="submit" className="ad-submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting…" : "Repurpose a Campaign"}
          </button>

          <div className="subscribe-altcha">
            <Altcha />
            {fieldError("altcha")}
          </div>
        </Form>

        <div className="feed-legal">
          By submitting, you agree to our{" "}
          <Link to="/policies/terms">terms</Link> &amp;{" "}
          <Link to="/policies/privacy">privacy</Link>
        </div>

        <Link to="/manager" className="back-btn">
          ← Return to Campaign Manager
        </Link>
      </main>

      <FeedFooter />
    </div>
  );
}