import {
  feed_embed_default
} from "/build/_shared/chunk-BMSY6SPQ.js";
import {
  AltchaWrapper
} from "/build/_shared/chunk-7DKTNVJG.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-OZ7KCFHT.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/index.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "thepoast"
  };
};
var links = () => [
  {
    rel: "preconnect",
    href: "https://img.thepoast.com"
  },
  {
    rel: "dns-prefetch",
    href: "https://img.thepoast.com"
  }
];
var BANNER_TRIGGER = 0.725;
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
      setReached(
        window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER
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
function Index() {
  const { endRef, reached } = useReachedEndOfFeed();
  const [expanded, setExpanded] = (0, import_react.useState)(false);
  const [forced, setForced] = (0, import_react.useState)(false);
  const footerRef = (0, import_react.useRef)(null);
  const emailRef = (0, import_react.useRef)(null);
  const prevReached = (0, import_react.useRef)(false);
  const bannerVisible = reached || forced;
  (0, import_react.useEffect)(() => {
    if (prevReached.current && !reached)
      setForced(false);
    prevReached.current = reached;
  }, [reached]);
  (0, import_react.useEffect)(() => {
    var _a;
    if (expanded)
      (_a = emailRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
  }, [expanded]);
  const handleTopbarSubscribe = (e) => {
    var _a;
    e.preventDefault();
    setExpanded(true);
    setForced(true);
    (_a = footerRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: `feed-topbar${reached ? " is-hidden" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: "/img/tp.png",
          alt: "thepoast",
          decoding: "async"
        },
        void 0,
        false,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 131,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "a",
        {
          className: "feed-subscribe",
          onClick: handleTopbarSubscribe,
          children: "Subscribe"
        },
        void 0,
        false,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 138,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feed-stream", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-embed loaded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        feed_embed_default,
        {
          id: "live",
          src: "/live",
          title: "Today's Edition",
          interactive: true,
          fallbackHeight: 900
        },
        void 0,
        false,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 148,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 146,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "footer",
      {
        ref: footerRef,
        className: `feed-footer${bannerVisible ? " is-covered" : ""}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-footer-links", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", children: "about" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 167,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/archive", children: "archive" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 168,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/partner", children: "partner" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 169,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 170,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 171,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/book", children: "advertise" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 172,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/submit-post", children: "submit post" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 173,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 166,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "feed-copyright", children: "thepoast \xA9 2026" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 175,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 162,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "aside",
      {
        className: `feed-banner${bannerVisible ? " is-visible" : ""}`,
        "aria-label": "Subscribe to thepoast",
        "aria-hidden": !bannerVisible,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-banner-inner", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-banner-title", children: "Get The Poast for free" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 185,
            columnNumber: 11
          }, this),
          !expanded ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "button",
              className: "feed-banner-btn",
              onClick: () => setExpanded(true),
              children: "Subscribe"
            },
            void 0,
            false,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 188,
              columnNumber: 13
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "form",
            {
              method: "post",
              action: "https://app.thepoast.com/subscription/form",
              className: "feed-banner-form",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-input-bar", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "input",
                    {
                      className: "feed-input email-input",
                      type: "email",
                      name: "email",
                      required: true,
                      ref: emailRef,
                      placeholder: "Email Address *"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 202,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "feed-submit", type: "submit", children: "Subscribe" }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 211,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 201,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-verify-row", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 220,
                    columnNumber: 19
                  }, this) }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 219,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-legal", children: [
                    "By submitting, you agree to our",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 225,
                      columnNumber: 19
                    }, this),
                    " &",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 226,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 223,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 218,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "input",
                  {
                    id: "6d48f",
                    type: "hidden",
                    name: "l",
                    value: "6d48fffe-7d37-4c14-b317-3e4cda33a647"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 230,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 237,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 196,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 184,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 179,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 127,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/index-ZYR6LYCH.js.map
