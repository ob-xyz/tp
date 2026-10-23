import {
  require_ad_results,
  results_default
} from "/build/_shared/chunk-QJSLQVZS.js";
import {
  MediaKit
} from "/build/_shared/chunk-POSZLO5W.js";
import {
  custom_default,
  getCtr,
  getOpenRate,
  runKey
} from "/build/_shared/chunk-KJ6I4X3X.js";
import {
  NotFound
} from "/build/_shared/chunk-ZQSMLRP2.js";
import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  feed_embed_default
} from "/build/_shared/chunk-YXZUJTC2.js";
import "/build/_shared/chunk-GHQHS7KD.js";
import "/build/_shared/chunk-3G6G2NLL.js";
import {
  AltchaWrapper
} from "/build/_shared/chunk-YYFE5CLS.js";
import {
  Form,
  Link,
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useCatch,
  useLoaderData,
  useNavigate,
  useNavigation
} from "/build/_shared/chunk-FZOAUUQ7.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/custom/$company.tsx
var import_react3 = __toESM(require_react());
var import_node = __toESM(require_node());

// app/components/ad-results.tsx
var import_react = __toESM(require_react());

// app/utils/ad-results.ts
var PLACEMENTS_PAID = ["Top Feed \u2014 $500", "Mid Feed \u2014 $300"];
var RAW_PLACEMENTS = ["Top Feed", "Mid Feed"];
var PAYMENT_METHODS = ["Credit Card", "Insertion Order"];
var CREATIVES = ["Same ad", "New ad"];
var int = (value) => value.toLocaleString("en-US");
function formatDate(value) {
  const [y, m, d] = value.split("-").map(Number);
  if (!y || !m || !d)
    return value;
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  });
}

// app/components/ad-results.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BANNER_TRIGGER = 0.85;
var STEPS = ["Schedule", "Confirm"];
function useReachedEndOfFeed() {
  const endRef = (0, import_react.useRef)(null);
  const [reached, setReached] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const el = endRef.current;
    if (!el)
      return;
    let frame = 0;
    const check = () => {
      frame = 0;
      const top = el.getBoundingClientRect().top;
      setReached(window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER);
    };
    const schedule = () => {
      if (!frame)
        frame = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined" && el.parentElement) {
      resizeObserver = new ResizeObserver(schedule);
      resizeObserver.observe(el.parentElement);
    }
    check();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      if (frame)
        cancelAnimationFrame(frame);
    };
  }, []);
  return { endRef, reached };
}
function CalendarIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "svg",
    {
      className: "bk-date-icon",
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", { x: "3", y: "4.5", width: "18", height: "16.5", rx: "3" }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 91,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M3 9.5h18M8 2.5v4M16 2.5v4" }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 92,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/ad-results.tsx",
      lineNumber: 79,
      columnNumber: 5
    },
    this
  );
}
function CheckIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M5 12.5l4.5 4.5L19 7.5" }, void 0, false, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 110,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/ad-results.tsx",
      lineNumber: 99,
      columnNumber: 5
    },
    this
  );
}
function Segmented({
  label,
  options,
  rawOptions,
  value,
  onChange
}) {
  const lookup = rawOptions != null ? rawOptions : options;
  const index = Math.max(0, lookup.indexOf(value));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: `bk-seg is-${options.length}`,
      role: "group",
      "aria-label": label,
      style: { "--bk-i": index, "--bk-n": options.length },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-seg-thumb", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 138,
          columnNumber: 7
        }, this),
        options.map((option, i) => {
          const rawValue = rawOptions ? rawOptions[i] : option;
          const isActive = rawValue === value;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "button",
              "aria-pressed": isActive,
              className: `bk-seg-btn${isActive ? " is-active" : ""}`,
              onClick: () => onChange(rawValue),
              children: option
            },
            option,
            false,
            {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 143,
              columnNumber: 11
            },
            this
          );
        })
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/ad-results.tsx",
      lineNumber: 132,
      columnNumber: 5
    },
    this
  );
}
function AdResults({ data }) {
  var _a, _b, _c;
  const { slug, name, runs, currentId, latestId, totals, defaultPlacement } = data;
  const actionData = useActionData();
  const errors = (_a = actionData == null ? void 0 : actionData.fieldErrors) != null ? _a : {};
  const { endRef, reached } = useReachedEndOfFeed();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const run = (_b = runs.find((r) => runKey(r) === currentId)) != null ? _b : runs[0];
  const stats = run.stats;
  const isLatest = currentId === latestId;
  const previewOn = run.showPreview !== false;
  const latest = (_c = runs.find((r) => runKey(r) === latestId)) != null ? _c : runs[0];
  const [booking, setBooking] = (0, import_react.useState)(false);
  const [step, setStep] = (0, import_react.useState)(1);
  const [startDate, setStartDate] = (0, import_react.useState)("");
  const [placement, setPlacement] = (0, import_react.useState)(defaultPlacement);
  const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("Credit Card");
  const [creative, setCreative] = (0, import_react.useState)("Same ad");
  const [notes, setNotes] = (0, import_react.useState)("");
  const [stepError, setStepError] = (0, import_react.useState)("");
  const [minDate, setMinDate] = (0, import_react.useState)("");
  const flowRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const d = /* @__PURE__ */ new Date();
    const pad = (n) => String(n).padStart(2, "0");
    setMinDate(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
  }, []);
  const openBooking = () => {
    setBooking(true);
    setStep(1);
    requestAnimationFrame(
      () => {
        var _a2;
        return (_a2 = flowRef.current) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    );
  };
  const openPicker = (input) => {
    try {
      input.showPicker();
    } catch {
    }
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
  const summaryRows = [
    { label: "Target Date", value: startDate ? formatDate(startDate) : "Earliest Available" },
    { label: "Placement", value: placement },
    { label: "Payment Method", value: paymentMethod },
    { label: "Ad", value: creative }
  ];
  const serverFieldMessages = Object.entries(errors).filter(([key, message]) => key !== "altcha" && message).map(([, message]) => message);
  const submitLabel = isSubmitting ? "Submitting..." : paymentMethod === "Insertion Order" ? "Lock In Insertion Order \u2192" : "Proceed with Credit Card \u2192";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page bk", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "header",
      {
        className: `feed-topbar${reached ? " is-hidden" : ""}`,
        style: { borderLeft: "none", borderRight: "none" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/img/tp.png", alt: "thepoast", decoding: "async" }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 247,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 246,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 242,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feed-stream bk-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bk-card rs-hero", "aria-labelledby": "rs-name", children: [
        !isLatest && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "?", className: "rs-back", children: "\u2190 Back to latest campaign" }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 256,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 255,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "rs-eyebrow", children: [
          name,
          " \xB7 Ad results"
        ] }, void 0, true, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 262,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-chips", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-chip", children: formatDate(run.date) }, void 0, false, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 264,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-chip", children: [
            "Post #",
            run.post
          ] }, void 0, true, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 265,
            columnNumber: 13
          }, this),
          run.placement && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-chip", children: run.placement }, void 0, false, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 266,
            columnNumber: 31
          }, this),
          !stats && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-chip", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-dot", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 269,
              columnNumber: 17
            }, this),
            "Results pending"
          ] }, void 0, true, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 268,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 263,
          columnNumber: 11
        }, this),
        stats ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "rs-hero-value", children: int(stats.clicks) }, void 0, false, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 277,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "rs-hero-label", children: "Clicks" }, void 0, false, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 278,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stats", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-value", children: int(stats.sent) }, void 0, false, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 282,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-label", children: "Sent" }, void 0, false, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 283,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 281,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-value", children: int(stats.opens) }, void 0, false, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 286,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-label", children: "Opens" }, void 0, false, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 287,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 285,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-value", children: getCtr(stats) }, void 0, false, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 290,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-label", children: "Click-through rate" }, void 0, false, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 291,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 289,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-value", children: getOpenRate(stats) }, void 0, false, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 294,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-label", children: "Open rate" }, void 0, false, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 295,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 293,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 280,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "rs-foot", children: "Open counts are approximate, since email privacy features inflate them. Clicks are the most reliable measure." }, void 0, false, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 299,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 276,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-pending", children: "Results are on the way. This page updates once the campaign has had time to collect clicks." }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 305,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 253,
        columnNumber: 9
      }, this),
      (previewOn || run.image) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bk-card", "aria-labelledby": "rs-ad-label", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-section-label", id: "rs-ad-label", children: "The ad as it ran" }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 315,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-embed loaded bk-preview rs-preview", children: previewOn ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          feed_embed_default,
          {
            id: `${slug}-run-${currentId}`,
            src: `/custom/${slug}/ad?run=${encodeURIComponent(currentId)}`,
            title: `${name} ad, ${formatDate(run.date)}`,
            interactive: true,
            bordered: false,
            fallbackHeight: 350
          },
          currentId,
          false,
          {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 321,
            columnNumber: 17
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: run.image, alt: `${name} ad, ${formatDate(run.date)}`, loading: "lazy" }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 331,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 319,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "rs-caption", children: [
          "Post #",
          run.post,
          " in the ",
          formatDate(run.date),
          " edition"
        ] }, void 0, true, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 335,
          columnNumber: 13
        }, this),
        run.note && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-note", children: run.note }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 339,
          columnNumber: 26
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 314,
        columnNumber: 11
      }, this),
      runs.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bk-card", "aria-labelledby": "rs-history-label", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-section-label", id: "rs-history-label", children: "All campaigns" }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 346,
          columnNumber: 13
        }, this),
        totals.hasStats && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stats is-3 rs-totals", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stat", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-value", children: totals.campaigns }, void 0, false, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 353,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-label", children: "Campaigns" }, void 0, false, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 354,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 352,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stat", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-value", children: int(totals.clicks) }, void 0, false, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 357,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-label", children: "Total clicks" }, void 0, false, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 358,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 356,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stat", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-value", children: totals.ctr }, void 0, false, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 361,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-label", children: "Avg CTR" }, void 0, false, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 362,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 360,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 351,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { className: "rs-runs", children: runs.map((r) => {
          const key = runKey(r);
          const isCurrent = key === currentId;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Link,
            {
              to: key === latestId ? "?" : `?run=${encodeURIComponent(key)}`,
              className: `rs-run${isCurrent ? " is-current" : ""}`,
              "aria-current": isCurrent ? "true" : void 0,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-run-main", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-run-date", children: formatDate(r.date) }, void 0, false, {
                    fileName: "app/components/ad-results.tsx",
                    lineNumber: 379,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-run-meta", children: [
                    "Post #",
                    r.post,
                    r.placement ? ` \xB7 ${r.placement}` : ""
                  ] }, void 0, true, {
                    fileName: "app/components/ad-results.tsx",
                    lineNumber: 380,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 378,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-run-stat", children: r.stats ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-run-clicks", children: [
                    int(r.stats.clicks),
                    " clicks"
                  ] }, void 0, true, {
                    fileName: "app/components/ad-results.tsx",
                    lineNumber: 388,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-run-ctr", children: [
                    getCtr(r.stats),
                    " CTR"
                  ] }, void 0, true, {
                    fileName: "app/components/ad-results.tsx",
                    lineNumber: 389,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 387,
                  columnNumber: 27
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-run-ctr", children: "Pending" }, void 0, false, {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 394,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 385,
                  columnNumber: 23
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 373,
              columnNumber: 21
            },
            this
          ) }, key, false, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 372,
            columnNumber: 19
          }, this);
        }) }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 367,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 345,
        columnNumber: 11
      }, this),
      !booking && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bk-card rs-cta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "bk-title", children: "Ready for another run?" }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 408,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "bk-sub", children: "Book your next ad in about a minute. Reuse this one or send us something new." }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 409,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "button",
            className: "bk-btn bk-btn-primary bk-btn-block",
            onClick: openBooking,
            children: "Book Your Next Ad \u2192"
          },
          void 0,
          false,
          {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 412,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 407,
        columnNumber: 11
      }, this),
      booking && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-flow", ref: flowRef, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { className: "bk-steps", "aria-label": "Progress", children: STEPS.map((label, i) => {
          const n = i + 1;
          const state = step === n ? "current" : step > n ? "done" : "todo";
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Fragment, { children: [
            i > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "li",
              {
                className: `bk-step-line${step >= n ? " is-done" : ""}`,
                "aria-hidden": "true"
              },
              void 0,
              false,
              {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 432,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "li",
              {
                className: `bk-step is-${state}`,
                "aria-current": state === "current" ? "step" : void 0,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    className: "bk-step-btn",
                    disabled: state !== "done",
                    onClick: () => setStep(n),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-step-dot", children: state === "done" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckIcon, {}, void 0, false, {
                        fileName: "app/components/ad-results.tsx",
                        lineNumber: 448,
                        columnNumber: 47
                      }, this) : n }, void 0, false, {
                        fileName: "app/components/ad-results.tsx",
                        lineNumber: 447,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-step-label", children: label }, void 0, false, {
                        fileName: "app/components/ad-results.tsx",
                        lineNumber: 450,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/components/ad-results.tsx",
                    lineNumber: 441,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 437,
                columnNumber: 21
              },
              this
            )
          ] }, label, true, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 430,
            columnNumber: 19
          }, this);
        }) }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 425,
          columnNumber: 13
        }, this),
        step === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "rs-flow-title", children: "Run another ad" }, void 0, false, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 461,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "bk-sub", children: "Pick a date and placement. We'll confirm by email." }, void 0, false, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 462,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-fields", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", id: "rs-date-label", children: "Target Start Date" }, void 0, false, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 466,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "bk-date", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `bk-date-text${startDate ? "" : " is-empty"}`, children: startDate ? formatDate(startDate) : "Select launch date" }, void 0, false, {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 471,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarIcon, {}, void 0, false, {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 474,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "input",
                  {
                    type: "date",
                    className: "bk-date-input",
                    "aria-labelledby": "rs-date-label",
                    value: startDate,
                    min: minDate || void 0,
                    onClick: (e) => openPicker(e.currentTarget),
                    onChange: (e) => {
                      setStartDate(e.target.value);
                      setStepError("");
                    }
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/ad-results.tsx",
                    lineNumber: 475,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 470,
                columnNumber: 21
              }, this),
              (stepError || errors.startDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-error", role: "alert", children: stepError || errors.startDate }, void 0, false, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 490,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 465,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", children: "Select Placement" }, void 0, false, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 497,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Segmented,
                {
                  label: "Placement",
                  options: PLACEMENTS_PAID,
                  rawOptions: RAW_PLACEMENTS,
                  value: placement,
                  onChange: setPlacement
                },
                void 0,
                false,
                {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 498,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 496,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", children: "Which Ad" }, void 0, false, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 508,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Segmented,
                {
                  label: "Which ad",
                  options: CREATIVES,
                  value: creative,
                  onChange: setCreative
                },
                void 0,
                false,
                {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 509,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 507,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", children: "Payment Method" }, void 0, false, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 518,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Segmented,
                {
                  label: "Payment method",
                  options: PAYMENT_METHODS,
                  value: paymentMethod,
                  onChange: setPaymentMethod
                },
                void 0,
                false,
                {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 519,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 517,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 464,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-actions", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                type: "button",
                className: "bk-btn bk-btn-secondary",
                onClick: () => setBooking(false),
                children: "Cancel"
              },
              void 0,
              false,
              {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 529,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "bk-btn bk-btn-primary", onClick: goToReview, children: "Review Order \u2192" }, void 0, false, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 536,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 528,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 460,
          columnNumber: 15
        }, this),
        step === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "bk-card", children: [
          (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-alert", role: "alert", children: [
            actionData.error,
            serverFieldMessages.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: serverFieldMessages.map((message) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: message }, message, false, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 552,
              columnNumber: 27
            }, this)) }, void 0, false, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 550,
              columnNumber: 23
            }, this),
            actionData.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: actionData.debug }, void 0, false, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 556,
              columnNumber: 42
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 547,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "startDate", value: startDate }, void 0, false, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 560,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "placement", value: placement }, void 0, false, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 561,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "paymentMethod", value: paymentMethod }, void 0, false, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 562,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "creative", value: creative }, void 0, false, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 563,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "text",
              name: "nonce",
              className: "hp-field",
              tabIndex: -1,
              autoComplete: "off",
              "aria-hidden": "true",
              style: { display: "none" }
            },
            void 0,
            false,
            {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 564,
              columnNumber: 17
            },
            this
          ),
          creative === "Same ad" && (latest.showPreview !== false || latest.image) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { marginBottom: "1.5rem" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", style: { marginBottom: "0.5rem" }, children: [
              name,
              " Ad"
            ] }, void 0, true, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 576,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                className: "feed-embed loaded bk-preview",
                style: { maxHeight: "220px", overflow: "hidden", marginBottom: 0 },
                children: latest.showPreview !== false ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  feed_embed_default,
                  {
                    id: `${slug}-rebook-thumbnail`,
                    src: `/custom/${slug}/ad?run=${encodeURIComponent(latestId)}`,
                    title: `${name} ad`,
                    interactive: false,
                    bordered: false,
                    fallbackHeight: 220
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/ad-results.tsx",
                    lineNumber: 584,
                    columnNumber: 25
                  },
                  this
                ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "img",
                  {
                    src: latest.image,
                    alt: `${name} ad`,
                    style: { display: "block", width: "100%", height: "auto" }
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/ad-results.tsx",
                    lineNumber: 593,
                    columnNumber: 25
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 579,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 575,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "bk-summary", children: summaryRows.map((row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: row.label }, void 0, false, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 606,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: row.value }, void 0, false, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 607,
              columnNumber: 23
            }, this)
          ] }, row.label, true, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 605,
            columnNumber: 21
          }, this)) }, void 0, false, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 603,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", style: { marginBottom: "1.5rem" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "bk-label", htmlFor: "rs-notes", children: creative === "New ad" ? "Tell us about your new ad" : "Additional Notes (Optional)" }, void 0, false, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 613,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "textarea",
              {
                id: "rs-notes",
                name: "notes",
                className: "bk-textarea",
                rows: 3,
                placeholder: creative === "New ad" ? "Link to your new creative, copy, or tracking links..." : "Special instructions or tracking links...",
                value: notes,
                onChange: (e) => setNotes(e.target.value)
              },
              void 0,
              false,
              {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 618,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 612,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-altcha", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 634,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 633,
            columnNumber: 17
          }, this),
          errors.altcha && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-error", role: "alert", style: { marginBottom: "1.25rem" }, children: errors.altcha }, void 0, false, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 637,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-actions", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                type: "button",
                className: "bk-btn bk-btn-secondary",
                onClick: () => setStep(1),
                children: "\u2190 Back"
              },
              void 0,
              false,
              {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 643,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bk-btn bk-btn-primary", disabled: isSubmitting, children: submitLabel }, void 0, false, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 650,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 642,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 545,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 424,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 659,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ad-results.tsx",
      lineNumber: 251,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "feed-footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-footer-links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", children: "about" }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 664,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/archive", children: "archive" }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 665,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/submit-post", children: "submit post" }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 666,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 667,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 668,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/book", children: "advertise" }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 669,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/manager", children: "ads manager" }, void 0, false, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 670,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 663,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "feed-copyright", children: "thepoast \xA9 2026" }, void 0, false, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 672,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ad-results.tsx",
      lineNumber: 662,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ad-results.tsx",
    lineNumber: 241,
    columnNumber: 5
  }, this);
}

// app/routes/custom/$company.tsx
var import_ad_results4 = __toESM(require_ad_results());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  if (!data) {
    return { title: "404 / thepoast", robots: "noindex" };
  }
  if (data.mode === "results") {
    return { title: `${data.results.name} ad results / thepoast`, robots: "noindex, nofollow" };
  }
  return {
    title: "thepoast"
  };
};
var links = () => [
  { rel: "stylesheet", href: custom_default },
  { rel: "stylesheet", href: results_default },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
];
function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NotFound, {}, void 0, false, {
      fileName: "app/routes/custom/$company.tsx",
      lineNumber: 97,
      columnNumber: 12
    }, this);
  }
  throw new Error(`Unexpected response: ${caught.status}`);
}
var BANNER_TRIGGER2 = 0.85;
function useReachedEndOfFeed2() {
  const endRef = (0, import_react3.useRef)(null);
  const [reached, setReached] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
    const el = endRef.current;
    if (!el)
      return;
    let frame = 0;
    const check = () => {
      frame = 0;
      const top = el.getBoundingClientRect().top;
      setReached(
        window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER2
      );
    };
    const schedule = () => {
      if (!frame)
        frame = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined" && el.parentElement) {
      resizeObserver = new ResizeObserver(schedule);
      resizeObserver.observe(el.parentElement);
    }
    check();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      if (frame)
        cancelAnimationFrame(frame);
    };
  }, []);
  return { endRef, reached };
}
function CompanyPage() {
  const data = useLoaderData();
  if (data.mode === "results") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdResults, { data: data.results }, void 0, false, {
      fileName: "app/routes/custom/$company.tsx",
      lineNumber: 154,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SamplePage, { company: data.company, companyName: data.companyName }, void 0, false, {
    fileName: "app/routes/custom/$company.tsx",
    lineNumber: 157,
    columnNumber: 10
  }, this);
}
function SamplePage({ company, companyName }) {
  const { endRef, reached } = useReachedEndOfFeed2();
  const navigate = useNavigate();
  const footerRef = (0, import_react3.useRef)(null);
  const [kitOpen, setKitOpen] = (0, import_react3.useState)(false);
  const bannerVisible = reached;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: `feed-topbar${reached ? " is-hidden" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/img/tp.png", alt: "thepoast", decoding: "async" }, void 0, false, {
      fileName: "app/routes/custom/$company.tsx",
      lineNumber: 172,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/custom/$company.tsx",
      lineNumber: 171,
      columnNumber: 3
    }, this) }, void 0, false, {
      fileName: "app/routes/custom/$company.tsx",
      lineNumber: 170,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "feed-stream", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mk-promo-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/${company}/book?free=1`, className: "mk-promo", children: "Book your first ad for free! Get started \u2192" }, void 0, false, {
        fileName: "app/routes/custom/$company.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/custom/$company.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "feed-embed loaded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        feed_embed_default,
        {
          id: `${company}-campaign`,
          src: `/custom/${company}/preview`,
          title: `${companyName} x thepoast Campaign`,
          interactive: true,
          bordered: true,
          hideTopBorder: true,
          fallbackHeight: 900
        },
        void 0,
        false,
        {
          fileName: "app/routes/custom/$company.tsx",
          lineNumber: 188,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/custom/$company.tsx",
        lineNumber: 187,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/custom/$company.tsx",
        lineNumber: 199,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "footer",
        {
          ref: footerRef,
          className: `feed-footer${bannerVisible ? " is-covered" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "feed-footer-links", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/about", children: "about" }, void 0, false, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 206,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/archive", children: "archive" }, void 0, false, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 207,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/submit-post", children: "submit post" }, void 0, false, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 208,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 209,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 210,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/book", children: "advertise" }, void 0, false, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 211,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/manager", children: "ads manager" }, void 0, false, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 212,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.tsx",
              lineNumber: 205,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "feed-copyright", children: "thepoast \xA9 2026" }, void 0, false, {
              fileName: "app/routes/custom/$company.tsx",
              lineNumber: 214,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/custom/$company.tsx",
          lineNumber: 201,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "aside",
        {
          className: `feed-banner${bannerVisible ? " is-visible" : ""}`,
          "aria-label": "Get Started",
          "aria-hidden": !bannerVisible,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "feed-banner-inner", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "feed-banner-title", children: "Better business performance, fueled by email" }, void 0, false, {
              fileName: "app/routes/custom/$company.tsx",
              lineNumber: 223,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                type: "button",
                className: "feed-banner-btn",
                onClick: () => navigate(`/${company}/book`),
                children: "Get Started"
              },
              void 0,
              false,
              {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 227,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                type: "button",
                className: "back-btn",
                tabIndex: bannerVisible ? 0 : -1,
                onClick: () => setKitOpen(true),
                style: { marginTop: "0rem" },
                children: "Audience details"
              },
              void 0,
              false,
              {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 235,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.tsx",
            lineNumber: 222,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/custom/$company.tsx",
          lineNumber: 217,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/custom/$company.tsx",
      lineNumber: 180,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      MediaKit,
      {
        open: kitOpen,
        onClose: () => setKitOpen(false),
        ctaLabel: "Get Started",
        onCta: () => navigate(`/${company}/book`)
      },
      void 0,
      false,
      {
        fileName: "app/routes/custom/$company.tsx",
        lineNumber: 249,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/custom/$company.tsx",
    lineNumber: 169,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  CompanyPage as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/custom/$company-YXVSY4CL.js.map
