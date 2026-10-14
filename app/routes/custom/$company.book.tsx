import { useEffect, useRef, useState } from "react";
import { Link, useLoaderData, useActionData, Form, useNavigation } from "@remix-run/react";
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

const CAMPAIGN_MAP: Record<string, number> = {
  now: 1,
  advertise: 5,
  fin: 507,
  stripe: 451,
};

const BANNER_TRIGGER = 0.85;

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
  return {
    title: `Book ${data?.companyName || "Campaign"} x thepoast`,
  };
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" },
];

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=300",
});

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

export default function AdvertiserBookPage() {
  const { company, companyName } = useLoaderData<typeof loader>();
  const actionData = useActionData<ActionData>();
  const errors = actionData?.fieldErrors ?? {};
  const { endRef, reached } = useReachedEndOfFeed();
  const navigation = useNavigation();

  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [startDate, setStartDate] = useState("");
  const [placement, setPlacement] = useState<"Top of Feed" | "Mid Feed">("Top of Feed");
  const [paymentMethod, setPaymentMethod] = useState<"Credit Card" | "Insertion Order" | "Free">("Credit Card");
  const [notes, setNotes] = useState("");

  const startDateRef = useRef<HTMLInputElement>(null);
  const isSubmitting = navigation.state === "submitting";

  const triggerDatePicker = () => {
    if (startDateRef.current) {
      try {
        startDateRef.current.showPicker();
      } catch {
        startDateRef.current.focus();
      }
    }
  };

  return (
    <div className="feed-page">
      {/* Sticky Top Bar */}
      <header 
        className={`feed-topbar${reached ? " is-hidden" : ""}`} 
        style={{ borderLeft: "none", borderRight: "none" }}
      >
        <Link className="feed-mark" to="/">
          <img src="/img/tp.png" alt="thepoast" decoding="async" />
        </Link>
      </header>

      <main className="feed-stream" style={{ padding: "3rem 1rem", maxWidth: "640px", margin: "0 auto" }}>
        
        {/* Shopify/Stripe-Style App Stepper Bar with Brand Gradient Accents */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2.25rem",
          background: "#0a0a0a",
          borderRadius: "16px",
          padding: "1.1rem 2rem",
          border: "1px solid #1f1f1f",
          boxShadow: "0 8px 30px rgba(0,0,0,0.4)"
        }}>
          {/* STEP 1 */}
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", opacity: step >= 1 ? 1 : 0.4, transition: "opacity 0.2s" }}>
            <span style={{
              background: step === 1 ? "#ffffff" : step > 1 ? "linear-gradient(90deg, #ee1216 0%, #fc6d04 55%, #ffa600 100%)" : "#1a1a1a",
              color: step === 1 ? "#000000" : step > 1 ? "#ffffff" : "#666666",
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.8rem",
              fontFamily: "bold",
              boxShadow: step === 1 ? "0 0 12px rgba(255,255,255,0.3)" : "none"
            }}>{step > 1 ? "✓" : "1"}</span>
            <span style={{ fontSize: "0.9rem", fontFamily: "bold", color: step === 1 ? "#ffffff" : "#888888" }}>Preview</span>
          </div>

          <div style={{ width: "30px", height: "1px", background: "#222222" }} />

          {/* STEP 2 */}
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", opacity: step >= 2 ? 1 : 0.4, transition: "opacity 0.2s" }}>
            <span style={{
              background: step === 2 ? "#ffffff" : step > 2 ? "linear-gradient(90deg, #ee1216 0%, #fc6d04 55%, #ffa600 100%)" : "#1a1a1a",
              color: step === 2 ? "#000000" : step > 2 ? "#ffffff" : "#666666",
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.8rem",
              fontFamily: "bold",
              boxShadow: step === 2 ? "0 0 12px rgba(255,255,255,0.3)" : "none"
            }}>{step > 2 ? "✓" : "2"}</span>
            <span style={{ fontSize: "0.9rem", fontFamily: "bold", color: step === 2 ? "#ffffff" : "#888888" }}>Schedule</span>
          </div>

          <div style={{ width: "30px", height: "1px", background: "#222222" }} />

          {/* STEP 3 */}
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", opacity: step >= 3 ? 1 : 0.4, transition: "opacity 0.2s" }}>
            <span style={{
              background: step === 3 ? "#ffffff" : "#1a1a1a",
              color: step === 3 ? "#000000" : "#666666",
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.8rem",
              fontFamily: "bold",
              boxShadow: step === 3 ? "0 0 12px rgba(255,255,255,0.3)" : "none"
            }}>3</span>
            <span style={{ fontSize: "0.9rem", fontFamily: "bold", color: step === 3 ? "#ffffff" : "#888888" }}>Confirm</span>
          </div>
        </div>

        {/* STEP 1: PREVIEW CREATIVE */}
        {step === 1 && (
          <div style={{
            background: "#0f0f0f",
            border: "1px solid #222222",
            borderRadius: "24px",
            padding: "2.5rem 2.25rem",
            marginBottom: "2rem",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
          }}>
            <h1 style={{ color: "#ffffff", fontFamily: "bold", fontSize: "1.65rem", marginBottom: "0.6rem", textAlign: "center", letterSpacing: "-0.01em" }}>
              New Campaign
            </h1>
            <div className="feed-embed loaded" style={{ marginTop: "1rem", border: "1px solid #262626", borderRadius: "16px", overflow: "hidden", paddingBottom: "2rem", background: "#000" }}>
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
              className="feed-banner-btn"
              style={{ width: "100%", margin: 0, padding: "1.05rem", fontSize: "0.98rem", borderRadius: "14px" }}
              onClick={() => setStep(2)}
            >
              Looks Great — Select Send Date →
            </button>
          </div>
        )}

        {/* STEP 2: SCHEDULE & PLACEMENT */}
        {step === 2 && (
          <div style={{
            background: "#0f0f0f",
            border: "1px solid #222222",
            borderRadius: "24px",
            padding: "2.5rem 2.25rem",
            marginBottom: "2rem",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.85rem", marginBottom: "2.25rem" }}>
              
              {/* TARGET START DATE */}
              <div>
                <label style={{
                  display: "block",
                  fontSize: "0.72rem",
                  fontFamily: "bold",
                  letterSpacing: "0.09em",
                  color: "#888888",
                  textTransform: "uppercase",
                  marginBottom: "0.6rem"
                }}>
                  Target Start Date
                </label>
                
                <div 
                  onClick={triggerDatePicker}
                  style={{
                    position: "relative",
                    background: "#000000",
                    border: "1px solid #2a2a2a",
                    borderRadius: "14px",
                    padding: "1.05rem 1.25rem",
                    cursor: "pointer",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "#444"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "#2a2a2a"}
                >
                  <input
                    ref={startDateRef}
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    style={{
                      position: "absolute",
                      opacity: 0,
                      pointerEvents: "none",
                      width: "100%",
                      height: "100%"
                    }}
                  />
                  <span style={{ fontSize: "1rem", color: startDate ? "#ffffff" : "#555555", fontFamily: "kl" }}>
                    {startDate || "Select launch date..."}
                  </span>
                  <span style={{ fontSize: "1.1rem", opacity: 0.7 }}>📅</span>
                </div>
                {errors.startDate && <span className="ad-field-error" style={{ color: "#ee1216", fontSize: "0.8rem", marginTop: "0.3rem", display: "block" }}>{errors.startDate}</span>}
              </div>

              {/* SELECT PLACEMENT */}
              <div>
                <label style={{
                  display: "block",
                  fontSize: "0.72rem",
                  fontFamily: "bold",
                  letterSpacing: "0.09em",
                  color: "#888888",
                  textTransform: "uppercase",
                  marginBottom: "0.6rem"
                }}>
                  Select Placement
                </label>
                
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "6px",
                  background: "#000000",
                  padding: "5px",
                  borderRadius: "16px",
                  border: "1px solid #2a2a2a"
                }}>
                  <button
                    type="button"
                    onClick={() => setPlacement("Top of Feed")}
                    style={{
                      background: placement === "Top of Feed" ? "#ffffff" : "transparent",
                      color: placement === "Top of Feed" ? "#000000" : "#888888",
                      border: "none",
                      borderRadius: "12px",
                      padding: "0.9rem 0.5rem",
                      fontFamily: "bold",
                      fontSize: "0.92rem",
                      cursor: "pointer",
                      transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                  >
                    Top of Feed
                  </button>

                  <button
                    type="button"
                    onClick={() => setPlacement("Mid Feed")}
                    style={{
                      background: placement === "Mid Feed" ? "#ffffff" : "transparent",
                      color: placement === "Mid Feed" ? "#000000" : "#888888",
                      border: "none",
                      borderRadius: "12px",
                      padding: "0.9rem 0.5rem",
                      fontFamily: "bold",
                      fontSize: "0.92rem",
                      cursor: "pointer",
                      transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                  >
                    Mid Feed
                  </button>
                </div>
              </div>

              {/* 3-WAY PAYMENT METHOD TOGGLE (Shopify Clean Styling) */}
              <div>
                <label style={{
                  display: "block",
                  fontSize: "0.72rem",
                  fontFamily: "bold",
                  letterSpacing: "0.09em",
                  color: "#888888",
                  textTransform: "uppercase",
                  marginBottom: "0.6rem"
                }}>
                  Payment Method
                </label>
                
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: "6px",
                  background: "#000000",
                  padding: "5px",
                  borderRadius: "16px",
                  border: "1px solid #2a2a2a"
                }}>
                  {(["Credit Card", "Insertion Order", "Free"] as const).map((method) => {
                    const isActive = paymentMethod === method;
                    return (
                      <button
                        type="button"
                        key={method}
                        onClick={() => setPaymentMethod(method)}
                        style={{
                          background: isActive ? "#ffffff" : "transparent",
                          color: isActive ? "#000000" : "#888888",
                          border: "none",
                          borderRadius: "12px",
                          padding: "0.9rem 0.4rem",
                          fontFamily: "bold",
                          fontSize: "0.82rem",
                          textAlign: "center",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          cursor: "pointer",
                          transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: isActive ? "0 2px 8px rgba(255,255,255,0.15)" : "none"
                        }}
                      >
                        {method}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            <div style={{ display: "flex", gap: "0.85rem" }}>
              <button
                type="button"
                style={{
                  background: "#161616",
                  color: "#ffffff",
                  border: "1px solid #2a2a2a",
                  borderRadius: "14px",
                  padding: "0.9rem 1.5rem",
                  fontSize: "0.9rem",
                  fontFamily: "bold",
                  cursor: "pointer",
                  transition: "background 0.15s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#222"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#161616"}
                onClick={() => setStep(1)}
              >
                ← Back
              </button>

              <button
                type="button"
                className="feed-banner-btn"
                style={{ flex: 1, margin: 0, padding: "0.9rem", borderRadius: "14px" }}
                onClick={() => {
                  if (!startDate) {
                    alert("Please select a target start date before proceeding.");
                    return;
                  }
                  setStep(3);
                }}
              >
                Review Order →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: FINAL REVIEW & SUBMIT VIA REMIX FORM */}
        {step === 3 && (
          <Form method="post" style={{
            background: "#0f0f0f",
            border: "1px solid #222222",
            borderRadius: "24px",
            padding: "2.5rem 2.25rem",
            marginBottom: "2rem",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
          }}>
            <h1 style={{ color: "#ffffff", fontFamily: "bold", fontSize: "1.65rem", marginBottom: "0.5rem", textAlign: "center" }}>
              Finalize Campaign
            </h1>

            {actionData?.error && (
              <div style={{ background: "#2a0808", border: "1px solid #ee1216", borderRadius: "12px", padding: "1rem", marginBottom: "1.5rem", color: "#ff8888", fontSize: "0.9rem" }} role="alert">
                {actionData.error}
                {actionData.debug && <code style={{ display: "block", marginTop: "0.5rem", fontSize: "0.75rem", opacity: 0.8 }}>{actionData.debug}</code>}
              </div>
            )}

            {/* Hidden form fields sent to Listmonk action */}
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

            <div style={{
              background: "#000000",
              border: "1px solid #262626",
              borderRadius: "16px",
              padding: "1.5rem",
              marginBottom: "1.85rem"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.85rem" }}>
                <span style={{ fontSize: "0.72rem", fontFamily: "bold", letterSpacing: "0.08em", color: "#777777", textTransform: "uppercase" }}>Advertiser</span>
                <span style={{ color: "#ffffff", fontWeight: "bold", fontSize: "0.95rem" }}>{companyName}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.85rem" }}>
                <span style={{ fontSize: "0.72rem", fontFamily: "bold", letterSpacing: "0.08em", color: "#777777", textTransform: "uppercase" }}>Target Date</span>
                <span style={{ color: "#ffffff", fontSize: "0.95rem" }}>{startDate || "Earliest Available"}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.85rem" }}>
                <span style={{ fontSize: "0.72rem", fontFamily: "bold", letterSpacing: "0.08em", color: "#777777", textTransform: "uppercase" }}>Placement</span>
                <span style={{ color: "#ffffff", fontSize: "0.95rem" }}>{placement}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.72rem", fontFamily: "bold", letterSpacing: "0.08em", color: "#777777", textTransform: "uppercase" }}>Payment Method</span>
                <span style={{ color: "#ffffff", fontSize: "0.95rem" }}>{paymentMethod}</span>
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{
                display: "block",
                fontSize: "0.72rem",
                fontFamily: "bold",
                letterSpacing: "0.09em",
                color: "#888888",
                textTransform: "uppercase",
                marginBottom: "0.6rem"
              }}>
                Additional Notes (Optional)
              </label>
              <textarea
                name="notes"
                rows={2}
                placeholder="Special instructions or tracking links..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{
                  width: "100%",
                  padding: "1rem",
                  background: "#000000",
                  border: "1px solid #2a2a2a",
                  borderRadius: "14px",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  fontFamily: "kl",
                  outline: "none"
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = "#555"}
                onBlur={(e) => e.currentTarget.style.borderColor = "#2a2a2a"}
              />
            </div>

            <div style={{ display: "flex", gap: "0.85rem" }}>
              <button
                type="button"
                style={{
                  background: "#161616",
                  color: "#ffffff",
                  border: "1px solid #2a2a2a",
                  borderRadius: "14px",
                  padding: "0.9rem 1.5rem",
                  fontSize: "0.9rem",
                  fontFamily: "bold",
                  cursor: "pointer",
                  transition: "background 0.15s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#222"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#161616"}
                onClick={() => setStep(2)}
              >
                ← Back
              </button>

              <button
                type="submit"
                className="feed-banner-btn"
                style={{ flex: 1, margin: 0, padding: "0.9rem", borderRadius: "14px" }}
                disabled={isSubmitting}
              >
                {isSubmitting 
                  ? "Submitting..." 
                  : paymentMethod === "Insertion Order" 
                    ? "Lock In Insertion Order →" 
                    : paymentMethod === "Free"
                    ? "Lock In Free Campaign →"
                    : "Proceed with Credit Card →"}
              </button>
            </div>
            {/* Altcha Verification Widget */}
            <div style={{ marginBottom: "1.75rem" }}>
              <Altcha />
              {errors.altcha && <span style={{ color: "#ee1216", fontSize: "0.8rem", display: "block", marginTop: "0.4rem" }}>{errors.altcha}</span>}
            </div>
          </Form>
        )}

        <div ref={endRef} className="feed-end-marker" aria-hidden="true" />
      </main>

      {/* Standard Footer */}
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