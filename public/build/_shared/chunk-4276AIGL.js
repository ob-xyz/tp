import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FZOAUUQ7.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/altcha.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ALTCHA_SCRIPT = "https://app.thepoast.com/public/static/altcha.umd.js";
var altchaScriptPromise = null;
function loadAltcha() {
  if (customElements.get("altcha-widget")) {
    return Promise.resolve();
  }
  if (altchaScriptPromise) {
    return altchaScriptPromise;
  }
  altchaScriptPromise = new Promise((resolve, reject) => {
    let script = document.querySelector(
      `script[src="${ALTCHA_SCRIPT}"]`
    );
    if (!script) {
      script = document.createElement("script");
      script.src = ALTCHA_SCRIPT;
      script.type = "module";
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener(
      "error",
      () => {
        altchaScriptPromise = null;
        reject(new Error("Failed to load ALTCHA"));
      },
      { once: true }
    );
  });
  return altchaScriptPromise;
}
function AltchaWrapper() {
  const widgetRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    let mounted = true;
    async function initialize() {
      var _a;
      try {
        await loadAltcha();
        await customElements.whenDefined("altcha-widget");
        if (!mounted || !widgetRef.current)
          return;
        const widget = widgetRef.current;
        widget.configure({
          hideLogo: true,
          hideFooter: true
        });
        const handleStateChange = (event) => {
          var _a2;
          const state = (_a2 = event.detail) == null ? void 0 : _a2.state;
          if (state === "verified") {
            widget.classList.add("poast-verified");
          } else {
            widget.classList.remove("poast-verified");
          }
        };
        widget.addEventListener("statechange", handleStateChange);
        if (((_a = widget.getState) == null ? void 0 : _a.call(widget)) === "verified") {
          widget.classList.add("poast-verified");
        }
        return () => {
          widget.removeEventListener(
            "statechange",
            handleStateChange
          );
        };
      } catch (error) {
        console.error("ALTCHA initialization failed:", error);
      }
    }
    let cleanup;
    initialize().then((fn) => {
      cleanup = fn;
    });
    return () => {
      mounted = false;
      cleanup == null ? void 0 : cleanup();
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "altcha-widget",
    {
      ref: widgetRef,
      challenge: "https://app.thepoast.com/api/public/captcha/altcha"
    },
    void 0,
    false,
    {
      fileName: "app/components/altcha.tsx",
      lineNumber: 114,
      columnNumber: 5
    },
    this
  );
}

export {
  AltchaWrapper
};
//# sourceMappingURL=/build/_shared/chunk-4276AIGL.js.map
