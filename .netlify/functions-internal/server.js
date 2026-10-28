var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links2,
  meta: () => meta2
});
var import_react9 = require("react"), import_react10 = require("@remix-run/react"), import_react_router_dom = require("react-router-dom");

// app/style/global/global.css
var global_default = "/build/_assets/global-W4SRTBJQ.css";

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => NotFound,
  headers: () => headers,
  links: () => links,
  meta: () => meta
});
var import_react8 = require("react");

// app/components/feed-topbar.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function FeedTopbar({
  hidden = !1,
  onSubscribe,
  showSubscribe = !0,
  leftContent
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: `feed-topbar${hidden ? " is-hidden" : ""}`, children: [
    leftContent ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        className: "feed-topbar-left",
        style: { gridColumn: 1, justifySelf: "start", minWidth: 0 },
        children: leftContent
      },
      void 0,
      !1,
      {
        fileName: "app/components/feed-topbar.tsx",
        lineNumber: 21,
        columnNumber: 9
      },
      this
    ) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: "/img/tp.png",
        alt: "thepoast",
        loading: "eager",
        decoding: "async"
      },
      void 0,
      !1,
      {
        fileName: "app/components/feed-topbar.tsx",
        lineNumber: 30,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/feed-topbar.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    showSubscribe && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "a",
      {
        className: "feed-subscribe",
        href: "#subscribe",
        onClick: onSubscribe,
        children: "Subscribe"
      },
      void 0,
      !1,
      {
        fileName: "app/components/feed-topbar.tsx",
        lineNumber: 39,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/feed-topbar.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/components/feed-footer.tsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function FeedFooter({
  covered = !1
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: `feed-footer${covered ? " is-covered" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "feed-footer-links", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/about", children: "about" }, void 0, !1, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/archive", children: "archive" }, void 0, !1, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/submit-post", children: "submit post" }, void 0, !1, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/policies/privacy", children: "privacy" }, void 0, !1, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/policies/terms", children: "terms" }, void 0, !1, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/book", children: "advertise" }, void 0, !1, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/manager", children: "ads manager" }, void 0, !1, {
        fileName: "app/components/feed-footer.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/feed-footer.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "feed-copyright", children: "thepoast \xA9 2026" }, void 0, !1, {
      fileName: "app/components/feed-footer.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/feed-footer.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/feed-subscribe-banner.tsx
var import_react5 = require("react"), import_react6 = require("@remix-run/react");

// app/components/altcha.tsx
var import_react4 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function AltchaWrapper() {
  let [isMounted, setIsMounted] = (0, import_react4.useState)(!1);
  return (0, import_react4.useEffect)(() => {
    setIsMounted(!0), import("altcha").catch((err) => console.error("Altcha load error:", err));
  }, []), isMounted ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "altcha-widget",
    {
      challengeurl: "https://app.thepoast.com/api/public/captcha/altcha",
      hidefooter: "true",
      hidelogo: "true"
    },
    void 0,
    !1,
    {
      fileName: "app/components/altcha.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { height: "80px" } }, void 0, !1, {
    fileName: "app/components/altcha.tsx",
    lineNumber: 23,
    columnNumber: 12
  }, this);
}

// app/components/feed-subscribe-banner.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function FeedSubscribeBanner({
  visible,
  forceExpanded = !1
}) {
  let [expanded, setExpanded] = (0, import_react5.useState)(!1), emailRef = (0, import_react5.useRef)(null);
  return (0, import_react5.useEffect)(() => {
    forceExpanded && setExpanded(!0);
  }, [forceExpanded]), (0, import_react5.useEffect)(() => {
    var _a2;
    expanded && visible && ((_a2 = emailRef.current) == null || _a2.focus({ preventScroll: !0 }));
  }, [expanded, visible]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "aside",
    {
      className: `feed-banner${visible ? " is-visible" : ""}`,
      "aria-label": "Subscribe to thepoast",
      "aria-hidden": !visible,
      inert: !visible,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "feed-banner-inner", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "feed-banner-title", children: "Get thepoast for free" }, void 0, !1, {
          fileName: "app/components/feed-subscribe-banner.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this),
        expanded ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "form",
          {
            method: "post",
            action: "https://app.thepoast.com/subscription/form",
            className: "feed-banner-form",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "feed-input-bar", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  "input",
                  {
                    className: "feed-input email-input",
                    type: "email",
                    name: "email",
                    required: !0,
                    ref: emailRef,
                    placeholder: "Email Address *"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/feed-subscribe-banner.tsx",
                    lineNumber: 58,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  "button",
                  {
                    className: "feed-submit",
                    type: "submit",
                    children: "Subscribe"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/feed-subscribe-banner.tsx",
                    lineNumber: 67,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/feed-subscribe-banner.tsx",
                lineNumber: 57,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "feed-verify-row", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
                  fileName: "app/components/feed-subscribe-banner.tsx",
                  lineNumber: 77,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/components/feed-subscribe-banner.tsx",
                  lineNumber: 76,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "feed-legal", children: [
                  "By submitting, you agree to our",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Link, { to: "/policies/terms", children: "terms" }, void 0, !1, {
                    fileName: "app/components/feed-subscribe-banner.tsx",
                    lineNumber: 82,
                    columnNumber: 17
                  }, this),
                  " ",
                  "&",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Link, { to: "/policies/privacy", children: "privacy" }, void 0, !1, {
                    fileName: "app/components/feed-subscribe-banner.tsx",
                    lineNumber: 86,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/feed-subscribe-banner.tsx",
                  lineNumber: 80,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/feed-subscribe-banner.tsx",
                lineNumber: 75,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                "input",
                {
                  id: "6d48f",
                  type: "hidden",
                  name: "l",
                  value: "6d48fffe-7d37-4c14-b317-3e4cda33a647"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/feed-subscribe-banner.tsx",
                  lineNumber: 92,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                "input",
                {
                  type: "hidden",
                  name: "nonce"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/feed-subscribe-banner.tsx",
                  lineNumber: 99,
                  columnNumber: 13
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/feed-subscribe-banner.tsx",
            lineNumber: 52,
            columnNumber: 11
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "button",
          {
            type: "button",
            className: "feed-banner-btn",
            onClick: () => setExpanded(!0),
            children: "Subscribe"
          },
          void 0,
          !1,
          {
            fileName: "app/components/feed-subscribe-banner.tsx",
            lineNumber: 44,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/feed-subscribe-banner.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/feed-subscribe-banner.tsx",
      lineNumber: 32,
      columnNumber: 5
    },
    this
  );
}

// app/components/feed-embed.tsx
var import_react7 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), MOBILE_QUERY = "(max-width: 640px)", SIDE_BORDER_STYLE = {
  boxSizing: "border-box",
  borderLeft: "2px solid var(--feed-hairline)",
  borderRight: "2px solid var(--feed-hairline)",
  borderTop: "none"
};
function useSideBorders() {
  let [enabled, setEnabled] = (0, import_react7.useState)(!1);
  return (0, import_react7.useEffect)(() => {
    if (typeof window.matchMedia != "function") {
      setEnabled(!0);
      return;
    }
    let query = window.matchMedia(MOBILE_QUERY), update = () => setEnabled(!query.matches);
    return update(), query.addEventListener("change", update), () => query.removeEventListener("change", update);
  }, []), enabled ? SIDE_BORDER_STYLE : {};
}
var heightCache = /* @__PURE__ */ new Map(), keyFor = (id, interactive) => `${interactive ? "full" : "lead"}:${id}`;
function getCachedHeight(id, interactive = !1) {
  return heightCache.get(keyFor(id, interactive));
}
function stripTopBorder(doc) {
  let body = doc.body, view = doc.defaultView;
  if (!body || !view)
    return;
  let top = body.getBoundingClientRect().top, walk = (parent, depth) => {
    if (!(depth > 12))
      for (let child of Array.from(parent.children)) {
        let rect = child.getBoundingClientRect();
        if (!(rect.width === 0 && rect.height === 0) && !(rect.top - top > 2)) {
          if (child.tagName === "HR") {
            child.style.setProperty("display", "none", "important");
            continue;
          }
          parseFloat(view.getComputedStyle(child).borderTopWidth) > 0 && child.style.setProperty(
            "border-top",
            "none",
            "important"
          ), walk(child, depth + 1);
        }
      }
  };
  walk(body, 0);
}
function FeedEmbed({
  id,
  title,
  html,
  src,
  interactive = !1,
  fallbackHeight = 360,
  onLoaded,
  lazy = !1,
  bordered = !1,
  hideTopBorder = !1
}) {
  let key = keyFor(id, interactive), sideBorders = useSideBorders(), iframeRef = (0, import_react7.useRef)(null), observerRef = (0, import_react7.useRef)(null), observedBody = (0, import_react7.useRef)(null), onLoadedRef = (0, import_react7.useRef)(onLoaded), firedRef = (0, import_react7.useRef)(!1);
  onLoadedRef.current = onLoaded;
  let [height, setHeight] = (0, import_react7.useState)(
    () => heightCache.get(key) ?? fallbackHeight
  ), fireLoaded = (0, import_react7.useCallback)(() => {
    var _a2;
    firedRef.current || (firedRef.current = !0, (_a2 = onLoadedRef.current) == null || _a2.call(onLoadedRef));
  }, []), attach = (0, import_react7.useCallback)(() => {
    var _a2, _b2;
    let document2 = (_a2 = iframeRef.current) == null ? void 0 : _a2.contentDocument, body = document2 == null ? void 0 : document2.body;
    if (!body || body.childElementCount === 0)
      return !1;
    hideTopBorder && document2 && stripTopBorder(document2);
    let measure = () => {
      let next = Math.ceil(
        Math.max(
          body.scrollHeight,
          body.offsetHeight
        )
      );
      next <= 0 || (heightCache.set(key, next), setHeight(
        (previous) => Math.abs(previous - next) > 1 ? next : previous
      ));
    };
    if (measure(), observedBody.current !== body && (observedBody.current = body, (_b2 = observerRef.current) == null || _b2.disconnect(), typeof ResizeObserver < "u")) {
      let observer = new ResizeObserver(measure);
      observer.observe(body), observerRef.current = observer;
    }
    return !0;
  }, [key, hideTopBorder]), handleLoad = (0, import_react7.useCallback)(() => {
    attach(), fireLoaded();
  }, [attach, fireLoaded]);
  return (0, import_react7.useEffect)(() => {
    var _a2, _b2;
    firedRef.current = !1, observedBody.current = null;
    let cancelled = !1, timer, startedAt = performance.now(), delays = [
      0,
      16,
      50,
      100,
      250,
      500,
      1e3,
      1500
    ], attempt = 0, poll = () => {
      if (cancelled)
        return;
      if (attach()) {
        fireLoaded();
        return;
      }
      if (performance.now() - startedAt >= 1e4)
        return;
      let delay = delays[Math.min(
        attempt++,
        delays.length - 1
      )];
      timer = window.setTimeout(
        poll,
        delay
      );
    }, document2 = (_a2 = iframeRef.current) == null ? void 0 : _a2.contentDocument;
    return (document2 == null ? void 0 : document2.readyState) === "complete" && ((_b2 = document2.body) != null && _b2.childElementCount) ? (attach(), fireLoaded()) : poll(), () => {
      var _a3;
      cancelled = !0, timer !== void 0 && window.clearTimeout(timer), (_a3 = observerRef.current) == null || _a3.disconnect(), observerRef.current = null, observedBody.current = null;
    };
  }, [
    html,
    src,
    attach,
    fireLoaded
  ]), !src && !html ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "div",
    {
      style: {
        position: "relative",
        width: "100%",
        height,
        boxSizing: "border-box",
        ...bordered ? sideBorders : null
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "iframe",
        {
          ref: iframeRef,
          title,
          ...src ? { src } : { srcDoc: html ?? "" },
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
        !1,
        {
          fileName: "app/components/feed-embed.tsx",
          lineNumber: 299,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/feed-embed.tsx",
      lineNumber: 290,
      columnNumber: 5
    },
    this
  );
}
var feed_embed_default = (0, import_react7.memo)(FeedEmbed);

// app/routes/$.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), meta = () => ({
  title: "404 / thepoast",
  robots: "noindex"
}), links = () => [
  {
    rel: "preconnect",
    href: "https://img.thepoast.com"
  },
  {
    rel: "dns-prefetch",
    href: "https://img.thepoast.com"
  }
], headers = () => ({
  "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=300"
}), BANNER_TRIGGER = 0.75;
function useReachedEndOfPage() {
  let endRef = (0, import_react8.useRef)(null), [reached, setReached] = (0, import_react8.useState)(!1);
  return (0, import_react8.useEffect)(() => {
    let element = endRef.current;
    if (!element)
      return;
    let frame = 0, check = () => {
      frame = 0;
      let top = element.getBoundingClientRect().top;
      setReached(window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER);
    }, schedule3 = () => {
      frame || (frame = requestAnimationFrame(check));
    };
    window.addEventListener("scroll", schedule3, { passive: !0 }), window.addEventListener("resize", schedule3);
    let resizeObserver;
    return typeof ResizeObserver < "u" && element.parentElement && (resizeObserver = new ResizeObserver(schedule3), resizeObserver.observe(element.parentElement)), check(), () => {
      window.removeEventListener("scroll", schedule3), window.removeEventListener("resize", schedule3), resizeObserver == null || resizeObserver.disconnect(), frame && cancelAnimationFrame(frame);
    };
  }, []), { endRef, reached };
}
function NotFound() {
  let { endRef, reached } = useReachedEndOfPage(), [forced, setForced] = (0, import_react8.useState)(!1), [expandBanner, setExpandBanner] = (0, import_react8.useState)(!1), footerRef = (0, import_react8.useRef)(null), previousReached = (0, import_react8.useRef)(!1), bannerVisible = reached || forced;
  return (0, import_react8.useEffect)(() => {
    previousReached.current && !reached && (setForced(!1), setExpandBanner(!1)), previousReached.current = reached;
  }, [reached]), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      FeedTopbar,
      {
        hidden: reached,
        onSubscribe: (event) => {
          var _a2;
          event.preventDefault(), setForced(!0), setExpandBanner(!0), (_a2 = footerRef.current) == null || _a2.scrollIntoView({ behavior: "smooth", block: "end" });
        },
        leftContent: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "feed-status", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "status-dot" }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 109,
            columnNumber: 13
          }, this),
          "404 Error"
        ] }, void 0, !0, {
          fileName: "app/routes/$.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/$.tsx",
        lineNumber: 104,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "feed-stream", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "feed-embed loaded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        feed_embed_default,
        {
          id: "live",
          src: "/live",
          title: "Today's Edition",
          interactive: !0,
          bordered: !0,
          hideTopBorder: !0,
          fallbackHeight: 900
        },
        void 0,
        !1,
        {
          fileName: "app/routes/$.tsx",
          lineNumber: 117,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { ref: footerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(FeedFooter, { covered: bannerVisible }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 132,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 131,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(FeedSubscribeBanner, { visible: bannerVisible, forceExpanded: expandBanner }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), links2 = () => [
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/png"
  },
  {
    rel: "stylesheet",
    href: global_default
  }
], meta2 = () => ({
  charset: "utf-8",
  title: "thepoast - no bots, no spam.",
  description: "No bots. No spam. Just the best things you haven't seen.",
  viewport: "width=device-width,initial-scale=1"
});
function ScrollToTop() {
  let { pathname, hash } = (0, import_react10.useLocation)(), navType = (0, import_react_router_dom.useNavigationType)();
  return (0, import_react9.useEffect)(() => {
    hash || navType === "POP" || window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname, hash, navType]), null;
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { name: "color-scheme", content: "light dark" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "meta",
        {
          name: "theme-color",
          content: "#ffffff",
          media: "(prefers-color-scheme: light)"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 64,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "meta",
        {
          name: "theme-color",
          content: "#050505",
          media: "(prefers-color-scheme: dark)"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 69,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react10.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Document, { children: caught.status === 404 ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(NotFound, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 92,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { style: { padding: "4rem 1.5rem", textAlign: "center" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: [
      caught.status,
      " ",
      caught.statusText
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Something went wrong." }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 98,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "/", children: "Back to thepoast" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 99,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 94,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { style: { padding: "4rem 1.5rem", textAlign: "center" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Something went wrong" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "We hit an unexpected error." }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 113,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "/", children: "Back to thepoast" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 111,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { name: "color-scheme", content: "light dark" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "meta",
        {
          name: "theme-color",
          content: "#ffffff",
          media: "(prefers-color-scheme: light)"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 136,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "meta",
        {
          name: "theme-color",
          content: "#050505",
          media: "(prefers-color-scheme: dark)"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 141,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "script",
        {
          type: "application/ld+json",
          dangerouslySetInnerHTML: {
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "thepoast",
              alternateName: ["the poast", "The Poast Newsletter", "thepoast.com", "the poast feed", "the poast website", "poast", "poast app", "the poast app", "the poast news"],
              url: "https://thepoast.com",
              logo: "https://thepoast.com/favicon.ico",
              description: "Just open and scroll whenever you like. No account required."
            })
          }
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 147,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 157,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ScrollToTop, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 132,
    columnNumber: 5
  }, this);
}

// app/routes/custom/$company.storyboard.tsx
var company_storyboard_exports = {};
__export(company_storyboard_exports, {
  loader: () => loader
});

// app/utils/poast-feeds.server.ts
var LISTMONK_BASE_URL = "https://app.thepoast.com", FEED_TIMEZONE = process.env.LISTMONK_FEED_TIMEZONE || "America/Toronto", FEED_LIMIT = 30, MIN = 6e4, HOUR = 60 * MIN, DAY = 24 * HOUR, UpstreamError = class extends Error {
}, MAX_ENTRIES = 400, store = /* @__PURE__ */ new Map(), inflight = /* @__PURE__ */ new Map();
function remember(key, value, freshMs, staleMs) {
  let now = Date.now();
  for (value == null && (freshMs = Math.min(freshMs, 15e3), staleMs = freshMs), store.delete(key), store.set(key, {
    value,
    freshUntil: now + freshMs,
    staleUntil: now + Math.max(staleMs, freshMs)
  }); store.size > MAX_ENTRIES; ) {
    let oldest = store.keys().next().value;
    if (oldest === void 0)
      break;
    store.delete(oldest);
  }
}
async function cached(key, freshMs, staleMs, load) {
  let now = Date.now(), hit = store.get(key);
  if (hit && now < hit.freshUntil)
    return hit.value;
  let refresh = () => {
    let promise = inflight.get(key);
    return promise || (promise = load().then((value) => (remember(key, value, freshMs, staleMs), value)).finally(() => {
      inflight.delete(key);
    }), inflight.set(key, promise)), promise;
  };
  if (hit && now < hit.staleUntil)
    return refresh().catch(() => {
    }), hit.value;
  try {
    return await refresh();
  } catch (error) {
    if (hit)
      return hit.value;
    throw error;
  }
}
function peek(key) {
  let hit = store.get(key);
  return !hit || Date.now() >= hit.staleUntil ? null : hit.value ?? null;
}
var sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function getAuthHeaders(accept) {
  let username = process.env.LISTMONK_USERNAME, token = process.env.LISTMONK_TOKEN;
  if (!username || !token)
    throw new UpstreamError("Missing LISTMONK_USERNAME or LISTMONK_TOKEN");
  return {
    Authorization: `Basic ${Buffer.from(`${username}:${token}`).toString("base64")}`,
    Accept: accept
  };
}
async function upstream(path, accept, timeoutMs = 7e3, attempts = 2) {
  let headers13 = getAuthHeaders(accept), lastError;
  for (let attempt = 0; attempt < attempts; attempt++) {
    let controller = new AbortController(), timer = setTimeout(() => controller.abort(), timeoutMs), fatal = !1;
    try {
      let res = await fetch(`${LISTMONK_BASE_URL}${path}`, {
        headers: headers13,
        signal: controller.signal
      });
      if (res.status === 404)
        return null;
      if (res.ok)
        return await res.text();
      lastError = new UpstreamError(`Listmonk ${res.status} for ${path}`), fatal = res.status < 500 && res.status !== 429;
    } catch (error) {
      lastError = error;
    } finally {
      clearTimeout(timer);
    }
    if (fatal)
      break;
    attempt < attempts - 1 && await sleep(250 * 2 ** attempt);
  }
  throw lastError instanceof UpstreamError ? lastError : new UpstreamError(`Listmonk request failed for ${path}: ${String(lastError)}`);
}
async function upstreamJson(path, timeoutMs) {
  let text = await upstream(path, "application/json", timeoutMs);
  if (text == null)
    return null;
  try {
    return JSON.parse(text);
  } catch {
    throw new UpstreamError(`Invalid JSON from Listmonk for ${path}`);
  }
}
var CAMPAIGN_LIST_KEY = "campaigns:finished";
async function listFinishedCampaigns() {
  try {
    return await cached(CAMPAIGN_LIST_KEY, 5 * MIN, DAY, async () => {
      var _a2;
      let params = new URLSearchParams({
        status: "finished",
        order_by: "updated_at",
        order: "DESC",
        page: "1",
        per_page: "100",
        no_body: "true"
        // lighter list response (ignored by old versions)
      }), payload = await upstreamJson(
        `/api/campaigns?${params}`,
        9e3
      ), results = (_a2 = payload == null ? void 0 : payload.data) == null ? void 0 : _a2.results;
      if (!Array.isArray(results))
        throw new UpstreamError("Unexpected Listmonk campaign list response");
      return results;
    });
  } catch (error) {
    return console.error("[feeds] Campaign list failed:", error), [];
  }
}
function peekListedCampaign(id) {
  let list = peek(CAMPAIGN_LIST_KEY);
  return (list == null ? void 0 : list.find((c) => String(c.id) === id)) ?? null;
}
function getCampaign(id) {
  let key = String(id);
  return cached(`campaign:${key}`, 10 * MIN, DAY, async () => {
    let payload = await upstreamJson(
      `/api/campaigns/${encodeURIComponent(key)}`
    );
    return (payload == null ? void 0 : payload.data) ?? null;
  });
}
function getCampaignPreview(id) {
  let key = String(id);
  return cached(`preview:${key}`, 6 * HOUR, 7 * DAY, async () => {
    let html = await upstream(
      `/api/campaigns/${encodeURIComponent(key)}/preview`,
      "text/html",
      1e4
    );
    return html && html.trim() ? html : null;
  });
}
async function getTemplate(templateId) {
  var _a2;
  try {
    let payload = await upstreamJson(
      `/api/templates/${templateId}`
    );
    return ((_a2 = payload == null ? void 0 : payload.data) == null ? void 0 : _a2.body) || "";
  } catch {
    return "";
  }
}
async function renderFromBody(campaign) {
  let full = campaign, body = campaign.body || "";
  if (!body) {
    let fetched = await getCampaign(campaign.id);
    fetched && (full = fetched), body = (fetched == null ? void 0 : fetched.body) || "";
  }
  if (!body)
    return "";
  if (full.template_id) {
    let template = await getTemplate(full.template_id);
    template && (body = template.replace(/\{\{\s*template\s+"content"\s*\}\}/gi, body));
  }
  return body;
}
async function getRawHtml(id) {
  let preview = await getCampaignPreview(id).catch(() => null);
  if (preview)
    return preview;
  let campaign = await getCampaign(id);
  return campaign && await renderFromBody(campaign) || null;
}
async function getRenderedCampaignHtml(campaign) {
  return await getRawHtml(String(campaign.id)) ?? "";
}
function getCampaignDate(campaign) {
  return campaign.started_at || campaign.send_at || campaign.updated_at || campaign.created_at || null;
}
function getTimestamp(campaign) {
  let date = getCampaignDate(campaign);
  if (!date)
    return 0;
  let timestamp = new Date(date).getTime();
  return Number.isFinite(timestamp) ? timestamp : 0;
}
function getDateKey(dateString) {
  let parts = new Intl.DateTimeFormat("en-US", {
    timeZone: FEED_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date(dateString)), values = {};
  for (let part of parts)
    values[part.type] = part.value;
  return `${values.year}-${values.month}-${values.day}`;
}
function getLatestCampaignPerDay(campaigns, limit = FEED_LIMIT) {
  let sorted = [...campaigns].sort((a, b) => getTimestamp(b) - getTimestamp(a)), seen = /* @__PURE__ */ new Set(), result = [];
  for (let campaign of sorted) {
    let date = getCampaignDate(campaign);
    if (!date)
      continue;
    let day = getDateKey(date);
    if (!seen.has(day) && (seen.add(day), result.push(campaign), result.length >= limit))
      break;
  }
  return result;
}
var MONTHS_LONG = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], MONTHS_SHORT = MONTHS_LONG.map((m) => m.slice(0, 3)), WEEKDAYS_LONG = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], WEEKDAYS_SHORT = WEEKDAYS_LONG.map((d) => d.slice(0, 3));
function zonedParts(date) {
  let parts = new Intl.DateTimeFormat("en-US", {
    timeZone: FEED_TIMEZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "short"
  }).formatToParts(date), v = {};
  for (let p of parts)
    v[p.type] = p.value;
  return {
    year: Number(v.year),
    month: Number(v.month),
    day: Number(v.day),
    weekday: Math.max(0, WEEKDAYS_SHORT.indexOf(v.weekday))
  };
}
function formatGoDate(date, layout) {
  let pad = (n) => String(n).padStart(2, "0"), { year, month, day, weekday } = zonedParts(date), tokens = [
    ["Monday", WEEKDAYS_LONG[weekday]],
    ["January", MONTHS_LONG[month - 1]],
    ["2006", String(year)],
    ["Mon", WEEKDAYS_SHORT[weekday]],
    ["Jan", MONTHS_SHORT[month - 1]],
    ["06", pad(year % 100)],
    ["02", pad(day)],
    ["01", pad(month)],
    ["2", String(day)],
    ["1", String(month)]
  ], result = "", i = 0;
  outer:
    for (; i < layout.length; ) {
      for (let [token, value] of tokens)
        if (layout.startsWith(token, i)) {
          result += value, i += token.length;
          continue outer;
        }
      result += layout[i], i += 1;
    }
  return result;
}
function resolveTemplateTags(html, referenceDate) {
  return html.replace(
    /\{\{\s*Date\s+"([^"]*)"\s*\}\}/gi,
    (_match, layout) => {
      try {
        return formatGoDate(referenceDate, layout);
      } catch {
        return "";
      }
    }
  ).replace(/\{\{[\s\S]*?\}\}/g, "");
}
function getAttribute(tag, name) {
  var _a2;
  let regex = new RegExp(`${name}\\s*=\\s*["']([^"']+)["']`, "i");
  return ((_a2 = tag.match(regex)) == null ? void 0 : _a2[1]) || "";
}
var INJECTED_HEAD = `
<base target="_blank">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
html, body {
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  overflow-x: hidden !important;
  -webkit-text-size-adjust: 100%;
}
img, table, td, th { max-width: 100% !important; }
img { height: auto !important; }
.footer { display: none !important; }
</style>
`;
function prepareIssueHtml(html, referenceDate) {
  if (!html)
    return "";
  let resolved = resolveTemplateTags(html, referenceDate);
  return /<head[^>]*>/i.test(resolved) ? resolved.replace(/<head[^>]*>/i, (m) => `${m}${INJECTED_HEAD}`) : /<html[^>]*>/i.test(resolved) ? resolved.replace(
    /<html([^>]*)>/i,
    (m, attrs) => `<html${attrs}><head>${INJECTED_HEAD}</head>`
  ) : `<head>${INJECTED_HEAD}</head>${resolved}`;
}
var VOID_HTML_TAGS = /* @__PURE__ */ new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function scanHtmlTags(html, startAt = 0) {
  let tags = [], regex = /<!--[\s\S]*?-->|<\/?[a-zA-Z][^>]*>/g;
  regex.lastIndex = startAt;
  let match;
  for (; match = regex.exec(html); ) {
    let raw = match[0];
    if (raw.startsWith("<!--"))
      continue;
    let nameMatch = raw.match(/^<\/?\s*([a-zA-Z0-9:-]+)/);
    if (!nameMatch)
      continue;
    let name = nameMatch[1].toLowerCase();
    tags.push({
      name,
      start: match.index,
      end: regex.lastIndex,
      raw,
      closing: raw.startsWith("</"),
      selfClosing: /\/\s*>$/.test(raw) || VOID_HTML_TAGS.has(name)
    });
  }
  return tags;
}
function extractFirstStoryboardDocument(html, nth = 1) {
  var _a2, _b2, _c;
  let htmlOpen = ((_a2 = html.match(/<html\b[^>]*>/i)) == null ? void 0 : _a2[0]) || "<html>", bodyOpenMatch = html.match(/<body\b[^>]*>/i), bodyCloseMatch = html.match(/<\/body\s*>/i), doctype = ((_b2 = html.match(/<!doctype[^>]*>/i)) == null ? void 0 : _b2[0]) || "<!doctype html>", headHtml = ((_c = html.match(/<head\b[^>]*>[\s\S]*?<\/head\s*>/i)) == null ? void 0 : _c[0]) || "", bodyOpen = (bodyOpenMatch == null ? void 0 : bodyOpenMatch[0]) || "<body>", bodyClose = (bodyCloseMatch == null ? void 0 : bodyCloseMatch[0]) || "</body>", bodyStart = (bodyOpenMatch == null ? void 0 : bodyOpenMatch.index) ?? 0, bodyEnd = (bodyCloseMatch == null ? void 0 : bodyCloseMatch.index) ?? html.length, bodyHtml = html.slice(bodyStart, bodyEnd), tags = scanHtmlTags(bodyHtml, bodyOpenMatch ? bodyOpen.length : 0), stack = [], storyboardTag = null, storyboardAncestors = [], storyboardsSeen = 0;
  for (let tag of tags) {
    if (tag.closing) {
      if (storyboardTag && stack.length > 0) {
        let top = stack[stack.length - 1];
        if (top.start === storyboardTag.start && top.name === tag.name)
          return {
            htmlOpen,
            headHtml,
            bodyOpen,
            bodyClose,
            doctype,
            ancestors: storyboardAncestors,
            storyboard: html.slice(bodyStart + storyboardTag.start, bodyStart + tag.end)
          };
      }
      for (let i = stack.length - 1; i >= 0; i--)
        if (stack[i].name === tag.name) {
          stack.length = i;
          break;
        }
      continue;
    }
    !storyboardTag && tag.name === "div" && /\bstoryboard\b/i.test(getAttribute(tag.raw, "class")) && (storyboardsSeen++, storyboardsSeen === nth && (storyboardTag = tag, storyboardAncestors = stack.filter(
      (a) => a.name !== "html" && a.name !== "head" && a.name !== "body"
    ))), tag.selfClosing || stack.push(tag);
  }
  return null;
}
function prepareLeadStoryHtml(html, referenceDate, _feedId, nth = 1) {
  if (!html)
    return "";
  let extracted = extractFirstStoryboardDocument(
    resolveTemplateTags(html, referenceDate),
    nth
  );
  if (!extracted)
    return "";
  let content = extracted.storyboard;
  for (let i = extracted.ancestors.length - 1; i >= 0; i--) {
    let ancestor = extracted.ancestors[i];
    content = `${ancestor.raw}${content}</${ancestor.name}>`;
  }
  let head = extracted.headHtml ? extracted.headHtml.replace(/<head\b[^>]*>/i, (m) => `${m}${INJECTED_HEAD}`) : `<head>${INJECTED_HEAD}</head>`;
  return `${extracted.doctype}
${extracted.htmlOpen}
${head}
${extracted.bodyOpen}
${content}
${extracted.bodyClose}
</html>`;
}
async function getReferenceDate(id) {
  let campaign = peekListedCampaign(id) ?? await getCampaign(id), raw = campaign ? getCampaignDate(campaign) : null, date = raw ? new Date(raw) : null;
  return date && Number.isFinite(date.getTime()) ? date : /* @__PURE__ */ new Date();
}
function getLeadStoryHtml(id) {
  return cached(`lead:${id}`, 6 * HOUR, 7 * DAY, async () => {
    let [raw, date] = await Promise.all([getRawHtml(id), getReferenceDate(id)]);
    return raw && prepareLeadStoryHtml(raw, date, id) || null;
  });
}
function getIssue(id) {
  return cached(`issue:${id}`, 30 * MIN, 7 * DAY, async () => {
    let listed = peekListedCampaign(id), [campaign, raw] = await Promise.all([
      listed ? Promise.resolve(listed) : getCampaign(id),
      getRawHtml(id)
    ]);
    if (!campaign || !raw)
      return null;
    let rawDate = getCampaignDate(campaign), parsed = rawDate ? new Date(rawDate) : null, referenceDate = parsed && Number.isFinite(parsed.getTime()) ? parsed : /* @__PURE__ */ new Date(), body = prepareIssueHtml(raw, referenceDate);
    return body ? {
      id: String(campaign.id),
      subject: campaign.subject || "The Poast",
      date: rawDate || referenceDate.toISOString(),
      body
    } : null;
  });
}
var warming = !1;
function warmLeadStories(ids) {
  if (warming || ids.length === 0)
    return;
  warming = !0;
  let queue = ids.map((id, index) => ({ id, withIssue: index < 5 })), worker = async () => {
    for (let job = queue.shift(); job; job = queue.shift())
      try {
        await getLeadStoryHtml(job.id), job.withIssue && await getIssue(job.id);
      } catch {
      }
  };
  Promise.all([worker(), worker(), worker()]).finally(() => {
    warming = !1;
  });
}
var warmingIssues = !1;
function warmIssues(ids, max = 8) {
  if (warmingIssues || ids.length === 0)
    return;
  warmingIssues = !0;
  let queue = ids.slice(0, max), worker = async () => {
    for (let id = queue.shift(); id; id = queue.shift())
      try {
        await getIssue(id);
      } catch {
      }
  };
  Promise.all([worker(), worker()]).finally(() => {
    warmingIssues = !1;
  });
}
var LIVE_CAMPAIGN_ID = 2, LIVE_KEY = "live:issue", LIVE_FRESH_MS = 3e4, LIVE_STALE_MS = 10 * MIN, LIVE_WARM_INTERVAL_MS = 25e3;
async function getLiveIssue() {
  try {
    return await cached(
      LIVE_KEY,
      LIVE_FRESH_MS,
      LIVE_STALE_MS,
      async () => {
        let html = await upstream(
          `/api/campaigns/${LIVE_CAMPAIGN_ID}/preview`,
          "text/html",
          5e3,
          1
        );
        if (!html || !html.trim())
          return null;
        let now = /* @__PURE__ */ new Date();
        return {
          id: String(LIVE_CAMPAIGN_ID),
          subject: "Today's Edition",
          date: now.toISOString(),
          body: prepareIssueHtml(html, now)
        };
      }
    );
  } catch (error) {
    return console.error(
      "[feeds] Live issue failed:",
      error
    ), null;
  }
}
var liveGlobal = globalThis, _a, _b;
liveGlobal.__poastLiveWarm || (liveGlobal.__poastLiveWarm = !0, getLiveIssue(), (_b = (_a = setInterval(() => {
  getLiveIssue();
}, LIVE_WARM_INTERVAL_MS)).unref) == null || _b.call(_a));

// app/data/campaigns.ts
var CAMPAIGN_MAP = {
  foryou: 3,
  fin: 507,
  stripe: 451,
  checksum: 789
};

// app/routes/custom/$company.storyboard.tsx
var HIDE_EXTRANEOUS_STYLES = `
<style>
  /* Hide all storyboards except the target 2nd ad unit */
  .storyboard {
    display: none !important;
  }
  .storyboard:nth-of-type(2) {
    display: block !important;
  }

  /* Target and hide 'You're all caught up' and the template footer directly */
  p.tac,
  div.footer {
    display: none !important;
  }
</style>
`;
async function loader({ params }) {
  var _a2;
  let company = ((_a2 = params.company) == null ? void 0 : _a2.toLowerCase()) || "", campaignId = CAMPAIGN_MAP[company];
  if (!campaignId)
    return new Response("Ad unit not found", { status: 404 });
  try {
    let rawHtml = await getCampaignPreview(campaignId);
    if (!rawHtml)
      return new Response("Preview unavailable", { status: 404 });
    let fullHtml = prepareIssueHtml(rawHtml, /* @__PURE__ */ new Date());
    return fullHtml.includes("</head>") ? fullHtml = fullHtml.replace("</head>", `${HIDE_EXTRANEOUS_STYLES}</head>`) : fullHtml = `<head>${HIDE_EXTRANEOUS_STYLES}</head>${fullHtml}`, new Response(fullHtml, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=60, s-maxage=300",
        "X-Content-Type-Options": "nosniff"
      }
    });
  } catch (error) {
    return console.error(`[storyboard] Failed for ${company}:`, error), new Response("Temporarily unavailable", { status: 503 });
  }
}

// app/routes/custom/$company.preview.tsx
var company_preview_exports = {};
__export(company_preview_exports, {
  loader: () => loader2
});
var PREVIEW_CACHE_CONTROL = "public, max-age=60, s-maxage=300, stale-while-revalidate=86400", EMAIL_LOGO_BLOCK = /<p\b[^>]*class=["']tac["'][^>]*>\s*<a\b[^>]*>\s*<img\b[^>]*src=["']https:\/\/img\.thepoast\.com\/tp_u6yYte\.png["'][^>]*>\s*<\/a>\s*<\/p>/i, EMAIL_FOOTER_BLOCK = /<div\b[^>]*class=["'][^"']*footer[^"']*["'][\s\S]*?<\/div>/gi;
async function loader2({ params }) {
  var _a2;
  let company = ((_a2 = params.company) == null ? void 0 : _a2.toLowerCase()) || "", campaignId = CAMPAIGN_MAP[company];
  if (!campaignId)
    return new Response("Campaign not found", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  try {
    let rawHtml = await getCampaignPreview(campaignId);
    if (!rawHtml)
      return new Response("Campaign preview unavailable", {
        status: 404,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    let body = rawHtml.replace(EMAIL_LOGO_BLOCK, "").replace(EMAIL_FOOTER_BLOCK, "");
    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": PREVIEW_CACHE_CONTROL,
        "X-Content-Type-Options": "nosniff"
      }
    });
  } catch (error) {
    return console.error(`[preview] Failed to load campaign for ${company}:`, error), new Response("Temporarily unavailable", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  }
}

// app/routes/custom/$company.results.tsx
var company_results_exports = {};
__export(company_results_exports, {
  CatchBoundary: () => CatchBoundary2,
  action: () => action,
  default: () => AdResultsPage,
  headers: () => headers2,
  links: () => links3,
  loader: () => loader3,
  meta: () => meta3
});
var import_react11 = require("react"), import_react12 = require("@remix-run/react"), import_node2 = require("@remix-run/node");

// app/style/scss/custom/custom.css
var custom_default = "/build/_assets/custom-Y3S3RCQX.css";

// app/style/scss/custom/results.css
var results_default = "/build/_assets/results-OCJ5QQSL.css";

// app/data/ad-results.ts
var AD_RESULTS = {
  fin: {
    name: "Fin",
    runs: [
      {
        date: "2026-10-20",
        campaignId: 507,
        post: 3,
        placement: "Top Feed",
        stats: {
          sent: 10450,
          opens: 5120,
          clicks: 215,
          // total clicks
          uniqueClicks: 168,
          // unique people who clicked
          openRate: 49,
          // percent, optional (auto-calculated if removed)
          ctr: 1.61
          // percent, optional (auto-calculated if removed)
        }
      },
      {
        date: "2026-11-21",
        campaignId: 507,
        post: 3,
        placement: "Mid Feed",
        stats: {
          sent: 10450,
          opens: 5120,
          clicks: 200,
          // total clicks
          uniqueClicks: 168,
          // unique people who clicked
          openRate: 44.21,
          // percent, optional (auto-calculated if removed)
          ctr: 1.61
          // percent, optional (auto-calculated if removed)
        }
      }
    ]
  }
}, formatPct = (value) => `${value.toFixed(2)}%`;
function getOpenRate(stats) {
  return typeof stats.openRate == "number" ? formatPct(stats.openRate) : stats.sent > 0 ? formatPct(stats.opens / stats.sent * 100) : "0.00%";
}
function getCtr(stats) {
  return typeof stats.ctr == "number" ? formatPct(stats.ctr) : stats.sent > 0 ? formatPct(stats.uniqueClicks / stats.sent * 100) : "0.00%";
}
var runKey = (run) => run.id ?? run.date;
function getAccount(slug) {
  let account = AD_RESULTS[slug.toLowerCase()];
  return account && account.runs.length > 0 ? account : null;
}
var hasResults = (slug) => getAccount(slug) !== null;
function getRuns(slug) {
  let account = getAccount(slug);
  return account ? [...account.runs].sort((a, b) => b.date.localeCompare(a.date)) : [];
}
function findRun(slug, key) {
  let runs = getRuns(slug);
  return runs.length === 0 ? null : runs.find((r) => runKey(r) === key) ?? runs[0];
}
function displayName(slug) {
  var _a2;
  return ((_a2 = getAccount(slug)) == null ? void 0 : _a2.name) ?? slug.charAt(0).toUpperCase() + slug.slice(1);
}

// app/utils/ad-results.server.ts
var import_node = require("@remix-run/node");

// app/utils/ad-results.ts
var PLACEMENTS_PAID = ["Top Feed \u2014 $500", "Mid Feed \u2014 $300"], RAW_PLACEMENTS = ["Top Feed", "Mid Feed"], PAYMENT_METHODS = ["Credit Card", "Insertion Order"], CREATIVES = ["Same ad", "New ad"], int = (value) => value.toLocaleString("en-US"), pct = (part, whole) => whole > 0 ? `${(part / whole * 100).toFixed(2)}%` : "\u2014";
function formatDate(value) {
  let [y, m, d] = value.split("-").map(Number);
  return !y || !m || !d ? value : new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  });
}
function buildResultsData(slug, runParam) {
  var _a2;
  let runs = getRuns(slug), current = findRun(slug, runParam) ?? runs[0], withStats = runs.filter((r) => r.stats), totals = {
    campaigns: runs.length,
    clicks: withStats.reduce((sum, r) => {
      var _a3;
      return sum + (((_a3 = r.stats) == null ? void 0 : _a3.clicks) ?? 0);
    }, 0),
    ctr: pct(
      withStats.reduce((sum, r) => {
        var _a3;
        return sum + (((_a3 = r.stats) == null ? void 0 : _a3.uniqueClicks) ?? 0);
      }, 0),
      withStats.reduce((sum, r) => {
        var _a3;
        return sum + (((_a3 = r.stats) == null ? void 0 : _a3.sent) ?? 0);
      }, 0)
    ),
    hasStats: withStats.length > 0
  }, last = ((_a2 = runs[0]) == null ? void 0 : _a2.placement) ?? "", defaultPlacement = RAW_PLACEMENTS.includes(last) ? last : "Top Feed";
  return {
    slug,
    name: displayName(slug),
    runs,
    currentId: runKey(current),
    latestId: runKey(runs[0]),
    totals,
    defaultPlacement
  };
}

// app/utils/poast.server.ts
function config() {
  let baseUrl = (process.env.LISTMONK_URL || "https://app.thepoast.com").replace(/\/+$/, ""), apiUser = process.env.LISTMONK_API_USER || process.env.LISTMONK_USERNAME, apiToken = process.env.LISTMONK_API_TOKEN || process.env.LISTMONK_TOKEN, missing = [];
  if (apiUser || missing.push("LISTMONK_USERNAME"), apiToken || missing.push("LISTMONK_TOKEN"), missing.length)
    throw new Error(`Missing env vars: ${missing.join(", ")}`);
  return { baseUrl, apiUser, apiToken };
}
async function listmonk(path, init = {}) {
  let { baseUrl, apiUser, apiToken } = config();
  return fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${apiUser}:${apiToken}`,
      ...init.headers || {}
    }
  });
}
function explain(step, status, body) {
  let hint = "";
  return status === 401 ? hint = "Credentials rejected. Check LISTMONK_USERNAME / LISTMONK_TOKEN." : status === 403 ? hint = "API user lacks permission (needs subscribers:manage and access to the list)." : status === 404 ? hint = "Path not found. Check LISTMONK_URL." : status === 400 && (hint = "Listmonk rejected the data (often a wrong list ID)."), `Listmonk ${step} failed (HTTP ${status}). ${hint} Response: ${body.slice(0, 300)}`;
}
async function upsertSubscriber(opts) {
  var _a2, _b2, _c;
  let { email, name, listId, attribs, historyKey, historyEntry } = opts, lists = listId ? [listId] : [], createRes = await listmonk("/api/subscribers", {
    method: "POST",
    body: JSON.stringify({
      email,
      name,
      status: "enabled",
      lists,
      preconfirm_subscriptions: !0,
      attribs: { ...attribs, [historyKey]: [historyEntry] }
    })
  });
  if (createRes.ok)
    return;
  if (createRes.status !== 409)
    throw new Error(explain("create", createRes.status, await createRes.text()));
  let query = `subscribers.email = '${email.replace(/'/g, "''")}'`, findRes = await listmonk(
    `/api/subscribers?per_page=1&query=${encodeURIComponent(query)}`
  );
  if (!findRes.ok)
    throw new Error(explain("lookup", findRes.status, await findRes.text()));
  let existing = (_c = (_b2 = (_a2 = await findRes.json()) == null ? void 0 : _a2.data) == null ? void 0 : _b2.results) == null ? void 0 : _c[0];
  if (!existing)
    throw new Error("Email exists but lookup returned nothing");
  let existingAttribs = existing.attribs ?? {}, history = Array.isArray(existingAttribs[historyKey]) ? existingAttribs[historyKey] : [], listIds = Array.from(
    /* @__PURE__ */ new Set([
      ...(existing.lists ?? []).map((l) => l.id),
      ...lists
    ])
  ), updateRes = await listmonk(`/api/subscribers/${existing.id}`, {
    method: "PUT",
    body: JSON.stringify({
      email: existing.email,
      name: opts.overwriteName ? name : existing.name || name,
      status: existing.status,
      lists: listIds,
      preconfirm_subscriptions: !0,
      attribs: {
        ...existingAttribs,
        ...attribs,
        [historyKey]: [...history, historyEntry].slice(-20)
      }
    })
  });
  if (!updateRes.ok)
    throw new Error(explain("update", updateRes.status, await updateRes.text()));
}

// app/utils/ad-results.server.ts
async function saveRebookRequest(req) {
  let listId = Number(process.env.LISTMONK_ADVERTISER_LIST_ID || 31), now = (/* @__PURE__ */ new Date()).toISOString(), entry2 = {
    submitted_at: now,
    type: "rebook",
    company: req.company,
    start_date: req.startDate,
    placement: req.placement,
    payment_method: req.paymentMethod,
    creative: req.creative,
    notes: req.notes,
    previous_campaign_id: req.previousCampaignId
  };
  await upsertSubscriber({
    email: `campaign+${req.slug}@thepoast.com`,
    name: `${req.company} Campaign Lead`,
    listId,
    attribs: {
      subscriber_type: "advertiser",
      source: `${req.slug}-rebook-flow`,
      company: req.company,
      start_date: req.startDate,
      placement: req.placement,
      payment_method: req.paymentMethod,
      creative: req.creative,
      notes: req.notes,
      last_submitted_at: now
    },
    historyKey: "ad_requests",
    historyEntry: entry2
  });
}
var str = (value, max) => typeof value == "string" ? value.trim().slice(0, max) : "";
async function handleRebookAction(request, slug) {
  var _a2;
  if (!getAccount(slug))
    throw new Response("Not found", { status: 404 });
  let formData = await request.formData();
  if (str(formData.get("nonce"), 200))
    return (0, import_node.redirect)("/thank-you");
  let startDate = str(formData.get("startDate"), 50), placement = str(formData.get("placement"), 50), paymentMethod = str(formData.get("paymentMethod"), 50), creative = str(formData.get("creative"), 50), notes = str(formData.get("notes"), 5e3), altcha = str(formData.get("altcha"), 2e4), fieldErrors = {};
  if (/^\d{4}-\d{2}-\d{2}$/.test(startDate) || (fieldErrors.startDate = "Please select a target start date."), RAW_PLACEMENTS.includes(placement) || (fieldErrors.placement = "Please select a valid placement."), PAYMENT_METHODS.includes(paymentMethod) || (fieldErrors.paymentMethod = "Please select a payment method."), CREATIVES.includes(creative) || (fieldErrors.creative = "Please choose which ad to run."), process.env.ALTCHA_REQUIRED !== "false" && !altcha && (fieldErrors.altcha = "Please complete the verification check."), Object.keys(fieldErrors).length > 0)
    return (0, import_node.json)(
      { error: "Please fix the highlighted fields.", fieldErrors },
      { status: 400 }
    );
  try {
    await saveRebookRequest({
      slug,
      company: displayName(slug),
      startDate,
      placement,
      paymentMethod,
      creative,
      notes,
      previousCampaignId: ((_a2 = getRuns(slug)[0]) == null ? void 0 : _a2.campaignId) ?? null
    });
  } catch (err) {
    console.error("[results] failed to save rebook request:", err);
    let reason = err instanceof Error ? err.message : String(err);
    return (0, import_node.json)(
      {
        error: "Something went wrong submitting your booking. Please try again.",
        debug: reason
      },
      { status: 500 }
    );
  }
  return (0, import_node.redirect)("/thank-you");
}

// app/routes/custom/$company.results.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), BANNER_TRIGGER2 = 0.85, STEPS = ["Schedule", "Confirm"], PLACEMENTS_PAID2 = ["Top Feed \u2014 $500", "Mid Feed \u2014 $300"], RAW_PLACEMENTS2 = ["Top Feed", "Mid Feed"], PAYMENT_METHODS2 = ["Credit Card", "Insertion Order"], CREATIVES2 = ["Same ad", "New ad"], str2 = (value, max) => typeof value == "string" ? value.trim().slice(0, max) : "", int2 = (value) => value.toLocaleString("en-US"), pct2 = (part, whole) => whole > 0 ? `${(part / whole * 100).toFixed(2)}%` : "\u2014";
function formatDate2(value) {
  let [y, m, d] = value.split("-").map(Number);
  return !y || !m || !d ? value : new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  });
}
async function loader3({ params, request }) {
  var _a2, _b2;
  let slug = ((_a2 = params.company) == null ? void 0 : _a2.toLowerCase()) || "";
  if (!getAccount(slug))
    throw new Response("Not found", { status: 404 });
  let runs = getRuns(slug), requested = new URL(request.url).searchParams.get("run"), current = findRun(slug, requested) ?? runs[0], withStats = runs.filter((r) => r.stats), totals = {
    campaigns: runs.length,
    clicks: withStats.reduce((sum, r) => {
      var _a3;
      return sum + (((_a3 = r.stats) == null ? void 0 : _a3.clicks) ?? 0);
    }, 0),
    ctr: pct2(
      withStats.reduce((sum, r) => {
        var _a3;
        return sum + (((_a3 = r.stats) == null ? void 0 : _a3.uniqueClicks) ?? 0);
      }, 0),
      withStats.reduce((sum, r) => {
        var _a3;
        return sum + (((_a3 = r.stats) == null ? void 0 : _a3.sent) ?? 0);
      }, 0)
    ),
    hasStats: withStats.length > 0
  }, lastPlacement = (_b2 = runs[0]) == null ? void 0 : _b2.placement, defaultPlacement = RAW_PLACEMENTS2.includes(
    lastPlacement ?? ""
  ) ? lastPlacement : "Top Feed";
  return (0, import_node2.json)({
    slug,
    name: displayName(slug),
    runs,
    currentId: runKey(current),
    latestId: runKey(runs[0]),
    totals,
    defaultPlacement
  });
}
async function action({ request, params }) {
  var _a2, _b2;
  let slug = ((_a2 = params.company) == null ? void 0 : _a2.toLowerCase()) || "";
  if (!getAccount(slug))
    throw new Response("Not found", { status: 404 });
  let formData = await request.formData();
  if (str2(formData.get("nonce"), 200))
    return (0, import_node2.redirect)("/thank-you");
  let startDate = str2(formData.get("startDate"), 50), placement = str2(formData.get("placement"), 50), paymentMethod = str2(formData.get("paymentMethod"), 50), creative = str2(formData.get("creative"), 50), notes = str2(formData.get("notes"), 5e3), altcha = str2(formData.get("altcha"), 2e4), fieldErrors = {};
  if (/^\d{4}-\d{2}-\d{2}$/.test(startDate) || (fieldErrors.startDate = "Please select a target start date."), RAW_PLACEMENTS2.includes(placement) || (fieldErrors.placement = "Please select a valid placement."), PAYMENT_METHODS2.includes(paymentMethod) || (fieldErrors.paymentMethod = "Please select a payment method."), CREATIVES2.includes(creative) || (fieldErrors.creative = "Please choose which ad to run."), process.env.ALTCHA_REQUIRED !== "false" && !altcha && (fieldErrors.altcha = "Please complete the verification check."), Object.keys(fieldErrors).length > 0)
    return (0, import_node2.json)(
      { error: "Please fix the highlighted fields.", fieldErrors },
      { status: 400 }
    );
  try {
    await saveRebookRequest({
      slug,
      company: displayName(slug),
      startDate,
      placement,
      paymentMethod,
      creative,
      notes,
      previousCampaignId: ((_b2 = getRuns(slug)[0]) == null ? void 0 : _b2.campaignId) ?? null
    });
  } catch (err) {
    console.error("[results] failed to save rebook request:", err);
    let reason = err instanceof Error ? err.message : String(err);
    return (0, import_node2.json)(
      {
        error: "Something went wrong submitting your booking. Please try again.",
        debug: reason
      },
      { status: 500 }
    );
  }
  return (0, import_node2.redirect)("/thank-you");
}
var meta3 = ({ data }) => data ? {
  title: `${data.name} ad results / thepoast`,
  robots: "noindex, nofollow"
} : { title: "404 / thepoast", robots: "noindex" }, links3 = () => [
  { rel: "stylesheet", href: custom_default },
  { rel: "stylesheet", href: results_default },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
], headers2 = () => ({
  "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=300",
  "X-Robots-Tag": "noindex, nofollow"
});
function CatchBoundary2() {
  let caught = (0, import_react12.useCatch)();
  if (caught.status === 404)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(NotFound, {}, void 0, !1, {
      fileName: "app/routes/custom/$company.results.tsx",
      lineNumber: 226,
      columnNumber: 12
    }, this);
  throw new Error(`Unexpected response: ${caught.status}`);
}
function useReachedEndOfFeed() {
  let endRef = (0, import_react11.useRef)(null), [reached, setReached] = (0, import_react11.useState)(!1);
  return (0, import_react11.useEffect)(() => {
    let el = endRef.current;
    if (!el)
      return;
    let frame = 0, check = () => {
      frame = 0;
      let top = el.getBoundingClientRect().top;
      setReached(window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER2);
    }, schedule3 = () => {
      frame || (frame = requestAnimationFrame(check));
    };
    window.addEventListener("scroll", schedule3, { passive: !0 }), window.addEventListener("resize", schedule3);
    let resizeObserver;
    return typeof ResizeObserver < "u" && el.parentElement && (resizeObserver = new ResizeObserver(schedule3), resizeObserver.observe(el.parentElement)), check(), () => {
      window.removeEventListener("scroll", schedule3), window.removeEventListener("resize", schedule3), resizeObserver == null || resizeObserver.disconnect(), frame && cancelAnimationFrame(frame);
    };
  }, []), { endRef, reached };
}
function CalendarIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "svg",
    {
      className: "bk-date-icon",
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("rect", { x: "3", y: "4.5", width: "18", height: "16.5", rx: "3" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 291,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { d: "M3 9.5h18M8 2.5v4M16 2.5v4" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 292,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/custom/$company.results.tsx",
      lineNumber: 279,
      columnNumber: 5
    },
    this
  );
}
function CheckIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { d: "M5 12.5l4.5 4.5L19 7.5" }, void 0, !1, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 310,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/custom/$company.results.tsx",
      lineNumber: 299,
      columnNumber: 5
    },
    this
  );
}
function Segmented({
  label,
  options,
  rawOptions,
  value,
  onChange
}) {
  let index = Math.max(0, (rawOptions ?? options).indexOf(value));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "div",
    {
      className: `bk-seg is-${options.length}`,
      role: "group",
      "aria-label": label,
      style: { "--bk-i": index, "--bk-n": options.length },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "bk-seg-thumb", "aria-hidden": "true" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 338,
          columnNumber: 7
        }, this),
        options.map((option, i) => {
          let rawValue = rawOptions ? rawOptions[i] : option, isActive = rawValue === value;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "button",
            {
              type: "button",
              "aria-pressed": isActive,
              className: `bk-seg-btn${isActive ? " is-active" : ""}`,
              onClick: () => onChange(rawValue),
              children: option
            },
            option,
            !1,
            {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 343,
              columnNumber: 11
            },
            this
          );
        })
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/custom/$company.results.tsx",
      lineNumber: 332,
      columnNumber: 5
    },
    this
  );
}
function AdResultsPage() {
  let { slug, name, runs, currentId, latestId, totals, defaultPlacement } = (0, import_react12.useLoaderData)(), actionData = (0, import_react12.useActionData)(), errors = (actionData == null ? void 0 : actionData.fieldErrors) ?? {}, { endRef, reached } = useReachedEndOfFeed(), isSubmitting = (0, import_react12.useNavigation)().state === "submitting", run = runs.find((r) => runKey(r) === currentId) ?? runs[0], stats = run.stats, isLatest = currentId === latestId, previewOn = run.showPreview !== !1, [booking, setBooking] = (0, import_react11.useState)(!1), [step, setStep] = (0, import_react11.useState)(1), [startDate, setStartDate] = (0, import_react11.useState)(""), [placement, setPlacement] = (0, import_react11.useState)(defaultPlacement), [paymentMethod, setPaymentMethod] = (0, import_react11.useState)("Credit Card"), [creative, setCreative] = (0, import_react11.useState)("Same ad"), [notes, setNotes] = (0, import_react11.useState)(""), [stepError, setStepError] = (0, import_react11.useState)(""), [minDate, setMinDate] = (0, import_react11.useState)(""), flowRef = (0, import_react11.useRef)(null);
  (0, import_react11.useEffect)(() => {
    let d = /* @__PURE__ */ new Date(), pad = (n) => String(n).padStart(2, "0");
    setMinDate(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
  }, []);
  let openBooking = () => {
    setBooking(!0), setStep(1), requestAnimationFrame(
      () => {
        var _a2;
        return (_a2 = flowRef.current) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    );
  }, openPicker = (input) => {
    try {
      input.showPicker();
    } catch {
    }
  }, goToReview = () => {
    if (!startDate) {
      setStepError("Please select a target start date before proceeding.");
      return;
    }
    if (minDate && startDate < minDate) {
      setStepError("Please choose a start date that isn't in the past.");
      return;
    }
    setStepError(""), setStep(2);
  }, summaryRows = [
    { label: "Target Date", value: startDate ? formatDate2(startDate) : "Earliest Available" },
    { label: "Placement", value: placement },
    { label: "Payment Method", value: paymentMethod },
    { label: "Ad", value: creative }
  ], serverFieldMessages = Object.entries(errors).filter(([key, message]) => key !== "altcha" && message).map(([, message]) => message), submitLabel = isSubmitting ? "Submitting..." : paymentMethod === "Insertion Order" ? "Lock In Insertion Order \u2192" : "Proceed with Credit Card \u2192";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "feed-page bk", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "header",
      {
        className: `feed-topbar${reached ? " is-hidden" : ""}`,
        style: { borderLeft: "none", borderRight: "none" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: "/img/tp.png", alt: "thepoast", decoding: "async" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 445,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 444,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 440,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { className: "feed-stream bk-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { className: "bk-card rs-hero", "aria-labelledby": "rs-name", children: [
        !isLatest && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Link, { to: "?", className: "rs-back", preventScrollReset: !1, children: "\u2190 Back to latest campaign" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 454,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 453,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "rs-eyebrow", children: "Ad results" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 460,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "rs-name", id: "rs-name", children: name }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 461,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "rs-chips", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-chip", children: formatDate2(run.date) }, void 0, !1, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 466,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-chip", children: [
            "Post #",
            run.post
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 467,
            columnNumber: 13
          }, this),
          run.placement && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-chip", children: run.placement }, void 0, !1, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 468,
            columnNumber: 31
          }, this),
          !stats && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-chip", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-dot", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 471,
              columnNumber: 17
            }, this),
            "Results pending"
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 470,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 465,
          columnNumber: 11
        }, this),
        stats ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "rs-hero-value", children: int2(stats.clicks) }, void 0, !1, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 479,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "rs-hero-label", children: "Clicks" }, void 0, !1, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 480,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "rs-stats", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "rs-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-stat-value", children: int2(stats.sent) }, void 0, !1, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 484,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-stat-label", children: "Sent" }, void 0, !1, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 485,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 483,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "rs-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-stat-value", children: int2(stats.opens) }, void 0, !1, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 488,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-stat-label", children: "Opens" }, void 0, !1, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 489,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-stat-sub", children: [
                pct2(stats.opens, stats.sent),
                " open rate"
              ] }, void 0, !0, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 490,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 487,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "rs-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-stat-value", children: int2(stats.uniqueClicks) }, void 0, !1, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 493,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-stat-label", children: "Unique clickers" }, void 0, !1, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 494,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 492,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "rs-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-stat-value", children: pct2(stats.uniqueClicks, stats.sent) }, void 0, !1, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 497,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-stat-label", children: "Click-through rate" }, void 0, !1, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 498,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 496,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 482,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "rs-foot", children: "Open counts are approximate, since email privacy features inflate them. Clicks are the most reliable measure." }, void 0, !1, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 502,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 478,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "rs-pending", children: "Results are on the way. This page updates once the campaign has had time to collect clicks." }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 508,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 451,
        columnNumber: 9
      }, this),
      (previewOn || run.image) && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { className: "bk-card", "aria-labelledby": "rs-ad-label", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-section-label", id: "rs-ad-label", children: "The ad as it ran" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 518,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "feed-embed loaded bk-preview rs-preview", children: previewOn ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          feed_embed_default,
          {
            id: `${slug}-run-${currentId}`,
            src: `/custom/${slug}/ad?run=${encodeURIComponent(currentId)}`,
            title: `${name} ad, ${formatDate2(run.date)}`,
            interactive: !0,
            bordered: !1,
            fallbackHeight: 350
          },
          currentId,
          !1,
          {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 524,
            columnNumber: 13
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: run.image, alt: `${name} ad, ${formatDate2(run.date)}`, loading: "lazy" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 534,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 522,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "rs-caption", children: [
          "Post #",
          run.post,
          " in the ",
          formatDate2(run.date),
          " edition"
        ] }, void 0, !0, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 538,
          columnNumber: 13
        }, this),
        run.note && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "rs-note", children: run.note }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 542,
          columnNumber: 26
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 517,
        columnNumber: 9
      }, this),
      runs.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { className: "bk-card", "aria-labelledby": "rs-history-label", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-section-label", id: "rs-history-label", children: "All campaigns" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 549,
          columnNumber: 13
        }, this),
        totals.hasStats && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "rs-stats is-3 rs-totals", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "rs-stat", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-stat-value", children: totals.campaigns }, void 0, !1, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 556,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-stat-label", children: "Campaigns" }, void 0, !1, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 557,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 555,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "rs-stat", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-stat-value", children: int2(totals.clicks) }, void 0, !1, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 560,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-stat-label", children: "Total clicks" }, void 0, !1, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 561,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 559,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "rs-stat", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-stat-value", children: totals.ctr }, void 0, !1, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 564,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-stat-label", children: "Avg CTR" }, void 0, !1, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 565,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 563,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 554,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ol", { className: "rs-runs", children: runs.map((r) => {
          let key = runKey(r), isCurrent = key === currentId;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_react12.Link,
            {
              to: key === latestId ? "?" : `?run=${encodeURIComponent(key)}`,
              className: `rs-run${isCurrent ? " is-current" : ""}`,
              "aria-current": isCurrent ? "true" : void 0,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-run-main", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-run-date", children: formatDate2(r.date) }, void 0, !1, {
                    fileName: "app/routes/custom/$company.results.tsx",
                    lineNumber: 582,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-run-meta", children: [
                    "Post #",
                    r.post,
                    r.placement ? ` \xB7 ${r.placement}` : ""
                  ] }, void 0, !0, {
                    fileName: "app/routes/custom/$company.results.tsx",
                    lineNumber: 583,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 581,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-run-stat", children: r.stats ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-run-clicks", children: [
                    int2(r.stats.clicks),
                    " clicks"
                  ] }, void 0, !0, {
                    fileName: "app/routes/custom/$company.results.tsx",
                    lineNumber: 591,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-run-ctr", children: [
                    pct2(r.stats.uniqueClicks, r.stats.sent),
                    " CTR"
                  ] }, void 0, !0, {
                    fileName: "app/routes/custom/$company.results.tsx",
                    lineNumber: 592,
                    columnNumber: 29
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 590,
                  columnNumber: 23
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "rs-run-ctr", children: "Pending" }, void 0, !1, {
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 597,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 588,
                  columnNumber: 23
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 576,
              columnNumber: 21
            },
            this
          ) }, key, !1, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 575,
            columnNumber: 17
          }, this);
        }) }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 570,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 548,
        columnNumber: 9
      }, this),
      !booking && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { className: "bk-card rs-cta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "bk-title", children: "Ready for another run?" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 611,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "bk-sub", children: "Book your next ad in about a minute. Reuse this one or send us something new." }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 612,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "button",
          {
            type: "button",
            className: "bk-btn bk-btn-primary bk-btn-block",
            onClick: openBooking,
            children: "Book Your Next Ad \u2192"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 615,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 610,
        columnNumber: 9
      }, this),
      booking && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "rs-flow", ref: flowRef, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ol", { className: "bk-steps", "aria-label": "Progress", children: STEPS.map((label, i) => {
          let n = i + 1, state = step === n ? "current" : step > n ? "done" : "todo";
          return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react11.Fragment, { children: [
            i > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "li",
              {
                className: `bk-step-line${step >= n ? " is-done" : ""}`,
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 635,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "li",
              {
                className: `bk-step is-${state}`,
                "aria-current": state === "current" ? "step" : void 0,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    className: "bk-step-btn",
                    disabled: state !== "done",
                    onClick: () => setStep(n),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "bk-step-dot", children: state === "done" ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CheckIcon, {}, void 0, !1, {
                        fileName: "app/routes/custom/$company.results.tsx",
                        lineNumber: 651,
                        columnNumber: 47
                      }, this) : n }, void 0, !1, {
                        fileName: "app/routes/custom/$company.results.tsx",
                        lineNumber: 650,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "bk-step-label", children: label }, void 0, !1, {
                        fileName: "app/routes/custom/$company.results.tsx",
                        lineNumber: 653,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/custom/$company.results.tsx",
                    lineNumber: 644,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 640,
                columnNumber: 21
              },
              this
            )
          ] }, label, !0, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 633,
            columnNumber: 17
          }, this);
        }) }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 628,
          columnNumber: 13
        }, this),
        step === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bk-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "rs-flow-title", children: "Run another ad" }, void 0, !1, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 664,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "bk-sub", children: "Pick a date and placement. We'll confirm by email." }, void 0, !1, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 665,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bk-fields", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "bk-label", id: "rs-date-label", children: "Target Start Date" }, void 0, !1, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 669,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { className: "bk-date", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: `bk-date-text${startDate ? "" : " is-empty"}`, children: startDate ? formatDate2(startDate) : "Select launch date" }, void 0, !1, {
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 674,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CalendarIcon, {}, void 0, !1, {
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 677,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  "input",
                  {
                    type: "date",
                    className: "bk-date-input",
                    "aria-labelledby": "rs-date-label",
                    value: startDate,
                    min: minDate || void 0,
                    onClick: (e) => openPicker(e.currentTarget),
                    onChange: (e) => {
                      setStartDate(e.target.value), setStepError("");
                    }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/custom/$company.results.tsx",
                    lineNumber: 678,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 673,
                columnNumber: 21
              }, this),
              (stepError || errors.startDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "bk-error", role: "alert", children: stepError || errors.startDate }, void 0, !1, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 693,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 668,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "bk-label", children: "Select Placement" }, void 0, !1, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 700,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                Segmented,
                {
                  label: "Placement",
                  options: PLACEMENTS_PAID2,
                  rawOptions: RAW_PLACEMENTS2,
                  value: placement,
                  onChange: setPlacement
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 701,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 699,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "bk-label", children: "Which Ad" }, void 0, !1, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 711,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                Segmented,
                {
                  label: "Which ad",
                  options: CREATIVES2,
                  value: creative,
                  onChange: setCreative
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 712,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 710,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "bk-label", children: "Payment Method" }, void 0, !1, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 721,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                Segmented,
                {
                  label: "Payment method",
                  options: PAYMENT_METHODS2,
                  value: paymentMethod,
                  onChange: setPaymentMethod
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/custom/$company.results.tsx",
                  lineNumber: 722,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 720,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 667,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bk-actions", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "button",
              {
                type: "button",
                className: "bk-btn bk-btn-secondary",
                onClick: () => setBooking(!1),
                children: "Cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 732,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { type: "button", className: "bk-btn bk-btn-primary", onClick: goToReview, children: "Review Order \u2192" }, void 0, !1, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 739,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 731,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 663,
          columnNumber: 11
        }, this),
        step === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Form, { method: "post", className: "bk-card", children: [
          (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bk-alert", role: "alert", children: [
            actionData.error,
            serverFieldMessages.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { children: serverFieldMessages.map(
              (message) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: message }, message, !1, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 755,
                columnNumber: 17
              }, this)
            ) }, void 0, !1, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 753,
              columnNumber: 15
            }, this),
            actionData.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("code", { children: actionData.debug }, void 0, !1, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 759,
              columnNumber: 42
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 750,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "startDate", value: startDate }, void 0, !1, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 763,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "placement", value: placement }, void 0, !1, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 764,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "paymentMethod", value: paymentMethod }, void 0, !1, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 765,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "creative", value: creative }, void 0, !1, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 766,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "input",
            {
              type: "text",
              name: "nonce",
              className: "hp-field",
              tabIndex: -1,
              autoComplete: "off",
              "aria-hidden": "true",
              style: { display: "none" }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 767,
              columnNumber: 17
            },
            this
          ),
          creative === "Same ad" && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { style: { marginBottom: "1.5rem" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "bk-label", style: { marginBottom: "0.5rem" }, children: [
              name,
              " Ad"
            ] }, void 0, !0, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 779,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "div",
              {
                className: "feed-embed loaded bk-preview",
                style: { maxHeight: "220px", overflow: "hidden", marginBottom: 0 },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  feed_embed_default,
                  {
                    id: `${slug}-rebook-thumbnail`,
                    src: `/custom/${slug}/storyboard`,
                    title: `${name} Target Ad Unit`,
                    interactive: !1,
                    bordered: !1,
                    fallbackHeight: 220
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/custom/$company.results.tsx",
                    lineNumber: 786,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 782,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 778,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("dl", { className: "bk-summary", children: summaryRows.map(
            (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bk-row", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("dt", { children: row.label }, void 0, !1, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 801,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("dd", { children: row.value }, void 0, !1, {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 802,
                columnNumber: 23
              }, this)
            ] }, row.label, !0, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 800,
              columnNumber: 15
            }, this)
          ) }, void 0, !1, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 798,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bk-group", style: { marginBottom: "1.5rem" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { className: "bk-label", htmlFor: "rs-notes", children: creative === "New ad" ? "Tell us about your new ad" : "Additional Notes (Optional)" }, void 0, !1, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 808,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "textarea",
              {
                id: "rs-notes",
                name: "notes",
                className: "bk-textarea",
                rows: 3,
                placeholder: creative === "New ad" ? "Link to your new creative, copy, or tracking links..." : "Special instructions or tracking links...",
                value: notes,
                onChange: (e) => setNotes(e.target.value)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 813,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 807,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bk-altcha", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 829,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 828,
            columnNumber: 17
          }, this),
          errors.altcha && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "bk-error", role: "alert", style: { marginBottom: "1.25rem" }, children: errors.altcha }, void 0, !1, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 832,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bk-actions", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "button",
              {
                type: "button",
                className: "bk-btn bk-btn-secondary",
                onClick: () => setStep(1),
                children: "\u2190 Back"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/custom/$company.results.tsx",
                lineNumber: 838,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { type: "submit", className: "bk-btn bk-btn-primary", disabled: isSubmitting, children: submitLabel }, void 0, !1, {
              fileName: "app/routes/custom/$company.results.tsx",
              lineNumber: 845,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.results.tsx",
            lineNumber: 837,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 748,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 627,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 854,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/custom/$company.results.tsx",
      lineNumber: 449,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("footer", { className: "feed-footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "feed-footer-links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Link, { to: "/about", children: "about" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 859,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Link, { to: "/archive", children: "archive" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 860,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Link, { to: "/submit-post", children: "submit post" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 861,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Link, { to: "/policies/privacy", children: "privacy" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 862,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Link, { to: "/policies/terms", children: "terms" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 863,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Link, { to: "/book", children: "advertise" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 864,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Link, { to: "/manager", children: "ads manager" }, void 0, !1, {
          fileName: "app/routes/custom/$company.results.tsx",
          lineNumber: 865,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 858,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "feed-copyright", children: "thepoast \xA9 2026" }, void 0, !1, {
        fileName: "app/routes/custom/$company.results.tsx",
        lineNumber: 867,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/custom/$company.results.tsx",
      lineNumber: 857,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/custom/$company.results.tsx",
    lineNumber: 439,
    columnNumber: 5
  }, this);
}

// app/routes/custom/$company.book.tsx
var company_book_exports = {};
__export(company_book_exports, {
  CatchBoundary: () => CatchBoundary3,
  action: () => action2,
  default: () => AdvertiserBookPage,
  headers: () => headers3,
  links: () => links4,
  loader: () => loader4,
  meta: () => meta4
});
var import_react15 = require("react"), import_react16 = require("@remix-run/react"), import_node3 = require("@remix-run/node");

// app/components/media-kit.tsx
var import_react13 = require("react"), import_react14 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), MEDIA_KIT = {
  // One-liner shown above the Book button in the bottom banner
  bannerLine: "70,000 weekly readers \xB7 27,400 subscribers",
  // What every placement price covers.
  priceUnit: "per issue",
  // Only add stats you can defend. A third stat like
  // { value: "X", label: "Clicks per issue" } is more credible than open rate.
  stats: [
    { value: "10,000", label: "daily readers" },
    { value: "27,400", label: "subscribers" }
  ],
  // Who reads it, in one line. Leave empty to hide the line entirely.
  audience: "",
  placements: [
    {
      name: "Top Feed",
      price: "$500",
      note: "Be the first ad readers see, near the top of the feed"
    },
    {
      name: "Mid Feed",
      price: "$300",
      note: "Placed natively between posts, further down the feed"
    }
  ],
  // Where "Full media kit" goes (placeholder: point at your real media kit)
  fullKitHref: "/media-kit"
}, FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
function MediaKit({ open, onClose, ctaLabel, onCta }) {
  let [render, setRender] = (0, import_react13.useState)(!1), [shown, setShown] = (0, import_react13.useState)(!1), sheetRef = (0, import_react13.useRef)(null), closeRef = (0, import_react13.useRef)(null), lastFocused = (0, import_react13.useRef)(null), drag = (0, import_react13.useRef)({ startY: 0, dy: 0, active: !1 });
  (0, import_react13.useEffect)(() => {
    if (open) {
      lastFocused.current = document.activeElement, setRender(!0);
      let inner = 0, outer = requestAnimationFrame(() => {
        inner = requestAnimationFrame(() => setShown(!0));
      });
      return () => {
        cancelAnimationFrame(outer), cancelAnimationFrame(inner);
      };
    }
    setShown(!1);
    let t = window.setTimeout(() => {
      var _a2, _b2;
      setRender(!1), (_b2 = (_a2 = lastFocused.current) == null ? void 0 : _a2.focus) == null || _b2.call(_a2);
    }, 320);
    return () => window.clearTimeout(t);
  }, [open]), (0, import_react13.useEffect)(() => {
    var _a2;
    if (!open)
      return;
    let prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden", (_a2 = closeRef.current) == null || _a2.focus();
    let onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !sheetRef.current)
        return;
      let items = Array.from(
        sheetRef.current.querySelectorAll(FOCUSABLE)
      );
      if (!items.length)
        return;
      let first = items[0], last = items[items.length - 1];
      e.shiftKey && document.activeElement === first ? (e.preventDefault(), last.focus()) : !e.shiftKey && document.activeElement === last && (e.preventDefault(), first.focus());
    };
    return document.addEventListener("keydown", onKey), () => {
      document.body.style.overflow = prevOverflow, document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);
  let onDown = (e) => {
    var _a2;
    window.matchMedia("(max-width: 640px)").matches && (drag.current = { startY: e.clientY, dy: 0, active: !0 }, e.currentTarget.setPointerCapture(e.pointerId), (_a2 = sheetRef.current) == null || _a2.classList.add("is-dragging"));
  }, onMove = (e) => {
    if (!drag.current.active || !sheetRef.current)
      return;
    let dy = Math.max(0, e.clientY - drag.current.startY);
    drag.current.dy = dy, sheetRef.current.style.transform = `translateY(${dy}px)`;
  }, onUp = () => {
    !drag.current.active || !sheetRef.current || (drag.current.active = !1, sheetRef.current.classList.remove("is-dragging"), sheetRef.current.style.transform = "", drag.current.dy > 100 && onClose());
  };
  return render ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: `mk${shown ? " is-open" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mk-backdrop", onClick: onClose, "aria-hidden": "true" }, void 0, !1, {
      fileName: "app/components/media-kit.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "div",
      {
        ref: sheetRef,
        className: "mk-sheet",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "mk-title",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "div",
            {
              className: "mk-head",
              onPointerDown: onDown,
              onPointerMove: onMove,
              onPointerUp: onUp,
              onPointerCancel: onUp,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "mk-grabber", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/components/media-kit.tsx",
                lineNumber: 160,
                columnNumber: 11
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 153,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "button",
            {
              ref: closeRef,
              type: "button",
              className: "mk-close",
              "aria-label": "Close",
              onClick: onClose,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "svg",
                {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "3",
                  strokeLinecap: "round",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { d: "M6 6l12 12M18 6L6 18" }, void 0, !1, {
                    fileName: "app/components/media-kit.tsx",
                    lineNumber: 180,
                    columnNumber: 13
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/media-kit.tsx",
                  lineNumber: 170,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 163,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mk-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { id: "mk-title", className: "mk-title", children: "Find your next customers with thepoast" }, void 0, !1, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 185,
              columnNumber: 11
            }, this),
            MEDIA_KIT.audience && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "mk-lede", children: MEDIA_KIT.audience }, void 0, !1, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 188,
              columnNumber: 34
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: `mk-stats is-${MEDIA_KIT.stats.length}`, children: MEDIA_KIT.stats.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mk-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "mk-stat-value", children: s.value }, void 0, !1, {
                fileName: "app/components/media-kit.tsx",
                lineNumber: 193,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "mk-stat-label", children: s.label }, void 0, !1, {
                fileName: "app/components/media-kit.tsx",
                lineNumber: 194,
                columnNumber: 17
              }, this)
            ] }, s.label, !0, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 192,
              columnNumber: 15
            }, this)) }, void 0, !1, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 190,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "mk-label", children: "Placements" }, void 0, !1, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 199,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ul", { className: "mk-placements", children: MEDIA_KIT.placements.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "mk-placement", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mk-placement-text", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "mk-placement-name", children: p.name }, void 0, !1, {
                  fileName: "app/components/media-kit.tsx",
                  lineNumber: 204,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "mk-placement-note", children: p.note }, void 0, !1, {
                  fileName: "app/components/media-kit.tsx",
                  lineNumber: 205,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/media-kit.tsx",
                lineNumber: 203,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mk-placement-cost", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "mk-placement-price", children: p.price }, void 0, !1, {
                  fileName: "app/components/media-kit.tsx",
                  lineNumber: 208,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "mk-placement-unit", children: MEDIA_KIT.priceUnit }, void 0, !1, {
                  fileName: "app/components/media-kit.tsx",
                  lineNumber: 209,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/media-kit.tsx",
                lineNumber: 207,
                columnNumber: 17
              }, this)
            ] }, p.name, !0, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 202,
              columnNumber: 15
            }, this)) }, void 0, !1, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 200,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { type: "button", className: "mk-cta", onClick: onCta, children: ctaLabel }, void 0, !1, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 215,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { style: { textAlign: "center", marginLeft: "auto", marginRight: "auto" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.Link, { className: "back-btn", to: "/media-kit", prefetch: "intent", children: "See full media kit" }, void 0, !1, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 219,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/media-kit.tsx",
              lineNumber: 218,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/media-kit.tsx",
            lineNumber: 184,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/media-kit.tsx",
        lineNumber: 146,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/media-kit.tsx",
    lineNumber: 143,
    columnNumber: 5
  }, this) : null;
}

// app/routes/custom/$company.book.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), BANNER_TRIGGER3 = 0.85, STEPS2 = ["Preview", "Schedule", "Confirm"], PLACEMENTS_PAID3 = ["Top Feed \u2014 $500", "Mid Feed \u2014 $300"], PLACEMENTS_FREE = ["Top Feed", "Mid Feed"], RAW_PLACEMENTS3 = ["Top Feed", "Mid Feed"], PAYMENT_METHODS3 = ["Credit Card", "Insertion Order", "Free"], FREE_TERMS = [
  {
    q: "Is it really free?",
    a: "Yes. Your first ad with thepoast is on us. No card or payment details required."
  },
  {
    q: "Is it free forever?",
    a: "No. This is a one-time offer. Every ad after your first is billed at our standard rates."
  },
  {
    q: "Who qualifies?",
    a: "New advertisers. One free ad per company, and it can't be combined with other offers or exchanged for cash."
  },
  {
    q: "What's included?",
    a: "One standard paid ad for free. Just choose if you want to place it at the top or middle of our feed."
  },
  {
    q: "Any catches?",
    a: "Your start date is a target and depends on availability. Ads must follow our advertising guidelines, and we may adjust or end this offer at any time."
  }
], str3 = (value, max) => typeof value == "string" ? value.trim().slice(0, max) : "";
function formatDate3(value) {
  let [y, m, d] = value.split("-").map(Number);
  return !y || !m || !d ? value : new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  });
}
function listmonkConfig() {
  let baseUrl = (process.env.LISTMONK_URL || "https://app.thepoast.com").replace(/\/+$/, ""), apiUser = process.env.LISTMONK_API_USER || process.env.LISTMONK_USERNAME, apiToken = process.env.LISTMONK_API_TOKEN || process.env.LISTMONK_TOKEN, listId = Number(process.env.LISTMONK_ADVERTISER_LIST_ID || 31), missing = [];
  if (apiUser || missing.push("LISTMONK_USERNAME"), apiToken || missing.push("LISTMONK_TOKEN"), (!Number.isInteger(listId) || listId < 1) && missing.push("LISTMONK_ADVERTISER_LIST_ID"), missing.length)
    throw new Error(`Missing or invalid env vars: ${missing.join(", ")}`);
  return { baseUrl, apiUser, apiToken, listId };
}
async function listmonk2(path, init = {}) {
  let { baseUrl, apiUser, apiToken } = listmonkConfig();
  return fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${apiUser}:${apiToken}`,
      ...init.headers || {}
    }
  });
}
function explainListmonkFailure(step, status, body) {
  let hint = "";
  return status === 401 ? hint = "Listmonk rejected credentials." : status === 403 ? hint = "API user lacks permission." : status === 404 ? hint = "Listmonk URL/path not found." : status === 400 && (hint = "Listmonk rejected data. Check list ID."), `Listmonk ${step} failed (HTTP ${status}). ${hint} Response: ${body.slice(0, 300)}`;
}
async function saveCampaignBooking(lead, companySlug) {
  var _a2, _b2;
  let { listId } = listmonkConfig(), now = (/* @__PURE__ */ new Date()).toISOString(), bookingRequest = {
    submitted_at: now,
    company: lead.company,
    start_date: lead.startDate,
    placement: lead.placement,
    payment_method: lead.paymentMethod,
    notes: lead.notes,
    campaign_id: lead.campaignId
  }, attribs = {
    subscriber_type: "advertiser",
    source: `${companySlug}-booking-flow`,
    company: lead.company,
    start_date: lead.startDate,
    placement: lead.placement,
    payment_method: lead.paymentMethod,
    notes: lead.notes,
    last_submitted_at: now,
    ad_requests: [bookingRequest]
  }, email = `campaign+${companySlug}@thepoast.com`, name = `${lead.company} Campaign Lead`, createRes = await listmonk2("/api/subscribers", {
    method: "POST",
    body: JSON.stringify({
      email,
      name,
      status: "enabled",
      lists: [listId],
      preconfirm_subscriptions: !0,
      attribs
    })
  });
  if (createRes.ok)
    return;
  if (createRes.status !== 409)
    throw new Error(
      explainListmonkFailure("create", createRes.status, await createRes.text())
    );
  let query = `subscribers.email = '${email.replace(/'/g, "''")}'`, findRes = await listmonk2(
    `/api/subscribers?per_page=1&query=${encodeURIComponent(query)}`
  );
  if (!findRes.ok)
    throw new Error(
      explainListmonkFailure("lookup", findRes.status, await findRes.text())
    );
  let found = await findRes.json(), existing = (_b2 = (_a2 = found == null ? void 0 : found.data) == null ? void 0 : _a2.results) == null ? void 0 : _b2[0];
  if (!existing)
    throw new Error("Listmonk said the email exists but lookup returned nothing");
  let existingAttribs = existing.attribs ?? {}, history = Array.isArray(existingAttribs.ad_requests) ? existingAttribs.ad_requests : [], listIds = Array.from(
    /* @__PURE__ */ new Set(
      [
        ...(existing.lists ?? []).map((l) => l.id),
        listId
      ]
    )
  ), updateRes = await listmonk2(`/api/subscribers/${existing.id}`, {
    method: "PUT",
    body: JSON.stringify({
      email: existing.email,
      name,
      status: existing.status,
      lists: listIds,
      preconfirm_subscriptions: !0,
      attribs: {
        ...existingAttribs,
        ...attribs,
        ad_requests: [...history, bookingRequest].slice(-20)
      }
    })
  });
  if (!updateRes.ok)
    throw new Error(
      explainListmonkFailure("update", updateRes.status, await updateRes.text())
    );
}
async function loader4({ params }) {
  var _a2;
  let company = ((_a2 = params.company) == null ? void 0 : _a2.toLowerCase()) || "";
  if (hasResults(company))
    throw (0, import_node3.redirect)(`/${company}`);
  let campaignId = CAMPAIGN_MAP[company];
  if (!campaignId)
    throw new Response("Campaign not found", { status: 404 });
  let companyName = company.charAt(0).toUpperCase() + company.slice(1);
  return {
    company,
    companyName,
    campaignId
  };
}
async function action2({ request, params }) {
  var _a2;
  let formData = await request.formData(), companySlug = ((_a2 = params.company) == null ? void 0 : _a2.toLowerCase()) || "unknown";
  if (str3(formData.get("nonce"), 200))
    return (0, import_node3.redirect)("/thank-you");
  let company = str3(formData.get("company"), 200), startDate = str3(formData.get("startDate"), 50), placement = str3(formData.get("placement"), 50), paymentMethod = str3(formData.get("paymentMethod"), 50), notes = str3(formData.get("notes"), 5e3), altcha = str3(formData.get("altcha"), 2e4), fieldErrors = {};
  if (company || (fieldErrors.company = "Company name is required."), startDate || (fieldErrors.startDate = "Please select a target start date."), ["Top Feed", "Mid Feed"].includes(placement) || (fieldErrors.placement = "Please select a valid placement."), ["Credit Card", "Insertion Order", "Free"].includes(paymentMethod) || (fieldErrors.paymentMethod = "Please select a payment method."), process.env.ALTCHA_REQUIRED !== "false" && !altcha && (fieldErrors.altcha = "Please complete the verification check."), Object.keys(fieldErrors).length > 0)
    return (0, import_node3.json)(
      { error: "Please fix the highlighted fields.", fieldErrors },
      { status: 400 }
    );
  let campaignId = CAMPAIGN_MAP[companySlug] || 0;
  try {
    await saveCampaignBooking(
      {
        company,
        startDate,
        placement,
        paymentMethod,
        notes,
        campaignId
      },
      companySlug
    );
  } catch (err) {
    console.error("[book] failed to save campaign booking lead:", err);
    let reason = err instanceof Error ? err.message : String(err);
    return (0, import_node3.json)(
      {
        error: "Something went wrong submitting your booking. Please try again.",
        debug: reason
      },
      { status: 500 }
    );
  }
  return (0, import_node3.redirect)("/thank-you");
}
var meta4 = ({ data }) => data ? {
  title: `Booking ad for ${data.companyName}`
} : { title: "404 / thepoast", robots: "noindex" }, links4 = () => [
  { rel: "stylesheet", href: custom_default },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
], headers3 = () => ({
  "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=300"
});
function CatchBoundary3() {
  let caught = (0, import_react16.useCatch)();
  if (caught.status === 404)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(NotFound, {}, void 0, !1, {
      fileName: "app/routes/custom/$company.book.tsx",
      lineNumber: 348,
      columnNumber: 12
    }, this);
  throw new Error(`Unexpected response: ${caught.status}`);
}
function useReachedEndOfFeed2() {
  let endRef = (0, import_react15.useRef)(null), [reached, setReached] = (0, import_react15.useState)(!1);
  return (0, import_react15.useEffect)(() => {
    let el = endRef.current;
    if (!el)
      return;
    let frame = 0, check = () => {
      frame = 0;
      let top = el.getBoundingClientRect().top;
      setReached(window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER3);
    }, schedule3 = () => {
      frame || (frame = requestAnimationFrame(check));
    };
    window.addEventListener("scroll", schedule3, { passive: !0 }), window.addEventListener("resize", schedule3);
    let resizeObserver;
    return typeof ResizeObserver < "u" && el.parentElement && (resizeObserver = new ResizeObserver(schedule3), resizeObserver.observe(el.parentElement)), check(), () => {
      window.removeEventListener("scroll", schedule3), window.removeEventListener("resize", schedule3), resizeObserver == null || resizeObserver.disconnect(), frame && cancelAnimationFrame(frame);
    };
  }, []), { endRef, reached };
}
function CalendarIcon2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "svg",
    {
      className: "bk-date-icon",
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("rect", { x: "3", y: "4.5", width: "18", height: "16.5", rx: "3" }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 413,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "M3 9.5h18M8 2.5v4M16 2.5v4" }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 414,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/custom/$company.book.tsx",
      lineNumber: 401,
      columnNumber: 5
    },
    this
  );
}
function CheckIcon2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "M5 12.5l4.5 4.5L19 7.5" }, void 0, !1, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 432,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/custom/$company.book.tsx",
      lineNumber: 421,
      columnNumber: 5
    },
    this
  );
}
function Segmented2({
  label,
  options,
  rawOptions,
  value,
  onChange
}) {
  let index = Math.max(0, (rawOptions || options).indexOf(value));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "div",
    {
      className: `bk-seg is-${options.length}`,
      role: "group",
      "aria-label": label,
      style: { "--bk-i": index, "--bk-n": options.length },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "bk-seg-thumb", "aria-hidden": "true" }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 460,
          columnNumber: 7
        }, this),
        options.map((option, i) => {
          let rawValue = rawOptions ? rawOptions[i] : option, isActive = rawValue === value;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "button",
            {
              type: "button",
              "aria-pressed": isActive,
              className: `bk-seg-btn${isActive ? " is-active" : ""}`,
              onClick: () => onChange(rawValue),
              children: option
            },
            option,
            !1,
            {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 465,
              columnNumber: 11
            },
            this
          );
        })
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/custom/$company.book.tsx",
      lineNumber: 454,
      columnNumber: 5
    },
    this
  );
}
function AdvertiserBookPage() {
  let { company, companyName } = (0, import_react16.useLoaderData)(), actionData = (0, import_react16.useActionData)(), errors = (actionData == null ? void 0 : actionData.fieldErrors) ?? {}, { endRef, reached } = useReachedEndOfFeed2(), navigation = (0, import_react16.useNavigation)(), [searchParams] = (0, import_react16.useSearchParams)(), startFree = searchParams.get("free") === "1", [step, setStep] = (0, import_react15.useState)(startFree ? 2 : 1), [startDate, setStartDate] = (0, import_react15.useState)(""), [placement, setPlacement] = (0, import_react15.useState)("Top Feed"), [paymentMethod, setPaymentMethod] = (0, import_react15.useState)(
    startFree ? "Free" : "Credit Card"
  ), [notes, setNotes] = (0, import_react15.useState)(""), [stepError, setStepError] = (0, import_react15.useState)(""), [minDate, setMinDate] = (0, import_react15.useState)(""), [isEditingCreative, setIsEditingCreative] = (0, import_react15.useState)(!1), [kitOpen, setKitOpen] = (0, import_react15.useState)(!1), isSubmitting = navigation.state === "submitting";
  (0, import_react15.useEffect)(() => {
    let d = /* @__PURE__ */ new Date(), pad = (n) => String(n).padStart(2, "0");
    setMinDate(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
  }, []);
  let openPicker = (input) => {
    try {
      input.showPicker();
    } catch {
    }
  }, goToReview = () => {
    if (!startDate) {
      setStepError("Please select a target start date before proceeding.");
      return;
    }
    if (minDate && startDate < minDate) {
      setStepError("Please choose a start date that isn't in the past.");
      return;
    }
    setStepError(""), setStep(3);
  }, summaryRows = [
    { label: "Target Date", value: startDate ? formatDate3(startDate) : "Earliest Available" },
    { label: "Placement", value: placement },
    { label: "Payment Method", value: paymentMethod }
  ], serverFieldMessages = Object.entries(errors).filter(([key, message]) => key !== "altcha" && message).map(([, message]) => message), submitLabel = isSubmitting ? "Submitting..." : paymentMethod === "Insertion Order" ? "Lock In Insertion Order \u2192" : paymentMethod === "Free" ? "Lock In Free Campaign \u2192" : "Proceed with Credit Card \u2192", currentPlacements = paymentMethod === "Free" ? PLACEMENTS_FREE : PLACEMENTS_PAID3;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "feed-page bk", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "header",
      {
        className: `feed-topbar${reached ? " is-hidden" : ""}`,
        style: { borderLeft: "none", borderRight: "none" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react16.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: "/img/tp.png", alt: "thepoast", decoding: "async" }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 565,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 564,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 560,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { className: "feed-stream bk-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ol", { className: "bk-steps", "aria-label": "Progress", children: STEPS2.map((label, i) => {
        let n = i + 1, state = step === n ? "current" : step > n ? "done" : "todo";
        return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react15.Fragment, { children: [
          i > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "li",
            {
              className: `bk-step-line${step >= n ? " is-done" : ""}`,
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 579,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "li",
            {
              className: `bk-step is-${state}`,
              "aria-current": state === "current" ? "step" : void 0,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "bk-step-btn",
                  disabled: state !== "done",
                  onClick: () => setStep(n),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "bk-step-dot", children: state === "done" ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CheckIcon2, {}, void 0, !1, {
                      fileName: "app/routes/custom/$company.book.tsx",
                      lineNumber: 595,
                      columnNumber: 43
                    }, this) : n }, void 0, !1, {
                      fileName: "app/routes/custom/$company.book.tsx",
                      lineNumber: 594,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "bk-step-label", children: label }, void 0, !1, {
                      fileName: "app/routes/custom/$company.book.tsx",
                      lineNumber: 597,
                      columnNumber: 21
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/custom/$company.book.tsx",
                  lineNumber: 588,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 584,
              columnNumber: 17
            },
            this
          )
        ] }, label, !0, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 577,
          columnNumber: 15
        }, this);
      }) }, void 0, !1, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 572,
        columnNumber: 9
      }, this),
      step === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bk-card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "bk-label", style: { marginBottom: "0.5rem" }, children: "This is how your ad will look to 10k+ people" }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 608,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "feed-embed loaded bk-preview", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          feed_embed_default,
          {
            id: `${company}-ad-storyboard`,
            src: `/custom/${company}/storyboard`,
            title: `${companyName} Target Ad Unit`,
            interactive: !0,
            bordered: !1,
            fallbackHeight: 350
          },
          void 0,
          !1,
          {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 611,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 610,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "button",
          {
            type: "button",
            className: "bk-btn bk-btn-primary bk-btn-block",
            onClick: () => setStep(2),
            children: "Looks Great \u2014 Select Send Date \u2192"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 621,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { textAlign: "center", marginBottom: "1.25rem" }, children: isEditingCreative ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { marginTop: "1rem", padding: "0.75rem", background: "#161616", borderRadius: "12px", border: "1px solid #2a2a2a", fontSize: "0.85rem", color: "#fafafa" }, children: "No problem! Add a link to the ad you want to run in the final step." }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 639,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "button",
          {
            type: "button",
            onClick: () => setIsEditingCreative(!0),
            className: "back-btn",
            children: "Want to book a different ad?"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 630,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 628,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 607,
        columnNumber: 9
      }, this),
      step === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bk-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bk-fields", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "bk-label", id: "bk-date-label", children: "Target Start Date" }, void 0, !1, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 656,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { className: "bk-date", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: `bk-date-text${startDate ? "" : " is-empty"}`, children: startDate ? formatDate3(startDate) : "Select launch date" }, void 0, !1, {
                  fileName: "app/routes/custom/$company.book.tsx",
                  lineNumber: 659,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CalendarIcon2, {}, void 0, !1, {
                  fileName: "app/routes/custom/$company.book.tsx",
                  lineNumber: 662,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                  "input",
                  {
                    type: "date",
                    className: "bk-date-input",
                    "aria-labelledby": "bk-date-label",
                    value: startDate,
                    min: minDate || void 0,
                    onClick: (e) => openPicker(e.currentTarget),
                    onChange: (e) => {
                      setStartDate(e.target.value), setStepError("");
                    }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/custom/$company.book.tsx",
                    lineNumber: 663,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 658,
                columnNumber: 17
              }, this),
              (stepError || errors.startDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "bk-error", role: "alert", children: stepError || errors.startDate }, void 0, !1, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 678,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 655,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "bk-label", children: "Select Placement" }, void 0, !1, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 686,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                Segmented2,
                {
                  label: "Placement",
                  options: currentPlacements,
                  rawOptions: RAW_PLACEMENTS3,
                  value: placement,
                  onChange: setPlacement
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/custom/$company.book.tsx",
                  lineNumber: 687,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 685,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "bk-label", children: "Payment Method" }, void 0, !1, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 698,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                Segmented2,
                {
                  label: "Payment method",
                  options: PAYMENT_METHODS3,
                  value: paymentMethod,
                  onChange: setPaymentMethod
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/custom/$company.book.tsx",
                  lineNumber: 699,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 697,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 652,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bk-actions", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              "button",
              {
                type: "button",
                className: "bk-btn bk-btn-secondary",
                onClick: () => setStep(1),
                children: "\u2190 Back"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 710,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              "button",
              {
                type: "button",
                className: "bk-btn bk-btn-primary",
                onClick: goToReview,
                children: "Review Order \u2192"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 718,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 709,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 650,
          columnNumber: 11
        }, this),
        paymentMethod === "Free" && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "bk-terms", "aria-labelledby": "bk-terms-title", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "bk-label", id: "bk-terms-title", children: "Run Your First Ad Risk-Free \xB7 Terms" }, void 0, !1, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 730,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("dl", { className: "bk-terms-list", children: FREE_TERMS.map(
            (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bk-terms-item", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("dt", { children: item.q }, void 0, !1, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 736,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("dd", { children: item.a }, void 0, !1, {
                fileName: "app/routes/custom/$company.book.tsx",
                lineNumber: 737,
                columnNumber: 21
              }, this)
            ] }, item.q, !0, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 735,
              columnNumber: 15
            }, this)
          ) }, void 0, !1, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 733,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "bk-terms-foot", children: [
            "Full details in our ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react16.Link, { to: "/policies/terms", children: "terms" }, void 0, !1, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 742,
              columnNumber: 37
            }, this),
            "."
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 741,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 729,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 649,
        columnNumber: 9
      }, this),
      step === 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react16.Form, { method: "post", className: "bk-card", children: [
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bk-alert", role: "alert", children: [
          actionData.error,
          serverFieldMessages.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { children: serverFieldMessages.map(
            (message) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: message }, message, !1, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 758,
              columnNumber: 15
            }, this)
          ) }, void 0, !1, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 756,
            columnNumber: 13
          }, this),
          actionData.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("code", { children: actionData.debug }, void 0, !1, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 762,
            columnNumber: 38
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 753,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "company", value: companyName }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 766,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "startDate", value: startDate }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 767,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "placement", value: placement }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 768,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "paymentMethod", value: paymentMethod }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 769,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "input",
          {
            type: "text",
            name: "nonce",
            className: "hp-field",
            tabIndex: -1,
            autoComplete: "off",
            "aria-hidden": "true",
            style: { display: "none" }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 770,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { marginBottom: "1.5rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "bk-label", style: { marginBottom: "0.5rem", textAlign: "center" }, children: [
            companyName,
            " Ad"
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 782,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "feed-embed loaded bk-preview", style: { maxHeight: "220px", overflow: "hidden", marginBottom: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            feed_embed_default,
            {
              id: `${company}-ad-thumbnail`,
              src: `/custom/${company}/storyboard`,
              title: `${companyName} Target Ad Unit`,
              interactive: !1,
              bordered: !1,
              fallbackHeight: 220
            },
            void 0,
            !1,
            {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 784,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 783,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 781,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("dl", { className: "bk-summary", children: summaryRows.map(
          (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bk-row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("dt", { children: row.label }, void 0, !1, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 798,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("dd", { children: row.value }, void 0, !1, {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 799,
              columnNumber: 19
            }, this)
          ] }, row.label, !0, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 797,
            columnNumber: 13
          }, this)
        ) }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 795,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bk-group", style: { marginBottom: "1.5rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { className: "bk-label", htmlFor: "bk-notes", children: "Additional Notes (Optional)" }, void 0, !1, {
            fileName: "app/routes/custom/$company.book.tsx",
            lineNumber: 805,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "textarea",
            {
              id: "bk-notes",
              name: "notes",
              className: "bk-textarea",
              rows: 3,
              placeholder: "Special instructions or tracking links...",
              value: notes,
              onChange: (e) => setNotes(e.target.value)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 808,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 804,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bk-altcha", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 820,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 819,
          columnNumber: 13
        }, this),
        errors.altcha && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "bk-error", role: "alert", style: { marginBottom: "1.25rem" }, children: errors.altcha }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 823,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bk-actions", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "button",
            {
              type: "button",
              className: "bk-btn bk-btn-secondary",
              onClick: () => setStep(2),
              children: "\u2190 Back"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 829,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "button",
            {
              type: "submit",
              className: "bk-btn bk-btn-primary",
              disabled: isSubmitting,
              children: submitLabel
            },
            void 0,
            !1,
            {
              fileName: "app/routes/custom/$company.book.tsx",
              lineNumber: 837,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 828,
          columnNumber: 13
        }, this),
        paymentMethod === "Free" && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "bk-note", style: { margin: "0 0 1.25rem" }, children: "Free applies to your first ad only. Later ads are billed at standard rates." }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 847,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 751,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 855,
        columnNumber: 9
      }, this),
      step === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react16.Link, { to: `/${company}`, className: "back-btn", style: { marginTop: "0" }, children: "\u2190 Back to Sample" }, void 0, !1, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 858,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 857,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/custom/$company.book.tsx",
      lineNumber: 569,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("footer", { className: "feed-footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "feed-footer-links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react16.Link, { to: "/about", children: "about" }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 867,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react16.Link, { to: "/archive", children: "archive" }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 868,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react16.Link, { to: "/submit-post", children: "submit post" }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 869,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react16.Link, { to: "/policies/privacy", children: "privacy" }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 870,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react16.Link, { to: "/policies/terms", children: "terms" }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 871,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react16.Link, { to: "/book", children: "advertise" }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 872,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react16.Link, { to: "/manager", children: "ads manager" }, void 0, !1, {
          fileName: "app/routes/custom/$company.book.tsx",
          lineNumber: 873,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 866,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "feed-copyright", children: "thepoast \xA9 2026" }, void 0, !1, {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 875,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/custom/$company.book.tsx",
      lineNumber: 865,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      MediaKit,
      {
        open: kitOpen,
        onClose: () => setKitOpen(!1),
        ctaLabel: "Continue booking",
        onCta: () => setKitOpen(!1)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/custom/$company.book.tsx",
        lineNumber: 878,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/custom/$company.book.tsx",
    lineNumber: 558,
    columnNumber: 5
  }, this);
}

// app/routes/custom/$company.ad.tsx
var company_ad_exports = {};
__export(company_ad_exports, {
  loader: () => loader5
});
var HEADERS = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control": "public, max-age=300, s-maxage=600, stale-while-revalidate=3600",
  "X-Content-Type-Options": "nosniff",
  "X-Robots-Tag": "noindex, nofollow"
}, hideAllButStyles = (post) => `
<style>
  /* Hide every storyboard except the target one (same trick as the sample page) */
  .storyboard { display: none !important; }
  .storyboard:nth-of-type(${post}) { display: block !important; }

  /* Hide the logo row and template footer */
  p.tac,
  div.footer { display: none !important; }
</style>
`;
async function loader5({ params, request }) {
  var _a2;
  let slug = ((_a2 = params.company) == null ? void 0 : _a2.toLowerCase()) || "", run = findRun(slug, new URL(request.url).searchParams.get("run"));
  if (!run)
    throw new Response("Not found", { status: 404 });
  let post = Math.max(1, Math.min(99, Math.floor(Number(run.post)) || 1));
  try {
    let rawHtml = await getCampaignPreview(run.campaignId), campaign = await getCampaign(run.campaignId);
    if (!rawHtml && campaign && (rawHtml = await getRenderedCampaignHtml(campaign) || null), !rawHtml)
      return new Response("Preview unavailable", {
        status: 404,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    let sent = campaign ? getCampaignDate(campaign) : null, reference = sent && Number.isFinite(new Date(sent).getTime()) ? new Date(sent) : /* @__PURE__ */ new Date(), html = prepareIssueHtml(rawHtml, reference), styles = hideAllButStyles(post);
    return html = html.includes("</head>") ? html.replace("</head>", `${styles}</head>`) : `<head>${styles}</head>${html}`, new Response(html, { status: 200, headers: HEADERS });
  } catch (error) {
    return console.error(`[results] ad preview failed for ${slug}:`, error), new Response("Temporarily unavailable", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" }
    });
  }
}

// app/routes/archive/feeds.$id.tsx
var feeds_id_exports = {};
__export(feeds_id_exports, {
  CatchBoundary: () => CatchBoundary4,
  default: () => ArchiveIssue,
  headers: () => headers4,
  links: () => links5,
  loader: () => loader6,
  meta: () => meta5
});
var import_react17 = require("react"), import_react18 = require("@remix-run/react"), import_node4 = require("@remix-run/node");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), meta5 = () => ({
  title: "Issue / thepoast"
}), links5 = () => [
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
], headers4 = () => ({
  "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=300"
}), BANNER_TRIGGER4 = 0.85;
async function loader6({ params }) {
  let id = params.id;
  if (!id || !/^\d+$/.test(id))
    throw new Response("Bad campaign ID", { status: 400 });
  return (0, import_node4.json)({ id });
}
function useReachedEndOfFeed3() {
  let endRef = (0, import_react17.useRef)(null), [reached, setReached] = (0, import_react17.useState)(!1);
  return (0, import_react17.useEffect)(() => {
    let el = endRef.current;
    if (!el)
      return;
    let frame = 0, check = () => {
      frame = 0;
      let top = el.getBoundingClientRect().top;
      setReached(
        window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER4
      );
    }, schedule3 = () => {
      frame || (frame = requestAnimationFrame(check));
    };
    window.addEventListener("scroll", schedule3, { passive: !0 }), window.addEventListener("resize", schedule3);
    let resizeObserver;
    return typeof ResizeObserver < "u" && el.parentElement && (resizeObserver = new ResizeObserver(schedule3), resizeObserver.observe(el.parentElement)), check(), () => {
      window.removeEventListener("scroll", schedule3), window.removeEventListener("resize", schedule3), resizeObserver == null || resizeObserver.disconnect(), frame && cancelAnimationFrame(frame);
    };
  }, []), { endRef, reached };
}
function ArchiveIssue() {
  let { id } = (0, import_react18.useLoaderData)(), { endRef, reached } = useReachedEndOfFeed3(), [forced, setForced] = (0, import_react17.useState)(!1), [expandBanner, setExpandBanner] = (0, import_react17.useState)(!1), footerRef = (0, import_react17.useRef)(null), previousReached = (0, import_react17.useRef)(!1), bannerVisible = reached || forced;
  return (0, import_react17.useEffect)(() => {
    previousReached.current && !reached && (setForced(!1), setExpandBanner(!1)), previousReached.current = reached;
  }, [reached]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      FeedTopbar,
      {
        hidden: reached,
        onSubscribe: (event) => {
          var _a2;
          event.preventDefault(), setForced(!0), setExpandBanner(!0), (_a2 = footerRef.current) == null || _a2.scrollIntoView({ behavior: "smooth", block: "end" });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 127,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("main", { className: "feed-stream", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "feed-embed loaded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        feed_embed_default,
        {
          id,
          src: `/feeds/full/${id}`,
          title: `Issue ${id}`,
          interactive: !0,
          bordered: !0,
          hideTopBorder: !0,
          fallbackHeight: 900
        },
        void 0,
        !1,
        {
          fileName: "app/routes/archive/feeds.$id.tsx",
          lineNumber: 134,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { ref: footerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(FeedFooter, { covered: bannerVisible }, void 0, !1, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 150,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 149,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      FeedSubscribeBanner,
      {
        visible: bannerVisible,
        forceExpanded: expandBanner
      },
      void 0,
      !1,
      {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 153,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/archive/feeds.$id.tsx",
    lineNumber: 126,
    columnNumber: 5
  }, this);
}
function CatchBoundary4() {
  let caught = (0, import_react18.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(FeedTopbar, { showSubscribe: !1 }, void 0, !1, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 169,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("main", { className: "feed-stream", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { className: "feeds-empty", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: caught.status === 400 ? "That issue link doesn't look right." : "This issue isn't available right now." }, void 0, !1, {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 173,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react18.Link, { to: "/archive", children: "\u2190 Back to the archive" }, void 0, !1, {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/archive/feeds.$id.tsx",
        lineNumber: 178,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 172,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 171,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(FeedFooter, {}, void 0, !1, {
      fileName: "app/routes/archive/feeds.$id.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/archive/feeds.$id.tsx",
    lineNumber: 168,
    columnNumber: 5
  }, this);
}

// app/routes/feeds.preview.$id.tsx
var feeds_preview_id_exports = {};
__export(feeds_preview_id_exports, {
  loader: () => loader7
});
var HTML_HEADERS = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control": "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400",
  "X-Content-Type-Options": "nosniff"
};
async function loader7({
  params
}) {
  let id = params.id;
  if (!id || !/^\d+$/.test(id))
    return new Response(
      "Bad campaign ID",
      {
        status: 400,
        headers: {
          "Cache-Control": "no-store",
          "Content-Type": "text/plain; charset=utf-8"
        }
      }
    );
  try {
    let html = await getLeadStoryHtml(id);
    return html ? new Response(
      html,
      {
        status: 200,
        headers: HTML_HEADERS
      }
    ) : new Response(
      "Lead story unavailable",
      {
        status: 404,
        headers: {
          "Cache-Control": "public, max-age=30",
          "Content-Type": "text/plain; charset=utf-8"
        }
      }
    );
  } catch (error) {
    return console.error(
      `[feeds] Failed to render preview ${id}:`,
      error
    ), new Response(
      "Preview temporarily unavailable",
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store",
          "Retry-After": "2",
          "Content-Type": "text/plain; charset=utf-8"
        }
      }
    );
  }
}

// app/routes/policies/privacy.tsx
var privacy_exports = {};
__export(privacy_exports, {
  default: () => Privacy,
  links: () => links6,
  meta: () => meta6
});

// app/style/scss/components/showscroll.css
var showscroll_default = "/build/_assets/showscroll-FNF7IES6.css";

// app/components/legal-page.tsx
var import_react19 = require("@remix-run/react"), import_react20 = require("react");

// public/img/tp.png
var tp_default = "/build/_assets/tp-AMW7IQ4E.png";

// app/components/legal-page.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function LegalPage({
  title,
  effective,
  toc: toc3,
  children
}) {
  let [showStickyNav, setShowStickyNav] = (0, import_react20.useState)(!1);
  return (0, import_react20.useEffect)(() => {
    let handleScroll = () => setShowStickyNav(window.scrollY > 50);
    return handleScroll(), window.addEventListener("scroll", handleScroll, { passive: !0 }), () => window.removeEventListener("scroll", handleScroll);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "content-privacy", id: "top-of-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: `sticky-nav${showStickyNav ? " visible" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react19.Link, { className: "sticky-logo", to: "/", "aria-label": "The Poast home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: tp_default, alt: "The Poast", loading: "lazy", decoding: "async" }, void 0, !1, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react19.Link, { to: "/subscribe", className: "sticky-subscribe", children: "Subscribe" }, void 0, !1, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/legal-page.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react19.Link, { to: "/", className: "logo", "aria-label": "The Poast home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: tp_default, alt: "The Poast Logo" }, void 0, !1, {
      fileName: "app/components/legal-page.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/legal-page.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("main", { className: "content-privacy2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { children: [
          title,
          "."
        ] }, void 0, !0, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        "Effective: ",
        effective,
        "."
      ] }, void 0, !0, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      toc3 && toc3.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("nav", { className: "legal-toc", "aria-label": "On this page", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "legal-toc-label", children: "On this page" }, void 0, !1, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ol", { children: toc3.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("a", { href: `#${item.id}`, children: item.label }, void 0, !1, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 59,
          columnNumber: 19
        }, this) }, item.id, !1, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 58,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react19.Link, { className: "legal-top", to: "/", children: "\u2190 Back to thepoast" }, void 0, !1, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/legal-page.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/legal-page.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/policies/privacy.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), links6 = () => [
  { rel: "stylesheet", href: showscroll_default }
], meta6 = () => ({
  title: "Privacy / thepoast",
  description: "Learn about our Privacy Policy."
}), toc = [
  { id: "about", label: "About this Policy and us" },
  { id: "collect", label: "Information we collect" },
  { id: "use", label: "How we use your information" }
];
function Privacy() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(LegalPage, { title: "Privacy Policy", effective: "April 5, 2025", toc, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { id: "top-of-page", children: "thepoast respects your privacy and values your trust. This Privacy Policy (\u201CPolicy\u201D) describes how we collect and use your information and explains your rights and options. This Policy applies to these services (which we call the \u201CServices\u201D in this Policy):" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "websites, thepoast Store, paid products" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "newsletters and other disseminated content" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "merchandise, mobile apps and related social media pages" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "anywhere else we gather information about you and refer to this Policy." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "This Policy is grouped into these sections:" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "about us and this Policy;" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "information we collect;" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "how we use information, including for advertising purposes;" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "when we disclose information to other parties, including for advertising purposes; and" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "your rights and how to exercise them." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: [
      "We encourage you to read this Policy carefully. If you have questions, please contact us at",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "section-title", id: "about", children: "1. About This Policy And Us" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { className: "sub-title", children: "(a) Who we are" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "thepoast, Inc. (\u201Cthepoast,\u201D \u201Cwe\u201D, \u201Cour\u201D or \u201Cus\u201D) operates the Services. This Policy supplements and is governed by our Terms of Service (\u201CTerms\u201D). Capitalized terms used but not defined in this Policy are defined in our Terms. The Terms describe how the Services work in general and its conditions and requirements of use." }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { className: "sub-title", children: "(b) When this Policy applies" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "This Policy applies when you use the Services, effective as of the Last Updated date above. By using or accessing the Services, you signify that you have read, understand and agree to be bound by this Policy and the Terms." }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "Because the Services change often, this Policy may change over time. Anytime we modify the Policy, we will post a revised version on the Services and update the Last Updated date above. If you have given us your contact information, we will notify you before any material changes take effect, so you have time to review them." }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "Certain parts of the Services work differently, and some information falls outside this Policy:" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Certain parts of the Services may have additional terms and privacy disclosures that supplement this Policy." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "The Services may contain links to and from third-party websites and services. This Policy doesn\u2019t apply to outside of our Services. See Third Party Services to learn more." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: [
        "If you are a current or former employee or contractor of ours, this Policy does not apply to you. You may contact us about your privacy practices and rights at",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "If we receive your information in our role as a service provider to another business, our agreement with that business governs our use of your information. We will refer any questions or concerns of yours to that business." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { className: "sub-title", children: "(c) Location-specific sections" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: [
      "The Services operates from the United States, but this Policy applies worldwide. Our practices generally do not differ based on your location, but your rights and choices depend in part on the law where you live. For example, you may have rights under: (1) \u201CGDPR\u201D:",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("i", { children: "THE EU GENERAL DATA PROTECTION REGULATION (EU) 2016/679, AND THE UK GENERAL DATA PROTECTION REGULATION (UK GDPR) AS TAILORED BY THE DATA PROTECTION ACT 2018" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      "; or (2) \u201CCCPA\u201D: the California Consumer Privacy Act, as amended."
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "As a result, certain sections of this Policy apply to you only if you reside in a particular location:" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Residents of jurisdictions where GDPR applies \u2013 such as U.K., EU and Swiss residents \u2013 should consult the Rights under GDPR and International Data Transfers sections." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Residents of Mexico should consult the Aviso de Privacidad addendum." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Canadian residents should consult the Canadian users section." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "California residents should consult the Rights under California law section. If you reside in a U.S. jurisdiction that has enacted a data privacy law similar to CCPA or GDPR, we extend the same rights CCPA grants to California residents to you, except where we specify otherwise." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: [
      "If those sections apply to you, they override any contrary descriptions elsewhere in the Policy as they relate to you. Please contact us at",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      " ",
      "if you have questions about your rights under other data privacy laws."
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "section-title", id: "collect", children: "2. Information We Collect" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { className: "sub-title", children: "(a) Information you provide" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "You may use the Services without providing any information about yourself. However, to use some aspects of the Services, we will need information about you, such as if you:" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Purchase our Offerings or services" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Contact or communicate with us" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Subscribe or opt-in to our newsletters, alerts, or other communications" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Participate in a contest or promotion or redeem a prize" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Information you provide may include your name or email address (\u201Cpersonal identifiers\u201D)." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "We generally don\u2019t collect (or want!) your sensitive information, and we strive to limit the amount of sensitive personal information we collect." }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "For instance, if you make a purchase through our Services, your payment information, like your full credit card number and any payment-related security information, is only collected and processed by our payment processor." }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 145,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "In the event you provide sensitive personal information to us, we use it only for our operational business purposes, and we do not disclose it to others for any other purpose." }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { className: "sub-title", children: "(b) Information collected when you use the Services" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "As you use the Services, cookies and other technology we use will generate technical data about which features you use, how you use them and the devices you use to access our services. This information may include:" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "\u201CCommercial Information\u201D about your orders of Offerings or other products or services from us and interactions with thepoast Store products." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "\u201CDevice Information\u201D related to the device you use to interact with the Services, such as your device\u2019s IP address, advertising IDs (resettable, random numbers, such as the device\u2019s Apple IDFA or Android Advertising ID), its browser and operating system, its internet service provider, and its configuration." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 162,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "\u201CInternet Activity\u201D related to your use of the Services, such as the pages you visit, the sites you use before or after visiting ours, your actions within the Services, the content or advertisements you interact with, general geolocation information, time stamps and performance logs and reports." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "legal-callout", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "legal-callout-title", children: "Managing cookies and similar technologies" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("i", { children: "WHEN YOU FIRST VISIT OUR SERVICES, AND PERIODICALLY THEREAFTER, YOU WILL BE PRESENTED WITH A COOKIE BANNER PROVIDING YOU WITH INFORMATION ABOUT THE COOKIES AND SIMILAR TRACKING TECHNOLOGIES WE USE. FOR COOKIES THAT ARE NOT STRICTLY NECESSARY FOR THE FUNCTIONING OF OUR SERVICES, WE WILL REQUEST YOUR EXPLICIT CONSENT BEFORE PLACING THEM ON YOUR DEVICE. OUR COOKIE BANNER ALLOWS YOU TO:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("i", { children: "ACCEPT ALL COOKIES;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 179,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 179,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("i", { children: "REJECT ALL NON-ESSENTIAL COOKIES; OR" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 180,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("i", { children: "CUSTOMIZE YOUR PREFERENCES AND CONSENT TO SPECIFIC CATEGORIES OF COOKIES." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 181,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 181,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("i", { children: "PREFERENCES FOR NON-ESSENTIAL COOKIES ARE NOT PRE-SELECTED. YOU CAN WITHDRAW OR CHANGE YOUR CONSENT AT ANY TIME." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 184,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 183,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 166,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { className: "sub-title", children: "(c) Information we generate" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 191,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "We infer new information from other data we collect, including using automated means to generate information about your likely preferences or other characteristics (\u201Cinferences\u201D)." }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "section-title", id: "use", children: "3. How We Use Your Information" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 199,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "We use each of the categories of personal information described above for the following business and commercial purposes. The activities below can involve outside companies, agents or contractors (\u201Cservice providers\u201D) to whom we disclose your information for these purposes (discussed further below in Section 4)." }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 200,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { className: "sub-title", children: "(a) To provide our content, services and products to you" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 208,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Deliver content you request" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Provide you with customer support and respond to your requests" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 211,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Complete your orders" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 212,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Communicate with you about our services" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 213,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 209,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { className: "sub-title", children: "(b) To manage your subscriptions or fulfill product orders" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 216,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Manage your content subscriptions" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 218,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Deliver and process payments for Offerings you order" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 217,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { className: "sub-title", children: "(c) To improve our services and develop new ones" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 222,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Administer focus groups, market studies and surveys" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Review interactions with customer teams to improve our quality of service" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 225,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Develop new content and services" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 226,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { className: "sub-title", children: "(d) To allow personalized ads and create audiences for third-party advertisers" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 229,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Administer sweepstakes, contests, discounts or other offers" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 231,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Gather data and work with third parties to show you personalized ads on behalf of advertisers" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 232,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Perform and measure the effectiveness of advertising campaigns on our services and marketing campaigns off of the Services" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 233,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Communicate with you about products or services that we believe may interest you" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 234,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("i", { children: "OUR PERSONALIZED ADVERTISING ACTIVITIES RELY ON YOUR PRIOR CONSENT FOR THE USE OF RELEVANT COOKIES AND TRACKING TECHNOLOGIES, AND FOR THE SHARING OF YOUR INFORMATION WITH ADVERTISING PARTNERS FOR THESE PURPOSES." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 236,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 235,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 230,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { className: "sub-title", children: "(e) To prevent, detect and fight fraud and other illegal or unauthorized activities" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Find and address ongoing, suspected or alleged violations of our Terms" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 247,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Retain data related to violations of our Terms to prevent against recurrences" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 248,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Enforce or exercise our rights; for example, those in our Terms" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 249,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 246,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { className: "sub-title", children: "(f) To create broader findings with aggregate and deidentified data" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 252,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Aggregate or deidentify information so that it can no longer identify you, as defined under applicable laws." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Better understand and represent our users using deidentified data, such as to measure ad performance, create advertising interest-based segments or compile survey results." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 255,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { className: "sub-title", children: "(g) To ensure legal compliance" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 258,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Verify copyright or IP claims" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 260,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Comply with legal requirements" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 261,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "Assist law enforcement" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 262,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 259,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { className: "sub-title", children: "(h) Purposes" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 265,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "We rely on the following purposes to collect and use your information as described in this Policy:" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 266,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("u", { children: "Commercial purposes" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 271,
          columnNumber: 13
        }, this),
        ": At times, the reason we process your information is to advance your economic interests or our economic interests. These purposes include performing the contract that you have with us, as embodied by our Terms, which advance our economic interests and yours. For instance, if you order products from us, we use your information to complete your payment and provide your product to you."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 271,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("u", { children: "Business purposes" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 272,
          columnNumber: 13
        }, this),
        ": Most often, we process your information for operational reasons, in a reasonably necessary and proportionate manner (i.e., for business purposes under CCPA). For instance, we analyze users\u2019 behavior on our services to continuously improve our offerings, we suggest content we think might interest you and promote our own services, we process information to help keep our members safe and we process data where necessary to enforce our rights, assist law enforcement and enable us to defend ourselves in the event of a legal action."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 272,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("u", { children: "Comply with applicable laws and regulations" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 273,
          columnNumber: 13
        }, this),
        ": We also process your information where it is necessary for us to comply with applicable laws and regulations and evidence our compliance with applicable laws and regulations. For example, we retain traffic data and data about transactions in line with our accounting, tax and other statutory data retention obligations and to be able to respond to valid access requests from law enforcement."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 273,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("u", { children: "Consent" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 275,
          columnNumber: 11
        }, this),
        ": From time to time, we may ask for your consent to collect specific information, such as your precise geolocation, or use your information for certain specific reasons, like providing your email address or phone number for direct marketing purposes, or for the use of certain types of cookies for personalized advertising. In general, you may withdraw your consent by changing your settings (such as browser or device settings) or following instructions provided with information we send you on a consent basis (such as clicking \u2018unsubscribe\u2019 in any email we send you). You may always withdraw your consent at any time \u2013 just contact us at",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 285,
          columnNumber: 11
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 274,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 270,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/policies/privacy.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/custom/$company.tsx
var company_exports = {};
__export(company_exports, {
  CatchBoundary: () => CatchBoundary5,
  action: () => action3,
  default: () => CompanyPage,
  headers: () => headers5,
  links: () => links7,
  loader: () => loader8,
  meta: () => meta7
});
var import_react23 = require("react"), import_react24 = require("@remix-run/react"), import_node5 = require("@remix-run/node");

// app/components/ad-results.tsx
var import_react21 = require("react"), import_react22 = require("@remix-run/react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), BANNER_TRIGGER5 = 0.85, STEPS3 = ["Schedule", "Confirm"];
function useReachedEndOfFeed4() {
  let endRef = (0, import_react21.useRef)(null), [reached, setReached] = (0, import_react21.useState)(!1);
  return (0, import_react21.useEffect)(() => {
    let el = endRef.current;
    if (!el)
      return;
    let frame = 0, check = () => {
      frame = 0;
      let top = el.getBoundingClientRect().top;
      setReached(window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER5);
    }, schedule3 = () => {
      frame || (frame = requestAnimationFrame(check));
    };
    window.addEventListener("scroll", schedule3, { passive: !0 }), window.addEventListener("resize", schedule3);
    let resizeObserver;
    return typeof ResizeObserver < "u" && el.parentElement && (resizeObserver = new ResizeObserver(schedule3), resizeObserver.observe(el.parentElement)), check(), () => {
      window.removeEventListener("scroll", schedule3), window.removeEventListener("resize", schedule3), resizeObserver == null || resizeObserver.disconnect(), frame && cancelAnimationFrame(frame);
    };
  }, []), { endRef, reached };
}
function CalendarIcon3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "svg",
    {
      className: "bk-date-icon",
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("rect", { x: "3", y: "4.5", width: "18", height: "16.5", rx: "3" }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 91,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M3 9.5h18M8 2.5v4M16 2.5v4" }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 92,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ad-results.tsx",
      lineNumber: 79,
      columnNumber: 5
    },
    this
  );
}
function CheckIcon3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M5 12.5l4.5 4.5L19 7.5" }, void 0, !1, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 110,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ad-results.tsx",
      lineNumber: 99,
      columnNumber: 5
    },
    this
  );
}
function Segmented3({
  label,
  options,
  rawOptions,
  value,
  onChange
}) {
  let index = Math.max(0, (rawOptions ?? options).indexOf(value));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "div",
    {
      className: `bk-seg is-${options.length}`,
      role: "group",
      "aria-label": label,
      style: { "--bk-i": index, "--bk-n": options.length },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "bk-seg-thumb", "aria-hidden": "true" }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 138,
          columnNumber: 7
        }, this),
        options.map((option, i) => {
          let rawValue = rawOptions ? rawOptions[i] : option, isActive = rawValue === value;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "button",
            {
              type: "button",
              "aria-pressed": isActive,
              className: `bk-seg-btn${isActive ? " is-active" : ""}`,
              onClick: () => onChange(rawValue),
              children: option
            },
            option,
            !1,
            {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 143,
              columnNumber: 11
            },
            this
          );
        })
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ad-results.tsx",
      lineNumber: 132,
      columnNumber: 5
    },
    this
  );
}
function AdResults({ data }) {
  let { slug, name, runs, currentId, latestId, totals, defaultPlacement } = data, actionData = (0, import_react22.useActionData)(), errors = (actionData == null ? void 0 : actionData.fieldErrors) ?? {}, { endRef, reached } = useReachedEndOfFeed4(), isSubmitting = (0, import_react22.useNavigation)().state === "submitting", run = runs.find((r) => runKey(r) === currentId) ?? runs[0], stats = run.stats, isLatest = currentId === latestId, previewOn = run.showPreview !== !1, latest = runs.find((r) => runKey(r) === latestId) ?? runs[0], [booking, setBooking] = (0, import_react21.useState)(!1), [step, setStep] = (0, import_react21.useState)(1), [startDate, setStartDate] = (0, import_react21.useState)(""), [placement, setPlacement] = (0, import_react21.useState)(defaultPlacement), [paymentMethod, setPaymentMethod] = (0, import_react21.useState)("Credit Card"), [creative, setCreative] = (0, import_react21.useState)("Same ad"), [notes, setNotes] = (0, import_react21.useState)(""), [stepError, setStepError] = (0, import_react21.useState)(""), [minDate, setMinDate] = (0, import_react21.useState)(""), flowRef = (0, import_react21.useRef)(null);
  (0, import_react21.useEffect)(() => {
    let d = /* @__PURE__ */ new Date(), pad = (n) => String(n).padStart(2, "0");
    setMinDate(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
  }, []);
  let openBooking = () => {
    setBooking(!0), setStep(1), requestAnimationFrame(
      () => {
        var _a2;
        return (_a2 = flowRef.current) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    );
  }, openPicker = (input) => {
    try {
      input.showPicker();
    } catch {
    }
  }, goToReview = () => {
    if (!startDate) {
      setStepError("Please select a target start date before proceeding.");
      return;
    }
    if (minDate && startDate < minDate) {
      setStepError("Please choose a start date that isn't in the past.");
      return;
    }
    setStepError(""), setStep(2);
  }, summaryRows = [
    { label: "Target Date", value: startDate ? formatDate(startDate) : "Earliest Available" },
    { label: "Placement", value: placement },
    { label: "Payment Method", value: paymentMethod },
    { label: "Ad", value: creative }
  ], serverFieldMessages = Object.entries(errors).filter(([key, message]) => key !== "altcha" && message).map(([, message]) => message), submitLabel = isSubmitting ? "Submitting..." : paymentMethod === "Insertion Order" ? "Lock In Insertion Order \u2192" : "Proceed with Credit Card \u2192";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "feed-page bk", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      "header",
      {
        className: `feed-topbar${reached ? " is-hidden" : ""}`,
        style: { borderLeft: "none", borderRight: "none" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react22.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("img", { src: "/img/tp.png", alt: "thepoast", decoding: "async" }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 247,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 246,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 242,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { className: "feed-stream bk-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { className: "bk-card rs-hero", "aria-labelledby": "rs-name", children: [
        !isLatest && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react22.Link, { to: "?", className: "rs-back", children: "\u2190 Back to latest campaign" }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 256,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 255,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "rs-eyebrow", children: [
          name,
          " \xB7 Ad results"
        ] }, void 0, !0, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 262,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "rs-chips", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-chip", children: formatDate(run.date) }, void 0, !1, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 264,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-chip", children: [
            "Post #",
            run.post
          ] }, void 0, !0, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 265,
            columnNumber: 13
          }, this),
          run.placement && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-chip", children: run.placement }, void 0, !1, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 266,
            columnNumber: 31
          }, this),
          !stats && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-chip", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-dot", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 269,
              columnNumber: 17
            }, this),
            "Results pending"
          ] }, void 0, !0, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 268,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 263,
          columnNumber: 11
        }, this),
        stats ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "rs-hero-value", children: int(stats.clicks) }, void 0, !1, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 277,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "rs-hero-label", children: "Clicks" }, void 0, !1, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 278,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "rs-stats", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "rs-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-stat-value", children: int(stats.sent) }, void 0, !1, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 282,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-stat-label", children: "Sent" }, void 0, !1, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 283,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 281,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "rs-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-stat-value", children: int(stats.opens) }, void 0, !1, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 286,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-stat-label", children: "Opens" }, void 0, !1, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 287,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 285,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "rs-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-stat-value", children: getCtr(stats) }, void 0, !1, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 290,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-stat-label", children: "Click-through rate" }, void 0, !1, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 291,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 289,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "rs-stat", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-stat-value", children: getOpenRate(stats) }, void 0, !1, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 294,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-stat-label", children: "Open rate" }, void 0, !1, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 295,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 293,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 280,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "rs-foot", children: "Open counts are approximate, since email privacy features inflate them. Clicks are the most reliable measure." }, void 0, !1, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 299,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 276,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "rs-pending", children: "Results are on the way. This page updates once the campaign has had time to collect clicks." }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 305,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 253,
        columnNumber: 9
      }, this),
      (previewOn || run.image) && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { className: "bk-card", "aria-labelledby": "rs-ad-label", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-section-label", id: "rs-ad-label", children: "The ad as it ran" }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 315,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "feed-embed loaded bk-preview rs-preview", children: previewOn ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          feed_embed_default,
          {
            id: `${slug}-run-${currentId}`,
            src: `/custom/${slug}/ad?run=${encodeURIComponent(currentId)}`,
            title: `${name} ad, ${formatDate(run.date)}`,
            interactive: !0,
            bordered: !1,
            fallbackHeight: 350
          },
          currentId,
          !1,
          {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 321,
            columnNumber: 17
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("img", { src: run.image, alt: `${name} ad, ${formatDate(run.date)}`, loading: "lazy" }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 331,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 319,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "rs-caption", children: [
          "Post #",
          run.post,
          " in the ",
          formatDate(run.date),
          " edition"
        ] }, void 0, !0, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 335,
          columnNumber: 13
        }, this),
        run.note && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "rs-note", children: run.note }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 339,
          columnNumber: 26
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 314,
        columnNumber: 11
      }, this),
      runs.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { className: "bk-card", "aria-labelledby": "rs-history-label", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-section-label", id: "rs-history-label", children: "All campaigns" }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 346,
          columnNumber: 13
        }, this),
        totals.hasStats && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "rs-stats is-3 rs-totals", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "rs-stat", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-stat-value", children: totals.campaigns }, void 0, !1, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 353,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-stat-label", children: "Campaigns" }, void 0, !1, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 354,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 352,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "rs-stat", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-stat-value", children: int(totals.clicks) }, void 0, !1, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 357,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-stat-label", children: "Total clicks" }, void 0, !1, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 358,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 356,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "rs-stat", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-stat-value", children: totals.ctr }, void 0, !1, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 361,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-stat-label", children: "Avg CTR" }, void 0, !1, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 362,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 360,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 351,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("ol", { className: "rs-runs", children: runs.map((r) => {
          let key = runKey(r), isCurrent = key === currentId;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            import_react22.Link,
            {
              to: key === latestId ? "?" : `?run=${encodeURIComponent(key)}`,
              className: `rs-run${isCurrent ? " is-current" : ""}`,
              "aria-current": isCurrent ? "true" : void 0,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-run-main", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-run-date", children: formatDate(r.date) }, void 0, !1, {
                    fileName: "app/components/ad-results.tsx",
                    lineNumber: 379,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-run-meta", children: [
                    "Post #",
                    r.post,
                    r.placement ? ` \xB7 ${r.placement}` : ""
                  ] }, void 0, !0, {
                    fileName: "app/components/ad-results.tsx",
                    lineNumber: 380,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 378,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-run-stat", children: r.stats ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-run-clicks", children: [
                    int(r.stats.clicks),
                    " clicks"
                  ] }, void 0, !0, {
                    fileName: "app/components/ad-results.tsx",
                    lineNumber: 388,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-run-ctr", children: [
                    getCtr(r.stats),
                    " CTR"
                  ] }, void 0, !0, {
                    fileName: "app/components/ad-results.tsx",
                    lineNumber: 389,
                    columnNumber: 29
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 387,
                  columnNumber: 27
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "rs-run-ctr", children: "Pending" }, void 0, !1, {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 394,
                  columnNumber: 27
                }, this) }, void 0, !1, {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 385,
                  columnNumber: 23
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 373,
              columnNumber: 21
            },
            this
          ) }, key, !1, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 372,
            columnNumber: 19
          }, this);
        }) }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 367,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 345,
        columnNumber: 11
      }, this),
      !booking && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { className: "bk-card rs-cta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "bk-title", children: "Ready for another run?" }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 408,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "bk-sub", children: "Book your next ad in about a minute. Reuse this one or send us something new." }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 409,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          "button",
          {
            type: "button",
            className: "bk-btn bk-btn-primary bk-btn-block",
            onClick: openBooking,
            children: "Book Your Next Ad \u2192"
          },
          void 0,
          !1,
          {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 412,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 407,
        columnNumber: 11
      }, this),
      booking && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "rs-flow", ref: flowRef, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("ol", { className: "bk-steps", "aria-label": "Progress", children: STEPS3.map((label, i) => {
          let n = i + 1, state = step === n ? "current" : step > n ? "done" : "todo";
          return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react21.Fragment, { children: [
            i > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              "li",
              {
                className: `bk-step-line${step >= n ? " is-done" : ""}`,
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 432,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              "li",
              {
                className: `bk-step is-${state}`,
                "aria-current": state === "current" ? "step" : void 0,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    className: "bk-step-btn",
                    disabled: state !== "done",
                    onClick: () => setStep(n),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "bk-step-dot", children: state === "done" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CheckIcon3, {}, void 0, !1, {
                        fileName: "app/components/ad-results.tsx",
                        lineNumber: 448,
                        columnNumber: 47
                      }, this) : n }, void 0, !1, {
                        fileName: "app/components/ad-results.tsx",
                        lineNumber: 447,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "bk-step-label", children: label }, void 0, !1, {
                        fileName: "app/components/ad-results.tsx",
                        lineNumber: 450,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/ad-results.tsx",
                    lineNumber: 441,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 437,
                columnNumber: 21
              },
              this
            )
          ] }, label, !0, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 430,
            columnNumber: 19
          }, this);
        }) }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 425,
          columnNumber: 13
        }, this),
        step === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bk-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "rs-flow-title", children: "Run another ad" }, void 0, !1, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 461,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "bk-sub", children: "Pick a date and placement. We'll confirm by email." }, void 0, !1, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 462,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bk-fields", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "bk-label", id: "rs-date-label", children: "Target Start Date" }, void 0, !1, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 466,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { className: "bk-date", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: `bk-date-text${startDate ? "" : " is-empty"}`, children: startDate ? formatDate(startDate) : "Select launch date" }, void 0, !1, {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 471,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CalendarIcon3, {}, void 0, !1, {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 474,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                  "input",
                  {
                    type: "date",
                    className: "bk-date-input",
                    "aria-labelledby": "rs-date-label",
                    value: startDate,
                    min: minDate || void 0,
                    onClick: (e) => openPicker(e.currentTarget),
                    onChange: (e) => {
                      setStartDate(e.target.value), setStepError("");
                    }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ad-results.tsx",
                    lineNumber: 475,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 470,
                columnNumber: 21
              }, this),
              (stepError || errors.startDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "bk-error", role: "alert", children: stepError || errors.startDate }, void 0, !1, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 490,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 465,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "bk-label", children: "Select Placement" }, void 0, !1, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 497,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                Segmented3,
                {
                  label: "Placement",
                  options: PLACEMENTS_PAID,
                  rawOptions: RAW_PLACEMENTS,
                  value: placement,
                  onChange: setPlacement
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 498,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 496,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "bk-label", children: "Which Ad" }, void 0, !1, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 508,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                Segmented3,
                {
                  label: "Which ad",
                  options: CREATIVES,
                  value: creative,
                  onChange: setCreative
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 509,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 507,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bk-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "bk-label", children: "Payment Method" }, void 0, !1, {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 518,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                Segmented3,
                {
                  label: "Payment method",
                  options: PAYMENT_METHODS,
                  value: paymentMethod,
                  onChange: setPaymentMethod
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ad-results.tsx",
                  lineNumber: 519,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 517,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 464,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bk-actions", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              "button",
              {
                type: "button",
                className: "bk-btn bk-btn-secondary",
                onClick: () => setBooking(!1),
                children: "Cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 529,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("button", { type: "button", className: "bk-btn bk-btn-primary", onClick: goToReview, children: "Review Order \u2192" }, void 0, !1, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 536,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 528,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 460,
          columnNumber: 15
        }, this),
        step === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react22.Form, { method: "post", className: "bk-card", children: [
          (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bk-alert", role: "alert", children: [
            actionData.error,
            serverFieldMessages.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("ul", { children: serverFieldMessages.map((message) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: message }, message, !1, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 552,
              columnNumber: 27
            }, this)) }, void 0, !1, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 550,
              columnNumber: 23
            }, this),
            actionData.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("code", { children: actionData.debug }, void 0, !1, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 556,
              columnNumber: 42
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 547,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "hidden", name: "startDate", value: startDate }, void 0, !1, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 560,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "hidden", name: "placement", value: placement }, void 0, !1, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 561,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "hidden", name: "paymentMethod", value: paymentMethod }, void 0, !1, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 562,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "hidden", name: "creative", value: creative }, void 0, !1, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 563,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "input",
            {
              type: "text",
              name: "nonce",
              className: "hp-field",
              tabIndex: -1,
              autoComplete: "off",
              "aria-hidden": "true",
              style: { display: "none" }
            },
            void 0,
            !1,
            {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 564,
              columnNumber: 17
            },
            this
          ),
          creative === "Same ad" && (latest.showPreview !== !1 || latest.image) && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { style: { marginBottom: "1.5rem" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "bk-label", style: { marginBottom: "0.5rem" }, children: [
              name,
              " Ad"
            ] }, void 0, !0, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 576,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              "div",
              {
                className: "feed-embed loaded bk-preview",
                style: { maxHeight: "220px", overflow: "hidden", marginBottom: 0 },
                children: latest.showPreview !== !1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                  feed_embed_default,
                  {
                    id: `${slug}-rebook-thumbnail`,
                    src: `/custom/${slug}/ad?run=${encodeURIComponent(latestId)}`,
                    title: `${name} ad`,
                    interactive: !1,
                    bordered: !1,
                    fallbackHeight: 220
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ad-results.tsx",
                    lineNumber: 584,
                    columnNumber: 25
                  },
                  this
                ) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                  "img",
                  {
                    src: latest.image,
                    alt: `${name} ad`,
                    style: { display: "block", width: "100%", height: "auto" }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ad-results.tsx",
                    lineNumber: 593,
                    columnNumber: 25
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 579,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 575,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("dl", { className: "bk-summary", children: summaryRows.map((row) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bk-row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("dt", { children: row.label }, void 0, !1, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 606,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("dd", { children: row.value }, void 0, !1, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 607,
              columnNumber: 23
            }, this)
          ] }, row.label, !0, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 605,
            columnNumber: 21
          }, this)) }, void 0, !1, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 603,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bk-group", style: { marginBottom: "1.5rem" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { className: "bk-label", htmlFor: "rs-notes", children: creative === "New ad" ? "Tell us about your new ad" : "Additional Notes (Optional)" }, void 0, !1, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 613,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              "textarea",
              {
                id: "rs-notes",
                name: "notes",
                className: "bk-textarea",
                rows: 3,
                placeholder: creative === "New ad" ? "Link to your new creative, copy, or tracking links..." : "Special instructions or tracking links...",
                value: notes,
                onChange: (e) => setNotes(e.target.value)
              },
              void 0,
              !1,
              {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 618,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 612,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bk-altcha", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 634,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 633,
            columnNumber: 17
          }, this),
          errors.altcha && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "bk-error", role: "alert", style: { marginBottom: "1.25rem" }, children: errors.altcha }, void 0, !1, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 637,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bk-actions", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              "button",
              {
                type: "button",
                className: "bk-btn bk-btn-secondary",
                onClick: () => setStep(1),
                children: "\u2190 Back"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ad-results.tsx",
                lineNumber: 643,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("button", { type: "submit", className: "bk-btn bk-btn-primary", disabled: isSubmitting, children: submitLabel }, void 0, !1, {
              fileName: "app/components/ad-results.tsx",
              lineNumber: 650,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ad-results.tsx",
            lineNumber: 642,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 545,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 424,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 659,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ad-results.tsx",
      lineNumber: 251,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("footer", { className: "feed-footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "feed-footer-links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react22.Link, { to: "/about", children: "about" }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 664,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react22.Link, { to: "/archive", children: "archive" }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 665,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react22.Link, { to: "/submit-post", children: "submit post" }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 666,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react22.Link, { to: "/policies/privacy", children: "privacy" }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 667,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react22.Link, { to: "/policies/terms", children: "terms" }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 668,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react22.Link, { to: "/book", children: "advertise" }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 669,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react22.Link, { to: "/manager", children: "ads manager" }, void 0, !1, {
          fileName: "app/components/ad-results.tsx",
          lineNumber: 670,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 663,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "feed-copyright", children: "thepoast \xA9 2026" }, void 0, !1, {
        fileName: "app/components/ad-results.tsx",
        lineNumber: 672,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ad-results.tsx",
      lineNumber: 662,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ad-results.tsx",
    lineNumber: 241,
    columnNumber: 5
  }, this);
}

// app/routes/custom/$company.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
async function loader8({ params, request }) {
  var _a2;
  let company = ((_a2 = params.company) == null ? void 0 : _a2.toLowerCase()) || "";
  if (hasResults(company)) {
    let run = new URL(request.url).searchParams.get("run");
    return (0, import_node5.json)(
      { mode: "results", results: buildResultsData(company, run) },
      { headers: { "X-Robots-Tag": "noindex, nofollow" } }
    );
  }
  let campaignId = CAMPAIGN_MAP[company];
  if (!campaignId)
    throw new Response("Advertiser campaign not found", { status: 404 });
  let companyName = company.charAt(0).toUpperCase() + company.slice(1);
  return (0, import_node5.json)({ mode: "sample", company, companyName, campaignId });
}
async function action3({ request, params }) {
  var _a2;
  return handleRebookAction(request, ((_a2 = params.company) == null ? void 0 : _a2.toLowerCase()) || "");
}
var meta7 = ({ data }) => data ? data.mode === "results" ? { title: `${data.results.name} ad results / thepoast`, robots: "noindex, nofollow" } : {
  title: "thepoast"
} : { title: "404 / thepoast", robots: "noindex" }, links7 = () => [
  { rel: "stylesheet", href: custom_default },
  { rel: "stylesheet", href: results_default },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
], headers5 = ({ loaderHeaders }) => {
  let result = {
    "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=300"
  }, robots = loaderHeaders.get("X-Robots-Tag");
  return robots && (result["X-Robots-Tag"] = robots), result;
};
function CatchBoundary5() {
  let caught = (0, import_react24.useCatch)();
  if (caught.status === 404)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(NotFound, {}, void 0, !1, {
      fileName: "app/routes/custom/$company.tsx",
      lineNumber: 92,
      columnNumber: 12
    }, this);
  throw new Error(`Unexpected response: ${caught.status}`);
}
var BANNER_TRIGGER6 = 0.85;
function useReachedEndOfFeed5() {
  let endRef = (0, import_react23.useRef)(null), [reached, setReached] = (0, import_react23.useState)(!1);
  return (0, import_react23.useEffect)(() => {
    let el = endRef.current;
    if (!el)
      return;
    let frame = 0, check = () => {
      frame = 0;
      let top = el.getBoundingClientRect().top;
      setReached(
        window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER6
      );
    }, schedule3 = () => {
      frame || (frame = requestAnimationFrame(check));
    };
    window.addEventListener("scroll", schedule3, { passive: !0 }), window.addEventListener("resize", schedule3);
    let resizeObserver;
    return typeof ResizeObserver < "u" && el.parentElement && (resizeObserver = new ResizeObserver(schedule3), resizeObserver.observe(el.parentElement)), check(), () => {
      window.removeEventListener("scroll", schedule3), window.removeEventListener("resize", schedule3), resizeObserver == null || resizeObserver.disconnect(), frame && cancelAnimationFrame(frame);
    };
  }, []), { endRef, reached };
}
function CompanyPage() {
  let data = (0, import_react24.useLoaderData)();
  return data.mode === "results" ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(AdResults, { data: data.results }, void 0, !1, {
    fileName: "app/routes/custom/$company.tsx",
    lineNumber: 149,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SamplePage, { company: data.company, companyName: data.companyName }, void 0, !1, {
    fileName: "app/routes/custom/$company.tsx",
    lineNumber: 152,
    columnNumber: 10
  }, this);
}
function SamplePage({ company, companyName }) {
  let { endRef, reached } = useReachedEndOfFeed5(), navigate = (0, import_react24.useNavigate)(), footerRef = (0, import_react23.useRef)(null), [kitOpen, setKitOpen] = (0, import_react23.useState)(!1), bannerVisible = reached;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("header", { className: `feed-topbar${reached ? " is-hidden" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react24.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { src: "/img/tp.png", alt: "thepoast", decoding: "async" }, void 0, !1, {
      fileName: "app/routes/custom/$company.tsx",
      lineNumber: 167,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/custom/$company.tsx",
      lineNumber: 166,
      columnNumber: 3
    }, this) }, void 0, !1, {
      fileName: "app/routes/custom/$company.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("main", { className: "feed-stream", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mk-promo-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react24.Link, { to: `/${company}/book?free=1`, className: "mk-promo", children: "Book your first ad for free! Get started \u2192" }, void 0, !1, {
        fileName: "app/routes/custom/$company.tsx",
        lineNumber: 177,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/custom/$company.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "feed-embed loaded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        feed_embed_default,
        {
          id: `${company}-campaign`,
          src: `/custom/${company}/preview`,
          title: `${companyName} x thepoast Campaign`,
          interactive: !0,
          bordered: !0,
          hideTopBorder: !0,
          fallbackHeight: 900
        },
        void 0,
        !1,
        {
          fileName: "app/routes/custom/$company.tsx",
          lineNumber: 183,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/custom/$company.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/routes/custom/$company.tsx",
        lineNumber: 194,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "footer",
        {
          ref: footerRef,
          className: `feed-footer${bannerVisible ? " is-covered" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "feed-footer-links", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react24.Link, { to: "/about", children: "about" }, void 0, !1, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 201,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react24.Link, { to: "/archive", children: "archive" }, void 0, !1, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 202,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react24.Link, { to: "/submit-post", children: "submit post" }, void 0, !1, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 203,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react24.Link, { to: "/policies/privacy", children: "privacy" }, void 0, !1, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 204,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react24.Link, { to: "/policies/terms", children: "terms" }, void 0, !1, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 205,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react24.Link, { to: "/book", children: "advertise" }, void 0, !1, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 206,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react24.Link, { to: "/manager", children: "ads manager" }, void 0, !1, {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 207,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/custom/$company.tsx",
              lineNumber: 200,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "feed-copyright", children: "thepoast \xA9 2026" }, void 0, !1, {
              fileName: "app/routes/custom/$company.tsx",
              lineNumber: 209,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/custom/$company.tsx",
          lineNumber: 196,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "aside",
        {
          className: `feed-banner${bannerVisible ? " is-visible" : ""}`,
          "aria-label": "Get Started",
          "aria-hidden": !bannerVisible,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "feed-banner-inner", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "feed-banner-title", children: "Better business performance, fueled by email" }, void 0, !1, {
              fileName: "app/routes/custom/$company.tsx",
              lineNumber: 218,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "button",
              {
                type: "button",
                className: "feed-banner-btn",
                onClick: () => navigate(`/${company}/book`),
                children: "Get Started"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 222,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "button",
              {
                type: "button",
                className: "back-btn",
                tabIndex: bannerVisible ? 0 : -1,
                onClick: () => setKitOpen(!0),
                style: { marginTop: "0rem" },
                children: "Audience details"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/custom/$company.tsx",
                lineNumber: 230,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/custom/$company.tsx",
            lineNumber: 217,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/custom/$company.tsx",
          lineNumber: 212,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/custom/$company.tsx",
      lineNumber: 175,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      MediaKit,
      {
        open: kitOpen,
        onClose: () => setKitOpen(!1),
        ctaLabel: "Get Started",
        onCta: () => navigate(`/${company}/book`)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/custom/$company.tsx",
        lineNumber: 244,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/custom/$company.tsx",
    lineNumber: 164,
    columnNumber: 5
  }, this);
}

// app/routes/feeds.full.$id.tsx
var feeds_full_id_exports = {};
__export(feeds_full_id_exports, {
  loader: () => loader9
});
var HTML_HEADERS2 = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control": "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400",
  "X-Content-Type-Options": "nosniff"
};
async function loader9({
  params
}) {
  let id = params.id;
  if (!id || !/^\d+$/.test(id))
    return new Response(
      "Bad campaign ID",
      {
        status: 400,
        headers: {
          "Cache-Control": "no-store",
          "Content-Type": "text/plain; charset=utf-8"
        }
      }
    );
  try {
    let issue = await getIssue(id);
    return issue ? new Response(
      issue.body,
      {
        status: 200,
        headers: HTML_HEADERS2
      }
    ) : new Response(
      "Issue unavailable",
      {
        status: 404,
        headers: {
          "Cache-Control": "public, max-age=30",
          "Content-Type": "text/plain; charset=utf-8"
        }
      }
    );
  } catch (error) {
    return console.error(
      `[feeds] Failed to render issue ${id}:`,
      error
    ), new Response(
      "Issue temporarily unavailable",
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store",
          "Retry-After": "2",
          "Content-Type": "text/plain; charset=utf-8"
        }
      }
    );
  }
}

// app/routes/policies/terms.tsx
var terms_exports = {};
__export(terms_exports, {
  default: () => Terms,
  links: () => links8,
  meta: () => meta8
});
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), links8 = () => [
  { rel: "stylesheet", href: showscroll_default }
], meta8 = () => ({
  title: "Terms / thepoast",
  description: "Learn about our Terms and Conditions."
}), toc2 = [
  { id: "about", label: "About this Policy and us" },
  { id: "collect", label: "Information we collect" },
  { id: "use", label: "How we use your information" }
];
function Terms() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(LegalPage, { title: "Terms and Conditions", effective: "April 5, 2025", toc: toc2, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "thepoast respects your privacy and values your trust. This Privacy Policy (\u201CPolicy\u201D) describes how we collect and use your information and explains your rights and options. This Policy applies to these services (which we call the \u201CServices\u201D in this Policy):" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "websites, thepoast Store, paid products" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "newsletters and other disseminated content" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "merchandise, mobile apps and related social media pages" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "anywhere else we gather information about you and refer to this Policy." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "This Policy is grouped into these sections:" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "about us and this Policy;" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "information we collect;" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "how we use information, including for advertising purposes;" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "when we disclose information to other parties, including for advertising purposes; and" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "your rights and how to exercise them." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: [
      "We encourage you to read this Policy carefully. If you have questions, please contact us at",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h3", { className: "section-title", id: "about", children: "1. About This Policy And Us" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "sub-title", children: "(a) Who we are" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "thepoast, Inc. (\u201Cthepoast,\u201D \u201Cwe\u201D, \u201Cour\u201D or \u201Cus\u201D) operates the Services. This Policy supplements and is governed by our Terms of Service (\u201CTerms\u201D). Capitalized terms used but not defined in this Policy are defined in our Terms. The Terms describe how the Services work in general and its conditions and requirements of use." }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "sub-title", children: "(b) When this Policy applies" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "This Policy applies when you use the Services, effective as of the Last Updated date above. By using or accessing the Services, you signify that you have read, understand and agree to be bound by this Policy and the Terms." }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "Because the Services change often, this Policy may change over time. Anytime we modify the Policy, we will post a revised version on the Services and update the Last Updated date above. If you have given us your contact information, we will notify you before any material changes take effect, so you have time to review them." }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "Certain parts of the Services work differently, and some information falls outside this Policy:" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Certain parts of the Services may have additional terms and privacy disclosures that supplement this Policy." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "The Services may contain links to and from third-party websites and services. This Policy doesn\u2019t apply to outside of our Services. See Third Party Services to learn more." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: [
        "If you are a current or former employee or contractor of ours, this Policy does not apply to you. You may contact us about your privacy practices and rights at",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "If we receive your information in our role as a service provider to another business, our agreement with that business governs our use of your information. We will refer any questions or concerns of yours to that business." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "sub-title", children: "(c) Location-specific sections" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: [
      "The Services operates from the United States, but this Policy applies worldwide. Our practices generally do not differ based on your location, but your rights and choices depend in part on the law where you live. For example, you may have rights under: (1) \u201CGDPR\u201D:",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("i", { children: "THE EU GENERAL DATA PROTECTION REGULATION (EU) 2016/679, AND THE UK GENERAL DATA PROTECTION REGULATION (UK GDPR) AS TAILORED BY THE DATA PROTECTION ACT 2018" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      "; or (2) \u201CCCPA\u201D: the California Consumer Privacy Act, as amended."
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "As a result, certain sections of this Policy apply to you only if you reside in a particular location:" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Residents of jurisdictions where GDPR applies \u2013 such as U.K., EU and Swiss residents \u2013 should consult the Rights under GDPR and International Data Transfers sections." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Residents of Mexico should consult the Aviso de Privacidad addendum." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Canadian residents should consult the Canadian users section." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "California residents should consult the Rights under California law section. If you reside in a U.S. jurisdiction that has enacted a data privacy law similar to CCPA or GDPR, we extend the same rights CCPA grants to California residents to you, except where we specify otherwise." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: [
      "If those sections apply to you, they override any contrary descriptions elsewhere in the Policy as they relate to you. Please contact us at",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      " ",
      "if you have questions about your rights under other data privacy laws."
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h3", { className: "section-title", id: "collect", children: "2. Information We Collect" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "sub-title", children: "(a) Information you provide" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "You may use the Services without providing any information about yourself. However, to use some aspects of the Services, we will need information about you, such as if you:" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Purchase our Offerings or services" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Contact or communicate with us" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Subscribe or opt-in to our newsletters, alerts, or other communications" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Participate in a contest or promotion or redeem a prize" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Information you provide may include your name or email address (\u201Cpersonal identifiers\u201D)." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "We generally don\u2019t collect (or want!) your sensitive information, and we strive to limit the amount of sensitive personal information we collect." }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "For instance, if you make a purchase through our Services, your payment information, like your full credit card number and any payment-related security information, is only collected and processed by our payment processor." }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 145,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "In the event you provide sensitive personal information to us, we use it only for our operational business purposes, and we do not disclose it to others for any other purpose." }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "sub-title", children: "(b) Information collected when you use the Services" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "As you use the Services, cookies and other technology we use will generate technical data about which features you use, how you use them and the devices you use to access our services. This information may include:" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "\u201CCommercial Information\u201D about your orders of Offerings or other products or services from us and interactions with thepoast Store products." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "\u201CDevice Information\u201D related to the device you use to interact with the Services, such as your device\u2019s IP address, advertising IDs (resettable, random numbers, such as the device\u2019s Apple IDFA or Android Advertising ID), its browser and operating system, its internet service provider, and its configuration." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 162,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "\u201CInternet Activity\u201D related to your use of the Services, such as the pages you visit, the sites you use before or after visiting ours, your actions within the Services, the content or advertisements you interact with, general geolocation information, time stamps and performance logs and reports." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "legal-callout", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "legal-callout-title", children: "Managing cookies and similar technologies" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("i", { children: "WHEN YOU FIRST VISIT OUR SERVICES, AND PERIODICALLY THEREAFTER, YOU WILL BE PRESENTED WITH A COOKIE BANNER PROVIDING YOU WITH INFORMATION ABOUT THE COOKIES AND SIMILAR TRACKING TECHNOLOGIES WE USE. FOR COOKIES THAT ARE NOT STRICTLY NECESSARY FOR THE FUNCTIONING OF OUR SERVICES, WE WILL REQUEST YOUR EXPLICIT CONSENT BEFORE PLACING THEM ON YOUR DEVICE. OUR COOKIE BANNER ALLOWS YOU TO:" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("i", { children: "ACCEPT ALL COOKIES;" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 179,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 179,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("i", { children: "REJECT ALL NON-ESSENTIAL COOKIES; OR" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 180,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("i", { children: "CUSTOMIZE YOUR PREFERENCES AND CONSENT TO SPECIFIC CATEGORIES OF COOKIES." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 181,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 181,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("i", { children: "PREFERENCES FOR NON-ESSENTIAL COOKIES ARE NOT PRE-SELECTED. YOU CAN WITHDRAW OR CHANGE YOUR CONSENT AT ANY TIME." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 184,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 183,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 166,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "sub-title", children: "(c) Information we generate" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 191,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "We infer new information from other data we collect, including using automated means to generate information about your likely preferences or other characteristics (\u201Cinferences\u201D)." }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h3", { className: "section-title", id: "use", children: "3. How We Use Your Information" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 199,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "We use each of the categories of personal information described above for the following business and commercial purposes. The activities below can involve outside companies, agents or contractors (\u201Cservice providers\u201D) to whom we disclose your information for these purposes (discussed further below in Section 4)." }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 200,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "sub-title", children: "(a) To provide our content, services and products to you" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 208,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Deliver content you request" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Provide you with customer support and respond to your requests" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 211,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Complete your orders" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 212,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Communicate with you about our services" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 213,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 209,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "sub-title", children: "(b) To manage your subscriptions or fulfill product orders" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 216,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Manage your content subscriptions" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 218,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Deliver and process payments for Offerings you order" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 217,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "sub-title", children: "(c) To improve our services and develop new ones" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 222,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Administer focus groups, market studies and surveys" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Review interactions with customer teams to improve our quality of service" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 225,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Develop new content and services" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 226,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "sub-title", children: "(d) To allow personalized ads and create audiences for third-party advertisers" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 229,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Administer sweepstakes, contests, discounts or other offers" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 231,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Gather data and work with third parties to show you personalized ads on behalf of advertisers" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 232,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Perform and measure the effectiveness of advertising campaigns on our services and marketing campaigns off of the Services" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 233,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Communicate with you about products or services that we believe may interest you" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 234,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("i", { children: "OUR PERSONALIZED ADVERTISING ACTIVITIES RELY ON YOUR PRIOR CONSENT FOR THE USE OF RELEVANT COOKIES AND TRACKING TECHNOLOGIES, AND FOR THE SHARING OF YOUR INFORMATION WITH ADVERTISING PARTNERS FOR THESE PURPOSES." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 236,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 235,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 230,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "sub-title", children: "(e) To prevent, detect and fight fraud and other illegal or unauthorized activities" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Find and address ongoing, suspected or alleged violations of our Terms" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 247,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Retain data related to violations of our Terms to prevent against recurrences" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 248,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Enforce or exercise our rights; for example, those in our Terms" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 249,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 246,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "sub-title", children: "(f) To create broader findings with aggregate and deidentified data" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 252,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Aggregate or deidentify information so that it can no longer identify you, as defined under applicable laws." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Better understand and represent our users using deidentified data, such as to measure ad performance, create advertising interest-based segments or compile survey results." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 255,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "sub-title", children: "(g) To ensure legal compliance" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 258,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Verify copyright or IP claims" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 260,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Comply with legal requirements" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 261,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Assist law enforcement" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 262,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 259,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "sub-title", children: "(h) Purposes" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 265,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "We rely on the following purposes to collect and use your information as described in this Policy:" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 266,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("u", { children: "Commercial purposes" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 271,
          columnNumber: 13
        }, this),
        ": At times, the reason we process your information is to advance your economic interests or our economic interests. These purposes include performing the contract that you have with us, as embodied by our Terms, which advance our economic interests and yours. For instance, if you order products from us, we use your information to complete your payment and provide your product to you."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 271,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("u", { children: "Business purposes" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 272,
          columnNumber: 13
        }, this),
        ": Most often, we process your information for operational reasons, in a reasonably necessary and proportionate manner (i.e., for business purposes under CCPA). For instance, we analyze users\u2019 behavior on our services to continuously improve our offerings, we suggest content we think might interest you and promote our own services, we process information to help keep our members safe and we process data where necessary to enforce our rights, assist law enforcement and enable us to defend ourselves in the event of a legal action."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 272,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("u", { children: "Comply with applicable laws and regulations" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 273,
          columnNumber: 13
        }, this),
        ": We also process your information where it is necessary for us to comply with applicable laws and regulations and evidence our compliance with applicable laws and regulations. For example, we retain traffic data and data about transactions in line with our accounting, tax and other statutory data retention obligations and to be able to respond to valid access requests from law enforcement."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 273,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("u", { children: "Consent" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 275,
          columnNumber: 11
        }, this),
        ": From time to time, we may ask for your consent to collect specific information, such as your precise geolocation, or use your information for certain specific reasons, like providing your email address or phone number for direct marketing purposes, or for the use of certain types of cookies for personalized advertising. In general, you may withdraw your consent by changing your settings (such as browser or device settings) or following instructions provided with information we send you on a consent basis (such as clicking \u2018unsubscribe\u2019 in any email we send you). You may always withdraw your consent at any time \u2013 just contact us at",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 285,
          columnNumber: 11
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 274,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 270,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: [
      "Questions about these terms? Contact us at",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 291,
        columnNumber: 9
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 289,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/policies/terms.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/archive/index.tsx
var archive_exports = {};
__export(archive_exports, {
  default: () => Today,
  headers: () => headers6,
  links: () => links9,
  loader: () => loader10,
  meta: () => meta9,
  shouldRevalidate: () => shouldRevalidate
});
var import_react25 = require("react"), import_react26 = require("@remix-run/react"), import_node6 = require("@remix-run/node");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), meta9 = () => ({
  title: "Archive / thepoast",
  description: "Create a new ad campaign for your company or brand here."
}), links9 = () => [
  {
    rel: "preconnect",
    href: "https://img.thepoast.com"
  },
  {
    rel: "dns-prefetch",
    href: "https://img.thepoast.com"
  }
], headers6 = ({
  loaderHeaders
}) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? "no-store"
});
function shouldRevalidate() {
  return !1;
}
var FEED_LIMIT2 = 30, FEED_START_DATE = "2026-09-23", BANNER_TRIGGER7 = 0.75;
async function loader10() {
  let campaigns = await listFinishedCampaigns(), sinceCutoff = campaigns.filter((campaign) => {
    let date = getCampaignDate(campaign);
    if (!date)
      return !1;
    try {
      return getDateKey(date) >= FEED_START_DATE;
    } catch {
      return !1;
    }
  }), feeds = getLatestCampaignPerDay(
    sinceCutoff,
    FEED_LIMIT2
  ).map((campaign) => ({
    id: String(campaign.id),
    subject: campaign.subject || "thepoast",
    date: getCampaignDate(campaign) || (/* @__PURE__ */ new Date()).toISOString()
  }));
  feeds.length > 0 && warmLeadStories(feeds.map((feed) => feed.id));
  let degraded = campaigns.length === 0;
  return (0, import_node6.json)(
    {
      feeds,
      degraded
    },
    {
      headers: {
        "Cache-Control": degraded ? "no-store" : "public, max-age=30, s-maxage=60, stale-while-revalidate=3600"
      }
    }
  );
}
var MAX_CONCURRENT = 3, active = 0, waiting = [];
function schedule(task) {
  return new Promise((resolve, reject) => {
    let run = () => {
      active++, task().then(resolve, reject).finally(() => {
        var _a2;
        active--, (_a2 = waiting.shift()) == null || _a2();
      });
    };
    active < MAX_CONCURRENT ? run() : waiting.push(run);
  });
}
var sleep2 = (ms) => new Promise(
  (resolve) => setTimeout(resolve, ms)
);
async function fetchLead(id, signal) {
  let url = `/feeds/preview/${encodeURIComponent(id)}`, lastError;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (signal.aborted)
      throw new DOMException(
        "Aborted",
        "AbortError"
      );
    try {
      let response = await fetch(url, {
        signal,
        headers: {
          Accept: "text/html"
        }
      });
      if (response.status === 404)
        return null;
      if (!response.ok)
        throw new Error(
          `Preview failed: ${response.status}`
        );
      let text = await response.text();
      if (!text)
        throw new Error("Empty preview");
      return text;
    } catch (error) {
      if (signal.aborted)
        throw error;
      lastError = error, await sleep2(500 * (attempt + 1));
    }
  }
  throw lastError;
}
function formatDate4(date) {
  try {
    return new Date(date).toLocaleDateString(
      "en-CA",
      {
        timeZone: "America/Toronto",
        dateStyle: "long"
      }
    );
  } catch {
    return "";
  }
}
function useReachedEndOfPage2() {
  let endRef = (0, import_react25.useRef)(null), [reached, setReached] = (0, import_react25.useState)(!1);
  return (0, import_react25.useEffect)(() => {
    let element = endRef.current;
    if (!element)
      return;
    let frame = 0, check = () => {
      frame = 0;
      let top = element.getBoundingClientRect().top;
      setReached(window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER7);
    }, scheduleCheck = () => {
      frame || (frame = requestAnimationFrame(check));
    };
    window.addEventListener("scroll", scheduleCheck, { passive: !0 }), window.addEventListener("resize", scheduleCheck);
    let resizeObserver;
    return typeof ResizeObserver < "u" && element.parentElement && (resizeObserver = new ResizeObserver(scheduleCheck), resizeObserver.observe(element.parentElement)), check(), () => {
      window.removeEventListener("scroll", scheduleCheck), window.removeEventListener("resize", scheduleCheck), resizeObserver == null || resizeObserver.disconnect(), frame && cancelAnimationFrame(frame);
    };
  }, []), { endRef, reached };
}
function FeedCard({
  feed
}) {
  let ref = (0, import_react25.useRef)(null), sideBorders = useSideBorders(), [html, setHtml] = (0, import_react25.useState)(
    null
  ), [failed, setFailed] = (0, import_react25.useState)(!1);
  return (0, import_react25.useEffect)(() => {
    if (html || failed)
      return;
    let element = ref.current;
    if (!element)
      return;
    let controller = new AbortController(), observer = new IntersectionObserver(
      ([entry2]) => {
        entry2 != null && entry2.isIntersecting && (observer.disconnect(), schedule(
          () => fetchLead(
            feed.id,
            controller.signal
          )
        ).then((result) => {
          controller.signal.aborted || (result ? setHtml(result) : setFailed(!0));
        }).catch((error) => {
          controller.signal.aborted || setFailed(!0);
        }));
      },
      {
        rootMargin: "1800px 0px",
        threshold: 0
      }
    );
    return observer.observe(element), () => {
      controller.abort(), observer.disconnect();
    };
  }, [
    feed.id,
    html,
    failed
  ]), /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    "section",
    {
      className: "feed-archive-item",
      "data-feed-id": feed.id,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "div",
        {
          ref,
          style: {
            position: "relative"
          },
          children: html ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              feed_embed_default,
              {
                id: feed.id,
                html,
                title: feed.subject,
                bordered: !0,
                hideTopBorder: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/archive/index.tsx",
                lineNumber: 343,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              "a",
              {
                href: `/archive/feeds/${feed.id}`,
                "aria-label": `Read: ${feed.subject}`,
                style: {
                  position: "absolute",
                  inset: 0,
                  zIndex: 1
                }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/archive/index.tsx",
                lineNumber: 351,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/archive/index.tsx",
            lineNumber: 342,
            columnNumber: 11
          }, this) : failed ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            "a",
            {
              href: `/archive/feeds/${feed.id}`,
              className: "feed-fallback",
              style: {
                display: "block",
                padding: "32px 24px",
                textAlign: "center",
                textDecoration: "none",
                color: "inherit",
                ...sideBorders
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("strong", { children: feed.subject }, void 0, !1, {
                  fileName: "app/routes/archive/index.tsx",
                  lineNumber: 374,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                  "div",
                  {
                    style: {
                      opacity: 0.6,
                      marginTop: 6
                    },
                    children: formatDate4(feed.date)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/archive/index.tsx",
                    lineNumber: 378,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/archive/index.tsx",
              lineNumber: 362,
              columnNumber: 11
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            "div",
            {
              className: "feed-lazy-placeholder",
              "aria-hidden": "true",
              style: {
                width: "100%",
                height: getCachedHeight(feed.id) ?? 360,
                ...sideBorders
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/archive/index.tsx",
              lineNumber: 388,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/archive/index.tsx",
          lineNumber: 335,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/archive/index.tsx",
      lineNumber: 331,
      columnNumber: 5
    },
    this
  );
}
function Today() {
  let {
    feeds,
    degraded
  } = (0, import_react26.useLoaderData)(), { endRef, reached } = useReachedEndOfPage2(), [forced, setForced] = (0, import_react25.useState)(!1), [expandBanner, setExpandBanner] = (0, import_react25.useState)(!1), footerRef = (0, import_react25.useRef)(null), previousReached = (0, import_react25.useRef)(!1), bannerVisible = reached || forced;
  return (0, import_react25.useEffect)(() => {
    previousReached.current && !reached && (setForced(!1), setExpandBanner(!1)), previousReached.current = reached;
  }, [reached]), /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "feed-page feeds-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(FeedTopbar, { hidden: reached, onSubscribe: (event) => {
      var _a2;
      event.preventDefault(), setForced(!0), setExpandBanner(!0), (_a2 = footerRef.current) == null || _a2.scrollIntoView({ behavior: "smooth", block: "end" });
    } }, void 0, !1, {
      fileName: "app/routes/archive/index.tsx",
      lineNumber: 436,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("main", { className: "feeds-stream", children: [
      feeds.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("section", { className: "feeds-empty", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: degraded ? "The archive is taking a moment. Please refresh shortly." : "No feeds yet." }, void 0, !1, {
        fileName: "app/routes/archive/index.tsx",
        lineNumber: 441,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/archive/index.tsx",
        lineNumber: 440,
        columnNumber: 11
      }, this) : feeds.map((feed) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        FeedCard,
        {
          feed
        },
        feed.id,
        !1,
        {
          fileName: "app/routes/archive/index.tsx",
          lineNumber: 449,
          columnNumber: 13
        },
        this
      )),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/routes/archive/index.tsx",
        lineNumber: 456,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/archive/index.tsx",
      lineNumber: 438,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { ref: footerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(FeedFooter, { covered: bannerVisible }, void 0, !1, {
      fileName: "app/routes/archive/index.tsx",
      lineNumber: 460,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/archive/index.tsx",
      lineNumber: 459,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(FeedSubscribeBanner, { visible: bannerVisible, forceExpanded: expandBanner }, void 0, !1, {
      fileName: "app/routes/archive/index.tsx",
      lineNumber: 463,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/archive/index.tsx",
    lineNumber: 435,
    columnNumber: 5
  }, this);
}

// app/routes/submit-post.tsx
var submit_post_exports = {};
__export(submit_post_exports, {
  action: () => action4,
  default: () => Tips,
  headers: () => headers7,
  meta: () => meta10
});
var import_node7 = require("@remix-run/node"), import_react27 = require("@remix-run/react"), import_react28 = require("react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), meta10 = () => ({
  title: "Submit post / thepoast",
  description: "Want to submit a post? Do it here."
}), headers7 = () => ({
  "Cache-Control": "public, max-age=60, s-maxage=120, stale-while-revalidate=600"
}), TOPICS = ["New post", "Story idea", "Correction", "Something else"], CREDIT_OPTIONS = [
  { value: "credit", label: "You can credit me" },
  { value: "anonymous", label: "Keep me anonymous" }
], TIPS_LIST_UUID = "a1d1ab8d-81e1-47fe-adab-4f4a555689a1", TIPS_LIST_FIELD_ID = "a1d1a", BANNER_TRIGGER8 = 0.75, str4 = (value, max) => typeof value == "string" ? value.trim().slice(0, max) : "", EMAIL_RE = /^[^\s@'"\\]+@[^\s@'"\\]+\.[^\s@'"\\]+$/;
function listmonkConfig2() {
  let baseUrl = (process.env.LISTMONK_URL || "https://app.thepoast.com").replace(/\/+$/, ""), apiUser = process.env.LISTMONK_API_USER || process.env.LISTMONK_USERNAME, apiToken = process.env.LISTMONK_API_TOKEN || process.env.LISTMONK_TOKEN;
  return { baseUrl, apiUser, apiToken };
}
async function listmonk3(path, init = {}) {
  let { baseUrl, apiUser, apiToken } = listmonkConfig2();
  return fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${apiUser}:${apiToken}`,
      ...init.headers || {}
    }
  });
}
var cachedTipsListId = null;
async function getTipsListId() {
  var _a2;
  let fromEnv = Number(process.env.LISTMONK_TIPS_LIST_ID);
  if (Number.isInteger(fromEnv) && fromEnv > 0)
    return fromEnv;
  if (cachedTipsListId)
    return cachedTipsListId;
  let body = await (await listmonk3("/api/lists?per_page=all&minimal=true")).json(), match = (((_a2 = body == null ? void 0 : body.data) == null ? void 0 : _a2.results) ?? []).find((l) => l.uuid === TIPS_LIST_UUID);
  return cachedTipsListId = match ? match.id : 1, cachedTipsListId;
}
async function saveTip(input) {
  var _a2, _b2, _c;
  let listId = await getTipsListId(), now = (/* @__PURE__ */ new Date()).toISOString(), tipEntry = { submitted_at: now, topic: input.topic, tip: input.tip, source: input.source, credit: input.credit }, attribs = { is_tipster: !0, last_tip_at: now, tips: [tipEntry] }, name = input.name || input.email.split("@")[0];
  if ((await listmonk3("/api/subscribers", {
    method: "POST",
    body: JSON.stringify({ email: input.email, name, status: "enabled", lists: [listId], preconfirm_subscriptions: !0, attribs })
  })).ok)
    return;
  let query = `subscribers.email = '${input.email.replace(/'/g, "''")}'`, found = await (await listmonk3(`/api/subscribers?per_page=1&query=${encodeURIComponent(query)}`)).json(), existing = (_b2 = (_a2 = found == null ? void 0 : found.data) == null ? void 0 : _a2.results) == null ? void 0 : _b2[0];
  existing && await listmonk3(`/api/subscribers/${existing.id}`, {
    method: "PUT",
    body: JSON.stringify({
      email: existing.email,
      name: input.name || existing.name || name,
      status: existing.status,
      lists: [...(existing.lists ?? []).map((l) => l.id), listId],
      preconfirm_subscriptions: !0,
      attribs: { ...existing.attribs, ...attribs, tips: [...((_c = existing.attribs) == null ? void 0 : _c.tips) || [], tipEntry].slice(-20) }
    })
  });
}
async function action4({ request }) {
  let formData = await request.formData();
  if (str4(formData.get("nonce"), 200))
    return (0, import_node7.json)({ success: !0 });
  let name = str4(formData.get("name"), 200), email = str4(formData.get("email"), 254).toLowerCase(), topic = str4(formData.get("topic"), 50), tip = str4(formData.get("tip"), 5e3), source = str4(formData.get("source"), 500), credit = str4(formData.get("credit"), 20) === "credit" ? "credit" : "anonymous", altcha = str4(formData.get("altcha"), 2e4), fieldErrors = {};
  if (EMAIL_RE.test(email) || (fieldErrors.email = "Please enter a valid email."), tip.length < 10 && (fieldErrors.tip = "Tell us a little more."), process.env.ALTCHA_REQUIRED !== "false" && !altcha && (fieldErrors.altcha = "Please complete the verification."), Object.keys(fieldErrors).length > 0)
    return (0, import_node7.json)({ error: "Please fix the highlighted fields.", fieldErrors }, { status: 400 });
  try {
    await saveTip({ name, email, topic, tip, source, credit });
  } catch (err) {
    return console.error("[tips] failed:", err), (0, import_node7.json)({ error: "Something went wrong sending your tip." }, { status: 500 });
  }
  return (0, import_node7.json)({ success: !0 });
}
function useReachedEndOfPage3() {
  let endRef = (0, import_react28.useRef)(null), [reached, setReached] = (0, import_react28.useState)(!1);
  return (0, import_react28.useEffect)(() => {
    let element = endRef.current;
    if (!element)
      return;
    let frame = 0, check = () => {
      frame = 0;
      let top = element.getBoundingClientRect().top;
      setReached(window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER8);
    }, schedule3 = () => {
      frame || (frame = requestAnimationFrame(check));
    };
    window.addEventListener("scroll", schedule3, { passive: !0 }), window.addEventListener("resize", schedule3);
    let resizeObserver;
    return typeof ResizeObserver < "u" && element.parentElement && (resizeObserver = new ResizeObserver(schedule3), resizeObserver.observe(element.parentElement)), check(), () => {
      window.removeEventListener("scroll", schedule3), window.removeEventListener("resize", schedule3), resizeObserver == null || resizeObserver.disconnect(), frame && cancelAnimationFrame(frame);
    };
  }, []), { endRef, reached };
}
function Tips() {
  let actionData = (0, import_react27.useActionData)(), errors = (actionData == null ? void 0 : actionData.fieldErrors) ?? {}, { endRef, reached } = useReachedEndOfPage3(), [forced, setForced] = (0, import_react28.useState)(!1), [expandBanner, setExpandBanner] = (0, import_react28.useState)(!1), footerRef = (0, import_react28.useRef)(null), previousReached = (0, import_react28.useRef)(!1), bannerVisible = reached || forced;
  (0, import_react28.useEffect)(() => {
    previousReached.current && !reached && (setForced(!1), setExpandBanner(!1)), previousReached.current = reached;
  }, [reached]);
  let handleTopbarSubscribe = (event) => {
    var _a2;
    event.preventDefault(), setForced(!0), setExpandBanner(!0), (_a2 = footerRef.current) == null || _a2.scrollIntoView({ behavior: "smooth", block: "end" });
  }, fieldError = (field) => errors[field] ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: "ad-field-error", role: "alert", children: errors[field] }, void 0, !1, {
    fileName: "app/routes/submit-post.tsx",
    lineNumber: 227,
    columnNumber: 21
  }, this) : null;
  return actionData != null && actionData.success ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "feed-page ad-booking-page tips-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(FeedTopbar, { hidden: reached, onSubscribe: handleTopbarSubscribe }, void 0, !1, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 232,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("main", { className: "ad-booking-card ad-success-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "ad-booking-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "ad-booking-title", children: "Post received" }, void 0, !1, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 235,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "ad-booking-sub", children: "Thank you for sending this our way. We'll take a look." }, void 0, !1, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 236,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 234,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react27.Link, { to: "/", className: "back-btn ad-success-btn", children: "\u2190 Back to thepoast" }, void 0, !1, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 238,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 239,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 233,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { ref: footerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(FeedFooter, { covered: bannerVisible }, void 0, !1, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 242,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 241,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(FeedSubscribeBanner, { visible: bannerVisible, forceExpanded: expandBanner }, void 0, !1, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 244,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/submit-post.tsx",
    lineNumber: 231,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "feed-page ad-booking-page tips-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(FeedTopbar, { hidden: reached, onSubscribe: handleTopbarSubscribe }, void 0, !1, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 251,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("main", { className: "ad-booking-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "ad-badge", children: "Submit a Post" }, void 0, !1, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 255,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react27.Form, { method: "post", className: "ad-booking-form", children: [
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "ad-form-error", role: "alert", children: actionData.error }, void 0, !1, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 259,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "name", children: "Name" }, void 0, !1, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 263,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "text", id: "name", name: "name", placeholder: "Name *" }, void 0, !1, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 264,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 262,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "email", children: "Email" }, void 0, !1, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 267,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "email", id: "email", name: "email", required: !0, placeholder: "Email *" }, void 0, !1, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 268,
              columnNumber: 15
            }, this),
            fieldError("email")
          ] }, void 0, !0, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 266,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 261,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "topic", children: "Submission" }, void 0, !1, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 275,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("select", { id: "topic", name: "topic", defaultValue: "", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("option", { value: "", disabled: !0, children: "Pick one..." }, void 0, !1, {
                fileName: "app/routes/submit-post.tsx",
                lineNumber: 277,
                columnNumber: 17
              }, this),
              TOPICS.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("option", { value: t, children: t }, t, !1, {
                fileName: "app/routes/submit-post.tsx",
                lineNumber: 278,
                columnNumber: 36
              }, this))
            ] }, void 0, !0, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 276,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 274,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "credit", children: "If we use it" }, void 0, !1, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 282,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("select", { id: "credit", name: "credit", defaultValue: "credit", children: CREDIT_OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("option", { value: o.value, children: o.label }, o.value, !1, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 284,
              columnNumber: 44
            }, this)) }, void 0, !1, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 283,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 281,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 273,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "tip", children: "Description" }, void 0, !1, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 290,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("textarea", { id: "tip", name: "tip", rows: 6, required: !0, placeholder: "What should we know?" }, void 0, !1, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 291,
            columnNumber: 13
          }, this),
          fieldError("tip")
        ] }, void 0, !0, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 289,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "source", children: "Link to post (optional)" }, void 0, !1, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 296,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "text", id: "source", name: "source", placeholder: "https://" }, void 0, !1, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 297,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 295,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { id: TIPS_LIST_FIELD_ID, type: "hidden", name: "l", value: TIPS_LIST_UUID }, void 0, !1, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 300,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "text", name: "nonce", className: "hp-field", tabIndex: -1, autoComplete: "off" }, void 0, !1, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 301,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "submit", className: "ad-submit-btn", children: "Submit Post" }, void 0, !1, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 303,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "subscribe-altcha", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 306,
            columnNumber: 13
          }, this),
          fieldError("altcha")
        ] }, void 0, !0, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 305,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 258,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "feed-legal", children: [
        "By submitting, you agree to our",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react27.Link, { to: "/policies/terms", children: "terms" }, void 0, !1, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 313,
          columnNumber: 13
        }, this),
        " &",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react27.Link, { to: "/policies/privacy", children: "privacy" }, void 0, !1, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 314,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 311,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react27.Link, { to: "/", className: "back-btn", children: "\u2190 Back to thepoast" }, void 0, !1, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 317,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 319,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { ref: footerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(FeedFooter, { covered: bannerVisible }, void 0, !1, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 323,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 322,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(FeedSubscribeBanner, { visible: bannerVisible, forceExpanded: expandBanner }, void 0, !1, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 326,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/submit-post.tsx",
    lineNumber: 250,
    columnNumber: 5
  }, this);
}

// app/routes/feeds.$id.tsx
var feeds_id_exports2 = {};
__export(feeds_id_exports2, {
  loader: () => loader11
});
var HTML_HEADERS3 = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control": "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400",
  "X-Content-Type-Options": "nosniff"
};
async function loader11({
  params
}) {
  let id = params.id;
  if (!id || !/^\d+$/.test(id))
    return new Response(
      "Bad campaign ID",
      {
        status: 400,
        headers: {
          "Cache-Control": "no-store",
          "Content-Type": "text/plain; charset=utf-8"
        }
      }
    );
  try {
    let issue = await getIssue(id);
    return issue ? new Response(
      issue.body,
      {
        status: 200,
        headers: HTML_HEADERS3
      }
    ) : new Response(
      "Issue unavailable",
      {
        status: 404,
        headers: {
          "Cache-Control": "public, max-age=30",
          "Content-Type": "text/plain; charset=utf-8"
        }
      }
    );
  } catch (error) {
    return console.error(
      `[feeds] Failed to render issue ${id}:`,
      error
    ), new Response(
      "Issue temporarily unavailable",
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store",
          "Retry-After": "2",
          "Content-Type": "text/plain; charset=utf-8"
        }
      }
    );
  }
}

// app/routes/media-kit.tsx
var media_kit_exports = {};
__export(media_kit_exports, {
  default: () => MediaKit2,
  meta: () => meta11
});
var import_react29 = require("@remix-run/react"), import_react30 = require("react");
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), meta11 = () => ({
  title: "Media kit / thepoast",
  description: "Find out who reads thepoast."
}), STATS = [
  { value: "27k+", label: "Email subscribers" },
  { value: "70k+", label: "Weekly readers" },
  { value: "36%", label: "Average open rate" },
  { value: "30k+", label: "Monthly web visitors" }
], AUDIENCE = ["Founders", "Executives", "Builders", "Investors", "Marketers"], FORMATS = [
  {
    title: "Repurpose campaigns from social media",
    body: "Already running ads? Repurpose one of them in thepoast."
  },
  {
    title: "Link to your landing page",
    body: "Avoid in-app browsers and get every link click landing on your page."
  },
  {
    title: "Track and measure your ads",
    body: "Track and measure ads using your own UTM link, or we'll give you one."
  }
], STEPS4 = [
  {
    title: "Send a booking request",
    body: "Tell us about your company, start date, budget, and any ads you're already running."
  },
  {
    title: "We reply within 48 hours",
    body: "You'll get availability, options, and next steps by email."
  },
  {
    title: "Approve and launch",
    body: "Once creative is approved, your campaign goes live on your start date."
  }
], PARTNER_PATH = "/partner", BANNER_TRIGGER9 = 0.75;
function useReachedEndOfPage4() {
  let endRef = (0, import_react30.useRef)(null), [reached, setReached] = (0, import_react30.useState)(!1);
  return (0, import_react30.useEffect)(() => {
    let element = endRef.current;
    if (!element)
      return;
    let frame = 0, check = () => {
      frame = 0;
      let top = element.getBoundingClientRect().top;
      setReached(window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER9);
    }, schedule3 = () => {
      frame || (frame = requestAnimationFrame(check));
    };
    window.addEventListener("scroll", schedule3, { passive: !0 }), window.addEventListener("resize", schedule3);
    let resizeObserver;
    return typeof ResizeObserver < "u" && element.parentElement && (resizeObserver = new ResizeObserver(schedule3), resizeObserver.observe(element.parentElement)), check(), () => {
      window.removeEventListener("scroll", schedule3), window.removeEventListener("resize", schedule3), resizeObserver == null || resizeObserver.disconnect(), frame && cancelAnimationFrame(frame);
    };
  }, []), { endRef, reached };
}
function MediaKit2() {
  let { endRef, reached } = useReachedEndOfPage4(), navigate = (0, import_react29.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "feed-page ad-booking-page mk-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react29.PrefetchPageLinks, { page: PARTNER_PATH }, void 0, !1, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("header", { className: `feed-topbar${reached ? " is-hidden" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react29.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("img", { src: "/img/tp.png", alt: "thepoast", decoding: "async" }, void 0, !1, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react29.Link, { className: "feed-subscribe", to: PARTNER_PATH, prefetch: "intent", children: "Get Started" }, void 0, !1, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("main", { className: "ad-booking-card mk-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "ad-badge", children: "Media Kit" }, void 0, !1, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-stats-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "mk-section-title", id: "mk-stats-title", children: "By the numbers" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mk-stats", children: STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mk-stat", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "mk-stat-value", children: stat.value }, void 0, !1, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 128,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "mk-stat-label", children: stat.label }, void 0, !1, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 129,
            columnNumber: 17
          }, this)
        ] }, stat.label, !0, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 127,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-audience-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "mk-section-title", id: "mk-audience-title", children: "Who reads us" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mk-chips", children: AUDIENCE.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "mk-chip", children: group }, group, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 141,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-formats-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "mk-section-title", id: "mk-formats-title", children: "Advertise with us" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 149,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mk-formats", children: FORMATS.map((format) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("article", { className: "mk-format", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h3", { children: format.title }, void 0, !1, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 155,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: format.body }, void 0, !1, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 156,
            columnNumber: 17
          }, this)
        ] }, format.title, !0, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 154,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 152,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-pricing-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "mk-section-title", id: "mk-pricing-title", children: "Pricing" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mk-tiers", children: MEDIA_KIT.placements.map((placement) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("article", { className: "mk-tier", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h3", { className: "mk-tier-name", children: placement.name }, void 0, !1, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 169,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "mk-tier-note", children: placement.note }, void 0, !1, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 170,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mk-tier-cost", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "mk-tier-price", children: placement.price }, void 0, !1, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 172,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "mk-tier-unit", children: MEDIA_KIT.priceUnit }, void 0, !1, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 173,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 171,
            columnNumber: 17
          }, this)
        ] }, placement.name, !0, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 166,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 162,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-steps-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "mk-section-title", id: "mk-steps-title", children: "How it works" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 181,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "ad-success-steps", children: STEPS4.map((step, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "step-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "step-num", children: i + 1 }, void 0, !1, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 187,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "step-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("strong", { children: step.title }, void 0, !1, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 189,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: step.body }, void 0, !1, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 190,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 188,
            columnNumber: 17
          }, this)
        ] }, step.title, !0, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 186,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 184,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("footer", { className: `feed-footer${reached ? " is-covered" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "feed-footer-links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react29.Link, { to: "/about", children: "about" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react29.Link, { to: "/archive", children: "archive" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 203,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react29.Link, { to: "/submit-post", children: "submit post" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 204,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react29.Link, { to: "/policies/privacy", children: "privacy" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 205,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react29.Link, { to: "/policies/terms", children: "terms" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 206,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react29.Link, { to: "/book", children: "advertise" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 207,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react29.Link, { to: "/manager", children: "ads manager" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 208,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "feed-copyright", children: "thepoast \xA9 2026" }, void 0, !1, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 200,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      "aside",
      {
        className: `feed-banner${reached ? " is-visible" : ""}`,
        "aria-label": "Get Started",
        "aria-hidden": !reached,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "feed-banner-inner", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "feed-banner-title", children: "Better business performance, fueled by AI" }, void 0, !1, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 219,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "button",
            {
              type: "button",
              className: "feed-banner-btn",
              tabIndex: reached ? 0 : -1,
              onClick: () => navigate(PARTNER_PATH),
              children: "Get Started"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 223,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 218,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 213,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/media-kit.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
}

// app/routes/subscribe.tsx
var subscribe_exports = {};
__export(subscribe_exports, {
  default: () => Subscribe,
  meta: () => meta12
});
var import_react31 = require("@remix-run/react"), import_react32 = require("react");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), meta12 = () => ({
  title: "Subscribe / thepoast",
  description: "Get thepoast sent to your inbox every day."
});
function Subscribe() {
  let emailRef = (0, import_react32.useRef)(null);
  return (0, import_react32.useEffect)(() => {
    var _a2;
    (_a2 = emailRef.current) == null || _a2.focus({ preventScroll: !0 });
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "subscribe-page feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(FeedTopbar, { showSubscribe: !1 }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("main", { className: "subscribe-card-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "subscribe-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "subscribe-title", children: "Get The Poast" }, void 0, !1, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "subscribe-sub", children: "Get the top stories from across the business world delivered to your inbox daily." }, void 0, !1, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "form",
        {
          method: "post",
          action: "https://app.thepoast.com/subscription/form",
          className: "subscribe-form",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "subscribe-input-bar", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                "input",
                {
                  className: "subscribe-input email-input",
                  type: "email",
                  name: "email",
                  required: !0,
                  ref: emailRef,
                  placeholder: "Email Address *"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/subscribe.tsx",
                  lineNumber: 40,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("button", { className: "subscribe-submit", type: "submit", children: "Subscribe" }, void 0, !1, {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 48,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 39,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "subscribe-altcha", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 54,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 53,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              "input",
              {
                id: "6d48f",
                type: "hidden",
                name: "l",
                value: "6d48fffe-7d37-4c14-b317-3e4cda33a647"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 57,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 63,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "feed-legal", children: [
              "By submitting, you agree to our",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react31.Link, { to: "/policies/terms", children: "terms" }, void 0, !1, {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 67,
                columnNumber: 15
              }, this),
              " &",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react31.Link, { to: "/policies/privacy", children: "privacy" }, void 0, !1, {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 68,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 65,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 34,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react31.Link, { to: "/", className: "back-btn", children: "\u2190 Back to thepoast" }, void 0, !1, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(FeedFooter, {}, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/thank-you.tsx
var thank_you_exports = {};
__export(thank_you_exports, {
  default: () => ThankYou,
  meta: () => meta13
});
var import_react33 = require("@remix-run/react"), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), meta13 = () => ({
  title: "Request Received / thepoast",
  robots: "noindex"
});
function ThankYou() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "feed-page ad-booking-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("header", { className: "feed-topbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react33.Link, { className: "feed-mark", to: "/", "aria-label": "Back to thepoast homepage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: "/img/tp.png", alt: "thepoast", decoding: "async" }, void 0, !1, {
      fileName: "app/routes/thank-you.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/thank-you.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/thank-you.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("main", { className: "ad-booking-card ad-success-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "ad-success-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("polyline", { points: "20 6 9 17 4 12" }, void 0, !1, {
            fileName: "app/routes/thank-you.tsx",
            lineNumber: 28,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/thank-you.tsx",
          lineNumber: 20,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/thank-you.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "ad-booking-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { className: "ad-booking-title", children: "Request received" }, void 0, !1, {
          fileName: "app/routes/thank-you.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "ad-booking-sub", children: "Thanks for your interest in advertising with thepoast." }, void 0, !1, {
          fileName: "app/routes/thank-you.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/thank-you.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "ad-success-steps", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "step-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "step-num", children: "1" }, void 0, !1, {
            fileName: "app/routes/thank-you.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "step-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("strong", { children: "We review your request" }, void 0, !1, {
              fileName: "app/routes/thank-you.tsx",
              lineNumber: 43,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { children: "Our team looks at every inquiry within 24 hours." }, void 0, !1, {
              fileName: "app/routes/thank-you.tsx",
              lineNumber: 44,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/thank-you.tsx",
            lineNumber: 42,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/thank-you.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "step-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "step-num", children: "2" }, void 0, !1, {
            fileName: "app/routes/thank-you.tsx",
            lineNumber: 48,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "step-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("strong", { children: "We reach out by email" }, void 0, !1, {
              fileName: "app/routes/thank-you.tsx",
              lineNumber: 50,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { children: "Expect a note with availability, pricing, and next steps." }, void 0, !1, {
              fileName: "app/routes/thank-you.tsx",
              lineNumber: 51,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/thank-you.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/thank-you.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "step-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "step-num", children: "3" }, void 0, !1, {
            fileName: "app/routes/thank-you.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "step-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("strong", { children: "Your campaign goes live" }, void 0, !1, {
              fileName: "app/routes/thank-you.tsx",
              lineNumber: 57,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { children: "Once creative is approved, we schedule your start date." }, void 0, !1, {
              fileName: "app/routes/thank-you.tsx",
              lineNumber: 58,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/thank-you.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/thank-you.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/thank-you.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react33.Link, { to: "/", className: "back-btn ad-success-btn", children: "\u2190 Back to thepoast" }, void 0, !1, {
        fileName: "app/routes/thank-you.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/thank-you.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/thank-you.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/manager.tsx
var manager_exports = {};
__export(manager_exports, {
  default: () => Portal,
  meta: () => meta14
});
var import_react34 = require("@remix-run/react");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), meta14 = () => ({
  title: "thepoast Ads Manager",
  description: "Book a new campaign, share an existing one, or explore our media kit, all in one place."
}), Glyph = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false",
    children
  },
  void 0,
  !1,
  {
    fileName: "app/routes/manager.tsx",
    lineNumber: 23,
    columnNumber: 3
  },
  this
), BoltIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Glyph, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z" }, void 0, !1, {
  fileName: "app/routes/manager.tsx",
  lineNumber: 39,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/routes/manager.tsx",
  lineNumber: 38,
  columnNumber: 3
}, this), MegaphoneIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Glyph, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M3 10v4h3l7 4V6L6 10H3Z" }, void 0, !1, {
    fileName: "app/routes/manager.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M16.5 8.5a5 5 0 0 1 0 7" }, void 0, !1, {
    fileName: "app/routes/manager.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M19 6a8.5 8.5 0 0 1 0 12" }, void 0, !1, {
    fileName: "app/routes/manager.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/manager.tsx",
  lineNumber: 44,
  columnNumber: 3
}, this), LinkIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Glyph, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" }, void 0, !1, {
    fileName: "app/routes/manager.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" }, void 0, !1, {
    fileName: "app/routes/manager.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/manager.tsx",
  lineNumber: 52,
  columnNumber: 3
}, this), ChartIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Glyph, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M5 20v-7" }, void 0, !1, {
    fileName: "app/routes/manager.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M12 20V5" }, void 0, !1, {
    fileName: "app/routes/manager.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M19 20V9" }, void 0, !1, {
    fileName: "app/routes/manager.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/manager.tsx",
  lineNumber: 59,
  columnNumber: 3
}, this), ArchiveIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Glyph, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("rect", { x: "3", y: "4", width: "18", height: "4", rx: "1" }, void 0, !1, {
    fileName: "app/routes/manager.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8" }, void 0, !1, {
    fileName: "app/routes/manager.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M10 12h4" }, void 0, !1, {
    fileName: "app/routes/manager.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/manager.tsx",
  lineNumber: 67,
  columnNumber: 3
}, this), FEATURED = {
  href: "/foryou",
  title: "Explore the opportunity",
  description: "For advertisers who want to see how it looks",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(BoltIcon, {}, void 0, !1, {
    fileName: "app/routes/manager.tsx",
    lineNumber: 94,
    columnNumber: 9
  }, this),
  from: "#ffb340",
  to: "#ff8a00",
  cta: "See preview"
}, APPS = [
  {
    href: "/book",
    title: "Book an ad",
    description: "For advertisers who want a quick placement with a defined price",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(ChartIcon, {}, void 0, !1, {
      fileName: "app/routes/manager.tsx",
      lineNumber: 106,
      columnNumber: 11
    }, this),
    from: "#5e9bff",
    to: "#7f13a9"
  },
  {
    href: "/link",
    title: "Use an existing ad",
    description: "For advertisers who already have creative running on social",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(LinkIcon, {}, void 0, !1, {
      fileName: "app/routes/manager.tsx",
      lineNumber: 114,
      columnNumber: 11
    }, this),
    from: "#46d37a",
    to: "#c8b41a"
  },
  {
    href: "/partner",
    title: "Create a campaign",
    description: "For advertisers who want to choose their schedule, goal, and budget",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(MegaphoneIcon, {}, void 0, !1, {
      fileName: "app/routes/manager.tsx",
      lineNumber: 122,
      columnNumber: 11
    }, this),
    from: "#d9283d",
    to: "#fc640b"
  },
  {
    href: "/media-kit",
    title: "See our media kit",
    description: "For advertisers who want to learn more about our audience",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(ArchiveIcon, {}, void 0, !1, {
      fileName: "app/routes/manager.tsx",
      lineNumber: 130,
      columnNumber: 11
    }, this),
    from: "#610bc9",
    to: "#e84545"
  }
], tint = (from, to, index) => ({ "--from": from, "--to": to, "--i": index });
function Portal() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "feed-page ad-booking-page pt-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      FeedTopbar,
      {
        showSubscribe: !1,
        onSubscribe: (e) => {
          e.preventDefault(), window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/manager.tsx",
        lineNumber: 146,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("main", { className: "ad-booking-card pt-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        import_react34.Link,
        {
          to: FEATURED.href,
          prefetch: "intent",
          className: "pt-featured",
          style: tint(FEATURED.from, FEATURED.to, 0),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "pt-icon pt-icon-lg", "aria-hidden": "true", children: FEATURED.icon }, void 0, !1, {
              fileName: "app/routes/manager.tsx",
              lineNumber: 164,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "pt-featured-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "pt-eyebrow", children: FEATURED.note }, void 0, !1, {
                fileName: "app/routes/manager.tsx",
                lineNumber: 168,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "pt-featured-title", children: FEATURED.title }, void 0, !1, {
                fileName: "app/routes/manager.tsx",
                lineNumber: 169,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "pt-desc", children: FEATURED.description }, void 0, !1, {
                fileName: "app/routes/manager.tsx",
                lineNumber: 170,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/manager.tsx",
              lineNumber: 167,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "pt-featured-cta", children: FEATURED.cta }, void 0, !1, {
              fileName: "app/routes/manager.tsx",
              lineNumber: 172,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/manager.tsx",
          lineNumber: 158,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("nav", { className: "pt-grid", "aria-label": "Portal", children: APPS.map((app, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        import_react34.Link,
        {
          to: app.href,
          prefetch: "intent",
          className: "pt-tile",
          style: tint(app.from, app.to, i + 1),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "pt-tile-top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "pt-icon", "aria-hidden": "true", children: app.icon }, void 0, !1, {
              fileName: "app/routes/manager.tsx",
              lineNumber: 187,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/manager.tsx",
              lineNumber: 186,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "pt-tile-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "pt-tile-title", children: app.title }, void 0, !1, {
                fileName: "app/routes/manager.tsx",
                lineNumber: 192,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "pt-desc", children: app.description }, void 0, !1, {
                fileName: "app/routes/manager.tsx",
                lineNumber: 193,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/manager.tsx",
              lineNumber: 191,
              columnNumber: 15
            }, this)
          ]
        },
        app.href,
        !0,
        {
          fileName: "app/routes/manager.tsx",
          lineNumber: 179,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/manager.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react34.Link, { to: "/", className: "back-btn", children: "\u2190 Back to thepoast" }, void 0, !1, {
        fileName: "app/routes/manager.tsx",
        lineNumber: 199,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/manager.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(FeedFooter, {}, void 0, !1, {
      fileName: "app/routes/manager.tsx",
      lineNumber: 204,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/manager.tsx",
    lineNumber: 145,
    columnNumber: 5
  }, this);
}

// app/routes/partner.tsx
var partner_exports = {};
__export(partner_exports, {
  action: () => action5,
  default: () => Partner,
  headers: () => headers8,
  meta: () => meta15
});
var import_react35 = require("react"), import_node8 = require("@remix-run/node"), import_react36 = require("@remix-run/react");
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), meta15 = () => ({
  title: "New campaign / thepoast",
  description: "Create an ad campaign for your company or brand here."
}), THANK_YOU_PATH = "/thank-you";
var headers8 = () => ({
  "Cache-Control": "public, max-age=60, s-maxage=120, stale-while-revalidate=600"
}), OBJECTIVES = [
  {
    value: "reach",
    label: "Reach",
    icon: "megaphone",
    description: "Show your ads to the maximum number of people.",
    howItWorks: "Your ads will be optimized to reach as many unique people as possible within your budget.",
    goodFor: ["Brand awareness", "Impressions"]
  },
  {
    value: "engagements",
    label: "Engagements",
    icon: "heart",
    description: "Get people to engage with your post.",
    howItWorks: "Your ads will be shown to people most likely to like, reply to, or repost your content.",
    goodFor: ["Link clicks", "Product page views"]
  },
  {
    value: "website_traffic",
    label: "Website traffic",
    icon: "globe",
    description: "Send people to your website or landing page.",
    howItWorks: "We'll show your ads to people most likely to click through to your site and take action.",
    goodFor: ["Link clicks", "Landing page views"]
  },
  {
    value: "video_views",
    label: "Video views",
    icon: "video",
    description: "Promote your videos to people most likely to watch them.",
    howItWorks: "Your video will be served to users who are most likely to watch it, maximizing completed views.",
    goodFor: ["Video views", "Brand awareness"]
  },
  {
    value: "app_installs",
    label: "App installs",
    icon: "smartphone",
    description: "Drive downloads to your mobile app.",
    howItWorks: "Ads link directly to your app store listing and target people most likely to download.",
    goodFor: ["App installs", "App clicks"]
  },
  {
    value: "sales",
    label: "Sales",
    icon: "shopping_bag",
    description: "Drive purchases, sign-ups, or other conversions on your website.",
    howItWorks: "We'll optimize delivery toward people most likely to complete a purchase or other conversion event on your site.",
    goodFor: ["Conversions", "Website purchases"]
  }
], ObjectiveIconSvg = (0, import_react35.memo)(({ name }) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: {
  heart: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, void 0, !1, {
    fileName: "app/routes/partner.tsx",
    lineNumber: 119,
    columnNumber: 7
  }, this),
  globe: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("circle", { cx: "12", cy: "12", r: "10" }, void 0, !1, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 123,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "2", y1: "12", x2: "22", y2: "12" }, void 0, !1, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 124,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" }, void 0, !1, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/partner.tsx",
    lineNumber: 122,
    columnNumber: 7
  }, this),
  video: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("rect", { x: "2", y: "4", width: "20", height: "16", rx: "3", ry: "3" }, void 0, !1, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 130,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("path", { d: "M10 9l5 3-5 3V9z" }, void 0, !1, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/partner.tsx",
    lineNumber: 129,
    columnNumber: 7
  }, this),
  smartphone: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("rect", { x: "5", y: "2", width: "14", height: "20", rx: "3", ry: "3" }, void 0, !1, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 136,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "12", y1: "18", x2: "12.01", y2: "18", strokeWidth: "3" }, void 0, !1, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/partner.tsx",
    lineNumber: 135,
    columnNumber: 7
  }, this),
  shopping_bag: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("path", { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }, void 0, !1, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 142,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("line", { x1: "3", y1: "6", x2: "21", y2: "6" }, void 0, !1, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("path", { d: "M16 10a4 4 0 0 1-8 0" }, void 0, !1, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 144,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/partner.tsx",
    lineNumber: 141,
    columnNumber: 7
  }, this),
  megaphone: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("path", { d: "M3 11l18-5v12L3 13v-2z" }, void 0, !1, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 149,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6" }, void 0, !1, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 150,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/partner.tsx",
    lineNumber: 148,
    columnNumber: 7
  }, this)
}[name] }, void 0, !1, {
  fileName: "app/routes/partner.tsx",
  lineNumber: 156,
  columnNumber: 5
}, this));
ObjectiveIconSvg.displayName = "ObjectiveIconSvg";
var BUDGET_OPTIONS = [
  { value: "$1,500 - $3,000", label: "$1,500 \u2013 $3,000" },
  { value: "$3,000 - $7,500", label: "$3,000 \u2013 $7,500" },
  { value: "$7,500 - $15,000", label: "$7,500 \u2013 $15,000" },
  { value: "$15,000+", label: "$15,000+" }
], str5 = (value, max) => typeof value == "string" ? value.trim().slice(0, max) : "", EMAIL_RE2 = /^[^\s@'"\\]+@[^\s@'"\\]+\.[^\s@'"\\]+$/;
function normalizeWebsite(raw) {
  if (!raw)
    return null;
  let withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    let url = new URL(withProtocol);
    return url.hostname.includes(".") ? url.toString() : null;
  } catch {
    return null;
  }
}
function buildSubscriberName(contactName, company) {
  return `${contactName.split(/\s+/)[0] || contactName} ${company}`.trim();
}
function listmonkConfig3() {
  let baseUrl = (process.env.LISTMONK_URL || "https://app.thepoast.com").replace(/\/+$/, ""), apiUser = process.env.LISTMONK_API_USER || process.env.LISTMONK_USERNAME, apiToken = process.env.LISTMONK_API_TOKEN || process.env.LISTMONK_TOKEN, listId = Number(process.env.LISTMONK_ADVERTISER_LIST_ID || 31);
  return { baseUrl, apiUser, apiToken, listId };
}
async function listmonk4(path, init = {}) {
  let { baseUrl, apiUser, apiToken } = listmonkConfig3();
  return fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${apiUser}:${apiToken}`,
      ...init.headers || {}
    }
  });
}
async function saveAdvertiserLead(lead) {
  var _a2, _b2;
  let { listId } = listmonkConfig3(), now = (/* @__PURE__ */ new Date()).toISOString(), bookingRequest = {
    submitted_at: now,
    company: lead.company,
    website: lead.website,
    campaign_name: lead.campaignName,
    objective: lead.objective,
    start_date: lead.targetDate,
    end_date: lead.endDate,
    budget: lead.budget,
    notes: lead.notes,
    previous_campaign: lead.previousCampaign
  }, attribs = {
    subscriber_type: "advertiser",
    source: "advertise-form",
    company: lead.company,
    website: lead.website,
    contact_name: lead.contactName,
    campaign_name: lead.campaignName,
    objective: lead.objective,
    start_date: lead.targetDate,
    end_date: lead.endDate,
    budget: lead.budget,
    notes: lead.notes,
    ...lead.previousCampaign ? { previous_campaign: lead.previousCampaign } : {},
    last_submitted_at: now,
    ad_requests: [bookingRequest]
  }, name = buildSubscriberName(lead.contactName, lead.company);
  if ((await listmonk4("/api/subscribers", {
    method: "POST",
    body: JSON.stringify({
      email: lead.email,
      name,
      status: "enabled",
      lists: [listId],
      preconfirm_subscriptions: !0,
      attribs
    })
  })).ok)
    return;
  let query = `subscribers.email = '${lead.email.replace(/'/g, "''")}'`, found = await (await listmonk4(`/api/subscribers?per_page=1&query=${encodeURIComponent(query)}`)).json(), existing = (_b2 = (_a2 = found == null ? void 0 : found.data) == null ? void 0 : _a2.results) == null ? void 0 : _b2[0];
  if (!existing)
    throw new Error("Listmonk lookup failed");
  let existingAttribs = existing.attribs ?? {}, history = Array.isArray(existingAttribs.ad_requests) ? existingAttribs.ad_requests : [], listIds = Array.from(/* @__PURE__ */ new Set([...(existing.lists ?? []).map((l) => l.id), listId]));
  await listmonk4(`/api/subscribers/${existing.id}`, {
    method: "PUT",
    body: JSON.stringify({
      email: existing.email,
      name,
      status: existing.status,
      lists: listIds,
      preconfirm_subscriptions: !0,
      attribs: {
        ...existingAttribs,
        ...attribs,
        ad_requests: [...history, bookingRequest].slice(-20)
      }
    })
  });
}
async function action5({ request }) {
  let formData = await request.formData();
  if (str5(formData.get("nonce"), 200))
    return (0, import_node8.redirect)(THANK_YOU_PATH);
  let company = str5(formData.get("company"), 200), websiteRaw = str5(formData.get("website"), 300), contactName = str5(formData.get("name"), 200), email = str5(formData.get("email"), 254).toLowerCase(), campaignNameRaw = str5(formData.get("campaignName"), 120), objectiveValue = str5(formData.get("objective"), 30), targetDate = str5(formData.get("targetDate"), 10), endDate = str5(formData.get("endDate"), 10), budget = str5(formData.get("budget"), 50), notes = str5(formData.get("notes"), 5e3), sourceRaw = str5(formData.get("source"), 300), altcha = str5(formData.get("altcha"), 2e4), fieldErrors = {};
  company || (fieldErrors.company = "Please enter your company name."), contactName || (fieldErrors.name = "Please enter your name."), EMAIL_RE2.test(email) || (fieldErrors.email = "Please enter a valid work email.");
  let website = normalizeWebsite(websiteRaw);
  website || (fieldErrors.website = "Please enter a valid website URL.");
  let previousCampaign = "";
  if (sourceRaw) {
    let normalized = normalizeWebsite(sourceRaw);
    normalized ? previousCampaign = normalized : fieldErrors.source = "Please enter a valid URL.";
  }
  targetDate || (fieldErrors.targetDate = "Please select a campaign start date.");
  let objective = OBJECTIVES.find((o) => o.value === objectiveValue);
  if (objective || (fieldErrors.objective = "Please choose an objective."), process.env.ALTCHA_REQUIRED !== "false" && !altcha && (fieldErrors.altcha = "Please complete the security verification below."), Object.keys(fieldErrors).length > 0)
    return (0, import_node8.json)({ error: "Please review highlighted fields.", fieldErrors }, { status: 400 });
  let campaignName = campaignNameRaw || `${company} \u2014 ${targetDate}`;
  try {
    await saveAdvertiserLead({
      company,
      website,
      contactName,
      email,
      campaignName,
      objective: objective.label,
      targetDate,
      endDate,
      budget,
      notes,
      previousCampaign
    });
  } catch (err) {
    return console.error("[book] failed:", err), (0, import_node8.json)({ error: "Unable to process booking right now." }, { status: 500 });
  }
  return (0, import_node8.redirect)(THANK_YOU_PATH);
}
function Partner() {
  let actionData = (0, import_react36.useActionData)(), errors = (actionData == null ? void 0 : actionData.fieldErrors) ?? {}, submitting = (0, import_react36.useNavigation)().state === "submitting", [objectiveValue, setObjectiveValue] = (0, import_react35.useState)(OBJECTIVES[0].value), selectedObjective = OBJECTIVES.find((o) => o.value === objectiveValue) ?? OBJECTIVES[0], targetDateRef = (0, import_react35.useRef)(null), endDateRef = (0, import_react35.useRef)(null), [startDate, setStartDate] = (0, import_react35.useState)(""), [minDate, setMinDate] = (0, import_react35.useState)(void 0), [campaignName, setCampaignName] = (0, import_react35.useState)("");
  (0, import_react35.useEffect)(() => {
    let now = /* @__PURE__ */ new Date(), date = now.toLocaleDateString("en-US", { month: "short", day: "numeric" }), time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
    setCampaignName((current) => current || `Campaign \u2014 ${date} \u2014 ${time}`);
  }, []), (0, import_react35.useEffect)(() => {
    let d = /* @__PURE__ */ new Date(), pad = (n) => String(n).padStart(2, "0");
    setMinDate(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
  }, []);
  let openPicker = (ref) => {
    var _a2;
    if (ref.current && "showPicker" in ref.current)
      try {
        ref.current.showPicker();
      } catch {
        ref.current.focus();
      }
    else
      (_a2 = ref.current) == null || _a2.focus();
  }, fieldError = (name) => errors[name] ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "ad-field-error", role: "alert", children: errors[name] }, void 0, !1, {
    fileName: "app/routes/partner.tsx",
    lineNumber: 394,
    columnNumber: 20
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "feed-page ad-booking-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      FeedTopbar,
      {
        showSubscribe: !1,
        onSubscribe: (e) => {
          e.preventDefault(), window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/partner.tsx",
        lineNumber: 398,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("main", { className: "ad-booking-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "ad-badge", children: "Partner with us" }, void 0, !1, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 407,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 406,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react36.Form, { method: "post", className: "ad-booking-form", children: [
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "ad-form-error", role: "alert", children: actionData.error }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 412,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "ad-form-section", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "form-group-row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { htmlFor: "company", children: "Company" }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 418,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("input", { type: "text", id: "company", name: "company", required: !0, placeholder: "Company *" }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 419,
                columnNumber: 17
              }, this),
              fieldError("company")
            ] }, void 0, !0, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 417,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { htmlFor: "website", children: "Website" }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 423,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("input", { type: "text", id: "website", name: "website", required: !0, placeholder: "Website *" }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 424,
                columnNumber: 17
              }, this),
              fieldError("website")
            ] }, void 0, !0, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 422,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 416,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "form-group-row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { htmlFor: "name", children: "Name" }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 431,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("input", { type: "text", id: "name", name: "name", required: !0, placeholder: "Name *" }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 432,
                columnNumber: 17
              }, this),
              fieldError("name")
            ] }, void 0, !0, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 430,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { htmlFor: "email", children: "Email" }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 436,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("input", { type: "email", id: "email", name: "email", required: !0, placeholder: "Business Email *" }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 437,
                columnNumber: 17
              }, this),
              fieldError("email")
            ] }, void 0, !0, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 435,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 429,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 415,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "ad-form-section ad-form-setup", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "form-field ad-name-card", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h2", { className: "ad-section-heading", children: "Campaign Name" }, void 0, !1, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 445,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
              "input",
              {
                type: "text",
                id: "campaignName",
                name: "campaignName",
                value: campaignName,
                onChange: (e) => setCampaignName(e.target.value)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/partner.tsx",
                lineNumber: 446,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 444,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("fieldset", { className: "form-field ad-objective-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("legend", { children: "Ad Objective" }, void 0, !1, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 456,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "ad-objectives", children: OBJECTIVES.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { className: "ad-objective", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                "input",
                {
                  type: "radio",
                  name: "objective",
                  value: option.value,
                  checked: objectiveValue === option.value,
                  onChange: () => setObjectiveValue(option.value)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 460,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "ad-objective-card", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "ad-objective-head", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "ad-objective-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ObjectiveIconSvg, { name: option.icon }, void 0, !1, {
                    fileName: "app/routes/partner.tsx",
                    lineNumber: 469,
                    columnNumber: 61
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/partner.tsx",
                    lineNumber: 469,
                    columnNumber: 25
                  }, this),
                  option.label
                ] }, void 0, !0, {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 468,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "ad-objective-desc", children: option.description }, void 0, !1, {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 472,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 467,
                columnNumber: 21
              }, this)
            ] }, option.value, !0, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 459,
              columnNumber: 19
            }, this)) }, void 0, !1, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 457,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "ad-objective-detail", "aria-live": "polite", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "ad-detail-inner", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "ad-detail-head", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "ad-detail-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ObjectiveIconSvg, { name: selectedObjective.icon }, void 0, !1, {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 481,
                  columnNumber: 54
                }, this) }, void 0, !1, {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 481,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "ad-detail-name", children: selectedObjective.label }, void 0, !1, {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 482,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 480,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "ad-detail-lead", children: selectedObjective.description }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 484,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 479,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 478,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 455,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 443,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "ad-form-section", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h2", { className: "ad-section-heading", children: "Schedule & Budget" }, void 0, !1, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 491,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "form-group-row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { htmlFor: "targetDate", children: "Target Start Date" }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 494,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "ad-date-input-wrapper", onClick: () => openPicker(targetDateRef), children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("input", { ref: targetDateRef, type: "date", id: "targetDate", name: "targetDate", required: !0, min: minDate, onChange: (e) => setStartDate(e.target.value) }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 496,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 495,
                columnNumber: 17
              }, this),
              fieldError("targetDate")
            ] }, void 0, !0, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 493,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { htmlFor: "endDate", children: "End Date (Optional)" }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 501,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "ad-date-input-wrapper", onClick: () => openPicker(endDateRef), children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("input", { ref: endDateRef, type: "date", id: "endDate", name: "endDate", min: startDate || minDate }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 503,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 502,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 500,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 492,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("fieldset", { className: "form-field ad-budget", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("legend", { children: "Estimated Budget" }, void 0, !1, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 509,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "ad-chips", children: BUDGET_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { className: "ad-chip", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("input", { type: "radio", name: "budget", value: option.value, defaultChecked: option.value === BUDGET_OPTIONS[0].value }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 513,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { children: option.label }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 514,
                columnNumber: 21
              }, this)
            ] }, option.value, !0, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 512,
              columnNumber: 19
            }, this)) }, void 0, !1, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 510,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 508,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 490,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("input", { type: "text", name: "nonce", className: "hp-field", tabIndex: -1, autoComplete: "off" }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 521,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "submit", className: "ad-submit-btn", disabled: submitting, children: submitting ? "Submitting Request..." : "Submit New Campaign" }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 523,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "ad-form-section ad-form-submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "subscribe-altcha", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 529,
            columnNumber: 15
          }, this),
          fieldError("altcha")
        ] }, void 0, !0, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 528,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 527,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 410,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "feed-legal", children: [
        "By submitting, you agree to our",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react36.Link, { to: "/policies/terms", children: "terms" }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 536,
          columnNumber: 15
        }, this),
        " &",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react36.Link, { to: "/policies/privacy", children: "privacy" }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 537,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 534,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react36.Link, { to: "/manager", className: "back-btn", children: "\u2190 Back to Ads Manager" }, void 0, !1, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 540,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 405,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(FeedFooter, {}, void 0, !1, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 545,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/partner.tsx",
    lineNumber: 397,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  meta: () => meta16
});
var import_react37 = require("react"), import_react38 = require("@remix-run/react");
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), meta16 = () => ({
  title: "About / thepoast",
  description: "Learn more about thepoast."
}), AUDIENCE2 = [
  "Founders",
  "Executives",
  "Builders"
], PRINCIPLES = [
  {
    title: "Read it for free",
    body: "Read it every day at thepoast.com"
  },
  {
    title: "Subscribe for free",
    body: "Get it in your inbox daily"
  },
  {
    title: "Submit a post",
    body: "Wanna submit a post? Just send it our way"
  }
], BANNER_TRIGGER10 = 0.75;
function useReachedEndOfPage5() {
  let endRef = (0, import_react37.useRef)(null), [reached, setReached] = (0, import_react37.useState)(!1);
  return (0, import_react37.useEffect)(() => {
    let element = endRef.current;
    if (!element)
      return;
    let frame = 0, check = () => {
      frame = 0;
      let top = element.getBoundingClientRect().top;
      setReached(
        window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER10
      );
    }, schedule3 = () => {
      frame || (frame = requestAnimationFrame(check));
    };
    window.addEventListener("scroll", schedule3, {
      passive: !0
    }), window.addEventListener("resize", schedule3);
    let resizeObserver;
    return typeof ResizeObserver < "u" && element.parentElement && (resizeObserver = new ResizeObserver(schedule3), resizeObserver.observe(element.parentElement)), check(), () => {
      window.removeEventListener("scroll", schedule3), window.removeEventListener("resize", schedule3), resizeObserver == null || resizeObserver.disconnect(), frame && cancelAnimationFrame(frame);
    };
  }, []), {
    endRef,
    reached
  };
}
function About() {
  let { endRef, reached } = useReachedEndOfPage5(), [forced, setForced] = (0, import_react37.useState)(!1), [expandBanner, setExpandBanner] = (0, import_react37.useState)(!1), footerRef = (0, import_react37.useRef)(null), previousReached = (0, import_react37.useRef)(!1), bannerVisible = reached || forced;
  return (0, import_react37.useEffect)(() => {
    previousReached.current && !reached && (setForced(!1), setExpandBanner(!1)), previousReached.current = reached;
  }, [reached]), /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "feed-page ad-booking-page about-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      FeedTopbar,
      {
        hidden: reached,
        onSubscribe: (event) => {
          var _a2;
          event.preventDefault(), setForced(!0), setExpandBanner(!0), (_a2 = footerRef.current) == null || _a2.scrollIntoView({
            behavior: "smooth",
            block: "end"
          });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/about.tsx",
        lineNumber: 140,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("main", { className: "ad-booking-card about-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "ad-badge", children: "About Us" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "section",
        {
          className: "about-section",
          "aria-labelledby": "about-what",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "h2",
              {
                className: "about-section-title",
                id: "about-what",
                children: "What's thepoast?"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/about.tsx",
                lineNumber: 156,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "about-text", children: "We're a daily feed of snarky comments and posts from across the business world." }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 163,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 152,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "section",
        {
          className: "about-section",
          "aria-labelledby": "about-who",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "h2",
              {
                className: "about-section-title",
                id: "about-who",
                children: "Who reads it?"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/about.tsx",
                lineNumber: 173,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "about-text", children: "We're frequently read by people who like to get things done." }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 180,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "about-chips", children: AUDIENCE2.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "span",
              {
                className: "about-chip",
                children: group
              },
              group,
              !1,
              {
                fileName: "app/routes/about.tsx",
                lineNumber: 187,
                columnNumber: 15
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 185,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 169,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "section",
        {
          className: "about-section",
          "aria-labelledby": "about-expect",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "h2",
              {
                className: "about-section-title",
                id: "about-expect",
                children: "What to expect"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/about.tsx",
                lineNumber: 201,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "about-grid", children: PRINCIPLES.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              "article",
              {
                className: "about-item",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h3", { children: item.title }, void 0, !1, {
                    fileName: "app/routes/about.tsx",
                    lineNumber: 214,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: item.body }, void 0, !1, {
                    fileName: "app/routes/about.tsx",
                    lineNumber: 215,
                    columnNumber: 17
                  }, this)
                ]
              },
              item.title,
              !0,
              {
                fileName: "app/routes/about.tsx",
                lineNumber: 210,
                columnNumber: 15
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 208,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 197,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "about-cta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          import_react38.Link,
          {
            to: "/",
            className: "about-btn",
            children: "Back to thepoast"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/about.tsx",
            lineNumber: 222,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          import_react38.Link,
          {
            to: "/book",
            className: "back-btn",
            children: "Advertise with us"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/about.tsx",
            lineNumber: 229,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 221,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "div",
        {
          ref: endRef,
          className: "feed-end-marker",
          "aria-hidden": "true"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 237,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { ref: footerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(FeedFooter, { covered: bannerVisible }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 245,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 244,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      FeedSubscribeBanner,
      {
        visible: bannerVisible,
        forceExpanded: expandBanner
      },
      void 0,
      !1,
      {
        fileName: "app/routes/about.tsx",
        lineNumber: 248,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}

// app/routes/feeds.tsx
var feeds_exports = {};
__export(feeds_exports, {
  default: () => Feeds,
  headers: () => headers9,
  links: () => links10,
  loader: () => loader12,
  meta: () => meta17,
  shouldRevalidate: () => shouldRevalidate2
});
var import_react39 = require("react"), import_react40 = require("@remix-run/react"), import_node9 = require("@remix-run/node");
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), meta17 = () => ({
  title: "Past feeds / thepoast",
  description: "See every feed we've ever posted."
}), links10 = () => [
  {
    rel: "preconnect",
    href: "https://img.thepoast.com"
  },
  {
    rel: "dns-prefetch",
    href: "https://img.thepoast.com"
  }
], headers9 = ({
  loaderHeaders
}) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? "no-store"
});
function shouldRevalidate2() {
  return !1;
}
var FEED_LIMIT3 = 30, WORK_TIMEZONE = "America/Toronto", BANNER_TRIGGER11 = 0.75;
function formatDateLabel(rawDate) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: WORK_TIMEZONE
    }).format(new Date(rawDate));
  } catch {
    return "";
  }
}
async function loader12() {
  let campaigns = await listFinishedCampaigns(), feeds = getLatestCampaignPerDay(campaigns, FEED_LIMIT3).map((campaign) => {
    let id = String(campaign.id), date = getCampaignDate(campaign) || (/* @__PURE__ */ new Date()).toISOString();
    return {
      id,
      subject: campaign.subject || "thepoast",
      date,
      dateLabel: formatDateLabel(date)
    };
  });
  feeds.length > 0 && warmIssues(feeds.map((feed) => feed.id));
  let degraded = campaigns.length === 0;
  return (0, import_node9.json)(
    { feeds, degraded },
    {
      headers: {
        "Cache-Control": degraded ? "no-store" : "public, max-age=30, s-maxage=60, stale-while-revalidate=3600"
      }
    }
  );
}
var MAX_CONCURRENT2 = 2, active2 = 0, waiting2 = [];
function schedule2(task, priority = !1) {
  return new Promise((resolve, reject) => {
    let run = () => {
      active2++, task().then(resolve, reject).finally(() => {
        var _a2;
        active2--, (_a2 = waiting2.shift()) == null || _a2();
      });
    };
    priority || active2 < MAX_CONCURRENT2 ? run() : waiting2.push(run);
  });
}
var sleep3 = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function fetchIssue(id, signal) {
  let url = `/feeds/full/${encodeURIComponent(id)}`, lastError;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (signal.aborted)
      throw new DOMException("Aborted", "AbortError");
    try {
      let response = await fetch(url, {
        signal,
        headers: { Accept: "text/html" }
      });
      if (response.status === 404)
        return null;
      if (!response.ok)
        throw new Error(`Issue request failed: ${response.status}`);
      let text = await response.text();
      if (!text)
        throw new Error("Empty issue");
      return text;
    } catch (error) {
      if (signal.aborted)
        throw error;
      lastError = error, await sleep3(300 * (attempt + 1));
    }
  }
  throw lastError;
}
function useReachedEndOfPage6() {
  let endRef = (0, import_react39.useRef)(null), [reached, setReached] = (0, import_react39.useState)(!1);
  return (0, import_react39.useEffect)(() => {
    let element = endRef.current;
    if (!element)
      return;
    let frame = 0, check = () => {
      frame = 0;
      let top = element.getBoundingClientRect().top;
      setReached(window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER11);
    }, scheduleCheck = () => {
      frame || (frame = requestAnimationFrame(check));
    };
    window.addEventListener("scroll", scheduleCheck, { passive: !0 }), window.addEventListener("resize", scheduleCheck);
    let resizeObserver;
    return typeof ResizeObserver < "u" && element.parentElement && (resizeObserver = new ResizeObserver(scheduleCheck), resizeObserver.observe(element.parentElement)), check(), () => {
      window.removeEventListener("scroll", scheduleCheck), window.removeEventListener("resize", scheduleCheck), resizeObserver == null || resizeObserver.disconnect(), frame && cancelAnimationFrame(frame);
    };
  }, []), { endRef, reached };
}
function FeedCard2({
  feed,
  priority
}) {
  let ref = (0, import_react39.useRef)(null), sideBorders = useSideBorders(), [html, setHtml] = (0, import_react39.useState)(null), [failed, setFailed] = (0, import_react39.useState)(!1);
  return (0, import_react39.useEffect)(() => {
    if (html || failed)
      return;
    let controller = new AbortController(), load = () => {
      schedule2(() => fetchIssue(feed.id, controller.signal), priority).then((result) => {
        controller.signal.aborted || (result ? setHtml(result) : setFailed(!0));
      }).catch(() => setFailed(!0));
    };
    if (priority)
      return load(), () => controller.abort();
    let element = ref.current;
    if (!element)
      return;
    let observer = new IntersectionObserver(
      ([entry2]) => {
        entry2 != null && entry2.isIntersecting && (observer.disconnect(), load());
      },
      { rootMargin: "1800px 0px", threshold: 0 }
    );
    return observer.observe(element), () => {
      controller.abort(), observer.disconnect();
    };
  }, [feed.id, html, failed, priority]), /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("section", { className: "feed-archive-item", "data-feed-id": feed.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { ref, children: html ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    feed_embed_default,
    {
      id: feed.id,
      html,
      title: feed.subject,
      interactive: !0,
      bordered: !0,
      hideTopBorder: !0,
      fallbackHeight: 900
    },
    void 0,
    !1,
    {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 269,
      columnNumber: 11
    },
    this
  ) : failed ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    "a",
    {
      href: `/feeds/${feed.id}`,
      className: "feeds-empty feed-fallback",
      style: {
        display: "block",
        padding: "32px 24px",
        textAlign: "center",
        textDecoration: "none",
        color: "inherit",
        ...sideBorders
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("strong", { children: feed.subject }, void 0, !1, {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 291,
          columnNumber: 13
        }, this),
        feed.dateLabel && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { style: { opacity: 0.6, marginTop: 6 }, children: feed.dateLabel }, void 0, !1, {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 292,
          columnNumber: 32
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { style: { opacity: 0.6, marginTop: 6 }, children: "Read this edition" }, void 0, !1, {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 293,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 279,
      columnNumber: 11
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    "div",
    {
      className: "feeds-skeleton feed-lazy-placeholder",
      "aria-hidden": "true",
      style: {
        width: "100%",
        height: getCachedHeight(feed.id, !0) ?? 900,
        ...sideBorders
      }
    },
    void 0,
    !1,
    {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 296,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/feeds.tsx",
    lineNumber: 267,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/feeds.tsx",
    lineNumber: 266,
    columnNumber: 5
  }, this);
}
function Feeds() {
  let { feeds, degraded } = (0, import_react40.useLoaderData)(), { endRef, reached } = useReachedEndOfPage6(), [forced, setForced] = (0, import_react39.useState)(!1), [expandBanner, setExpandBanner] = (0, import_react39.useState)(!1), footerRef = (0, import_react39.useRef)(null), previousReached = (0, import_react39.useRef)(!1), bannerVisible = reached || forced;
  return (0, import_react39.useEffect)(() => {
    previousReached.current && !reached && (setForced(!1), setExpandBanner(!1)), previousReached.current = reached;
  }, [reached]), /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "feed-page feeds-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(FeedTopbar, { hidden: reached, onSubscribe: (event) => {
      var _a2;
      event.preventDefault(), setForced(!0), setExpandBanner(!0), (_a2 = footerRef.current) == null || _a2.scrollIntoView({ behavior: "smooth", block: "end" });
    } }, void 0, !1, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 338,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("main", { className: "feeds-stream", children: [
      feeds.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "feeds-empty", children: degraded ? "The archive is taking a moment. Please refresh shortly." : "No feeds yet." }, void 0, !1, {
        fileName: "app/routes/feeds.tsx",
        lineNumber: 342,
        columnNumber: 11
      }, this) : feeds.map((feed, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(FeedCard2, { feed, priority: index === 0 }, feed.id, !1, {
        fileName: "app/routes/feeds.tsx",
        lineNumber: 347,
        columnNumber: 13
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/routes/feeds.tsx",
        lineNumber: 351,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 340,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { ref: footerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(FeedFooter, { covered: bannerVisible }, void 0, !1, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 355,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 354,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(FeedSubscribeBanner, { visible: bannerVisible, forceExpanded: expandBanner }, void 0, !1, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 358,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/feeds.tsx",
    lineNumber: 337,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  headers: () => headers10,
  links: () => links11,
  meta: () => meta18
});
var import_react41 = require("react"), import_react42 = require("@remix-run/react");
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), meta18 = () => ({
  title: "thepoast"
}), links11 = () => [
  {
    rel: "preconnect",
    href: "https://img.thepoast.com"
  },
  {
    rel: "dns-prefetch",
    href: "https://img.thepoast.com"
  }
], headers10 = () => ({
  "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=300"
}), BANNER_TRIGGER12 = 0.85;
function useReachedEndOfFeed6() {
  let endRef = (0, import_react41.useRef)(null), [reached, setReached] = (0, import_react41.useState)(!1);
  return (0, import_react41.useEffect)(() => {
    let el = endRef.current;
    if (!el)
      return;
    let frame = 0, check = () => {
      frame = 0;
      let top = el.getBoundingClientRect().top;
      setReached(
        window.scrollY > 0 && top <= window.innerHeight * BANNER_TRIGGER12
      );
    }, schedule3 = () => {
      frame || (frame = requestAnimationFrame(check));
    };
    window.addEventListener("scroll", schedule3, { passive: !0 }), window.addEventListener("resize", schedule3);
    let resizeObserver;
    return typeof ResizeObserver < "u" && el.parentElement && (resizeObserver = new ResizeObserver(schedule3), resizeObserver.observe(el.parentElement)), check(), () => {
      window.removeEventListener("scroll", schedule3), window.removeEventListener("resize", schedule3), resizeObserver == null || resizeObserver.disconnect(), frame && cancelAnimationFrame(frame);
    };
  }, []), { endRef, reached };
}
function Index() {
  let { endRef, reached } = useReachedEndOfFeed6(), [expanded, setExpanded] = (0, import_react41.useState)(!1), [forced, setForced] = (0, import_react41.useState)(!1), footerRef = (0, import_react41.useRef)(null), emailRef = (0, import_react41.useRef)(null), prevReached = (0, import_react41.useRef)(!1), bannerVisible = reached || forced;
  return (0, import_react41.useEffect)(() => {
    prevReached.current && !reached && setForced(!1), prevReached.current = reached;
  }, [reached]), (0, import_react41.useEffect)(() => {
    var _a2;
    expanded && ((_a2 = emailRef.current) == null || _a2.focus({ preventScroll: !0 }));
  }, [expanded]), /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("header", { className: `feed-topbar${reached ? " is-hidden" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react42.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "img",
        {
          src: "/img/tp.png",
          alt: "thepoast",
          decoding: "async"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 131,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "a",
        {
          className: "feed-subscribe",
          onClick: (e) => {
            var _a2;
            e.preventDefault(), setExpanded(!0), setForced(!0), (_a2 = footerRef.current) == null || _a2.scrollIntoView({ behavior: "smooth", block: "end" });
          },
          children: "Subscribe"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 138,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("main", { className: "feed-stream", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "feed-embed loaded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        feed_embed_default,
        {
          id: "live",
          src: "/live",
          title: "Today's Edition",
          interactive: !0,
          bordered: !0,
          hideTopBorder: !0,
          fallbackHeight: 900
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 148,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { ref: endRef, className: "feed-end-marker", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "footer",
        {
          ref: footerRef,
          className: `feed-footer${bannerVisible ? " is-covered" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "feed-footer-links", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react42.Link, { to: "/about", children: "about" }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 168,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react42.Link, { to: "/archive", children: "archive" }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 169,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react42.Link, { to: "/submit-post", children: "submit post" }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 170,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react42.Link, { to: "/policies/privacy", children: "privacy" }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 171,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react42.Link, { to: "/policies/terms", children: "terms" }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 172,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react42.Link, { to: "/book", children: "advertise" }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 173,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react42.Link, { to: "/manager", children: "ads manager" }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 174,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 167,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "feed-copyright", children: "thepoast \xA9 2026" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 176,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 163,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "aside",
        {
          className: `feed-banner${bannerVisible ? " is-visible" : ""}`,
          "aria-label": "Subscribe to thepoast",
          "aria-hidden": !bannerVisible,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "feed-banner-inner", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "feed-banner-title", children: "Get thepoast for free" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 186,
              columnNumber: 11
            }, this),
            expanded ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
              "form",
              {
                method: "post",
                action: "https://app.thepoast.com/subscription/form",
                className: "feed-banner-form",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "feed-input-bar", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                      "input",
                      {
                        className: "feed-input email-input",
                        type: "email",
                        name: "email",
                        required: !0,
                        ref: emailRef,
                        placeholder: "Email Address *"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 203,
                        columnNumber: 17
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("button", { className: "feed-submit", type: "submit", children: "Subscribe" }, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 212,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 202,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "feed-verify-row", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 221,
                      columnNumber: 19
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 220,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "feed-legal", children: [
                      "By submitting, you agree to our",
                      " ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react42.Link, { to: "/policies/terms", children: "terms" }, void 0, !1, {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 226,
                        columnNumber: 19
                      }, this),
                      " &",
                      " ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react42.Link, { to: "/policies/privacy", children: "privacy" }, void 0, !1, {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 227,
                        columnNumber: 19
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 224,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 219,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                    "input",
                    {
                      id: "6d48f",
                      type: "hidden",
                      name: "l",
                      value: "6d48fffe-7d37-4c14-b317-3e4cda33a647"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 231,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 238,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 197,
                columnNumber: 13
              },
              this
            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
              "button",
              {
                type: "button",
                className: "feed-banner-btn",
                onClick: () => setExpanded(!0),
                children: "Subscribe"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 189,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 185,
            columnNumber: 9
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 180,
          columnNumber: 7
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 146,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 127,
    columnNumber: 5
  }, this);
}

// app/routes/start.tsx
var start_exports = {};
__export(start_exports, {
  default: () => Portal2,
  meta: () => meta19
});
var import_react43 = require("@remix-run/react");
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), meta19 = () => ({
  title: "thepoast Ads Manager",
  description: "Book a new campaign, share an existing one, or explore our media kit, all in one place."
}), Glyph2 = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false",
    children
  },
  void 0,
  !1,
  {
    fileName: "app/routes/start.tsx",
    lineNumber: 23,
    columnNumber: 3
  },
  this
), BoltIcon2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Glyph2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z" }, void 0, !1, {
  fileName: "app/routes/start.tsx",
  lineNumber: 39,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/routes/start.tsx",
  lineNumber: 38,
  columnNumber: 3
}, this), MegaphoneIcon2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Glyph2, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M3 10v4h3l7 4V6L6 10H3Z" }, void 0, !1, {
    fileName: "app/routes/start.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M16.5 8.5a5 5 0 0 1 0 7" }, void 0, !1, {
    fileName: "app/routes/start.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M19 6a8.5 8.5 0 0 1 0 12" }, void 0, !1, {
    fileName: "app/routes/start.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/start.tsx",
  lineNumber: 44,
  columnNumber: 3
}, this), LinkIcon2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Glyph2, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" }, void 0, !1, {
    fileName: "app/routes/start.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" }, void 0, !1, {
    fileName: "app/routes/start.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/start.tsx",
  lineNumber: 52,
  columnNumber: 3
}, this), ChartIcon2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Glyph2, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M5 20v-7" }, void 0, !1, {
    fileName: "app/routes/start.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M12 20V5" }, void 0, !1, {
    fileName: "app/routes/start.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M19 20V9" }, void 0, !1, {
    fileName: "app/routes/start.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/start.tsx",
  lineNumber: 59,
  columnNumber: 3
}, this), ArchiveIcon2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Glyph2, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("rect", { x: "3", y: "4", width: "18", height: "4", rx: "1" }, void 0, !1, {
    fileName: "app/routes/start.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8" }, void 0, !1, {
    fileName: "app/routes/start.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M10 12h4" }, void 0, !1, {
    fileName: "app/routes/start.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/start.tsx",
  lineNumber: 67,
  columnNumber: 3
}, this), FEATURED2 = {
  href: "/free",
  title: "Explore the opportunity",
  description: "For advertisers who want to see how it looks",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(BoltIcon2, {}, void 0, !1, {
    fileName: "app/routes/start.tsx",
    lineNumber: 94,
    columnNumber: 9
  }, this),
  from: "#ffb340",
  to: "#ff8a00",
  cta: "See preview"
}, APPS2 = [
  {
    href: "/book",
    title: "Book an ad",
    description: "For advertisers who want a quick placement with a defined price",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(ChartIcon2, {}, void 0, !1, {
      fileName: "app/routes/start.tsx",
      lineNumber: 106,
      columnNumber: 11
    }, this),
    from: "#5e9bff",
    to: "#7f13a9"
  },
  {
    href: "/link",
    title: "Use an existing ad",
    description: "For advertisers who already have creative running on social",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(LinkIcon2, {}, void 0, !1, {
      fileName: "app/routes/start.tsx",
      lineNumber: 114,
      columnNumber: 11
    }, this),
    from: "#46d37a",
    to: "#c8b41a"
  },
  {
    href: "/partner",
    title: "Create a campaign",
    description: "For advertisers who want to choose their schedule, goal, and budget",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(MegaphoneIcon2, {}, void 0, !1, {
      fileName: "app/routes/start.tsx",
      lineNumber: 122,
      columnNumber: 11
    }, this),
    from: "#d9283d",
    to: "#fc640b"
  },
  {
    href: "/media-kit",
    title: "See our media kit",
    description: "For advertisers who want to learn more about our audience",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(ArchiveIcon2, {}, void 0, !1, {
      fileName: "app/routes/start.tsx",
      lineNumber: 130,
      columnNumber: 11
    }, this),
    from: "#610bc9",
    to: "#e84545"
  }
], tint2 = (from, to, index) => ({ "--from": from, "--to": to, "--i": index });
function Portal2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "feed-page ad-booking-page pt-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
      FeedTopbar,
      {
        showSubscribe: !1,
        onSubscribe: (e) => {
          e.preventDefault(), window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/start.tsx",
        lineNumber: 146,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("main", { className: "ad-booking-card pt-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        import_react43.Link,
        {
          to: FEATURED2.href,
          prefetch: "intent",
          className: "pt-featured",
          style: tint2(FEATURED2.from, FEATURED2.to, 0),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "pt-icon pt-icon-lg", "aria-hidden": "true", children: FEATURED2.icon }, void 0, !1, {
              fileName: "app/routes/start.tsx",
              lineNumber: 164,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "pt-featured-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "pt-eyebrow", children: FEATURED2.note }, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 168,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "pt-featured-title", children: FEATURED2.title }, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 169,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "pt-desc", children: FEATURED2.description }, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 170,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/start.tsx",
              lineNumber: 167,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "pt-featured-cta", children: FEATURED2.cta }, void 0, !1, {
              fileName: "app/routes/start.tsx",
              lineNumber: 172,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/start.tsx",
          lineNumber: 158,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("nav", { className: "pt-grid", "aria-label": "Portal", children: APPS2.map((app, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        import_react43.Link,
        {
          to: app.href,
          prefetch: "intent",
          className: "pt-tile",
          style: tint2(app.from, app.to, i + 1),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "pt-tile-top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "pt-icon", "aria-hidden": "true", children: app.icon }, void 0, !1, {
              fileName: "app/routes/start.tsx",
              lineNumber: 187,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/start.tsx",
              lineNumber: 186,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "pt-tile-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "pt-tile-title", children: app.title }, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 192,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "pt-desc", children: app.description }, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 193,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/start.tsx",
              lineNumber: 191,
              columnNumber: 15
            }, this)
          ]
        },
        app.href,
        !0,
        {
          fileName: "app/routes/start.tsx",
          lineNumber: 179,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/start.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react43.Link, { to: "/", className: "back-btn", children: "\u2190 Back to thepoast" }, void 0, !1, {
        fileName: "app/routes/start.tsx",
        lineNumber: 199,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/start.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(FeedFooter, {}, void 0, !1, {
      fileName: "app/routes/start.tsx",
      lineNumber: 204,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/start.tsx",
    lineNumber: 145,
    columnNumber: 5
  }, this);
}

// app/routes/book.tsx
var book_exports = {};
__export(book_exports, {
  action: () => action6,
  default: () => Advertise,
  headers: () => headers11,
  meta: () => meta20
});
var import_node10 = require("@remix-run/node"), import_react44 = require("@remix-run/react"), import_react45 = require("react");
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), meta20 = () => ({
  title: "Book campaign / thepoast",
  description: "Book an ad campaign for your company or brand here."
}), SHOW_ERROR_DETAILS = !0, headers11 = () => ({
  "Cache-Control": "public, max-age=60, s-maxage=120, stale-while-revalidate=600"
}), str6 = (value, max) => typeof value == "string" ? value.trim().slice(0, max) : "", EMAIL_RE3 = /^[^\s@'"\\]+@[^\s@'"\\]+\.[^\s@'"\\]+$/;
function normalizeWebsite2(raw) {
  if (!raw)
    return null;
  let withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    let url = new URL(withProtocol);
    return url.hostname.includes(".") ? url.toString() : null;
  } catch {
    return null;
  }
}
function buildSubscriberName2(firstName, lastName, company) {
  return `${firstName} ${lastName}`.trim() || company;
}
function listmonkConfig4() {
  let baseUrl = (process.env.LISTMONK_URL || "https://app.thepoast.com").replace(/\/+$/, ""), apiUser = process.env.LISTMONK_API_USER || process.env.LISTMONK_USERNAME, apiToken = process.env.LISTMONK_API_TOKEN || process.env.LISTMONK_TOKEN, listId = Number(process.env.LISTMONK_ADVERTISER_LIST_ID || 31), missing = [];
  if (apiUser || missing.push("LISTMONK_USERNAME"), apiToken || missing.push("LISTMONK_TOKEN"), (!Number.isInteger(listId) || listId < 1) && missing.push("LISTMONK_ADVERTISER_LIST_ID"), missing.length)
    throw new Error(`Missing or invalid env vars: ${missing.join(", ")}`);
  return { baseUrl, apiUser, apiToken, listId };
}
async function listmonk5(path, init = {}) {
  let { baseUrl, apiUser, apiToken } = listmonkConfig4();
  return fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${apiUser}:${apiToken}`,
      ...init.headers || {}
    }
  });
}
function explainListmonkFailure2(step, status, body) {
  let hint = "";
  return status === 401 ? hint = "Listmonk rejected credentials." : status === 403 ? hint = "API user lacks permission." : status === 404 ? hint = "Listmonk URL/path not found." : status === 400 && (hint = "Listmonk rejected data. Check list ID."), `Listmonk ${step} failed (HTTP ${status}). ${hint} Response: ${body.slice(0, 300)}`;
}
async function saveAdvertiserLead2(lead) {
  var _a2, _b2;
  let { listId } = listmonkConfig4(), now = (/* @__PURE__ */ new Date()).toISOString(), bookingRequest = {
    submitted_at: now,
    company: lead.company,
    website: lead.website,
    first_name: lead.firstName,
    last_name: lead.lastName,
    phone: lead.phone,
    notes: lead.notes,
    payment_method: lead.paymentMethod
  }, attribs = {
    subscriber_type: "advertiser",
    source: "advertise-form",
    company: lead.company,
    website: lead.website,
    contact_name: `${lead.firstName} ${lead.lastName}`.trim(),
    first_name: lead.firstName,
    last_name: lead.lastName,
    phone: lead.phone,
    notes: lead.notes,
    payment_method: lead.paymentMethod,
    last_submitted_at: now,
    ad_requests: [bookingRequest]
  }, name = buildSubscriberName2(lead.firstName, lead.lastName, lead.company), createRes = await listmonk5("/api/subscribers", {
    method: "POST",
    body: JSON.stringify({
      email: lead.email,
      name,
      status: "enabled",
      lists: [listId],
      preconfirm_subscriptions: !0,
      attribs
    })
  });
  if (createRes.ok)
    return;
  if (createRes.status !== 409)
    throw new Error(
      explainListmonkFailure2("create", createRes.status, await createRes.text())
    );
  let query = `subscribers.email = '${lead.email.replace(/'/g, "''")}'`, findRes = await listmonk5(
    `/api/subscribers?per_page=1&query=${encodeURIComponent(query)}`
  );
  if (!findRes.ok)
    throw new Error(
      explainListmonkFailure2("lookup", findRes.status, await findRes.text())
    );
  let found = await findRes.json(), existing = (_b2 = (_a2 = found == null ? void 0 : found.data) == null ? void 0 : _a2.results) == null ? void 0 : _b2[0];
  if (!existing)
    throw new Error("Listmonk said the email exists but lookup returned nothing");
  let existingAttribs = existing.attribs ?? {}, history = Array.isArray(existingAttribs.ad_requests) ? existingAttribs.ad_requests : [], listIds = Array.from(
    /* @__PURE__ */ new Set([
      ...(existing.lists ?? []).map((l) => l.id),
      listId
    ])
  ), updateRes = await listmonk5(`/api/subscribers/${existing.id}`, {
    method: "PUT",
    body: JSON.stringify({
      email: existing.email,
      name,
      status: existing.status,
      lists: listIds,
      preconfirm_subscriptions: !0,
      attribs: {
        ...existingAttribs,
        ...attribs,
        ad_requests: [...history, bookingRequest].slice(-20)
      }
    })
  });
  if (!updateRes.ok)
    throw new Error(
      explainListmonkFailure2("update", updateRes.status, await updateRes.text())
    );
}
async function action6({ request }) {
  let formData = await request.formData();
  if (str6(formData.get("nonce"), 200))
    return (0, import_node10.redirect)("/thank-you");
  let company = str6(formData.get("company"), 200), websiteRaw = str6(formData.get("website"), 300), firstName = str6(formData.get("firstName"), 100), lastName = str6(formData.get("lastName"), 100), email = str6(formData.get("email"), 254).toLowerCase(), phone = str6(formData.get("phone"), 50), notes = str6(formData.get("notes"), 5e3), paymentMethod = str6(formData.get("paymentMethod"), 50), altcha = str6(formData.get("altcha"), 2e4), fieldErrors = {};
  company || (fieldErrors.company = "Please enter your company."), firstName || (fieldErrors.name = "Please enter your first name."), lastName || (fieldErrors.name = "Please enter your last name."), EMAIL_RE3.test(email) || (fieldErrors.email = "Please enter a valid work email.");
  let website = normalizeWebsite2(websiteRaw);
  if (website || (fieldErrors.website = "Please enter a valid website."), ["Credit Card", "Insertion Order"].includes(paymentMethod) || (fieldErrors.paymentMethod = "Please choose a payment method."), process.env.ALTCHA_REQUIRED !== "false" && !altcha && (fieldErrors.altcha = "Please complete the verification and try again."), Object.keys(fieldErrors).length > 0)
    return (0, import_node10.json)(
      { error: "Please fix the highlighted fields.", fieldErrors },
      { status: 400 }
    );
  try {
    await saveAdvertiserLead2({
      company,
      website,
      firstName,
      lastName,
      email,
      phone,
      notes,
      paymentMethod
    });
  } catch (err) {
    console.error("[book] failed to save advertiser lead:", err);
    let cause = err == null ? void 0 : err.cause, reason = (err instanceof Error ? err.message : String(err)) + (cause ? ` [${cause.code || cause.message}]` : "");
    return (0, import_node10.json)(
      {
        error: "Something went wrong sending your request. Please try again in a moment.",
        debug: SHOW_ERROR_DETAILS || process.env.BOOK_DEBUG === "true" ? reason : void 0
      },
      { status: 500 }
    );
  }
  return (0, import_node10.redirect)("/thank-you");
}
function Advertise() {
  let actionData = (0, import_react44.useActionData)(), errors = (actionData == null ? void 0 : actionData.fieldErrors) ?? {}, [selectedPaymentMethod, setSelectedPaymentMethod] = (0, import_react45.useState)("Credit Card"), fieldError = (name) => errors[name] ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "ad-field-error", id: `${name}-error`, role: "alert", children: errors[name] }, void 0, !1, {
    fileName: "app/routes/book.tsx",
    lineNumber: 309,
    columnNumber: 7
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "feed-page ad-booking-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      FeedTopbar,
      {
        showSubscribe: !1,
        onSubscribe: (e) => {
          e.preventDefault(), window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/book.tsx",
        lineNumber: 316,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("main", { className: "ad-booking-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "ad-badge", children: "ADVERTISE with us" }, void 0, !1, {
        fileName: "app/routes/book.tsx",
        lineNumber: 325,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/book.tsx",
        lineNumber: 324,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react44.Form, { method: "post", className: "ad-booking-form", children: [
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "ad-form-error", role: "alert", children: [
          actionData.error,
          actionData.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("code", { className: "ad-form-error-debug", children: actionData.debug }, void 0, !1, {
            fileName: "app/routes/book.tsx",
            lineNumber: 333,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/book.tsx",
          lineNumber: 330,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { htmlFor: "company", children: "Company" }, void 0, !1, {
              fileName: "app/routes/book.tsx",
              lineNumber: 340,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              "input",
              {
                type: "text",
                id: "company",
                name: "company",
                required: !0,
                autoComplete: "organization",
                placeholder: "Company *",
                "aria-invalid": errors.company ? !0 : void 0,
                "aria-describedby": errors.company ? "company-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 341,
                columnNumber: 15
              },
              this
            ),
            fieldError("company")
          ] }, void 0, !0, {
            fileName: "app/routes/book.tsx",
            lineNumber: 339,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { htmlFor: "website", children: "Website" }, void 0, !1, {
              fileName: "app/routes/book.tsx",
              lineNumber: 355,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              "input",
              {
                type: "text",
                id: "website",
                name: "website",
                required: !0,
                autoComplete: "url",
                inputMode: "url",
                placeholder: "https://",
                "aria-invalid": errors.website ? !0 : void 0,
                "aria-describedby": errors.website ? "website-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 356,
                columnNumber: 15
              },
              this
            ),
            fieldError("website")
          ] }, void 0, !0, {
            fileName: "app/routes/book.tsx",
            lineNumber: 354,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/book.tsx",
          lineNumber: 338,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { htmlFor: "firstName", children: "First Name" }, void 0, !1, {
              fileName: "app/routes/book.tsx",
              lineNumber: 373,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              "input",
              {
                type: "text",
                id: "firstName",
                name: "firstName",
                required: !0,
                autoComplete: "given-name",
                placeholder: "First Name *",
                "aria-invalid": errors.name ? !0 : void 0,
                "aria-describedby": errors.name ? "name-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 374,
                columnNumber: 15
              },
              this
            ),
            fieldError("name")
          ] }, void 0, !0, {
            fileName: "app/routes/book.tsx",
            lineNumber: 372,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { htmlFor: "lastName", children: "Last Name" }, void 0, !1, {
              fileName: "app/routes/book.tsx",
              lineNumber: 388,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              "input",
              {
                type: "text",
                id: "lastName",
                name: "lastName",
                required: !0,
                autoComplete: "family-name",
                placeholder: "Last Name *"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 389,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/book.tsx",
            lineNumber: 387,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/book.tsx",
          lineNumber: 371,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { htmlFor: "email", children: "Business Email" }, void 0, !1, {
              fileName: "app/routes/book.tsx",
              lineNumber: 402,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              "input",
              {
                type: "email",
                id: "email",
                name: "email",
                required: !0,
                autoComplete: "email",
                inputMode: "email",
                placeholder: "Business Email *",
                "aria-invalid": errors.email ? !0 : void 0,
                "aria-describedby": errors.email ? "email-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 403,
                columnNumber: 15
              },
              this
            ),
            fieldError("email")
          ] }, void 0, !0, {
            fileName: "app/routes/book.tsx",
            lineNumber: 401,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { htmlFor: "phone", children: "Phone Number" }, void 0, !1, {
              fileName: "app/routes/book.tsx",
              lineNumber: 418,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              "input",
              {
                type: "tel",
                id: "phone",
                name: "phone",
                autoComplete: "tel",
                inputMode: "tel",
                placeholder: "Phone Number *",
                "aria-invalid": errors.phone ? !0 : void 0,
                "aria-describedby": errors.phone ? "phone-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 419,
                columnNumber: 15
              },
              this
            ),
            fieldError("phone")
          ] }, void 0, !0, {
            fileName: "app/routes/book.tsx",
            lineNumber: 417,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/book.tsx",
          lineNumber: 400,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { children: "Payment Method" }, void 0, !1, {
            fileName: "app/routes/book.tsx",
            lineNumber: 434,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "input",
            {
              type: "hidden",
              name: "paymentMethod",
              value: selectedPaymentMethod
            },
            void 0,
            !1,
            {
              fileName: "app/routes/book.tsx",
              lineNumber: 435,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "pill-group", children: ["Credit Card", "Insertion Order"].map((method) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "button",
            {
              type: "button",
              className: `pill-btn ${selectedPaymentMethod === method ? "active" : ""}`,
              onClick: () => setSelectedPaymentMethod(method),
              children: method
            },
            method,
            !1,
            {
              fileName: "app/routes/book.tsx",
              lineNumber: 442,
              columnNumber: 17
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/book.tsx",
            lineNumber: 440,
            columnNumber: 13
          }, this),
          fieldError("paymentMethod")
        ] }, void 0, !0, {
          fileName: "app/routes/book.tsx",
          lineNumber: 433,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { htmlFor: "notes", children: "How can we help you?" }, void 0, !1, {
            fileName: "app/routes/book.tsx",
            lineNumber: 458,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "textarea",
            {
              id: "notes",
              name: "notes",
              rows: 4,
              maxLength: 5e3,
              placeholder: "I'm looking for help with ads..."
            },
            void 0,
            !1,
            {
              fileName: "app/routes/book.tsx",
              lineNumber: 459,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/book.tsx",
          lineNumber: 457,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          "input",
          {
            type: "text",
            name: "nonce",
            className: "hp-field",
            tabIndex: -1,
            autoComplete: "off",
            "aria-hidden": "true"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/book.tsx",
            lineNumber: 468,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("button", { type: "submit", className: "ad-submit-btn", children: "Submit Booking Request" }, void 0, !1, {
          fileName: "app/routes/book.tsx",
          lineNumber: 477,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "subscribe-altcha", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/book.tsx",
            lineNumber: 482,
            columnNumber: 13
          }, this),
          fieldError("altcha")
        ] }, void 0, !0, {
          fileName: "app/routes/book.tsx",
          lineNumber: 481,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/book.tsx",
        lineNumber: 328,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "feed-legal", children: [
        "By submitting, you agree to our",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react44.Link, { to: "/policies/terms", children: "terms" }, void 0, !1, {
          fileName: "app/routes/book.tsx",
          lineNumber: 489,
          columnNumber: 13
        }, this),
        " &",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react44.Link, { to: "/policies/privacy", children: "privacy" }, void 0, !1, {
          fileName: "app/routes/book.tsx",
          lineNumber: 490,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/book.tsx",
        lineNumber: 487,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react44.Link, { to: "/manager", className: "back-btn", children: "\u2190 Back to Ads Manager" }, void 0, !1, {
        fileName: "app/routes/book.tsx",
        lineNumber: 493,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/book.tsx",
      lineNumber: 323,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(FeedFooter, {}, void 0, !1, {
      fileName: "app/routes/book.tsx",
      lineNumber: 498,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/book.tsx",
    lineNumber: 315,
    columnNumber: 5
  }, this);
}

// app/routes/link.tsx
var link_exports = {};
__export(link_exports, {
  action: () => action7,
  default: () => Advertise2,
  headers: () => headers12,
  meta: () => meta21
});
var import_node11 = require("@remix-run/node"), import_react46 = require("@remix-run/react"), import_react47 = require("react");
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), meta21 = () => ({
  title: "Share your campaign / thepoast",
  description: "Already running ads on social? Share a link and we'll convert it to a thepoast campaign."
}), headers12 = () => ({
  "Cache-Control": "public, max-age=60, s-maxage=120, stale-while-revalidate=600"
}), PAYMENT_METHODS4 = ["Credit Card", "Insertion Order"], str7 = (value, max) => typeof value == "string" ? value.trim().slice(0, max) : "", EMAIL_RE4 = /^[^\s@'"\\]+@[^\s@'"\\]+\.[^\s@'"\\]+$/;
function normalizeUrl(raw) {
  if (!raw)
    return null;
  let withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    let url = new URL(withProtocol);
    return url.hostname.includes(".") ? url.toString() : null;
  } catch {
    return null;
  }
}
function buildSubscriberName3(firstName, lastName, company) {
  return `${firstName} ${lastName}`.trim() || company;
}
function listmonkConfig5() {
  let baseUrl = (process.env.LISTMONK_URL || "https://app.thepoast.com").replace(/\/+$/, ""), apiUser = process.env.LISTMONK_API_USER || process.env.LISTMONK_USERNAME, apiToken = process.env.LISTMONK_API_TOKEN || process.env.LISTMONK_TOKEN, listId = Number(process.env.LISTMONK_ADVERTISER_LIST_ID || 31), missing = [];
  if (apiUser || missing.push("LISTMONK_USERNAME"), apiToken || missing.push("LISTMONK_TOKEN"), (!Number.isInteger(listId) || listId < 1) && missing.push("LISTMONK_ADVERTISER_LIST_ID"), missing.length)
    throw new Error(`Missing or invalid env vars: ${missing.join(", ")}`);
  return {
    baseUrl,
    apiUser,
    apiToken,
    listId
  };
}
async function listmonk6(path, init = {}) {
  let { baseUrl, apiUser, apiToken } = listmonkConfig5();
  return fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${apiUser}:${apiToken}`,
      ...init.headers || {}
    }
  });
}
function explainListmonkFailure3(step, status, body) {
  let hint = "";
  return status === 401 ? hint = "Listmonk rejected credentials." : status === 403 ? hint = "API user lacks permission." : status === 404 ? hint = "Listmonk URL/path not found." : status === 400 && (hint = "Listmonk rejected data. Check list ID."), `Listmonk ${step} failed (HTTP ${status}). ${hint} Response: ${body.slice(0, 300)}`;
}
async function saveAdvertiserLead3(lead) {
  var _a2, _b2;
  let { listId } = listmonkConfig5(), now = (/* @__PURE__ */ new Date()).toISOString(), bookingRequest = {
    request_type: "campaign-link",
    submitted_at: now,
    company: lead.company,
    first_name: lead.firstName,
    last_name: lead.lastName,
    link: lead.link,
    payment_method: lead.paymentMethod
  }, attribs = {
    subscriber_type: "advertiser",
    source: "campaign-link-form",
    company: lead.company,
    contact_name: `${lead.firstName} ${lead.lastName}`.trim(),
    first_name: lead.firstName,
    last_name: lead.lastName,
    link: lead.link,
    payment_method: lead.paymentMethod,
    last_submitted_at: now,
    ad_requests: [bookingRequest]
  }, name = buildSubscriberName3(lead.firstName, lead.lastName, lead.company), createRes = await listmonk6("/api/subscribers", {
    method: "POST",
    body: JSON.stringify({
      email: lead.email,
      name,
      status: "enabled",
      lists: [listId],
      preconfirm_subscriptions: !0,
      attribs
    })
  });
  if (createRes.ok)
    return;
  if (createRes.status !== 409)
    throw new Error(
      explainListmonkFailure3("create", createRes.status, await createRes.text())
    );
  let query = `subscribers.email = '${lead.email.replace(/'/g, "''")}'`, findRes = await listmonk6(
    `/api/subscribers?per_page=1&query=${encodeURIComponent(query)}`
  );
  if (!findRes.ok)
    throw new Error(
      explainListmonkFailure3("lookup", findRes.status, await findRes.text())
    );
  let found = await findRes.json(), existing = (_b2 = (_a2 = found == null ? void 0 : found.data) == null ? void 0 : _a2.results) == null ? void 0 : _b2[0];
  if (!existing)
    throw new Error("Listmonk said the email exists but lookup returned nothing");
  let existingAttribs = existing.attribs ?? {}, history = Array.isArray(existingAttribs.ad_requests) ? existingAttribs.ad_requests : [], listIds = Array.from(
    /* @__PURE__ */ new Set([
      ...(existing.lists ?? []).map((l) => l.id),
      listId
    ])
  ), updateRes = await listmonk6(`/api/subscribers/${existing.id}`, {
    method: "PUT",
    body: JSON.stringify({
      email: existing.email,
      name,
      status: existing.status,
      lists: listIds,
      preconfirm_subscriptions: !0,
      attribs: {
        ...existingAttribs,
        ...attribs,
        ad_requests: [...history, bookingRequest].slice(-20)
      }
    })
  });
  if (!updateRes.ok)
    throw new Error(
      explainListmonkFailure3("update", updateRes.status, await updateRes.text())
    );
}
async function action7({ request }) {
  let formData = await request.formData();
  if (str7(formData.get("nonce"), 200))
    return (0, import_node11.redirect)("/thank-you");
  let values = {
    company: str7(formData.get("company"), 200),
    firstName: str7(formData.get("firstName"), 100),
    lastName: str7(formData.get("lastName"), 100),
    email: str7(formData.get("email"), 254).toLowerCase(),
    link: str7(formData.get("link"), 500),
    paymentMethod: str7(formData.get("paymentMethod"), 50)
  }, altcha = str7(formData.get("altcha"), 2e4), fieldErrors = {};
  values.company || (fieldErrors.company = "Please enter your company."), values.firstName || (fieldErrors.firstName = "Please enter your first name."), values.lastName || (fieldErrors.lastName = "Please enter your last name."), EMAIL_RE4.test(values.email) || (fieldErrors.email = "Please enter a valid work email.");
  let link = normalizeUrl(values.link);
  if (link || (fieldErrors.link = "Please enter a valid link."), PAYMENT_METHODS4.includes(values.paymentMethod) || (fieldErrors.paymentMethod = "Please choose a payment method."), process.env.ALTCHA_REQUIRED !== "false" && !altcha && (fieldErrors.altcha = "Please complete the verification and try again."), Object.keys(fieldErrors).length > 0)
    return (0, import_node11.json)(
      { error: "Please fix the highlighted fields.", fieldErrors, values },
      { status: 400 }
    );
  try {
    await saveAdvertiserLead3({ ...values, link });
  } catch (err) {
    console.error("[book/new] failed to save advertiser lead:", err);
    let cause = err == null ? void 0 : err.cause, reason = (err instanceof Error ? err.message : String(err)) + (cause ? ` [${cause.code || cause.message}]` : "");
    return (0, import_node11.json)(
      {
        error: "Something went wrong sending your request. Please try again in a moment.",
        // Internal error details are only shown when BOOK_DEBUG=true.
        debug: process.env.BOOK_DEBUG === "true" ? reason : void 0,
        values
      },
      { status: 500 }
    );
  }
  return (0, import_node11.redirect)("/thank-you");
}
var singleRowTextarea = {
  minHeight: 0,
  height: "3.1rem",
  lineHeight: 1.3,
  resize: "none",
  overflow: "hidden",
  borderRadius: "0.8rem",
  whiteSpace: "nowrap"
};
function Advertise2() {
  let actionData = (0, import_react46.useActionData)(), isSubmitting = (0, import_react46.useNavigation)().state === "submitting", errors = (actionData == null ? void 0 : actionData.fieldErrors) ?? {}, values = actionData == null ? void 0 : actionData.values, [selectedPaymentMethod, setSelectedPaymentMethod] = (0, import_react47.useState)(
    (values == null ? void 0 : values.paymentMethod) || PAYMENT_METHODS4[0]
  ), fieldError = (name) => errors[name] ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "ad-field-error", id: `${name}-error`, role: "alert", children: errors[name] }, void 0, !1, {
    fileName: "app/routes/link.tsx",
    lineNumber: 346,
    columnNumber: 7
  }, this) : null, a11y = (name) => ({
    "aria-invalid": errors[name] ? !0 : void 0,
    "aria-describedby": errors[name] ? `${name}-error` : void 0
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "feed-page ad-booking-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      FeedTopbar,
      {
        showSubscribe: !1,
        onSubscribe: (e) => {
          e.preventDefault(), window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/link.tsx",
        lineNumber: 358,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("main", { className: "ad-booking-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "ad-badge", children: "Repurpose a campaign" }, void 0, !1, {
        fileName: "app/routes/link.tsx",
        lineNumber: 371,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/link.tsx",
        lineNumber: 370,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react46.Form, { method: "post", className: "ad-booking-form", children: [
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "ad-form-error", role: "alert", children: [
          actionData.error,
          actionData.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("code", { className: "ad-form-error-debug", children: actionData.debug }, void 0, !1, {
            fileName: "app/routes/link.tsx",
            lineNumber: 379,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/link.tsx",
          lineNumber: 376,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { htmlFor: "firstName", children: "First Name" }, void 0, !1, {
              fileName: "app/routes/link.tsx",
              lineNumber: 386,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              "input",
              {
                type: "text",
                id: "firstName",
                name: "firstName",
                required: !0,
                maxLength: 100,
                autoComplete: "given-name",
                placeholder: "First Name *",
                defaultValue: values == null ? void 0 : values.firstName,
                ...a11y("firstName")
              },
              void 0,
              !1,
              {
                fileName: "app/routes/link.tsx",
                lineNumber: 387,
                columnNumber: 15
              },
              this
            ),
            fieldError("firstName")
          ] }, void 0, !0, {
            fileName: "app/routes/link.tsx",
            lineNumber: 385,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { htmlFor: "lastName", children: "Last Name" }, void 0, !1, {
              fileName: "app/routes/link.tsx",
              lineNumber: 402,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              "input",
              {
                type: "text",
                id: "lastName",
                name: "lastName",
                required: !0,
                maxLength: 100,
                autoComplete: "family-name",
                placeholder: "Last Name *",
                defaultValue: values == null ? void 0 : values.lastName,
                ...a11y("lastName")
              },
              void 0,
              !1,
              {
                fileName: "app/routes/link.tsx",
                lineNumber: 403,
                columnNumber: 15
              },
              this
            ),
            fieldError("lastName")
          ] }, void 0, !0, {
            fileName: "app/routes/link.tsx",
            lineNumber: 401,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/link.tsx",
          lineNumber: 384,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { id: "payment-label", children: "Payment Method" }, void 0, !1, {
            fileName: "app/routes/link.tsx",
            lineNumber: 419,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            "input",
            {
              type: "hidden",
              name: "paymentMethod",
              value: selectedPaymentMethod
            },
            void 0,
            !1,
            {
              fileName: "app/routes/link.tsx",
              lineNumber: 420,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            "div",
            {
              className: "pill-group",
              role: "group",
              "aria-labelledby": "payment-label",
              children: PAYMENT_METHODS4.map((method) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: `pill-btn ${selectedPaymentMethod === method ? "active" : ""}`,
                  "aria-pressed": selectedPaymentMethod === method,
                  onClick: () => setSelectedPaymentMethod(method),
                  children: method
                },
                method,
                !1,
                {
                  fileName: "app/routes/link.tsx",
                  lineNumber: 431,
                  columnNumber: 17
                },
                this
              ))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/link.tsx",
              lineNumber: 425,
              columnNumber: 13
            },
            this
          ),
          fieldError("paymentMethod")
        ] }, void 0, !0, {
          fileName: "app/routes/link.tsx",
          lineNumber: 418,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { htmlFor: "link", children: "Link to existing social media campaign" }, void 0, !1, {
            fileName: "app/routes/link.tsx",
            lineNumber: 448,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            "textarea",
            {
              id: "link",
              name: "link",
              rows: 1,
              required: !0,
              maxLength: 500,
              inputMode: "url",
              autoComplete: "off",
              autoCapitalize: "off",
              spellCheck: !1,
              placeholder: "http://linkedin.com/ad-library/*******",
              defaultValue: values == null ? void 0 : values.link,
              style: singleRowTextarea,
              ...a11y("link")
            },
            void 0,
            !1,
            {
              fileName: "app/routes/link.tsx",
              lineNumber: 449,
              columnNumber: 13
            },
            this
          ),
          fieldError("link")
        ] }, void 0, !0, {
          fileName: "app/routes/link.tsx",
          lineNumber: 447,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          "input",
          {
            type: "text",
            name: "nonce",
            className: "hp-field",
            tabIndex: -1,
            autoComplete: "off",
            "aria-hidden": "true"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/link.tsx",
            lineNumber: 468,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("button", { type: "submit", className: "ad-submit-btn", disabled: isSubmitting, children: isSubmitting ? "Submitting\u2026" : "Repurpose a Campaign" }, void 0, !1, {
          fileName: "app/routes/link.tsx",
          lineNumber: 477,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "subscribe-altcha", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/link.tsx",
            lineNumber: 482,
            columnNumber: 13
          }, this),
          fieldError("altcha")
        ] }, void 0, !0, {
          fileName: "app/routes/link.tsx",
          lineNumber: 481,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/link.tsx",
        lineNumber: 374,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "feed-legal", children: [
        "By submitting, you agree to our",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react46.Link, { to: "/policies/terms", children: "terms" }, void 0, !1, {
          fileName: "app/routes/link.tsx",
          lineNumber: 489,
          columnNumber: 11
        }, this),
        " &",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react46.Link, { to: "/policies/privacy", children: "privacy" }, void 0, !1, {
          fileName: "app/routes/link.tsx",
          lineNumber: 490,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/link.tsx",
        lineNumber: 487,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react46.Link, { to: "/manager", className: "back-btn", children: "\u2190 Back to Ads Manager" }, void 0, !1, {
        fileName: "app/routes/link.tsx",
        lineNumber: 493,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/link.tsx",
      lineNumber: 369,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(FeedFooter, {}, void 0, !1, {
      fileName: "app/routes/link.tsx",
      lineNumber: 498,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/link.tsx",
    lineNumber: 357,
    columnNumber: 5
  }, this);
}

// app/routes/live.tsx
var live_exports = {};
__export(live_exports, {
  loader: () => loader13
});
var LIVE_CACHE_CONTROL = "public, max-age=20, s-maxage=30, stale-while-revalidate=600", EMAIL_LOGO_BLOCK2 = /<p\b[^>]*class=["']tac["'][^>]*>\s*<a\b[^>]*>\s*<img\b[^>]*src=["']https:\/\/img\.thepoast\.com\/tp_u6yYte\.png["'][^>]*>\s*<\/a>\s*<\/p>/i;
async function loader13() {
  let issue = await getLiveIssue();
  if (!issue)
    return new Response(
      `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>thepoast</title>
<style>
html,
body {
  margin: 0;
  padding: 0;
  background: #fff;
  color: #111;
}

@media (prefers-color-scheme: dark) {
  html,
  body {
    background: #000;
    color: #fff;
  }
}
</style>
</head>
<body>
<p>thepoast is loading. Please refresh shortly.</p>
</body>
</html>`,
      {
        status: 503,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
          "X-Content-Type-Options": "nosniff"
        }
      }
    );
  let body = issue.body.replace(EMAIL_LOGO_BLOCK2, "");
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": LIVE_CACHE_CONTROL,
      "X-Content-Type-Options": "nosniff"
    }
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-QH6ZIJBN.js", imports: ["/build/_shared/chunk-FZOAUUQ7.js", "/build/_shared/chunk-IU43IUTG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-34ZJ5UI2.js", imports: ["/build/_shared/chunk-ZQSMLRP2.js", "/build/_shared/chunk-YXZUJTC2.js", "/build/_shared/chunk-GHQHS7KD.js", "/build/_shared/chunk-3G6G2NLL.js", "/build/_shared/chunk-YYFE5CLS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-FRVZZYZI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-HRYH6WG6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/archive/feeds.$id": { id: "routes/archive/feeds.$id", parentId: "root", path: "archive/feeds/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/archive/feeds.$id-23BYKZQ5.js", imports: ["/build/_shared/chunk-3K2JK6MY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/archive/index": { id: "routes/archive/index", parentId: "root", path: "archive", index: !0, caseSensitive: void 0, module: "/build/routes/archive/index-L4V2AOFV.js", imports: ["/build/_shared/chunk-3K2JK6MY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/book": { id: "routes/book", parentId: "root", path: "book", index: void 0, caseSensitive: void 0, module: "/build/routes/book-BE5TFMIH.js", imports: ["/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/custom/$company": { id: "routes/custom/$company", parentId: "root", path: "/:company", index: void 0, caseSensitive: void 0, module: "/build/routes/custom/$company-7M42UTLI.js", imports: ["/build/_shared/chunk-QJSLQVZS.js", "/build/_shared/chunk-PTAI362M.js", "/build/_shared/chunk-SSJ3GRVN.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/custom/$company.ad": { id: "routes/custom/$company.ad", parentId: "root", path: "custom/:company/ad", index: void 0, caseSensitive: void 0, module: "/build/routes/custom/$company.ad-QSIZ724S.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/custom/$company.book": { id: "routes/custom/$company.book", parentId: "root", path: "/:company/book", index: void 0, caseSensitive: void 0, module: "/build/routes/custom/$company.book-Z43B6ZNO.js", imports: ["/build/_shared/chunk-PTAI362M.js", "/build/_shared/chunk-SSJ3GRVN.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/custom/$company.preview": { id: "routes/custom/$company.preview", parentId: "root", path: "/custom/:company/preview", index: void 0, caseSensitive: void 0, module: "/build/routes/custom/$company.preview-TIZV4EMJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/custom/$company.results": { id: "routes/custom/$company.results", parentId: "root", path: "custom/:company/results", index: void 0, caseSensitive: void 0, module: "/build/routes/custom/$company.results-XKESIYKQ.js", imports: ["/build/_shared/chunk-QJSLQVZS.js", "/build/_shared/chunk-SSJ3GRVN.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/custom/$company.storyboard": { id: "routes/custom/$company.storyboard", parentId: "root", path: "/custom/:company/storyboard", index: void 0, caseSensitive: void 0, module: "/build/routes/custom/$company.storyboard-VACMWJ34.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feeds": { id: "routes/feeds", parentId: "root", path: "feeds", index: void 0, caseSensitive: void 0, module: "/build/routes/feeds-GJC6WX5Q.js", imports: ["/build/_shared/chunk-3K2JK6MY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feeds.$id": { id: "routes/feeds.$id", parentId: "root", path: "feeds/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/feeds.$id-N4BPATRC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feeds.full.$id": { id: "routes/feeds.full.$id", parentId: "root", path: "feeds/full/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/feeds.full.$id-PPNRNRLN.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feeds.preview.$id": { id: "routes/feeds.preview.$id", parentId: "root", path: "feeds/preview/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/feeds.preview.$id-TSSBU4VE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-FOTR42OL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/link": { id: "routes/link", parentId: "root", path: "link", index: void 0, caseSensitive: void 0, module: "/build/routes/link-DUWV4WMO.js", imports: ["/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/live": { id: "routes/live", parentId: "root", path: "live", index: void 0, caseSensitive: void 0, module: "/build/routes/live-Q6E2GHNA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/manager": { id: "routes/manager", parentId: "root", path: "manager", index: void 0, caseSensitive: void 0, module: "/build/routes/manager-XUJYTSVA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/media-kit": { id: "routes/media-kit", parentId: "root", path: "media-kit", index: void 0, caseSensitive: void 0, module: "/build/routes/media-kit-KTJJ2DAM.js", imports: ["/build/_shared/chunk-PTAI362M.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/partner": { id: "routes/partner", parentId: "root", path: "partner", index: void 0, caseSensitive: void 0, module: "/build/routes/partner-GJCYCJKU.js", imports: ["/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/privacy": { id: "routes/policies/privacy", parentId: "root", path: "policies/privacy", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/privacy-UM3DU3JI.js", imports: ["/build/_shared/chunk-ISYUTFJC.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/terms": { id: "routes/policies/terms", parentId: "root", path: "policies/terms", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/terms-TXQC2ZOD.js", imports: ["/build/_shared/chunk-ISYUTFJC.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/start": { id: "routes/start", parentId: "root", path: "start", index: void 0, caseSensitive: void 0, module: "/build/routes/start-KVTJC3EM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/submit-post": { id: "routes/submit-post", parentId: "root", path: "submit-post", index: void 0, caseSensitive: void 0, module: "/build/routes/submit-post-2VLAY5QK.js", imports: ["/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/subscribe": { id: "routes/subscribe", parentId: "root", path: "subscribe", index: void 0, caseSensitive: void 0, module: "/build/routes/subscribe-6R3ON5ID.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/thank-you": { id: "routes/thank-you", parentId: "root", path: "thank-you", index: void 0, caseSensitive: void 0, module: "/build/routes/thank-you-KSVARFGL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "5aad275f", hmr: void 0, url: "/build/manifest-5AAD275F.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/custom/$company.storyboard": {
    id: "routes/custom/$company.storyboard",
    parentId: "root",
    path: "/custom/:company/storyboard",
    index: void 0,
    caseSensitive: void 0,
    module: company_storyboard_exports
  },
  "routes/custom/$company.preview": {
    id: "routes/custom/$company.preview",
    parentId: "root",
    path: "/custom/:company/preview",
    index: void 0,
    caseSensitive: void 0,
    module: company_preview_exports
  },
  "routes/custom/$company.results": {
    id: "routes/custom/$company.results",
    parentId: "root",
    path: "custom/:company/results",
    index: void 0,
    caseSensitive: void 0,
    module: company_results_exports
  },
  "routes/custom/$company.book": {
    id: "routes/custom/$company.book",
    parentId: "root",
    path: "/:company/book",
    index: void 0,
    caseSensitive: void 0,
    module: company_book_exports
  },
  "routes/custom/$company.ad": {
    id: "routes/custom/$company.ad",
    parentId: "root",
    path: "custom/:company/ad",
    index: void 0,
    caseSensitive: void 0,
    module: company_ad_exports
  },
  "routes/archive/feeds.$id": {
    id: "routes/archive/feeds.$id",
    parentId: "root",
    path: "archive/feeds/:id",
    index: void 0,
    caseSensitive: void 0,
    module: feeds_id_exports
  },
  "routes/feeds.preview.$id": {
    id: "routes/feeds.preview.$id",
    parentId: "root",
    path: "feeds/preview/:id",
    index: void 0,
    caseSensitive: void 0,
    module: feeds_preview_id_exports
  },
  "routes/policies/privacy": {
    id: "routes/policies/privacy",
    parentId: "root",
    path: "policies/privacy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_exports
  },
  "routes/custom/$company": {
    id: "routes/custom/$company",
    parentId: "root",
    path: "/:company",
    index: void 0,
    caseSensitive: void 0,
    module: company_exports
  },
  "routes/feeds.full.$id": {
    id: "routes/feeds.full.$id",
    parentId: "root",
    path: "feeds/full/:id",
    index: void 0,
    caseSensitive: void 0,
    module: feeds_full_id_exports
  },
  "routes/policies/terms": {
    id: "routes/policies/terms",
    parentId: "root",
    path: "policies/terms",
    index: void 0,
    caseSensitive: void 0,
    module: terms_exports
  },
  "routes/archive/index": {
    id: "routes/archive/index",
    parentId: "root",
    path: "archive",
    index: !0,
    caseSensitive: void 0,
    module: archive_exports
  },
  "routes/submit-post": {
    id: "routes/submit-post",
    parentId: "root",
    path: "submit-post",
    index: void 0,
    caseSensitive: void 0,
    module: submit_post_exports
  },
  "routes/feeds.$id": {
    id: "routes/feeds.$id",
    parentId: "root",
    path: "feeds/:id",
    index: void 0,
    caseSensitive: void 0,
    module: feeds_id_exports2
  },
  "routes/media-kit": {
    id: "routes/media-kit",
    parentId: "root",
    path: "media-kit",
    index: void 0,
    caseSensitive: void 0,
    module: media_kit_exports
  },
  "routes/subscribe": {
    id: "routes/subscribe",
    parentId: "root",
    path: "subscribe",
    index: void 0,
    caseSensitive: void 0,
    module: subscribe_exports
  },
  "routes/thank-you": {
    id: "routes/thank-you",
    parentId: "root",
    path: "thank-you",
    index: void 0,
    caseSensitive: void 0,
    module: thank_you_exports
  },
  "routes/manager": {
    id: "routes/manager",
    parentId: "root",
    path: "manager",
    index: void 0,
    caseSensitive: void 0,
    module: manager_exports
  },
  "routes/partner": {
    id: "routes/partner",
    parentId: "root",
    path: "partner",
    index: void 0,
    caseSensitive: void 0,
    module: partner_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/feeds": {
    id: "routes/feeds",
    parentId: "root",
    path: "feeds",
    index: void 0,
    caseSensitive: void 0,
    module: feeds_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/start": {
    id: "routes/start",
    parentId: "root",
    path: "start",
    index: void 0,
    caseSensitive: void 0,
    module: start_exports
  },
  "routes/book": {
    id: "routes/book",
    parentId: "root",
    path: "book",
    index: void 0,
    caseSensitive: void 0,
    module: book_exports
  },
  "routes/link": {
    id: "routes/link",
    parentId: "root",
    path: "link",
    index: void 0,
    caseSensitive: void 0,
    module: link_exports
  },
  "routes/live": {
    id: "routes/live",
    parentId: "root",
    path: "live",
    index: void 0,
    caseSensitive: void 0,
    module: live_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
