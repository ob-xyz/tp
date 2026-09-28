import {
  info_default,
  instagram_default,
  linkedin_default,
  x_default,
  youtube_default
} from "/build/_shared/chunk-7NJXVCHU.js";
import {
  AltchaWrapper
} from "/build/_shared/chunk-RRHCSPIX.js";
import {
  ja_default
} from "/build/_shared/chunk-7UOH6UKO.js";
import {
  showscroll_default
} from "/build/_shared/chunk-MG3UHPBD.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-X32F4JRF.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/info.tsx
var import_react2 = __toESM(require_react());

// public/img/cs.jpg
var cs_default = "/build/_assets/cs-QBBA4666.jpg";

// public/img/press/ti.svg
var ti_default = "/build/_assets/ti-GQD6HYO2.svg";

// public/img/press/wsj.svg
var wsj_default = "/build/_assets/wsj-ZBZ6UMND.svg";

// public/img/press/nyt.svg
var nyt_default = "/build/_assets/nyt-FRXZQ6HS.svg";

// public/img/press/bi.svg
var bi_default = "/build/_assets/bi-7JOITYZS.svg";

// public/img/press/fastcompany.svg
var fastcompany_default = "/build/_assets/fastcompany-BG55Z2Q2.svg";

// public/img/press/bloomberg.svg
var bloomberg_default = "/build/_assets/bloomberg-JXPCHZQP.svg";

// public/img/press/cnbc.svg
var cnbc_default = "/build/_assets/cnbc-SPBWW3IW.svg";

// public/img/press/axios.svg
var axios_default = "/build/_assets/axios-6UQ7KH3D.svg";

// app/routes/info.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: showscroll_default }
];
function Index() {
  const [showStickyNav, setShowStickyNav] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "moreinfo-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `sticky-nav${showStickyNav ? " visible" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "sticky-logo", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: ja_default,
          alt: "The Poast",
          loading: "lazy",
          decoding: "async"
        },
        void 0,
        false,
        {
          fileName: "app/routes/info.tsx",
          lineNumber: 56,
          columnNumber: 46
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/info.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribe", className: "sticky-subscribe", children: "Subscribe" }, void 0, false, {
        fileName: "app/routes/info.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/info.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja_default, alt: "The Poast Logo" }, void 0, false, {
          fileName: "app/routes/info.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/info.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "info", to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: info_default, alt: "More Info" }, void 0, false, {
          fileName: "app/routes/info.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/info.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/info.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "outer-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "x", href: "https://x.com/thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: x_default, alt: "X (Twitter)" }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "ig", href: "https://instagram.com/thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: instagram_default, alt: "Instagram" }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "li", href: "https://linkedin.com/company/thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: linkedin_default, alt: "LinkedIn" }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "yt", href: "https://youtube.com/@thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: youtube_default, alt: "YouTube" }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/info.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/info.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Home" }, void 0, false, {
          fileName: "app/routes/info.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/info.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/info.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/info.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Editor-in-Chief" }, void 0, false, {
        fileName: "app/routes/info.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profile-outside", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://linkedin.com/in/chrissignore", target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              className: "headerimg",
              src: cs_default,
              alt: "It's me (Chris Signore)"
            },
            void 0,
            false,
            {
              fileName: "app/routes/info.tsx",
              lineNumber: 104,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-profile", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Chris Signore" }, void 0, false, {
              fileName: "app/routes/info.tsx",
              lineNumber: 110,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "social", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "li", href: "https://linkedin.com/in/chrissignore", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: linkedin_default, alt: "LinkedIn" }, void 0, false, {
                fileName: "app/routes/info.tsx",
                lineNumber: 113,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/info.tsx",
                lineNumber: 112,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "x", href: "https://x.com/chrissignore", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: x_default, alt: "X (Twitter)" }, void 0, false, {
                fileName: "app/routes/info.tsx",
                lineNumber: 116,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/info.tsx",
                lineNumber: 115,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/info.tsx",
              lineNumber: 111,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/info.tsx",
            lineNumber: 109,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/info.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/info.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Get The Poast for free" }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 123,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logo-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", action: "https://app.thepoast.com/subscription/form", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "text", name: "firstName", placeholder: "First Name *" }, void 0, false, {
              fileName: "app/routes/info.tsx",
              lineNumber: 127,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/info.tsx",
              lineNumber: 126,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "email", name: "email", required: true, placeholder: "Email Address *" }, void 0, false, {
                fileName: "app/routes/info.tsx",
                lineNumber: 130,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "submit", type: "submit", children: "Subscribe" }, void 0, false, {
                fileName: "app/routes/info.tsx",
                lineNumber: 131,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/info.tsx",
              lineNumber: 129,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
              fileName: "app/routes/info.tsx",
              lineNumber: 133,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, false, {
              fileName: "app/routes/info.tsx",
              lineNumber: 134,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
              fileName: "app/routes/info.tsx",
              lineNumber: 135,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/info.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/info.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/info.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/info.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-container3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "About The Poast" }, void 0, false, {
        fileName: "app/routes/info.tsx",
        lineNumber: 143,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "outer-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Every day, 500 interesting posts trend across apps like X, YouTube, Reddit, and Instagram. The Poast hunts for the top 10 business-minded ones, stitches them into a feed, then delivers it to your inbox. Sign up for free ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribe", children: "here" }, void 0, false, {
          fileName: "app/routes/info.tsx",
          lineNumber: 146,
          columnNumber: 236
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/info.tsx",
        lineNumber: 146,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/info.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/info.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/info.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-container2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Selected Press" }, void 0, false, {
        fileName: "app/routes/info.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "outer-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://wsj.com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: wsj_default, alt: "Wall Street Journal" }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 157,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 156,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://cnbc.com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: cnbc_default, alt: "CNBC" }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 160,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 159,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://bloomberg.com", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: bloomberg_default, alt: "Bloomberg" }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 163,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 162,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://fastcompany.com", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: fastcompany_default, alt: "Fast Company" }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 165,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/info.tsx",
          lineNumber: 155,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://businessinsider.com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: bi_default, alt: "Business Insider" }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 171,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 170,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://theinformation.com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ti_default, alt: "The Information" }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 174,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://nyt.com/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: nyt_default, alt: "New York Times" }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 177,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 176,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://axios.com/@", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: axios_default, alt: "Axios" }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 180,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/info.tsx",
            lineNumber: 179,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/info.tsx",
          lineNumber: 169,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/info.tsx",
        lineNumber: 154,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/info.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/info.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/info.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/info-ZU2PGERI.js.map
