import {
  require_poast_feeds
} from "/build/_shared/chunk-SHUQLU4M.js";
import {
  feed_embed_default,
  getCachedHeight
} from "/build/_shared/chunk-UJL6FION.js";
import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  AltchaWrapper
} from "/build/_shared/chunk-WU4J6WKT.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-77KVK7YT.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/latest.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_poast_feeds = __toESM(require_poast_feeds());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  {
    rel: "preconnect",
    href: "https://img.thepoast.com"
  },
  {
    rel: "dns-prefetch",
    href: "https://img.thepoast.com"
  }
];
function shouldRevalidate() {
  return false;
}
var MAX_CONCURRENT = 3;
var active = 0;
var waiting = [];
function schedule(task) {
  return new Promise((resolve, reject) => {
    const run = () => {
      active++;
      task().then(resolve, reject).finally(() => {
        var _a;
        active--;
        (_a = waiting.shift()) == null ? void 0 : _a();
      });
    };
    if (active < MAX_CONCURRENT) {
      run();
    } else {
      waiting.push(run);
    }
  });
}
var sleep = (ms) => new Promise(
  (resolve) => setTimeout(resolve, ms)
);
async function fetchLead(id, signal) {
  const url = `/feeds/preview/${encodeURIComponent(id)}`;
  let lastError;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (signal.aborted) {
      throw new DOMException(
        "Aborted",
        "AbortError"
      );
    }
    try {
      const response = await fetch(url, {
        signal,
        headers: {
          Accept: "text/html"
        }
      });
      if (response.status === 404) {
        return null;
      }
      if (!response.ok) {
        throw new Error(
          `Preview failed: ${response.status}`
        );
      }
      const text = await response.text();
      if (!text) {
        throw new Error("Empty preview");
      }
      return text;
    } catch (error) {
      if (signal.aborted) {
        throw error;
      }
      lastError = error;
      await sleep(500 * (attempt + 1));
    }
  }
  throw lastError;
}
function formatDate(date) {
  try {
    return new Date(date).toLocaleDateString(
      "en-CA",
      {
        timeZone: "America/Toronto",
        dateStyle: "long"
      }
    );
  } catch {
    return "";
  }
}
function FeedCard({
  feed
}) {
  var _a;
  const ref = (0, import_react.useRef)(null);
  const [html, setHtml] = (0, import_react.useState)(
    null
  );
  const [failed, setFailed] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (html || failed)
      return;
    const element = ref.current;
    if (!element)
      return;
    const controller = new AbortController();
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!(entry == null ? void 0 : entry.isIntersecting)) {
          return;
        }
        observer.disconnect();
        schedule(
          () => fetchLead(
            feed.id,
            controller.signal
          )
        ).then((result) => {
          if (controller.signal.aborted) {
            return;
          }
          if (result) {
            setHtml(result);
          } else {
            setFailed(true);
          }
        }).catch((error) => {
          if (controller.signal.aborted) {
            return;
          }
          console.error(
            `[feeds] Failed to load feed ${feed.id}:`,
            error
          );
          setFailed(true);
        });
      },
      {
        /*
         * Start loading well before the user reaches
         * the card so scrolling feels instantaneous.
         */
        rootMargin: "1800px 0px",
        threshold: 0
      }
    );
    observer.observe(element);
    return () => {
      controller.abort();
      observer.disconnect();
    };
  }, [
    feed.id,
    html,
    failed
  ]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "section",
    {
      className: "feed-archive-item",
      "data-feed-id": feed.id,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          ref,
          style: {
            position: "relative"
          },
          children: html ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              feed_embed_default,
              {
                id: feed.id,
                html,
                title: feed.subject
              },
              void 0,
              false,
              {
                fileName: "app/routes/latest.tsx",
                lineNumber: 341,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: `/feeds/${feed.id}`,
                prefetch: "intent",
                "aria-label": `Read: ${feed.subject}`,
                style: {
                  position: "absolute",
                  inset: 0,
                  zIndex: 1
                }
              },
              void 0,
              false,
              {
                fileName: "app/routes/latest.tsx",
                lineNumber: 347,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/latest.tsx",
            lineNumber: 340,
            columnNumber: 11
          }, this) : failed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Link,
            {
              to: `/feeds/${feed.id}`,
              prefetch: "intent",
              className: "feed-fallback",
              style: {
                display: "block",
                padding: "32px 24px",
                textAlign: "center",
                textDecoration: "none",
                color: "inherit"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: feed.subject }, void 0, false, {
                  fileName: "app/routes/latest.tsx",
                  lineNumber: 371,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    style: {
                      opacity: 0.6,
                      marginTop: 6
                    },
                    children: formatDate(feed.date)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/latest.tsx",
                    lineNumber: 375,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/latest.tsx",
              lineNumber: 359,
              columnNumber: 11
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "feed-lazy-placeholder",
              "aria-hidden": "true",
              style: {
                width: "100%",
                height: (_a = getCachedHeight(feed.id)) != null ? _a : 360
              }
            },
            void 0,
            false,
            {
              fileName: "app/routes/latest.tsx",
              lineNumber: 385,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/latest.tsx",
          lineNumber: 333,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/routes/latest.tsx",
      lineNumber: 329,
      columnNumber: 5
    },
    this
  );
}
function Today() {
  const {
    feeds,
    degraded
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feeds-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "feed-topbar", children: [
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
              fileName: "app/routes/latest.tsx",
              lineNumber: 418,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/latest.tsx",
          lineNumber: 414,
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
          fileName: "app/routes/latest.tsx",
          lineNumber: 425,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/latest.tsx",
      lineNumber: 413,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feeds-stream", children: feeds.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "feeds-empty", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: degraded ? "The archive is taking a moment. Please refresh shortly." : "No feeds yet." }, void 0, false, {
      fileName: "app/routes/latest.tsx",
      lineNumber: 436,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/latest.tsx",
      lineNumber: 435,
      columnNumber: 11
    }, this) : feeds.map((feed) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      FeedCard,
      {
        feed
      },
      feed.id,
      false,
      {
        fileName: "app/routes/latest.tsx",
        lineNumber: 444,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/latest.tsx",
      lineNumber: 433,
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
                fileName: "app/routes/latest.tsx",
                lineNumber: 461,
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
                    fileName: "app/routes/latest.tsx",
                    lineNumber: 466,
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
                    fileName: "app/routes/latest.tsx",
                    lineNumber: 474,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/latest.tsx",
                lineNumber: 465,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
                fileName: "app/routes/latest.tsx",
                lineNumber: 483,
                columnNumber: 13
              }, this) }, void 0, false, {
                fileName: "app/routes/latest.tsx",
                lineNumber: 482,
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
                  fileName: "app/routes/latest.tsx",
                  lineNumber: 486,
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
                  fileName: "app/routes/latest.tsx",
                  lineNumber: 493,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "feed-legal", children: [
                "By submitting, you agree to our",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "Terms" }, void 0, false, {
                  fileName: "app/routes/latest.tsx",
                  lineNumber: 500,
                  columnNumber: 13
                }, this),
                " ",
                "&",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, false, {
                  fileName: "app/routes/latest.tsx",
                  lineNumber: 504,
                  columnNumber: 13
                }, this),
                ".",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                  fileName: "app/routes/latest.tsx",
                  lineNumber: 508,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                  fileName: "app/routes/latest.tsx",
                  lineNumber: 509,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/tips", children: "Tips" }, void 0, false, {
                  fileName: "app/routes/latest.tsx",
                  lineNumber: 510,
                  columnNumber: 13
                }, this),
                " \xB7 ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/media-kit", children: "Media Kit" }, void 0, false, {
                  fileName: "app/routes/latest.tsx",
                  lineNumber: 512,
                  columnNumber: 13
                }, this),
                " \xB7 ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", children: "About" }, void 0, false, {
                  fileName: "app/routes/latest.tsx",
                  lineNumber: 514,
                  columnNumber: 13
                }, this),
                " \xB7 ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/latest", children: "Latest" }, void 0, false, {
                  fileName: "app/routes/latest.tsx",
                  lineNumber: 516,
                  columnNumber: 13
                }, this),
                " \xB7 ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/book", children: "Advertise" }, void 0, false, {
                  fileName: "app/routes/latest.tsx",
                  lineNumber: 518,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/latest.tsx",
                lineNumber: 498,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/latest.tsx",
            lineNumber: 456,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/latest.tsx",
        lineNumber: 452,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/latest.tsx",
    lineNumber: 412,
    columnNumber: 5
  }, this);
}
export {
  Today as default,
  links,
  shouldRevalidate
};
//# sourceMappingURL=/build/routes/latest-U5LYBFBQ.js.map
