import {
  feed_embed_default
} from "/build/_shared/chunk-UJL6FION.js";
import {
  AltchaWrapper
} from "/build/_shared/chunk-WU4J6WKT.js";
import {
  showscroll_default
} from "/build/_shared/chunk-MG3UHPBD.js";
import {
  Link,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-77KVK7YT.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/$.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  {
    rel: "stylesheet",
    href: showscroll_default
  },
  {
    rel: "preconnect",
    href: "https://img.thepoast.com"
  },
  {
    rel: "dns-prefetch",
    href: "https://img.thepoast.com"
  }
];
function NotFound() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "feed-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-status", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "status-dot" }, void 0, false, {
          fileName: "app/routes/$.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        "404 Error"
      ] }, void 0, true, {
        fileName: "app/routes/$.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          className: "feed-mark",
          to: "/",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: "/img/tp.png",
              alt: "The Poast",
              loading: "eager",
              decoding: "async"
            },
            void 0,
            false,
            {
              fileName: "app/routes/$.tsx",
              lineNumber: 45,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/$.tsx",
          lineNumber: 41,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "a",
        {
          href: "#subscribe",
          className: "feed-subscribe",
          children: "Subscribe"
        },
        void 0,
        false,
        {
          fileName: "app/routes/$.tsx",
          lineNumber: 53,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/$.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feed-stream", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-embed loaded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
        lineNumber: 63,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/$.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/$.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "footer",
      {
        className: "feed-footer",
        id: "subscribe",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "form",
          {
            method: "post",
            action: "https://app.thepoast.com/subscription/form",
            className: "feed-subscribe-form",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "feed-subscribe-heading", children: "Get The Poast for free" }, void 0, false, {
                fileName: "app/routes/$.tsx",
                lineNumber: 82,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-input-bar", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "input",
                  {
                    className: "feed-input email-input",
                    type: "email",
                    name: "email",
                    required: true,
                    autoComplete: "email",
                    inputMode: "email",
                    placeholder: "Email Address *"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/$.tsx",
                    lineNumber: 87,
                    columnNumber: 13
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
                    fileName: "app/routes/$.tsx",
                    lineNumber: 97,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/$.tsx",
                lineNumber: 86,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
                fileName: "app/routes/$.tsx",
                lineNumber: 106,
                columnNumber: 13
              }, this) }, void 0, false, {
                fileName: "app/routes/$.tsx",
                lineNumber: 105,
                columnNumber: 11
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
                  fileName: "app/routes/$.tsx",
                  lineNumber: 109,
                  columnNumber: 11
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
                  fileName: "app/routes/$.tsx",
                  lineNumber: 116,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "feed-legal", children: [
                "By submitting, you agree to our",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "Terms" }, void 0, false, {
                  fileName: "app/routes/$.tsx",
                  lineNumber: 123,
                  columnNumber: 13
                }, this),
                " ",
                "&",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, false, {
                  fileName: "app/routes/$.tsx",
                  lineNumber: 127,
                  columnNumber: 13
                }, this),
                "."
              ] }, void 0, true, {
                fileName: "app/routes/$.tsx",
                lineNumber: 121,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/$.tsx",
            lineNumber: 77,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/$.tsx",
        lineNumber: 73,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/$.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
export {
  NotFound as default,
  links
};
//# sourceMappingURL=/build/routes/$-3VWOCR33.js.map
