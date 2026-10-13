import {
  FeedFooter,
  FeedTopbar
} from "/build/_shared/chunk-DR5IGSIV.js";
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

// app/routes/subscribe.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Subscribe / thepoast",
    description: "Get thepoast sent to your inbox every day."
  };
};
function Subscribe() {
  const emailRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    var _a;
    (_a = emailRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe-page feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedTopbar, { showSubscribe: false }, void 0, false, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "subscribe-card-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "subscribe-title", children: "Get The Poast" }, void 0, false, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "subscribe-sub", children: "Get the top stories from across the business world delivered to your inbox daily." }, void 0, false, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "form",
        {
          method: "post",
          action: "https://app.thepoast.com/subscription/form",
          className: "subscribe-form",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe-input-bar", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  className: "subscribe-input email-input",
                  type: "email",
                  name: "email",
                  required: true,
                  ref: emailRef,
                  placeholder: "Email Address *"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/subscribe.tsx",
                  lineNumber: 40,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "subscribe-submit", type: "submit", children: "Subscribe" }, void 0, false, {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 48,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 39,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe-altcha", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 54,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 53,
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
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 57,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 63,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-legal", children: [
              "By submitting, you agree to our",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 67,
                columnNumber: 15
              }, this),
              " &",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 68,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 65,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 34,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "back-btn", children: "\u2190 Return to thepoast" }, void 0, false, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedFooter, {}, void 0, false, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
export {
  Subscribe as default,
  meta
};
//# sourceMappingURL=/build/routes/subscribe-TUFY4ADR.js.map
