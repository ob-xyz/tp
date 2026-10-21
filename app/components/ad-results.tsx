// app/components/ad-results.tsx
//
// The ad results dashboard + 2-step "book your next ad" flow.
// Rendered by routes/custom/$company.tsx when the company is in ~/data/ad-results.
import { Fragment, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Link, Form, useActionData, useNavigation } from "@remix-run/react";

import FeedEmbed from "~/components/feed-embed";
import Altcha from "~/components/altcha";
import { getCtr, getOpenRate, runKey } from "~/data/ad-results";
import {
  CREATIVES,
  PAYMENT_METHODS,
  PLACEMENTS_PAID,
  RAW_PLACEMENTS,
  formatDate,
  int,
} from "~/utils/ad-results";
import type {
  ActionData,
  Creative,
  FieldName,
  PaymentMethod,
  Placement,
  ResultsData,
} from "~/utils/ad-results";

const BANNER_TRIGGER = 0.85;
const STEPS = ["Schedule", "Confirm"] as const;

/* ------------------------------------------------------------------ */
/* Small UI pieces                                                     */
/* ------------------------------------------------------------------ */

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
  options: readonly string[];
  rawOptions?: readonly T[];
  value: T;
  onChange: (next: T) => void;
}) {
  const lookup: readonly string[] = rawOptions ?? options;
  const index = Math.max(0, lookup.indexOf(value));

  return (
    <div
      className={`bk-seg is-${options.length}`}
      role="group"
      aria-label={label}
      style={{ "--bk-i": index, "--bk-n": options.length } as CSSProperties}
    >
      <span className="bk-seg-thumb" aria-hidden="true" />
      {options.map((option, i) => {
        const rawValue = (rawOptions ? rawOptions[i] : option) as T;
        const isActive = rawValue === value;
        return (
          <button
            type="button"
            key={option}
            aria-pressed={isActive}
            className={`bk-seg-btn${isActive ? " is-active" : ""}`}
            onClick={() => onChange(rawValue)}
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

export default function AdResults({ data }: { data: ResultsData }) {
  const { slug, name, runs, currentId, latestId, totals, defaultPlacement } = data;
  const actionData = useActionData<ActionData>();
  const errors: Partial<Record<FieldName, string>> = actionData?.fieldErrors ?? {};
  const { endRef, reached } = useReachedEndOfFeed();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const run = runs.find((r) => runKey(r) === currentId) ?? runs[0];
  const stats = run.stats;
  const isLatest = currentId === latestId;
  const previewOn = run.showPreview !== false;

  // "Same ad" thumbnail in the booking flow = the most recent run's ad.
  const latest = runs.find((r) => runKey(r) === latestId) ?? runs[0];

  // "Run another ad" flow
  const [booking, setBooking] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [startDate, setStartDate] = useState("");
  const [placement, setPlacement] = useState<Placement>(defaultPlacement);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("Credit Card");
  const [creative, setCreative] = useState<Creative>("Same ad");
  const [notes, setNotes] = useState("");
  const [stepError, setStepError] = useState("");
  const [minDate, setMinDate] = useState("");
  const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const d = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    setMinDate(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
  }, []);

  const openBooking = () => {
    setBooking(true);
    setStep(1);
    requestAnimationFrame(() =>
      flowRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  };

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
    setStep(2);
  };

  const summaryRows: { label: string; value: string }[] = [
    { label: "Target Date", value: startDate ? formatDate(startDate) : "Earliest Available" },
    { label: "Placement", value: placement },
    { label: "Payment Method", value: paymentMethod },
    { label: "Ad", value: creative },
  ];

  const serverFieldMessages = Object.entries(errors)
    .filter(([key, message]) => key !== "altcha" && message)
    .map(([, message]) => message as string);

  const submitLabel = isSubmitting
    ? "Submitting..."
    : paymentMethod === "Insertion Order"
    ? "Lock In Insertion Order →"
    : "Proceed with Credit Card →";

  return (
    <div className="feed-page bk">
      <header
        className={`feed-topbar${reached ? " is-hidden" : ""}`}
        style={{ borderLeft: "none", borderRight: "none" }}
      >
        <Link className="feed-mark" to="/">
          <img src="/img/tp.png" alt="thepoast" decoding="async" />
        </Link>
      </header>

      <main className="feed-stream bk-main">
        {/* ---------------- HERO: headline stats ---------------- */}
        <section className="bk-card rs-hero" aria-labelledby="rs-name">
          {!isLatest && (
            <div>
              <Link to="?" className="rs-back">
                ← Back to latest campaign
              </Link>
            </div>
          )}

          <p className="rs-eyebrow">{name} · Ad results</p>
          <div className="rs-chips">
            <span className="rs-chip">{formatDate(run.date)}</span>
            <span className="rs-chip">Post #{run.post}</span>
            {run.placement && <span className="rs-chip">{run.placement}</span>}
            {!stats && (
              <span className="rs-chip">
                <span className="rs-dot" aria-hidden="true" />
                Results pending
              </span>
            )}
          </div>

          {stats ? (
            <>
              <p className="rs-hero-value">{int(stats.clicks)}</p>
              <p className="rs-hero-label">Clicks</p>

              <div className="rs-stats">
                <div className="rs-stat">
                  <span className="rs-stat-value">{int(stats.sent)}</span>
                  <span className="rs-stat-label">Sent</span>
                </div>
                <div className="rs-stat">
                  <span className="rs-stat-value">{int(stats.opens)}</span>
                  <span className="rs-stat-label">Opens</span>
                </div>
                <div className="rs-stat">
                  <span className="rs-stat-value">{getCtr(stats)}</span>
                  <span className="rs-stat-label">Click-through rate</span>
                </div>
                <div className="rs-stat">
                  <span className="rs-stat-value">{getOpenRate(stats)}</span>
                  <span className="rs-stat-label">Open rate</span>
                </div>
              </div>

              <p className="rs-foot">
                Open counts are approximate, since email privacy features inflate them.
                Clicks are the most reliable measure.
              </p>
            </>
          ) : (
            <div className="rs-pending">
              Results are on the way. This page updates once the campaign has had time to
              collect clicks.
            </div>
          )}
        </section>

        {/* ---------------- THE AD AS IT RAN ---------------- */}
        {(previewOn || run.image) && (
          <section className="bk-card" aria-labelledby="rs-ad-label">
            <span className="rs-section-label" id="rs-ad-label">
              The ad as it ran
            </span>

            <div className="feed-embed loaded bk-preview rs-preview">
              {previewOn ? (
                <FeedEmbed
                  key={currentId}
                  id={`${slug}-run-${currentId}`}
                  src={`/custom/${slug}/ad?run=${encodeURIComponent(currentId)}`}
                  title={`${name} ad, ${formatDate(run.date)}`}
                  interactive
                  bordered={false}
                  fallbackHeight={350}
                />
              ) : (
                <img src={run.image} alt={`${name} ad, ${formatDate(run.date)}`} loading="lazy" />
              )}
            </div>

            <p className="rs-caption">
              Post #{run.post} in the {formatDate(run.date)} edition
            </p>

            {run.note && <div className="rs-note">{run.note}</div>}
          </section>
        )}

        {/* ---------------- CAMPAIGN HISTORY ---------------- */}
        {runs.length > 1 && (
          <section className="bk-card" aria-labelledby="rs-history-label">
            <span className="rs-section-label" id="rs-history-label">
              All campaigns
            </span>

            {totals.hasStats && (
              <div className="rs-stats is-3 rs-totals">
                <div className="rs-stat">
                  <span className="rs-stat-value">{totals.campaigns}</span>
                  <span className="rs-stat-label">Campaigns</span>
                </div>
                <div className="rs-stat">
                  <span className="rs-stat-value">{int(totals.clicks)}</span>
                  <span className="rs-stat-label">Total clicks</span>
                </div>
                <div className="rs-stat">
                  <span className="rs-stat-value">{totals.ctr}</span>
                  <span className="rs-stat-label">Avg CTR</span>
                </div>
              </div>
            )}

            <ol className="rs-runs">
              {runs.map((r) => {
                const key = runKey(r);
                const isCurrent = key === currentId;
                return (
                  <li key={key}>
                    <Link
                      to={key === latestId ? "?" : `?run=${encodeURIComponent(key)}`}
                      className={`rs-run${isCurrent ? " is-current" : ""}`}
                      aria-current={isCurrent ? "true" : undefined}
                    >
                      <span className="rs-run-main">
                        <span className="rs-run-date">{formatDate(r.date)}</span>
                        <span className="rs-run-meta">
                          Post #{r.post}
                          {r.placement ? ` · ${r.placement}` : ""}
                        </span>
                      </span>
                      <span className="rs-run-stat">
                        {r.stats ? (
                          <>
                            <span className="rs-run-clicks">{int(r.stats.clicks)} clicks</span>
                            <span className="rs-run-ctr">
                              {getCtr(r.stats)} CTR
                            </span>
                          </>
                        ) : (
                          <span className="rs-run-ctr">Pending</span>
                        )}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        )}

        {/* ---------------- CTA ---------------- */}
        {!booking && (
          <section className="bk-card rs-cta">
            <h2 className="bk-title">Ready for another run?</h2>
            <p className="bk-sub">
              Book your next ad in about a minute. Reuse this one or send us something new.
            </p>
            <button
              type="button"
              className="bk-btn bk-btn-primary bk-btn-block"
              onClick={openBooking}
            >
              Book Your Next Ad →
            </button>
          </section>
        )}

        {/* ---------------- 2-STEP BOOKING FLOW ---------------- */}
        {booking && (
          <div className="rs-flow" ref={flowRef}>
            <ol className="bk-steps" aria-label="Progress">
              {STEPS.map((label, i) => {
                const n = (i + 1) as 1 | 2;
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

            {/* STEP 1: SCHEDULE */}
            {step === 1 && (
              <div className="bk-card">
                <h2 className="rs-flow-title">Run another ad</h2>
                <p className="bk-sub">Pick a date and placement. We'll confirm by email.</p>

                <div className="bk-fields">
                  <div className="bk-group">
                    <span className="bk-label" id="rs-date-label">
                      Target Start Date
                    </span>

                    <label className="bk-date">
                      <span className={`bk-date-text${startDate ? "" : " is-empty"}`}>
                        {startDate ? formatDate(startDate) : "Select launch date"}
                      </span>
                      <CalendarIcon />
                      <input
                        type="date"
                        className="bk-date-input"
                        aria-labelledby="rs-date-label"
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

                  <div className="bk-group">
                    <span className="bk-label">Select Placement</span>
                    <Segmented<Placement>
                      label="Placement"
                      options={PLACEMENTS_PAID}
                      rawOptions={RAW_PLACEMENTS}
                      value={placement}
                      onChange={setPlacement}
                    />
                  </div>

                  <div className="bk-group">
                    <span className="bk-label">Which Ad</span>
                    <Segmented<Creative>
                      label="Which ad"
                      options={CREATIVES}
                      value={creative}
                      onChange={setCreative}
                    />
                  </div>

                  <div className="bk-group">
                    <span className="bk-label">Payment Method</span>
                    <Segmented<PaymentMethod>
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
                    onClick={() => setBooking(false)}
                  >
                    Cancel
                  </button>
                  <button type="button" className="bk-btn bk-btn-primary" onClick={goToReview}>
                    Review Order →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: CONFIRM */}
            {step === 2 && (
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

                <input type="hidden" name="startDate" value={startDate} />
                <input type="hidden" name="placement" value={placement} />
                <input type="hidden" name="paymentMethod" value={paymentMethod} />
                <input type="hidden" name="creative" value={creative} />
                <input
                  type="text"
                  name="nonce"
                  className="hp-field"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: "none" }}
                />

                {creative === "Same ad" && (latest.showPreview !== false || latest.image) && (
                  <div style={{ marginBottom: "1.5rem" }}>
                    <span className="bk-label" style={{ marginBottom: "0.5rem" }}>
                      {name} Ad
                    </span>
                    <div
                      className="feed-embed loaded bk-preview"
                      style={{ maxHeight: "220px", overflow: "hidden", marginBottom: 0 }}
                    >
                      {latest.showPreview !== false ? (
                        <FeedEmbed
                          id={`${slug}-rebook-thumbnail`}
                          src={`/custom/${slug}/ad?run=${encodeURIComponent(latestId)}`}
                          title={`${name} ad`}
                          interactive={false}
                          bordered={false}
                          fallbackHeight={220}
                        />
                      ) : (
                        <img
                          src={latest.image}
                          alt={`${name} ad`}
                          style={{ display: "block", width: "100%", height: "auto" }}
                        />
                      )}
                    </div>
                  </div>
                )}

                <dl className="bk-summary">
                  {summaryRows.map((row) => (
                    <div key={row.label} className="bk-row">
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="bk-group" style={{ marginBottom: "1.5rem" }}>
                  <label className="bk-label" htmlFor="rs-notes">
                    {creative === "New ad"
                      ? "Tell us about your new ad"
                      : "Additional Notes (Optional)"}
                  </label>
                  <textarea
                    id="rs-notes"
                    name="notes"
                    className="bk-textarea"
                    rows={3}
                    placeholder={
                      creative === "New ad"
                        ? "Link to your new creative, copy, or tracking links..."
                        : "Special instructions or tracking links..."
                    }
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
                    onClick={() => setStep(1)}
                  >
                    ← Back
                  </button>
                  <button type="submit" className="bk-btn bk-btn-primary" disabled={isSubmitting}>
                    {submitLabel}
                  </button>
                </div>
              </Form>
            )}
          </div>
        )}

        <div ref={endRef} className="feed-end-marker" aria-hidden="true" />
      </main>

      <footer className="feed-footer">
        <div className="feed-footer-links">
          <Link to="/about">about</Link>
          <Link to="/archive">archive</Link>
          <Link to="/submit-post">submit post</Link>
          <Link to="/policies/privacy">privacy</Link>
          <Link to="/policies/terms">terms</Link>
          <Link to="/book">advertise</Link>
          <Link to="/manager">ads manager</Link>
        </div>
        <p className="feed-copyright">thepoast © 2026</p>
      </footer>
    </div>
  );
}