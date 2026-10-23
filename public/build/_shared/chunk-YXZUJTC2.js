import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FZOAUUQ7.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/feed-embed.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MOBILE_QUERY = "(max-width: 640px)";
var SIDE_BORDER_STYLE = {
  boxSizing: "border-box",
  borderLeft: "2px solid var(--feed-hairline)",
  borderRight: "2px solid var(--feed-hairline)",
  borderTop: "none"
};
function useSideBorders() {
  const [enabled, setEnabled] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (typeof window.matchMedia !== "function") {
      setEnabled(true);
      return;
    }
    const query = window.matchMedia(MOBILE_QUERY);
    const update = () => setEnabled(!query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return enabled ? SIDE_BORDER_STYLE : {};
}
var heightCache = /* @__PURE__ */ new Map();
var keyFor = (id, interactive) => `${interactive ? "full" : "lead"}:${id}`;
function getCachedHeight(id, interactive = false) {
  return heightCache.get(keyFor(id, interactive));
}
function stripTopBorder(doc) {
  const body = doc.body;
  const view = doc.defaultView;
  if (!body || !view)
    return;
  const top = body.getBoundingClientRect().top;
  const walk = (parent, depth) => {
    if (depth > 12)
      return;
    for (const child of Array.from(parent.children)) {
      const rect = child.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0)
        continue;
      if (rect.top - top > 2)
        continue;
      if (child.tagName === "HR") {
        child.style.setProperty("display", "none", "important");
        continue;
      }
      if (parseFloat(view.getComputedStyle(child).borderTopWidth) > 0) {
        child.style.setProperty(
          "border-top",
          "none",
          "important"
        );
      }
      walk(child, depth + 1);
    }
  };
  walk(body, 0);
}
function FeedEmbed({
  id,
  title,
  html,
  src,
  interactive = false,
  fallbackHeight = 360,
  onLoaded,
  lazy = false,
  bordered = false,
  hideTopBorder = false
}) {
  const key = keyFor(id, interactive);
  const sideBorders = useSideBorders();
  const iframeRef = (0, import_react.useRef)(null);
  const observerRef = (0, import_react.useRef)(null);
  const observedBody = (0, import_react.useRef)(null);
  const onLoadedRef = (0, import_react.useRef)(onLoaded);
  const firedRef = (0, import_react.useRef)(false);
  onLoadedRef.current = onLoaded;
  const [height, setHeight] = (0, import_react.useState)(
    () => {
      var _a;
      return (_a = heightCache.get(key)) != null ? _a : fallbackHeight;
    }
  );
  const fireLoaded = (0, import_react.useCallback)(() => {
    var _a;
    if (firedRef.current)
      return;
    firedRef.current = true;
    (_a = onLoadedRef.current) == null ? void 0 : _a.call(onLoadedRef);
  }, []);
  const attach = (0, import_react.useCallback)(() => {
    var _a, _b;
    const document = (_a = iframeRef.current) == null ? void 0 : _a.contentDocument;
    const body = document == null ? void 0 : document.body;
    if (!body || body.childElementCount === 0) {
      return false;
    }
    if (hideTopBorder && document)
      stripTopBorder(document);
    const measure = () => {
      const next = Math.ceil(
        Math.max(
          body.scrollHeight,
          body.offsetHeight
        )
      );
      if (next <= 0)
        return;
      heightCache.set(key, next);
      setHeight(
        (previous) => Math.abs(previous - next) > 1 ? next : previous
      );
    };
    measure();
    if (observedBody.current !== body) {
      observedBody.current = body;
      (_b = observerRef.current) == null ? void 0 : _b.disconnect();
      if (typeof ResizeObserver !== "undefined") {
        const observer = new ResizeObserver(measure);
        observer.observe(body);
        observerRef.current = observer;
      }
    }
    return true;
  }, [key, hideTopBorder]);
  const handleLoad = (0, import_react.useCallback)(() => {
    attach();
    fireLoaded();
  }, [attach, fireLoaded]);
  (0, import_react.useEffect)(() => {
    var _a, _b;
    firedRef.current = false;
    observedBody.current = null;
    let cancelled = false;
    let timer;
    const startedAt = performance.now();
    const delays = [
      0,
      16,
      50,
      100,
      250,
      500,
      1e3,
      1500
    ];
    let attempt = 0;
    const poll = () => {
      if (cancelled)
        return;
      if (attach()) {
        fireLoaded();
        return;
      }
      if (performance.now() - startedAt >= 1e4) {
        return;
      }
      const delay = delays[Math.min(
        attempt++,
        delays.length - 1
      )];
      timer = window.setTimeout(
        poll,
        delay
      );
    };
    const document = (_a = iframeRef.current) == null ? void 0 : _a.contentDocument;
    if ((document == null ? void 0 : document.readyState) === "complete" && ((_b = document.body) == null ? void 0 : _b.childElementCount)) {
      attach();
      fireLoaded();
    } else {
      poll();
    }
    return () => {
      var _a2;
      cancelled = true;
      if (timer !== void 0) {
        window.clearTimeout(timer);
      }
      (_a2 = observerRef.current) == null ? void 0 : _a2.disconnect();
      observerRef.current = null;
      observedBody.current = null;
    };
  }, [
    html,
    src,
    attach,
    fireLoaded
  ]);
  if (!src && !html) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      style: {
        position: "relative",
        width: "100%",
        height,
        boxSizing: "border-box",
        ...bordered ? sideBorders : null
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "iframe",
        {
          ref: iframeRef,
          title,
          ...src ? { src } : { srcDoc: html != null ? html : "" },
          scrolling: "no",
          loading: lazy ? "lazy" : "eager",
          onLoad: handleLoad,
          sandbox: interactive ? "allow-same-origin allow-popups allow-popups-to-escape-sandbox" : "allow-same-origin",
          style: {
            display: "block",
            width: "100%",
            height: "100%",
            border: 0,
            margin: 0,
            padding: 0,
            overflow: "hidden",
            background: "light-dark(#fff, #000)",
            colorScheme: "light dark"
          }
        },
        void 0,
        false,
        {
          fileName: "app/components/feed-embed.tsx",
          lineNumber: 299,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/components/feed-embed.tsx",
      lineNumber: 290,
      columnNumber: 5
    },
    this
  );
}
var feed_embed_default = (0, import_react.memo)(FeedEmbed);

export {
  useSideBorders,
  getCachedHeight,
  feed_embed_default
};
//# sourceMappingURL=/build/_shared/chunk-YXZUJTC2.js.map
