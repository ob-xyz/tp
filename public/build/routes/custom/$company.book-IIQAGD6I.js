import {
  MediaKit
} from "/build/_shared/chunk-DRLPX5FC.js";
import {
  custom_default
} from "/build/_shared/chunk-B2PERYGF.js";
import {
  NotFound
} from "/build/_shared/chunk-JG65HFF3.js";
import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  feed_embed_default
} from "/build/_shared/chunk-YXZUJTC2.js";
import "/build/_shared/chunk-SQF23LBC.js";
import {
  AltchaWrapper
} from "/build/_shared/chunk-4276AIGL.js";
import "/build/_shared/chunk-3G6G2NLL.js";
import {
  Form,
  Link,
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useCatch,
  useLoaderData,
  useNavigation,
  useSearchParams
} from "/build/_shared/chunk-FZOAUUQ7.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/custom/$company.book.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BANNER_TRIGGER = 0.85;
var STEPS = ["Preview", "Schedule", "Confirm"];
var CATEGORIES = ["Technology", "Markets", "Politics"];
var PACKAGES = [
  {
    id: "Single",
    label: "Single placement",
    detail: "1 placement \xB7 one week",
    price: 3e3,
    placements: 1,
    savings: 0,
    recommended: false
  },
  {
    id: "Monthly",
    label: "Monthly campaign",
    detail: "1 placement per week \xB7 4 weeks",
    price: 1e4,
    placements: 4,
    savings: 2e3,
    // vs. 4 × $3,000
    recommended: true
  },
  {
    id: "Quarterly",
    label: "Quarterly campaign",
    detail: "1 placement per week \xB7 12 weeks",
    price: 25e3,
    placements: 12,
    savings: 11e3,
    // vs. 12 × $3,000
    recommended: false
  }
];
var MAX_PLACEMENTS = Math.max(...PACKAGES.map((p) => p.placements));
var PAYMENT_METHODS = ["Credit Card", "Insertion Order", "Free"];
var FREE_TERMS = [
  {
    q: "Is it really free?",
    a: "Yes. Your first ad with thepoast is on us. No card or payment details required."
  },
  {
    q: "Is it free forever?",
    a: "No. This is a one-time offer. Every ad after your first is billed at our standard rates."
  },
  {
    q: "Who qualifies?",
    a: "New advertisers. One free ad per company, and it can't be combined with other offers or exchanged for cash."
  },
  {
    q: "What's included?",
    a: "One single placement for free. Just choose which category you want it in: Technology, Markets, or Politics."
  },
  {
    q: "Any catches?",
    a: "Your start date is a target and depends on availability. Ads must follow our advertising guidelines, and we may adjust or end this offer at any time."
  }
];
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
function addDays(value, days) {
  const [y, m, d] = value.split("-").map(Number);
  if (!y || !m || !d)
    return value;
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}
function formatPrice(amount) {
  return `$${amount.toLocaleString("en-US")}`;
}
var meta = ({ data }) => {
  if (!data) {
    return { title: "404 / thepoast", robots: "noindex" };
  }
  return {
    title: `Booking ad for ${data.companyName}`
  };
};
var links = () => [
  { rel: "stylesheet", href: custom_default },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
];
function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NotFound, {}, void 0, false, {
      fileName: "app/routes/custom/$company.book.tsx",
      lineNumber: 431,
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
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 496,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M3 9.5h18M8 2.5v4M16 2.5v4" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 497,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/custom/$company.book.tsx",
      lineNumber: 484,
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
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 515,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/custom/$company.book.tsx",
      lineNumber: 504,
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
  onChange,
  compact = false
}) {
  const lookupArray = rawOptions ? rawOptions : options;
  const index = Math.max(0, lookupArray.indexOf(value));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: `bk-seg is-${options.length}${compact ? " is-compact" : ""}`,
      role: "group",
      "aria-label": label,
      style: { "--bk-i": index, "--bk-n": options.length },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-seg-thumb", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 545,
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
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 550,
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
      fileName: "app/routes/custom/$company.book.tsx",
      lineNumber: 539,
      columnNumber: 5
    },
    this
  );
}
function AdvertiserBookPage() {
  var _a, _b;
  const { company, companyName } = useLoaderData();
  const actionData = useActionData();
  const errors = (_a = actionData == null ? void 0 : actionData.fieldErrors) != null ? _a : {};
  const { endRef, reached } = useReachedEndOfFeed();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const startFree = searchParams.get("free") === "1";
  const [step, setStep] = (0, import_react.useState)(startFree ? 2 : 1);
  const [startDate, setStartDate] = (0, import_react.useState)("");
  const [packageId, setPackageId] = (0, import_react.useState)(startFree ? "Single" : "Monthly");
  const [categories, setCategories] = (0, import_react.useState)(
    Array(MAX_PLACEMENTS).fill("Technology")
  );
  const [customize, setCustomize] = (0, import_react.useState)(false);
  const [paymentMethod, setPaymentMethod] = (0, import_react.useState)(
    startFree ? "Free" : "Credit Card"
  );
  const [notes, setNotes] = (0, import_react.useState)("");
  const [stepError, setStepError] = (0, import_react.useState)("");
  const [minDate, setMinDate] = (0, import_react.useState)("");
  const [isEditingCreative, setIsEditingCreative] = (0, import_react.useState)(false);
  const [kitOpen, setKitOpen] = (0, import_react.useState)(false);
  const isSubmitting = navigation.state === "submitting";
  (0, import_react.useEffect)(() => {
    const d = /* @__PURE__ */ new Date();
    const pad = (n) => String(n).padStart(2, "0");
    setMinDate(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
  }, []);
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
    setStep(3);
  };
  const pkg = (_b = PACKAGES.find((p) => p.id === packageId)) != null ? _b : PACKAGES[0];
  const isFree = paymentMethod === "Free";
  const isRecurring = pkg.placements > 1;
  const showWeekly = customize && isRecurring;
  const activeCategories = categories.slice(0, pkg.placements);
  const total = isFree ? 0 : pkg.price;
  const setAllCategories = (next) => setCategories(Array(MAX_PLACEMENTS).fill(next));
  const setWeekCategory = (index, next) => setCategories((prev) => prev.map((c, i) => i === index ? next : c));
  const toggleCustomize = () => {
    if (customize)
      setAllCategories(categories[0]);
    setCustomize(!customize);
  };
  const handlePaymentChange = (next) => {
    setPaymentMethod(next);
    if (next === "Free")
      setPackageId("Single");
  };
  const categoryCounts = CATEGORIES.map(
    (c) => [c, activeCategories.filter((x) => x === c).length]
  ).filter(([, n]) => n > 0);
  const categorySummary = categoryCounts.length === 1 ? categoryCounts[0][0] : categoryCounts.map(([c, n]) => `${c} \xD7${n}`).join(" \xB7 ");
  const summaryRows = [
    {
      label: "Campaign",
      value: `${pkg.label} \u2014 ${isFree ? "Free" : formatPrice(pkg.price)}`
    },
    {
      label: "Placements",
      value: isRecurring ? `${pkg.placements} total - 1 per week` : "1 placement"
    },
    { label: "Category", value: categorySummary },
    {
      label: isRecurring ? "First Placement" : "Target Date",
      value: startDate ? formatDate(startDate) : "Earliest Available"
    },
    ...isRecurring && startDate ? [
      {
        label: "Final Placement",
        value: formatDate(addDays(startDate, (pkg.placements - 1) * 7))
      }
    ] : [],
    { label: "Payment Method", value: paymentMethod },
    { label: "Total", value: isFree ? "Free" : formatPrice(total), total: true }
  ];
  const serverFieldMessages = Object.entries(errors).filter(([key, message]) => key !== "altcha" && message).map(([, message]) => message);
  const submitLabel = isSubmitting ? "Submitting..." : paymentMethod === "Insertion Order" ? "Lock In Insertion Order \u2192" : paymentMethod === "Free" ? "Lock In Free Campaign \u2192" : "Proceed with Credit Card \u2192";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page bk", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "header",
      {
        className: `feed-topbar${reached ? " is-hidden" : ""}`,
        style: { borderLeft: "none", borderRight: "none" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/img/tp.png", alt: "thepoast", decoding: "async" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 702,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 701,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 697,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feed-stream bk-main", children: [
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
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 716,
              columnNumber: 17
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
                      fileName: "app/routes/custom/$company.book.tsx",
                      lineNumber: 732,
                      columnNumber: 43
                    }, this) : n }, void 0, false, {
                      fileName: "app/routes/custom/$company.book.tsx",
                      lineNumber: 731,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-step-label", children: label }, void 0, false, {
                      fileName: "app/routes/custom/$company.book.tsx",
                      lineNumber: 734,
                      columnNumber: 21
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/routes/custom/$company.book.tsx",
                  lineNumber: 725,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 721,
              columnNumber: 17
            },
            this
          )
        ] }, label, true, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 714,
          columnNumber: 15
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 709,
        columnNumber: 9
      }, this),
      step === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "bk-label", style: { marginBottom: "0.5rem" }, children: "Run this ad" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 745,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-embed loaded bk-preview", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          feed_embed_default,
          {
            id: `${company}-ad-storyboard`,
            src: `/custom/${company}/storyboard`,
            title: `${companyName} Target Ad Unit`,
            interactive: true,
            bordered: false,
            fallbackHeight: 350
          },
          void 0,
          false,
          {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 748,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 747,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "button",
            className: "bk-btn bk-btn-primary bk-btn-block",
            onClick: () => setStep(2),
            children: "Looks Great \u2014 Select Send Date \u2192"
          },
          void 0,
          false,
          {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 758,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { textAlign: "center", marginBottom: "1.25rem" }, children: !isEditingCreative ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "button",
            onClick: () => setIsEditingCreative(true),
            className: "back-btn",
            children: "Want to book a different ad?"
          },
          void 0,
          false,
          {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 767,
            columnNumber: 13
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { marginTop: "1rem", padding: "0.75rem", background: "#161616", borderRadius: "12px", border: "1px solid #2a2a2a", fontSize: "0.85rem", color: "#fafafa" }, children: "No problem! Add a link to the ad you want to run in the final step." }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 776,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 765,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 744,
        columnNumber: 9
      }, this),
      step === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-fields", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", id: "bk-pkg-label", children: "Campaign" }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 793,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-pkgs", role: "radiogroup", "aria-labelledby": "bk-pkg-label", children: PACKAGES.map((p) => {
                const active = p.id === packageId;
                const locked = isFree && p.id !== "Single";
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    role: "radio",
                    "aria-checked": active,
                    disabled: locked,
                    className: `bk-pkg${active ? " is-active" : ""}`,
                    onClick: () => setPackageId(p.id),
                    children: [
                      p.recommended && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-pkg-badge", children: "Recommended" }, void 0, false, {
                        fileName: "app/routes/custom/$company.book.tsx",
                        lineNumber: 808,
                        columnNumber: 43
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-pkg-main", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-pkg-name", children: p.label }, void 0, false, {
                          fileName: "app/routes/custom/$company.book.tsx",
                          lineNumber: 810,
                          columnNumber: 27
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-pkg-detail", children: p.detail }, void 0, false, {
                          fileName: "app/routes/custom/$company.book.tsx",
                          lineNumber: 811,
                          columnNumber: 27
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/custom/$company.book.tsx",
                        lineNumber: 809,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-pkg-side", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-pkg-price", children: isFree && p.id === "Single" ? "Free" : formatPrice(p.price) }, void 0, false, {
                          fileName: "app/routes/custom/$company.book.tsx",
                          lineNumber: 814,
                          columnNumber: 27
                        }, this),
                        p.savings > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-pkg-save", children: [
                          "Save ",
                          formatPrice(p.savings)
                        ] }, void 0, true, {
                          fileName: "app/routes/custom/$company.book.tsx",
                          lineNumber: 818,
                          columnNumber: 27
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/custom/$company.book.tsx",
                        lineNumber: 813,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  p.id,
                  true,
                  {
                    fileName: "app/routes/custom/$company.book.tsx",
                    lineNumber: 799,
                    columnNumber: 23
                  },
                  this
                );
              }) }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 794,
                columnNumber: 17
              }, this),
              isFree && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "bk-hint", children: "The free offer covers a single placement." }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 825,
                columnNumber: 28
              }, this),
              errors.package && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-error", role: "alert", children: errors.package }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 827,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 792,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", children: "Select Category" }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 833,
                columnNumber: 17
              }, this),
              !showWeekly ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Segmented,
                {
                  label: "Category",
                  options: CATEGORIES,
                  value: categories[0],
                  onChange: setAllCategories
                },
                void 0,
                false,
                {
                  fileName: "app/routes/custom/$company.book.tsx",
                  lineNumber: 835,
                  columnNumber: 17
                },
                this
              ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-weeks", children: activeCategories.map(
                (c, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-week", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-week-label", children: [
                    "Week ",
                    i + 1,
                    startDate ? ` \xB7 ${formatDate(addDays(startDate, i * 7))}` : ""
                  ] }, void 0, true, {
                    fileName: "app/routes/custom/$company.book.tsx",
                    lineNumber: 845,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    Segmented,
                    {
                      compact: true,
                      label: `Week ${i + 1} category`,
                      options: CATEGORIES,
                      value: c,
                      onChange: (next) => setWeekCategory(i, next)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/custom/$company.book.tsx",
                      lineNumber: 849,
                      columnNumber: 25
                    },
                    this
                  )
                ] }, i, true, {
                  fileName: "app/routes/custom/$company.book.tsx",
                  lineNumber: 844,
                  columnNumber: 19
                }, this)
              ) }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 842,
                columnNumber: 17
              }, this),
              isRecurring && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "back-btn", onClick: toggleCustomize, children: showWeekly ? "Use one category for every week" : "Choose a category for each week" }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 862,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 861,
                columnNumber: 17
              }, this),
              errors.categories && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-error", role: "alert", children: errors.categories }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 870,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 832,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", id: "bk-date-label", children: isRecurring ? "First Placement Date" : "Target Start Date" }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 876,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "bk-date", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `bk-date-text${startDate ? "" : " is-empty"}`, children: startDate ? formatDate(startDate) : "Select launch date" }, void 0, false, {
                  fileName: "app/routes/custom/$company.book.tsx",
                  lineNumber: 881,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarIcon, {}, void 0, false, {
                  fileName: "app/routes/custom/$company.book.tsx",
                  lineNumber: 884,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "input",
                  {
                    type: "date",
                    className: "bk-date-input",
                    "aria-labelledby": "bk-date-label",
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
                    fileName: "app/routes/custom/$company.book.tsx",
                    lineNumber: 885,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 880,
                columnNumber: 17
              }, this),
              isRecurring && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "bk-hint", children: "Your first placement runs on this date, then weekly after." }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 900,
                columnNumber: 17
              }, this),
              (stepError || errors.startDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-error", role: "alert", children: stepError || errors.startDate }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 906,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 875,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", children: "Payment Method" }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 914,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Segmented,
                {
                  label: "Payment method",
                  options: PAYMENT_METHODS,
                  value: paymentMethod,
                  onChange: handlePaymentChange
                },
                void 0,
                false,
                {
                  fileName: "app/routes/custom/$company.book.tsx",
                  lineNumber: 915,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 913,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 789,
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
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 926,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                type: "button",
                className: "bk-btn bk-btn-primary",
                onClick: goToReview,
                children: "Review Order \u2192"
              },
              void 0,
              false,
              {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 934,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 925,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 787,
          columnNumber: 11
        }, this),
        paymentMethod === "Free" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bk-terms", "aria-labelledby": "bk-terms-title", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "bk-label", id: "bk-terms-title", children: "Run Your First Ad Risk-Free \xB7 Terms" }, void 0, false, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 946,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "bk-terms-list", children: FREE_TERMS.map(
            (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-terms-item", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: item.q }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 952,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: item.a }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 953,
                columnNumber: 21
              }, this)
            ] }, item.q, true, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 951,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 949,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "bk-terms-foot", children: [
            "Full details in our ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 958,
              columnNumber: 37
            }, this),
            "."
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 957,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 945,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 786,
        columnNumber: 9
      }, this),
      step === 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "bk-card", children: [
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-alert", role: "alert", children: [
          actionData.error,
          serverFieldMessages.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: serverFieldMessages.map(
            (message) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: message }, message, false, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 974,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 972,
            columnNumber: 13
          }, this),
          actionData.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: actionData.debug }, void 0, false, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 978,
            columnNumber: 38
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 969,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "company", value: companyName }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 982,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "startDate", value: startDate }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 983,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "package", value: packageId }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 984,
          columnNumber: 13
        }, this),
        activeCategories.map(
          (c, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "categories", value: c }, i, false, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 986,
            columnNumber: 11
          }, this)
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "paymentMethod", value: paymentMethod }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 988,
          columnNumber: 13
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
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 989,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { marginBottom: "1.5rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", style: { marginBottom: "0.5rem", textAlign: "center" }, children: [
            "We'll run ",
            companyName,
            "'s Ad"
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 1001,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-embed loaded bk-preview", style: { maxHeight: "220px", overflow: "hidden", marginBottom: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            feed_embed_default,
            {
              id: `${company}-ad-thumbnail`,
              src: `/custom/${company}/storyboard`,
              title: `${companyName} Target Ad Unit`,
              interactive: false,
              bordered: false,
              fallbackHeight: 220
            },
            void 0,
            false,
            {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 1003,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 1002,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 1e3,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "bk-summary", children: summaryRows.map(
          (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `bk-row${row.total ? " is-total" : ""}`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: row.label }, void 0, false, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 1017,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: row.value }, void 0, false, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 1018,
              columnNumber: 19
            }, this)
          ] }, row.label, true, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 1016,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 1014,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", style: { marginBottom: "1.5rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "bk-label", htmlFor: "bk-notes", children: "Additional Notes (Optional)" }, void 0, false, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 1024,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "textarea",
            {
              id: "bk-notes",
              name: "notes",
              className: "bk-textarea",
              rows: 3,
              placeholder: "Fix the ad copy, drop a UTM tracking link, or link a new ad",
              value: notes,
              onChange: (e) => setNotes(e.target.value)
            },
            void 0,
            false,
            {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 1027,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 1023,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-altcha", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 1039,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 1038,
          columnNumber: 13
        }, this),
        errors.altcha && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-error", role: "alert", style: { marginBottom: "1.25rem" }, children: errors.altcha }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 1042,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-actions", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "button",
              className: "bk-btn bk-btn-secondary",
              onClick: () => setStep(2),
              children: "\u2190 Back"
            },
            void 0,
            false,
            {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 1048,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "submit",
              className: "bk-btn bk-btn-primary",
              disabled: isSubmitting,
              children: submitLabel
            },
            void 0,
            false,
            {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 1056,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 1047,
          columnNumber: 13
        }, this),
        isFree && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "bk-note", style: { margin: "0 0 1.25rem" }, children: "Free applies to your first ad only. Later ads are billed at standard rates." }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 1066,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 967,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 1074,
        columnNumber: 9
      }, this),
      step === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/${company}`, className: "back-btn", style: { marginTop: "0" }, children: "\u2190 Back to Sample" }, void 0, false, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 1077,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 1076,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/custom/$company.book.tsx",
      lineNumber: 706,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "feed-footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-footer-links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", children: "about" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 1086,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/archive", children: "archive" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 1087,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/submit-post", children: "submit post" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 1088,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 1089,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 1090,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/book", children: "advertise" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 1091,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/manager", children: "ads manager" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 1092,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 1085,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "feed-copyright", children: "thepoast \xA9 2026" }, void 0, false, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 1094,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/custom/$company.book.tsx",
      lineNumber: 1084,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      MediaKit,
      {
        open: kitOpen,
        onClose: () => setKitOpen(false),
        ctaLabel: "Continue booking",
        onCta: () => setKitOpen(false)
      },
      void 0,
      false,
      {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 1097,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/custom/$company.book.tsx",
    lineNumber: 695,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  AdvertiserBookPage as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/custom/$company.book-IIQAGD6I.js.map
