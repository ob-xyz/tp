import type {
  ActionFunctionArgs,
  HeadersFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Form, useActionData } from "@remix-run/react";

import Altcha from "~/components/altcha";

export const meta: MetaFunction = () => {
  return {
    title: "Submit a Post : The Poast",
    description: "Got a story or a post? Send it our way.",
  };
};

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=60, s-maxage=120, stale-while-revalidate=600",
});

// TEMPORARY: shows the real error under the banner so we can diagnose
// (same switch as book.tsx). Set to false once the form works.
const SHOW_ERROR_DETAILS = true;

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

type Tip = {
  name: string;
  email: string;
  topic: string;
  tip: string;
  source: string;
  credit: string;
};

const TOPICS = ["New post", "Story idea", "Correction", "Something else"];
const CREDIT_OPTIONS = [
  { value: "credit", label: "You can credit me" },
  { value: "anonymous", label: "Keep me anonymous" },
];

// The "Tips" list in Listmonk (same value/id as the Listmonk public form).
const TIPS_LIST_UUID = "a1d1ab8d-81e1-47fe-adab-4f4a555689a1";
const TIPS_LIST_FIELD_ID = "a1d1a";

const str = (value: FormDataEntryValue | null, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

// No quotes or whitespace: the email is also used in a Listmonk lookup query.
const EMAIL_RE = /^[^\s@'"\\]+@[^\s@'"\\]+\.[^\s@'"\\]+$/;

/* -------------------------------------------------------------------------- */
/*                                LISTMONK API                                */
/* -------------------------------------------------------------------------- */

function listmonkConfig() {
  // Same env vars as book.tsx; URL falls back to your Listmonk domain.
  const baseUrl = (
    process.env.LISTMONK_URL || "https://app.thepoast.com"
  ).replace(/\/+$/, "");
  const apiUser = process.env.LISTMONK_API_USER || process.env.LISTMONK_USERNAME;
  const apiToken = process.env.LISTMONK_API_TOKEN || process.env.LISTMONK_TOKEN;

  const missing: string[] = [];
  if (!apiUser) missing.push("LISTMONK_USERNAME");
  if (!apiToken) missing.push("LISTMONK_TOKEN");
  if (missing.length) {
    throw new Error(`Missing or invalid env vars: ${missing.join(", ")}`);
  }

  return { baseUrl, apiUser: apiUser as string, apiToken: apiToken as string };
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
      "The API user is authenticated but lacks permission. Give its role 'subscribers:manage' (and 'subscribers:get_all') plus 'lists:get_all' and access to the Tips list.";
  } else if (status === 404) {
    hint =
      "Listmonk URL/path not found. Check LISTMONK_URL (no trailing path, e.g. https://app.thepoast.com).";
  } else if (status === 400) {
    hint =
      "Listmonk rejected the data. This is often a wrong list ID (the API needs the numeric list ID, not the UUID).";
  }
  return `Listmonk ${step} failed (HTTP ${status}). ${hint} Response: ${body.slice(0, 300)}`;
}

/**
 * The Listmonk API wants the numeric list ID, but the Tips list is identified
 * by its UUID (the value from Listmonk's public form). Look the numeric ID up
 * once and cache it. To skip the lookup, set LISTMONK_TIPS_LIST_ID to the
 * numeric ID in your env.
 */
let cachedTipsListId: number | null = null;

async function getTipsListId(): Promise<number> {
  const fromEnv = Number(process.env.LISTMONK_TIPS_LIST_ID);
  if (Number.isInteger(fromEnv) && fromEnv > 0) return fromEnv;
  if (cachedTipsListId) return cachedTipsListId;

  const res = await listmonk("/api/lists?per_page=all&minimal=true");
  if (!res.ok) {
    throw new Error(
      explainListmonkFailure("list lookup", res.status, await res.text())
    );
  }
  const body = await res.json();
  const lists = (body?.data?.results ?? []) as { id: number; uuid: string }[];
  const match = lists.find((l) => l.uuid === TIPS_LIST_UUID);
  if (!match) {
    throw new Error(
      `Could not find the Tips list (UUID ${TIPS_LIST_UUID}) in Listmonk. Set LISTMONK_TIPS_LIST_ID to its numeric ID.`
    );
  }
  cachedTipsListId = match.id;
  return match.id;
}

/**
 * Creates the tipster in Listmonk's `subscribers` table (and adds them to the
 * Tips list). If the email already exists (409), we merge the new tip into the
 * existing subscriber instead of failing.
 */
async function saveTip(input: Tip) {
  const listId = await getTipsListId();
  const now = new Date().toISOString();

  const tipEntry = {
    submitted_at: now,
    topic: input.topic,
    tip: input.tip,
    source: input.source,
    credit: input.credit,
  };

  const attribs = {
    is_tipster: true,
    last_tip_at: now,
    tips: [tipEntry],
  };

  const name = input.name || input.email.split("@")[0];

  // 1) Try to create
  const createRes = await listmonk("/api/subscribers", {
    method: "POST",
    body: JSON.stringify({
      email: input.email,
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
  const query = `subscribers.email = '${input.email.replace(/'/g, "''")}'`;
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
  const history = Array.isArray(existingAttribs.tips)
    ? existingAttribs.tips
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
      // Keep the name they already have unless they gave one this time.
      name: input.name || existing.name || name,
      status: existing.status,
      lists: listIds,
      preconfirm_subscriptions: true,
      attribs: {
        ...existingAttribs,
        ...attribs,
        tips: [...history, tipEntry].slice(-20),
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

  try {
    await saveTip({ name, email, topic, tip, source, credit });
  } catch (err) {
    console.error("[tips] failed to save tip:", err);

    // Network-level failures (DNS, TLS, refused) surface as "fetch failed"
    // with the real reason on err.cause.
    const cause = (err as { cause?: { code?: string; message?: string } })?.cause;
    const reason =
      (err instanceof Error ? err.message : String(err)) +
      (cause ? ` [${cause.code || cause.message}]` : "");

    return json<ActionData>(
      {
        error: "Something went wrong sending your tip. Please try again in a moment.",
        // Set BOOK_DEBUG=true in your env to see the real reason on the page.
        debug:
          SHOW_ERROR_DETAILS || process.env.BOOK_DEBUG === "true"
            ? reason
            : undefined,
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
            <h1 className="ad-booking-title">Post received</h1>
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
          <div className="ad-badge">Submit a Post</div>
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
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Name *"
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
                placeholder="Email *"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {fieldError("email")}
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-field">
              <label htmlFor="topic">Submission</label>
              <select id="topic" name="topic" defaultValue="">
                <option value="" disabled>
                  Pick one...
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
              <select id="credit" name="credit" defaultValue="credit">
                {CREDIT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-field full-width">
            <label htmlFor="tip">Description</label>
            <textarea
              id="tip"
              name="tip"
              rows={6}
              maxLength={5000}
              required
              placeholder="What should we know?"
              aria-invalid={errors.tip ? true : undefined}
              aria-describedby={errors.tip ? "tip-error" : undefined}
            />
            {fieldError("tip")}
          </div>

          <div className="form-field full-width">
            <label htmlFor="source">Link to post (optional)</label>
            <input
              type="text"
              id="source"
              name="source"
              placeholder="https://"
            />
          </div>

          <input
            id={TIPS_LIST_FIELD_ID}
            type="hidden"
            name="l"
            value={TIPS_LIST_UUID}
          />

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
            Submit Post
          </button>
                <footer
                  className="feed-footer"
                  id="subscribe"
                >
                  <form
                    method="post"
                    action="https://app.thepoast.com/subscription/form"
                    className="feed-subscribe-form"
                  >

                    <p className="feed-legal">
                      By submitting, you agree to our{" "}
                      <Link to="/policies/terms">
                        Terms
                      </Link>{" "}
                      &amp;{" "}
                      <Link to="/policies/privacy">
                        Privacy
                      </Link>
                      .
                      <br />
                      <br />
                      <Link className="space" to="/about">About</Link>
                      <Link className="space" to="/archive">Archive</Link>
                      <Link className="space" to="/submit-post">Submit Post</Link>
                      <Link className="space" to="/partner">Partner</Link>
                      <Link className="space" to="/book">Advertise</Link>
                    </p>
                    <p className="copyright">
                      © 2026 The Poast
                    </p>
                  </form>
                </footer>
        </Form>

        

        <Link to="/" className="back-btn">
          ← Return to The Poast
        </Link>
      </main>
    </div>
  );
}