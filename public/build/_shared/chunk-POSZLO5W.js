import {
  Link,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FZOAUUQ7.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/media-kit.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MEDIA_KIT = {
  // One-liner shown above the Book button in the bottom banner
  bannerLine: "70,000 weekly readers \xB7 27,400 subscribers",
  // What every placement price covers.
  priceUnit: "per issue",
  // Only add stats you can defend. A third stat like
  // { value: "X", label: "Clicks per issue" } is more credible than open rate.
  stats: [
    { value: "10,000", label: "daily readers" },
    { value: "27,400", label: "subscribers" }
  ],
  // Who reads it, in one line. Leave empty to hide the line entirely.
  audience: "",
  placements: [
    {
      name: "Top Feed",
      price: "$500",
      note: "The first ad readers see in every issue"
    },
    {
      name: "Mid Feed",
      price: "$300",
      note: "Placed natively between posts, further down the feed"
    }
  ],
  // Where "Full media kit" goes (placeholder: point at your real media kit)
  fullKitHref: "/media-kit"
};
var FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
function MediaKit({ open, onClose, ctaLabel, onCta }) {
  const [render, setRender] = (0, import_react.useState)(false);
  const [shown, setShown] = (0, import_react.useState)(false);
  const sheetRef = (0, import_react.useRef)(null);
  const closeRef = (0, import_react.useRef)(null);
  const lastFocused = (0, import_react.useRef)(null);
  const drag = (0, import_react.useRef)({ startY: 0, dy: 0, active: false });
  (0, import_react.useEffect)(() => {
    if (open) {
      lastFocused.current = document.activeElement;
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
      var _a, _b;
      setRender(false);
      (_b = (_a = lastFocused.current) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }, 320);
    return () => window.clearTimeout(t);
  }, [open]);
  (0, import_react.useEffect)(() => {
    var _a;
    if (!open)
      return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    (_a = closeRef.current) == null ? void 0 : _a.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !sheetRef.current)
        return;
      const items = Array.from(
        sheetRef.current.querySelectorAll(FOCUSABLE)
      );
      if (!items.length)
        return;
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
  const onDown = (e) => {
    var _a;
    if (!window.matchMedia("(max-width: 640px)").matches)
      return;
    drag.current = { startY: e.clientY, dy: 0, active: true };
    e.currentTarget.setPointerCapture(e.pointerId);
    (_a = sheetRef.current) == null ? void 0 : _a.classList.add("is-dragging");
  };
  const onMove = (e) => {
    if (!drag.current.active || !sheetRef.current)
      return;
    const dy = Math.max(0, e.clientY - drag.current.startY);
    drag.current.dy = dy;
    sheetRef.current.style.transform = `translateY(${dy}px)`;
  };
  const onUp = () => {
    if (!drag.current.active || !sheetRef.current)
      return;
    drag.current.active = false;
    sheetRef.current.classList.remove("is-dragging");
    sheetRef.current.style.transform = "";
    if (drag.current.dy > 100)
      onClose();
  };
  if (!render)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `mk${shown ? " is-open" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-backdrop", onClick: onClose, "aria-hidden": "true" }, void 0, false, {
      fileName: "app/components/media-kit.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        ref: sheetRef,
        className: "mk-sheet",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "mk-title",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "mk-head",
              onPointerDown: onDown,
              onPointerMove: onMove,
              onPointerUp: onUp,
              onPointerCancel: onUp,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-grabber", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/components/media-kit.tsx",
                lineNumber: 160,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 153,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              ref: closeRef,
              type: "button",
              className: "mk-close",
              "aria-label": "Close",
              onClick: onClose,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "svg",
                {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "3",
                  strokeLinecap: "round",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M6 6l12 12M18 6L6 18" }, void 0, false, {
                    fileName: "app/components/media-kit.tsx",
                    lineNumber: 180,
                    columnNumber: 13
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/media-kit.tsx",
                  lineNumber: 170,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 163,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "mk-title", className: "mk-title", children: "Your next customer is already reading thepoast" }, void 0, false, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 185,
              columnNumber: 11
            }, this),
            MEDIA_KIT.audience && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mk-lede", children: MEDIA_KIT.audience }, void 0, false, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 188,
              columnNumber: 34
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `mk-stats is-${MEDIA_KIT.stats.length}`, children: MEDIA_KIT.stats.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-stat-value", children: s.value }, void 0, false, {
                fileName: "app/components/media-kit.tsx",
                lineNumber: 193,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-stat-label", children: s.label }, void 0, false, {
                fileName: "app/components/media-kit.tsx",
                lineNumber: 194,
                columnNumber: 17
              }, this)
            ] }, s.label, true, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 192,
              columnNumber: 15
            }, this)) }, void 0, false, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 190,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-label", children: "Placements" }, void 0, false, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 199,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mk-placements", children: MEDIA_KIT.placements.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "mk-placement", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-placement-text", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-placement-name", children: p.name }, void 0, false, {
                  fileName: "app/components/media-kit.tsx",
                  lineNumber: 204,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-placement-note", children: p.note }, void 0, false, {
                  fileName: "app/components/media-kit.tsx",
                  lineNumber: 205,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/media-kit.tsx",
                lineNumber: 203,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-placement-cost", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-placement-price", children: p.price }, void 0, false, {
                  fileName: "app/components/media-kit.tsx",
                  lineNumber: 208,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-placement-unit", children: MEDIA_KIT.priceUnit }, void 0, false, {
                  fileName: "app/components/media-kit.tsx",
                  lineNumber: 209,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/media-kit.tsx",
                lineNumber: 207,
                columnNumber: 17
              }, this)
            ] }, p.name, true, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 202,
              columnNumber: 15
            }, this)) }, void 0, false, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 200,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "mk-cta", onClick: onCta, children: ctaLabel }, void 0, false, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 215,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { textAlign: "center", marginLeft: "auto", marginRight: "auto" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "back-btn", to: "/media-kit", prefetch: "intent", children: "See full media kit" }, void 0, false, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 219,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 218,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/media-kit.tsx",
            lineNumber: 184,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/media-kit.tsx",
        lineNumber: 146,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/media-kit.tsx",
    lineNumber: 143,
    columnNumber: 5
  }, this);
}

export {
  MEDIA_KIT,
  MediaKit
};
//# sourceMappingURL=/build/_shared/chunk-POSZLO5W.js.map
