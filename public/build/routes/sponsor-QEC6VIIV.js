import {
  showscroll_default
} from "/build/_shared/chunk-MG3UHPBD.js";
import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-XXERCUYP.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-S4ZNHW4H.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// empty-module:~/db.server
var require_db = __commonJS({
  "empty-module:~/db.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/sponsor.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());

// app/style/scss/sponsor.css
var sponsor_default = "/build/_assets/sponsor-GLI4S3R4.css";

// app/routes/sponsor.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: showscroll_default },
  { rel: "stylesheet", href: sponsor_default }
];
function Sponsor() {
  const { bookedDates, cpmRate } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = (0, import_react.useState)("");
  const [currentMonth, setCurrentMonth] = (0, import_react.useState)(/* @__PURE__ */ new Date());
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDayOfWeek = new Date(year, month, 1).getDay();
  const handleDateClick = (dateStr) => {
    if (bookedDates.includes(dateStr))
      return;
    setSelectedDate(dateStr);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sponsor-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "sponsor-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Advertise on The Poast" }, void 0, false, {
        fileName: "app/routes/sponsor.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "subheading", children: "Book your sponsorship spot in our daily newsletter." }, void 0, false, {
        fileName: "app/routes/sponsor.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stats-badge", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
        "Rate: ",
        cpmRate
      ] }, void 0, true, {
        fileName: "app/routes/sponsor.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/sponsor.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sponsor.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    (actionData == null ? void 0 : actionData.success) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "success-banner", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Request Received!" }, void 0, false, {
        fileName: "app/routes/sponsor.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: actionData.message }, void 0, false, {
        fileName: "app/routes/sponsor.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sponsor.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "sponsor-grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "calendar-card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "1. Select Available Date" }, void 0, false, {
          fileName: "app/routes/sponsor.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "calendar-controls", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "button",
              onClick: () => setCurrentMonth(new Date(year, month - 1, 1)),
              children: "\u2190 Prev"
            },
            void 0,
            false,
            {
              fileName: "app/routes/sponsor.tsx",
              lineNumber: 110,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: currentMonth.toLocaleString("default", { month: "long", year: "numeric" }) }, void 0, false, {
            fileName: "app/routes/sponsor.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "button",
              onClick: () => setCurrentMonth(new Date(year, month + 1, 1)),
              children: "Next \u2192"
            },
            void 0,
            false,
            {
              fileName: "app/routes/sponsor.tsx",
              lineNumber: 119,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/sponsor.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "calendar-grid", children: [
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "calendar-header-day", children: day }, day, false, {
              fileName: "app/routes/sponsor.tsx",
              lineNumber: 129,
              columnNumber: 13
            }, this)
          ),
          Array.from({ length: startDayOfWeek }).map(
            (_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "calendar-day empty" }, `empty-${i}`, false, {
              fileName: "app/routes/sponsor.tsx",
              lineNumber: 136,
              columnNumber: 13
            }, this)
          ),
          Array.from({ length: daysInMonth }).map((_, i) => {
            const dayNum = i + 1;
            const formattedMonth = String(month + 1).padStart(2, "0");
            const formattedDay = String(dayNum).padStart(2, "0");
            const fullDateStr = `${year}-${formattedMonth}-${formattedDay}`;
            const isBooked = bookedDates.includes(fullDateStr);
            const isSelected = selectedDate === fullDateStr;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                type: "button",
                disabled: isBooked,
                className: `calendar-day ${isBooked ? "booked" : ""} ${isSelected ? "selected" : ""}`,
                onClick: () => handleDateClick(fullDateStr),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "day-number", children: dayNum }, void 0, false, {
                    fileName: "app/routes/sponsor.tsx",
                    lineNumber: 157,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "status-label", children: isBooked ? "Sold Out" : isSelected ? "Selected" : "Available" }, void 0, false, {
                    fileName: "app/routes/sponsor.tsx",
                    lineNumber: 158,
                    columnNumber: 21
                  }, this)
                ]
              },
              fullDateStr,
              true,
              {
                fileName: "app/routes/sponsor.tsx",
                lineNumber: 150,
                columnNumber: 17
              },
              this
            );
          })
        ] }, void 0, true, {
          fileName: "app/routes/sponsor.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sponsor.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "form-card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "2. Copy & Details" }, void 0, false, {
          fileName: "app/routes/sponsor.tsx",
          lineNumber: 169,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "selectedDate", value: selectedDate }, void 0, false, {
            fileName: "app/routes/sponsor.tsx",
            lineNumber: 171,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "selectedDateDisplay", children: "Selected Date *" }, void 0, false, {
              fileName: "app/routes/sponsor.tsx",
              lineNumber: 174,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                id: "selectedDateDisplay",
                type: "text",
                readOnly: true,
                value: selectedDate || "Please pick a date on the calendar",
                className: "date-display"
              },
              void 0,
              false,
              {
                fileName: "app/routes/sponsor.tsx",
                lineNumber: 175,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/sponsor.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "sponsorName", children: "Company / Sponsor Name *" }, void 0, false, {
              fileName: "app/routes/sponsor.tsx",
              lineNumber: 185,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "sponsorName", name: "sponsorName", required: true, placeholder: "Acme Inc." }, void 0, false, {
              fileName: "app/routes/sponsor.tsx",
              lineNumber: 186,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/sponsor.tsx",
            lineNumber: 184,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "sponsorEmail", children: "Email Address *" }, void 0, false, {
              fileName: "app/routes/sponsor.tsx",
              lineNumber: 190,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "sponsorEmail", name: "sponsorEmail", required: true, placeholder: "adrian@acme.com" }, void 0, false, {
              fileName: "app/routes/sponsor.tsx",
              lineNumber: 191,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/sponsor.tsx",
            lineNumber: 189,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "websiteUrl", children: "Destination URL *" }, void 0, false, {
              fileName: "app/routes/sponsor.tsx",
              lineNumber: 195,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "url", id: "websiteUrl", name: "websiteUrl", required: true, placeholder: "https://acme.com" }, void 0, false, {
              fileName: "app/routes/sponsor.tsx",
              lineNumber: 196,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/sponsor.tsx",
            lineNumber: 194,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "headline", children: "Ad Headline *" }, void 0, false, {
              fileName: "app/routes/sponsor.tsx",
              lineNumber: 200,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "headline", name: "headline", required: true, maxLength: 60, placeholder: "Catchy headline (60 chars max)" }, void 0, false, {
              fileName: "app/routes/sponsor.tsx",
              lineNumber: 201,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/sponsor.tsx",
            lineNumber: 199,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "bodyCopy", children: "Ad Copy / Body Text *" }, void 0, false, {
              fileName: "app/routes/sponsor.tsx",
              lineNumber: 205,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "bodyCopy", name: "bodyCopy", rows: 4, required: true, placeholder: "Your main pitch or text..." }, void 0, false, {
              fileName: "app/routes/sponsor.tsx",
              lineNumber: 206,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/sponsor.tsx",
            lineNumber: 204,
            columnNumber: 15
          }, this),
          (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "error-message", children: actionData.error }, void 0, false, {
            fileName: "app/routes/sponsor.tsx",
            lineNumber: 209,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "submit",
              disabled: !selectedDate || navigation.state === "submitting",
              className: "submit-btn",
              children: navigation.state === "submitting" ? "Reserving..." : "Reserve Date & Proceed"
            },
            void 0,
            false,
            {
              fileName: "app/routes/sponsor.tsx",
              lineNumber: 211,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/sponsor.tsx",
          lineNumber: 170,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sponsor.tsx",
        lineNumber: 168,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sponsor.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/sponsor.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}
export {
  Sponsor as default,
  links
};
//# sourceMappingURL=/build/routes/sponsor-QEC6VIIV.js.map
