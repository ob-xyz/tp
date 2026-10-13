import {
  Link,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-OZ7KCFHT.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/feed-topbar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function FeedTopbar({
  hidden = false,
  onSubscribe,
  showSubscribe = true
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: `feed-topbar${hidden ? " is-hidden" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: "/img/tp.png",
        alt: "thepoast",
        loading: "eager",
        decoding: "async"
      },
      void 0,
      false,
      {
        fileName: "app/components/feed-topbar.tsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/feed-topbar.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    showSubscribe && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "a",
      {
        className: "feed-subscribe",
        href: "#subscribe",
        onClick: onSubscribe,
        children: "Subscribe"
      },
      void 0,
      false,
      {
        fileName: "app/components/feed-topbar.tsx",
        lineNumber: 27,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/feed-topbar.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/components/feed-footer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function FeedFooter({
  covered = false
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: `feed-footer${covered ? " is-covered" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "feed-footer-links", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/about", children: "about" }, void 0, false, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/archive", children: "archive" }, void 0, false, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/partner", children: "partner" }, void 0, false, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/book", children: "advertise" }, void 0, false, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/submit-post", children: "submit post" }, void 0, false, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/feed-footer.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "feed-copyright", children: "thepoast \xA9 2026" }, void 0, false, {
      fileName: "app/components/feed-footer.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/feed-footer.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

export {
  FeedTopbar,
  FeedFooter
};
//# sourceMappingURL=/build/_shared/chunk-DR5IGSIV.js.map
