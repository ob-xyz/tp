import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  feed_embed_default
} from "/build/_shared/chunk-YXZUJTC2.js";
import {
  FeedSubscribeBanner
} from "/build/_shared/chunk-GHQHS7KD.js";
import "/build/_shared/chunk-YYFE5CLS.js";
import {
  FeedFooter,
  FeedTopbar
} from "/build/_shared/chunk-3G6G2NLL.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react,
  useCatch,
  useLoaderData
} from "/build/_shared/chunk-FZOAUUQ7.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/archive/feeds.$id.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Issue / thepoast"
  };
};
var links = () => [
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
];
var BANNER_TRIGGER = 0.85;
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
function ArchiveIssue() {
  const { id } = useLoaderData();
  const { endRef, reached } = useReachedEndOfFeed();
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
        onSubscribe: handleTopbarSubscribe
      },
      void 0,
      false,
      {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 127,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feed-stream", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-embed loaded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        feed_embed_default,
        {
          id,
          src: `/feeds/full/${id}`,
          title: `Issue ${id}`,
          interactive: true,
          bordered: true,
          hideTopBorder: true,
          fallbackHeight: 900
        },
        void 0,
        false,
        {
          fileName: "app/routes/archive/feeds.$id.tsx",
          lineNumber: 134,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: footerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedFooter, { covered: bannerVisible }, void 0, false, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 150,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 149,
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
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 153,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/archive/feeds.$id.tsx",
    lineNumber: 126,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  const caught = useCatch();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedTopbar, { showSubscribe: false }, void 0, false, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 169,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feed-stream", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "feeds-empty", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: caught.status === 400 ? "That issue link doesn't look right." : "This issue isn't available right now." }, void 0, false, {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 173,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/archive", children: "\u2190 Back to the archive" }, void 0, false, {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 178,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 172,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 171,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedFooter, {}, void 0, false, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/archive/feeds.$id.tsx",
    lineNumber: 168,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  ArchiveIssue as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/archive/feeds.$id-EF5RNKBG.js.map
