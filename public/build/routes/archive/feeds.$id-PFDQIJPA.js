import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  feed_embed_default
} from "/build/_shared/chunk-YXZUJTC2.js";
import {
  FeedSubscribeBanner
} from "/build/_shared/chunk-SQF23LBC.js";
import "/build/_shared/chunk-4276AIGL.js";
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
function removeProfileLogo(doc) {
  if (!doc)
    return;
  doc.querySelectorAll('img[src*="tp_u6yYte.png"]').forEach((img) => {
    const block = img.closest("p.tac");
    if (block)
      block.remove();
  });
}
function useStripProfileLogo(ref) {
  (0, import_react.useEffect)(() => {
    const root = ref.current;
    if (!root)
      return;
    const attached = /* @__PURE__ */ new WeakSet();
    const strip = (iframe) => {
      try {
        removeProfileLogo(iframe.contentDocument);
      } catch {
      }
    };
    const attach = () => {
      root.querySelectorAll("iframe").forEach((iframe) => {
        if (attached.has(iframe))
          return;
        attached.add(iframe);
        iframe.addEventListener("load", () => strip(iframe));
        strip(iframe);
      });
    };
    attach();
    const observer = new MutationObserver(attach);
    observer.observe(root, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [ref]);
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
  const embedRef = (0, import_react.useRef)(null);
  const footerRef = (0, import_react.useRef)(null);
  const previousReached = (0, import_react.useRef)(false);
  useStripProfileLogo(embedRef);
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
        lineNumber: 181,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feed-stream", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: embedRef, className: "feed-embed loaded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
          lineNumber: 188,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 187,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 200,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: footerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedFooter, { covered: bannerVisible }, void 0, false, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 204,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 203,
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
        lineNumber: 207,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/archive/feeds.$id.tsx",
    lineNumber: 180,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  const caught = useCatch();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedTopbar, { showSubscribe: false }, void 0, false, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feed-stream", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "feeds-empty", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: caught.status === 400 ? "That issue link doesn't look right." : "This issue isn't available right now." }, void 0, false, {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 227,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/archive", children: "\u2190 Back to the archive" }, void 0, false, {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 233,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 232,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 226,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 225,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedFooter, {}, void 0, false, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 238,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/archive/feeds.$id.tsx",
    lineNumber: 222,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  ArchiveIssue as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/archive/feeds.$id-PFDQIJPA.js.map
