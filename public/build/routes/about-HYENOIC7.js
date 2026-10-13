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

// app/routes/about.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "About / thepoast",
    description: "Learn more about thepoast."
  };
};
var AUDIENCE = [
  "Founders",
  "Executives",
  "Builders"
];
var PRINCIPLES = [
  {
    title: "Read it for free",
    body: "Read it every day at thepoast.com"
  },
  {
    title: "Subscribe for free",
    body: "Get it in your inbox daily"
  },
  {
    title: "Submit a post",
    body: "Wanna submit a post? Just send it our way"
  }
];
var BANNER_TRIGGER = 0.75;
function useReachedEndOfPage() {
  const endRef = (0, import_react.useRef)(null);
  const [reached, setReached] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const element = endRef.current;
    if (!element)
      return;
    let frame = 0;
    const check = () => {
      frame = 0;
      const top = element.getBoundingClientRect().top;
      setReached(
        window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER
      );
    };
    const schedule = () => {
      if (!frame) {
        frame = requestAnimationFrame(check);
      }
    };
    window.addEventListener("scroll", schedule, {
      passive: true
    });
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
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);
  return {
    endRef,
    reached
  };
}
function About() {
  const { endRef, reached } = useReachedEndOfPage();
  const [forced, setForced] = (0, import_react.useState)(false);
  const [expandBanner, setExpandBanner] = (0, import_react.useState)(false);
  const footerRef = (0, import_react.useRef)(null);
  const previousReached = (0, import_react.useRef)(false);
  const bannerVisible = reached || forced;
  (0, import_react.useEffect)(() => {
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
    (_a = footerRef.current) == null ? void 0 : _a.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page ad-booking-page about-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      FeedTopbar,
      {
        hidden: reached,
        onSubscribe: handleTopbarSubscribe
      },
      void 0,
      false,
      {
        fileName: "app/routes/about.tsx",
        lineNumber: 140,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "ad-booking-card about-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-badge", children: "About Us" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "section",
        {
          className: "about-section",
          "aria-labelledby": "about-what",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "h2",
              {
                className: "about-section-title",
                id: "about-what",
                children: "What's thepoast?"
              },
              void 0,
              false,
              {
                fileName: "app/routes/about.tsx",
                lineNumber: 156,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "about-text", children: "We're a daily feed of snarky comments and posts from across the business world." }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 163,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 152,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "section",
        {
          className: "about-section",
          "aria-labelledby": "about-who",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "h2",
              {
                className: "about-section-title",
                id: "about-who",
                children: "Who reads it?"
              },
              void 0,
              false,
              {
                fileName: "app/routes/about.tsx",
                lineNumber: 173,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "about-text", children: "We're frequently read by people who like to get things done." }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 180,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "about-chips", children: AUDIENCE.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "span",
              {
                className: "about-chip",
                children: group
              },
              group,
              false,
              {
                fileName: "app/routes/about.tsx",
                lineNumber: 187,
                columnNumber: 15
              },
              this
            )) }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 185,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 169,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "section",
        {
          className: "about-section",
          "aria-labelledby": "about-expect",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "h2",
              {
                className: "about-section-title",
                id: "about-expect",
                children: "What to expect"
              },
              void 0,
              false,
              {
                fileName: "app/routes/about.tsx",
                lineNumber: 201,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "about-grid", children: PRINCIPLES.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "article",
              {
                className: "about-item",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: item.title }, void 0, false, {
                    fileName: "app/routes/about.tsx",
                    lineNumber: 214,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: item.body }, void 0, false, {
                    fileName: "app/routes/about.tsx",
                    lineNumber: 215,
                    columnNumber: 17
                  }, this)
                ]
              },
              item.title,
              true,
              {
                fileName: "app/routes/about.tsx",
                lineNumber: 210,
                columnNumber: 15
              },
              this
            )) }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 208,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 197,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "about-cta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/",
            className: "about-btn",
            children: "Return to thepoast"
          },
          void 0,
          false,
          {
            fileName: "app/routes/about.tsx",
            lineNumber: 222,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/book",
            className: "back-btn",
            children: "Advertise with us"
          },
          void 0,
          false,
          {
            fileName: "app/routes/about.tsx",
            lineNumber: 229,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 221,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          ref: endRef,
          className: "feed-end-marker",
          "aria-hidden": "true"
        },
        void 0,
        false,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 237,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: footerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedFooter, { covered: bannerVisible }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 245,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 244,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      FeedSubscribeBanner,
      {
        visible: bannerVisible,
        forceExpanded: expandBanner
      },
      void 0,
      false,
      {
        fileName: "app/routes/about.tsx",
        lineNumber: 248,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}
export {
  About as default,
  meta
};
//# sourceMappingURL=/build/routes/about-HYENOIC7.js.map
