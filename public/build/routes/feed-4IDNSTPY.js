import {
  showscroll_default
} from "/build/_shared/chunk-MG3UHPBD.js";
import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-FKFAHRPY.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-S4ZNHW4H.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/feed.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [{ rel: "stylesheet", href: showscroll_default }];
function Feed() {
  const { articles } = useLoaderData();
  if (!articles || articles.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { padding: "60px 20px", textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "No published articles found." }, void 0, false, {
      fileName: "app/routes/feed.tsx",
      lineNumber: 135,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/feed.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "feed-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "feed-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "The Poast Archive" }, void 0, false, {
      fileName: "app/routes/feed.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/feed.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "article-grid", children: articles.map(
      (article) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: `/articles/${article.id}`,
          className: "article-card-link",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "feed-card", children: [
            article.coverImage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-image-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: article.coverImage, alt: article.subject }, void 0, false, {
              fileName: "app/routes/feed.tsx",
              lineNumber: 156,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/feed.tsx",
              lineNumber: 155,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-content", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "card-date", children: new Date(article.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
              }) }, void 0, false, {
                fileName: "app/routes/feed.tsx",
                lineNumber: 160,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "card-title", children: article.subject }, void 0, false, {
                fileName: "app/routes/feed.tsx",
                lineNumber: 167,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "card-excerpt", children: article.excerpt }, void 0, false, {
                fileName: "app/routes/feed.tsx",
                lineNumber: 168,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/feed.tsx",
              lineNumber: 159,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/feed.tsx",
            lineNumber: 153,
            columnNumber: 13
          }, this)
        },
        article.id,
        false,
        {
          fileName: "app/routes/feed.tsx",
          lineNumber: 148,
          columnNumber: 9
        },
        this
      )
    ) }, void 0, false, {
      fileName: "app/routes/feed.tsx",
      lineNumber: 146,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/feed.tsx",
    lineNumber: 141,
    columnNumber: 5
  }, this);
}
export {
  Feed as default,
  links
};
//# sourceMappingURL=/build/routes/feed-4IDNSTPY.js.map
