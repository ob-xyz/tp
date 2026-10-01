import {
  book_default
} from "/build/_shared/chunk-BYU2QCAV.js";
import {
  subscribe_default
} from "/build/_shared/chunk-OARJLLWB.js";
import {
  Link,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-77KVK7YT.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/style/scss/media-kit.css
var media_kit_default = "/build/_assets/media-kit-6BBNJJ5T.css";

// app/routes/media-kit.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: subscribe_default },
  { rel: "stylesheet", href: book_default },
  { rel: "stylesheet", href: media_kit_default }
];
var meta = () => {
  return {
    title: "Media Kit : The Poast",
    description: "Who reads The Poast and how to reach them."
  };
};
var STATS = [
  { value: "25,500", label: "Subscribers" },
  { value: "36.6%", label: "Average open rate" },
  { value: "2.2%", label: "Average click rate" },
  { value: "30", label: "Issues per month" }
];
var AUDIENCE = ["Founders", "Executives", "Builders", "Investors", "Marketers"];
var FORMATS = [
  {
    title: "Sponsored placement",
    body: "Your message placed inside the issue, written to fit the format readers already know."
  },
  {
    title: "Existing social ads",
    body: "Bring an ad that's already performing on social and we'll adapt it for our audience."
  },
  {
    title: "Custom campaign",
    body: "Multi-issue or multi-channel plans built around your launch or goal."
  }
];
var STEPS = [
  {
    title: "Send a booking request",
    body: "Tell us about your company, start date, budget, and any ads you're already running."
  },
  {
    title: "We reply within 24 hours",
    body: "You'll get availability, options, and next steps by email."
  },
  {
    title: "Approve and launch",
    body: "Once creative is approved, your campaign goes live on your start date."
  }
];
function MediaKit() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page ad-booking-page mk-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "feed-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: "/img/tp.png",
          alt: "The Poast",
          loading: "eager",
          decoding: "async"
        },
        void 0,
        false,
        {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 70,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribe", className: "feed-subscribe", children: "Subscribe" }, void 0, false, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "ad-booking-card mk-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-booking-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "ad-booking-title", children: "The Poast" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ad-booking-sub", children: "Frequently read by people who like to get things done" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-stats-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mk-section-title", id: "mk-stats-title", children: "By the numbers" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-stats", children: STATS.map(
          (stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-stat", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-stat-value", children: stat.value }, void 0, false, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 99,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-stat-label", children: stat.label }, void 0, false, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 100,
              columnNumber: 17
            }, this)
          ] }, stat.label, true, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 98,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-audience-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mk-section-title", id: "mk-audience-title", children: "Who reads us" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-chips", children: AUDIENCE.map(
          (group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-chip", children: group }, group, false, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 113,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-formats-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mk-section-title", id: "mk-formats-title", children: "Ways to advertise" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-formats", children: FORMATS.map(
          (format) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "mk-format", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: format.title }, void 0, false, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 128,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: format.body }, void 0, false, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 129,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-format-note", children: format.note }, void 0, false, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 130,
              columnNumber: 17
            }, this)
          ] }, format.title, true, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 127,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-steps-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mk-section-title", id: "mk-steps-title", children: "How it works" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 138,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-success-steps", children: STEPS.map(
          (step, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "step-item", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "step-num", children: i + 1 }, void 0, false, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 144,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "step-content", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: step.title }, void 0, false, {
                fileName: "app/routes/media-kit.tsx",
                lineNumber: 146,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: step.body }, void 0, false, {
                fileName: "app/routes/media-kit.tsx",
                lineNumber: 147,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 145,
              columnNumber: 17
            }, this)
          ] }, step.title, true, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 143,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-cta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/book", className: "mk-btn", children: "Advertise with us" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 156,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", className: "back-btn", children: "About The Poast" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/media-kit.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}
export {
  MediaKit as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/media-kit-JLKLOBAQ.js.map
