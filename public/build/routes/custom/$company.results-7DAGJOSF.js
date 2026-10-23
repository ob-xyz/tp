import {
  require_ad_results,
  results_default
} from "/build/_shared/chunk-QJSLQVZS.js";
import {
  custom_default,
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
  useNavigation
} from "/build/_shared/chunk-FZOAUUQ7.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/custom/$company.results.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_ad_results2 = __toESM(require_ad_results());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BANNER_TRIGGER = 0.85;
var STEPS = ["Schedule", "Confirm"];
var PLACEMENTS_PAID = ["Top Feed \u2014 $500", "Mid Feed \u2014 $300"];
var RAW_PLACEMENTS = ["Top Feed", "Mid Feed"];
var PAYMENT_METHODS = ["Credit Card", "Insertion Order"];
var CREATIVES = ["Same ad", "New ad"];
var int = (value) => value.toLocaleString("en-US");
var pct = (part, whole) => whole > 0 ? `${(part / whole * 100).toFixed(2)}%` : "\u2014";
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
var meta = ({ data }) => {
  if (!data) {
    return { title: "404 / thepoast", robots: "noindex" };
  }
  return {
    title: `${data.name} ad results / thepoast`,
    robots: "noindex, nofollow"
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NotFound, {}, void 0, false, {
      fileName: "app/routes/custom/$company.results.tsx",
      lineNumber: 226,
      columnNumber: 12
    }, this);
  }
  throw new Error(`Unexpected response: ${caught.status}`);
}
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
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 291,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M3 9.5h18M8 2.5v4M16 2.5v4" }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 292,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/custom/$company.results.tsx",
      lineNumber: 279,
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
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 310,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/custom/$company.results.tsx",
      lineNumber: 299,
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
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 338,
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
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 343,
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
      fileName: "app/routes/custom/$company.results.tsx",
      lineNumber: 332,
      columnNumber: 5
    },
    this
  );
}
function AdResultsPage() {
  var _a, _b;
  const { slug, name, runs, currentId, latestId, totals, defaultPlacement } = useLoaderData();
  const actionData = useActionData();
  const errors = (_a = actionData == null ? void 0 : actionData.fieldErrors) != null ? _a : {};
  const { endRef, reached } = useReachedEndOfFeed();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const run = (_b = runs.find((r) => runKey(r) === currentId)) != null ? _b : runs[0];
  const stats = run.stats;
  const isLatest = currentId === latestId;
  const previewOn = run.showPreview !== false;
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
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 445,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 444,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 440,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feed-stream bk-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bk-card rs-hero", "aria-labelledby": "rs-name", children: [
        !isLatest && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "?", className: "rs-back", preventScrollReset: false, children: "\u2190 Back to latest campaign" }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 454,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 453,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "rs-eyebrow", children: "Ad results" }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 460,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "rs-name", id: "rs-name", children: name }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 461,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-chips", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-chip", children: formatDate(run.date) }, void 0, false, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 466,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-chip", children: [
            "Post #",
            run.post
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 467,
            columnNumber: 13
          }, this),
          run.placement && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-chip", children: run.placement }, void 0, false, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 468,
            columnNumber: 31
          }, this),
          !stats && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-chip", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-dot", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 471,
              columnNumber: 17
            }, this),
            "Results pending"
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 470,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 465,
          columnNumber: 11
        }, this),
        stats ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "rs-hero-value", children: int(stats.clicks) }, void 0, false, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 479,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "rs-hero-label", children: "Clicks" }, void 0, false, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 480,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stats", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-value", children: int(stats.sent) }, void 0, false, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 484,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-label", children: "Sent" }, void 0, false, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 485,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 483,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-value", children: int(stats.opens) }, void 0, false, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 488,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-label", children: "Opens" }, void 0, false, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 489,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-sub", children: [
                pct(stats.opens, stats.sent),
                " open rate"
              ] }, void 0, true, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 490,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 487,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-value", children: int(stats.uniqueClicks) }, void 0, false, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 493,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-label", children: "Unique clickers" }, void 0, false, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 494,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 492,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-value", children: pct(stats.uniqueClicks, stats.sent) }, void 0, false, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 497,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-label", children: "Click-through rate" }, void 0, false, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 498,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 496,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 482,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "rs-foot", children: "Open counts are approximate, since email privacy features inflate them. Clicks are the most reliable measure." }, void 0, false, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 502,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 478,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-pending", children: "Results are on the way. This page updates once the campaign has had time to collect clicks." }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 508,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 451,
        columnNumber: 9
      }, this),
      (previewOn || run.image) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bk-card", "aria-labelledby": "rs-ad-label", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-section-label", id: "rs-ad-label", children: "The ad as it ran" }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 518,
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
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 524,
            columnNumber: 13
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: run.image, alt: `${name} ad, ${formatDate(run.date)}`, loading: "lazy" }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 534,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 522,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "rs-caption", children: [
          "Post #",
          run.post,
          " in the ",
          formatDate(run.date),
          " edition"
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 538,
          columnNumber: 13
        }, this),
        run.note && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-note", children: run.note }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 542,
          columnNumber: 26
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 517,
        columnNumber: 9
      }, this),
      runs.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bk-card", "aria-labelledby": "rs-history-label", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-section-label", id: "rs-history-label", children: "All campaigns" }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 549,
          columnNumber: 13
        }, this),
        totals.hasStats && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stats is-3 rs-totals", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stat", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-value", children: totals.campaigns }, void 0, false, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 556,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-label", children: "Campaigns" }, void 0, false, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 557,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 555,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stat", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-value", children: int(totals.clicks) }, void 0, false, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 560,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-label", children: "Total clicks" }, void 0, false, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 561,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 559,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rs-stat", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-value", children: totals.ctr }, void 0, false, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 564,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-stat-label", children: "Avg CTR" }, void 0, false, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 565,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 563,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 554,
          columnNumber: 11
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
                    fileName: "app/routes/custom/$company.results.tsx",
                    lineNumber: 582,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-run-meta", children: [
                    "Post #",
                    r.post,
                    r.placement ? ` \xB7 ${r.placement}` : ""
                  ] }, void 0, true, {
                    fileName: "app/routes/custom/$company.results.tsx",
                    lineNumber: 583,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 581,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-run-stat", children: r.stats ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-run-clicks", children: [
                    int(r.stats.clicks),
                    " clicks"
                  ] }, void 0, true, {
                    fileName: "app/routes/custom/$company.results.tsx",
                    lineNumber: 591,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-run-ctr", children: [
                    pct(r.stats.uniqueClicks, r.stats.sent),
                    " CTR"
                  ] }, void 0, true, {
                    fileName: "app/routes/custom/$company.results.tsx",
                    lineNumber: 592,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 590,
                  columnNumber: 23
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rs-run-ctr", children: "Pending" }, void 0, false, {
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 597,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 588,
                  columnNumber: 23
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 576,
              columnNumber: 21
            },
            this
          ) }, key, false, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 575,
            columnNumber: 17
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 570,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 548,
        columnNumber: 9
      }, this),
      !booking && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bk-card rs-cta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "bk-title", children: "Ready for another run?" }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 611,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "bk-sub", children: "Book your next ad in about a minute. Reuse this one or send us something new." }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 612,
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
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 615,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 610,
        columnNumber: 9
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
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 635,
                columnNumber: 19
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
                        fileName: "app/routes/custom/$company.results.tsx",
                        lineNumber: 651,
                        columnNumber: 47
                      }, this) : n }, void 0, false, {
                        fileName: "app/routes/custom/$company.results.tsx",
                        lineNumber: 650,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-step-label", children: label }, void 0, false, {
                        fileName: "app/routes/custom/$company.results.tsx",
                        lineNumber: 653,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/custom/$company.results.tsx",
                    lineNumber: 644,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 640,
                columnNumber: 21
              },
              this
            )
          ] }, label, true, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 633,
            columnNumber: 17
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 628,
          columnNumber: 13
        }, this),
        step === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "rs-flow-title", children: "Run another ad" }, void 0, false, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 664,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "bk-sub", children: "Pick a date and placement. We'll confirm by email." }, void 0, false, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 665,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-fields", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", id: "rs-date-label", children: "Target Start Date" }, void 0, false, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 669,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "bk-date", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `bk-date-text${startDate ? "" : " is-empty"}`, children: startDate ? formatDate(startDate) : "Select launch date" }, void 0, false, {
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 674,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarIcon, {}, void 0, false, {
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 677,
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
                    fileName: "app/routes/custom/$company.results.tsx",
                    lineNumber: 678,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 673,
                columnNumber: 21
              }, this),
              (stepError || errors.startDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-error", role: "alert", children: stepError || errors.startDate }, void 0, false, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 693,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 668,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", children: "Select Placement" }, void 0, false, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 700,
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
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 701,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 699,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", children: "Which Ad" }, void 0, false, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 711,
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
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 712,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 710,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", children: "Payment Method" }, void 0, false, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 721,
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
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 722,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 720,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 667,
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
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 732,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "bk-btn bk-btn-primary", onClick: goToReview, children: "Review Order \u2192" }, void 0, false, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 739,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 731,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 663,
          columnNumber: 11
        }, this),
        step === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "bk-card", children: [
          (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-alert", role: "alert", children: [
            actionData.error,
            serverFieldMessages.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: serverFieldMessages.map(
              (message) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: message }, message, false, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 755,
                columnNumber: 17
              }, this)
            ) }, void 0, false, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 753,
              columnNumber: 15
            }, this),
            actionData.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: actionData.debug }, void 0, false, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 759,
              columnNumber: 42
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 750,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "startDate", value: startDate }, void 0, false, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 763,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "placement", value: placement }, void 0, false, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 764,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "paymentMethod", value: paymentMethod }, void 0, false, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 765,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "creative", value: creative }, void 0, false, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 766,
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
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 767,
              columnNumber: 17
            },
            this
          ),
          creative === "Same ad" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { marginBottom: "1.5rem" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", style: { marginBottom: "0.5rem" }, children: [
              name,
              " Ad"
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 779,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                className: "feed-embed loaded bk-preview",
                style: { maxHeight: "220px", overflow: "hidden", marginBottom: 0 },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  feed_embed_default,
                  {
                    id: `${slug}-rebook-thumbnail`,
                    src: `/custom/${slug}/storyboard`,
                    title: `${name} Target Ad Unit`,
                    interactive: false,
                    bordered: false,
                    fallbackHeight: 220
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/custom/$company.results.tsx",
                    lineNumber: 786,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 782,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 778,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "bk-summary", children: summaryRows.map(
            (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-row", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: row.label }, void 0, false, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 801,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: row.value }, void 0, false, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 802,
                columnNumber: 23
              }, this)
            ] }, row.label, true, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 800,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 798,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", style: { marginBottom: "1.5rem" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "bk-label", htmlFor: "rs-notes", children: creative === "New ad" ? "Tell us about your new ad" : "Additional Notes (Optional)" }, void 0, false, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 808,
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
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 813,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 807,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-altcha", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 829,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 828,
            columnNumber: 17
          }, this),
          errors.altcha && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-error", role: "alert", style: { marginBottom: "1.25rem" }, children: errors.altcha }, void 0, false, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 832,
            columnNumber: 13
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
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 838,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bk-btn bk-btn-primary", disabled: isSubmitting, children: submitLabel }, void 0, false, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 845,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 837,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 748,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 627,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 854,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/custom/$company.results.tsx",
      lineNumber: 449,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "feed-footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-footer-links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", children: "about" }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 859,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/archive", children: "archive" }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 860,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/submit-post", children: "submit post" }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 861,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 862,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 863,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/book", children: "advertise" }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 864,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/manager", children: "ads manager" }, void 0, false, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 865,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 858,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "feed-copyright", children: "thepoast \xA9 2026" }, void 0, false, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 867,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/custom/$company.results.tsx",
      lineNumber: 857,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/custom/$company.results.tsx",
    lineNumber: 439,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  AdResultsPage as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/custom/$company.results-7DAGJOSF.js.map
