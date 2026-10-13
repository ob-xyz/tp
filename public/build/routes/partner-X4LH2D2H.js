import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  FeedFooter,
  FeedTopbar
} from "/build/_shared/chunk-DR5IGSIV.js";
import {
  AltchaWrapper
} from "/build/_shared/chunk-7DKTNVJG.js";
import {
  Form,
  Link,
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useNavigation
} from "/build/_shared/chunk-OZ7KCFHT.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/partner.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "New campaign / thepoast",
    description: "Create an ad campaign for your company or brand here."
  };
};
var OBJECTIVES = [
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
];
var ObjectiveIconSvg = (0, import_react.memo)(({ name }) => {
  const paths = {
    heart: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, void 0, false, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this),
    globe: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "12", cy: "12", r: "10" }, void 0, false, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "2", y1: "12", x2: "22", y2: "12" }, void 0, false, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" }, void 0, false, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, this),
    video: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", { x: "2", y: "4", width: "20", height: "16", rx: "3", ry: "3" }, void 0, false, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M10 9l5 3-5 3V9z" }, void 0, false, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    smartphone: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", { x: "5", y: "2", width: "14", height: "20", rx: "3", ry: "3" }, void 0, false, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "12", y1: "18", x2: "12.01", y2: "18", strokeWidth: "3" }, void 0, false, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    shopping_bag: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }, void 0, false, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "3", y1: "6", x2: "21", y2: "6" }, void 0, false, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 143,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M16 10a4 4 0 0 1-8 0" }, void 0, false, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    megaphone: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M3 11l18-5v12L3 13v-2z" }, void 0, false, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6" }, void 0, false, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this)
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: paths[name] }, void 0, false, {
    fileName: "app/routes/partner.tsx",
    lineNumber: 156,
    columnNumber: 5
  }, this);
});
ObjectiveIconSvg.displayName = "ObjectiveIconSvg";
var BUDGET_OPTIONS = [
  { value: "$1,500 - $3,000", label: "$1,500 \u2013 $3,000" },
  { value: "$3,000 - $7,500", label: "$3,000 \u2013 $7,500" },
  { value: "$7,500 - $15,000", label: "$7,500 \u2013 $15,000" },
  { value: "$15,000+", label: "$15,000+" }
];
function Partner() {
  var _a, _b;
  const actionData = useActionData();
  const errors = (_a = actionData == null ? void 0 : actionData.fieldErrors) != null ? _a : {};
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";
  const [objectiveValue, setObjectiveValue] = (0, import_react.useState)(OBJECTIVES[0].value);
  const selectedObjective = (_b = OBJECTIVES.find((o) => o.value === objectiveValue)) != null ? _b : OBJECTIVES[0];
  const targetDateRef = (0, import_react.useRef)(null);
  const endDateRef = (0, import_react.useRef)(null);
  const [startDate, setStartDate] = (0, import_react.useState)("");
  const [minDate, setMinDate] = (0, import_react.useState)(void 0);
  const [campaignName, setCampaignName] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    const now = /* @__PURE__ */ new Date();
    const date = now.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    const time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
    setCampaignName((current) => current || `Campaign \u2014 ${date} \u2014 ${time}`);
  }, []);
  (0, import_react.useEffect)(() => {
    const d = /* @__PURE__ */ new Date();
    const pad = (n) => String(n).padStart(2, "0");
    setMinDate(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
  }, []);
  const openPicker = (ref) => {
    var _a2;
    if (ref.current && "showPicker" in ref.current) {
      try {
        ref.current.showPicker();
      } catch {
        ref.current.focus();
      }
    } else {
      (_a2 = ref.current) == null ? void 0 : _a2.focus();
    }
  };
  const fieldError = (name) => errors[name] ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ad-field-error", role: "alert", children: errors[name] }, void 0, false, {
    fileName: "app/routes/partner.tsx",
    lineNumber: 394,
    columnNumber: 20
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-page ad-booking-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      FeedTopbar,
      {
        showSubscribe: false,
        onSubscribe: (e) => {
          e.preventDefault();
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }
      },
      void 0,
      false,
      {
        fileName: "app/routes/partner.tsx",
        lineNumber: 398,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "ad-booking-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-badge", children: "Partner with us" }, void 0, false, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 407,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 406,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "ad-booking-form", children: [
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-form-error", role: "alert", children: actionData.error }, void 0, false, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 412,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-form-section", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group-row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "company", children: "Company" }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 418,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "company", name: "company", required: true, placeholder: "Company *" }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 419,
                columnNumber: 17
              }, this),
              fieldError("company")
            ] }, void 0, true, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 417,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "website", children: "Website" }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 423,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "website", name: "website", required: true, placeholder: "Website *" }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 424,
                columnNumber: 17
              }, this),
              fieldError("website")
            ] }, void 0, true, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 422,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 416,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group-row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", children: "Name" }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 431,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "name", name: "name", required: true, placeholder: "Name *" }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 432,
                columnNumber: 17
              }, this),
              fieldError("name")
            ] }, void 0, true, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 430,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Email" }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 436,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "email", name: "email", required: true, placeholder: "Business Email *" }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 437,
                columnNumber: 17
              }, this),
              fieldError("email")
            ] }, void 0, true, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 435,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 429,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 415,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-form-section ad-form-setup", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field ad-name-card", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "ad-section-heading", children: "Campaign Name" }, void 0, false, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 445,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                id: "campaignName",
                name: "campaignName",
                value: campaignName,
                onChange: (e) => setCampaignName(e.target.value)
              },
              void 0,
              false,
              {
                fileName: "app/routes/partner.tsx",
                lineNumber: 446,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 444,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "form-field ad-objective-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Ad Objective" }, void 0, false, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 456,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-objectives", children: OBJECTIVES.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "ad-objective", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  type: "radio",
                  name: "objective",
                  value: option.value,
                  checked: objectiveValue === option.value,
                  onChange: () => setObjectiveValue(option.value)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 460,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ad-objective-card", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ad-objective-head", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ad-objective-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ObjectiveIconSvg, { name: option.icon }, void 0, false, {
                    fileName: "app/routes/partner.tsx",
                    lineNumber: 469,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/partner.tsx",
                    lineNumber: 469,
                    columnNumber: 25
                  }, this),
                  option.label
                ] }, void 0, true, {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 468,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ad-objective-desc", children: option.description }, void 0, false, {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 472,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 467,
                columnNumber: 21
              }, this)
            ] }, option.value, true, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 459,
              columnNumber: 19
            }, this)) }, void 0, false, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 457,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-objective-detail", "aria-live": "polite", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-detail-inner", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-detail-head", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ad-detail-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ObjectiveIconSvg, { name: selectedObjective.icon }, void 0, false, {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 481,
                  columnNumber: 54
                }, this) }, void 0, false, {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 481,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ad-detail-name", children: selectedObjective.label }, void 0, false, {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 482,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 480,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ad-detail-lead", children: selectedObjective.description }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 484,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 479,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 478,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 455,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 443,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-form-section", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "ad-section-heading", children: "Schedule & Budget" }, void 0, false, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 491,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group-row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "targetDate", children: "Target Start Date" }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 494,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-date-input-wrapper", onClick: () => openPicker(targetDateRef), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: targetDateRef, type: "date", id: "targetDate", name: "targetDate", required: true, min: minDate, onChange: (e) => setStartDate(e.target.value) }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 496,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 495,
                columnNumber: 17
              }, this),
              fieldError("targetDate")
            ] }, void 0, true, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 493,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "endDate", children: "End Date (Optional)" }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 501,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-date-input-wrapper", onClick: () => openPicker(endDateRef), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: endDateRef, type: "date", id: "endDate", name: "endDate", min: startDate || minDate }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 503,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 502,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 500,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 492,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "form-field ad-budget", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Estimated Budget" }, void 0, false, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 509,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-chips", children: BUDGET_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "ad-chip", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "budget", value: option.value, defaultChecked: option.value === BUDGET_OPTIONS[0].value }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 513,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: option.label }, void 0, false, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 514,
                columnNumber: 21
              }, this)
            ] }, option.value, true, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 512,
              columnNumber: 19
            }, this)) }, void 0, false, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 510,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 508,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 490,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "nonce", className: "hp-field", tabIndex: -1, autoComplete: "off" }, void 0, false, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 521,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "ad-submit-btn", disabled: submitting, children: submitting ? "Submitting Request..." : "Submit Booking Request" }, void 0, false, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 523,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ad-form-section ad-form-submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "subscribe-altcha", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AltchaWrapper, {}, void 0, false, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 529,
            columnNumber: 15
          }, this),
          fieldError("altcha")
        ] }, void 0, true, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 528,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 527,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 410,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "feed-legal", children: [
        "By submitting, you agree to our",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/terms", children: "terms" }, void 0, false, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 536,
          columnNumber: 15
        }, this),
        " &",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies/privacy", children: "privacy" }, void 0, false, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 537,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 534,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 405,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeedFooter, {}, void 0, false, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 541,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partner.tsx",
    lineNumber: 397,
    columnNumber: 5
  }, this);
}
export {
  Partner as default,
  meta
};
//# sourceMappingURL=/build/routes/partner-X4LH2D2H.js.map
