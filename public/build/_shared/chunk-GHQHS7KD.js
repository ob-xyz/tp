import {
  AltchaWrapper
} from "/build/_shared/chunk-YYFE5CLS.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FZOAUUQ7.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/feed-subscribe-banner.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function FeedSubscribeBanner({
  visible,
  forceExpanded = false
}) {
  const [expanded, setExpanded] = (0, import_react.useState)(false);
  const emailRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (forceExpanded) {
      setExpanded(true);
    }
  }, [forceExpanded]);
  (0, import_react.useEffect)(() => {
    var _a;
    if (expanded && visible) {
      (_a = emailRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
    }
  }, [expanded, visible]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "aside",
    {
      className: `feed-banner${visible ? " is-visible" : ""}`,
      "aria-label": "Subscribe to thepoast",
      "aria-hidden": !visible,
      inert: !visible,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-banner-inner", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-banner-title", children: "Get thepoast for free" }, void 0, false, {
          fileName: "app/components/feed-subscribe-banner.tsx",
          lineNumber: 39,
          columnNumber: 9
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
            fileName: "app/components/feed-subscribe-banner.tsx",
            lineNumber: 44,
            columnNumber: 11
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
                    fileName: "app/components/feed-subscribe-banner.tsx",
                    lineNumber: 58,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "button",
                  {
                    className: "feed-submit",
                    type: "submit",
                    children: "Subscribe"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/feed-subscribe-banner.tsx",
                    lineNumber: 67,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/components/feed-subscribe-banner.tsx",
                lineNumber: 57,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-verify-row", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
                  fileName: "app/components/feed-subscribe-banner.tsx",
                  lineNumber: 77,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "app/components/feed-subscribe-banner.tsx",
                  lineNumber: 76,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-legal", children: [
                  "By submitting, you agree to our",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
                    fileName: "app/components/feed-subscribe-banner.tsx",
                    lineNumber: 82,
                    columnNumber: 17
                  }, this),
                  " ",
                  "&",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
                    fileName: "app/components/feed-subscribe-banner.tsx",
                    lineNumber: 86,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/feed-subscribe-banner.tsx",
                  lineNumber: 80,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/feed-subscribe-banner.tsx",
                lineNumber: 75,
                columnNumber: 13
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
                  fileName: "app/components/feed-subscribe-banner.tsx",
                  lineNumber: 92,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  type: "hidden",
                  name: "nonce"
                },
                void 0,
                false,
                {
                  fileName: "app/components/feed-subscribe-banner.tsx",
                  lineNumber: 99,
                  columnNumber: 13
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/feed-subscribe-banner.tsx",
            lineNumber: 52,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/feed-subscribe-banner.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/feed-subscribe-banner.tsx",
      lineNumber: 32,
      columnNumber: 5
    },
    this
  );
}

export {
  FeedSubscribeBanner
};
//# sourceMappingURL=/build/_shared/chunk-GHQHS7KD.js.map
