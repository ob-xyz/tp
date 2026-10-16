import type {
  ActionFunctionArgs,
  HeadersFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Form, useActionData } from "@remix-run/react";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import FeedTopbar from "~/components/feed-topbar";
import FeedFooter from "~/components/feed-footer";
import FeedSubscribeBanner from "~/components/feed-subscribe-banner";
import Altcha from "~/components/altcha";

export const meta: MetaFunction = () => {
  return {
    title: "Submit post / thepoast",
    description: "Want to submit a post? Do it here.",
  };
};

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=60, s-maxage=120, stale-while-revalidate=600",
});

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

const TIPS_LIST_UUID = "a1d1ab8d-81e1-47fe-adab-4f4a555689a1";
const TIPS_LIST_FIELD_ID = "a1d1a";
const BANNER_TRIGGER = 0.75;

const str = (value: FormDataEntryValue | null, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const EMAIL_RE = /^[^\s@'"\\]+@[^\s@'"\\]+\.[^\s@'"\\]+$/;

function listmonkConfig() {
  const baseUrl = (process.env.LISTMONK_URL || "https://app.thepoast.com").replace(/\/+$/, "");
  const apiUser = process.env.LISTMONK_API_USER || process.env.LISTMONK_USERNAME;
  const apiToken = process.env.LISTMONK_API_TOKEN || process.env.LISTMONK_TOKEN;
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

let cachedTipsListId: number | null = null;

async function getTipsListId(): Promise<number> {
  const fromEnv = Number(process.env.LISTMONK_TIPS_LIST_ID);
  if (Number.isInteger(fromEnv) && fromEnv > 0) return fromEnv;
  if (cachedTipsListId) return cachedTipsListId;

  const res = await listmonk("/api/lists?per_page=all&minimal=true");
  const body = await res.json();
  const lists = (body?.data?.results ?? []) as { id: number; uuid: string }[];
  const match = lists.find((l) => l.uuid === TIPS_LIST_UUID);
  cachedTipsListId = match ? match.id : 1;
  return cachedTipsListId;
}

async function saveTip(input: Tip) {
  const listId = await getTipsListId();
  const now = new Date().toISOString();
  const tipEntry = { submitted_at: now, topic: input.topic, tip: input.tip, source: input.source, credit: input.credit };
  const attribs = { is_tipster: true, last_tip_at: now, tips: [tipEntry] };
  const name = input.name || input.email.split("@")[0];

  const createRes = await listmonk("/api/subscribers", {
    method: "POST",
    body: JSON.stringify({ email: input.email, name, status: "enabled", lists: [listId], preconfirm_subscriptions: true, attribs }),
  });

  if (createRes.ok) return;

  const query = `subscribers.email = '${input.email.replace(/'/g, "''")}'`;
  const findRes = await listmonk(`/api/subscribers?per_page=1&query=${encodeURIComponent(query)}`);
  const found = await findRes.json();
  const existing = found?.data?.results?.[0];
  if (!existing) return;

  await listmonk(`/api/subscribers/${existing.id}`, {
    method: "PUT",
    body: JSON.stringify({
      email: existing.email,
      name: input.name || existing.name || name,
      status: existing.status,
      lists: [...((existing.lists ?? []) as { id: number }[]).map((l) => l.id), listId],
      preconfirm_subscriptions: true,
      attribs: { ...existing.attribs, ...attribs, tips: [...(existing.attribs?.tips || []), tipEntry].slice(-20) },
    }),
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  if (str(formData.get("nonce"), 200)) return json<ActionData>({ success: true });

  const name = str(formData.get("name"), 200);
  const email = str(formData.get("email"), 254).toLowerCase();
  const topic = str(formData.get("topic"), 50);
  const tip = str(formData.get("tip"), 5000);
  const source = str(formData.get("source"), 500);
  const credit = str(formData.get("credit"), 20) === "credit" ? "credit" : "anonymous";
  const altcha = str(formData.get("altcha"), 20000);

  const fieldErrors: ActionData["fieldErrors"] = {};
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid email.";
  if (tip.length < 10) fieldErrors.tip = "Tell us a little more.";
  if (process.env.ALTCHA_REQUIRED !== "false" && !altcha) {
    fieldErrors.altcha = "Please complete the verification.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return json<ActionData>({ error: "Please fix the highlighted fields.", fieldErrors }, { status: 400 });
  }

  try {
    await saveTip({ name, email, topic, tip, source, credit });
  } catch (err) {
    console.error("[tips] failed:", err);
    return json<ActionData>({ error: "Something went wrong sending your tip." }, { status: 500 });
  }

  return json<ActionData>({ success: true });
}

function useReachedEndOfPage() {
  const endRef = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const element = endRef.current;
    if (!element) return;

    let frame = 0;
    const check = () => {
      frame = 0;
      const top = element.getBoundingClientRect().top;
      setReached(window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined" && element.parentElement) {
      resizeObserver = new ResizeObserver(schedule);
      resizeObserver.observe(element.parentElement);
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

export default function Tips() {
  const actionData = useActionData<ActionData>();
  const errors = actionData?.fieldErrors ?? {};
  const { endRef, reached } = useReachedEndOfPage();
  const [forced, setForced] = useState(false);
  const [expandBanner, setExpandBanner] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const previousReached = useRef(false);

  const bannerVisible = reached || forced;

  useEffect(() => {
    if (previousReached.current && !reached) {
      setForced(false);
      setExpandBanner(false);
    }
    previousReached.current = reached;
  }, [reached]);

  const handleTopbarSubscribe = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setForced(true);
    setExpandBanner(true);
    footerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const fieldError = (field: FieldName) =>
    errors[field] ? <span className="ad-field-error" role="alert">{errors[field]}</span> : null;

  if (actionData?.success) {
    return (
      <div className="feed-page ad-booking-page tips-page">
        <FeedTopbar hidden={reached} onSubscribe={handleTopbarSubscribe} />
        <main className="ad-booking-card ad-success-card">
          <div className="ad-booking-header">
            <h1 className="ad-booking-title">Post received</h1>
            <p className="ad-booking-sub">Thank you for sending this our way. We'll take a look.</p>
          </div>
          <Link to="/" className="back-btn ad-success-btn">← Back to thepoast</Link>
          <div ref={endRef} className="feed-end-marker" aria-hidden="true" />
        </main>
        <div ref={footerRef}>
          <FeedFooter covered={bannerVisible} />
        </div>
        <FeedSubscribeBanner visible={bannerVisible} forceExpanded={expandBanner} />
      </div>
    );
  }

  return (
    <div className="feed-page ad-booking-page tips-page">
      <FeedTopbar hidden={reached} onSubscribe={handleTopbarSubscribe} />

      <main className="ad-booking-card">
        <div className="ad-booking-header">
          <div className="ad-badge">Submit a Post</div>
        </div>

        <Form method="post" className="ad-booking-form">
          {actionData?.error && <div className="ad-form-error" role="alert">{actionData.error}</div>}

          <div className="form-group-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Name *" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="Email *" />
              {fieldError("email")}
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-field">
              <label htmlFor="topic">Submission</label>
              <select id="topic" name="topic" defaultValue="">
                <option value="" disabled>Pick one...</option>
                {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="credit">If we use it</label>
              <select id="credit" name="credit" defaultValue="credit">
                {CREDIT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>

          <div className="form-field full-width">
            <label htmlFor="tip">Description</label>
            <textarea id="tip" name="tip" rows={6} required placeholder="What should we know?" />
            {fieldError("tip")}
          </div>

          <div className="form-field full-width">
            <label htmlFor="source">Link to post (optional)</label>
            <input type="text" id="source" name="source" placeholder="https://" />
          </div>

          <input id={TIPS_LIST_FIELD_ID} type="hidden" name="l" value={TIPS_LIST_UUID} />
          <input type="text" name="nonce" className="hp-field" tabIndex={-1} autoComplete="off" />

          <button type="submit" className="ad-submit-btn">Submit Post</button>

          <div className="subscribe-altcha">
            <Altcha />
            {fieldError("altcha")}
          </div>
        </Form>

          <div className="feed-legal" >
            By submitting, you agree to our{" "}
            <Link to="/policies/terms">terms</Link> &amp;{" "}
            <Link to="/policies/privacy">privacy</Link>
          </div>

        <Link to="/" className="back-btn">← Back to thepoast</Link>

        <div ref={endRef} className="feed-end-marker" aria-hidden="true" />
      </main>

      <div ref={footerRef}>
        <FeedFooter covered={bannerVisible} />
      </div>

      <FeedSubscribeBanner visible={bannerVisible} forceExpanded={expandBanner} />
    </div>
  );
}