import type {
  ActionFunctionArgs,
  HeadersFunction,
  MetaFunction
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, Form, useActionData } from "@remix-run/react";
import { useState } from "react";

import Altcha from "~/components/altcha";

export const meta: MetaFunction = () => {
  return {
    title: "Book Ad Campaign / thepoast",
    description: "Book an ad campaign for your company or brand here.",
  };
};

const SHOW_ERROR_DETAILS = true;

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=60, s-maxage=120, stale-while-revalidate=600",
});

type FieldName =
  | "company"
  | "website"
  | "name"
  | "email"
  | "phone"
  | "notes"
  | "paymentMethod"
  | "altcha";

type ActionData = {
  error?: string;
  debug?: string;
  fieldErrors?: Partial<Record<FieldName, string>>;
};

type Lead = {
  company: string;
  website: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
  paymentMethod: string;
};

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

function buildSubscriberName(
  firstName: string,
  lastName: string,
  company: string,
): string {
  return `${firstName} ${lastName}`.trim() || company;
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

  const bookingRequest = {
    submitted_at: now,
    company: lead.company,
    website: lead.website,
    first_name: lead.firstName,
    last_name: lead.lastName,
    phone: lead.phone,
    notes: lead.notes,
    payment_method: lead.paymentMethod,
  };

  const attribs = {
    subscriber_type: "advertiser",
    source: "advertise-form",
    company: lead.company,
    website: lead.website,
    contact_name: `${lead.firstName} ${lead.lastName}`.trim(),
    first_name: lead.firstName,
    last_name: lead.lastName,
    phone: lead.phone,
    notes: lead.notes,
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

/* -------------------------------------------------------------------------- */
/*                                   ACTION                                   */
/* -------------------------------------------------------------------------- */

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  if (str(formData.get("nonce"), 200)) {
    return redirect("/thank-you");
  }

  const company = str(formData.get("company"), 200);
  const websiteRaw = str(formData.get("website"), 300);
  const firstName = str(formData.get("firstName"), 100);
  const lastName = str(formData.get("lastName"), 100);
  const email = str(formData.get("email"), 254).toLowerCase();
  const phone = str(formData.get("phone"), 50);
  const notes = str(formData.get("notes"), 5000);
  const paymentMethod = str(formData.get("paymentMethod"), 50);
  const altcha = str(formData.get("altcha"), 20000);

  const fieldErrors: ActionData["fieldErrors"] = {};

  if (!company) fieldErrors.company = "Please enter your company.";
  if (!firstName) fieldErrors.name = "Please enter your first name.";
  if (!lastName) fieldErrors.name = "Please enter your last name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid work email.";

  const website = normalizeWebsite(websiteRaw);
  if (!website) fieldErrors.website = "Please enter a valid website.";

  if (!["Credit Card", "Insertion Order"].includes(paymentMethod)) {
    fieldErrors.paymentMethod = "Please choose a payment method.";
  }

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
      firstName,
      lastName,
      email,
      phone,
      notes,
      paymentMethod,
    });
  } catch (err) {
    console.error("[book] failed to save advertiser lead:", err);
    const cause = (err as { cause?: { code?: string; message?: string } })?.cause;
    const reason =
      (err instanceof Error ? err.message : String(err)) +
      (cause ? ` [${cause.code || cause.message}]` : "");

    return json<ActionData>(
      {
        error: "Something went wrong sending your request. Please try again in a moment.",
        debug: SHOW_ERROR_DETAILS || process.env.BOOK_DEBUG === "true" ? reason : undefined,
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

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("Credit Card");

  const fieldError = (name: FieldName) =>
    errors[name] ? (
      <span className="ad-field-error" id={`${name}-error`} role="alert">
        {errors[name]}
      </span>
    ) : null;

  return (
    <div className="feed-page ad-booking-page">
      <header className="feed-topbar">
        <Link className="feed-mark" to="/">
          <img src="/img/tp.png" alt="thepoast" decoding="async" />
        </Link>
      </header>

      <main className="ad-booking-card">
        <div className="ad-booking-header">
          <span className="ad-badge">ADVERTISE with us</span>
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
                placeholder="https://"
                aria-invalid={errors.website ? true : undefined}
                aria-describedby={errors.website ? "website-error" : undefined}
              />
              {fieldError("website")}
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-field">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                autoComplete="given-name"
                placeholder="First Name *"
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {fieldError("name")}
            </div>

            <div className="form-field">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                autoComplete="family-name"
                placeholder="Last Name *"
              />
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-field">
              <label htmlFor="email">Business Email</label>
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

            <div className="form-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="Phone Number *"
                aria-invalid={errors.phone ? true : undefined}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {fieldError("phone")}
            </div>
          </div>

          {/* Payment Method */}
          <div className="form-field full-width">
            <label>Payment Method</label>
            <input
              type="hidden"
              name="paymentMethod"
              value={selectedPaymentMethod}
            />
            <div className="pill-group">
              {["Credit Card", "Insertion Order"].map((method) => (
                <button
                  type="button"
                  key={method}
                  className={`pill-btn ${
                    selectedPaymentMethod === method ? "active" : ""
                  }`}
                  onClick={() => setSelectedPaymentMethod(method)}
                >
                  {method}
                </button>
              ))}
            </div>
            {fieldError("paymentMethod")}
          </div>

          {/* Campaign Details */}
          <div className="form-field full-width">
            <label htmlFor="notes">How can we help you?</label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              maxLength={5000}
              placeholder="I'm looking for help with ads..."
            />
          </div>

          {/* Honeypot */}
          <input
            type="text"
            name="nonce"
            className="hp-field"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <button type="submit" className="ad-submit-btn">
            Submit Booking Request
          </button>
          {/* Verification Widget */}
          <div className="subscribe-altcha">
            <Altcha />
            {fieldError("altcha")}
          </div>

          <footer
            className="feed-footer"
            id="subscribe"
          >
            <form
              method="post"
              action="https://app.thepoast.com/subscription/form"
              className="feed-subscribe-form"
            >
              <div className="feed-legal">
                by submitting, you agree to our{" "}
                <Link to="/policies/terms">terms</Link>{" "}
                &amp;{" "}
                <Link to="/policies/privacy">privacy</Link>
                <div className="innerfeed-legal">
                  <Link className="space" to="/about">about</Link>
                  <Link className="space" to="/archive">archive</Link>
                  <Link className="space" to="/submit-post">submit post</Link>
                  <Link className="space" to="/partner">partner</Link>
                  <Link className="space" to="/book">advertise</Link>
                  <p className="copyright">thepoast © 2026</p>
                </div>
              </div>
            </form>
          </footer>
        </Form>

        <Link to="/" className="back-btn">
          ← Return to thepoast
        </Link>
      </main>
    </div>
  );
}