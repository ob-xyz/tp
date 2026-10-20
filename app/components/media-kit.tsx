import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { Link } from "@remix-run/react";

export const MEDIA_KIT = {
  // One-liner shown above the Book button in the bottom banner
  bannerLine: "70,000 weekly readers · 27,400 subscribers",

  // What every placement price covers.
  priceUnit: "per issue",

  // Only add stats you can defend. A third stat like
  // { value: "X", label: "Clicks per issue" } is more credible than open rate.
  stats: [
    { value: "10,000", label: "daily readers" },
    { value: "27,400", label: "subscribers" },
  ],

  // Who reads it, in one line. Leave empty to hide the line entirely.
  audience: "",

  placements: [
    {
      name: "Top Feed",
      price: "$500",
      note: "The first ad readers see in every issue",
    },
    {
      name: "Mid Feed",
      price: "$300",
      note: "Placed natively between posts, further down the feed",
    },
  ],

  // Where "Full media kit" goes (placeholder: point at your real media kit)
  fullKitHref: "/media-kit",
};

type MediaKitProps = {
  open: boolean;
  onClose: () => void;
  ctaLabel: string;
  onCta: () => void;
};

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function MediaKit({ open, onClose, ctaLabel, onCta }: MediaKitProps) {
  // `render` keeps it mounted during the exit animation, `shown` drives the CSS
  const [render, setRender] = useState(false);
  const [shown, setShown] = useState(false);

  const sheetRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const drag = useRef({ startY: 0, dy: 0, active: false });

  // Mount / unmount with animation
  useEffect(() => {
    if (open) {
      lastFocused.current = document.activeElement as HTMLElement | null;
      setRender(true);
      let inner = 0;
      const outer = requestAnimationFrame(() => {
        inner = requestAnimationFrame(() => setShown(true));
      });
      return () => {
        cancelAnimationFrame(outer);
        cancelAnimationFrame(inner);
      };
    }

    setShown(false);
    const t = window.setTimeout(() => {
      setRender(false);
      lastFocused.current?.focus?.();
    }, 320);
    return () => window.clearTimeout(t);
  }, [open]);

  // Scroll lock, Escape to close, focus trap
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !sheetRef.current) return;
      const items = Array.from(
        sheetRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  // Swipe down on the grabber to dismiss (phones only)
  const onDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(max-width: 640px)").matches) return;
    drag.current = { startY: e.clientY, dy: 0, active: true };
    e.currentTarget.setPointerCapture(e.pointerId);
    sheetRef.current?.classList.add("is-dragging");
  };

  const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || !sheetRef.current) return;
    const dy = Math.max(0, e.clientY - drag.current.startY);
    drag.current.dy = dy;
    sheetRef.current.style.transform = `translateY(${dy}px)`;
  };

  const onUp = () => {
    if (!drag.current.active || !sheetRef.current) return;
    drag.current.active = false;
    sheetRef.current.classList.remove("is-dragging");
    sheetRef.current.style.transform = "";
    if (drag.current.dy > 100) onClose();
  };

  if (!render) return null;

  return (
    <div className={`mk${shown ? " is-open" : ""}`}>
      <div className="mk-backdrop" onClick={onClose} aria-hidden="true" />

      <div
        ref={sheetRef}
        className="mk-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mk-title"
      >
        <div
          className="mk-head"
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        >
          <span className="mk-grabber" aria-hidden="true" />
        </div>

        <button
          ref={closeRef}
          type="button"
          className="mk-close"
          aria-label="Close"
          onClick={onClose}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="mk-body">
          <h2 id="mk-title" className="mk-title">
            Your next customer is already reading thepoast
          </h2>
          {MEDIA_KIT.audience && <p className="mk-lede">{MEDIA_KIT.audience}</p>}

          <div className={`mk-stats is-${MEDIA_KIT.stats.length}`}>
            {MEDIA_KIT.stats.map((s) => (
              <div key={s.label} className="mk-stat">
                <span className="mk-stat-value">{s.value}</span>
                <span className="mk-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <span className="mk-label">Placements</span>
          <ul className="mk-placements">
            {MEDIA_KIT.placements.map((p) => (
              <li key={p.name} className="mk-placement">
                <div className="mk-placement-text">
                  <span className="mk-placement-name">{p.name}</span>
                  <span className="mk-placement-note">{p.note}</span>
                </div>
                <div className="mk-placement-cost">
                  <span className="mk-placement-price">{p.price}</span>
                  <span className="mk-placement-unit">{MEDIA_KIT.priceUnit}</span>
                </div>
              </li>
            ))}
          </ul>

          <button type="button" className="mk-cta" onClick={onCta}>
            {ctaLabel}
          </button>
          <div style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            <Link className="back-btn" to="/media-kit" prefetch="intent">
              See full media kit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}