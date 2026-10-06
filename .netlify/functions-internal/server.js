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
var import_react2 = require("react"), import_react3 = require("@remix-run/react"), import_react_router_dom = require("react-router-dom");

// app/style/global/global.css
var global_default = "/build/_assets/global-WY6C7D4J.css";

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
  title: "The Poast : See the good stuff",
  description: "We find the good stuff and bring it to you every day.",
  viewport: "width=device-width,initial-scale=1"
});
function ScrollToTop() {
  let { pathname, hash } = (0, import_react3.useLocation)(), navType = (0, import_react_router_dom.useNavigationType)();
  return (0, import_react2.useEffect)(() => {
    hash || navType === "POP" || window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname, hash, navType]), null;
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "color-scheme", content: "light dark" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 71,
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
          lineNumber: 72,
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
          lineNumber: 77,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "script",
        {
          type: "application/ld+json",
          dangerouslySetInnerHTML: {
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Poast",
              alternateName: ["the poast", "thepoast", "The Poast Newsletter", "thepoast.com", "the poast feed", "the poast", "poast", "poast app", "the poast app", "the poast news"],
              url: "https://thepoast.com",
              logo: "https://thepoast.com/favicon.ico",
              description: "Get caught up."
            })
          }
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 83,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollToTop, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}

// app/routes/feeds.preview.$id.tsx
var feeds_preview_id_exports = {};
__export(feeds_preview_id_exports, {
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
  let headers9 = getAuthHeaders(accept), lastError;
  for (let attempt = 0; attempt < attempts; attempt++) {
    let controller = new AbortController(), timer = setTimeout(() => controller.abort(), timeoutMs), fatal = !1;
    try {
      let res = await fetch(`${LISTMONK_BASE_URL}${path}`, {
        headers: headers9,
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
function extractFirstStoryboardDocument(html) {
  var _a2, _b2, _c;
  let htmlOpen = ((_a2 = html.match(/<html\b[^>]*>/i)) == null ? void 0 : _a2[0]) || "<html>", bodyOpenMatch = html.match(/<body\b[^>]*>/i), bodyCloseMatch = html.match(/<\/body\s*>/i), doctype = ((_b2 = html.match(/<!doctype[^>]*>/i)) == null ? void 0 : _b2[0]) || "<!doctype html>", headHtml = ((_c = html.match(/<head\b[^>]*>[\s\S]*?<\/head\s*>/i)) == null ? void 0 : _c[0]) || "", bodyOpen = (bodyOpenMatch == null ? void 0 : bodyOpenMatch[0]) || "<body>", bodyClose = (bodyCloseMatch == null ? void 0 : bodyCloseMatch[0]) || "</body>", bodyStart = (bodyOpenMatch == null ? void 0 : bodyOpenMatch.index) ?? 0, bodyEnd = (bodyCloseMatch == null ? void 0 : bodyCloseMatch.index) ?? html.length, bodyHtml = html.slice(bodyStart, bodyEnd), tags = scanHtmlTags(bodyHtml, bodyOpenMatch ? bodyOpen.length : 0), stack = [], storyboardTag = null, storyboardAncestors = [];
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
    !storyboardTag && tag.name === "div" && /\bstoryboard\b/i.test(getAttribute(tag.raw, "class")) && (storyboardTag = tag, storyboardAncestors = stack.filter(
      (a) => a.name !== "html" && a.name !== "head" && a.name !== "body"
    )), tag.selfClosing || stack.push(tag);
  }
  return null;
}
function prepareLeadStoryHtml(html, referenceDate, _feedId) {
  if (!html)
    return "";
  let extracted = extractFirstStoryboardDocument(
    resolveTemplateTags(html, referenceDate)
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
var LIVE_CAMPAIGN_ID = 1, LIVE_KEY = "live:issue", LIVE_FRESH_MS = 3e4, LIVE_STALE_MS = 10 * MIN, LIVE_WARM_INTERVAL_MS = 25e3;
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

// app/routes/feeds.preview.$id.tsx
var HTML_HEADERS = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control": "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400",
  "X-Content-Type-Options": "nosniff"
};
async function loader({
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
  links: () => links2,
  meta: () => meta2
});

// app/style/scss/components/showscroll.css
var showscroll_default = "/build/_assets/showscroll-FNF7IES6.css";

// app/components/legal-page.tsx
var import_react4 = require("@remix-run/react"), import_react5 = require("react");

// public/img/tp.png
var tp_default = "/build/_assets/tp-AMW7IQ4E.png";

// app/components/legal-page.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function LegalPage({
  title,
  effective,
  toc: toc3,
  children
}) {
  let [showStickyNav, setShowStickyNav] = (0, import_react5.useState)(!1);
  return (0, import_react5.useEffect)(() => {
    let handleScroll = () => setShowStickyNav(window.scrollY > 50);
    return handleScroll(), window.addEventListener("scroll", handleScroll, { passive: !0 }), () => window.removeEventListener("scroll", handleScroll);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "content-privacy", id: "top-of-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `sticky-nav${showStickyNav ? " visible" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { className: "sticky-logo", to: "/", "aria-label": "The Poast home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: tp_default, alt: "The Poast", loading: "lazy", decoding: "async" }, void 0, !1, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "/subscribe", className: "sticky-subscribe", children: "Subscribe" }, void 0, !1, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/legal-page.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "/", className: "logo", "aria-label": "The Poast home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: tp_default, alt: "The Poast Logo" }, void 0, !1, {
      fileName: "app/components/legal-page.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/legal-page.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "content-privacy2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: [
          title,
          "."
        ] }, void 0, !0, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
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
      toc3 && toc3.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "legal-toc", "aria-label": "On this page", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "legal-toc-label", children: "On this page" }, void 0, !1, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ol", { children: toc3.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: `#${item.id}`, children: item.label }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "legal-top", href: "#top-of-page", children: "Back to top \u2191" }, void 0, !1, {
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
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: showscroll_default }
], meta2 = () => ({
  title: "Privacy Policy : The Poast",
  description: "We find the good stuff and bring it to you every day."
}), toc = [
  { id: "about", label: "About this Policy and us" },
  { id: "collect", label: "Information we collect" },
  { id: "use", label: "How we use your information" }
];
function Privacy() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LegalPage, { title: "Privacy Policy", effective: "April 5, 2025", toc, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { id: "top-of-page", children: "The Poast respects your privacy and values your trust. This Privacy Policy (\u201CPolicy\u201D) describes how we collect and use your information and explains your rights and options. This Policy applies to these services (which we call the \u201CServices\u201D in this Policy):" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "websites, The Poast Store, paid products" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "newsletters and other disseminated content" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "merchandise, mobile apps and related social media pages" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "anywhere else we gather information about you and refer to this Policy." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "This Policy is grouped into these sections:" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "about us and this Policy;" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "information we collect;" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "how we use information, including for advertising purposes;" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "when we disclose information to other parties, including for advertising purposes; and" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "your rights and how to exercise them." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      "We encourage you to read this Policy carefully. If you have questions, please contact us at",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "section-title", id: "about", children: "1. About This Policy And Us" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "sub-title", children: "(a) Who we are" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "The Poast, Inc. (\u201CThe Poast,\u201D \u201Cwe\u201D, \u201Cour\u201D or \u201Cus\u201D) operates the Services. This Policy supplements and is governed by our Terms of Service (\u201CTerms\u201D). Capitalized terms used but not defined in this Policy are defined in our Terms. The Terms describe how the Services work in general and its conditions and requirements of use." }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "sub-title", children: "(b) When this Policy applies" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "This Policy applies when you use the Services, effective as of the Last Updated date above. By using or accessing the Services, you signify that you have read, understand and agree to be bound by this Policy and the Terms." }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Because the Services change often, this Policy may change over time. Anytime we modify the Policy, we will post a revised version on the Services and update the Last Updated date above. If you have given us your contact information, we will notify you before any material changes take effect, so you have time to review them." }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Certain parts of the Services work differently, and some information falls outside this Policy:" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Certain parts of the Services may have additional terms and privacy disclosures that supplement this Policy." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "The Services may contain links to and from third-party websites and services. This Policy doesn\u2019t apply to outside of our Services. See Third Party Services to learn more." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
        "If you are a current or former employee or contractor of ours, this Policy does not apply to you. You may contact us about your privacy practices and rights at",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "If we receive your information in our role as a service provider to another business, our agreement with that business governs our use of your information. We will refer any questions or concerns of yours to that business." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "sub-title", children: "(c) Location-specific sections" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      "The Services operates from the United States, but this Policy applies worldwide. Our practices generally do not differ based on your location, but your rights and choices depend in part on the law where you live. For example, you may have rights under: (1) \u201CGDPR\u201D:",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "THE EU GENERAL DATA PROTECTION REGULATION (EU) 2016/679, AND THE UK GENERAL DATA PROTECTION REGULATION (UK GDPR) AS TAILORED BY THE DATA PROTECTION ACT 2018" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "As a result, certain sections of this Policy apply to you only if you reside in a particular location:" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Residents of jurisdictions where GDPR applies \u2013 such as U.K., EU and Swiss residents \u2013 should consult the Rights under GDPR and International Data Transfers sections." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Residents of Mexico should consult the Aviso de Privacidad addendum." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Canadian residents should consult the Canadian users section." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "California residents should consult the Rights under California law section. If you reside in a U.S. jurisdiction that has enacted a data privacy law similar to CCPA or GDPR, we extend the same rights CCPA grants to California residents to you, except where we specify otherwise." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      "If those sections apply to you, they override any contrary descriptions elsewhere in the Policy as they relate to you. Please contact us at",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "section-title", id: "collect", children: "2. Information We Collect" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "sub-title", children: "(a) Information you provide" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "You may use the Services without providing any information about yourself. However, to use some aspects of the Services, we will need information about you, such as if you:" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Purchase our Offerings or services" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Contact or communicate with us" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Subscribe or opt-in to our newsletters, alerts, or other communications" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Participate in a contest or promotion or redeem a prize" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Information you provide may include your name or email address (\u201Cpersonal identifiers\u201D)." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We generally don\u2019t collect (or want!) your sensitive information, and we strive to limit the amount of sensitive personal information we collect." }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "For instance, if you make a purchase through our Services, your payment information, like your full credit card number and any payment-related security information, is only collected and processed by our payment processor." }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 145,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "In the event you provide sensitive personal information to us, we use it only for our operational business purposes, and we do not disclose it to others for any other purpose." }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "sub-title", children: "(b) Information collected when you use the Services" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "As you use the Services, cookies and other technology we use will generate technical data about which features you use, how you use them and the devices you use to access our services. This information may include:" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "\u201CCommercial Information\u201D about your orders of Offerings or other products or services from us and interactions with The Poast Store products." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "\u201CDevice Information\u201D related to the device you use to interact with the Services, such as your device\u2019s IP address, advertising IDs (resettable, random numbers, such as the device\u2019s Apple IDFA or Android Advertising ID), its browser and operating system, its internet service provider, and its configuration." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 162,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "\u201CInternet Activity\u201D related to your use of the Services, such as the pages you visit, the sites you use before or after visiting ours, your actions within the Services, the content or advertisements you interact with, general geolocation information, time stamps and performance logs and reports." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "legal-callout", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "legal-callout-title", children: "Managing cookies and similar technologies" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "WHEN YOU FIRST VISIT OUR SERVICES, AND PERIODICALLY THEREAFTER, YOU WILL BE PRESENTED WITH A COOKIE BANNER PROVIDING YOU WITH INFORMATION ABOUT THE COOKIES AND SIMILAR TRACKING TECHNOLOGIES WE USE. FOR COOKIES THAT ARE NOT STRICTLY NECESSARY FOR THE FUNCTIONING OF OUR SERVICES, WE WILL REQUEST YOUR EXPLICIT CONSENT BEFORE PLACING THEM ON YOUR DEVICE. OUR COOKIE BANNER ALLOWS YOU TO:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "ACCEPT ALL COOKIES;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 179,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 179,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "REJECT ALL NON-ESSENTIAL COOKIES; OR" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 180,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "CUSTOMIZE YOUR PREFERENCES AND CONSENT TO SPECIFIC CATEGORIES OF COOKIES." }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "PREFERENCES FOR NON-ESSENTIAL COOKIES ARE NOT PRE-SELECTED. YOU CAN WITHDRAW OR CHANGE YOUR CONSENT AT ANY TIME." }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "sub-title", children: "(c) Information we generate" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 191,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We infer new information from other data we collect, including using automated means to generate information about your likely preferences or other characteristics (\u201Cinferences\u201D)." }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "section-title", id: "use", children: "3. How We Use Your Information" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 199,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We use each of the categories of personal information described above for the following business and commercial purposes. The activities below can involve outside companies, agents or contractors (\u201Cservice providers\u201D) to whom we disclose your information for these purposes (discussed further below in Section 4)." }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 200,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "sub-title", children: "(a) To provide our content, services and products to you" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 208,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Deliver content you request" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Provide you with customer support and respond to your requests" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 211,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Complete your orders" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 212,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Communicate with you about our services" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 213,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 209,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "sub-title", children: "(b) To manage your subscriptions or fulfill product orders" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 216,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Manage your content subscriptions" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 218,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Deliver and process payments for Offerings you order" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 217,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "sub-title", children: "(c) To improve our services and develop new ones" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 222,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Administer focus groups, market studies and surveys" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Review interactions with customer teams to improve our quality of service" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 225,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Develop new content and services" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 226,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "sub-title", children: "(d) To allow personalized ads and create audiences for third-party advertisers" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 229,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Administer sweepstakes, contests, discounts or other offers" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 231,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Gather data and work with third parties to show you personalized ads on behalf of advertisers" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 232,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Perform and measure the effectiveness of advertising campaigns on our services and marketing campaigns off of the Services" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 233,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Communicate with you about products or services that we believe may interest you" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 234,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "OUR PERSONALIZED ADVERTISING ACTIVITIES RELY ON YOUR PRIOR CONSENT FOR THE USE OF RELEVANT COOKIES AND TRACKING TECHNOLOGIES, AND FOR THE SHARING OF YOUR INFORMATION WITH ADVERTISING PARTNERS FOR THESE PURPOSES." }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "sub-title", children: "(e) To prevent, detect and fight fraud and other illegal or unauthorized activities" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Find and address ongoing, suspected or alleged violations of our Terms" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 247,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Retain data related to violations of our Terms to prevent against recurrences" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 248,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Enforce or exercise our rights; for example, those in our Terms" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 249,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 246,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "sub-title", children: "(f) To create broader findings with aggregate and deidentified data" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 252,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Aggregate or deidentify information so that it can no longer identify you, as defined under applicable laws." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Better understand and represent our users using deidentified data, such as to measure ad performance, create advertising interest-based segments or compile survey results." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 255,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "sub-title", children: "(g) To ensure legal compliance" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 258,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Verify copyright or IP claims" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 260,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Comply with legal requirements" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 261,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Assist law enforcement" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 262,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 259,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "sub-title", children: "(h) Purposes" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 265,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We rely on the following purposes to collect and use your information as described in this Policy:" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 266,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "Commercial purposes" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "Business purposes" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "Comply with applicable laws and regulations" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "Consent" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 275,
          columnNumber: 11
        }, this),
        ": From time to time, we may ask for your consent to collect specific information, such as your precise geolocation, or use your information for certain specific reasons, like providing your email address or phone number for direct marketing purposes, or for the use of certain types of cookies for personalized advertising. In general, you may withdraw your consent by changing your settings (such as browser or device settings) or following instructions provided with information we send you on a consent basis (such as clicking \u2018unsubscribe\u2019 in any email we send you). You may always withdraw your consent at any time \u2013 just contact us at",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
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

// app/routes/feeds.full.$id.tsx
var feeds_full_id_exports = {};
__export(feeds_full_id_exports, {
  loader: () => loader2
});
var HTML_HEADERS2 = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control": "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400",
  "X-Content-Type-Options": "nosniff"
};
async function loader2({
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
  links: () => links3,
  meta: () => meta3
});
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), links3 = () => [
  { rel: "stylesheet", href: showscroll_default }
], meta3 = () => ({
  title: "Terms : The Poast",
  description: "We find the good stuff and bring it to you every day."
}), toc2 = [
  { id: "about", label: "About this Policy and us" },
  { id: "collect", label: "Information we collect" },
  { id: "use", label: "How we use your information" }
];
function Terms() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LegalPage, { title: "Terms and Conditions", effective: "April 5, 2025", toc: toc2, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "The Poast respects your privacy and values your trust. This Privacy Policy (\u201CPolicy\u201D) describes how we collect and use your information and explains your rights and options. This Policy applies to these services (which we call the \u201CServices\u201D in this Policy):" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "websites, The Poast Store, paid products" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "newsletters and other disseminated content" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "merchandise, mobile apps and related social media pages" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "anywhere else we gather information about you and refer to this Policy." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "This Policy is grouped into these sections:" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "about us and this Policy;" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "information we collect;" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "how we use information, including for advertising purposes;" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "when we disclose information to other parties, including for advertising purposes; and" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "your rights and how to exercise them." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      "We encourage you to read this Policy carefully. If you have questions, please contact us at",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "section-title", id: "about", children: "1. About This Policy And Us" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "sub-title", children: "(a) Who we are" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "The Poast, Inc. (\u201CThe Poast,\u201D \u201Cwe\u201D, \u201Cour\u201D or \u201Cus\u201D) operates the Services. This Policy supplements and is governed by our Terms of Service (\u201CTerms\u201D). Capitalized terms used but not defined in this Policy are defined in our Terms. The Terms describe how the Services work in general and its conditions and requirements of use." }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "sub-title", children: "(b) When this Policy applies" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "This Policy applies when you use the Services, effective as of the Last Updated date above. By using or accessing the Services, you signify that you have read, understand and agree to be bound by this Policy and the Terms." }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Because the Services change often, this Policy may change over time. Anytime we modify the Policy, we will post a revised version on the Services and update the Last Updated date above. If you have given us your contact information, we will notify you before any material changes take effect, so you have time to review them." }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Certain parts of the Services work differently, and some information falls outside this Policy:" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Certain parts of the Services may have additional terms and privacy disclosures that supplement this Policy." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "The Services may contain links to and from third-party websites and services. This Policy doesn\u2019t apply to outside of our Services. See Third Party Services to learn more." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
        "If you are a current or former employee or contractor of ours, this Policy does not apply to you. You may contact us about your privacy practices and rights at",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "If we receive your information in our role as a service provider to another business, our agreement with that business governs our use of your information. We will refer any questions or concerns of yours to that business." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "sub-title", children: "(c) Location-specific sections" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      "The Services operates from the United States, but this Policy applies worldwide. Our practices generally do not differ based on your location, but your rights and choices depend in part on the law where you live. For example, you may have rights under: (1) \u201CGDPR\u201D:",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "THE EU GENERAL DATA PROTECTION REGULATION (EU) 2016/679, AND THE UK GENERAL DATA PROTECTION REGULATION (UK GDPR) AS TAILORED BY THE DATA PROTECTION ACT 2018" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "As a result, certain sections of this Policy apply to you only if you reside in a particular location:" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Residents of jurisdictions where GDPR applies \u2013 such as U.K., EU and Swiss residents \u2013 should consult the Rights under GDPR and International Data Transfers sections." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Residents of Mexico should consult the Aviso de Privacidad addendum." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Canadian residents should consult the Canadian users section." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "California residents should consult the Rights under California law section. If you reside in a U.S. jurisdiction that has enacted a data privacy law similar to CCPA or GDPR, we extend the same rights CCPA grants to California residents to you, except where we specify otherwise." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      "If those sections apply to you, they override any contrary descriptions elsewhere in the Policy as they relate to you. Please contact us at",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "section-title", id: "collect", children: "2. Information We Collect" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "sub-title", children: "(a) Information you provide" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You may use the Services without providing any information about yourself. However, to use some aspects of the Services, we will need information about you, such as if you:" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Purchase our Offerings or services" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Contact or communicate with us" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Subscribe or opt-in to our newsletters, alerts, or other communications" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Participate in a contest or promotion or redeem a prize" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Information you provide may include your name or email address (\u201Cpersonal identifiers\u201D)." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We generally don\u2019t collect (or want!) your sensitive information, and we strive to limit the amount of sensitive personal information we collect." }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "For instance, if you make a purchase through our Services, your payment information, like your full credit card number and any payment-related security information, is only collected and processed by our payment processor." }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 145,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "In the event you provide sensitive personal information to us, we use it only for our operational business purposes, and we do not disclose it to others for any other purpose." }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "sub-title", children: "(b) Information collected when you use the Services" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "As you use the Services, cookies and other technology we use will generate technical data about which features you use, how you use them and the devices you use to access our services. This information may include:" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u201CCommercial Information\u201D about your orders of Offerings or other products or services from us and interactions with The Poast Store products." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u201CDevice Information\u201D related to the device you use to interact with the Services, such as your device\u2019s IP address, advertising IDs (resettable, random numbers, such as the device\u2019s Apple IDFA or Android Advertising ID), its browser and operating system, its internet service provider, and its configuration." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 162,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u201CInternet Activity\u201D related to your use of the Services, such as the pages you visit, the sites you use before or after visiting ours, your actions within the Services, the content or advertisements you interact with, general geolocation information, time stamps and performance logs and reports." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "legal-callout", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "legal-callout-title", children: "Managing cookies and similar technologies" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "WHEN YOU FIRST VISIT OUR SERVICES, AND PERIODICALLY THEREAFTER, YOU WILL BE PRESENTED WITH A COOKIE BANNER PROVIDING YOU WITH INFORMATION ABOUT THE COOKIES AND SIMILAR TRACKING TECHNOLOGIES WE USE. FOR COOKIES THAT ARE NOT STRICTLY NECESSARY FOR THE FUNCTIONING OF OUR SERVICES, WE WILL REQUEST YOUR EXPLICIT CONSENT BEFORE PLACING THEM ON YOUR DEVICE. OUR COOKIE BANNER ALLOWS YOU TO:" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "ACCEPT ALL COOKIES;" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 179,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 179,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "REJECT ALL NON-ESSENTIAL COOKIES; OR" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 180,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "CUSTOMIZE YOUR PREFERENCES AND CONSENT TO SPECIFIC CATEGORIES OF COOKIES." }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "PREFERENCES FOR NON-ESSENTIAL COOKIES ARE NOT PRE-SELECTED. YOU CAN WITHDRAW OR CHANGE YOUR CONSENT AT ANY TIME." }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "sub-title", children: "(c) Information we generate" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 191,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We infer new information from other data we collect, including using automated means to generate information about your likely preferences or other characteristics (\u201Cinferences\u201D)." }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "section-title", id: "use", children: "3. How We Use Your Information" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 199,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We use each of the categories of personal information described above for the following business and commercial purposes. The activities below can involve outside companies, agents or contractors (\u201Cservice providers\u201D) to whom we disclose your information for these purposes (discussed further below in Section 4)." }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 200,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "sub-title", children: "(a) To provide our content, services and products to you" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 208,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Deliver content you request" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Provide you with customer support and respond to your requests" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 211,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Complete your orders" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 212,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Communicate with you about our services" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 213,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 209,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "sub-title", children: "(b) To manage your subscriptions or fulfill product orders" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 216,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Manage your content subscriptions" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 218,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Deliver and process payments for Offerings you order" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 217,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "sub-title", children: "(c) To improve our services and develop new ones" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 222,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Administer focus groups, market studies and surveys" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Review interactions with customer teams to improve our quality of service" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 225,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Develop new content and services" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 226,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "sub-title", children: "(d) To allow personalized ads and create audiences for third-party advertisers" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 229,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Administer sweepstakes, contests, discounts or other offers" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 231,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Gather data and work with third parties to show you personalized ads on behalf of advertisers" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 232,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Perform and measure the effectiveness of advertising campaigns on our services and marketing campaigns off of the Services" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 233,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Communicate with you about products or services that we believe may interest you" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 234,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "OUR PERSONALIZED ADVERTISING ACTIVITIES RELY ON YOUR PRIOR CONSENT FOR THE USE OF RELEVANT COOKIES AND TRACKING TECHNOLOGIES, AND FOR THE SHARING OF YOUR INFORMATION WITH ADVERTISING PARTNERS FOR THESE PURPOSES." }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "sub-title", children: "(e) To prevent, detect and fight fraud and other illegal or unauthorized activities" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Find and address ongoing, suspected or alleged violations of our Terms" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 247,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Retain data related to violations of our Terms to prevent against recurrences" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 248,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Enforce or exercise our rights; for example, those in our Terms" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 249,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 246,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "sub-title", children: "(f) To create broader findings with aggregate and deidentified data" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 252,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Aggregate or deidentify information so that it can no longer identify you, as defined under applicable laws." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Better understand and represent our users using deidentified data, such as to measure ad performance, create advertising interest-based segments or compile survey results." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 255,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "sub-title", children: "(g) To ensure legal compliance" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 258,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Verify copyright or IP claims" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 260,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Comply with legal requirements" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 261,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Assist law enforcement" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 262,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 259,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "sub-title", children: "(h) Purposes" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 265,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We rely on the following purposes to collect and use your information as described in this Policy:" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 266,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("u", { children: "Commercial purposes" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("u", { children: "Business purposes" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("u", { children: "Comply with applicable laws and regulations" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("u", { children: "Consent" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 275,
          columnNumber: 11
        }, this),
        ": From time to time, we may ask for your consent to collect specific information, such as your precise geolocation, or use your information for certain specific reasons, like providing your email address or phone number for direct marketing purposes, or for the use of certain types of cookies for personalized advertising. In general, you may withdraw your consent by changing your settings (such as browser or device settings) or following instructions provided with information we send you on a consent basis (such as clicking \u2018unsubscribe\u2019 in any email we send you). You may always withdraw your consent at any time \u2013 just contact us at",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      "Questions about these terms? Contact us at",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }, void 0, !1, {
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

// app/routes/submit-post.tsx
var submit_post_exports = {};
__export(submit_post_exports, {
  action: () => action,
  default: () => Tips,
  headers: () => headers,
  meta: () => meta4
});
var import_node = require("@remix-run/node"), import_react7 = require("@remix-run/react");

// app/components/altcha.tsx
var import_react6 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function AltchaWrapper() {
  let [isMounted, setIsMounted] = (0, import_react6.useState)(!1);
  return (0, import_react6.useEffect)(() => {
    setIsMounted(!0), import("altcha").catch((err) => console.error("Altcha load error:", err));
  }, []), isMounted ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { height: "80px" } }, void 0, !1, {
    fileName: "app/components/altcha.tsx",
    lineNumber: 23,
    columnNumber: 12
  }, this);
}

// app/routes/submit-post.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), meta4 = () => ({
  title: "Submit a Post : The Poast",
  description: "Wanna submit a post? Do it here."
}), headers = () => ({
  "Cache-Control": "public, max-age=60, s-maxage=120, stale-while-revalidate=600"
}), SHOW_ERROR_DETAILS = !0, TOPICS = ["New post", "Story idea", "Correction", "Something else"], CREDIT_OPTIONS = [
  { value: "credit", label: "You can credit me" },
  { value: "anonymous", label: "Keep me anonymous" }
], TIPS_LIST_UUID = "a1d1ab8d-81e1-47fe-adab-4f4a555689a1", TIPS_LIST_FIELD_ID = "a1d1a", str = (value, max) => typeof value == "string" ? value.trim().slice(0, max) : "", EMAIL_RE = /^[^\s@'"\\]+@[^\s@'"\\]+\.[^\s@'"\\]+$/;
function listmonkConfig() {
  let baseUrl = (process.env.LISTMONK_URL || "https://app.thepoast.com").replace(/\/+$/, ""), apiUser = process.env.LISTMONK_API_USER || process.env.LISTMONK_USERNAME, apiToken = process.env.LISTMONK_API_TOKEN || process.env.LISTMONK_TOKEN, missing = [];
  if (apiUser || missing.push("LISTMONK_USERNAME"), apiToken || missing.push("LISTMONK_TOKEN"), missing.length)
    throw new Error(`Missing or invalid env vars: ${missing.join(", ")}`);
  return { baseUrl, apiUser, apiToken };
}
async function listmonk(path, init = {}) {
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
  return status === 401 ? hint = "Listmonk rejected the credentials. Check LISTMONK_API_USER / LISTMONK_API_TOKEN (the user must be an API user, and the token is shown only once when it's created)." : status === 403 ? hint = "The API user is authenticated but lacks permission. Give its role 'subscribers:manage' (and 'subscribers:get_all') plus 'lists:get_all' and access to the Tips list." : status === 404 ? hint = "Listmonk URL/path not found. Check LISTMONK_URL (no trailing path, e.g. https://app.thepoast.com)." : status === 400 && (hint = "Listmonk rejected the data. This is often a wrong list ID (the API needs the numeric list ID, not the UUID)."), `Listmonk ${step} failed (HTTP ${status}). ${hint} Response: ${body.slice(0, 300)}`;
}
var cachedTipsListId = null;
async function getTipsListId() {
  var _a2;
  let fromEnv = Number(process.env.LISTMONK_TIPS_LIST_ID);
  if (Number.isInteger(fromEnv) && fromEnv > 0)
    return fromEnv;
  if (cachedTipsListId)
    return cachedTipsListId;
  let res = await listmonk("/api/lists?per_page=all&minimal=true");
  if (!res.ok)
    throw new Error(
      explainListmonkFailure("list lookup", res.status, await res.text())
    );
  let body = await res.json(), match = (((_a2 = body == null ? void 0 : body.data) == null ? void 0 : _a2.results) ?? []).find((l) => l.uuid === TIPS_LIST_UUID);
  if (!match)
    throw new Error(
      `Could not find the Tips list (UUID ${TIPS_LIST_UUID}) in Listmonk. Set LISTMONK_TIPS_LIST_ID to its numeric ID.`
    );
  return cachedTipsListId = match.id, match.id;
}
async function saveTip(input) {
  var _a2, _b2;
  let listId = await getTipsListId(), now = (/* @__PURE__ */ new Date()).toISOString(), tipEntry = {
    submitted_at: now,
    topic: input.topic,
    tip: input.tip,
    source: input.source,
    credit: input.credit
  }, attribs = {
    is_tipster: !0,
    last_tip_at: now,
    tips: [tipEntry]
  }, name = input.name || input.email.split("@")[0], createRes = await listmonk("/api/subscribers", {
    method: "POST",
    body: JSON.stringify({
      email: input.email,
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
  let query = `subscribers.email = '${input.email.replace(/'/g, "''")}'`, findRes = await listmonk(
    `/api/subscribers?per_page=1&query=${encodeURIComponent(query)}`
  );
  if (!findRes.ok)
    throw new Error(
      explainListmonkFailure("lookup", findRes.status, await findRes.text())
    );
  let found = await findRes.json(), existing = (_b2 = (_a2 = found == null ? void 0 : found.data) == null ? void 0 : _a2.results) == null ? void 0 : _b2[0];
  if (!existing)
    throw new Error("Listmonk said the email exists but lookup returned nothing");
  let existingAttribs = existing.attribs ?? {}, history = Array.isArray(existingAttribs.tips) ? existingAttribs.tips : [], listIds = Array.from(
    /* @__PURE__ */ new Set([
      ...(existing.lists ?? []).map((l) => l.id),
      listId
    ])
  ), updateRes = await listmonk(`/api/subscribers/${existing.id}`, {
    method: "PUT",
    body: JSON.stringify({
      email: existing.email,
      // Keep the name they already have unless they gave one this time.
      name: input.name || existing.name || name,
      status: existing.status,
      lists: listIds,
      preconfirm_subscriptions: !0,
      attribs: {
        ...existingAttribs,
        ...attribs,
        tips: [...history, tipEntry].slice(-20)
      }
    })
  });
  if (!updateRes.ok)
    throw new Error(
      explainListmonkFailure("update", updateRes.status, await updateRes.text())
    );
}
async function action({ request }) {
  let formData = await request.formData();
  if (str(formData.get("nonce"), 200))
    return (0, import_node.json)({ success: !0 });
  let name = str(formData.get("name"), 200), email = str(formData.get("email"), 254).toLowerCase(), topic = str(formData.get("topic"), 50), tip = str(formData.get("tip"), 5e3), source = str(formData.get("source"), 500), credit = str(formData.get("credit"), 20) === "credit" ? "credit" : "anonymous", altcha = str(formData.get("altcha"), 2e4), fieldErrors = {};
  if (EMAIL_RE.test(email) || (fieldErrors.email = "Please enter a valid email."), tip.length < 10 && (fieldErrors.tip = "Tell us a little more (at least a sentence)."), topic && !TOPICS.includes(topic) && (fieldErrors.topic = "Please choose an option."), process.env.ALTCHA_REQUIRED !== "false" && !altcha && (fieldErrors.altcha = "Please complete the verification and try again."), Object.keys(fieldErrors).length > 0)
    return (0, import_node.json)(
      { error: "Please fix the highlighted fields.", fieldErrors },
      { status: 400 }
    );
  try {
    await saveTip({ name, email, topic, tip, source, credit });
  } catch (err) {
    console.error("[tips] failed to save tip:", err);
    let cause = err == null ? void 0 : err.cause, reason = (err instanceof Error ? err.message : String(err)) + (cause ? ` [${cause.code || cause.message}]` : "");
    return (0, import_node.json)(
      {
        error: "Something went wrong sending your tip. Please try again in a moment.",
        // Set BOOK_DEBUG=true in your env to see the real reason on the page.
        debug: SHOW_ERROR_DETAILS || process.env.BOOK_DEBUG === "true" ? reason : void 0
      },
      { status: 500 }
    );
  }
  return (0, import_node.json)({ success: !0 });
}
function Tips() {
  let actionData = (0, import_react7.useActionData)(), errors = (actionData == null ? void 0 : actionData.fieldErrors) ?? {}, fieldError = (field) => errors[field] ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "ad-field-error", id: `${field}-error`, role: "alert", children: errors[field] }, void 0, !1, {
    fileName: "app/routes/submit-post.tsx",
    lineNumber: 320,
    columnNumber: 7
  }, this) : null, header = /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("header", { className: "feed-topbar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "img",
      {
        src: "/img/tp.png",
        alt: "The Poast",
        loading: "eager",
        decoding: "async"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 328,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 327,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/subscribe", className: "feed-subscribe", children: "Subscribe" }, void 0, !1, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 336,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/submit-post.tsx",
    lineNumber: 326,
    columnNumber: 5
  }, this);
  return actionData != null && actionData.success ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "feed-page ad-booking-page tips-page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "ad-booking-card ad-success-card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ad-success-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "svg",
      {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("polyline", { points: "20 6 9 17 4 12" }, void 0, !1, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 356,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 348,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 347,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ad-booking-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "ad-booking-title", children: "Post received" }, void 0, !1, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 361,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "ad-booking-sub", children: "Thank you for sending this our way. We'll take a look." }, void 0, !1, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 362,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 360,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/", className: "back-btn ad-success-btn", children: "\u2190 Return to The Poast" }, void 0, !1, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 367,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/submit-post.tsx",
    lineNumber: 346,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/submit-post.tsx",
    lineNumber: 345,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "feed-page ad-booking-page tips-page", children: [
    header,
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "ad-booking-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ad-badge", children: "Submit a Post" }, void 0, !1, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 382,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 381,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Form, { method: "post", className: "ad-booking-form", children: [
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ad-form-error", role: "alert", children: [
          actionData.error,
          actionData.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("code", { className: "ad-form-error-debug", children: actionData.debug }, void 0, !1, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 391,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 388,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "name", children: "Name" }, void 0, !1, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 398,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "input",
              {
                type: "text",
                id: "name",
                name: "name",
                autoComplete: "name",
                placeholder: "Name *"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/submit-post.tsx",
                lineNumber: 399,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 397,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "email", children: "Email" }, void 0, !1, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 409,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "input",
              {
                type: "email",
                id: "email",
                name: "email",
                required: !0,
                autoComplete: "email",
                inputMode: "email",
                placeholder: "Email *",
                "aria-invalid": errors.email ? !0 : void 0,
                "aria-describedby": errors.email ? "email-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/submit-post.tsx",
                lineNumber: 410,
                columnNumber: 15
              },
              this
            ),
            fieldError("email")
          ] }, void 0, !0, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 408,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 396,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "topic", children: "Submission" }, void 0, !1, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 427,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("select", { id: "topic", name: "topic", defaultValue: "", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "", disabled: !0, children: "Pick one..." }, void 0, !1, {
                fileName: "app/routes/submit-post.tsx",
                lineNumber: 429,
                columnNumber: 17
              }, this),
              TOPICS.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: t, children: t }, t, !1, {
                fileName: "app/routes/submit-post.tsx",
                lineNumber: 433,
                columnNumber: 19
              }, this))
            ] }, void 0, !0, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 428,
              columnNumber: 15
            }, this),
            fieldError("topic")
          ] }, void 0, !0, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 426,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "credit", children: "If we use it" }, void 0, !1, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 442,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("select", { id: "credit", name: "credit", defaultValue: "credit", children: CREDIT_OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: o.value, children: o.label }, o.value, !1, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 445,
              columnNumber: 19
            }, this)) }, void 0, !1, {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 443,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 441,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 425,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "tip", children: "Description" }, void 0, !1, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 454,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "textarea",
            {
              id: "tip",
              name: "tip",
              rows: 6,
              maxLength: 5e3,
              required: !0,
              placeholder: "What should we know?",
              "aria-invalid": errors.tip ? !0 : void 0,
              "aria-describedby": errors.tip ? "tip-error" : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 455,
              columnNumber: 13
            },
            this
          ),
          fieldError("tip")
        ] }, void 0, !0, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 453,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "source", children: "Link to post (optional)" }, void 0, !1, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 469,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "input",
            {
              type: "text",
              id: "source",
              name: "source",
              placeholder: "https://"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/submit-post.tsx",
              lineNumber: 470,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 468,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            id: TIPS_LIST_FIELD_ID,
            type: "hidden",
            name: "l",
            value: TIPS_LIST_UUID
          },
          void 0,
          !1,
          {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 478,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 486,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { type: "submit", className: "ad-submit-btn", children: "Submit Post" }, void 0, !1, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 495,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "subscribe-altcha", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 499,
            columnNumber: 13
          }, this),
          fieldError("altcha")
        ] }, void 0, !0, {
          fileName: "app/routes/submit-post.tsx",
          lineNumber: 498,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "footer",
          {
            className: "feed-footer",
            id: "subscribe",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "form",
              {
                method: "post",
                action: "https://app.thepoast.com/subscription/form",
                className: "feed-subscribe-form",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "feed-legal", children: [
                  "By submitting, you agree to our",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
                    fileName: "app/routes/submit-post.tsx",
                    lineNumber: 514,
                    columnNumber: 13
                  }, this),
                  " ",
                  "&",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/policies/privacy", children: "Privacy" }, void 0, !1, {
                    fileName: "app/routes/submit-post.tsx",
                    lineNumber: 518,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/submit-post.tsx",
                    lineNumber: 521,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "innerfeed-legal", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { className: "space", to: "/about", children: "About" }, void 0, !1, {
                      fileName: "app/routes/submit-post.tsx",
                      lineNumber: 523,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { className: "space", to: "/archive", children: "Archive" }, void 0, !1, {
                      fileName: "app/routes/submit-post.tsx",
                      lineNumber: 524,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { className: "space", to: "/submit-post", children: "Submit Post" }, void 0, !1, {
                      fileName: "app/routes/submit-post.tsx",
                      lineNumber: 525,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { className: "space", to: "/partner", children: "Partner" }, void 0, !1, {
                      fileName: "app/routes/submit-post.tsx",
                      lineNumber: 526,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { className: "space", to: "/book", children: "Advertise" }, void 0, !1, {
                      fileName: "app/routes/submit-post.tsx",
                      lineNumber: 527,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "copyright", children: "\xA9 2026 The Poast" }, void 0, !1, {
                      fileName: "app/routes/submit-post.tsx",
                      lineNumber: 528,
                      columnNumber: 13
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/submit-post.tsx",
                    lineNumber: 522,
                    columnNumber: 13
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/submit-post.tsx",
                  lineNumber: 512,
                  columnNumber: 11
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/submit-post.tsx",
                lineNumber: 507,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/submit-post.tsx",
            lineNumber: 502,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 386,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/", className: "back-btn", children: "\u2190 Return to The Poast" }, void 0, !1, {
        fileName: "app/routes/submit-post.tsx",
        lineNumber: 539,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/submit-post.tsx",
      lineNumber: 380,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/submit-post.tsx",
    lineNumber: 377,
    columnNumber: 5
  }, this);
}

// app/routes/feeds.$id.tsx
var feeds_id_exports = {};
__export(feeds_id_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => FeedDetail,
  headers: () => headers2,
  links: () => links4,
  loader: () => loader3,
  shouldRevalidate: () => shouldRevalidate
});
var import_node2 = require("@remix-run/node"), import_react9 = require("@remix-run/react");

// app/components/feed-embed.tsx
var import_react8 = require("react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), heightCache = /* @__PURE__ */ new Map(), keyFor = (id, interactive) => `${interactive ? "full" : "lead"}:${id}`;
function getCachedHeight(id, interactive = !1) {
  return heightCache.get(keyFor(id, interactive));
}
function FeedEmbed({
  id,
  title,
  html,
  src,
  interactive = !1,
  fallbackHeight = 360,
  onLoaded,
  lazy = !1
}) {
  let key = keyFor(id, interactive), iframeRef = (0, import_react8.useRef)(null), observerRef = (0, import_react8.useRef)(null), observedBody = (0, import_react8.useRef)(null), onLoadedRef = (0, import_react8.useRef)(onLoaded), firedRef = (0, import_react8.useRef)(!1);
  onLoadedRef.current = onLoaded;
  let [height, setHeight] = (0, import_react8.useState)(
    () => heightCache.get(key) ?? fallbackHeight
  ), fireLoaded = (0, import_react8.useCallback)(() => {
    var _a2;
    firedRef.current || (firedRef.current = !0, (_a2 = onLoadedRef.current) == null || _a2.call(onLoadedRef));
  }, []), attach = (0, import_react8.useCallback)(() => {
    var _a2, _b2;
    let document2 = (_a2 = iframeRef.current) == null ? void 0 : _a2.contentDocument, body = document2 == null ? void 0 : document2.body;
    if (!body || body.childElementCount === 0)
      return !1;
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
  }, [key]), handleLoad = (0, import_react8.useCallback)(() => {
    attach(), fireLoaded();
  }, [attach, fireLoaded]);
  return (0, import_react8.useEffect)(() => {
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
  ]), !src && !html ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "div",
    {
      style: {
        position: "relative",
        width: "100%",
        height
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
          lineNumber: 208,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/feed-embed.tsx",
      lineNumber: 201,
      columnNumber: 5
    },
    this
  );
}
var feed_embed_default = (0, import_react8.memo)(FeedEmbed);

// app/routes/feeds.$id.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links4 = () => [
  {
    rel: "preconnect",
    href: "https://img.thepoast.com"
  },
  {
    rel: "dns-prefetch",
    href: "https://img.thepoast.com"
  }
], headers2 = ({
  loaderHeaders
}) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? "no-store"
}), shouldRevalidate = ({
  currentParams,
  nextParams
}) => currentParams.id !== nextParams.id;
async function loader3({
  params
}) {
  let id = params.id;
  if (!id || !/^\d+$/.test(id))
    throw new Response("Feed Not Found", {
      status: 404,
      headers: {
        "Cache-Control": "public, max-age=30",
        "Content-Type": "text/plain; charset=utf-8"
      }
    });
  let feed;
  try {
    feed = await getIssue(id);
  } catch (error) {
    throw console.error(
      `[feeds] Failed to load issue ${id}:`,
      error
    ), new Response(
      "Temporarily unavailable",
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
  if (!feed)
    throw new Response(
      "Feed Not Found",
      {
        status: 404,
        headers: {
          "Cache-Control": "public, max-age=15",
          "Content-Type": "text/plain; charset=utf-8"
        }
      }
    );
  return (0, import_node2.json)(
    { feed },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=1800, stale-while-revalidate=86400"
      }
    }
  );
}
function TopBar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("header", { className: "feed-topbar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      import_react9.Link,
      {
        className: "feed-mark",
        to: "/",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "img",
          {
            src: "/img/tp.png",
            alt: "The Poast",
            decoding: "async"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/feeds.$id.tsx",
            lineNumber: 121,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/feeds.$id.tsx",
        lineNumber: 117,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "a",
      {
        href: "#subscribe",
        className: "feed-subscribe",
        children: "Subscribe"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/feeds.$id.tsx",
        lineNumber: 128,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/feeds.$id.tsx",
    lineNumber: 116,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react9.useRouteError)(), status = (0, import_react9.isRouteErrorResponse)(error) ? error.status : 500;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "feed-detail-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TopBar, {}, void 0, !1, {
      fileName: "app/routes/feeds.$id.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "main",
      {
        className: "feed-detail-stream",
        style: {
          padding: "64px 24px",
          textAlign: "center"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: status === 404 ? "We couldn't find that edition." : "This edition is taking a moment to load." }, void 0, !1, {
            fileName: "app/routes/feeds.$id.tsx",
            lineNumber: 157,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "p",
            {
              style: {
                display: "flex",
                gap: 16,
                justifyContent: "center"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    onClick: () => window.location.reload(),
                    children: "Try again"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/feeds.$id.tsx",
                    lineNumber: 170,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { to: "/latest", children: "Back to archive" }, void 0, !1, {
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 179,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/feeds.$id.tsx",
              lineNumber: 163,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/feeds.$id.tsx",
        lineNumber: 150,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/feeds.$id.tsx",
    lineNumber: 147,
    columnNumber: 5
  }, this);
}
function FeedDetail() {
  let { feed } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "feed-detail-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TopBar, {}, void 0, !1, {
      fileName: "app/routes/feeds.$id.tsx",
      lineNumber: 194,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { className: "feed-detail-stream", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      feed_embed_default,
      {
        id: feed.id,
        html: feed.body,
        title: feed.subject,
        interactive: !0,
        fallbackHeight: 800
      },
      feed.id,
      !1,
      {
        fileName: "app/routes/feeds.$id.tsx",
        lineNumber: 197,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/feeds.$id.tsx",
      lineNumber: 196,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "footer",
      {
        className: "feed-footer",
        id: "subscribe",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "form",
          {
            method: "post",
            action: "https://app.thepoast.com/subscription/form",
            className: "feed-subscribe-form",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "feed-header", children: "Get The Poast" }, void 0, !1, {
                fileName: "app/routes/feeds.$id.tsx",
                lineNumber: 217,
                columnNumber: 9
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
                    fileName: "app/routes/feeds.$id.tsx",
                    lineNumber: 221,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  "button",
                  {
                    className: "feed-submit",
                    type: "submit",
                    children: "Subscribe"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/feeds.$id.tsx",
                    lineNumber: 229,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/feeds.$id.tsx",
                lineNumber: 220,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
                fileName: "app/routes/feeds.$id.tsx",
                lineNumber: 238,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/routes/feeds.$id.tsx",
                lineNumber: 237,
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
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 241,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                "input",
                {
                  type: "hidden",
                  name: "nonce"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 248,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "feed-legal", children: [
                "By submitting, you agree to our",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 255,
                  columnNumber: 13
                }, this),
                " ",
                "&",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { to: "/policies/privacy", children: "Privacy" }, void 0, !1, {
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 259,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, !1, {
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 262,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "innerfeed-legal", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { className: "space", to: "/about", children: "About" }, void 0, !1, {
                    fileName: "app/routes/feeds.$id.tsx",
                    lineNumber: 264,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { className: "space", to: "/archive", children: "Archive" }, void 0, !1, {
                    fileName: "app/routes/feeds.$id.tsx",
                    lineNumber: 265,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { className: "space", to: "/submit-post", children: "Submit Post" }, void 0, !1, {
                    fileName: "app/routes/feeds.$id.tsx",
                    lineNumber: 266,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { className: "space", to: "/partner", children: "Partner" }, void 0, !1, {
                    fileName: "app/routes/feeds.$id.tsx",
                    lineNumber: 267,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { className: "space", to: "/book", children: "Advertise" }, void 0, !1, {
                    fileName: "app/routes/feeds.$id.tsx",
                    lineNumber: 268,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "copyright", children: "\xA9 2026 The Poast" }, void 0, !1, {
                    fileName: "app/routes/feeds.$id.tsx",
                    lineNumber: 269,
                    columnNumber: 13
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/feeds.$id.tsx",
                  lineNumber: 263,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/feeds.$id.tsx",
                lineNumber: 253,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/feeds.$id.tsx",
            lineNumber: 212,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/feeds.$id.tsx",
        lineNumber: 207,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/feeds.$id.tsx",
    lineNumber: 193,
    columnNumber: 5
  }, this);
}

// app/routes/media-kit.tsx
var media_kit_exports = {};
__export(media_kit_exports, {
  default: () => MediaKit,
  meta: () => meta5
});
var import_react10 = require("@remix-run/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), meta5 = () => ({
  title: "Media Kit : The Poast",
  description: "We find the good stuff and bring it to you every day."
}), STATS = [
  { value: "27k+", label: "Email subscribers" },
  { value: "10k+", label: "Daily readers" },
  { value: "55k+", label: "Monthly web visitors" },
  { value: "36%", label: "Average open rate" }
], AUDIENCE = ["Founders", "Executives", "Builders", "Investors", "Marketers"], FORMATS = [
  {
    title: "Full creative control",
    body: "It's your ad, run your way. Use images, videos, or plain-jane text to find your next customer."
  },
  {
    title: "Link clicks that land",
    body: "Every ad click lands on your landing page, not some pesky in-app browser."
  },
  {
    title: "Use existing campaigns",
    body: "Already have a proven ad that works? Run it in The Poast. Measure its performance."
  }
], STEPS = [
  {
    title: "Send a booking request",
    body: "Tell us about your company, start date, budget, and any ads you're already running."
  },
  {
    title: "We reply within 24 hours",
    body: "You'll get availability, options, and next steps by email."
  },
  {
    title: "Approve and launch",
    body: "Once creative is approved, your campaign goes live on your start date."
  }
];
function MediaKit() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "feed-page ad-booking-page mk-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("header", { className: "feed-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react10.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "img",
        {
          src: "/img/tp.png",
          alt: "The Poast",
          loading: "eager",
          decoding: "async"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 56,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react10.Link, { to: "#subscribe", className: "feed-subscribe", children: "Subscribe" }, void 0, !1, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { className: "ad-booking-card mk-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "ad-badge", children: "Media Kit" }, void 0, !1, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-stats-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "mk-section-title", id: "mk-stats-title", children: "By the numbers" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mk-stats", children: STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mk-stat", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "mk-stat-value", children: stat.value }, void 0, !1, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "mk-stat-label", children: stat.label }, void 0, !1, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this)
        ] }, stat.label, !0, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-audience-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "mk-section-title", id: "mk-audience-title", children: "Who reads us" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mk-chips", children: AUDIENCE.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "mk-chip", children: group }, group, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 96,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-formats-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "mk-section-title", id: "mk-formats-title", children: "Why advertise with us?" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mk-formats", children: FORMATS.map((format) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("article", { className: "mk-format", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { children: format.title }, void 0, !1, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 111,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: format.body }, void 0, !1, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 112,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "mk-format-note", children: format.note }, void 0, !1, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 113,
            columnNumber: 17
          }, this)
        ] }, format.title, !0, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 110,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { className: "mk-section", "aria-labelledby": "mk-steps-title", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "mk-section-title", id: "mk-steps-title", children: "How it works" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 121,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "ad-success-steps", children: STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "step-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "step-num", children: i + 1 }, void 0, !1, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 127,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "step-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("strong", { children: step.title }, void 0, !1, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 129,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: step.body }, void 0, !1, {
              fileName: "app/routes/media-kit.tsx",
              lineNumber: 130,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 128,
            columnNumber: 17
          }, this)
        ] }, step.title, !0, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 126,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mk-cta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react10.Link, { to: "/book", className: "mk-btn", children: "Advertise with us" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react10.Link, { to: "/about", className: "back-btn", children: "About The Poast" }, void 0, !1, {
          fileName: "app/routes/media-kit.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/media-kit.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "footer",
      {
        className: "feed-footer",
        id: "subscribe",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "form",
          {
            method: "post",
            action: "https://app.thepoast.com/subscription/form",
            className: "feed-subscribe-form",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "feed-header", children: "Get The Poast" }, void 0, !1, {
                fileName: "app/routes/media-kit.tsx",
                lineNumber: 158,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "feed-input-bar", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
                    fileName: "app/routes/media-kit.tsx",
                    lineNumber: 162,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                  "button",
                  {
                    className: "feed-submit",
                    type: "submit",
                    children: "Subscribe"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/media-kit.tsx",
                    lineNumber: 170,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/media-kit.tsx",
                lineNumber: 161,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
                fileName: "app/routes/media-kit.tsx",
                lineNumber: 179,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/routes/media-kit.tsx",
                lineNumber: 178,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
                  fileName: "app/routes/media-kit.tsx",
                  lineNumber: 182,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "input",
                {
                  type: "hidden",
                  name: "nonce"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/media-kit.tsx",
                  lineNumber: 189,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "feed-legal", children: [
                "By submitting, you agree to our",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react10.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
                  fileName: "app/routes/media-kit.tsx",
                  lineNumber: 196,
                  columnNumber: 13
                }, this),
                " ",
                "&",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react10.Link, { to: "/policies/privacy", children: "Privacy" }, void 0, !1, {
                  fileName: "app/routes/media-kit.tsx",
                  lineNumber: 200,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
                  fileName: "app/routes/media-kit.tsx",
                  lineNumber: 203,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "innerfeed-legal", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react10.Link, { className: "space", to: "/about", children: "About" }, void 0, !1, {
                    fileName: "app/routes/media-kit.tsx",
                    lineNumber: 205,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react10.Link, { className: "space", to: "/archive", children: "Archive" }, void 0, !1, {
                    fileName: "app/routes/media-kit.tsx",
                    lineNumber: 206,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react10.Link, { className: "space", to: "/submit-post", children: "Submit Post" }, void 0, !1, {
                    fileName: "app/routes/media-kit.tsx",
                    lineNumber: 207,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react10.Link, { className: "space", to: "/partner", children: "Partner" }, void 0, !1, {
                    fileName: "app/routes/media-kit.tsx",
                    lineNumber: 208,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react10.Link, { className: "space", to: "/book", children: "Advertise" }, void 0, !1, {
                    fileName: "app/routes/media-kit.tsx",
                    lineNumber: 209,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "copyright", children: "\xA9 2026 The Poast" }, void 0, !1, {
                    fileName: "app/routes/media-kit.tsx",
                    lineNumber: 210,
                    columnNumber: 13
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/media-kit.tsx",
                  lineNumber: 204,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/media-kit.tsx",
                lineNumber: 194,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/media-kit.tsx",
            lineNumber: 153,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/media-kit.tsx",
        lineNumber: 148,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/media-kit.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// app/routes/subscribe.tsx
var subscribe_exports = {};
__export(subscribe_exports, {
  default: () => Subscribe,
  meta: () => meta6
});
var import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), meta6 = () => ({
  title: "Subscribe : The Poast",
  description: "We find the good stuff and bring it to you every day."
});
function Subscribe() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "subscribe-page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { className: "subscribe-card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      import_react11.Link,
      {
        to: "/",
        className: "subscribe-logo",
        "aria-label": "The Poast home",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "img",
          {
            src: "/img/tp.png",
            alt: "The Poast",
            decoding: "async"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 22,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 17,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "footer",
      {
        className: "feed-footer",
        id: "subscribe",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "form",
          {
            method: "post",
            action: "https://app.thepoast.com/subscription/form",
            className: "feed-subscribe-form",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "feed-header", children: "Get The Poast" }, void 0, !1, {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 39,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "feed-input-bar", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
                    fileName: "app/routes/subscribe.tsx",
                    lineNumber: 43,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                  "button",
                  {
                    className: "feed-submit",
                    type: "submit",
                    children: "Subscribe"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/subscribe.tsx",
                    lineNumber: 51,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 42,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 60,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 59,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
                  lineNumber: 63,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                "input",
                {
                  type: "hidden",
                  name: "nonce"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/subscribe.tsx",
                  lineNumber: 70,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "feed-legal", children: [
                "By submitting, you agree to our",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
                  fileName: "app/routes/subscribe.tsx",
                  lineNumber: 77,
                  columnNumber: 13
                }, this),
                " ",
                "&",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Link, { to: "/policies/privacy", children: "Privacy" }, void 0, !1, {
                  fileName: "app/routes/subscribe.tsx",
                  lineNumber: 81,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
                  fileName: "app/routes/subscribe.tsx",
                  lineNumber: 84,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "innerfeed-legal", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Link, { className: "space", to: "/about", children: "About" }, void 0, !1, {
                    fileName: "app/routes/subscribe.tsx",
                    lineNumber: 86,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Link, { className: "space", to: "/archive", children: "Archive" }, void 0, !1, {
                    fileName: "app/routes/subscribe.tsx",
                    lineNumber: 87,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Link, { className: "space", to: "/submit-post", children: "Submit Post" }, void 0, !1, {
                    fileName: "app/routes/subscribe.tsx",
                    lineNumber: 88,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Link, { className: "space", to: "/partner", children: "Partner" }, void 0, !1, {
                    fileName: "app/routes/subscribe.tsx",
                    lineNumber: 89,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Link, { className: "space", to: "/book", children: "Advertise" }, void 0, !1, {
                    fileName: "app/routes/subscribe.tsx",
                    lineNumber: 90,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "copyright", children: "\xA9 2026 The Poast" }, void 0, !1, {
                    fileName: "app/routes/subscribe.tsx",
                    lineNumber: 91,
                    columnNumber: 13
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/subscribe.tsx",
                  lineNumber: 85,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 75,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 34,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 29,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Link, { to: "/", className: "back-btn", children: "\u2190 Return to The Poast" }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/thank-you.tsx
var thank_you_exports = {};
__export(thank_you_exports, {
  default: () => ThankYou,
  meta: () => meta7
});
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), meta7 = () => ({
  title: "Request received : The Poast",
  robots: "noindex"
});
function ThankYou() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "feed-page ad-booking-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("header", { className: "feed-topbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react12.Link, { className: "feed-mark", to: "/", "aria-label": "Return to The Poast homepage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: "/img/tp.png", alt: "The Poast", decoding: "async" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("main", { className: "ad-booking-card ad-success-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "ad-success-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("polyline", { points: "20 6 9 17 4 12" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "ad-booking-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "ad-booking-title", children: "Request received" }, void 0, !1, {
          fileName: "app/routes/thank-you.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "ad-booking-sub", children: "Thanks for your interest in advertising with The Poast." }, void 0, !1, {
          fileName: "app/routes/thank-you.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/thank-you.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "ad-success-steps", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "step-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "step-num", children: "1" }, void 0, !1, {
            fileName: "app/routes/thank-you.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "step-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { children: "We review your request" }, void 0, !1, {
              fileName: "app/routes/thank-you.tsx",
              lineNumber: 43,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Our team looks at every inquiry within 24 hours." }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "step-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "step-num", children: "2" }, void 0, !1, {
            fileName: "app/routes/thank-you.tsx",
            lineNumber: 48,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "step-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { children: "We reach out by email" }, void 0, !1, {
              fileName: "app/routes/thank-you.tsx",
              lineNumber: 50,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Expect a note with availability, pricing, and next steps." }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "step-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "step-num", children: "3" }, void 0, !1, {
            fileName: "app/routes/thank-you.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "step-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { children: "Your campaign goes live" }, void 0, !1, {
              fileName: "app/routes/thank-you.tsx",
              lineNumber: 57,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Once creative is approved, we schedule your start date." }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react12.Link, { to: "/", className: "back-btn ad-success-btn", children: "\u2190 Return to The Poast" }, void 0, !1, {
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

// app/routes/archive.tsx
var archive_exports = {};
__export(archive_exports, {
  default: () => Today,
  headers: () => headers3,
  links: () => links5,
  loader: () => loader4,
  shouldRevalidate: () => shouldRevalidate2
});
var import_react13 = require("react"), import_react14 = require("@remix-run/react"), import_node3 = require("@remix-run/node");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), links5 = () => [
  {
    rel: "preconnect",
    href: "https://img.thepoast.com"
  },
  {
    rel: "dns-prefetch",
    href: "https://img.thepoast.com"
  }
], headers3 = ({
  loaderHeaders
}) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? "no-store"
});
function shouldRevalidate2() {
  return !1;
}
var FEED_LIMIT2 = 30, FEED_START_DATE = "2026-09-23";
async function loader4() {
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
    subject: campaign.subject || "The Poast",
    date: getCampaignDate(campaign) || (/* @__PURE__ */ new Date()).toISOString()
  }));
  feeds.length > 0 && warmLeadStories(feeds.map((feed) => feed.id));
  let degraded = campaigns.length === 0;
  return (0, import_node3.json)(
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
function formatDate(date) {
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
function FeedCard({
  feed
}) {
  let ref = (0, import_react13.useRef)(null), [html, setHtml] = (0, import_react13.useState)(
    null
  ), [failed, setFailed] = (0, import_react13.useState)(!1);
  return (0, import_react13.useEffect)(() => {
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
          controller.signal.aborted || (console.error(
            `[feeds] Failed to load feed ${feed.id}:`,
            error
          ), setFailed(!0));
        }));
      },
      {
        /*
         * Start loading well before the user reaches
         * the card so scrolling feels instantaneous.
         */
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
  ]), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    "section",
    {
      className: "feed-archive-item",
      "data-feed-id": feed.id,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "div",
        {
          ref,
          style: {
            position: "relative"
          },
          children: html ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              feed_embed_default,
              {
                id: feed.id,
                html,
                title: feed.subject
              },
              void 0,
              !1,
              {
                fileName: "app/routes/archive.tsx",
                lineNumber: 341,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              import_react14.Link,
              {
                to: `/feeds/${feed.id}`,
                prefetch: "intent",
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
                fileName: "app/routes/archive.tsx",
                lineNumber: 347,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/archive.tsx",
            lineNumber: 340,
            columnNumber: 11
          }, this) : failed ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            import_react14.Link,
            {
              to: `/feeds/${feed.id}`,
              prefetch: "intent",
              className: "feed-fallback",
              style: {
                display: "block",
                padding: "32px 24px",
                textAlign: "center",
                textDecoration: "none",
                color: "inherit"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("strong", { children: feed.subject }, void 0, !1, {
                  fileName: "app/routes/archive.tsx",
                  lineNumber: 371,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                  "div",
                  {
                    style: {
                      opacity: 0.6,
                      marginTop: 6
                    },
                    children: formatDate(feed.date)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/archive.tsx",
                    lineNumber: 375,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/archive.tsx",
              lineNumber: 359,
              columnNumber: 11
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "div",
            {
              className: "feed-lazy-placeholder",
              "aria-hidden": "true",
              style: {
                width: "100%",
                height: getCachedHeight(feed.id) ?? 360
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/archive.tsx",
              lineNumber: 385,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/archive.tsx",
          lineNumber: 333,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/archive.tsx",
      lineNumber: 329,
      columnNumber: 5
    },
    this
  );
}
function Today() {
  let {
    feeds,
    degraded
  } = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "feeds-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("header", { className: "feed-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_react14.Link,
        {
          className: "feed-mark",
          to: "/",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "img",
            {
              src: "/img/tp.png",
              alt: "The Poast",
              decoding: "async"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/archive.tsx",
              lineNumber: 418,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/archive.tsx",
          lineNumber: 414,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "a",
        {
          href: "#subscribe",
          className: "feed-subscribe",
          children: "Subscribe"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/archive.tsx",
          lineNumber: 425,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/archive.tsx",
      lineNumber: 413,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("main", { className: "feeds-stream", children: feeds.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { className: "feeds-empty", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: degraded ? "The archive is taking a moment. Please refresh shortly." : "No feeds yet." }, void 0, !1, {
      fileName: "app/routes/archive.tsx",
      lineNumber: 436,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/archive.tsx",
      lineNumber: 435,
      columnNumber: 11
    }, this) : feeds.map((feed) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      FeedCard,
      {
        feed
      },
      feed.id,
      !1,
      {
        fileName: "app/routes/archive.tsx",
        lineNumber: 444,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/archive.tsx",
      lineNumber: 433,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "footer",
      {
        className: "feed-footer",
        id: "subscribe",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "form",
          {
            method: "post",
            action: "https://app.thepoast.com/subscription/form",
            className: "feed-subscribe-form",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "feed-header", children: "Get The Poast" }, void 0, !1, {
                fileName: "app/routes/archive.tsx",
                lineNumber: 462,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "feed-input-bar", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
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
                    fileName: "app/routes/archive.tsx",
                    lineNumber: 466,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                  "button",
                  {
                    className: "feed-submit",
                    type: "submit",
                    children: "Subscribe"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/archive.tsx",
                    lineNumber: 474,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/archive.tsx",
                lineNumber: 465,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
                fileName: "app/routes/archive.tsx",
                lineNumber: 483,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/routes/archive.tsx",
                lineNumber: 482,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
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
                  fileName: "app/routes/archive.tsx",
                  lineNumber: 486,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                "input",
                {
                  type: "hidden",
                  name: "nonce"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/archive.tsx",
                  lineNumber: 493,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "feed-legal", children: [
                "By submitting, you agree to our",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
                  fileName: "app/routes/archive.tsx",
                  lineNumber: 500,
                  columnNumber: 13
                }, this),
                " ",
                "&",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Link, { to: "/policies/privacy", children: "Privacy" }, void 0, !1, {
                  fileName: "app/routes/archive.tsx",
                  lineNumber: 504,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("br", {}, void 0, !1, {
                  fileName: "app/routes/archive.tsx",
                  lineNumber: 507,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "innerfeed-legal", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Link, { className: "space", to: "/about", children: "About" }, void 0, !1, {
                    fileName: "app/routes/archive.tsx",
                    lineNumber: 509,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Link, { className: "space", to: "/archive", children: "Archive" }, void 0, !1, {
                    fileName: "app/routes/archive.tsx",
                    lineNumber: 510,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Link, { className: "space", to: "/submit-post", children: "Submit Post" }, void 0, !1, {
                    fileName: "app/routes/archive.tsx",
                    lineNumber: 511,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Link, { className: "space", to: "/partner", children: "Partner" }, void 0, !1, {
                    fileName: "app/routes/archive.tsx",
                    lineNumber: 512,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Link, { className: "space", to: "/book", children: "Advertise" }, void 0, !1, {
                    fileName: "app/routes/archive.tsx",
                    lineNumber: 513,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "copyright", children: "\xA9 2026 The Poast" }, void 0, !1, {
                    fileName: "app/routes/archive.tsx",
                    lineNumber: 514,
                    columnNumber: 13
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/archive.tsx",
                  lineNumber: 508,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/archive.tsx",
                lineNumber: 498,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/archive.tsx",
            lineNumber: 457,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/archive.tsx",
        lineNumber: 452,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/archive.tsx",
    lineNumber: 412,
    columnNumber: 5
  }, this);
}

// app/routes/confirm.tsx
var confirm_exports = {};
__export(confirm_exports, {
  default: () => Confirm
});
var import_react15 = require("@remix-run/react");

// public/img/ja6.png
var ja6_default = "/build/_assets/ja6-UFKBF2CN.png";

// app/routes/confirm.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Confirm() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "nav", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react15.Link, { to: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", { src: tp_default, alt: "The Poast Logo" }, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { style: { fontSize: 52 }, children: "\u2713" }, void 0, !1, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { style: { fontSize: 30, textAlign: "center" }, children: "Welcome back to The Poast" }, void 0, !1, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("br", {}, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 19,
        columnNumber: 56
      }, this),
      "Expect our fast feed in your inbox every day. It stitches together the best business-minded news, posts, and snarky comments from across the web. You can check out the latest issue ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react15.Link, { to: "/live", children: "here \u2192" }, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 19,
        columnNumber: 243
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 19,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 20,
        columnNumber: 57
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("em", { children: `P.S. If you don't receive an email, please check your spam or promotions folder and "move us" to your primary inbox to ensure you get The Poast each day.` }, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 20,
        columnNumber: 63
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("br", {}, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 22,
        columnNumber: 57
      }, this),
      "\u2014The Poast",
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 22,
        columnNumber: 73
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 22,
        columnNumber: 79
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 22,
        columnNumber: 85
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 22,
        columnNumber: 91
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", { className: "headerimg", src: ja6_default, alt: "The Poast" }, void 0, !1, {
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

// app/routes/partner.tsx
var partner_exports = {};
__export(partner_exports, {
  action: () => action2,
  default: () => Advertise,
  headers: () => headers4
});
var import_react16 = require("react"), import_node4 = require("@remix-run/node"), import_react17 = require("@remix-run/react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), THANK_YOU_PATH = "/thank-you", SHOW_ERROR_DETAILS2 = !1, headers4 = () => ({
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
], ObjectiveIconSvg = (0, import_react16.memo)(({ name }) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: {
      heart: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, void 0, !1, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 124,
        columnNumber: 7
      }, this),
      globe: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("circle", { cx: "12", cy: "12", r: "10" }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 128,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("line", { x1: "2", y1: "12", x2: "22", y2: "12" }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 129,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 130,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 127,
        columnNumber: 7
      }, this),
      video: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("rect", { x: "2", y: "4", width: "20", height: "16", rx: "3", ry: "3" }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 135,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M10 9l5 3-5 3V9z" }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 136,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 134,
        columnNumber: 7
      }, this),
      smartphone: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("rect", { x: "5", y: "2", width: "14", height: "20", rx: "3", ry: "3" }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 141,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("line", { x1: "12", y1: "18", x2: "12.01", y2: "18", strokeWidth: "3" }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 142,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 140,
        columnNumber: 7
      }, this),
      shopping_bag: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 147,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("line", { x1: "3", y1: "6", x2: "21", y2: "6" }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 148,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M16 10a4 4 0 0 1-8 0" }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 149,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 146,
        columnNumber: 7
      }, this),
      megaphone: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M3 11l18-5v12L3 13v-2z" }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 154,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6" }, void 0, !1, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 155,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 153,
        columnNumber: 7
      }, this)
    }[name]
  },
  void 0,
  !1,
  {
    fileName: "app/routes/partner.tsx",
    lineNumber: 161,
    columnNumber: 5
  },
  this
));
ObjectiveIconSvg.displayName = "ObjectiveIconSvg";
var BUDGET_OPTIONS = [
  { value: "$1,500 - $3,000", label: "$1,500 \u2013 $3,000" },
  { value: "$3,000 - $7,500", label: "$3,000 \u2013 $7,500" },
  { value: "$7,500 - $15,000", label: "$7,500 \u2013 $15,000" },
  { value: "$15,000+", label: "$15,000+" }
], str2 = (value, max) => typeof value == "string" ? value.trim().slice(0, max) : "", EMAIL_RE2 = /^[^\s@'"\\]+@[^\s@'"\\]+\.[^\s@'"\\]+$/;
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
function listmonkConfig2() {
  let baseUrl = (process.env.LISTMONK_URL || "https://app.thepoast.com").replace(/\/+$/, ""), apiUser = process.env.LISTMONK_API_USER || process.env.LISTMONK_USERNAME, apiToken = process.env.LISTMONK_API_TOKEN || process.env.LISTMONK_TOKEN, listId = Number(process.env.LISTMONK_ADVERTISER_LIST_ID || 31), missing = [];
  if (apiUser || missing.push("LISTMONK_USERNAME"), apiToken || missing.push("LISTMONK_TOKEN"), (!Number.isInteger(listId) || listId < 1) && missing.push("LISTMONK_ADVERTISER_LIST_ID"), missing.length)
    throw new Error(`Missing or invalid env vars: ${missing.join(", ")}`);
  return { baseUrl, apiUser, apiToken, listId };
}
async function listmonk2(path, init = {}) {
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
function explainListmonkFailure2(step, status, body) {
  let hint = "";
  return status === 401 ? hint = "Listmonk rejected credentials. Check LISTMONK_API_USER / LISTMONK_API_TOKEN." : status === 403 ? hint = "API user lacks permission. Assign 'subscribers:manage' role." : status === 404 ? hint = "Listmonk URL not found. Check LISTMONK_URL." : status === 400 && (hint = "Listmonk rejected data. Verify numeric LISTMONK_ADVERTISER_LIST_ID."), `Listmonk ${step} failed (HTTP ${status}). ${hint} Response: ${body.slice(0, 300)}`;
}
async function saveAdvertiserLead(lead) {
  var _a2, _b2;
  let { listId } = listmonkConfig2(), now = (/* @__PURE__ */ new Date()).toISOString(), bookingRequest = {
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
  }, name = buildSubscriberName(lead.contactName, lead.company), createRes = await listmonk2("/api/subscribers", {
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
  let query = `subscribers.email = '${lead.email.replace(/'/g, "''")}'`, findRes = await listmonk2(
    `/api/subscribers?per_page=1&query=${encodeURIComponent(query)}`
  );
  if (!findRes.ok)
    throw new Error(
      explainListmonkFailure2("lookup", findRes.status, await findRes.text())
    );
  let found = await findRes.json(), existing = (_b2 = (_a2 = found == null ? void 0 : found.data) == null ? void 0 : _a2.results) == null ? void 0 : _b2[0];
  if (!existing)
    throw new Error("Listmonk said email exists but lookup returned nothing");
  let existingAttribs = existing.attribs ?? {}, history = Array.isArray(existingAttribs.ad_requests) ? existingAttribs.ad_requests : [], listIds = Array.from(
    /* @__PURE__ */ new Set([
      ...(existing.lists ?? []).map((l) => l.id),
      listId
    ])
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
      explainListmonkFailure2("update", updateRes.status, await updateRes.text())
    );
}
async function action2({ request }) {
  let formData = await request.formData();
  if (str2(formData.get("nonce"), 200))
    return (0, import_node4.redirect)(THANK_YOU_PATH);
  let company = str2(formData.get("company"), 200), websiteRaw = str2(formData.get("website"), 300), contactName = str2(formData.get("name"), 200), email = str2(formData.get("email"), 254).toLowerCase(), campaignNameRaw = str2(formData.get("campaignName"), 120), objectiveValue = str2(formData.get("objective"), 30), targetDate = str2(formData.get("targetDate"), 10), endDate = str2(formData.get("endDate"), 10), budget = str2(formData.get("budget"), 50), notes = str2(formData.get("notes"), 5e3), sourceRaw = str2(formData.get("source"), 300), altcha = str2(formData.get("altcha"), 2e4), fieldErrors = {};
  company || (fieldErrors.company = "Please enter your company name."), contactName || (fieldErrors.name = "Please enter your name."), EMAIL_RE2.test(email) || (fieldErrors.email = "Please enter a valid work email.");
  let website = normalizeWebsite(websiteRaw);
  website || (fieldErrors.website = "Please enter a valid website URL.");
  let previousCampaign = "";
  if (sourceRaw) {
    let normalized = normalizeWebsite(sourceRaw);
    normalized ? previousCampaign = normalized : fieldErrors.source = "Please enter a valid URL, or leave this field blank.";
  }
  if ((!/^\d{4}-\d{2}-\d{2}$/.test(targetDate) || Number.isNaN(Date.parse(targetDate))) && (fieldErrors.targetDate = "Please select a campaign start date."), !fieldErrors.targetDate) {
    let earliest = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    targetDate < earliest && (fieldErrors.targetDate = "Start date can't be in the past.");
  }
  endDate && (/^\d{4}-\d{2}-\d{2}$/.test(endDate) && !Number.isNaN(Date.parse(endDate)) ? !fieldErrors.targetDate && endDate < targetDate && (fieldErrors.endDate = "End date must be on or after the start date.") : fieldErrors.endDate = "Please select a valid end date, or leave blank.");
  let objective = OBJECTIVES.find((o) => o.value === objectiveValue);
  if (objective || (fieldErrors.objective = "Please choose a campaign placement objective."), process.env.ALTCHA_REQUIRED !== "false" && !altcha && (fieldErrors.altcha = "Please complete the security verification below."), Object.keys(fieldErrors).length > 0)
    return (0, import_node4.json)(
      { error: "Please review and complete the highlighted fields.", fieldErrors },
      { status: 400 }
    );
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
    console.error("[book] failed to save advertiser lead:", err);
    let cause = err == null ? void 0 : err.cause, reason = (err instanceof Error ? err.message : String(err)) + (cause ? ` [${cause.code || cause.message}]` : "");
    return (0, import_node4.json)(
      {
        error: "Unable to process booking request right now. Please try again.",
        debug: SHOW_ERROR_DETAILS2 || process.env.BOOK_DEBUG === "true" ? reason : void 0
      },
      { status: 500 }
    );
  }
  return (0, import_node4.redirect)(THANK_YOU_PATH);
}
function Advertise() {
  let actionData = (0, import_react17.useActionData)(), errors = (actionData == null ? void 0 : actionData.fieldErrors) ?? {}, navigation = (0, import_react17.useNavigation)(), submitting = navigation.state === "submitting" || navigation.state === "loading" && navigation.formMethod === "POST", [objectiveValue, setObjectiveValue] = (0, import_react16.useState)(OBJECTIVES[0].value), selectedObjective = OBJECTIVES.find((o) => o.value === objectiveValue) ?? OBJECTIVES[0], targetDateRef = (0, import_react16.useRef)(null), endDateRef = (0, import_react16.useRef)(null), [startDate, setStartDate] = (0, import_react16.useState)(""), [minDate, setMinDate] = (0, import_react16.useState)(void 0), [campaignName, setCampaignName] = (0, import_react16.useState)("");
  (0, import_react16.useEffect)(() => {
    let now = /* @__PURE__ */ new Date(), date = now.toLocaleDateString("en-US", { month: "short", day: "numeric" }), time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
    setCampaignName((current) => current || `Campaign \u2014 ${date} \u2014 ${time}`);
  }, []), (0, import_react16.useEffect)(() => {
    let d = /* @__PURE__ */ new Date(), pad = (n) => String(n).padStart(2, "0");
    setMinDate(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
  }, []), (0, import_react16.useEffect)(() => {
    var _a2;
    if (!actionData)
      return;
    let invalid = document.querySelector(
      '.ad-booking-form [aria-invalid="true"]'
    );
    if (invalid) {
      invalid.focus();
      return;
    }
    (_a2 = document.querySelector(".ad-form-error, .ad-field-error")) == null || _a2.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [actionData]);
  let openPicker = (ref) => {
    if (ref.current)
      if ("showPicker" in ref.current && typeof ref.current.showPicker == "function")
        try {
          ref.current.showPicker();
        } catch {
          ref.current.focus();
        }
      else
        ref.current.focus();
  }, fieldError = (name) => errors[name] ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "ad-field-error", id: `${name}-error`, role: "alert", children: errors[name] }, void 0, !1, {
    fileName: "app/routes/partner.tsx",
    lineNumber: 554,
    columnNumber: 7
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "feed-page ad-booking-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("header", { className: "feed-topbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react17.Link, { className: "feed-mark", to: "/", "aria-label": "Return to The Poast homepage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("img", { src: "/img/tp.png", alt: "The Poast", decoding: "async" }, void 0, !1, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 563,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 562,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 561,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { className: "ad-booking-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ad-badge", children: "Partner with The Poast" }, void 0, !1, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 569,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 568,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react17.Form, { method: "post", className: "ad-booking-form", children: [
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ad-form-error", role: "alert", children: [
          actionData.error,
          actionData.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("code", { className: "ad-form-error-debug", children: actionData.debug }, void 0, !1, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 577,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 574,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ad-form-section", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "form-group-row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { htmlFor: "company", children: "Company" }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 586,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 587,
                  columnNumber: 17
                },
                this
              ),
              fieldError("company")
            ] }, void 0, !0, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 585,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { htmlFor: "website", children: "Website" }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 601,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                "input",
                {
                  type: "text",
                  id: "website",
                  name: "website",
                  required: !0,
                  autoComplete: "url",
                  inputMode: "url",
                  placeholder: "Website *",
                  "aria-invalid": errors.website ? !0 : void 0,
                  "aria-describedby": errors.website ? "website-error" : void 0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 602,
                  columnNumber: 17
                },
                this
              ),
              fieldError("website")
            ] }, void 0, !0, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 600,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 584,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "form-group-row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { htmlFor: "name", children: "Name" }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 619,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                "input",
                {
                  type: "text",
                  id: "name",
                  name: "name",
                  required: !0,
                  autoComplete: "name",
                  placeholder: "Name *",
                  "aria-invalid": errors.name ? !0 : void 0,
                  "aria-describedby": errors.name ? "name-error" : void 0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 620,
                  columnNumber: 17
                },
                this
              ),
              fieldError("name")
            ] }, void 0, !0, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 618,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { htmlFor: "email", children: "Email" }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 634,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 635,
                  columnNumber: 17
                },
                this
              ),
              fieldError("email")
            ] }, void 0, !0, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 633,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 617,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 583,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ad-form-section ad-form-setup", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "form-field ad-name-card", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "ad-section-heading", children: "Campaign Name" }, void 0, !1, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 653,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 654,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              "input",
              {
                type: "text",
                id: "campaignName",
                name: "campaignName",
                maxLength: 120,
                autoComplete: "off",
                placeholder: "Campaign Name",
                value: campaignName,
                onChange: (e) => setCampaignName(e.target.value),
                "aria-describedby": "campaignName-hint"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/partner.tsx",
                lineNumber: 655,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "ad-field-hint", id: "campaignName-hint", children: "Give your campaign a name so you can find it later." }, void 0, !1, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 666,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 652,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "fieldset",
            {
              className: "form-field ad-objective-group",
              "aria-describedby": errors.objective ? "objective-error" : "objective-hint",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("legend", { children: "Ad Objective" }, void 0, !1, {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 675,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "ad-field-hint", id: "objective-hint", children: "Pick the objective that best matches your goals." }, void 0, !1, {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 676,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ad-objectives", children: OBJECTIVES.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { className: "ad-objective", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
                      lineNumber: 683,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "ad-objective-card", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "ad-objective-head", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "ad-objective-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ObjectiveIconSvg, { name: option.icon }, void 0, !1, {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 693,
                        columnNumber: 27
                      }, this) }, void 0, !1, {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 692,
                        columnNumber: 25
                      }, this),
                      option.label
                    ] }, void 0, !0, {
                      fileName: "app/routes/partner.tsx",
                      lineNumber: 691,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "ad-objective-desc", children: option.description }, void 0, !1, {
                      fileName: "app/routes/partner.tsx",
                      lineNumber: 697,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/partner.tsx",
                    lineNumber: 690,
                    columnNumber: 21
                  }, this)
                ] }, option.value, !0, {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 682,
                  columnNumber: 19
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 680,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ad-objective-detail", "aria-live": "polite", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ad-detail-inner", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ad-detail-head", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "ad-detail-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ObjectiveIconSvg, { name: selectedObjective.icon }, void 0, !1, {
                      fileName: "app/routes/partner.tsx",
                      lineNumber: 708,
                      columnNumber: 23
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/partner.tsx",
                      lineNumber: 707,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "ad-detail-name", children: selectedObjective.label }, void 0, !1, {
                      fileName: "app/routes/partner.tsx",
                      lineNumber: 710,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/partner.tsx",
                    lineNumber: 706,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "ad-detail-lead", children: selectedObjective.description }, void 0, !1, {
                    fileName: "app/routes/partner.tsx",
                    lineNumber: 712,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "ad-detail-heading", children: "How it works" }, void 0, !1, {
                    fileName: "app/routes/partner.tsx",
                    lineNumber: 714,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "ad-detail-text", children: selectedObjective.howItWorks }, void 0, !1, {
                    fileName: "app/routes/partner.tsx",
                    lineNumber: 715,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "ad-detail-heading", children: "Good for" }, void 0, !1, {
                    fileName: "app/routes/partner.tsx",
                    lineNumber: 717,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("ul", { className: "ad-detail-tags", children: selectedObjective.goodFor.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: tag }, tag, !1, {
                    fileName: "app/routes/partner.tsx",
                    lineNumber: 720,
                    columnNumber: 23
                  }, this)) }, void 0, !1, {
                    fileName: "app/routes/partner.tsx",
                    lineNumber: 718,
                    columnNumber: 19
                  }, this)
                ] }, selectedObjective.value, !0, {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 705,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 704,
                  columnNumber: 15
                }, this),
                fieldError("objective")
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/partner.tsx",
              lineNumber: 671,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 651,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ad-form-section", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "ad-section-heading", children: "Schedule & Budget" }, void 0, !1, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 732,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "form-group-row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { htmlFor: "targetDate", children: "Target Start Date" }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 735,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                "div",
                {
                  className: "ad-date-input-wrapper",
                  onClick: () => openPicker(targetDateRef),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                      "input",
                      {
                        ref: targetDateRef,
                        type: "date",
                        id: "targetDate",
                        name: "targetDate",
                        required: !0,
                        min: minDate,
                        onChange: (e) => setStartDate(e.target.value),
                        "aria-invalid": errors.targetDate ? !0 : void 0,
                        "aria-describedby": errors.targetDate ? "targetDate-error" : void 0
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 740,
                        columnNumber: 19
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "ad-date-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }, void 0, !1, {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 753,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("line", { x1: "16", y1: "2", x2: "16", y2: "6" }, void 0, !1, {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 754,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("line", { x1: "8", y1: "2", x2: "8", y2: "6" }, void 0, !1, {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 755,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("line", { x1: "3", y1: "10", x2: "21", y2: "10" }, void 0, !1, {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 756,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/partner.tsx",
                      lineNumber: 752,
                      columnNumber: 21
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/partner.tsx",
                      lineNumber: 751,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 736,
                  columnNumber: 17
                },
                this
              ),
              fieldError("targetDate")
            ] }, void 0, !0, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 734,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "form-field", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { htmlFor: "endDate", children: "End Date (Optional)" }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 764,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                "div",
                {
                  className: "ad-date-input-wrapper",
                  onClick: () => openPicker(endDateRef),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                      "input",
                      {
                        ref: endDateRef,
                        type: "date",
                        id: "endDate",
                        name: "endDate",
                        min: startDate || minDate,
                        "aria-invalid": errors.endDate ? !0 : void 0,
                        "aria-describedby": errors.endDate ? "endDate-error" : void 0
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 769,
                        columnNumber: 19
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "ad-date-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }, void 0, !1, {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 780,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("line", { x1: "16", y1: "2", x2: "16", y2: "6" }, void 0, !1, {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 781,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("line", { x1: "8", y1: "2", x2: "8", y2: "6" }, void 0, !1, {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 782,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("line", { x1: "3", y1: "10", x2: "21", y2: "10" }, void 0, !1, {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 783,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/partner.tsx",
                      lineNumber: 779,
                      columnNumber: 21
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/partner.tsx",
                      lineNumber: 778,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 765,
                  columnNumber: 17
                },
                this
              ),
              fieldError("endDate")
            ] }, void 0, !0, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 763,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 733,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("fieldset", { className: "form-field ad-budget", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("legend", { children: "Estimated Budget" }, void 0, !1, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 792,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ad-chips", children: BUDGET_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { className: "ad-chip", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "radio", name: "budget", value: option.value, defaultChecked: option.value === BUDGET_OPTIONS[0].value }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 796,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: option.label }, void 0, !1, {
                fileName: "app/routes/partner.tsx",
                lineNumber: 797,
                columnNumber: 21
              }, this)
            ] }, option.value, !0, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 795,
              columnNumber: 19
            }, this)) }, void 0, !1, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 793,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 791,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 731,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ad-form-section", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "ad-section-heading", children: "More Context" }, void 0, !1, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 806,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "form-field full-width", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "textarea",
            {
              id: "notes",
              name: "notes",
              rows: 4,
              maxLength: 5e3,
              placeholder: "Share your UTM code, landing page URL, or a few campaign details..."
            },
            void 0,
            !1,
            {
              fileName: "app/routes/partner.tsx",
              lineNumber: 808,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 807,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "ad-section-heading", children: "Existing Campaign (Optional)" }, void 0, !1, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 817,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "form-field full-width", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              "input",
              {
                type: "text",
                id: "source",
                name: "source",
                autoComplete: "off",
                inputMode: "url",
                placeholder: "Link previous or existing campaign \u2014 https://",
                "aria-invalid": errors.source ? !0 : void 0,
                "aria-describedby": errors.source ? "source-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/partner.tsx",
                lineNumber: 819,
                columnNumber: 15
              },
              this
            ),
            fieldError("source")
          ] }, void 0, !0, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 818,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 805,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
            fileName: "app/routes/partner.tsx",
            lineNumber: 834,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "ad-submit-btn",
            disabled: submitting,
            "aria-busy": submitting,
            children: submitting ? "Submitting Request..." : "Submit Booking Request"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/partner.tsx",
            lineNumber: 843,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ad-form-section ad-form-submit", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "subscribe-altcha", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
              fileName: "app/routes/partner.tsx",
              lineNumber: 854,
              columnNumber: 15
            }, this),
            fieldError("altcha")
          ] }, void 0, !0, {
            fileName: "app/routes/partner.tsx",
            lineNumber: 853,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "footer",
            {
              className: "feed-footer",
              id: "subscribe",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                "form",
                {
                  method: "post",
                  action: "https://app.thepoast.com/subscription/form",
                  className: "feed-subscribe-form",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "feed-legal", children: [
                    "By submitting, you agree to our",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react17.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
                      fileName: "app/routes/partner.tsx",
                      lineNumber: 870,
                      columnNumber: 13
                    }, this),
                    " ",
                    "&",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react17.Link, { to: "/policies/privacy", children: "Privacy" }, void 0, !1, {
                      fileName: "app/routes/partner.tsx",
                      lineNumber: 874,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("br", {}, void 0, !1, {
                      fileName: "app/routes/partner.tsx",
                      lineNumber: 877,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "innerfeed-legal", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react17.Link, { className: "space", to: "/about", children: "About" }, void 0, !1, {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 879,
                        columnNumber: 13
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react17.Link, { className: "space", to: "/archive", children: "Archive" }, void 0, !1, {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 880,
                        columnNumber: 13
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react17.Link, { className: "space", to: "/submit-post", children: "Submit Post" }, void 0, !1, {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 881,
                        columnNumber: 13
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react17.Link, { className: "space", to: "/partner", children: "Partner" }, void 0, !1, {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 882,
                        columnNumber: 13
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react17.Link, { className: "space", to: "/book", children: "Advertise" }, void 0, !1, {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 883,
                        columnNumber: 13
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "copyright", children: "\xA9 2026 The Poast" }, void 0, !1, {
                        fileName: "app/routes/partner.tsx",
                        lineNumber: 884,
                        columnNumber: 13
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/partner.tsx",
                      lineNumber: 878,
                      columnNumber: 13
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/partner.tsx",
                    lineNumber: 868,
                    columnNumber: 11
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/partner.tsx",
                  lineNumber: 863,
                  columnNumber: 9
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/partner.tsx",
              lineNumber: 858,
              columnNumber: 7
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/partner.tsx",
          lineNumber: 852,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/partner.tsx",
        lineNumber: 572,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.tsx",
      lineNumber: 567,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/partner.tsx",
    lineNumber: 560,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  meta: () => meta8
});
var import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), meta8 = () => ({
  title: "About : The Poast",
  description: "We find the good stuff and bring it to you every day."
}), AUDIENCE2 = ["Founders", "Executives", "Builders"], PRINCIPLES = [
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
];
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "feed-page ad-booking-page about-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("header", { className: "feed-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react18.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "img",
        {
          src: "/img/tp.png",
          alt: "The Poast",
          loading: "eager",
          decoding: "async"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 35,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react18.Link, { to: "#subscribe", className: "feed-subscribe", children: "Subscribe" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("main", { className: "ad-booking-card about-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "ad-badge", children: "About The Poast" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "about-section", "aria-labelledby": "about-what", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "about-section-title", id: "about-what", children: "What's The Poast?" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "about-text", children: "We're a daily feed of snarky comments and posts from across the business world." }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "about-section", "aria-labelledby": "about-who", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "about-section-title", id: "about-who", children: "Who reads it?" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "about-text", children: "We're frequently read by people who like to get things done." }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "about-chips", children: AUDIENCE2.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "about-chip", children: group }, group, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "about-section", "aria-labelledby": "about-expect", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "about-section-title", id: "about-expect", children: "What to expect" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "about-grid", children: PRINCIPLES.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("article", { className: "about-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h3", { children: item.title }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: item.body }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this)
        ] }, item.title, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "about-cta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react18.Link, { to: "/", className: "about-btn", children: "Return to The Poast" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react18.Link, { to: "/book", className: "back-btn", children: "Advertise with us" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "footer",
        {
          className: "feed-footer",
          id: "subscribe",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            "form",
            {
              method: "post",
              action: "https://app.thepoast.com/subscription/form",
              className: "feed-subscribe-form",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "feed-header", children: "Get The Poast" }, void 0, !1, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 111,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "feed-input-bar", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
                      fileName: "app/routes/about.tsx",
                      lineNumber: 115,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                    "button",
                    {
                      className: "feed-submit",
                      type: "submit",
                      children: "Subscribe"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/about.tsx",
                      lineNumber: 123,
                      columnNumber: 13
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 114,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 132,
                  columnNumber: 13
                }, this) }, void 0, !1, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 131,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
                    fileName: "app/routes/about.tsx",
                    lineNumber: 135,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                  "input",
                  {
                    type: "hidden",
                    name: "nonce"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/about.tsx",
                    lineNumber: 142,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "feed-legal", children: [
                  "By submitting, you agree to our",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react18.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
                    fileName: "app/routes/about.tsx",
                    lineNumber: 149,
                    columnNumber: 13
                  }, this),
                  " ",
                  "&",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react18.Link, { to: "/policies/privacy", children: "Privacy" }, void 0, !1, {
                    fileName: "app/routes/about.tsx",
                    lineNumber: 153,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/about.tsx",
                    lineNumber: 156,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "innerfeed-legal", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react18.Link, { className: "space", to: "/about", children: "About" }, void 0, !1, {
                      fileName: "app/routes/about.tsx",
                      lineNumber: 158,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react18.Link, { className: "space", to: "/archive", children: "Archive" }, void 0, !1, {
                      fileName: "app/routes/about.tsx",
                      lineNumber: 159,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react18.Link, { className: "space", to: "/submit-post", children: "Submit Post" }, void 0, !1, {
                      fileName: "app/routes/about.tsx",
                      lineNumber: 160,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react18.Link, { className: "space", to: "/partner", children: "Partner" }, void 0, !1, {
                      fileName: "app/routes/about.tsx",
                      lineNumber: 161,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react18.Link, { className: "space", to: "/book", children: "Advertise" }, void 0, !1, {
                      fileName: "app/routes/about.tsx",
                      lineNumber: 162,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "copyright", children: "\xA9 2026 The Poast" }, void 0, !1, {
                      fileName: "app/routes/about.tsx",
                      lineNumber: 163,
                      columnNumber: 13
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/about.tsx",
                    lineNumber: 157,
                    columnNumber: 13
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 147,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/about.tsx",
              lineNumber: 106,
              columnNumber: 9
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/feeds.tsx
var feeds_exports = {};
__export(feeds_exports, {
  default: () => Feeds,
  headers: () => headers5,
  links: () => links6,
  loader: () => loader5,
  shouldRevalidate: () => shouldRevalidate3
});
var import_react19 = require("react"), import_react20 = require("@remix-run/react"), import_node5 = require("@remix-run/node");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), links6 = () => [
  {
    rel: "preconnect",
    href: "https://img.thepoast.com"
  },
  {
    rel: "dns-prefetch",
    href: "https://img.thepoast.com"
  }
], headers5 = ({
  loaderHeaders
}) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? "no-store"
});
function shouldRevalidate3() {
  return !1;
}
var FEED_LIMIT3 = 30, WORK_TIMEZONE = "America/Toronto";
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
async function loader5() {
  let campaigns = await listFinishedCampaigns(), feeds = getLatestCampaignPerDay(
    campaigns,
    FEED_LIMIT3
  ).map((campaign) => {
    let id = String(campaign.id), date = getCampaignDate(campaign) || (/* @__PURE__ */ new Date()).toISOString();
    return {
      id,
      subject: campaign.subject || "The Poast",
      date,
      dateLabel: formatDateLabel(date)
    };
  });
  feeds.length > 0 && warmIssues(
    feeds.map((feed) => feed.id)
  );
  let degraded = campaigns.length === 0;
  return (0, import_node5.json)(
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
var MAX_CONCURRENT2 = 2, active2 = 0, waiting2 = [];
function schedule2(task, priority = !1) {
  return new Promise(
    (resolve, reject) => {
      let run = () => {
        active2++, task().then(resolve, reject).finally(() => {
          var _a2;
          active2--, (_a2 = waiting2.shift()) == null || _a2();
        });
      };
      priority || active2 < MAX_CONCURRENT2 ? run() : waiting2.push(run);
    }
  );
}
var sleep3 = (ms) => new Promise(
  (resolve) => setTimeout(resolve, ms)
);
async function fetchIssue(id, signal) {
  let url = `/feeds/full/${encodeURIComponent(id)}`, lastError;
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
          `Issue request failed: ${response.status}`
        );
      let text = await response.text();
      if (!text)
        throw new Error(
          "Empty issue"
        );
      return text;
    } catch (error) {
      if (signal.aborted)
        throw error;
      lastError = error, await sleep3(
        300 * (attempt + 1)
      );
    }
  }
  throw lastError;
}
function FeedCard2({
  feed,
  priority
}) {
  let ref = (0, import_react19.useRef)(null), [html, setHtml] = (0, import_react19.useState)(null), [failed, setFailed] = (0, import_react19.useState)(!1);
  return (0, import_react19.useEffect)(() => {
    if (html || failed)
      return;
    let controller = new AbortController(), load = () => {
      schedule2(
        () => fetchIssue(
          feed.id,
          controller.signal
        ),
        priority
      ).then((result) => {
        controller.signal.aborted || (result ? setHtml(result) : setFailed(!0));
      }).catch((error) => {
        controller.signal.aborted || (console.error(
          `[feeds] Failed to load issue ${feed.id}:`,
          error
        ), setFailed(!0));
      });
    };
    if (priority)
      return load(), () => {
        controller.abort();
      };
    let element = ref.current;
    if (!element)
      return;
    let observer = new IntersectionObserver(
      ([entry2]) => {
        entry2 != null && entry2.isIntersecting && (observer.disconnect(), load());
      },
      {
        /*
         * Load substantially ahead of the
         * reader so scrolling feels instant.
         */
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
    failed,
    priority
  ]), /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    "section",
    {
      className: "feed-archive-item",
      "data-feed-id": feed.id,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { ref, children: html ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        feed_embed_default,
        {
          id: feed.id,
          html,
          title: feed.subject,
          interactive: !0,
          fallbackHeight: 900
        },
        void 0,
        !1,
        {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 389,
          columnNumber: 11
        },
        this
      ) : failed ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        import_react20.Link,
        {
          to: `/feeds/${feed.id}`,
          prefetch: "intent",
          className: "feeds-empty feed-fallback",
          style: {
            display: "block",
            padding: "32px 24px",
            textAlign: "center",
            textDecoration: "none",
            color: "inherit"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("strong", { children: feed.subject }, void 0, !1, {
              fileName: "app/routes/feeds.tsx",
              lineNumber: 409,
              columnNumber: 13
            }, this),
            feed.dateLabel && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "div",
              {
                style: {
                  opacity: 0.6,
                  marginTop: 6
                },
                children: feed.dateLabel
              },
              void 0,
              !1,
              {
                fileName: "app/routes/feeds.tsx",
                lineNumber: 414,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "div",
              {
                style: {
                  opacity: 0.6,
                  marginTop: 6
                },
                children: "Read this edition"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/feeds.tsx",
                lineNumber: 424,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 397,
          columnNumber: 11
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        "div",
        {
          className: "feeds-skeleton feed-lazy-placeholder",
          "aria-hidden": "true",
          style: {
            width: "100%",
            height: getCachedHeight(
              feed.id,
              !0
            ) ?? 900
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 434,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/feeds.tsx",
        lineNumber: 387,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 383,
      columnNumber: 5
    },
    this
  );
}
function Feeds() {
  let {
    feeds,
    degraded
  } = (0, import_react20.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "feeds-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("header", { className: "feed-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        import_react20.Link,
        {
          className: "feed-mark",
          to: "/",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "img",
            {
              src: "/img/tp.png",
              alt: "The Poast",
              decoding: "async"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/feeds.tsx",
              lineNumber: 471,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 467,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        "a",
        {
          href: "#subscribe",
          className: "feed-subscribe",
          children: "Subscribe"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 478,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 466,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("main", { className: "feeds-stream", children: feeds.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "feeds-empty", children: degraded ? "The archive is taking a moment. Please refresh shortly." : "No feeds yet." }, void 0, !1, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 488,
      columnNumber: 11
    }, this) : feeds.map(
      (feed, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        FeedCard2,
        {
          feed,
          priority: index === 0
        },
        feed.id,
        !1,
        {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 496,
          columnNumber: 15
        },
        this
      )
    ) }, void 0, !1, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 486,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      "footer",
      {
        className: "feed-footer",
        id: "subscribe",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          "form",
          {
            method: "post",
            action: "https://app.thepoast.com/subscription/form",
            className: "feed-subscribe-form",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "feed-header", children: "Get The Poast" }, void 0, !1, {
                fileName: "app/routes/feeds.tsx",
                lineNumber: 516,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "feed-input-bar", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
                    fileName: "app/routes/feeds.tsx",
                    lineNumber: 520,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "button",
                  {
                    className: "feed-submit",
                    type: "submit",
                    children: "Subscribe"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/feeds.tsx",
                    lineNumber: 528,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/feeds.tsx",
                lineNumber: 519,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
                fileName: "app/routes/feeds.tsx",
                lineNumber: 537,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/routes/feeds.tsx",
                lineNumber: 536,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 540,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "input",
                {
                  type: "hidden",
                  name: "nonce"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 547,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "feed-legal", children: [
                "By submitting, you agree to our",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react20.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 554,
                  columnNumber: 13
                }, this),
                " ",
                "&",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react20.Link, { to: "/policies/privacy", children: "Privacy" }, void 0, !1, {
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 558,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 561,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "innerfeed-legal", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react20.Link, { className: "space", to: "/about", children: "About" }, void 0, !1, {
                    fileName: "app/routes/feeds.tsx",
                    lineNumber: 563,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react20.Link, { className: "space", to: "/archive", children: "Archive" }, void 0, !1, {
                    fileName: "app/routes/feeds.tsx",
                    lineNumber: 564,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react20.Link, { className: "space", to: "/submit-post", children: "Submit Post" }, void 0, !1, {
                    fileName: "app/routes/feeds.tsx",
                    lineNumber: 565,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react20.Link, { className: "space", to: "/partner", children: "Partner" }, void 0, !1, {
                    fileName: "app/routes/feeds.tsx",
                    lineNumber: 566,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react20.Link, { className: "space", to: "/book", children: "Advertise" }, void 0, !1, {
                    fileName: "app/routes/feeds.tsx",
                    lineNumber: 567,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "copyright", children: "\xA9 2026 The Poast" }, void 0, !1, {
                    fileName: "app/routes/feeds.tsx",
                    lineNumber: 568,
                    columnNumber: 13
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/feeds.tsx",
                  lineNumber: 562,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/feeds.tsx",
                lineNumber: 552,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/feeds.tsx",
            lineNumber: 511,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/feeds.tsx",
        lineNumber: 506,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/feeds.tsx",
    lineNumber: 465,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  headers: () => headers6,
  links: () => links7
});
var import_react21 = require("react"), import_react22 = require("@remix-run/react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), links7 = () => [
  {
    rel: "preconnect",
    href: "https://img.thepoast.com"
  },
  {
    rel: "dns-prefetch",
    href: "https://img.thepoast.com"
  }
], headers6 = () => ({
  "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=300"
});
function useHideTopbarNearFooter() {
  let footerRef = (0, import_react21.useRef)(null), [hidden, setHidden] = (0, import_react21.useState)(!1);
  return (0, import_react21.useEffect)(() => {
    let el = footerRef.current;
    if (!el || typeof IntersectionObserver > "u")
      return;
    let observer = new IntersectionObserver(
      ([entry2]) => setHidden(entry2.isIntersecting),
      { rootMargin: "0px 0px -10% 0px" }
    );
    return observer.observe(el), () => observer.disconnect();
  }, []), { footerRef, hidden };
}
function Index() {
  let { footerRef, hidden } = useHideTopbarNearFooter();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("header", { className: `feed-topbar${hidden ? " is-hidden" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react22.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "img",
        {
          src: "/img/tp.png",
          alt: "The Poast",
          decoding: "async"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 58,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("a", { href: "#subscribe", className: "feed-subscribe", children: "Subscribe" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("main", { className: "feed-stream", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "feed-embed loaded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      feed_embed_default,
      {
        id: "live",
        src: "/live",
        title: "Today's Edition",
        interactive: !0,
        fallbackHeight: 900
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 72,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      "footer",
      {
        ref: footerRef,
        className: "feed-footer",
        id: "subscribe",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "form",
          {
            method: "post",
            action: "https://app.thepoast.com/subscription/form",
            className: "feed-subscribe-form",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "feed-header", children: "Get The Poast" }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 92,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "feed-input-bar", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
                    lineNumber: 95,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                  "button",
                  {
                    className: "feed-submit",
                    type: "submit",
                    children: "Subscribe"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 103,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/index.tsx",
                lineNumber: 94,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 112,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 111,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
                  lineNumber: 115,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                "input",
                {
                  type: "hidden",
                  name: "nonce"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 122,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "feed-legal", children: [
                "By submitting, you agree to our",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react22.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 131,
                  columnNumber: 13
                }, this),
                " ",
                "&",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react22.Link, { to: "/policies/privacy", children: "Privacy" }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 133,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "innerfeed-legal", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react22.Link, { className: "space", to: "/about", children: "About" }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 135,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react22.Link, { className: "space", to: "/archive", children: "Archive" }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 136,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react22.Link, { className: "space", to: "/submit-post", children: "Submit Post" }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 137,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react22.Link, { className: "space", to: "/partner", children: "Partner" }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 138,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react22.Link, { className: "space", to: "/book", children: "Advertise" }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 139,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "copyright", children: "\xA9 2026 The Poast" }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 140,
                    columnNumber: 15
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 134,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/index.tsx",
                lineNumber: 129,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 87,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 82,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

// app/routes/book.tsx
var book_exports = {};
__export(book_exports, {
  action: () => action3,
  default: () => Advertise2,
  headers: () => headers7
});
var import_node6 = require("@remix-run/node"), import_react23 = require("@remix-run/react"), import_react24 = require("react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), SHOW_ERROR_DETAILS3 = !0, headers7 = () => ({
  "Cache-Control": "public, max-age=60, s-maxage=120, stale-while-revalidate=600"
}), str3 = (value, max) => typeof value == "string" ? value.trim().slice(0, max) : "", EMAIL_RE3 = /^[^\s@'"\\]+@[^\s@'"\\]+\.[^\s@'"\\]+$/;
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
function listmonkConfig3() {
  let baseUrl = (process.env.LISTMONK_URL || "https://app.thepoast.com").replace(/\/+$/, ""), apiUser = process.env.LISTMONK_API_USER || process.env.LISTMONK_USERNAME, apiToken = process.env.LISTMONK_API_TOKEN || process.env.LISTMONK_TOKEN, listId = Number(process.env.LISTMONK_ADVERTISER_LIST_ID || 31), missing = [];
  if (apiUser || missing.push("LISTMONK_USERNAME"), apiToken || missing.push("LISTMONK_TOKEN"), (!Number.isInteger(listId) || listId < 1) && missing.push("LISTMONK_ADVERTISER_LIST_ID"), missing.length)
    throw new Error(`Missing or invalid env vars: ${missing.join(", ")}`);
  return { baseUrl, apiUser, apiToken, listId };
}
async function listmonk3(path, init = {}) {
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
function explainListmonkFailure3(step, status, body) {
  let hint = "";
  return status === 401 ? hint = "Listmonk rejected credentials." : status === 403 ? hint = "API user lacks permission." : status === 404 ? hint = "Listmonk URL/path not found." : status === 400 && (hint = "Listmonk rejected data. Check list ID."), `Listmonk ${step} failed (HTTP ${status}). ${hint} Response: ${body.slice(0, 300)}`;
}
async function saveAdvertiserLead2(lead) {
  var _a2, _b2;
  let { listId } = listmonkConfig3(), now = (/* @__PURE__ */ new Date()).toISOString(), bookingRequest = {
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
  }, name = buildSubscriberName2(lead.firstName, lead.lastName, lead.company), createRes = await listmonk3("/api/subscribers", {
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
  let query = `subscribers.email = '${lead.email.replace(/'/g, "''")}'`, findRes = await listmonk3(
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
  ), updateRes = await listmonk3(`/api/subscribers/${existing.id}`, {
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
async function action3({ request }) {
  let formData = await request.formData();
  if (str3(formData.get("nonce"), 200))
    return (0, import_node6.redirect)("/thank-you");
  let company = str3(formData.get("company"), 200), websiteRaw = str3(formData.get("website"), 300), firstName = str3(formData.get("firstName"), 100), lastName = str3(formData.get("lastName"), 100), email = str3(formData.get("email"), 254).toLowerCase(), phone = str3(formData.get("phone"), 50), notes = str3(formData.get("notes"), 5e3), paymentMethod = str3(formData.get("paymentMethod"), 50), altcha = str3(formData.get("altcha"), 2e4), fieldErrors = {};
  company || (fieldErrors.company = "Please enter your company."), firstName || (fieldErrors.name = "Please enter your first name."), lastName || (fieldErrors.name = "Please enter your last name."), EMAIL_RE3.test(email) || (fieldErrors.email = "Please enter a valid work email.");
  let website = normalizeWebsite2(websiteRaw);
  if (website || (fieldErrors.website = "Please enter a valid website."), ["Credit Card", "Insertion Order"].includes(paymentMethod) || (fieldErrors.paymentMethod = "Please choose a payment method."), process.env.ALTCHA_REQUIRED !== "false" && !altcha && (fieldErrors.altcha = "Please complete the verification and try again."), Object.keys(fieldErrors).length > 0)
    return (0, import_node6.json)(
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
    return (0, import_node6.json)(
      {
        error: "Something went wrong sending your request. Please try again in a moment.",
        debug: SHOW_ERROR_DETAILS3 || process.env.BOOK_DEBUG === "true" ? reason : void 0
      },
      { status: 500 }
    );
  }
  return (0, import_node6.redirect)("/thank-you");
}
function Advertise2() {
  let actionData = (0, import_react23.useActionData)(), errors = (actionData == null ? void 0 : actionData.fieldErrors) ?? {}, [selectedPaymentMethod, setSelectedPaymentMethod] = (0, import_react24.useState)("Credit Card"), fieldError = (name) => errors[name] ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: "ad-field-error", id: `${name}-error`, role: "alert", children: errors[name] }, void 0, !1, {
    fileName: "app/routes/book.tsx",
    lineNumber: 307,
    columnNumber: 7
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "feed-page ad-booking-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("header", { className: "feed-topbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react23.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("img", { src: "/img/tp.png", alt: "The Poast", decoding: "async" }, void 0, !1, {
      fileName: "app/routes/book.tsx",
      lineNumber: 316,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/book.tsx",
      lineNumber: 315,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/book.tsx",
      lineNumber: 314,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("main", { className: "ad-booking-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "ad-booking-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: "ad-badge", children: "ADVERTISE IN THE POAST" }, void 0, !1, {
        fileName: "app/routes/book.tsx",
        lineNumber: 322,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/book.tsx",
        lineNumber: 321,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react23.Form, { method: "post", className: "ad-booking-form", children: [
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "ad-form-error", role: "alert", children: [
          actionData.error,
          actionData.debug && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("code", { className: "ad-form-error-debug", children: actionData.debug }, void 0, !1, {
            fileName: "app/routes/book.tsx",
            lineNumber: 330,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/book.tsx",
          lineNumber: 327,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "company", children: "Company" }, void 0, !1, {
              fileName: "app/routes/book.tsx",
              lineNumber: 338,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
                lineNumber: 339,
                columnNumber: 15
              },
              this
            ),
            fieldError("company")
          ] }, void 0, !0, {
            fileName: "app/routes/book.tsx",
            lineNumber: 337,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "website", children: "Website" }, void 0, !1, {
              fileName: "app/routes/book.tsx",
              lineNumber: 353,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
                lineNumber: 354,
                columnNumber: 15
              },
              this
            ),
            fieldError("website")
          ] }, void 0, !0, {
            fileName: "app/routes/book.tsx",
            lineNumber: 352,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/book.tsx",
          lineNumber: 336,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "firstName", children: "First Name" }, void 0, !1, {
              fileName: "app/routes/book.tsx",
              lineNumber: 371,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
                lineNumber: 372,
                columnNumber: 15
              },
              this
            ),
            fieldError("name")
          ] }, void 0, !0, {
            fileName: "app/routes/book.tsx",
            lineNumber: 370,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "lastName", children: "Last Name" }, void 0, !1, {
              fileName: "app/routes/book.tsx",
              lineNumber: 386,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
                lineNumber: 387,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/book.tsx",
            lineNumber: 385,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/book.tsx",
          lineNumber: 369,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-group-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "email", children: "Business Email" }, void 0, !1, {
              fileName: "app/routes/book.tsx",
              lineNumber: 400,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
                lineNumber: 401,
                columnNumber: 15
              },
              this
            ),
            fieldError("email")
          ] }, void 0, !0, {
            fileName: "app/routes/book.tsx",
            lineNumber: 399,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-field", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "phone", children: "Phone Number" }, void 0, !1, {
              fileName: "app/routes/book.tsx",
              lineNumber: 416,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
                lineNumber: 417,
                columnNumber: 15
              },
              this
            ),
            fieldError("phone")
          ] }, void 0, !0, {
            fileName: "app/routes/book.tsx",
            lineNumber: 415,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/book.tsx",
          lineNumber: 398,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { children: "Payment Method" }, void 0, !1, {
            fileName: "app/routes/book.tsx",
            lineNumber: 433,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              lineNumber: 434,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pill-group", children: ["Credit Card", "Insertion Order"].map((method) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
              lineNumber: 441,
              columnNumber: 17
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/book.tsx",
            lineNumber: 439,
            columnNumber: 13
          }, this),
          fieldError("paymentMethod")
        ] }, void 0, !0, {
          fileName: "app/routes/book.tsx",
          lineNumber: 432,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-field full-width", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "notes", children: "How can we help you?" }, void 0, !1, {
            fileName: "app/routes/book.tsx",
            lineNumber: 458,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
            lineNumber: 469,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "submit", className: "ad-submit-btn", children: "Submit Booking Request" }, void 0, !1, {
          fileName: "app/routes/book.tsx",
          lineNumber: 478,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "subscribe-altcha", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/book.tsx",
            lineNumber: 483,
            columnNumber: 13
          }, this),
          fieldError("altcha")
        ] }, void 0, !0, {
          fileName: "app/routes/book.tsx",
          lineNumber: 482,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          "footer",
          {
            className: "feed-footer",
            id: "subscribe",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "form",
              {
                method: "post",
                action: "https://app.thepoast.com/subscription/form",
                className: "feed-subscribe-form",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "feed-legal", children: [
                  "By submitting, you agree to our",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react23.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
                    fileName: "app/routes/book.tsx",
                    lineNumber: 498,
                    columnNumber: 13
                  }, this),
                  " ",
                  "&",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react23.Link, { to: "/policies/privacy", children: "Privacy" }, void 0, !1, {
                    fileName: "app/routes/book.tsx",
                    lineNumber: 502,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/book.tsx",
                    lineNumber: 505,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "innerfeed-legal", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react23.Link, { className: "space", to: "/about", children: "About" }, void 0, !1, {
                      fileName: "app/routes/book.tsx",
                      lineNumber: 507,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react23.Link, { className: "space", to: "/archive", children: "Archive" }, void 0, !1, {
                      fileName: "app/routes/book.tsx",
                      lineNumber: 508,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react23.Link, { className: "space", to: "/submit-post", children: "Submit Post" }, void 0, !1, {
                      fileName: "app/routes/book.tsx",
                      lineNumber: 509,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react23.Link, { className: "space", to: "/partner", children: "Partner" }, void 0, !1, {
                      fileName: "app/routes/book.tsx",
                      lineNumber: 510,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react23.Link, { className: "space", to: "/book", children: "Advertise" }, void 0, !1, {
                      fileName: "app/routes/book.tsx",
                      lineNumber: 511,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "copyright", children: "\xA9 2026 The Poast" }, void 0, !1, {
                      fileName: "app/routes/book.tsx",
                      lineNumber: 512,
                      columnNumber: 13
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/book.tsx",
                    lineNumber: 506,
                    columnNumber: 13
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/book.tsx",
                  lineNumber: 496,
                  columnNumber: 11
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/book.tsx",
                lineNumber: 491,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/book.tsx",
            lineNumber: 487,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/book.tsx",
        lineNumber: 325,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react23.Link, { to: "/", className: "back-btn", children: "\u2190 Return to The Poast" }, void 0, !1, {
        fileName: "app/routes/book.tsx",
        lineNumber: 521,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/book.tsx",
      lineNumber: 320,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/book.tsx",
    lineNumber: 313,
    columnNumber: 5
  }, this);
}

// app/routes/live.tsx
var live_exports = {};
__export(live_exports, {
  loader: () => loader6
});
var LIVE_CACHE_CONTROL = "public, max-age=20, s-maxage=30, stale-while-revalidate=600", EMAIL_LOGO_BLOCK = /<p\b[^>]*class=["']tac["'][^>]*>\s*<a\b[^>]*>\s*<img\b[^>]*src=["']https:\/\/img\.thepoast\.com\/tp_u6yYte\.png["'][^>]*>\s*<\/a>\s*<\/p>/i;
async function loader6() {
  let issue = await getLiveIssue();
  if (!issue)
    return new Response(
      `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>The Poast</title>
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
<p>The Poast is loading. Please refresh shortly.</p>
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
  let body = issue.body.replace(EMAIL_LOGO_BLOCK, "");
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": LIVE_CACHE_CONTROL,
      "X-Content-Type-Options": "nosniff"
    }
  });
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => NotFound,
  headers: () => headers8,
  links: () => links8
});
var import_react25 = require("@remix-run/react");
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), links8 = () => [
  {
    rel: "preconnect",
    href: "https://img.thepoast.com"
  },
  {
    rel: "dns-prefetch",
    href: "https://img.thepoast.com"
  }
], headers8 = () => ({
  "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=300"
});
function NotFound() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("header", { className: "feed-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "feed-status", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "status-dot" }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        "404 Error"
      ] }, void 0, !0, {
        fileName: "app/routes/$.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_react25.Link,
        {
          className: "feed-mark",
          to: "/",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "img",
            {
              src: "/img/tp.png",
              alt: "The Poast",
              loading: "eager",
              decoding: "async"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/$.tsx",
              lineNumber: 39,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/$.tsx",
          lineNumber: 35,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "a",
        {
          href: "#subscribe",
          className: "feed-subscribe",
          children: "Subscribe"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/$.tsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/$.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("main", { className: "feed-stream", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "feed-embed loaded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      feed_embed_default,
      {
        id: "live",
        src: "/live",
        title: "Today's Edition",
        interactive: !0,
        fallbackHeight: 900
      },
      void 0,
      !1,
      {
        fileName: "app/routes/$.tsx",
        lineNumber: 57,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      "footer",
      {
        className: "feed-footer",
        id: "subscribe",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          "form",
          {
            method: "post",
            action: "https://app.thepoast.com/subscription/form",
            className: "feed-subscribe-form",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "feed-header", children: "Get The Poast" }, void 0, !1, {
                fileName: "app/routes/$.tsx",
                lineNumber: 77,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "feed-input-bar", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
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
                    lineNumber: 81,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                  "button",
                  {
                    className: "feed-submit",
                    type: "submit",
                    children: "Subscribe"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/$.tsx",
                    lineNumber: 89,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/$.tsx",
                lineNumber: 80,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
                fileName: "app/routes/$.tsx",
                lineNumber: 98,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/routes/$.tsx",
                lineNumber: 97,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
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
                  lineNumber: 101,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                "input",
                {
                  type: "hidden",
                  name: "nonce"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/$.tsx",
                  lineNumber: 108,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "feed-legal", children: [
                "By submitting, you agree to our",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react25.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
                  fileName: "app/routes/$.tsx",
                  lineNumber: 115,
                  columnNumber: 13
                }, this),
                " ",
                "&",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react25.Link, { to: "/policies/privacy", children: "Privacy" }, void 0, !1, {
                  fileName: "app/routes/$.tsx",
                  lineNumber: 119,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("br", {}, void 0, !1, {
                  fileName: "app/routes/$.tsx",
                  lineNumber: 122,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "innerfeed-legal", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react25.Link, { className: "space", to: "/about", children: "About" }, void 0, !1, {
                    fileName: "app/routes/$.tsx",
                    lineNumber: 124,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react25.Link, { className: "space", to: "/archive", children: "Archive" }, void 0, !1, {
                    fileName: "app/routes/$.tsx",
                    lineNumber: 125,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react25.Link, { className: "space", to: "/submit-post", children: "Submit Post" }, void 0, !1, {
                    fileName: "app/routes/$.tsx",
                    lineNumber: 126,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react25.Link, { className: "space", to: "/partner", children: "Partner" }, void 0, !1, {
                    fileName: "app/routes/$.tsx",
                    lineNumber: 127,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react25.Link, { className: "space", to: "/book", children: "Advertise" }, void 0, !1, {
                    fileName: "app/routes/$.tsx",
                    lineNumber: 128,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "copyright", children: "\xA9 2026 The Poast" }, void 0, !1, {
                    fileName: "app/routes/$.tsx",
                    lineNumber: 129,
                    columnNumber: 13
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/$.tsx",
                  lineNumber: 123,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/$.tsx",
                lineNumber: 113,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/$.tsx",
            lineNumber: 72,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/$.tsx",
        lineNumber: 67,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/$.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-NFLTSOBZ.js", imports: ["/build/_shared/chunk-5S7OIOFF.js", "/build/_shared/chunk-IU43IUTG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-HPK2SPXQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-ZD7E7PNU.js", imports: ["/build/_shared/chunk-Q5BNSIRI.js", "/build/_shared/chunk-6ARFTHHB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-3ABAZ2BS.js", imports: ["/build/_shared/chunk-6ARFTHHB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/archive": { id: "routes/archive", parentId: "root", path: "archive", index: void 0, caseSensitive: void 0, module: "/build/routes/archive-RK7S3YOK.js", imports: ["/build/_shared/chunk-SHUQLU4M.js", "/build/_shared/chunk-Q5BNSIRI.js", "/build/_shared/chunk-3K2JK6MY.js", "/build/_shared/chunk-6ARFTHHB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/book": { id: "routes/book", parentId: "root", path: "book", index: void 0, caseSensitive: void 0, module: "/build/routes/book-UGET3WV7.js", imports: ["/build/_shared/chunk-3K2JK6MY.js", "/build/_shared/chunk-6ARFTHHB.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/confirm": { id: "routes/confirm", parentId: "root", path: "confirm", index: void 0, caseSensitive: void 0, module: "/build/routes/confirm-B5NQ5FHZ.js", imports: ["/build/_shared/chunk-3YPO5SKL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feeds": { id: "routes/feeds", parentId: "root", path: "feeds", index: void 0, caseSensitive: void 0, module: "/build/routes/feeds-A5CTP67N.js", imports: ["/build/_shared/chunk-SHUQLU4M.js", "/build/_shared/chunk-Q5BNSIRI.js", "/build/_shared/chunk-3K2JK6MY.js", "/build/_shared/chunk-6ARFTHHB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feeds.$id": { id: "routes/feeds.$id", parentId: "root", path: "feeds/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/feeds.$id-TQOM2O73.js", imports: ["/build/_shared/chunk-SHUQLU4M.js", "/build/_shared/chunk-Q5BNSIRI.js", "/build/_shared/chunk-3K2JK6MY.js", "/build/_shared/chunk-6ARFTHHB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/feeds.full.$id": { id: "routes/feeds.full.$id", parentId: "root", path: "feeds/full/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/feeds.full.$id-PPNRNRLN.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feeds.preview.$id": { id: "routes/feeds.preview.$id", parentId: "root", path: "feeds/preview/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/feeds.preview.$id-TSSBU4VE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-L6WQF6UY.js", imports: ["/build/_shared/chunk-Q5BNSIRI.js", "/build/_shared/chunk-6ARFTHHB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/live": { id: "routes/live", parentId: "root", path: "live", index: void 0, caseSensitive: void 0, module: "/build/routes/live-Q6E2GHNA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/media-kit": { id: "routes/media-kit", parentId: "root", path: "media-kit", index: void 0, caseSensitive: void 0, module: "/build/routes/media-kit-DGF5LMFF.js", imports: ["/build/_shared/chunk-6ARFTHHB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/partner": { id: "routes/partner", parentId: "root", path: "partner", index: void 0, caseSensitive: void 0, module: "/build/routes/partner-FWJOGWLT.js", imports: ["/build/_shared/chunk-3K2JK6MY.js", "/build/_shared/chunk-6ARFTHHB.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/privacy": { id: "routes/policies/privacy", parentId: "root", path: "policies/privacy", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/privacy-3RKPI64S.js", imports: ["/build/_shared/chunk-ANWEW5OK.js", "/build/_shared/chunk-3YPO5SKL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/terms": { id: "routes/policies/terms", parentId: "root", path: "policies/terms", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/terms-ORD3SNMA.js", imports: ["/build/_shared/chunk-ANWEW5OK.js", "/build/_shared/chunk-3YPO5SKL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/submit-post": { id: "routes/submit-post", parentId: "root", path: "submit-post", index: void 0, caseSensitive: void 0, module: "/build/routes/submit-post-RG4ARAF5.js", imports: ["/build/_shared/chunk-3K2JK6MY.js", "/build/_shared/chunk-6ARFTHHB.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/subscribe": { id: "routes/subscribe", parentId: "root", path: "subscribe", index: void 0, caseSensitive: void 0, module: "/build/routes/subscribe-ULTUFCKN.js", imports: ["/build/_shared/chunk-6ARFTHHB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/thank-you": { id: "routes/thank-you", parentId: "root", path: "thank-you", index: void 0, caseSensitive: void 0, module: "/build/routes/thank-you-4MD42CJF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "49ec20c5", hmr: void 0, url: "/build/manifest-49EC20C5.js" };

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
    module: feeds_id_exports
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
  "routes/archive": {
    id: "routes/archive",
    parentId: "root",
    path: "archive",
    index: void 0,
    caseSensitive: void 0,
    module: archive_exports
  },
  "routes/confirm": {
    id: "routes/confirm",
    parentId: "root",
    path: "confirm",
    index: void 0,
    caseSensitive: void 0,
    module: confirm_exports
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
  "routes/book": {
    id: "routes/book",
    parentId: "root",
    path: "book",
    index: void 0,
    caseSensitive: void 0,
    module: book_exports
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
