import {
  require_poast_feeds
} from "/build/_shared/chunk-SHUQLU4M.js";
import {
  feed_embed_default
} from "/build/_shared/chunk-UJL6FION.js";
import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  AltchaWrapper
} from "/build/_shared/chunk-WU4J6WKT.js";
import {
  showscroll_default
} from "/build/_shared/chunk-MG3UHPBD.js";
import {
  Link,
  isRouteErrorResponse,
  require_jsx_dev_runtime,
  useLoaderData,
  useRouteError
} from "/build/_shared/chunk-77KVK7YT.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/feeds.$id.tsx
var import_node = __toESM(require_node());
var import_poast_feeds = __toESM(require_poast_feeds());
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
var shouldRevalidate = ({
  currentParams,
  nextParams
}) => {
  return currentParams.id !== nextParams.id;
};
function TopBar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "feed-topbar", children: [
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
            decoding: "async"
          },
          void 0,
          false,
          {
            fileName: "app/routes/feeds.$id.tsx",
            lineNumber: 126,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/feeds.$id.tsx",
        lineNumber: 122,
        columnNumber: 7
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
        fileName: "app/routes/feeds.$id.tsx",
        lineNumber: 133,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/feeds.$id.tsx",
    lineNumber: 121,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : 500;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-detail-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TopBar, {}, void 0, false, {
      fileName: "app/routes/feeds.$id.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "main",
      {
        className: "feed-detail-stream",
        style: {
          padding: "64px 24px",
          textAlign: "center"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: status === 404 ? "We couldn't find that edition." : "This edition is taking a moment to load." }, void 0, false, {
            fileName: "app/routes/feeds.$id.tsx",
            lineNumber: 162,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "p",
            {
              style: {
                display: "flex",
                gap: 16,
                justifyContent: "center"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    onClick: () => window.location.reload(),
                    children: "Try again"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/feeds.$id.tsx",
                    lineNumber: 175,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/latest", children: "Back to archive" }, void 0, false, {
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 184,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/feeds.$id.tsx",
              lineNumber: 168,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/feeds.$id.tsx",
        lineNumber: 155,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/feeds.$id.tsx",
    lineNumber: 152,
    columnNumber: 5
  }, this);
}
function FeedDetail() {
  const { feed } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-detail-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TopBar, {}, void 0, false, {
      fileName: "app/routes/feeds.$id.tsx",
      lineNumber: 199,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feed-detail-stream", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      feed_embed_default,
      {
        id: feed.id,
        html: feed.body,
        title: feed.subject,
        interactive: true,
        fallbackHeight: 800
      },
      feed.id,
      false,
      {
        fileName: "app/routes/feeds.$id.tsx",
        lineNumber: 202,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/feeds.$id.tsx",
      lineNumber: 201,
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
                fileName: "app/routes/feeds.$id.tsx",
                lineNumber: 221,
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
                    fileName: "app/routes/feeds.$id.tsx",
                    lineNumber: 226,
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
                    fileName: "app/routes/feeds.$id.tsx",
                    lineNumber: 234,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/feeds.$id.tsx",
                lineNumber: 225,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
                fileName: "app/routes/feeds.$id.tsx",
                lineNumber: 243,
                columnNumber: 13
              }, this) }, void 0, false, {
                fileName: "app/routes/feeds.$id.tsx",
                lineNumber: 242,
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
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 246,
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
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 253,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "feed-legal", children: [
                "By submitting, you agree to our",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "Terms" }, void 0, false, {
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 260,
                  columnNumber: 13
                }, this),
                " ",
                "&",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, false, {
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 264,
                  columnNumber: 13
                }, this),
                ".",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 268,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 269,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/tips", children: "Tips" }, void 0, false, {
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 270,
                  columnNumber: 13
                }, this),
                " \xB7 ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/media-kit", children: "Media Kit" }, void 0, false, {
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 272,
                  columnNumber: 13
                }, this),
                " \xB7 ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", children: "About" }, void 0, false, {
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 274,
                  columnNumber: 13
                }, this),
                " \xB7 ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/latest", children: "Latest" }, void 0, false, {
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 276,
                  columnNumber: 13
                }, this),
                " \xB7 ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/book", children: "Advertise" }, void 0, false, {
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 278,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/feeds.$id.tsx",
                lineNumber: 258,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/feeds.$id.tsx",
            lineNumber: 216,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/feeds.$id.tsx",
        lineNumber: 212,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/feeds.$id.tsx",
    lineNumber: 198,
    columnNumber: 5
  }, this);
}
export {
  ErrorBoundary,
  FeedDetail as default,
  links,
  shouldRevalidate
};
//# sourceMappingURL=/build/routes/feeds.$id-JKFKQQWV.js.map
