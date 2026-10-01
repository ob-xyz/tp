import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  AltchaWrapper
} from "/build/_shared/chunk-WU4J6WKT.js";
import {
  book_default
} from "/build/_shared/chunk-BYU2QCAV.js";
import {
  subscribe_default
} from "/build/_shared/chunk-OARJLLWB.js";
import {
  Form,
  Link,
  require_jsx_dev_runtime,
  useActionData
} from "/build/_shared/chunk-77KVK7YT.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// empty-module:~/utils/poast.server
var require_poast = __commonJS({
  "empty-module:~/utils/poast.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/tips.tsx
var import_node = __toESM(require_node());
var import_poast = __toESM(require_poast());

// app/style/scss/tips.css
var tips_default = "/build/_assets/tips-F6I2JL5P.css";

// app/routes/tips.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: subscribe_default },
  { rel: "stylesheet", href: book_default },
  { rel: "stylesheet", href: tips_default }
];
var meta = () => {
  return {
    title: "Send a Tip : The Poast",
    description: "Got a story or a tip? Send it our way."
  };
};
var TOPICS = ["News tip", "Story idea", "Correction", "Something else"];
var CREDIT_OPTIONS = [
  { value: "credit", label: "You can credit me" },
  { value: "anonymous", label: "Keep me anonymous" }
];
function Tips() {
  var _a;
  const actionData = useActionData();
  const errors = (_a = actionData == null ? void 0 : actionData.fieldErrors) != null ? _a : {};
  const fieldError = (field) => errors[field] ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ad-field-error", id: `${field}-error`, role: "alert", children: errors[field] }, void 0, false, {
    fileName: "app/routes/tips.tsx",
    lineNumber: 139,
    columnNumber: 3
  }, this) : null;
  const header = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "feed-topbar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
        fileName: "app/routes/tips.tsx",
        lineNumber: 147,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/tips.tsx",
      lineNumber: 146,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribe", className: "feed-subscribe", children: "Subscribe" }, void 0, false, {
      fileName: "app/routes/tips.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tips.tsx",
    lineNumber: 145,
    columnNumber: 3
  }, this);
  if (actionData == null ? void 0 : actionData.success) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page ad-booking-page tips-page", children: [
      header,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "ad-booking-card ad-success-card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-success-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", { points: "20 6 9 17 4 12" }, void 0, false, {
              fileName: "app/routes/tips.tsx",
              lineNumber: 177,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/tips.tsx",
            lineNumber: 169,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/tips.tsx",
          lineNumber: 168,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-booking-header", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "ad-booking-title", children: "Tip received" }, void 0, false, {
            fileName: "app/routes/tips.tsx",
            lineNumber: 182,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ad-booking-sub", children: "Thank you for sending this our way. We'll take a look." }, void 0, false, {
            fileName: "app/routes/tips.tsx",
            lineNumber: 183,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tips.tsx",
          lineNumber: 181,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "back-btn ad-success-btn", children: "\u2190 Return to The Poast" }, void 0, false, {
          fileName: "app/routes/tips.tsx",
          lineNumber: 188,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tips.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tips.tsx",
      lineNumber: 164,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page ad-booking-page tips-page", children: [
    header,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "ad-booking-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-booking-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "ad-booking-title", children: "Send a tip" }, void 0, false, {
          fileName: "app/routes/tips.tsx",
          lineNumber: 203,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ad-booking-sub", children: "Got a story, a lead, or a correction? Tell us about it." }, void 0, false, {
          fileName: "app/routes/tips.tsx",
          lineNumber: 204,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tips.tsx",
        lineNumber: 202,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "ad-booking-form", children: [
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-form-error", role: "alert", children: [
          actionData.error,
          actionData.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { className: "ad-form-error-debug", children: actionData.debug }, void 0, false, {
            fileName: "app/routes/tips.tsx",
            lineNumber: 214,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tips.tsx",
          lineNumber: 211,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", children: "Your Name (optional)" }, void 0, false, {
              fileName: "app/routes/tips.tsx",
              lineNumber: 221,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                id: "name",
                name: "name",
                autoComplete: "name",
                placeholder: "Alex Smith"
              },
              void 0,
              false,
              {
                fileName: "app/routes/tips.tsx",
                lineNumber: 222,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/tips.tsx",
            lineNumber: 220,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Email" }, void 0, false, {
              fileName: "app/routes/tips.tsx",
              lineNumber: 232,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "email",
                id: "email",
                name: "email",
                required: true,
                autoComplete: "email",
                inputMode: "email",
                placeholder: "alex@email.com",
                "aria-invalid": errors.email ? true : void 0,
                "aria-describedby": errors.email ? "email-error" : void 0
              },
              void 0,
              false,
              {
                fileName: "app/routes/tips.tsx",
                lineNumber: 233,
                columnNumber: 15
              },
              this
            ),
            fieldError("email")
          ] }, void 0, true, {
            fileName: "app/routes/tips.tsx",
            lineNumber: 231,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tips.tsx",
          lineNumber: 219,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "topic", children: "Type" }, void 0, false, {
              fileName: "app/routes/tips.tsx",
              lineNumber: 250,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "topic", name: "topic", defaultValue: "", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", disabled: true, children: "Select one..." }, void 0, false, {
                fileName: "app/routes/tips.tsx",
                lineNumber: 252,
                columnNumber: 17
              }, this),
              TOPICS.map(
                (t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: t, children: t }, t, false, {
                  fileName: "app/routes/tips.tsx",
                  lineNumber: 256,
                  columnNumber: 17
                }, this)
              )
            ] }, void 0, true, {
              fileName: "app/routes/tips.tsx",
              lineNumber: 251,
              columnNumber: 15
            }, this),
            fieldError("topic")
          ] }, void 0, true, {
            fileName: "app/routes/tips.tsx",
            lineNumber: 249,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "credit", children: "If we use it" }, void 0, false, {
              fileName: "app/routes/tips.tsx",
              lineNumber: 265,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "credit", name: "credit", defaultValue: "anonymous", children: CREDIT_OPTIONS.map(
              (o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: o.value, children: o.label }, o.value, false, {
                fileName: "app/routes/tips.tsx",
                lineNumber: 268,
                columnNumber: 17
              }, this)
            ) }, void 0, false, {
              fileName: "app/routes/tips.tsx",
              lineNumber: 266,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/tips.tsx",
            lineNumber: 264,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tips.tsx",
          lineNumber: 248,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "tip", children: "Your tip" }, void 0, false, {
            fileName: "app/routes/tips.tsx",
            lineNumber: 277,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "textarea",
            {
              id: "tip",
              name: "tip",
              rows: 6,
              required: true,
              maxLength: 5e3,
              placeholder: "What should we know?",
              "aria-invalid": errors.tip ? true : void 0,
              "aria-describedby": errors.tip ? "tip-error" : void 0
            },
            void 0,
            false,
            {
              fileName: "app/routes/tips.tsx",
              lineNumber: 278,
              columnNumber: 13
            },
            this
          ),
          fieldError("tip")
        ] }, void 0, true, {
          fileName: "app/routes/tips.tsx",
          lineNumber: 276,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "source", children: "Link or source (optional)" }, void 0, false, {
            fileName: "app/routes/tips.tsx",
            lineNumber: 292,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "text",
              id: "source",
              name: "source",
              placeholder: "https://"
            },
            void 0,
            false,
            {
              fileName: "app/routes/tips.tsx",
              lineNumber: 293,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/tips.tsx",
          lineNumber: 291,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "text",
            name: "nonce",
            className: "hp-field",
            tabIndex: -1,
            autoComplete: "off",
            "aria-hidden": "true"
          },
          void 0,
          false,
          {
            fileName: "app/routes/tips.tsx",
            lineNumber: 302,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe-altcha", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
            fileName: "app/routes/tips.tsx",
            lineNumber: 312,
            columnNumber: 13
          }, this),
          fieldError("altcha")
        ] }, void 0, true, {
          fileName: "app/routes/tips.tsx",
          lineNumber: 311,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "ad-submit-btn", children: "Send Tip" }, void 0, false, {
          fileName: "app/routes/tips.tsx",
          lineNumber: 316,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "subscribe-legal ad-legal", children: [
          "We'll use your email only to follow up on this tip. By submitting, you agree to our ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "Terms" }, void 0, false, {
            fileName: "app/routes/tips.tsx",
            lineNumber: 322,
            columnNumber: 30
          }, this),
          " &",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, false, {
            fileName: "app/routes/tips.tsx",
            lineNumber: 323,
            columnNumber: 13
          }, this),
          "."
        ] }, void 0, true, {
          fileName: "app/routes/tips.tsx",
          lineNumber: 320,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tips.tsx",
        lineNumber: 209,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "back-btn", children: "\u2190 Return to The Poast" }, void 0, false, {
        fileName: "app/routes/tips.tsx",
        lineNumber: 327,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tips.tsx",
      lineNumber: 201,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tips.tsx",
    lineNumber: 198,
    columnNumber: 5
  }, this);
}
export {
  Tips as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/tips-DDWNW2IE.js.map
