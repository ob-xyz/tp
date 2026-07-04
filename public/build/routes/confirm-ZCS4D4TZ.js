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

// app/routes/confirm.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Confirm() {
  const { slug } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { textAlign: "center", padding: "80px 20px" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { fontSize: 48 }, children: "\u2713" }, void 0, false, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Got it \u2014 we'll be in touch shortly" }, void 0, false, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Thanks for your interest, ",
      slug,
      "."
    ] }, void 0, true, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/confirm.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
export {
  Confirm as default
};
//# sourceMappingURL=/build/routes/confirm-ZCS4D4TZ.js.map
