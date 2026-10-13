import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  init_dist,
  require_jsx_dev_runtime,
  require_react,
  useLocation,
  useNavigationType
} from "/build/_shared/chunk-OZ7KCFHT.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/root.tsx
var import_react = __toESM(require_react());
init_dist();

// app/style/global/global.css
var global_default = "/build/_assets/global-7UZM35VS.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/png"
    },
    {
      rel: "stylesheet",
      href: global_default
    }
  ];
};
var meta = () => ({
  charset: "utf-8",
  title: "thepoast - no log in. no sign up.",
  description: "We're making the front page of the internet fun again. Just visit and scroll all the top stuff. No log in. No sign up. No account required.",
  viewport: "width=device-width,initial-scale=1"
});
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();
  (0, import_react.useEffect)(() => {
    if (hash || navType === "POP")
      return;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname, hash, navType]);
  return null;
}
function App() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "thepoast",
    "alternateName": ["the poast", "The Poast Newsletter", "thepoast.com", "the poast feed", "the poast website", "poast", "poast app", "the poast app", "the poast news"],
    "url": "https://thepoast.com",
    "logo": "https://thepoast.com/favicon.ico",
    "description": "Just open and scroll whenever you like. No account required."
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "color-scheme", content: "light dark" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "meta",
        {
          name: "theme-color",
          content: "#ffffff",
          media: "(prefers-color-scheme: light)"
        },
        void 0,
        false,
        {
          fileName: "app/root.tsx",
          lineNumber: 72,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "meta",
        {
          name: "theme-color",
          content: "#050505",
          media: "(prefers-color-scheme: dark)"
        },
        void 0,
        false,
        {
          fileName: "app/root.tsx",
          lineNumber: 77,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "script",
        {
          type: "application/ld+json",
          dangerouslySetInnerHTML: {
            __html: JSON.stringify(schemaData)
          }
        },
        void 0,
        false,
        {
          fileName: "app/root.tsx",
          lineNumber: 83,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollToTop, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-LX3XTEAE.js.map
