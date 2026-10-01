import type {
  ActionFunctionArgs,
  HeadersFunction,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Form, useActionData } from "@remix-run/react";

import Altcha from "~/components/altcha";
import { upsertSubscriber } from "~/utils/poast.server";
import subscribeStyles from "~/style/scss/subscribe.css";
import bookStyles from "~/style/scss/book.css";
import tipsStyles from "~/style/scss/tips.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: subscribeStyles },
  { rel: "stylesheet", href: bookStyles },
  { rel: "stylesheet", href: tipsStyles },
];

export const meta: MetaFunction = () => {
  return {
    title: "Send a Tip : The Poast",
    description: "Got a story or a tip? Send it our way.",
  };
};

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=60, s-maxage=120, stale-while-revalidate=600",
});

/* -------------------------------------------------------------------------- */
/*                               TYPES & HELPERS                              */
/* -------------------------------------------------------------------------- */

type FieldName = "name" | "email" | "topic" | "tip" | "source" | "altcha";

type ActionData = {
  success?: boolean;
  error?: string;
  debug?: string;
  fieldErrors?: Partial<Record<FieldName, string>>;
};

const TOPICS = ["News tip", "Story idea", "Correction", "Something else"];
const CREDIT_OPTIONS = [
  { value: "credit", label: "You can credit me" },
  { value: "anonymous", label: "Keep me anonymous" },
];

const str = (value: FormDataEntryValue | null, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

// No quotes or whitespace: the email is also used in a Listmonk lookup query.
const EMAIL_RE = /^[^\s@'"\\]+@[^\s@'"\\]+\.[^\s@'"\\]+$/;

/* -------------------------------------------------------------------------- */
/*                                   ACTION                                   */
/* -------------------------------------------------------------------------- */

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  // Honeypot: bots fill it, humans never see it. Pretend success.
  if (str(formData.get("nonce"), 200)) {
    return json<ActionData>({ success: true });
  }

  const name = str(formData.get("name"), 200);
  const email = str(formData.get("email"), 254).toLowerCase();
  const topic = str(formData.get("topic"), 50);
  const tip = str(formData.get("tip"), 5000);
  const source = str(formData.get("source"), 500);
  const credit = str(formData.get("credit"), 20) === "credit" ? "credit" : "anonymous";
  const altcha = str(formData.get("altcha"), 20000);

  const fieldErrors: ActionData["fieldErrors"] = {};

  if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid email.";
  if (tip.length < 10) fieldErrors.tip = "Tell us a little more (at least a sentence).";
  if (topic && !TOPICS.includes(topic)) fieldErrors.topic = "Please choose an option.";
  if (process.env.ALTCHA_REQUIRED !== "false" && !altcha) {
    fieldErrors.altcha = "Please complete the verification and try again.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return json<ActionData>(
      { error: "Please fix the highlighted fields.", fieldErrors },
      { status: 400 }
    );
  }

  const now = new Date().toISOString();

  try {
    await upsertSubscriber({
      email,
      name: name || email.split("@")[0],
      // Optional: set LISTMONK_TIPS_LIST_ID to put tipsters on a list.
      // Without it they are saved as subscribers on no list.
      listId: Number(process.env.LISTMONK_TIPS_LIST_ID) || undefined,
      attribs: {
        is_tipster: true,
        last_tip_at: now,
      },
      historyKey: "tips",
      historyEntry: { submitted_at: now, topic, tip, source, credit },
    });
  } catch (err) {
    console.error("[tips] failed to save tip:", err);
    const cause = (err as { cause?: { code?: string; message?: string } })?.cause;
    const reason =
      (err instanceof Error ? err.message : String(err)) +
      (cause ? ` [${cause.code || cause.message}]` : "");
    return json<ActionData>(
      {
        error: "Something went wrong sending your tip. Please try again in a moment.",
        // Set BOOK_DEBUG=true in your env to see the real reason on the page.
        debug: process.env.BOOK_DEBUG === "true" ? reason : undefined,
      },
      { status: 500 }
    );
  }

  return json<ActionData>({ success: true });
}

/* -------------------------------------------------------------------------- */
/*                                    PAGE                                    */
/* -------------------------------------------------------------------------- */

export default function Tips() {
  const actionData = useActionData<ActionData>();
  const errors = actionData?.fieldErrors ?? {};

  const fieldError = (field: FieldName) =>
    errors[field] ? (
      <span className="ad-field-error" id={`${field}-error`} role="alert">
        {errors[field]}
      </span>
    ) : null;

  const header = (
    <header className="feed-topbar">
      <Link className="feed-mark" to="/">
        <img
          src="/img/tp.png"
          alt="The Poast"
          loading="eager"
          decoding="async"
        />
      </Link>

      <Link to="/subscribe" className="feed-subscribe">
        Subscribe
      </Link>
    </header>
  );

  /* ------------------------------ Success state ----------------------------- */
  if (actionData?.success) {
    return (
      <div className="feed-page ad-booking-page tips-page">
        {header}

        <main className="ad-booking-card ad-success-card">
          <div className="ad-success-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <div className="ad-booking-header">
            <h1 className="ad-booking-title">Tip received</h1>
            <p className="ad-booking-sub">
              Thank you for sending this our way. We'll take a look.
            </p>
          </div>

          <Link to="/" className="back-btn ad-success-btn">
            ← Return to The Poast
          </Link>
        </main>
      </div>
    );
  }

  /* --------------------------------- Form ---------------------------------- */
  return (
    <div className="feed-page ad-booking-page tips-page">
      {header}

      <main className="ad-booking-card">
        <div className="ad-booking-header">
          <h1 className="ad-booking-title">Send a tip</h1>
          <p className="ad-booking-sub">
            Got a story, a lead, or a correction? Tell us about it.
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

          <div className="form-group-row">
            <div className="form-field">
              <label htmlFor="name">Your Name (optional)</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Alex Smith"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                inputMode="email"
                placeholder="alex@email.com"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {fieldError("email")}
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-field">
              <label htmlFor="topic">Type</label>
              <select id="topic" name="topic" defaultValue="">
                <option value="" disabled>
                  Select one...
                </option>
                {TOPICS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {fieldError("topic")}
            </div>

            <div className="form-field">
              <label htmlFor="credit">If we use it</label>
              <select id="credit" name="credit" defaultValue="anonymous">
                {CREDIT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-field full-width">
            <label htmlFor="tip">Your tip</label>
            <textarea
              id="tip"
              name="tip"
              rows={6}
              required
              maxLength={5000}
              placeholder="What should we know?"
              aria-invalid={errors.tip ? true : undefined}
              aria-describedby={errors.tip ? "tip-error" : undefined}
            />
            {fieldError("tip")}
          </div>

          <div className="form-field full-width">
            <label htmlFor="source">Link or source (optional)</label>
            <input
              type="text"
              id="source"
              name="source"
              placeholder="https://"
            />
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

          <div className="subscribe-altcha">
            <Altcha />
            {fieldError("altcha")}
          </div>

          <button type="submit" className="ad-submit-btn">
            Send Tip
          </button>

          <p className="subscribe-legal ad-legal">
            We'll use your email only to follow up on this tip. By submitting,
            you agree to our <Link to="/policies/terms">Terms</Link> &amp;{" "}
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