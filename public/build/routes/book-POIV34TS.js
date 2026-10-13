import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  FeedFooter,
  FeedTopbar
} from "/build/_shared/chunk-DR5IGSIV.js";
import {
  AltchaWrapper
} from "/build/_shared/chunk-7DKTNVJG.js";
import {
  Form,
  Link,
  require_jsx_dev_runtime,
  require_react,
  useActionData
} from "/build/_shared/chunk-OZ7KCFHT.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/book.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Book campaign / thepoast",
    description: "Book an ad campaign for your company or brand here."
  };
};
function Advertise() {
  var _a;
  const actionData = useActionData();
  const errors = (_a = actionData == null ? void 0 : actionData.fieldErrors) != null ? _a : {};
  const [selectedPaymentMethod, setSelectedPaymentMethod] = (0, import_react2.useState)("Credit Card");
  const fieldError = (name) => errors[name] ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ad-field-error", id: `${name}-error`, role: "alert", children: errors[name] }, void 0, false, {
    fileName: "app/routes/book.tsx",
    lineNumber: 309,
    columnNumber: 7
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page ad-booking-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      FeedTopbar,
      {
        showSubscribe: false,
        onSubscribe: (e) => {
          e.preventDefault();
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }
      },
      void 0,
      false,
      {
        fileName: "app/routes/book.tsx",
        lineNumber: 316,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "ad-booking-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ad-badge", children: "ADVERTISE with us" }, void 0, false, {
        fileName: "app/routes/book.tsx",
        lineNumber: 325,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/book.tsx",
        lineNumber: 324,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "ad-booking-form", children: [
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-form-error", role: "alert", children: [
          actionData.error,
          actionData.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { className: "ad-form-error-debug", children: actionData.debug }, void 0, false, {
            fileName: "app/routes/book.tsx",
            lineNumber: 333,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/book.tsx",
          lineNumber: 330,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "company", children: "Company" }, void 0, false, {
              fileName: "app/routes/book.tsx",
              lineNumber: 340,
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
                placeholder: "Company *",
                "aria-invalid": errors.company ? true : void 0,
                "aria-describedby": errors.company ? "company-error" : void 0
              },
              void 0,
              false,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 341,
                columnNumber: 15
              },
              this
            ),
            fieldError("company")
          ] }, void 0, true, {
            fileName: "app/routes/book.tsx",
            lineNumber: 339,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "website", children: "Website" }, void 0, false, {
              fileName: "app/routes/book.tsx",
              lineNumber: 355,
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
                placeholder: "https://",
                "aria-invalid": errors.website ? true : void 0,
                "aria-describedby": errors.website ? "website-error" : void 0
              },
              void 0,
              false,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 356,
                columnNumber: 15
              },
              this
            ),
            fieldError("website")
          ] }, void 0, true, {
            fileName: "app/routes/book.tsx",
            lineNumber: 354,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/book.tsx",
          lineNumber: 338,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "firstName", children: "First Name" }, void 0, false, {
              fileName: "app/routes/book.tsx",
              lineNumber: 373,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                id: "firstName",
                name: "firstName",
                required: true,
                autoComplete: "given-name",
                placeholder: "First Name *",
                "aria-invalid": errors.name ? true : void 0,
                "aria-describedby": errors.name ? "name-error" : void 0
              },
              void 0,
              false,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 374,
                columnNumber: 15
              },
              this
            ),
            fieldError("name")
          ] }, void 0, true, {
            fileName: "app/routes/book.tsx",
            lineNumber: 372,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "lastName", children: "Last Name" }, void 0, false, {
              fileName: "app/routes/book.tsx",
              lineNumber: 388,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                id: "lastName",
                name: "lastName",
                required: true,
                autoComplete: "family-name",
                placeholder: "Last Name *"
              },
              void 0,
              false,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 389,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/book.tsx",
            lineNumber: 387,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/book.tsx",
          lineNumber: 371,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Business Email" }, void 0, false, {
              fileName: "app/routes/book.tsx",
              lineNumber: 402,
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
                placeholder: "Business Email *",
                "aria-invalid": errors.email ? true : void 0,
                "aria-describedby": errors.email ? "email-error" : void 0
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
            fieldError("email")
          ] }, void 0, true, {
            fileName: "app/routes/book.tsx",
            lineNumber: 401,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phone", children: "Phone Number" }, void 0, false, {
              fileName: "app/routes/book.tsx",
              lineNumber: 418,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "tel",
                id: "phone",
                name: "phone",
                autoComplete: "tel",
                inputMode: "tel",
                placeholder: "Phone Number *",
                "aria-invalid": errors.phone ? true : void 0,
                "aria-describedby": errors.phone ? "phone-error" : void 0
              },
              void 0,
              false,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 419,
                columnNumber: 15
              },
              this
            ),
            fieldError("phone")
          ] }, void 0, true, {
            fileName: "app/routes/book.tsx",
            lineNumber: 417,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/book.tsx",
          lineNumber: 400,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Payment Method" }, void 0, false, {
            fileName: "app/routes/book.tsx",
            lineNumber: 434,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "hidden",
              name: "paymentMethod",
              value: selectedPaymentMethod
            },
            void 0,
            false,
            {
              fileName: "app/routes/book.tsx",
              lineNumber: 435,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pill-group", children: ["Credit Card", "Insertion Order"].map((method) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "button",
              className: `pill-btn ${selectedPaymentMethod === method ? "active" : ""}`,
              onClick: () => setSelectedPaymentMethod(method),
              children: method
            },
            method,
            false,
            {
              fileName: "app/routes/book.tsx",
              lineNumber: 442,
              columnNumber: 17
            },
            this
          )) }, void 0, false, {
            fileName: "app/routes/book.tsx",
            lineNumber: 440,
            columnNumber: 13
          }, this),
          fieldError("paymentMethod")
        ] }, void 0, true, {
          fileName: "app/routes/book.tsx",
          lineNumber: 433,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "notes", children: "How can we help you?" }, void 0, false, {
            fileName: "app/routes/book.tsx",
            lineNumber: 458,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "textarea",
            {
              id: "notes",
              name: "notes",
              rows: 4,
              maxLength: 5e3,
              placeholder: "I'm looking for help with ads..."
            },
            void 0,
            false,
            {
              fileName: "app/routes/book.tsx",
              lineNumber: 459,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/book.tsx",
          lineNumber: 457,
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
            lineNumber: 468,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "ad-submit-btn", children: "Submit Booking Request" }, void 0, false, {
          fileName: "app/routes/book.tsx",
          lineNumber: 477,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe-altcha", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
            fileName: "app/routes/book.tsx",
            lineNumber: 482,
            columnNumber: 13
          }, this),
          fieldError("altcha")
        ] }, void 0, true, {
          fileName: "app/routes/book.tsx",
          lineNumber: 481,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/book.tsx",
        lineNumber: 328,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-legal", children: [
        "By submitting, you agree to our",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
          fileName: "app/routes/book.tsx",
          lineNumber: 489,
          columnNumber: 13
        }, this),
        " &",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
          fileName: "app/routes/book.tsx",
          lineNumber: 490,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/book.tsx",
        lineNumber: 487,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "back-btn", children: "\u2190 Return to thepoast" }, void 0, false, {
        fileName: "app/routes/book.tsx",
        lineNumber: 493,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/book.tsx",
      lineNumber: 323,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedFooter, {}, void 0, false, {
      fileName: "app/routes/book.tsx",
      lineNumber: 498,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/book.tsx",
    lineNumber: 315,
    columnNumber: 5
  }, this);
}
export {
  Advertise as default,
  meta
};
//# sourceMappingURL=/build/routes/book-POIV34TS.js.map
