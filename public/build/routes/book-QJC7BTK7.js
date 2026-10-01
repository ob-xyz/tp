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
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/book.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: subscribe_default },
  { rel: "stylesheet", href: book_default }
];
function Advertise() {
  var _a;
  const actionData = useActionData();
  const errors = (_a = actionData == null ? void 0 : actionData.fieldErrors) != null ? _a : {};
  const fieldError = (name) => errors[name] ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ad-field-error", id: `${name}-error`, role: "alert", children: errors[name] }, void 0, false, {
    fileName: "app/routes/book.tsx",
    lineNumber: 346,
    columnNumber: 3
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page ad-booking-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "feed-topbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        className: "feed-mark",
        to: "/",
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
            fileName: "app/routes/book.tsx",
            lineNumber: 358,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/book.tsx",
        lineNumber: 354,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/book.tsx",
      lineNumber: 353,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "ad-booking-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-booking-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "ad-booking-title", children: "Advertise with us" }, void 0, false, {
          fileName: "app/routes/book.tsx",
          lineNumber: 368,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ad-booking-sub", children: "Try an ad you've already run on social media" }, void 0, false, {
          fileName: "app/routes/book.tsx",
          lineNumber: 369,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/book.tsx",
        lineNumber: 367,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "ad-booking-form", children: [
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-form-error", role: "alert", children: [
          actionData.error,
          actionData.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { className: "ad-form-error-debug", children: actionData.debug }, void 0, false, {
            fileName: "app/routes/book.tsx",
            lineNumber: 379,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/book.tsx",
          lineNumber: 376,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "company", children: "Company" }, void 0, false, {
              fileName: "app/routes/book.tsx",
              lineNumber: 387,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                id: "company",
                name: "company",
                required: true,
                autoComplete: "organization",
                placeholder: "Your Company Name *",
                "aria-invalid": errors.company ? true : void 0,
                "aria-describedby": errors.company ? "company-error" : void 0
              },
              void 0,
              false,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 388,
                columnNumber: 15
              },
              this
            ),
            fieldError("company")
          ] }, void 0, true, {
            fileName: "app/routes/book.tsx",
            lineNumber: 386,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "website", children: "Website" }, void 0, false, {
              fileName: "app/routes/book.tsx",
              lineNumber: 402,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                id: "website",
                name: "website",
                required: true,
                autoComplete: "url",
                inputMode: "url",
                placeholder: "https://company.com",
                "aria-invalid": errors.website ? true : void 0,
                "aria-describedby": errors.website ? "website-error" : void 0
              },
              void 0,
              false,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 403,
                columnNumber: 15
              },
              this
            ),
            fieldError("website")
          ] }, void 0, true, {
            fileName: "app/routes/book.tsx",
            lineNumber: 401,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/book.tsx",
          lineNumber: 385,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", children: "Your Name" }, void 0, false, {
              fileName: "app/routes/book.tsx",
              lineNumber: 420,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                id: "name",
                name: "name",
                required: true,
                autoComplete: "name",
                placeholder: "Alex Smith",
                "aria-invalid": errors.name ? true : void 0,
                "aria-describedby": errors.name ? "name-error" : void 0
              },
              void 0,
              false,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 421,
                columnNumber: 15
              },
              this
            ),
            fieldError("name")
          ] }, void 0, true, {
            fileName: "app/routes/book.tsx",
            lineNumber: 419,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Work Email" }, void 0, false, {
              fileName: "app/routes/book.tsx",
              lineNumber: 435,
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
                placeholder: "alex@company.com",
                "aria-invalid": errors.email ? true : void 0,
                "aria-describedby": errors.email ? "email-error" : void 0
              },
              void 0,
              false,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 436,
                columnNumber: 15
              },
              this
            ),
            fieldError("email")
          ] }, void 0, true, {
            fileName: "app/routes/book.tsx",
            lineNumber: 434,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/book.tsx",
          lineNumber: 418,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "targetDate", children: "Start Date" }, void 0, false, {
              fileName: "app/routes/book.tsx",
              lineNumber: 454,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "date",
                id: "targetDate",
                name: "targetDate",
                required: true,
                "aria-invalid": errors.targetDate ? true : void 0,
                "aria-describedby": errors.targetDate ? "targetDate-error" : void 0
              },
              void 0,
              false,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 455,
                columnNumber: 15
              },
              this
            ),
            fieldError("targetDate")
          ] }, void 0, true, {
            fileName: "app/routes/book.tsx",
            lineNumber: 453,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "budget", children: "Ad Budget" }, void 0, false, {
              fileName: "app/routes/book.tsx",
              lineNumber: 469,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "budget", name: "budget", defaultValue: "", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", disabled: true, children: "Select range..." }, void 0, false, {
                fileName: "app/routes/book.tsx",
                lineNumber: 471,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "$1,000-$10,000", children: "$1,000 \u2013 $10,000" }, void 0, false, {
                fileName: "app/routes/book.tsx",
                lineNumber: 474,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "$10,000-$50,000", children: "$10,000 \u2013 $50,000" }, void 0, false, {
                fileName: "app/routes/book.tsx",
                lineNumber: 475,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "$50,000-$100,000", children: "$50,000 \u2013 $100,000" }, void 0, false, {
                fileName: "app/routes/book.tsx",
                lineNumber: 476,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "$100,000+", children: "$100,000+" }, void 0, false, {
                fileName: "app/routes/book.tsx",
                lineNumber: 477,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/book.tsx",
              lineNumber: 470,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/book.tsx",
            lineNumber: 468,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/book.tsx",
          lineNumber: 452,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "notes", children: "Campaign Details & Goals" }, void 0, false, {
            fileName: "app/routes/book.tsx",
            lineNumber: 484,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "textarea",
            {
              id: "notes",
              name: "notes",
              rows: 4,
              maxLength: 5e3,
              placeholder: "Paste a link to an existing ad campaign from social media here..."
            },
            void 0,
            false,
            {
              fileName: "app/routes/book.tsx",
              lineNumber: 485,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/book.tsx",
          lineNumber: 483,
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
            fileName: "app/routes/book.tsx",
            lineNumber: 495,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe-altcha", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
            fileName: "app/routes/book.tsx",
            lineNumber: 506,
            columnNumber: 13
          }, this),
          fieldError("altcha")
        ] }, void 0, true, {
          fileName: "app/routes/book.tsx",
          lineNumber: 505,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "ad-submit-btn", children: "Submit Booking Request" }, void 0, false, {
          fileName: "app/routes/book.tsx",
          lineNumber: 510,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "subscribe-legal ad-legal", children: [
          "We review all inquiries within 24 hours. By submitting, you agree to our ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "Terms" }, void 0, false, {
            fileName: "app/routes/book.tsx",
            lineNumber: 516,
            columnNumber: 17
          }, this),
          " &",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, false, {
            fileName: "app/routes/book.tsx",
            lineNumber: 517,
            columnNumber: 13
          }, this),
          "."
        ] }, void 0, true, {
          fileName: "app/routes/book.tsx",
          lineNumber: 514,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/book.tsx",
        lineNumber: 374,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "back-btn", children: "\u2190 Return to The Poast" }, void 0, false, {
        fileName: "app/routes/book.tsx",
        lineNumber: 521,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/book.tsx",
      lineNumber: 366,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/book.tsx",
    lineNumber: 352,
    columnNumber: 5
  }, this);
}
export {
  Advertise as default,
  links
};
//# sourceMappingURL=/build/routes/book-QJC7BTK7.js.map
