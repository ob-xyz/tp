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

// app/routes/home.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: showscroll_default },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
];
function shouldRevalidate() {
  return false;
}
var CACHE_TTL_MS = 10 * 60 * 1e3;
function Index() {
  const { articles } = useLoaderData();
  const [showModal, setShowModal] = (0, import_react.useState)(false);
  const [showStickyNav, setShowStickyNav] = (0, import_react.useState)(false);
  const headerImgRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const isSubscribed = localStorage.getItem(
      "thepoast_subscribed"
    );
    const hasSeenThisSession = sessionStorage.getItem(
      "thepoast_seen_session"
    );
    if (isSubscribed || hasSeenThisSession) {
      return;
    }
    const timer = window.setTimeout(() => {
      setShowModal(true);
      sessionStorage.setItem(
        "thepoast_seen_session",
        "true"
      );
    }, 1e3);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  (0, import_react.useEffect)(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };
    window.addEventListener(
      "keydown",
      handleEsc
    );
    return () => {
      window.removeEventListener(
        "keydown",
        handleEsc
      );
    };
  }, []);
  (0, import_react.useEffect)(() => {
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > 300);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `sticky-nav${showStickyNav ? " visible" : ""}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "sticky-logo", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: "/img/ja.png",
              alt: "The Poast",
              loading: "lazy",
              decoding: "async"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home.tsx",
              lineNumber: 536,
              columnNumber: 46
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/home.tsx",
            lineNumber: 536,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Link,
            {
              to: "/subscribe",
              className: "sticky-subscribe",
              children: "Subscribe"
            },
            void 0,
            false,
            {
              fileName: "app/routes/home.tsx",
              lineNumber: 543,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/home.tsx",
        lineNumber: 531,
        columnNumber: 7
      },
      this
    ),
    showModal && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "modal-overlay",
        onClick: () => setShowModal(false),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "modal-content",
            onClick: (event) => event.stopPropagation(),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  src: "/img/ja6.png",
                  alt: "The Poast",
                  loading: "eager",
                  decoding: "async"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 565,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The most interesting people and posts. Every day." }, void 0, false, {
                fileName: "app/routes/home.tsx",
                lineNumber: 572,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Get The Poast for free" }, void 0, false, {
                fileName: "app/routes/home.tsx",
                lineNumber: 576,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subscribe to a daily feed of the most interesting people and posts." }, void 0, false, {
                fileName: "app/routes/home.tsx",
                lineNumber: 580,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "form",
                {
                  method: "post",
                  action: "https://app.thepoast.com/subscription/form",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "input",
                        {
                          className: "email",
                          type: "email",
                          name: "email",
                          required: true,
                          placeholder: "Email Address *"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/home.tsx",
                          lineNumber: 589,
                          columnNumber: 17
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "button",
                        {
                          className: "submit",
                          type: "submit",
                          children: "Subscribe"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/home.tsx",
                          lineNumber: 597,
                          columnNumber: 17
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "app/routes/home.tsx",
                      lineNumber: 588,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
                      fileName: "app/routes/home.tsx",
                      lineNumber: 605,
                      columnNumber: 15
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
                        fileName: "app/routes/home.tsx",
                        lineNumber: 607,
                        columnNumber: 15
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
                        fileName: "app/routes/home.tsx",
                        lineNumber: 614,
                        columnNumber: 15
                      },
                      this
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 584,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "dismiss-text",
                  onClick: () => setShowModal(false),
                  children: "No thanks! I'm already subscribed"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 620,
                  columnNumber: 13
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/home.tsx",
            lineNumber: 559,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/home.tsx",
        lineNumber: 553,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: "/img/ja.png",
            alt: "The Poast Logo",
            loading: "eager",
            decoding: "async"
          },
          void 0,
          false,
          {
            fileName: "app/routes/home.tsx",
            lineNumber: 638,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/home.tsx",
          lineNumber: 637,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            className: "info",
            to: "/info",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                src: "/img/social/info.png",
                alt: "More Info",
                loading: "lazy",
                decoding: "async"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home.tsx",
                lineNumber: 650,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/home.tsx",
            lineNumber: 646,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/home.tsx",
        lineNumber: 636,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "The most interesting people and posts" }, void 0, false, {
        fileName: "app/routes/home.tsx",
        lineNumber: 659,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Get the best posts from the most interesting people with a side of snarky comments, every day." }, void 0, false, {
        fileName: "app/routes/home.tsx",
        lineNumber: 661,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "outer-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              className: "x",
              href: "https://x.com/thepoast",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  src: "/img/social/x.png",
                  alt: "X (Twitter)",
                  loading: "lazy",
                  decoding: "async"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 676,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/home.tsx",
              lineNumber: 670,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              className: "ig",
              href: "https://instagram.com/thepoast",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  src: "/img/social/instagram.png",
                  alt: "Instagram",
                  loading: "lazy",
                  decoding: "async"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 690,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/home.tsx",
              lineNumber: 684,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              className: "li",
              href: "https://linkedin.com/company/thepoast",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  src: "/img/social/linkedin.png",
                  alt: "LinkedIn",
                  loading: "lazy",
                  decoding: "async"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 704,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/home.tsx",
              lineNumber: 698,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              className: "yt",
              href: "https://youtube.com/@thepoast",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  src: "/img/social/youtube.png",
                  alt: "YouTube",
                  loading: "lazy",
                  decoding: "async"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 718,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/home.tsx",
              lineNumber: 712,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/home.tsx",
          lineNumber: 668,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/home.tsx",
          lineNumber: 667,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribe", children: "Subscribe" }, void 0, false, {
          fileName: "app/routes/home.tsx",
          lineNumber: 730,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/home.tsx",
          lineNumber: 729,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home.tsx",
        lineNumber: 665,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home.tsx",
      lineNumber: 634,
      columnNumber: 7
    }, this),
    articles.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feed-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "article-grid", children: articles.map(
      (article, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: `/articles/${article.id}`,
          className: "article-card-link",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "feed-card", children: [
            article.coverImage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-image-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                src: article.coverImage,
                alt: article.subject,
                loading: index < 3 ? "eager" : "lazy",
                decoding: "async"
              },
              void 0,
              false,
              {
                fileName: "app/routes/home.tsx",
                lineNumber: 756,
                columnNumber: 25
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/home.tsx",
              lineNumber: 755,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-content", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "card-date", children: new Date(
                article.date
              ).toLocaleDateString(
                "en-US",
                {
                  month: "short",
                  day: "numeric",
                  year: "numeric"
                }
              ) }, void 0, false, {
                fileName: "app/routes/home.tsx",
                lineNumber: 771,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "card-title", children: article.subject }, void 0, false, {
                fileName: "app/routes/home.tsx",
                lineNumber: 784,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "card-excerpt", children: article.excerpt }, void 0, false, {
                fileName: "app/routes/home.tsx",
                lineNumber: 788,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/home.tsx",
              lineNumber: 769,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/home.tsx",
            lineNumber: 752,
            columnNumber: 19
          }, this)
        },
        article.id,
        false,
        {
          fileName: "app/routes/home.tsx",
          lineNumber: 747,
          columnNumber: 13
        },
        this
      )
    ) }, void 0, false, {
      fileName: "app/routes/home.tsx",
      lineNumber: 741,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/home.tsx",
      lineNumber: 739,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home.tsx",
    lineNumber: 528,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  shouldRevalidate
};
//# sourceMappingURL=/build/routes/home-KBRMQ44D.js.map
