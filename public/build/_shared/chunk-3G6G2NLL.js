import {
  Link,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-FZOAUUQ7.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/feed-topbar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function FeedTopbar({
  hidden = false,
  onSubscribe,
  showSubscribe = true,
  leftContent
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: `feed-topbar${hidden ? " is-hidden" : ""}`, children: [
    leftContent ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "feed-topbar-left",
        style: { gridColumn: 1, justifySelf: "start", minWidth: 0 },
        children: leftContent
      },
      void 0,
      false,
      {
        fileName: "app/components/feed-topbar.tsx",
        lineNumber: 21,
        columnNumber: 9
      },
      this
    ) : null,
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
        lineNumber: 30,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/feed-topbar.tsx",
      lineNumber: 29,
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
        lineNumber: 39,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/feed-topbar.tsx",
    lineNumber: 19,
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
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/archive", children: "archive" }, void 0, false, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/submit-post", children: "submit post" }, void 0, false, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/book", children: "advertise" }, void 0, false, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/manager", children: "ads manager" }, void 0, false, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 19,
        columnNumber: 11
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
//# sourceMappingURL=/build/_shared/chunk-3G6G2NLL.js.map
