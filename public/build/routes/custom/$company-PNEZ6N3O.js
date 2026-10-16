import {
  custom_default
} from "/build/_shared/chunk-GGI5OZXV.js";
import {
  MediaKit
} from "/build/_shared/chunk-ZLL73JES.js";
import {
  NotFound
} from "/build/_shared/chunk-ZQSMLRP2.js";
import {
  feed_embed_default
} from "/build/_shared/chunk-YXZUJTC2.js";
import "/build/_shared/chunk-GHQHS7KD.js";
import "/build/_shared/chunk-YYFE5CLS.js";
import "/build/_shared/chunk-3G6G2NLL.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react,
  useCatch,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-FZOAUUQ7.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/custom/$company.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  if (!data) {
    return { title: "404 / thepoast", robots: "noindex" };
  }
  return {
    title: "thepoast"
  };
};
var links = () => [
  { rel: "stylesheet", href: custom_default },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
];
function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NotFound, {}, void 0, false, {
      fileName: "app/routes/custom/$company.tsx",
      lineNumber: 61,
      columnNumber: 12
    }, this);
  }
  throw new Error(`Unexpected response: ${caught.status}`);
}
var BANNER_TRIGGER = 0.85;
function useReachedEndOfFeed() {
  const endRef = (0, import_react.useRef)(null);
  const [reached, setReached] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const el = endRef.current;
    if (!el)
      return;
    let frame = 0;
    const check = () => {
      frame = 0;
      const top = el.getBoundingClientRect().top;
      setReached(
        window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER
      );
    };
    const schedule = () => {
      if (!frame)
        frame = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined" && el.parentElement) {
      resizeObserver = new ResizeObserver(schedule);
      resizeObserver.observe(el.parentElement);
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
function DynamicCampaignPage() {
  const { company, companyName } = useLoaderData();
  const { endRef, reached } = useReachedEndOfFeed();
  const navigate = useNavigate();
  const footerRef = (0, import_react.useRef)(null);
  const [kitOpen, setKitOpen] = (0, import_react.useState)(false);
  const bannerVisible = reached;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: `feed-topbar${reached ? " is-hidden" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/img/tp.png", alt: "thepoast", decoding: "async" }, void 0, false, {
      fileName: "app/routes/custom/$company.tsx",
      lineNumber: 127,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/custom/$company.tsx",
      lineNumber: 126,
      columnNumber: 3
    }, this) }, void 0, false, {
      fileName: "app/routes/custom/$company.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feed-stream", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mk-promo-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/${company}/book?free=1`, className: "mk-promo", children: "Book your first ad for free! Get started \u2192" }, void 0, false, {
        fileName: "app/routes/custom/$company.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/custom/$company.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-embed loaded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        feed_embed_default,
        {
          id: `${company}-campaign`,
          src: `/custom/${company}/preview`,
          title: `${companyName} x thepoast Campaign`,
          interactive: true,
          bordered: true,
          hideTopBorder: true,
          fallbackHeight: 900
        },
        void 0,
        false,
        {
          fileName: "app/routes/custom/$company.tsx",
          lineNumber: 143,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/custom/$company.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/custom/$company.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "footer",
        {
          ref: footerRef,
          className: `feed-footer${bannerVisible ? " is-covered" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-footer-links", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", children: "about" }, void 0, false, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 161,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/archive", children: "archive" }, void 0, false, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 162,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/submit-post", children: "submit post" }, void 0, false, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 163,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 164,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 165,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/book", children: "advertise" }, void 0, false, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 166,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/manager", children: "ads manager" }, void 0, false, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 167,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/custom/$company.tsx",
              lineNumber: 160,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "feed-copyright", children: "thepoast \xA9 2026" }, void 0, false, {
              fileName: "app/routes/custom/$company.tsx",
              lineNumber: 169,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/custom/$company.tsx",
          lineNumber: 156,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "aside",
        {
          className: `feed-banner${bannerVisible ? " is-visible" : ""}`,
          "aria-label": "Get Started",
          "aria-hidden": !bannerVisible,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-banner-inner", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-banner-title", children: "Better business performance, fueled by AI" }, void 0, false, {
              fileName: "app/routes/custom/$company.tsx",
              lineNumber: 178,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                type: "button",
                className: "feed-banner-btn",
                onClick: () => navigate(`/${company}/book`),
                children: "Get Started"
              },
              void 0,
              false,
              {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 182,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                type: "button",
                className: "back-btn",
                tabIndex: bannerVisible ? 0 : -1,
                onClick: () => setKitOpen(true),
                style: { marginTop: "0rem" },
                children: "Audience details"
              },
              void 0,
              false,
              {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 190,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/custom/$company.tsx",
            lineNumber: 177,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/custom/$company.tsx",
          lineNumber: 172,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/custom/$company.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      MediaKit,
      {
        open: kitOpen,
        onClose: () => setKitOpen(false),
        ctaLabel: "Get Started",
        onCta: () => navigate(`/${company}/book`)
      },
      void 0,
      false,
      {
        fileName: "app/routes/custom/$company.tsx",
        lineNumber: 204,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/custom/$company.tsx",
    lineNumber: 124,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  DynamicCampaignPage as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/custom/$company-PNEZ6N3O.js.map
