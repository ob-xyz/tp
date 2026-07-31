import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-S4ZNHW4H.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/altcha.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AltchaWrapper() {
  const [isMounted, setIsMounted] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setIsMounted(true);
    import("/build/_shared/altcha-3KHXF6YF.js").catch((err) => console.error("Altcha load error:", err));
  }, []);
  if (!isMounted) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { height: "80px" } }, void 0, false, {
      fileName: "app/components/altcha.tsx",
      lineNumber: 23,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "altcha-widget",
    {
      challengeurl: "https://app.jeffamzn.com/api/public/captcha/altcha",
      hidefooter: "true",
      hidelogo: "true"
    },
    void 0,
    false,
    {
      fileName: "app/components/altcha.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}

export {
  AltchaWrapper
};
//# sourceMappingURL=/build/_shared/chunk-552RS725.js.map
