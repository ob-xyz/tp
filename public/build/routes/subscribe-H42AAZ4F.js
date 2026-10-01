import {
  AltchaWrapper
} from "/build/_shared/chunk-WU4J6WKT.js";
import {
  subscribe_default
} from "/build/_shared/chunk-OARJLLWB.js";
import {
  Link,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-77KVK7YT.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/subscribe.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  {
    rel: "stylesheet",
    href: subscribe_default
  }
];
var meta = () => {
  return {
    title: "Subscribe : The Poast",
    description: "Get caught up right here, right now."
  };
};
function Subscribe() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe-page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "subscribe-card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "/",
        className: "subscribe-logo",
        "aria-label": "The Poast home",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: "/img/tp.png",
            alt: "The Poast",
            decoding: "async"
          },
          void 0,
          false,
          {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 30,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 25,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "subscribe-title", children: "Get The Poast for free" }, void 0, false, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "subscribe-sub", children: "Get caught up right here, right now." }, void 0, false, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 41,
      columnNumber: 9
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
              "label",
              {
                htmlFor: "subscribe-email",
                className: "sr-only",
                children: "Email address"
              },
              void 0,
              false,
              {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 51,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                id: "subscribe-email",
                className: "subscribe-input",
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
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 58,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                className: "subscribe-submit",
                type: "submit",
                children: "Subscribe"
              },
              void 0,
              false,
              {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 69,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 50,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe-altcha", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 77,
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
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 81,
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
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 88,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "subscribe-legal", children: [
            "By submitting, you agree to our",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "Terms" }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 95,
              columnNumber: 13
            }, this),
            " ",
            "&",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 99,
              columnNumber: 13
            }, this),
            ".",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 103,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 104,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/tips", children: "Tips" }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 105,
              columnNumber: 13
            }, this),
            " \xB7 ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/media-kit", children: "Media Kit" }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 107,
              columnNumber: 13
            }, this),
            " \xB7 ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", children: "About" }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 109,
              columnNumber: 13
            }, this),
            " \xB7 ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/latest", children: "Latest" }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 111,
              columnNumber: 13
            }, this),
            " \xB7 ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/book", children: "Advertise" }, void 0, false, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 113,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 93,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 45,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "back-btn", children: "\u2190 Return to The Poast" }, void 0, false, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
export {
  Subscribe as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/subscribe-H42AAZ4F.js.map
