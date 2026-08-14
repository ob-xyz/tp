import {
  showscroll_default
} from "/build/_shared/chunk-MG3UHPBD.js";
import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  AltchaWrapper
} from "/build/_shared/chunk-552RS725.js";
import {
  info_default
} from "/build/_shared/chunk-JOIKWTUL.js";
import {
  ja6_default
} from "/build/_shared/chunk-HUXGSKMG.js";
import {
  instagram_default,
  linkedin_default,
  x_default,
  youtube_default
} from "/build/_shared/chunk-BKRGPCP6.js";
import {
  ja_default
} from "/build/_shared/chunk-XIGSDZZU.js";
import {
  Link,
  useActionData,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-FKFAHRPY.js";
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
var links = () => [{ rel: "stylesheet", href: showscroll_default }];
function shouldRevalidate() {
  return false;
}
var CACHE_TTL_MS = 10 * 60 * 1e3;
function Index() {
  const { articles } = useLoaderData();
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    showModal && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modal-overlay", onClick: () => setShowModal(false), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modal-content", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "", src: ja6_default, alt: "The Poast" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 267,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Trusted by 35,000+ execs and builders" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 268,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Know who's winning the AI arms race with this free newsletter" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 269,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Just scroll The Poast to keep score." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 270,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", action: "https://app.thepoast.com/subscription/form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "email", name: "email", required: true, placeholder: "Email Address *" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 273,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "submit", type: "submit", children: navigation.state === "submitting" ? "..." : "Subscribe" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 274,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 272,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 278,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", defaultChecked: true, value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 279,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 280,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 271,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "dismiss-text", onClick: () => setShowModal(false), children: "No thanks! I'm already subscribed" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 282,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 266,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 265,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "logo", src: ja_default, alt: "The Poast Logo" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 292,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "info", to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: info_default, alt: "More Info" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 294,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 293,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 291,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "This free newsletter is the fastest way to know who's winning the AI arms race." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 297,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Every day, 35,000+ execs and builders scroll The Poast to check the leader board." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 298,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "outer-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "x", href: "https://x.com/thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: x_default, alt: "X (Twitter)" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 303,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 302,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "ig", href: "https://instagram.com/thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: instagram_default, alt: "Instagram" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 306,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 305,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "li", href: "https://linkedin.com/company/thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: linkedin_default, alt: "LinkedIn" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 309,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 308,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "yt", href: "https://youtube.com/@thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: youtube_default, alt: "YouTube" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 312,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 311,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 301,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 300,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribe", children: "Subscribe" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 317,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 316,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 299,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "headerimg", src: ja6_default, alt: "The Poast" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 320,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 290,
      columnNumber: 7
    }, this),
    articles && articles.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feed-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "article-grid", children: articles.map(
      (article) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: `/articles/${article.id}`,
          className: "article-card-link",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "feed-card", children: [
            article.coverImage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-image-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: article.coverImage, alt: article.subject }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 336,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 335,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-content", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "card-date", children: new Date(article.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
              }) }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 340,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "card-title", children: article.subject }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 347,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "card-excerpt", children: article.excerpt }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 348,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/index.tsx",
              lineNumber: 339,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 333,
            columnNumber: 17
          }, this)
        },
        article.id,
        false,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 328,
          columnNumber: 11
        },
        this
      )
    ) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 326,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 325,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 262,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  shouldRevalidate
};
//# sourceMappingURL=/build/routes/index-T2H4SLAD.js.map
