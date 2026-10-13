import {
  require_poast_feeds
} from "/build/_shared/chunk-SHUQLU4M.js";
import {
  feed_embed_default,
  getCachedHeight
} from "/build/_shared/chunk-BMSY6SPQ.js";
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
import "/build/_shared/chunk-7DKTNVJG.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-OZ7KCFHT.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/archive.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_poast_feeds = __toESM(require_poast_feeds());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Archive / thepoast",
    description: "Create a new ad campaign for your company or brand here."
  };
};
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
var BANNER_TRIGGER = 0.75;
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
function useReachedEndOfPage() {
  const endRef = (0, import_react.useRef)(null);
  const [reached, setReached] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const element = endRef.current;
    if (!element)
      return;
    let frame = 0;
    const check = () => {
      frame = 0;
      const top = element.getBoundingClientRect().top;
      setReached(window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER);
    };
    const scheduleCheck = () => {
      if (!frame)
        frame = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", scheduleCheck, { passive: true });
    window.addEventListener("resize", scheduleCheck);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined" && element.parentElement) {
      resizeObserver = new ResizeObserver(scheduleCheck);
      resizeObserver.observe(element.parentElement);
    }
    check();
    return () => {
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      if (frame)
        cancelAnimationFrame(frame);
    };
  }, []);
  return { endRef, reached };
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
          setFailed(true);
        });
      },
      {
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
                fileName: "app/routes/archive.tsx",
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
                fileName: "app/routes/archive.tsx",
                lineNumber: 347,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/archive.tsx",
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
                  fileName: "app/routes/archive.tsx",
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
                    fileName: "app/routes/archive.tsx",
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
              fileName: "app/routes/archive.tsx",
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
              fileName: "app/routes/archive.tsx",
              lineNumber: 385,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/archive.tsx",
          lineNumber: 333,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/routes/archive.tsx",
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
  const { endRef, reached } = useReachedEndOfPage();
  const [forced, setForced] = (0, import_react.useState)(false);
  const [expandBanner, setExpandBanner] = (0, import_react.useState)(false);
  const footerRef = (0, import_react.useRef)(null);
  const previousReached = (0, import_react.useRef)(false);
  const bannerVisible = reached || forced;
  (0, import_react.useEffect)(() => {
    if (previousReached.current && !reached) {
      setForced(false);
      setExpandBanner(false);
    }
    previousReached.current = reached;
  }, [reached]);
  const handleTopbarSubscribe = (event) => {
    var _a;
    event.preventDefault();
    setForced(true);
    setExpandBanner(true);
    (_a = footerRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page feeds-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedTopbar, { hidden: reached, onSubscribe: handleTopbarSubscribe }, void 0, false, {
      fileName: "app/routes/archive.tsx",
      lineNumber: 432,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feeds-stream", children: [
      feeds.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "feeds-empty", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: degraded ? "The archive is taking a moment. Please refresh shortly." : "No feeds yet." }, void 0, false, {
        fileName: "app/routes/archive.tsx",
        lineNumber: 437,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/archive.tsx",
        lineNumber: 436,
        columnNumber: 11
      }, this) : feeds.map((feed) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        FeedCard,
        {
          feed
        },
        feed.id,
        false,
        {
          fileName: "app/routes/archive.tsx",
          lineNumber: 445,
          columnNumber: 13
        },
        this
      )),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/archive.tsx",
        lineNumber: 452,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/archive.tsx",
      lineNumber: 434,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: footerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedFooter, { covered: bannerVisible }, void 0, false, {
      fileName: "app/routes/archive.tsx",
      lineNumber: 456,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/archive.tsx",
      lineNumber: 455,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedSubscribeBanner, { visible: bannerVisible, forceExpanded: expandBanner }, void 0, false, {
      fileName: "app/routes/archive.tsx",
      lineNumber: 459,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/archive.tsx",
    lineNumber: 431,
    columnNumber: 5
  }, this);
}
export {
  Today as default,
  links,
  meta,
  shouldRevalidate
};
//# sourceMappingURL=/build/routes/archive-YYGCQXDU.js.map
