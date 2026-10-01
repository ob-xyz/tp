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

// app/routes/feeds.tsx
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
var MAX_CONCURRENT = 2;
var active = 0;
var waiting = [];
function schedule(task, priority = false) {
  return new Promise(
    (resolve, reject) => {
      const run = () => {
        active++;
        task().then(resolve, reject).finally(() => {
          var _a;
          active--;
          (_a = waiting.shift()) == null ? void 0 : _a();
        });
      };
      if (priority || active < MAX_CONCURRENT) {
        run();
      } else {
        waiting.push(run);
      }
    }
  );
}
var sleep = (ms) => new Promise(
  (resolve) => setTimeout(resolve, ms)
);
async function fetchIssue(id, signal) {
  const url = `/feeds/full/${encodeURIComponent(id)}`;
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
          `Issue request failed: ${response.status}`
        );
      }
      const text = await response.text();
      if (!text) {
        throw new Error(
          "Empty issue"
        );
      }
      return text;
    } catch (error) {
      if (signal.aborted) {
        throw error;
      }
      lastError = error;
      await sleep(
        300 * (attempt + 1)
      );
    }
  }
  throw lastError;
}
function FeedCard({
  feed,
  priority
}) {
  var _a;
  const ref = (0, import_react.useRef)(null);
  const [html, setHtml] = (0, import_react.useState)(null);
  const [failed, setFailed] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (html || failed) {
      return;
    }
    const controller = new AbortController();
    const load = () => {
      schedule(
        () => fetchIssue(
          feed.id,
          controller.signal
        ),
        priority
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
          `[feeds] Failed to load issue ${feed.id}:`,
          error
        );
        setFailed(true);
      });
    };
    if (priority) {
      load();
      return () => {
        controller.abort();
      };
    }
    const element = ref.current;
    if (!element) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!(entry == null ? void 0 : entry.isIntersecting)) {
          return;
        }
        observer.disconnect();
        load();
      },
      {
        /*
         * Load substantially ahead of the
         * reader so scrolling feels instant.
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
    failed,
    priority
  ]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "section",
    {
      className: "feed-archive-item",
      "data-feed-id": feed.id,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, children: html ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        feed_embed_default,
        {
          id: feed.id,
          html,
          title: feed.subject,
          interactive: true,
          fallbackHeight: 900
        },
        void 0,
        false,
        {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 389,
          columnNumber: 11
        },
        this
      ) : failed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: `/feeds/${feed.id}`,
          prefetch: "intent",
          className: "feeds-empty feed-fallback",
          style: {
            display: "block",
            padding: "32px 24px",
            textAlign: "center",
            textDecoration: "none",
            color: "inherit"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: feed.subject }, void 0, false, {
              fileName: "app/routes/feeds.tsx",
              lineNumber: 409,
              columnNumber: 13
            }, this),
            feed.dateLabel && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                style: {
                  opacity: 0.6,
                  marginTop: 6
                },
                children: feed.dateLabel
              },
              void 0,
              false,
              {
                fileName: "app/routes/feeds.tsx",
                lineNumber: 414,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                style: {
                  opacity: 0.6,
                  marginTop: 6
                },
                children: "Read this edition"
              },
              void 0,
              false,
              {
                fileName: "app/routes/feeds.tsx",
                lineNumber: 424,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 397,
          columnNumber: 11
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "feeds-skeleton feed-lazy-placeholder",
          "aria-hidden": "true",
          style: {
            width: "100%",
            height: (_a = getCachedHeight(
              feed.id,
              true
            )) != null ? _a : 900
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 434,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/feeds.tsx",
        lineNumber: 387,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 383,
      columnNumber: 5
    },
    this
  );
}
function Feeds() {
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
              fileName: "app/routes/feeds.tsx",
              lineNumber: 471,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 467,
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
          fileName: "app/routes/feeds.tsx",
          lineNumber: 478,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 466,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feeds-stream", children: feeds.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feeds-empty", children: degraded ? "The archive is taking a moment. Please refresh shortly." : "No feeds yet." }, void 0, false, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 488,
      columnNumber: 11
    }, this) : feeds.map(
      (feed, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        FeedCard,
        {
          feed,
          priority: index === 0
        },
        feed.id,
        false,
        {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 496,
          columnNumber: 15
        },
        this
      )
    ) }, void 0, false, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 486,
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
                fileName: "app/routes/feeds.tsx",
                lineNumber: 515,
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
                    fileName: "app/routes/feeds.tsx",
                    lineNumber: 520,
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
                    fileName: "app/routes/feeds.tsx",
                    lineNumber: 528,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/feeds.tsx",
                lineNumber: 519,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
                fileName: "app/routes/feeds.tsx",
                lineNumber: 537,
                columnNumber: 13
              }, this) }, void 0, false, {
                fileName: "app/routes/feeds.tsx",
                lineNumber: 536,
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
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 540,
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
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 547,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "feed-legal", children: [
                "By submitting, you agree to our",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "Terms" }, void 0, false, {
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 554,
                  columnNumber: 13
                }, this),
                " ",
                "&",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, false, {
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 558,
                  columnNumber: 13
                }, this),
                ".",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 562,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 563,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/tips", children: "Tips" }, void 0, false, {
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 564,
                  columnNumber: 13
                }, this),
                " \xB7 ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/media-kit", children: "Media Kit" }, void 0, false, {
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 566,
                  columnNumber: 13
                }, this),
                " \xB7 ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", children: "About" }, void 0, false, {
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 568,
                  columnNumber: 13
                }, this),
                " \xB7 ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/latest", children: "Latest" }, void 0, false, {
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 570,
                  columnNumber: 13
                }, this),
                " \xB7 ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/book", children: "Advertise" }, void 0, false, {
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 572,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/feeds.tsx",
                lineNumber: 552,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/feeds.tsx",
            lineNumber: 510,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/feeds.tsx",
        lineNumber: 506,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/feeds.tsx",
    lineNumber: 465,
    columnNumber: 5
  }, this);
}
export {
  Feeds as default,
  links,
  shouldRevalidate
};
//# sourceMappingURL=/build/routes/feeds-AWZWHP7W.js.map
