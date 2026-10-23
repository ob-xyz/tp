import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  feed_embed_default,
  getCachedHeight,
  useSideBorders
} from "/build/_shared/chunk-YXZUJTC2.js";
import {
  FeedSubscribeBanner
} from "/build/_shared/chunk-GHQHS7KD.js";
import {
  FeedFooter,
  FeedTopbar
} from "/build/_shared/chunk-3G6G2NLL.js";
import "/build/_shared/chunk-YYFE5CLS.js";
import {
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-FZOAUUQ7.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// empty-module:../utils/poast-feeds.server
var require_poast_feeds = __commonJS({
  "empty-module:../utils/poast-feeds.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/feeds.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_poast_feeds = __toESM(require_poast_feeds());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Past feeds / thepoast",
    description: "See every feed we've ever posted."
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
function shouldRevalidate() {
  return false;
}
var BANNER_TRIGGER = 0.75;
var MAX_CONCURRENT = 2;
var active = 0;
var waiting = [];
function schedule(task, priority = false) {
  return new Promise((resolve, reject) => {
    const run = () => {
      active++;
      task().then(resolve, reject).finally(() => {
        var _a;
        active--;
        (_a = waiting.shift()) == null ? void 0 : _a();
      });
    };
    if (priority || active < MAX_CONCURRENT) {
      run();
    } else {
      waiting.push(run);
    }
  });
}
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function fetchIssue(id, signal) {
  const url = `/feeds/full/${encodeURIComponent(id)}`;
  let lastError;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (signal.aborted) {
      throw new DOMException("Aborted", "AbortError");
    }
    try {
      const response = await fetch(url, {
        signal,
        headers: { Accept: "text/html" }
      });
      if (response.status === 404)
        return null;
      if (!response.ok)
        throw new Error(`Issue request failed: ${response.status}`);
      const text = await response.text();
      if (!text)
        throw new Error("Empty issue");
      return text;
    } catch (error) {
      if (signal.aborted)
        throw error;
      lastError = error;
      await sleep(300 * (attempt + 1));
    }
  }
  throw lastError;
}
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
    const scheduleCheck = () => {
      if (!frame)
        frame = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", scheduleCheck, { passive: true });
    window.addEventListener("resize", scheduleCheck);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined" && element.parentElement) {
      resizeObserver = new ResizeObserver(scheduleCheck);
      resizeObserver.observe(element.parentElement);
    }
    check();
    return () => {
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      if (frame)
        cancelAnimationFrame(frame);
    };
  }, []);
  return { endRef, reached };
}
function FeedCard({
  feed,
  priority
}) {
  var _a;
  const ref = (0, import_react.useRef)(null);
  const sideBorders = useSideBorders();
  const [html, setHtml] = (0, import_react.useState)(null);
  const [failed, setFailed] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (html || failed)
      return;
    const controller = new AbortController();
    const load = () => {
      schedule(() => fetchIssue(feed.id, controller.signal), priority).then((result) => {
        if (controller.signal.aborted)
          return;
        if (result)
          setHtml(result);
        else
          setFailed(true);
      }).catch(() => setFailed(true));
    };
    if (priority) {
      load();
      return () => controller.abort();
    }
    const element = ref.current;
    if (!element)
      return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!(entry == null ? void 0 : entry.isIntersecting))
          return;
        observer.disconnect();
        load();
      },
      { rootMargin: "1800px 0px", threshold: 0 }
    );
    observer.observe(element);
    return () => {
      controller.abort();
      observer.disconnect();
    };
  }, [feed.id, html, failed, priority]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "feed-archive-item", "data-feed-id": feed.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, children: html ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    feed_embed_default,
    {
      id: feed.id,
      html,
      title: feed.subject,
      interactive: true,
      bordered: true,
      hideTopBorder: true,
      fallbackHeight: 900
    },
    void 0,
    false,
    {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 269,
      columnNumber: 11
    },
    this
  ) : failed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "a",
    {
      href: `/feeds/${feed.id}`,
      className: "feeds-empty feed-fallback",
      style: {
        display: "block",
        padding: "32px 24px",
        textAlign: "center",
        textDecoration: "none",
        color: "inherit",
        ...sideBorders
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: feed.subject }, void 0, false, {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 291,
          columnNumber: 13
        }, this),
        feed.dateLabel && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { opacity: 0.6, marginTop: 6 }, children: feed.dateLabel }, void 0, false, {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 292,
          columnNumber: 32
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { opacity: 0.6, marginTop: 6 }, children: "Read this edition" }, void 0, false, {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 293,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 279,
      columnNumber: 11
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "feeds-skeleton feed-lazy-placeholder",
      "aria-hidden": "true",
      style: {
        width: "100%",
        height: (_a = getCachedHeight(feed.id, true)) != null ? _a : 900,
        ...sideBorders
      }
    },
    void 0,
    false,
    {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 296,
      columnNumber: 11
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/feeds.tsx",
    lineNumber: 267,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/feeds.tsx",
    lineNumber: 266,
    columnNumber: 5
  }, this);
}
function Feeds() {
  const { feeds, degraded } = useLoaderData();
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page feeds-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedTopbar, { hidden: reached, onSubscribe: handleTopbarSubscribe }, void 0, false, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 338,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feeds-stream", children: [
      feeds.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feeds-empty", children: degraded ? "The archive is taking a moment. Please refresh shortly." : "No feeds yet." }, void 0, false, {
        fileName: "app/routes/feeds.tsx",
        lineNumber: 342,
        columnNumber: 11
      }, this) : feeds.map((feed, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedCard, { feed, priority: index === 0 }, feed.id, false, {
        fileName: "app/routes/feeds.tsx",
        lineNumber: 347,
        columnNumber: 13
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/feeds.tsx",
        lineNumber: 351,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 340,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: footerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedFooter, { covered: bannerVisible }, void 0, false, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 355,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 354,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedSubscribeBanner, { visible: bannerVisible, forceExpanded: expandBanner }, void 0, false, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 358,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/feeds.tsx",
    lineNumber: 337,
    columnNumber: 5
  }, this);
}
export {
  Feeds as default,
  links,
  meta,
  shouldRevalidate
};
//# sourceMappingURL=/build/routes/feeds-GJC6WX5Q.js.map
