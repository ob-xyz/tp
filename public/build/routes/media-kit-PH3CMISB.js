import {
  MEDIA_KIT
} from "/build/_shared/chunk-ZLL73JES.js";
import {
  Link,
  PrefetchPageLinks,
  require_jsx_dev_runtime,
  require_react,
  useNavigate
} from "/build/_shared/chunk-FZOAUUQ7.js";
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
  { value: "70k+", label: "Weekly readers" },
  { value: "36%", label: "Average open rate" },
  { value: "30k+", label: "Monthly web visitors" }
];
var AUDIENCE = ["Founders", "Executives", "Builders", "Investors", "Marketers"];
var FORMATS = [
  {
    title: "Repurpose campaigns from social media",
    body: "Already running ads? Repurpose one of them in thepoast."
  },
  {
    title: "Link to your landing page",
    body: "Avoid in-app browsers and get every link click landing on your page."
  },
  {
    title: "Track and measure your ads",
    body: "Track and measure ads using your own UTM link, or we'll give you one."
  }
];
var STEPS = [
  {
    title: "Send a booking request",
    body: "Tell us about your company, start date, budget, and any ads you're already running."
  },
  {
    title: "We reply within 48 hours",
    body: "You'll get availability, options, and next steps by email."
  },
  {
    title: "Approve and launch",
    body: "Once creative is approved, your campaign goes live on your start date."
  }
];
var PARTNER_PATH = "/partner";
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
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page ad-booking-page mk-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrefetchPageLinks, { page: PARTNER_PATH }, void 0, false, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: `feed-topbar${reached ? " is-hidden" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/img/tp.png", alt: "thepoast", decoding: "async" }, void 0, false, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "feed-subscribe", to: PARTNER_PATH, prefetch: "intent", children: "Get Started" }, void 0, false, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "ad-booking-card mk-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-badge", children: "Media Kit" }, void 0, false, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-stats-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mk-section-title", id: "mk-stats-title", children: "By the numbers" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-stats", children: STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-stat", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-stat-value", children: stat.value }, void 0, false, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 128,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-stat-label", children: stat.label }, void 0, false, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 129,
            columnNumber: 17
          }, this)
        ] }, stat.label, true, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 127,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-audience-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mk-section-title", id: "mk-audience-title", children: "Who reads us" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-chips", children: AUDIENCE.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-chip", children: group }, group, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 141,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-formats-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mk-section-title", id: "mk-formats-title", children: "Advertise with us" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 149,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-formats", children: FORMATS.map((format) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "mk-format", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: format.title }, void 0, false, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 155,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: format.body }, void 0, false, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 156,
            columnNumber: 17
          }, this)
        ] }, format.title, true, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 154,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 152,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-pricing-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mk-section-title", id: "mk-pricing-title", children: "Pricing" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-tiers", children: MEDIA_KIT.placements.map((placement) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "mk-tier", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mk-tier-name", children: placement.name }, void 0, false, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 169,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mk-tier-note", children: placement.note }, void 0, false, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 170,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-tier-cost", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-tier-price", children: placement.price }, void 0, false, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 172,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mk-tier-unit", children: MEDIA_KIT.priceUnit }, void 0, false, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 173,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 171,
            columnNumber: 17
          }, this)
        ] }, placement.name, true, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 166,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 162,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-steps-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mk-section-title", id: "mk-steps-title", children: "How it works" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 181,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-success-steps", children: STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "step-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "step-num", children: i + 1 }, void 0, false, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 187,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "step-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: step.title }, void 0, false, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 189,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: step.body }, void 0, false, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 190,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 188,
            columnNumber: 17
          }, this)
        ] }, step.title, true, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 186,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 184,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: `feed-footer${reached ? " is-covered" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-footer-links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", children: "about" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/archive", children: "archive" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 203,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/submit-post", children: "submit post" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 204,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 205,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 206,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/book", children: "advertise" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 207,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/manager", children: "ads manager" }, void 0, false, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 208,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "feed-copyright", children: "thepoast \xA9 2026" }, void 0, false, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 200,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "aside",
      {
        className: `feed-banner${reached ? " is-visible" : ""}`,
        "aria-label": "Get Started",
        "aria-hidden": !reached,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-banner-inner", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-banner-title", children: "Better business performance, fueled by AI" }, void 0, false, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 219,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "button",
              className: "feed-banner-btn",
              tabIndex: reached ? 0 : -1,
              onClick: () => navigate(PARTNER_PATH),
              children: "Get Started"
            },
            void 0,
            false,
            {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 223,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 218,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 213,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/media-kit.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
}
export {
  MediaKit as default,
  meta
};
//# sourceMappingURL=/build/routes/media-kit-PH3CMISB.js.map
