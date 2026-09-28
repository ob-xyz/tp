import {
  AltchaWrapper
} from "/build/_shared/chunk-RRHCSPIX.js";
import {
  showscroll_default
} from "/build/_shared/chunk-MG3UHPBD.js";
import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-X32F4JRF.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/$.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: showscroll_default },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
];
var SENT_CHECK_TTL_MS = 60 * 1e3;
var SENT_CONTENT_TTL_MS = 30 * 60 * 1e3;
var DRAFT_CONTENT_TTL_MS = 30 * 1e3;
function FeedEmbed({ html, title }) {
  const iframeRef = (0, import_react.useRef)(null);
  const [loaded, setLoaded] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const frame = iframeRef.current;
    if (!frame)
      return;
    const updateHeight = () => {
      var _a, _b;
      const doc2 = frame.contentDocument;
      if (doc2) {
        const height = Math.max(
          ((_a = doc2.documentElement) == null ? void 0 : _a.scrollHeight) || 0,
          ((_b = doc2.body) == null ? void 0 : _b.scrollHeight) || 0
        );
        if (height > 0) {
          frame.style.height = `${height}px`;
          setLoaded(true);
        }
      }
    };
    updateHeight();
    const doc = frame.contentDocument;
    if (doc) {
      doc.addEventListener("DOMContentLoaded", updateHeight);
      if (doc.body && typeof ResizeObserver !== "undefined") {
        const observer = new ResizeObserver(updateHeight);
        observer.observe(doc.body);
        return () => observer.disconnect();
      }
    }
  }, [html]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `feed-embed${loaded ? " loaded" : ""}`, children: [
    !loaded && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-skeleton", style: { minHeight: "400px" } }, void 0, false, {
      fileName: "app/routes/$.tsx",
      lineNumber: 442,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "iframe",
      {
        ref: iframeRef,
        srcDoc: html,
        title,
        onLoad: () => {
          var _a, _b;
          const frame = iframeRef.current;
          if (frame == null ? void 0 : frame.contentDocument) {
            const height = Math.max(
              ((_a = frame.contentDocument.documentElement) == null ? void 0 : _a.scrollHeight) || 0,
              ((_b = frame.contentDocument.body) == null ? void 0 : _b.scrollHeight) || 0
            );
            if (height > 0)
              frame.style.height = `${height}px`;
          }
          setLoaded(true);
        },
        loading: "eager",
        sandbox: "allow-same-origin allow-popups allow-popups-to-escape-sandbox",
        scrolling: "no"
      },
      void 0,
      false,
      {
        fileName: "app/routes/$.tsx",
        lineNumber: 444,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/$.tsx",
    lineNumber: 441,
    columnNumber: 5
  }, this);
}
function Index() {
  const { mode, issue } = useLoaderData();
  const isDraft = mode === "draft";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "feed-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: "/img/ja.png",
          alt: "The Poast",
          loading: "eager",
          decoding: "async"
        },
        void 0,
        false,
        {
          fileName: "app/routes/$.tsx",
          lineNumber: 479,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/$.tsx",
        lineNumber: 478,
        columnNumber: 9
      }, this),
      isDraft && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-status", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "status-dot" }, void 0, false, {
          fileName: "app/routes/$.tsx",
          lineNumber: 489,
          columnNumber: 13
        }, this),
        "404 Error"
      ] }, void 0, true, {
        fileName: "app/routes/$.tsx",
        lineNumber: 488,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#subscribe", className: "feed-subscribe", children: "Subscribe" }, void 0, false, {
        fileName: "app/routes/$.tsx",
        lineNumber: 494,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/$.tsx",
      lineNumber: 477,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feed-stream", children: issue ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedEmbed, { html: issue.body, title: issue.subject }, issue.id, false, {
      fileName: "app/routes/$.tsx",
      lineNumber: 501,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-empty", children: "Check back soon for today\u2019s issue." }, void 0, false, {
      fileName: "app/routes/$.tsx",
      lineNumber: 503,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/$.tsx",
      lineNumber: 499,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "feed-footer", id: "subscribe", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "form",
      {
        method: "post",
        action: "https://app.thepoast.com/subscription/form",
        className: "feed-subscribe-form",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "feed-subscribe-heading", children: "Get The Poast sent to you" }, void 0, false, {
            fileName: "app/routes/$.tsx",
            lineNumber: 512,
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
                placeholder: "Email Address *"
              },
              void 0,
              false,
              {
                fileName: "app/routes/$.tsx",
                lineNumber: 516,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "feed-submit", type: "submit", children: "Subscribe" }, void 0, false, {
              fileName: "app/routes/$.tsx",
              lineNumber: 523,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/$.tsx",
            lineNumber: 515,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
            fileName: "app/routes/$.tsx",
            lineNumber: 530,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/routes/$.tsx",
            lineNumber: 529,
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
              lineNumber: 534,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
            fileName: "app/routes/$.tsx",
            lineNumber: 540,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "feed-legal", children: [
            "By submitting, you agree to our",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "Terms" }, void 0, false, {
              fileName: "app/routes/$.tsx",
              lineNumber: 545,
              columnNumber: 13
            }, this),
            " &",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, false, {
              fileName: "app/routes/$.tsx",
              lineNumber: 546,
              columnNumber: 13
            }, this),
            "."
          ] }, void 0, true, {
            fileName: "app/routes/$.tsx",
            lineNumber: 543,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/$.tsx",
        lineNumber: 507,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/$.tsx",
      lineNumber: 506,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$.tsx",
    lineNumber: 476,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/$-5HCBRBDN.js.map
