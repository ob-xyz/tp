import {
  MediaKit
} from "/build/_shared/chunk-POSZLO5W.js";
import {
  custom_default
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
var PLACEMENTS_PAID = ["Top Feed \u2014 $500", "Mid Feed \u2014 $300"];
var PLACEMENTS_FREE = ["Top Feed", "Mid Feed"];
var RAW_PLACEMENTS = ["Top Feed", "Mid Feed"];
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
    a: "One standard paid ad for free. Just choose if you want to place it at the top or middle of our feed."
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
      lineNumber: 352,
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
          lineNumber: 417,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M3 9.5h18M8 2.5v4M16 2.5v4" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 418,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/custom/$company.book.tsx",
      lineNumber: 405,
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
        lineNumber: 436,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/custom/$company.book.tsx",
      lineNumber: 425,
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
  const lookupArray = rawOptions ? rawOptions : options;
  const index = Math.max(0, lookupArray.indexOf(value));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: `bk-seg is-${options.length}`,
      role: "group",
      "aria-label": label,
      style: { "--bk-i": index, "--bk-n": options.length },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-seg-thumb", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 464,
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
              lineNumber: 469,
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
      lineNumber: 458,
      columnNumber: 5
    },
    this
  );
}
function AdvertiserBookPage() {
  var _a;
  const { company, companyName } = useLoaderData();
  const actionData = useActionData();
  const errors = (_a = actionData == null ? void 0 : actionData.fieldErrors) != null ? _a : {};
  const { endRef, reached } = useReachedEndOfFeed();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const startFree = searchParams.get("free") === "1";
  const [step, setStep] = (0, import_react.useState)(startFree ? 2 : 1);
  const [startDate, setStartDate] = (0, import_react.useState)("");
  const [placement, setPlacement] = (0, import_react.useState)("Top Feed");
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
  const summaryRows = [
    { label: "Target Date", value: startDate ? formatDate(startDate) : "Earliest Available" },
    { label: "Placement", value: placement },
    { label: "Payment Method", value: paymentMethod }
  ];
  const serverFieldMessages = Object.entries(errors).filter(([key, message]) => key !== "altcha" && message).map(([, message]) => message);
  const submitLabel = isSubmitting ? "Submitting..." : paymentMethod === "Insertion Order" ? "Lock In Insertion Order \u2192" : paymentMethod === "Free" ? "Lock In Free Campaign \u2192" : "Proceed with Credit Card \u2192";
  const currentPlacements = paymentMethod === "Free" ? PLACEMENTS_FREE : PLACEMENTS_PAID;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page bk", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "header",
      {
        className: `feed-topbar${reached ? " is-hidden" : ""}`,
        style: { borderLeft: "none", borderRight: "none" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/img/tp.png", alt: "thepoast", decoding: "async" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 569,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 568,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 564,
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
              lineNumber: 583,
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
                      lineNumber: 599,
                      columnNumber: 43
                    }, this) : n }, void 0, false, {
                      fileName: "app/routes/custom/$company.book.tsx",
                      lineNumber: 598,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-step-label", children: label }, void 0, false, {
                      fileName: "app/routes/custom/$company.book.tsx",
                      lineNumber: 601,
                      columnNumber: 21
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/routes/custom/$company.book.tsx",
                  lineNumber: 592,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 588,
              columnNumber: 17
            },
            this
          )
        ] }, label, true, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 581,
          columnNumber: 15
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 576,
        columnNumber: 9
      }, this),
      step === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "bk-label", style: { marginBottom: "0.5rem" }, children: "This is how your ad will look to 10k+ people" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 612,
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
            lineNumber: 615,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 614,
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
            lineNumber: 625,
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
            lineNumber: 634,
            columnNumber: 13
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { marginTop: "1rem", padding: "0.75rem", background: "#161616", borderRadius: "12px", border: "1px solid #2a2a2a", fontSize: "0.85rem", color: "#fafafa" }, children: "No problem! Add a link to the ad you want to run in the final step." }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 643,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 632,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 611,
        columnNumber: 9
      }, this),
      step === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-fields", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", id: "bk-date-label", children: "Target Start Date" }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 660,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "bk-date", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `bk-date-text${startDate ? "" : " is-empty"}`, children: startDate ? formatDate(startDate) : "Select launch date" }, void 0, false, {
                  fileName: "app/routes/custom/$company.book.tsx",
                  lineNumber: 663,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarIcon, {}, void 0, false, {
                  fileName: "app/routes/custom/$company.book.tsx",
                  lineNumber: 666,
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
                    lineNumber: 667,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 662,
                columnNumber: 17
              }, this),
              (stepError || errors.startDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-error", role: "alert", children: stepError || errors.startDate }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 682,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 659,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", children: "Select Placement" }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 690,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Segmented,
                {
                  label: "Placement",
                  options: currentPlacements,
                  rawOptions: RAW_PLACEMENTS,
                  value: placement,
                  onChange: setPlacement
                },
                void 0,
                false,
                {
                  fileName: "app/routes/custom/$company.book.tsx",
                  lineNumber: 691,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 689,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", children: "Payment Method" }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 702,
                columnNumber: 17
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
                  fileName: "app/routes/custom/$company.book.tsx",
                  lineNumber: 703,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 701,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 656,
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
                lineNumber: 714,
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
                lineNumber: 722,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 713,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 654,
          columnNumber: 11
        }, this),
        paymentMethod === "Free" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bk-terms", "aria-labelledby": "bk-terms-title", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "bk-label", id: "bk-terms-title", children: "Run Your First Ad Risk-Free \xB7 Terms" }, void 0, false, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 734,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "bk-terms-list", children: FREE_TERMS.map(
            (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-terms-item", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: item.q }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 740,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: item.a }, void 0, false, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 741,
                columnNumber: 21
              }, this)
            ] }, item.q, true, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 739,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 737,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "bk-terms-foot", children: [
            "Full details in our ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 746,
              columnNumber: 37
            }, this),
            "."
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 745,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 733,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 653,
        columnNumber: 9
      }, this),
      step === 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "bk-card", children: [
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-alert", role: "alert", children: [
          actionData.error,
          serverFieldMessages.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: serverFieldMessages.map(
            (message) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: message }, message, false, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 762,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 760,
            columnNumber: 13
          }, this),
          actionData.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: actionData.debug }, void 0, false, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 766,
            columnNumber: 38
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 757,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "company", value: companyName }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 770,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "startDate", value: startDate }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 771,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "placement", value: placement }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 772,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "paymentMethod", value: paymentMethod }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 773,
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
            lineNumber: 774,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { marginBottom: "1.5rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-label", style: { marginBottom: "0.5rem", textAlign: "center" }, children: [
            companyName,
            " Ad"
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 786,
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
              lineNumber: 788,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 787,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 785,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "bk-summary", children: summaryRows.map(
          (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: row.label }, void 0, false, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 802,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: row.value }, void 0, false, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 803,
              columnNumber: 19
            }, this)
          ] }, row.label, true, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 801,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 799,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-group", style: { marginBottom: "1.5rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "bk-label", htmlFor: "bk-notes", children: "Additional Notes (Optional)" }, void 0, false, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 809,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "textarea",
            {
              id: "bk-notes",
              name: "notes",
              className: "bk-textarea",
              rows: 3,
              placeholder: "Special instructions or tracking links...",
              value: notes,
              onChange: (e) => setNotes(e.target.value)
            },
            void 0,
            false,
            {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 812,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 808,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bk-altcha", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 824,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 823,
          columnNumber: 13
        }, this),
        errors.altcha && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bk-error", role: "alert", style: { marginBottom: "1.25rem" }, children: errors.altcha }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 827,
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
              lineNumber: 833,
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
              lineNumber: 841,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 832,
          columnNumber: 13
        }, this),
        paymentMethod === "Free" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "bk-note", style: { margin: "0 0 1.25rem" }, children: "Free applies to your first ad only. Later ads are billed at standard rates." }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 851,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 755,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 859,
        columnNumber: 9
      }, this),
      step === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/${company}`, className: "back-btn", style: { marginTop: "0" }, children: "\u2190 Back to Sample" }, void 0, false, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 862,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 861,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/custom/$company.book.tsx",
      lineNumber: 573,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "feed-footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-footer-links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", children: "about" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 871,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/archive", children: "archive" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 872,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/submit-post", children: "submit post" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 873,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 874,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 875,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/book", children: "advertise" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 876,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/manager", children: "ads manager" }, void 0, false, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 877,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 870,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "feed-copyright", children: "thepoast \xA9 2026" }, void 0, false, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 879,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/custom/$company.book.tsx",
      lineNumber: 869,
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
        lineNumber: 882,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/custom/$company.book.tsx",
    lineNumber: 562,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  AdvertiserBookPage as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/custom/$company.book-PU6BM4RW.js.map
