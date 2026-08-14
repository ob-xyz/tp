import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  useLoaderData
} from "/build/_shared/chunk-FKFAHRPY.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-S4ZNHW4H.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/articles.$id.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ArticleDetail() {
  const { fullHtml, subject } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: { width: "100%", height: "100vh", margin: 0, padding: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "iframe",
    {
      title: subject || "Article",
      srcDoc: fullHtml,
      style: { width: "100%", height: "100%", border: "none", display: "block" }
    },
    void 0,
    false,
    {
      fileName: "app/routes/articles.$id.tsx",
      lineNumber: 60,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/articles.$id.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
export {
  ArticleDetail as default
};
//# sourceMappingURL=/build/routes/articles.$id-C235GY6B.js.map
