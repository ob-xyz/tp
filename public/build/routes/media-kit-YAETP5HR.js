import {
  FeedSubscribeBanner
} from "/build/_shared/chunk-CYAGMEZN.js";
import {
  FeedFooter,
  FeedTopbar
} from "/build/_shared/chunk-DR5IGSIV.js";
import "/build/_shared/chunk-7DKTNVJG.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-OZ7KCFHT.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/media-kit.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Media kit / thepoast",
    description: "Find out who reads thepoast."
  };
};
var STATS = [
  { value: "27k+", label: "Email subscribers" },
  { value: "10k+", label: "Daily readers" },
  { value: "30k+", label: "Monthly web visitors" },
  { value: "36%", label: "Average open rate" }
];
var AUDIENCE = ["Founders", "Executives", "Builders", "Investors", "Marketers"];
var FORMATS = [
  {
    title: "Full creative control",
    body: "It's your ad, run your way. Use images, videos, or plain-jane text to find your next customer."
  },
  {
    title: "Link clicks that land",
    body: "Every ad click lands on your landing page, not some pesky in-app browser."
  },
  {
    title: "Use existing campaigns",
    body: "Already have a proven ad that works? Run it in thepoast. Measure its performance."
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
var BANNER_TRIGGER = 0.75;
function useReachedEndOfPage() {
  const endRef = (0, import_react2.useRef)(null);
  const [reached, setReached] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    const element = endRef.current;
    if (!element)
      return;
    let frame = 0;
    const check = () => {
      frame = 0;
      const top = element.getBoundingClientRect().top;
      setReached(window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER);
    };
    const schedule = () => {
      if (!frame)
        frame = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined" && element.parentElement) {
      resizeObserver = new ResizeObserver(schedule);
      resizeObserver.observe(element.parentElement);
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
function MediaKit() {
  const { endRef, reached } = useReachedEndOfPage();
  const [forced, setForced] = (0, import_react2.useState)(false);
  const [expandBanner, setExpandBanner] = (0, import_react2.useState)(false);
  const footerRef = (0, import_react2.useRef)(null);
  const previousReached = (0, import_react2.useRef)(false);
  const bannerVisible = reached || forced;
  (0, import_react2.useEffect)(() => {
    if (previousReached.current && !reached) {
      setForced(false);
      setExpandBanner(false);
    }
    previousReached.current = reached;
  }, [reached]);
  const handleTopbarSubscribe = (event) => {
    var _a;
    event.preventDefault();
    setForced(true);
    setExpandBanner(true);
    (_a = footerRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page ad-booking-page mk-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedTopbar, { hidden: reached, onSubscribe: handleTopbarSubscribe }, void 0, false, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "ad-booking-card mk-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-badge", children: "Media Kit" }, void 0, false, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 128,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-stats-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mk-section-title", id: "mk-stats-title", children: "By the numbers" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-stats", children: STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-stat", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-stat-value", children: stat.value }, void 0, false, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 138,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-stat-label", children: stat.label }, void 0, false, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 139,
            columnNumber: 17
          }, this)
        ] }, stat.label, true, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 137,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 135,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-audience-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mk-section-title", id: "mk-audience-title", children: "Who reads us" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-chips", children: AUDIENCE.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-chip", children: group }, group, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 151,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 149,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-formats-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mk-section-title", id: "mk-formats-title", children: "Why advertise with us?" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-formats", children: FORMATS.map((format) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "mk-format", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: format.title }, void 0, false, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 165,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: format.body }, void 0, false, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, this)
        ] }, format.title, true, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 164,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-steps-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mk-section-title", id: "mk-steps-title", children: "How it works" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 173,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-success-steps", children: STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "step-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "step-num", children: i + 1 }, void 0, false, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 179,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "step-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: step.title }, void 0, false, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 181,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: step.body }, void 0, false, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 182,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 180,
            columnNumber: 17
          }, this)
        ] }, step.title, true, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 178,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 176,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 172,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-cta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/book", className: "mk-btn", children: "Advertise with us" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", className: "back-btn", children: "About thepoast" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 193,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 198,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: footerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedFooter, { covered: bannerVisible }, void 0, false, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 202,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 201,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedSubscribeBanner, { visible: bannerVisible, forceExpanded: expandBanner }, void 0, false, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 205,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/media-kit.tsx",
    lineNumber: 123,
    columnNumber: 5
  }, this);
}
export {
  MediaKit as default,
  meta
};
//# sourceMappingURL=/build/routes/media-kit-YAETP5HR.js.map
