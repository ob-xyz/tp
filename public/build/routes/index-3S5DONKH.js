import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  ja7_default
} from "/build/_shared/chunk-LBBDUB7R.js";
import {
  instagram_default,
  linkedin_default,
  x_default,
  youtube_default
} from "/build/_shared/chunk-BKRGPCP6.js";
import {
  Link,
  useActionData,
  useNavigation
} from "/build/_shared/chunk-ROHSLC5J.js";
import {
  ja_default
} from "/build/_shared/chunk-XIGSDZZU.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-S4ZNHW4H.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/index.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const [showModal, setShowModal] = (0, import_react.useState)(false);
  const navigation = useNavigation();
  const actionData = useActionData();
  (0, import_react.useEffect)(() => {
    const isSubscribed = localStorage.getItem("thepoast_subscribed");
    const hasSeenThisSession = sessionStorage.getItem("thepoast_seen_session");
    if (!isSubscribed && !hasSeenThisSession) {
      const timer = setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem("thepoast_seen_session", "true");
      }, 1e3);
      return () => clearTimeout(timer);
    }
  }, []);
  (0, import_react.useEffect)(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape")
        setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  (0, import_react.useEffect)(() => {
    if (actionData == null ? void 0 : actionData.success) {
      localStorage.setItem("thepoast_subscribed", "true");
      setShowModal(false);
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "logo", src: ja_default, alt: "The Poast Logo" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Feed your curiosity" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Sign up to get updates about our app coming soon." }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "outer-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "social", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "x", href: "https://x.com/thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: x_default, alt: "X (Twitter)" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 98,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 97,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "ig", href: "https://instagram.com/thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: instagram_default, alt: "Instagram" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 101,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 100,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "li", href: "https://linkedin.com/company/thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: linkedin_default, alt: "LinkedIn" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 104,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 103,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "yt", href: "https://youtube.com/@thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: youtube_default, alt: "YouTube" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 107,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 106,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribe", children: "Sign\xA0up" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 112,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 94,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "headerimg", src: ja7_default, alt: "The Poast" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 115,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-3S5DONKH.js.map
