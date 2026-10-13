import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  FeedSubscribeBanner
} from "/build/_shared/chunk-CYAGMEZN.js";
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

// app/routes/submit-post.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Submit post / thepoast",
    description: "Want to submit a post? Do it here."
  };
};
var TOPICS = ["New post", "Story idea", "Correction", "Something else"];
var CREDIT_OPTIONS = [
  { value: "credit", label: "You can credit me" },
  { value: "anonymous", label: "Keep me anonymous" }
];
var TIPS_LIST_UUID = "a1d1ab8d-81e1-47fe-adab-4f4a555689a1";
var TIPS_LIST_FIELD_ID = "a1d1a";
var BANNER_TRIGGER = 0.75;
function useReachedEndOfPage() {
  const endRef = (0, import_react2.useRef)(null);
  const [reached, setReached] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    const element = endRef.current;
    if (!element)
      return;
    let frame = 0;
    const check = () => {
      frame = 0;
      const top = element.getBoundingClientRect().top;
      setReached(window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER);
    };
    const schedule = () => {
      if (!frame)
        frame = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined" && element.parentElement) {
      resizeObserver = new ResizeObserver(schedule);
      resizeObserver.observe(element.parentElement);
    }
    check();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      if (frame)
        cancelAnimationFrame(frame);
    };
  }, []);
  return { endRef, reached };
}
function Tips() {
  var _a;
  const actionData = useActionData();
  const errors = (_a = actionData == null ? void 0 : actionData.fieldErrors) != null ? _a : {};
  const { endRef, reached } = useReachedEndOfPage();
  const [forced, setForced] = (0, import_react2.useState)(false);
  const [expandBanner, setExpandBanner] = (0, import_react2.useState)(false);
  const footerRef = (0, import_react2.useRef)(null);
  const previousReached = (0, import_react2.useRef)(false);
  const bannerVisible = reached || forced;
  (0, import_react2.useEffect)(() => {
    if (previousReached.current && !reached) {
      setForced(false);
      setExpandBanner(false);
    }
    previousReached.current = reached;
  }, [reached]);
  const handleTopbarSubscribe = (event) => {
    var _a2;
    event.preventDefault();
    setForced(true);
    setExpandBanner(true);
    (_a2 = footerRef.current) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  const fieldError = (field) => errors[field] ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ad-field-error", role: "alert", children: errors[field] }, void 0, false, {
    fileName: "app/routes/submit-post.tsx",
    lineNumber: 227,
    columnNumber: 21
  }, this) : null;
  if (actionData == null ? void 0 : actionData.success) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page ad-booking-page tips-page", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedTopbar, { hidden: reached, onSubscribe: handleTopbarSubscribe }, void 0, false, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 232,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "ad-booking-card ad-success-card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-booking-header", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "ad-booking-title", children: "Post received" }, void 0, false, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 235,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ad-booking-sub", children: "Thank you for sending this our way. We'll take a look." }, void 0, false, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 236,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 234,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "back-btn ad-success-btn", children: "\u2190 Return to thepoast" }, void 0, false, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 238,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 239,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 233,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: footerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedFooter, { covered: bannerVisible }, void 0, false, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 242,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 241,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedSubscribeBanner, { visible: bannerVisible, forceExpanded: expandBanner }, void 0, false, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 244,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 231,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page ad-booking-page tips-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedTopbar, { hidden: reached, onSubscribe: handleTopbarSubscribe }, void 0, false, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 251,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "ad-booking-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-badge", children: "Submit a Post" }, void 0, false, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 255,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "ad-booking-form", children: [
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-form-error", role: "alert", children: actionData.error }, void 0, false, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 259,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", children: "Name" }, void 0, false, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 263,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "name", name: "name", placeholder: "Name *" }, void 0, false, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 264,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 262,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Email" }, void 0, false, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 267,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "email", name: "email", required: true, placeholder: "Email *" }, void 0, false, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 268,
              columnNumber: 15
            }, this),
            fieldError("email")
          ] }, void 0, true, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 266,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 261,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "topic", children: "Submission" }, void 0, false, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 275,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "topic", name: "topic", defaultValue: "", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", disabled: true, children: "Pick one..." }, void 0, false, {
                fileName: "app/routes/submit-post.tsx",
                lineNumber: 277,
                columnNumber: 17
              }, this),
              TOPICS.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: t, children: t }, t, false, {
                fileName: "app/routes/submit-post.tsx",
                lineNumber: 278,
                columnNumber: 36
              }, this))
            ] }, void 0, true, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 276,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 274,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "credit", children: "If we use it" }, void 0, false, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 282,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "credit", name: "credit", defaultValue: "credit", children: CREDIT_OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: o.value, children: o.label }, o.value, false, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 284,
              columnNumber: 44
            }, this)) }, void 0, false, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 283,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 281,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 273,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "tip", children: "Description" }, void 0, false, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 290,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "tip", name: "tip", rows: 6, required: true, placeholder: "What should we know?" }, void 0, false, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 291,
            columnNumber: 13
          }, this),
          fieldError("tip")
        ] }, void 0, true, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 289,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "source", children: "Link to post (optional)" }, void 0, false, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 296,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "source", name: "source", placeholder: "https://" }, void 0, false, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 297,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 295,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: TIPS_LIST_FIELD_ID, type: "hidden", name: "l", value: TIPS_LIST_UUID }, void 0, false, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 300,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "nonce", className: "hp-field", tabIndex: -1, autoComplete: "off" }, void 0, false, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 301,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "ad-submit-btn", children: "Submit Post" }, void 0, false, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 303,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe-altcha", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 306,
            columnNumber: 13
          }, this),
          fieldError("altcha")
        ] }, void 0, true, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 305,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 258,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-legal", children: [
        "By submitting, you agree to our",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 313,
          columnNumber: 13
        }, this),
        " &",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 314,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 311,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "back-btn", children: "\u2190 Return to thepoast" }, void 0, false, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 317,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 319,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: footerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedFooter, { covered: bannerVisible }, void 0, false, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 323,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 322,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedSubscribeBanner, { visible: bannerVisible, forceExpanded: expandBanner }, void 0, false, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 326,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/submit-post.tsx",
    lineNumber: 250,
    columnNumber: 5
  }, this);
}
export {
  Tips as default,
  meta
};
//# sourceMappingURL=/build/routes/submit-post-GAKBNPPN.js.map
