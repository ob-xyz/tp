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
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/style/global/global.css
var global_default = "/build/_assets/global-HCG4UKEX.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/png"
  },
  {
    rel: "stylesheet",
    href: global_default
  }
], meta = () => ({
  charset: "utf-8",
  title: "The Poast : You're all caught up",
  description: "Powerful people, and posts. Plus, a side of snarky comments. Get it delivered to your inbox daily, or just visit us here",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "color-scheme", content: "light dark" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
          lineNumber: 42,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
          lineNumber: 47,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/routes/policies/privacy.tsx
var privacy_exports = {};
__export(privacy_exports, {
  default: () => Index,
  links: () => links2
});
var import_react4 = require("@remix-run/react"), import_react5 = require("react");

// public/img/ja.png
var ja_default = "/build/_assets/ja-F6YGEZHL.png";

// app/style/scss/components/showscroll.css
var showscroll_default = "/build/_assets/showscroll-FNF7IES6.css";

// app/components/footer.tsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "footer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: "Home" }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/policies/terms", children: "Terms and Conditions" }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 12,
      columnNumber: 10
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this);
}

// app/routes/policies/privacy.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: showscroll_default }
];
function Index() {
  let [showStickyNav, setShowStickyNav] = (0, import_react5.useState)(!1);
  return (0, import_react5.useEffect)(() => {
    let handleScroll = () => {
      window.scrollY > 50 ? setShowStickyNav(!0) : setShowStickyNav(!1);
    };
    return handleScroll(), window.addEventListener("scroll", handleScroll, { passive: !0 }), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "content-privacy", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `sticky-nav${showStickyNav ? " visible" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { className: "sticky-logo", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "img",
        {
          src: ja_default,
          alt: "The Poast",
          loading: "lazy",
          decoding: "async"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 38,
          columnNumber: 46
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/subscribe", className: "sticky-subscribe", children: "Subscribe" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: ja_default, alt: "The Poast Logo" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "content-privacy2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Privacy Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 52,
          columnNumber: 41
        }, this),
        "Effective: April 5, 2025."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "The Poast respects your privacy and values your trust. This Privacy Policy (\u201CPolicy\u201D) describes how we collect and use your information and explains your rights and options. This Policy applies to these services (which we call the \u201CServices\u201D in this Policy):" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "websites, the The Poast Store, paid products" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "newsletters and other disseminated content" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "merchandise, mobile apps and related social media pages" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "anywhere else we gather information about you and refer to this Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "This Policy is grouped into these sections:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "about us and this Policy;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "information we collect" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "how we use information, including for advertising purposes;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "when we disclose information to other parties, including for advertising purposes; and" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "your rights and how to exercise them." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
        "We encourage you to read this Policy carefully. If you have questions, please contact us at ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 68,
          columnNumber: 104
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "1. About This Policy And Us" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(a)Who we are" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "The Poast, Inc. (\u201CThe Poast,\u201D \u201Cwe\u201D, \u201Cour\u201D or \u201Cus\u201D) operates the Services. This Policy supplements and is governed by our Terms of Service (\u201CTerms\u201D). Capitalized terms used but not defined in this Policy are defined in our Terms. The Terms describe how the Services work in general and its conditions and requirements of use." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(b) When this Policy applies" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "This Policy applies when you use the Services, effective as of the Last Updated date above. By using or accessing the Services, you signify that you have read, understand and agree to be bound by this Policy and the Terms." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Because the Services change often, this Policy may change over time. Anytime we modify the Policy, we will post a revised version on the Services and update the Last Updated date above. If you have given us your contact information, we will notify you before any material changes take effect, so you have time to review them." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Certain parts of the Services work differently, and some information falls outside this Policy:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Certain parts of the Services may have additional terms and privacy disclosures that supplement this Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "The Services may contain links to and from third-party websites and services. This Policy doesn\u2019t apply to outside of our Services. See Third Party Services to learn more." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
          "If you are a current or former employee or contractor of ours, this Policy does not apply to you. You may contact us about your privacy practices and rights at ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 79,
            columnNumber: 175
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "If we receive your information in our role as a service provider to another business, our agreement with that business governs our use of your information. We will refer any questions or concerns of yours to that business." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(c) Location-specific sections" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
        "The Services operates from the United States, but this Policy applies worldwide. Our practices generally do not differ based on your location, but your rights and choices depend in part on the law where you live. For example, you may have rights under: (1) \u201CGDPR\u201D: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "THE EU GENERAL DATA PROTECTION REGULATION (EU) 2016/679, AND THE UK GENERAL DATA PROTECTION REGULATION (UK GDPR) AS TAILORED BY THE DATA PROTECTION ACT 2018" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 83,
          columnNumber: 277
        }, this),
        "; or (2) \u201CCCPA\u201D: the California Consumer Privacy Act, as amended."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "As a result, certain sections of this Policy apply to you only if you reside in a particular location:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Residents of jurisdictions where GDPR applies \u2013 such as U.K., EU and Swiss residents \u2013 should consult the Rights under GDPR and International Data Transfers sections." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Residents of Mexico should consult the Aviso de Privacidad addendum." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Canadian residents should consult the Canadian users section." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "California residents should consult the Rights under California law section. If you reside in a U.S. jurisdiction that has enacted a data privacy law similar to CCPA or GDPR, we extend the same rights CCPA grants to California residents to you, except where we specify otherwise." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
        "If those sections apply to you, they override any contrary descriptions elsewhere in the Policy as they relate to you. Please contact us at ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 91,
          columnNumber: 152
        }, this),
        " if you have questions about your rights under other data privacy laws."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(a) Information you provide" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "You may use the Services without providing any information about yourself. However, to use some aspects of the Services, we will need information about you, such as if you:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Purchase our Offerings or services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Contact or communicate with us" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Subscribe or opt-in to our newsletters, alerts, or other communications" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Participate in a contest or promotion or redeem a prize" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Information you provide may include your name or email address (\u201Cpersonal identifiers\u201D)." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We generally don\u2019t collect (or want!) your sensitive information, and we strive to limit the amount of sensitive personal information we collect." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "For instance, make a purchase through our Services, your payment information, like your full credit card number and any payment-related security information, is only collected and processed by our payment processor." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "In the event you provide sensitive personal information to us, we use it only for our operational business purposes, and we do not disclose it to others for any other purpose." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(b) Information collected when you use the Services" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "As you use the Services, cookies and other technology we use will generate technical data about which features you use, how you use them and the devices you use to access our services. This information may include:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "\u201CCommercial Information\u201D about your orders of Offerings or other products or services from us and interactions with The Poast Store products." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "\u201CDevice Information\u201D related to the device you use to interact with the Services, such as your device\u2019s IP address, advertising IDs (resettable, random numbers, such as the device\u2019s Apple IDFA or Android Advertising ID), its browser and operating system, its internet service provider, and its configuration." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "\u201CInternet Activity\u201D related to your use of the Services, such as the pages you visit, the sites you use before or after visiting ours, your actions within the Services, the content or advertisements you interact with, general geolocation information, time stamps and performance logs and reports." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "MANAGING COOKIES AND SIMILAR TECHNOLOGIES: WHEN YOU FIRST VISIT OUR SERVICES, AND PERIODICALLY THEREAFTER, YOU WILL BE PRESENTED WITH A COOKIE BANNER PROVIDING YOU WITH INFORMATION ABOUT THE COOKIES AND SIMILAR TRACKING TECHNOLOGIES WE USE. FOR COOKIES THAT ARE NOT STRICTLY NECESSARY FOR THE FUNCTIONING OF OUR SERVICES, WE WILL REQUEST YOUR EXPLICIT CONSENT BEFORE PLACING THEM ON YOUR DEVICE. OUR COOKIE BANNER ALLOWS YOU TO:" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 112,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "ACCEPT ALL COOKIES;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 113,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "REJECT ALL NON-ESSENTIAL COOKIES; OR" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 114,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "CUSTOMIZE YOUR PREFERENCES AND CONSENT TO SPECIFIC CATEGORIES OF COOKIES." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "PREFERENCES FOR NON-ESSENTIAL COOKIES ARE NOT PRE-SELECTED. YOU CAN WITHDRAW OR CHANGE YOUR CONSENT AT ANY TIME." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(c) Information we generate" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We infer new information from other data we collect, including using automated means to generate information about your likely preferences or other characteristics (\u201Cinferences\u201D)." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(2) How We Use Your Information" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We use each of the categories of personal information described above for the following business and commercial purposes. The activities below can involve outside companies, agents or contractors (\u201Cservice providers\u201D) to whom we disclose your information for these purposes (discussed further below in Section 4)." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(a)To provide our content, services and products to you" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Deliver content you request" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Provide you with customer support and respond to your requests" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Complete your orders" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Communicate with you about our services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(b)To manage your subscriptions or fulfill product orders" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Manage your content subscriptions" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Deliver and process payments for Offerings you order" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(c) To improve our services and develop new ones" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Administer focus groups, market studies and surveys" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Review interactions with customer teams to improve our quality of service" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Develop new content and services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 138,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(d)To allow personalized ads and create audiences for third-party advertisers" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Administer sweepstakes, contests, discounts or other offers" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Gather data and work with third parties to show you personalized ads on behalf of advertisers" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 143,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Perform and measure the effectiveness of advertising campaigns on our services and marketing campaigns off of the Services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Communicate with you about products or services that we believe may interest you" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 145,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "OUR PERSONALIZED ADVERTISING ACTIVITIES RELY ON YOUR PRIOR CONSENT FOR THE USE OF RELEVANT COOKIES AND TRACKING TECHNOLOGIES, AND FOR THE SHARING OF YOUR INFORMATION WITH ADVERTISING PARTNERS FOR THESE PURPOSES." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 146,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(e) To prevent, detect and fight fraud and other illegal or unauthorized activities" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Find and address ongoing, suspected or alleged violations of our Terms" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 150,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Retain data related to violations of our Terms to prevent against recurrences" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 151,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Enforce or exercise our rights; for example, those in our Terms" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 152,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(f)To create broader findings with aggregate and deidentified data" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Aggregate or deidentify information so that it can no longer identify you, as defined under applicable laws." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 156,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Better understand and represent our users using deidentified data, such as to measure ad performance, create advertising interest-based segments or compile survey results." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 157,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(g) To ensure legal compliance" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Verify copyright or IP claims" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 161,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Comply with legal requirements" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Assist law enforcement" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(h) Purposes" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We rely on the following purposes to collect and use your information as described in this Policy:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "Commercial purposes" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 168,
            columnNumber: 15
          }, this),
          ": At times, the reason we process your information is to advance your economic interests or our economic interests. These purposes include performing the contract that you have with us, as embodied by our Terms, which advance our economic interests and yours. For instance, if you order products from us, we use your information to complete your payment and provide your product to you."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 168,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "Business purposes" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 169,
            columnNumber: 15
          }, this),
          ": Most often, we process your information for operational reasons, in a reasonably necessary and proportionate manner (i.e., for business purposes under CCPA). For instance, we analyze users\u2019 behavior on our services to continuously improve our offerings, we suggest content we think might interest you and promote our own services, we process information to help keep our members safe and we process data where necessary to enforce our rights, assist law enforcement and enable us to defend ourselves in the event of a legal action."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "Comply with applicable laws and regulations" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 170,
            columnNumber: 15
          }, this),
          ": We also process your information where it is necessary for us to comply with applicable laws and regulations and evidence our compliance with applicable laws and regulations. For example, we retain traffic data and data about transactions in line with our accounting, tax and other statutory data retention obligations and to be able to respond to valid access requests from law enforcement."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 170,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "Consent" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 171,
            columnNumber: 15
          }, this),
          ": From time to time, we may ask for your consent to collect specific information, such as your precise geolocation, or use your information for certain specific reasons, like providing your email address or phone number for direct marketing purposes, or for the use of certain types of cookies for personalized advertising. In general, you may withdraw your consent by changing your settings (such as browser or device settings) or following instructions provided with information we send you on a consent basis (such as clicking \u2018unsubscribe\u2019 in any email we send you). You may always withdraw your consent at any time \u2013 just contact us at ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 171,
            columnNumber: 670
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 171,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 174,
      columnNumber: 3
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/policies/privacy.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/policies/terms.tsx
var terms_exports = {};
__export(terms_exports, {
  default: () => Index2,
  links: () => links3
});
var import_react6 = require("@remix-run/react"), import_react7 = require("react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), links3 = () => [
  { rel: "stylesheet", href: showscroll_default }
];
function Index2() {
  let [showStickyNav, setShowStickyNav] = (0, import_react7.useState)(!1);
  return (0, import_react7.useEffect)(() => {
    let handleScroll = () => {
      window.scrollY > 50 ? setShowStickyNav(!0) : setShowStickyNav(!1);
    };
    return handleScroll(), window.addEventListener("scroll", handleScroll, { passive: !0 }), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "content-privacy", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `sticky-nav${showStickyNav ? " visible" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Link, { className: "sticky-logo", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "img",
        {
          src: ja_default,
          alt: "The Poast",
          loading: "lazy",
          decoding: "async"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 38,
          columnNumber: 46
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Link, { to: "/subscribe", className: "sticky-subscribe", children: "Subscribe" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Link, { to: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: ja_default, alt: "The Poast Logo" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "content-privacy2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Terms and Conditions." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 52,
          columnNumber: 47
        }, this),
        "Effective: April 5, 2025."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "The Poast respects your privacy and values your trust. This Privacy Policy (\u201CPolicy\u201D) describes how we collect and use your information and explains your rights and options. This Policy applies to these services (which we call the \u201CServices\u201D in this Policy):" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "websites, the The Poast Store, paid products" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "newsletters and other disseminated content" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "merchandise, mobile apps and related social media pages" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "anywhere else we gather information about you and refer to this Policy." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "This Policy is grouped into these sections:" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "about us and this Policy;" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "information we collect" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "how we use information, including for advertising purposes;" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "when we disclose information to other parties, including for advertising purposes; and" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "your rights and how to exercise them." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
        "We encourage you to read this Policy carefully. If you have questions, please contact us at ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 68,
          columnNumber: 104
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "1. About This Policy And Us" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(a)Who we are" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "The Poast, Inc. (\u201CThe Poast,\u201D \u201Cwe\u201D, \u201Cour\u201D or \u201Cus\u201D) operates the Services. This Policy supplements and is governed by our Terms of Service (\u201CTerms\u201D). Capitalized terms used but not defined in this Policy are defined in our Terms. The Terms describe how the Services work in general and its conditions and requirements of use." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(b) When this Policy applies" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "This Policy applies when you use the Services, effective as of the Last Updated date above. By using or accessing the Services, you signify that you have read, understand and agree to be bound by this Policy and the Terms." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Because the Services change often, this Policy may change over time. Anytime we modify the Policy, we will post a revised version on the Services and update the Last Updated date above. If you have given us your contact information, we will notify you before any material changes take effect, so you have time to review them." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Certain parts of the Services work differently, and some information falls outside this Policy:" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Certain parts of the Services may have additional terms and privacy disclosures that supplement this Policy." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "The Services may contain links to and from third-party websites and services. This Policy doesn\u2019t apply to outside of our Services. See Third Party Services to learn more." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
          "If you are a current or former employee or contractor of ours, this Policy does not apply to you. You may contact us about your privacy practices and rights at ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 79,
            columnNumber: 175
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "If we receive your information in our role as a service provider to another business, our agreement with that business governs our use of your information. We will refer any questions or concerns of yours to that business." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(c) Location-specific sections" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
        "The Services operates from the United States, but this Policy applies worldwide. Our practices generally do not differ based on your location, but your rights and choices depend in part on the law where you live. For example, you may have rights under: (1) \u201CGDPR\u201D: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "THE EU GENERAL DATA PROTECTION REGULATION (EU) 2016/679, AND THE UK GENERAL DATA PROTECTION REGULATION (UK GDPR) AS TAILORED BY THE DATA PROTECTION ACT 2018" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 83,
          columnNumber: 277
        }, this),
        "; or (2) \u201CCCPA\u201D: the California Consumer Privacy Act, as amended."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "As a result, certain sections of this Policy apply to you only if you reside in a particular location:" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Residents of jurisdictions where GDPR applies \u2013 such as U.K., EU and Swiss residents \u2013 should consult the Rights under GDPR and International Data Transfers sections." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Residents of Mexico should consult the Aviso de Privacidad addendum." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Canadian residents should consult the Canadian users section." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "California residents should consult the Rights under California law section. If you reside in a U.S. jurisdiction that has enacted a data privacy law similar to CCPA or GDPR, we extend the same rights CCPA grants to California residents to you, except where we specify otherwise." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
        "If those sections apply to you, they override any contrary descriptions elsewhere in the Policy as they relate to you. Please contact us at ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 91,
          columnNumber: 152
        }, this),
        " if you have questions about your rights under other data privacy laws."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(a) Information you provide" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You may use the Services without providing any information about yourself. However, to use some aspects of the Services, we will need information about you, such as if you:" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Purchase our Offerings or services" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Contact or communicate with us" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Subscribe or opt-in to our newsletters, alerts, or other communications" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Participate in a contest or promotion or redeem a prize" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Information you provide may include your name or email address (\u201Cpersonal identifiers\u201D)." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We generally don\u2019t collect (or want!) your sensitive information, and we strive to limit the amount of sensitive personal information we collect." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "For instance, make a purchase through our Services, your payment information, like your full credit card number and any payment-related security information, is only collected and processed by our payment processor." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "In the event you provide sensitive personal information to us, we use it only for our operational business purposes, and we do not disclose it to others for any other purpose." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(b) Information collected when you use the Services" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "As you use the Services, cookies and other technology we use will generate technical data about which features you use, how you use them and the devices you use to access our services. This information may include:" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u201CCommercial Information\u201D about your orders of Offerings or other products or services from us and interactions with The Poast Store products." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u201CDevice Information\u201D related to the device you use to interact with the Services, such as your device\u2019s IP address, advertising IDs (resettable, random numbers, such as the device\u2019s Apple IDFA or Android Advertising ID), its browser and operating system, its internet service provider, and its configuration." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u201CInternet Activity\u201D related to your use of the Services, such as the pages you visit, the sites you use before or after visiting ours, your actions within the Services, the content or advertisements you interact with, general geolocation information, time stamps and performance logs and reports." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "MANAGING COOKIES AND SIMILAR TECHNOLOGIES: WHEN YOU FIRST VISIT OUR SERVICES, AND PERIODICALLY THEREAFTER, YOU WILL BE PRESENTED WITH A COOKIE BANNER PROVIDING YOU WITH INFORMATION ABOUT THE COOKIES AND SIMILAR TRACKING TECHNOLOGIES WE USE. FOR COOKIES THAT ARE NOT STRICTLY NECESSARY FOR THE FUNCTIONING OF OUR SERVICES, WE WILL REQUEST YOUR EXPLICIT CONSENT BEFORE PLACING THEM ON YOUR DEVICE. OUR COOKIE BANNER ALLOWS YOU TO:" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 112,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "ACCEPT ALL COOKIES;" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 113,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "REJECT ALL NON-ESSENTIAL COOKIES; OR" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 114,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "CUSTOMIZE YOUR PREFERENCES AND CONSENT TO SPECIFIC CATEGORIES OF COOKIES." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "PREFERENCES FOR NON-ESSENTIAL COOKIES ARE NOT PRE-SELECTED. YOU CAN WITHDRAW OR CHANGE YOUR CONSENT AT ANY TIME." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(c) Information we generate" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We infer new information from other data we collect, including using automated means to generate information about your likely preferences or other characteristics (\u201Cinferences\u201D)." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(2) How We Use Your Information" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We use each of the categories of personal information described above for the following business and commercial purposes. The activities below can involve outside companies, agents or contractors (\u201Cservice providers\u201D) to whom we disclose your information for these purposes (discussed further below in Section 4)." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(a)To provide our content, services and products to you" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Deliver content you request" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Provide you with customer support and respond to your requests" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Complete your orders" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Communicate with you about our services" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(b)To manage your subscriptions or fulfill product orders" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Manage your content subscriptions" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Deliver and process payments for Offerings you order" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(c) To improve our services and develop new ones" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Administer focus groups, market studies and surveys" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Review interactions with customer teams to improve our quality of service" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Develop new content and services" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 138,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(d)To allow personalized ads and create audiences for third-party advertisers" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Administer sweepstakes, contests, discounts or other offers" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Gather data and work with third parties to show you personalized ads on behalf of advertisers" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 143,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Perform and measure the effectiveness of advertising campaigns on our services and marketing campaigns off of the Services" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Communicate with you about products or services that we believe may interest you" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 145,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "OUR PERSONALIZED ADVERTISING ACTIVITIES RELY ON YOUR PRIOR CONSENT FOR THE USE OF RELEVANT COOKIES AND TRACKING TECHNOLOGIES, AND FOR THE SHARING OF YOUR INFORMATION WITH ADVERTISING PARTNERS FOR THESE PURPOSES." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 146,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(e) To prevent, detect and fight fraud and other illegal or unauthorized activities" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Find and address ongoing, suspected or alleged violations of our Terms" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 150,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Retain data related to violations of our Terms to prevent against recurrences" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 151,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Enforce or exercise our rights; for example, those in our Terms" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 152,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(f)To create broader findings with aggregate and deidentified data" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Aggregate or deidentify information so that it can no longer identify you, as defined under applicable laws." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 156,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Better understand and represent our users using deidentified data, such as to measure ad performance, create advertising interest-based segments or compile survey results." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 157,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(g) To ensure legal compliance" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Verify copyright or IP claims" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 161,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Comply with legal requirements" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Assist law enforcement" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(h) Purposes" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We rely on the following purposes to collect and use your information as described in this Policy:" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("u", { children: "Commercial purposes" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 168,
            columnNumber: 15
          }, this),
          ": At times, the reason we process your information is to advance your economic interests or our economic interests. These purposes include performing the contract that you have with us, as embodied by our Terms, which advance our economic interests and yours. For instance, if you order products from us, we use your information to complete your payment and provide your product to you."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 168,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("u", { children: "Business purposes" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 169,
            columnNumber: 15
          }, this),
          ": Most often, we process your information for operational reasons, in a reasonably necessary and proportionate manner (i.e., for business purposes under CCPA). For instance, we analyze users\u2019 behavior on our services to continuously improve our offerings, we suggest content we think might interest you and promote our own services, we process information to help keep our members safe and we process data where necessary to enforce our rights, assist law enforcement and enable us to defend ourselves in the event of a legal action."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("u", { children: "Comply with applicable laws and regulations" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 170,
            columnNumber: 15
          }, this),
          ": We also process your information where it is necessary for us to comply with applicable laws and regulations and evidence our compliance with applicable laws and regulations. For example, we retain traffic data and data about transactions in line with our accounting, tax and other statutory data retention obligations and to be able to respond to valid access requests from law enforcement."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 170,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("u", { children: "Consent" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 171,
            columnNumber: 15
          }, this),
          ": From time to time, we may ask for your consent to collect specific information, such as your precise geolocation, or use your information for certain specific reasons, like providing your email address or phone number for direct marketing purposes, or for the use of certain types of cookies for personalized advertising. In general, you may withdraw your consent by changing your settings (such as browser or device settings) or following instructions provided with information we send you on a consent basis (such as clicking \u2018unsubscribe\u2019 in any email we send you). You may always withdraw your consent at any time \u2013 just contact us at ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 171,
            columnNumber: 670
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 171,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 174,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/policies/terms.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/confirm.tsx
var confirm_exports = {};
__export(confirm_exports, {
  default: () => Confirm
});
var import_react8 = require("@remix-run/react");

// public/img/ja6.png
var ja6_default = "/build/_assets/ja6-UFKBF2CN.png";

// app/routes/confirm.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Confirm() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "nav", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Link, { to: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: ja_default, alt: "The Poast Logo" }, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { style: { fontSize: 52 }, children: "\u2713" }, void 0, !1, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { style: { fontSize: 30, textAlign: "center" }, children: "Welcome back to The Poast" }, void 0, !1, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 18,
        columnNumber: 57
      }, this),
      "Thanks for giving us a second shot :)"
    ] }, void 0, !0, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 19,
        columnNumber: 56
      }, this),
      "Expect our fast feed in your inbox every day. It stitches together the best business-minded news, posts, and snarky comments from across the web. You can check out the latest issue ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Link, { to: "/live", children: "here \u2192" }, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 19,
        columnNumber: 243
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 19,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 20,
        columnNumber: 57
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("em", { children: `P.S. If you don't receive an email, please check your spam or promotions folder and "move us" to your primary inbox to ensure you get The Poast each day.` }, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 20,
        columnNumber: 63
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 21,
        columnNumber: 57
      }, this),
      "See you soon!"
    ] }, void 0, !0, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 22,
        columnNumber: 57
      }, this),
      "\u2014The Poast",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 22,
        columnNumber: 73
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 22,
        columnNumber: 79
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 22,
        columnNumber: 85
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 22,
        columnNumber: 91
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { className: "headerimg", src: ja6_default, alt: "The Poast" }, void 0, !1, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/confirm.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/confirm.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index3,
  links: () => links4,
  loader: () => loader
});
var import_react10 = require("react"), import_react11 = require("@remix-run/react"), import_node = require("@remix-run/node");

// app/components/altcha.tsx
var import_react9 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function AltchaWrapper() {
  let [isMounted, setIsMounted] = (0, import_react9.useState)(!1);
  return (0, import_react9.useEffect)(() => {
    setIsMounted(!0), import("altcha").catch((err) => console.error("Altcha load error:", err));
  }, []), isMounted ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { height: "80px" } }, void 0, !1, {
    fileName: "app/components/altcha.tsx",
    lineNumber: 23,
    columnNumber: 12
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), links4 = () => [
  { rel: "stylesheet", href: showscroll_default },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
], LIVE_CAMPAIGN_ID = 1, CONTENT_TTL_MS = 30 * 1e3, cachedIssue = null;
function issueResponse(issue) {
  return (0, import_node.json)(
    { issue },
    {
      headers: {
        "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=86400"
      }
    }
  );
}
async function fetchWithTimeout(url, options, timeout = 3e3) {
  let controller = new AbortController(), timeoutId = setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}
async function fetchCampaignPreviewHtml(id, headers) {
  let response = await fetchWithTimeout(
    `https://app.thepoast.com/api/campaigns/${id}/preview`,
    { headers },
    3e3
  );
  return response && response.ok ? await response.text() : "";
}
function formatGoDate(date, layout) {
  let pad = (value) => String(value).padStart(2, "0"), monthNamesLong = [
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
  ], monthNamesShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], weekdayLong = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ], weekdayShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate(), weekday = date.getDay(), tokens = [
    ["Monday", weekdayLong[weekday]],
    ["January", monthNamesLong[month - 1]],
    ["2006", String(year)],
    ["Mon", weekdayShort[weekday]],
    ["Jan", monthNamesShort[month - 1]],
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
function prepareIssueHtml(html = "", referenceDate) {
  if (!html)
    return "";
  let resolved = resolveTemplateTags(html, referenceDate), injected = `
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
      img, table, td, th {
        max-width: 100% !important;
      }
      img {
        height: auto !important;
      }
      .footer {
        display: none !important;
      }
    </style>
  `;
  return /<head[^>]*>/i.test(resolved) ? resolved.replace(/<head[^>]*>/i, (match) => `${match}${injected}`) : /<html[^>]*>/i.test(resolved) ? resolved.replace(
    /<html([^>]*)>/i,
    (match, attrs) => `<html${attrs}><head>${injected}</head>`
  ) : `<head>${injected}</head>${resolved}`;
}
async function loader({ request }) {
  let now = /* @__PURE__ */ new Date(), username = process.env.LISTMONK_USERNAME, token = process.env.LISTMONK_TOKEN;
  if (!username || !token)
    return issueResponse((cachedIssue == null ? void 0 : cachedIssue.data) ?? null);
  let checkNow = Date.now();
  if (cachedIssue && checkNow - cachedIssue.timestamp < CONTENT_TTL_MS)
    return issueResponse(cachedIssue.data);
  let previewHeaders = { Authorization: `Basic ${Buffer.from(`${username}:${token}`).toString("base64")}`, Accept: "text/html" }, body = await fetchCampaignPreviewHtml(
    LIVE_CAMPAIGN_ID,
    previewHeaders
  );
  if (!body)
    return issueResponse((cachedIssue == null ? void 0 : cachedIssue.data) ?? null);
  let issue = {
    id: LIVE_CAMPAIGN_ID,
    subject: "Today's Edition",
    date: now.toISOString(),
    body: prepareIssueHtml(body, now)
  };
  return cachedIssue = { data: issue, timestamp: checkNow }, issueResponse(issue);
}
function FeedEmbed({ html, title }) {
  let iframeRef = (0, import_react10.useRef)(null), [loaded, setLoaded] = (0, import_react10.useState)(!1);
  return (0, import_react10.useEffect)(() => {
    let frame = iframeRef.current;
    if (!frame)
      return;
    let updateHeight = () => {
      var _a, _b;
      let doc2 = frame.contentDocument;
      if (doc2) {
        let height = Math.max(
          ((_a = doc2.documentElement) == null ? void 0 : _a.scrollHeight) || 0,
          ((_b = doc2.body) == null ? void 0 : _b.scrollHeight) || 0
        );
        height > 0 && (frame.style.height = `${height}px`, setLoaded(!0));
      }
    };
    updateHeight();
    let doc = frame.contentDocument;
    if (doc && (doc.addEventListener("DOMContentLoaded", updateHeight), doc.body && typeof ResizeObserver < "u")) {
      let observer = new ResizeObserver(updateHeight);
      return observer.observe(doc.body), () => observer.disconnect();
    }
  }, [html]), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: `feed-embed${loaded ? " loaded" : ""}`, children: [
    !loaded && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "feed-skeleton", style: { minHeight: "400px" } }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 296,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "iframe",
      {
        ref: iframeRef,
        srcDoc: html,
        title,
        onLoad: () => {
          var _a, _b;
          let frame = iframeRef.current;
          if (frame != null && frame.contentDocument) {
            let height = Math.max(
              ((_a = frame.contentDocument.documentElement) == null ? void 0 : _a.scrollHeight) || 0,
              ((_b = frame.contentDocument.body) == null ? void 0 : _b.scrollHeight) || 0
            );
            height > 0 && (frame.style.height = `${height}px`);
          }
          setLoaded(!0);
        },
        loading: "eager",
        sandbox: "allow-same-origin allow-popups allow-popups-to-escape-sandbox",
        scrolling: "no"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 298,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 295,
    columnNumber: 5
  }, this);
}
function Index3() {
  let { issue } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("header", { className: "feed-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react11.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "img",
        {
          src: "/img/ja.png",
          alt: "The Poast",
          loading: "eager",
          decoding: "async"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 332,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 331,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "#subscribe", className: "feed-subscribe", children: "Subscribe" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 340,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 330,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { className: "feed-stream", children: issue ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(FeedEmbed, { html: issue.body, title: issue.subject }, issue.id, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 347,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "feed-empty", children: "Check back soon for today\u2019s edition." }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 349,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 345,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("footer", { className: "feed-footer", id: "subscribe", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "form",
      {
        method: "post",
        action: "https://app.thepoast.com/subscription/form",
        className: "feed-subscribe-form",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "feed-subscribe-heading", children: "Get The Poast for free" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 359,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "feed-input-bar", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "input",
              {
                className: "feed-input email-input",
                type: "email",
                name: "email",
                required: !0,
                placeholder: "Email Address *"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 362,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "feed-submit", type: "submit", children: "Subscribe" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 369,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 361,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 375,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 374,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
              lineNumber: 378,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 384,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "feed-legal", children: [
            "By submitting, you agree to our",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react11.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 388,
              columnNumber: 13
            }, this),
            " &",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react11.Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 389,
              columnNumber: 13
            }, this),
            "."
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 386,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 354,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 353,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 329,
    columnNumber: 5
  }, this);
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => Index4,
  links: () => links5,
  loader: () => loader2
});
var import_react12 = require("react"), import_react13 = require("@remix-run/react"), import_node2 = require("@remix-run/node");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links5 = () => [
  { rel: "stylesheet", href: showscroll_default },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
], LIVE_CAMPAIGN_ID2 = 1, CONTENT_TTL_MS2 = 30 * 1e3, cachedIssue2 = null;
function issueResponse2(issue, isDraft = !0) {
  return (0, import_node2.json)(
    { issue, isDraft },
    {
      headers: {
        "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=86400"
      }
    }
  );
}
async function fetchWithTimeout2(url, options, timeout = 3e3) {
  let controller = new AbortController(), timeoutId = setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}
async function fetchCampaignPreviewHtml2(id, headers) {
  let response = await fetchWithTimeout2(
    `https://app.thepoast.com/api/campaigns/${id}/preview`,
    { headers },
    3e3
  );
  return response && response.ok ? await response.text() : "";
}
function formatGoDate2(date, layout) {
  let pad = (value) => String(value).padStart(2, "0"), monthNamesLong = [
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
  ], monthNamesShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], weekdayLong = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ], weekdayShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate(), weekday = date.getDay(), tokens = [
    ["Monday", weekdayLong[weekday]],
    ["January", monthNamesLong[month - 1]],
    ["2006", String(year)],
    ["Mon", weekdayShort[weekday]],
    ["Jan", monthNamesShort[month - 1]],
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
function resolveTemplateTags2(html, referenceDate) {
  return html.replace(
    /\{\{\s*Date\s+"([^"]*)"\s*\}\}/gi,
    (_match, layout) => {
      try {
        return formatGoDate2(referenceDate, layout);
      } catch {
        return "";
      }
    }
  ).replace(/\{\{[\s\S]*?\}\}/g, "");
}
function prepareIssueHtml2(html = "", referenceDate) {
  if (!html)
    return "";
  let resolved = resolveTemplateTags2(html, referenceDate), injected = `
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
      img, table, td, th {
        max-width: 100% !important;
      }
      img {
        height: auto !important;
      }
      .footer {
        display: none !important;
      }
    </style>
  `;
  return /<head[^>]*>/i.test(resolved) ? resolved.replace(/<head[^>]*>/i, (match) => `${match}${injected}`) : /<html[^>]*>/i.test(resolved) ? resolved.replace(
    /<html([^>]*)>/i,
    (match, attrs) => `<html${attrs}><head>${injected}</head>`
  ) : `<head>${injected}</head>${resolved}`;
}
async function loader2({ request }) {
  let now = /* @__PURE__ */ new Date(), username = process.env.LISTMONK_USERNAME, token = process.env.LISTMONK_TOKEN;
  if (!username || !token)
    return issueResponse2((cachedIssue2 == null ? void 0 : cachedIssue2.data) ?? null, !0);
  let checkNow = Date.now();
  if (cachedIssue2 && checkNow - cachedIssue2.timestamp < CONTENT_TTL_MS2)
    return issueResponse2(cachedIssue2.data, !0);
  let previewHeaders = { Authorization: `Basic ${Buffer.from(`${username}:${token}`).toString("base64")}`, Accept: "text/html" }, body = await fetchCampaignPreviewHtml2(
    LIVE_CAMPAIGN_ID2,
    previewHeaders
  );
  if (!body)
    return issueResponse2((cachedIssue2 == null ? void 0 : cachedIssue2.data) ?? null, !0);
  let issue = {
    id: LIVE_CAMPAIGN_ID2,
    subject: "Today's Edition",
    date: now.toISOString(),
    body: prepareIssueHtml2(body, now)
  };
  return cachedIssue2 = { data: issue, timestamp: checkNow }, issueResponse2(issue, !0);
}
function FeedEmbed2({ html, title }) {
  let iframeRef = (0, import_react12.useRef)(null), [loaded, setLoaded] = (0, import_react12.useState)(!1);
  return (0, import_react12.useEffect)(() => {
    let frame = iframeRef.current;
    if (!frame)
      return;
    let updateHeight = () => {
      var _a, _b;
      let doc2 = frame.contentDocument;
      if (doc2) {
        let height = Math.max(
          ((_a = doc2.documentElement) == null ? void 0 : _a.scrollHeight) || 0,
          ((_b = doc2.body) == null ? void 0 : _b.scrollHeight) || 0
        );
        height > 0 && (frame.style.height = `${height}px`, setLoaded(!0));
      }
    };
    updateHeight();
    let doc = frame.contentDocument;
    if (doc && (doc.addEventListener("DOMContentLoaded", updateHeight), doc.body && typeof ResizeObserver < "u")) {
      let observer = new ResizeObserver(updateHeight);
      return observer.observe(doc.body), () => observer.disconnect();
    }
  }, [html]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: `feed-embed${loaded ? " loaded" : ""}`, children: [
    !loaded && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "feed-skeleton", style: { minHeight: "400px" } }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 297,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "iframe",
      {
        ref: iframeRef,
        srcDoc: html,
        title,
        onLoad: () => {
          var _a, _b;
          let frame = iframeRef.current;
          if (frame != null && frame.contentDocument) {
            let height = Math.max(
              ((_a = frame.contentDocument.documentElement) == null ? void 0 : _a.scrollHeight) || 0,
              ((_b = frame.contentDocument.body) == null ? void 0 : _b.scrollHeight) || 0
            );
            height > 0 && (frame.style.height = `${height}px`);
          }
          setLoaded(!0);
        },
        loading: "eager",
        sandbox: "allow-same-origin allow-popups allow-popups-to-escape-sandbox",
        scrolling: "no"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/$.tsx",
        lineNumber: 299,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/$.tsx",
    lineNumber: 296,
    columnNumber: 5
  }, this);
}
function Index4() {
  let { issue, isDraft } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("header", { className: "feed-topbar", children: [
      isDraft && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "feed-status", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "status-dot" }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 334,
          columnNumber: 13
        }, this),
        "404 Error"
      ] }, void 0, !0, {
        fileName: "app/routes/$.tsx",
        lineNumber: 333,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react13.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "img",
        {
          src: "/img/ja.png",
          alt: "The Poast",
          loading: "eager",
          decoding: "async"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/$.tsx",
          lineNumber: 339,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 338,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("a", { href: "#subscribe", className: "feed-subscribe", children: "Subscribe" }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 347,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$.tsx",
      lineNumber: 331,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { className: "feed-stream", children: issue ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(FeedEmbed2, { html: issue.body, title: issue.subject }, issue.id, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 354,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "feed-empty", children: "Check back soon for today\u2019s edition." }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 356,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 352,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("footer", { className: "feed-footer", id: "subscribe", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "form",
      {
        method: "post",
        action: "https://app.thepoast.com/subscription/form",
        className: "feed-subscribe-form",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "feed-subscribe-heading", children: "Get The Poast for free" }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 366,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "feed-input-bar", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "input",
              {
                className: "feed-input email-input",
                type: "email",
                name: "email",
                required: !0,
                placeholder: "Email Address *"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/$.tsx",
                lineNumber: 369,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { className: "feed-submit", type: "submit", children: "Subscribe" }, void 0, !1, {
              fileName: "app/routes/$.tsx",
              lineNumber: 376,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/$.tsx",
            lineNumber: 368,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 382,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 381,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
              fileName: "app/routes/$.tsx",
              lineNumber: 385,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 391,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "feed-legal", children: [
            "By submitting, you agree to our",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react13.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
              fileName: "app/routes/$.tsx",
              lineNumber: 395,
              columnNumber: 13
            }, this),
            " &",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react13.Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, !1, {
              fileName: "app/routes/$.tsx",
              lineNumber: 396,
              columnNumber: 13
            }, this),
            "."
          ] }, void 0, !0, {
            fileName: "app/routes/$.tsx",
            lineNumber: 393,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/$.tsx",
        lineNumber: 361,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 360,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$.tsx",
    lineNumber: 330,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-V5UHIFP6.js", imports: ["/build/_shared/chunk-2LO4XZ6N.js", "/build/_shared/chunk-IU43IUTG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-QGNUW6RM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-YPAPVPVR.js", imports: ["/build/_shared/chunk-2T7COSFO.js", "/build/_shared/chunk-MG3UHPBD.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/confirm": { id: "routes/confirm", parentId: "root", path: "confirm", index: void 0, caseSensitive: void 0, module: "/build/routes/confirm-R3KLXQUJ.js", imports: ["/build/_shared/chunk-ZFN6J3YJ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-77JT3XVP.js", imports: ["/build/_shared/chunk-2T7COSFO.js", "/build/_shared/chunk-MG3UHPBD.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/privacy": { id: "routes/policies/privacy", parentId: "root", path: "policies/privacy", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/privacy-KHFMBAS4.js", imports: ["/build/_shared/chunk-U4YCGZIA.js", "/build/_shared/chunk-ZFN6J3YJ.js", "/build/_shared/chunk-MG3UHPBD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/terms": { id: "routes/policies/terms", parentId: "root", path: "policies/terms", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/terms-UVF5E2H2.js", imports: ["/build/_shared/chunk-U4YCGZIA.js", "/build/_shared/chunk-ZFN6J3YJ.js", "/build/_shared/chunk-MG3UHPBD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "020563a9", hmr: void 0, url: "/build/manifest-020563A9.js" };

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
  "routes/policies/privacy": {
    id: "routes/policies/privacy",
    parentId: "root",
    path: "policies/privacy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_exports
  },
  "routes/policies/terms": {
    id: "routes/policies/terms",
    parentId: "root",
    path: "policies/terms",
    index: void 0,
    caseSensitive: void 0,
    module: terms_exports
  },
  "routes/confirm": {
    id: "routes/confirm",
    parentId: "root",
    path: "confirm",
    index: void 0,
    caseSensitive: void 0,
    module: confirm_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
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
