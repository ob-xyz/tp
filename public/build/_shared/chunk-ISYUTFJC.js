import {
  Link,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FZOAUUQ7.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/style/scss/components/showscroll.css
var showscroll_default = "/build/_assets/showscroll-FNF7IES6.css";

// app/components/legal-page.tsx
var import_react2 = __toESM(require_react());

// public/img/tp.png
var tp_default = "/build/_assets/tp-AMW7IQ4E.png";

// app/components/legal-page.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function LegalPage({
  title,
  effective,
  toc,
  children
}) {
  const [showStickyNav, setShowStickyNav] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    const handleScroll = () => setShowStickyNav(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content-privacy", id: "top-of-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `sticky-nav${showStickyNav ? " visible" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "sticky-logo", to: "/", "aria-label": "The Poast home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: tp_default, alt: "The Poast", loading: "lazy", decoding: "async" }, void 0, false, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribe", className: "sticky-subscribe", children: "Subscribe" }, void 0, false, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/legal-page.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "logo", "aria-label": "The Poast home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: tp_default, alt: "The Poast Logo" }, void 0, false, {
      fileName: "app/components/legal-page.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/legal-page.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "content-privacy2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
          title,
          "."
        ] }, void 0, true, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        "Effective: ",
        effective,
        "."
      ] }, void 0, true, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      toc && toc.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "legal-toc", "aria-label": "On this page", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "legal-toc-label", children: "On this page" }, void 0, false, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { children: toc.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `#${item.id}`, children: item.label }, void 0, false, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 59,
          columnNumber: 19
        }, this) }, item.id, false, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 58,
          columnNumber: 17
        }, this)) }, void 0, false, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "legal-top", to: "/", children: "\u2190 Back to thepoast" }, void 0, false, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/legal-page.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/legal-page.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

export {
  showscroll_default,
  LegalPage
};
//# sourceMappingURL=/build/_shared/chunk-ISYUTFJC.js.map
