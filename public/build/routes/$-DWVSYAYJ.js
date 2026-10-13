import {
  feed_embed_default
} from "/build/_shared/chunk-BMSY6SPQ.js";
import {
  FeedSubscribeBanner
} from "/build/_shared/chunk-CYAGMEZN.js";
import {
  FeedFooter,
  FeedTopbar
} from "/build/_shared/chunk-DR5IGSIV.js";
import "/build/_shared/chunk-7DKTNVJG.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-OZ7KCFHT.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/$.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  title: "404 / thepoast",
  robots: "noindex"
});
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
function NotFound() {
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
    (_a = footerRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      FeedTopbar,
      {
        hidden: reached,
        onSubscribe: handleTopbarSubscribe,
        leftContent: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-status", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "status-dot" }, void 0, false, {
            fileName: "app/routes/$.tsx",
            lineNumber: 109,
            columnNumber: 13
          }, this),
          "404 Error"
        ] }, void 0, true, {
          fileName: "app/routes/$.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/$.tsx",
        lineNumber: 104,
        columnNumber: 7
      },
      this
    ),
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
          fileName: "app/routes/$.tsx",
          lineNumber: 117,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/$.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/$.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/$.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: footerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedFooter, { covered: bannerVisible }, void 0, false, {
      fileName: "app/routes/$.tsx",
      lineNumber: 130,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/$.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedSubscribeBanner, { visible: bannerVisible, forceExpanded: expandBanner }, void 0, false, {
      fileName: "app/routes/$.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}
export {
  NotFound as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/$-DWVSYAYJ.js.map
