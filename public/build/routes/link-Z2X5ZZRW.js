import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  AltchaWrapper
} from "/build/_shared/chunk-YYFE5CLS.js";
import {
  FeedFooter,
  FeedTopbar
} from "/build/_shared/chunk-3G6G2NLL.js";
import {
  Form,
  Link,
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useNavigation
} from "/build/_shared/chunk-FZOAUUQ7.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/link.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Share your campaign / thepoast",
    description: "Already running ads on social? Share a link and we'll convert it to a thepoast campaign."
  };
};
var PAYMENT_METHODS = ["Credit Card", "Insertion Order"];
var singleRowTextarea = {
  minHeight: 0,
  height: "3.1rem",
  lineHeight: 1.3,
  resize: "none",
  overflow: "hidden",
  borderRadius: "0.8rem",
  whiteSpace: "nowrap"
};
function Advertise() {
  var _a;
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const errors = (_a = actionData == null ? void 0 : actionData.fieldErrors) != null ? _a : {};
  const values = actionData == null ? void 0 : actionData.values;
  const [selectedPaymentMethod, setSelectedPaymentMethod] = (0, import_react2.useState)(
    (values == null ? void 0 : values.paymentMethod) || PAYMENT_METHODS[0]
  );
  const fieldError = (name) => errors[name] ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ad-field-error", id: `${name}-error`, role: "alert", children: errors[name] }, void 0, false, {
    fileName: "app/routes/link.tsx",
    lineNumber: 346,
    columnNumber: 7
  }, this) : null;
  const a11y = (name) => ({
    "aria-invalid": errors[name] ? true : void 0,
    "aria-describedby": errors[name] ? `${name}-error` : void 0
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page ad-booking-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      FeedTopbar,
      {
        showSubscribe: false,
        onSubscribe: (e) => {
          e.preventDefault();
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
        }
      },
      void 0,
      false,
      {
        fileName: "app/routes/link.tsx",
        lineNumber: 358,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "ad-booking-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ad-badge", children: "Repurpose a campaign" }, void 0, false, {
        fileName: "app/routes/link.tsx",
        lineNumber: 371,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/link.tsx",
        lineNumber: 370,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "ad-booking-form", children: [
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-form-error", role: "alert", children: [
          actionData.error,
          actionData.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { className: "ad-form-error-debug", children: actionData.debug }, void 0, false, {
            fileName: "app/routes/link.tsx",
            lineNumber: 379,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/link.tsx",
          lineNumber: 376,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "firstName", children: "First Name" }, void 0, false, {
              fileName: "app/routes/link.tsx",
              lineNumber: 386,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                id: "firstName",
                name: "firstName",
                required: true,
                maxLength: 100,
                autoComplete: "given-name",
                placeholder: "First Name *",
                defaultValue: values == null ? void 0 : values.firstName,
                ...a11y("firstName")
              },
              void 0,
              false,
              {
                fileName: "app/routes/link.tsx",
                lineNumber: 387,
                columnNumber: 15
              },
              this
            ),
            fieldError("firstName")
          ] }, void 0, true, {
            fileName: "app/routes/link.tsx",
            lineNumber: 385,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "lastName", children: "Last Name" }, void 0, false, {
              fileName: "app/routes/link.tsx",
              lineNumber: 402,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                id: "lastName",
                name: "lastName",
                required: true,
                maxLength: 100,
                autoComplete: "family-name",
                placeholder: "Last Name *",
                defaultValue: values == null ? void 0 : values.lastName,
                ...a11y("lastName")
              },
              void 0,
              false,
              {
                fileName: "app/routes/link.tsx",
                lineNumber: 403,
                columnNumber: 15
              },
              this
            ),
            fieldError("lastName")
          ] }, void 0, true, {
            fileName: "app/routes/link.tsx",
            lineNumber: 401,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/link.tsx",
          lineNumber: 384,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { id: "payment-label", children: "Payment Method" }, void 0, false, {
            fileName: "app/routes/link.tsx",
            lineNumber: 419,
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
              fileName: "app/routes/link.tsx",
              lineNumber: 420,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "pill-group",
              role: "group",
              "aria-labelledby": "payment-label",
              children: PAYMENT_METHODS.map((method) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: `pill-btn ${selectedPaymentMethod === method ? "active" : ""}`,
                  "aria-pressed": selectedPaymentMethod === method,
                  onClick: () => setSelectedPaymentMethod(method),
                  children: method
                },
                method,
                false,
                {
                  fileName: "app/routes/link.tsx",
                  lineNumber: 431,
                  columnNumber: 17
                },
                this
              ))
            },
            void 0,
            false,
            {
              fileName: "app/routes/link.tsx",
              lineNumber: 425,
              columnNumber: 13
            },
            this
          ),
          fieldError("paymentMethod")
        ] }, void 0, true, {
          fileName: "app/routes/link.tsx",
          lineNumber: 418,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "link", children: "Link to existing social media campaign" }, void 0, false, {
            fileName: "app/routes/link.tsx",
            lineNumber: 448,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "textarea",
            {
              id: "link",
              name: "link",
              rows: 1,
              required: true,
              maxLength: 500,
              inputMode: "url",
              autoComplete: "off",
              autoCapitalize: "off",
              spellCheck: false,
              placeholder: "http://linkedin.com/ad-library/*******",
              defaultValue: values == null ? void 0 : values.link,
              style: singleRowTextarea,
              ...a11y("link")
            },
            void 0,
            false,
            {
              fileName: "app/routes/link.tsx",
              lineNumber: 449,
              columnNumber: 13
            },
            this
          ),
          fieldError("link")
        ] }, void 0, true, {
          fileName: "app/routes/link.tsx",
          lineNumber: 447,
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
            fileName: "app/routes/link.tsx",
            lineNumber: 468,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "ad-submit-btn", disabled: isSubmitting, children: isSubmitting ? "Submitting\u2026" : "Repurpose a Campaign" }, void 0, false, {
          fileName: "app/routes/link.tsx",
          lineNumber: 477,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe-altcha", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
            fileName: "app/routes/link.tsx",
            lineNumber: 482,
            columnNumber: 13
          }, this),
          fieldError("altcha")
        ] }, void 0, true, {
          fileName: "app/routes/link.tsx",
          lineNumber: 481,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/link.tsx",
        lineNumber: 374,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-legal", children: [
        "By submitting, you agree to our",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
          fileName: "app/routes/link.tsx",
          lineNumber: 489,
          columnNumber: 11
        }, this),
        " &",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
          fileName: "app/routes/link.tsx",
          lineNumber: 490,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/link.tsx",
        lineNumber: 487,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/manager", className: "back-btn", children: "\u2190 Back to Ads Manager" }, void 0, false, {
        fileName: "app/routes/link.tsx",
        lineNumber: 493,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/link.tsx",
      lineNumber: 369,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedFooter, {}, void 0, false, {
      fileName: "app/routes/link.tsx",
      lineNumber: 498,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/link.tsx",
    lineNumber: 357,
    columnNumber: 5
  }, this);
}
export {
  Advertise as default,
  meta
};
//# sourceMappingURL=/build/routes/link-Z2X5ZZRW.js.map
