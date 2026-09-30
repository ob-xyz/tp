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
var global_default = "/build/_assets/global-V54GB5AT.css";

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
  title: "The Poast",
  description: "Get caught up right here, right now. Find out what's happening, then get back to it. That's The Poast.",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "color-scheme", content: "light dark" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
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
          lineNumber: 52,
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
          lineNumber: 57,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
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
              alternateName: ["ThePoast", "The Poast Newsletter", "thepoast.com", "the poast feed"],
              url: "https://thepoast.com",
              logo: "https://thepoast.com/favicon.ico",
              description: "Get caught up right here, right now. Find out what's happening, then get back to it. That's The Poast"
            })
          }
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 63,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 48,
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
  let headers5 = getAuthHeaders(accept), lastError;
  for (let attempt = 0; attempt < attempts; attempt++) {
    let controller = new AbortController(), timer = setTimeout(() => controller.abort(), timeoutMs), fatal = !1;
    try {
      let res = await fetch(`${LISTMONK_BASE_URL}${path}`, {
        headers: headers5,
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
async function getIssueWithin(id, ms) {
  let timer;
  try {
    return await Promise.race([
      getIssue(id).catch(() => null),
      new Promise((resolve) => {
        timer = setTimeout(() => resolve(null), ms);
      })
    ]);
  } finally {
    timer && clearTimeout(timer);
  }
}
function peekLeadStoryHtml(id) {
  let value = peek(`lead:${id}`);
  return typeof value == "string" ? value : null;
}
function peekIssue(id) {
  return peek(`issue:${id}`) ?? null;
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
var LIVE_CAMPAIGN_ID = 1, LIVE_KEY = "live:issue";
async function getLiveIssue() {
  try {
    return await cached(LIVE_KEY, 2e4, 15 * MIN, async () => {
      let html = await upstream(
        `/api/campaigns/${LIVE_CAMPAIGN_ID}/preview`,
        "text/html",
        6e3
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
    });
  } catch (error) {
    return console.error("[feeds] Live issue failed:", error), null;
  }
}
function peekLiveIssue() {
  return peek(LIVE_KEY) ?? null;
}
var liveGlobal = globalThis, _a, _b;
liveGlobal.__poastLiveWarm || (liveGlobal.__poastLiveWarm = !0, setTimeout(() => void getLiveIssue(), 300), (_b = (_a = setInterval(() => void getLiveIssue(), 25e3)).unref) == null || _b.call(_a));

// app/routes/feeds.preview.$id.tsx
var HTML_HEADERS = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control": "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400",
  "X-Content-Type-Options": "nosniff"
};
async function loader({ params }) {
  let id = params.id;
  if (!id || !/^\d+$/.test(id))
    return new Response("Bad campaign ID", {
      status: 400,
      headers: { "Cache-Control": "no-store" }
    });
  try {
    let html = await getLeadStoryHtml(id);
    return html ? new Response(html, { status: 200, headers: HTML_HEADERS }) : new Response("Lead story unavailable", {
      status: 404,
      headers: { "Cache-Control": "public, max-age=30" }
    });
  } catch (error) {
    return console.error(`[feeds] Failed to render preview ${id}:`, error), new Response("Preview temporarily unavailable", {
      status: 503,
      headers: {
        "Cache-Control": "no-store",
        "Retry-After": "2",
        "Content-Type": "text/plain; charset=utf-8"
      }
    });
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
var import_react3 = require("@remix-run/react"), import_react4 = require("react");

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
  let [showStickyNav, setShowStickyNav] = (0, import_react4.useState)(!1);
  return (0, import_react4.useEffect)(() => {
    let handleScroll = () => setShowStickyNav(window.scrollY > 50);
    return handleScroll(), window.addEventListener("scroll", handleScroll, { passive: !0 }), () => window.removeEventListener("scroll", handleScroll);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "content-privacy", id: "top-of-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `sticky-nav${showStickyNav ? " visible" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { className: "sticky-logo", to: "/", "aria-label": "The Poast home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: tp_default, alt: "The Poast", loading: "lazy", decoding: "async" }, void 0, !1, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/subscribe", className: "sticky-subscribe", children: "Subscribe" }, void 0, !1, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/legal-page.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", className: "logo", "aria-label": "The Poast home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: tp_default, alt: "The Poast Logo" }, void 0, !1, {
      fileName: "app/components/legal-page.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/legal-page.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "content-privacy2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: [
          title,
          "."
        ] }, void 0, !0, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        "Effective: ",
        effective,
        "."
      ] }, void 0, !0, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      toc3 && toc3.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "legal-toc", "aria-label": "On this page", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "legal-toc-label", children: "On this page" }, void 0, !1, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ol", { children: toc3.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: `#${item.id}`, children: item.label }, void 0, !1, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 60,
          columnNumber: 19
        }, this) }, item.id, !1, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 59,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/components/legal-page.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "legal-top", href: "#top-of-page", children: "Back to top \u2191" }, void 0, !1, {
        fileName: "app/components/legal-page.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/legal-page.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/legal-page.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/policies/privacy.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: showscroll_default }
], meta2 = () => ({
  title: "Privacy Policy |: The Poast",
  description: "How The Poast collects, uses, and protects your information, and the choices you have."
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
async function loader2({ params }) {
  let id = params.id;
  if (!id || !/^\d+$/.test(id))
    return new Response("Bad campaign ID", {
      status: 400,
      headers: { "Cache-Control": "no-store" }
    });
  try {
    let issue = await getIssue(id);
    return issue ? new Response(issue.body, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400",
        "X-Content-Type-Options": "nosniff"
      }
    }) : new Response("Issue unavailable", {
      status: 404,
      headers: { "Cache-Control": "public, max-age=30" }
    });
  } catch (error) {
    return console.error(`[feeds] Failed to render issue ${id}:`, error), new Response("Issue temporarily unavailable", {
      status: 503,
      headers: {
        "Cache-Control": "no-store",
        "Retry-After": "2",
        "Content-Type": "text/plain; charset=utf-8"
      }
    });
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
  title: "Terms and Conditions : The Poast",
  description: "The terms that govern your use of The Poast websites, newsletters, and products."
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

// app/routes/feeds.$id.tsx
var feeds_id_exports = {};
__export(feeds_id_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => FeedDetail,
  headers: () => headers,
  links: () => links4,
  loader: () => loader3,
  shouldRevalidate: () => shouldRevalidate
});
var import_node = require("@remix-run/node"), import_react7 = require("@remix-run/react");

// app/components/altcha.tsx
var import_react5 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function AltchaWrapper() {
  let [isMounted, setIsMounted] = (0, import_react5.useState)(!1);
  return (0, import_react5.useEffect)(() => {
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

// app/components/feed-embed.tsx
var import_react6 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), heightCache = /* @__PURE__ */ new Map(), keyFor = (id, interactive) => `${interactive ? "full" : "lead"}:${id}`;
function getCachedHeight(id, interactive = !1) {
  return heightCache.get(keyFor(id, interactive));
}
function FeedEmbed({
  id,
  html,
  title,
  interactive = !1,
  fallbackHeight = 360
}) {
  let key = keyFor(id, interactive), iframeRef = (0, import_react6.useRef)(null), observerRef = (0, import_react6.useRef)(null), observedBody = (0, import_react6.useRef)(null), [height, setHeight] = (0, import_react6.useState)(
    () => heightCache.get(key) ?? fallbackHeight
  ), attach = (0, import_react6.useCallback)(() => {
    var _a2, _b2, _c;
    let body = (_b2 = (_a2 = iframeRef.current) == null ? void 0 : _a2.contentDocument) == null ? void 0 : _b2.body;
    if (!body || body.childElementCount === 0)
      return !1;
    let measure = () => {
      let next = Math.ceil(Math.max(body.scrollHeight, body.offsetHeight));
      next <= 0 || (heightCache.set(key, next), setHeight((prev) => Math.abs(prev - next) > 1 ? next : prev));
    };
    return measure(), observedBody.current !== body && (observedBody.current = body, (_c = observerRef.current) == null || _c.disconnect(), typeof ResizeObserver < "u" && (observerRef.current = new ResizeObserver(measure), observerRef.current.observe(body))), !0;
  }, [key]);
  return (0, import_react6.useEffect)(() => {
    observedBody.current = null;
    let raf = 0, startedAt = performance.now(), tick = () => {
      attach() || performance.now() - startedAt > 1e4 || (raf = requestAnimationFrame(tick));
    };
    return tick(), () => {
      var _a2;
      cancelAnimationFrame(raf), (_a2 = observerRef.current) == null || _a2.disconnect(), observedBody.current = null;
    };
  }, [html, attach]), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "div",
    {
      style: {
        position: "relative",
        width: "100%",
        height,
        contain: "content"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "iframe",
        {
          ref: iframeRef,
          title,
          srcDoc: html,
          scrolling: "no",
          onLoad: attach,
          sandbox: interactive ? "allow-same-origin allow-popups allow-popups-to-escape-sandbox" : "allow-same-origin",
          style: {
            display: "block",
            width: "100%",
            height: "100%",
            border: 0,
            margin: 0,
            padding: 0,
            overflow: "hidden"
          }
        },
        void 0,
        !1,
        {
          fileName: "app/components/feed-embed.tsx",
          lineNumber: 94,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/feed-embed.tsx",
      lineNumber: 86,
      columnNumber: 5
    },
    this
  );
}

// app/routes/feeds.$id.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), links4 = () => [
  { rel: "stylesheet", href: showscroll_default },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
], headers = ({ loaderHeaders }) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? "no-store"
}), shouldRevalidate = ({
  currentParams,
  nextParams
}) => currentParams.id !== nextParams.id;
async function loader3({ params }) {
  let id = params.id;
  if (!id || !/^\d+$/.test(id))
    throw new Response("Feed Not Found", { status: 404 });
  let feed;
  try {
    feed = await getIssue(id);
  } catch (error) {
    throw console.error(`[feeds] Failed to load issue ${id}:`, error), new Response("Temporarily unavailable", {
      status: 503,
      headers: { "Cache-Control": "no-store", "Retry-After": "2" }
    });
  }
  if (!feed)
    throw new Response("Feed Not Found", {
      status: 404,
      headers: { "Cache-Control": "public, max-age=15" }
    });
  return (0, import_node.json)(
    { feed },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=1800, stale-while-revalidate=86400"
      }
    }
  );
}
function TopBar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("header", { className: "feed-topbar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: "/img/tp.png", alt: "The Poast", loading: "eager", decoding: "async" }, void 0, !1, {
      fileName: "app/routes/feeds.$id.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/feeds.$id.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "#subscribe", className: "feed-subscribe", children: "Subscribe" }, void 0, !1, {
      fileName: "app/routes/feeds.$id.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/feeds.$id.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react7.useRouteError)(), status = (0, import_react7.isRouteErrorResponse)(error) ? error.status : 500;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "feed-detail-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TopBar, {}, void 0, !1, {
      fileName: "app/routes/feeds.$id.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "main",
      {
        className: "feed-detail-stream",
        style: { padding: "64px 24px", textAlign: "center" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: status === 404 ? "We couldn't find that edition." : "This edition is taking a moment to load." }, void 0, !1, {
            fileName: "app/routes/feeds.$id.tsx",
            lineNumber: 102,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { style: { display: "flex", gap: 16, justifyContent: "center" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { type: "button", onClick: () => window.location.reload(), children: "Try again" }, void 0, !1, {
              fileName: "app/routes/feeds.$id.tsx",
              lineNumber: 108,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Link, { to: "/today", children: "Back to archive" }, void 0, !1, {
              fileName: "app/routes/feeds.$id.tsx",
              lineNumber: 111,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/feeds.$id.tsx",
            lineNumber: 107,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/feeds.$id.tsx",
        lineNumber: 98,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/feeds.$id.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}
function FeedDetail() {
  let { feed } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "feed-detail-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TopBar, {}, void 0, !1, {
      fileName: "app/routes/feeds.$id.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { className: "feed-detail-stream", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      FeedEmbed,
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
        lineNumber: 126,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/feeds.$id.tsx",
      lineNumber: 125,
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
            fileName: "app/routes/feeds.$id.tsx",
            lineNumber: 142,
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
                fileName: "app/routes/feeds.$id.tsx",
                lineNumber: 145,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "feed-submit", type: "submit", children: "Subscribe" }, void 0, !1, {
              fileName: "app/routes/feeds.$id.tsx",
              lineNumber: 152,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/feeds.$id.tsx",
            lineNumber: 144,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/feeds.$id.tsx",
            lineNumber: 158,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/feeds.$id.tsx",
            lineNumber: 157,
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
              fileName: "app/routes/feeds.$id.tsx",
              lineNumber: 161,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/feeds.$id.tsx",
            lineNumber: 167,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "feed-legal", children: [
            "By submitting, you agree to our ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
              fileName: "app/routes/feeds.$id.tsx",
              lineNumber: 170,
              columnNumber: 45
            }, this),
            " ",
            "& ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, !1, {
              fileName: "app/routes/feeds.$id.tsx",
              lineNumber: 171,
              columnNumber: 19
            }, this),
            "."
          ] }, void 0, !0, {
            fileName: "app/routes/feeds.$id.tsx",
            lineNumber: 169,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/feeds.$id.tsx",
        lineNumber: 137,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/feeds.$id.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/feeds.$id.tsx",
    lineNumber: 122,
    columnNumber: 5
  }, this);
}

// app/routes/subscribe.tsx
var subscribe_exports = {};
__export(subscribe_exports, {
  default: () => Subscribe,
  links: () => links5,
  meta: () => meta4
});
var import_react8 = require("@remix-run/react");

// app/style/scss/subscribe.css
var subscribe_default = "/build/_assets/subscribe-4HIHECI4.css";

// app/routes/subscribe.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links5 = () => [
  { rel: "stylesheet", href: subscribe_default }
], meta4 = () => ({
  title: "Subscribe : The Poast",
  description: "Get caught up right here, right now."
});
function Subscribe() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "subscribe-page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { className: "subscribe-card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react8.Link, { to: "/", className: "subscribe-logo", "aria-label": "The Poast home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: tp_default, alt: "The Poast" }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "subscribe-title", children: "Get The Poast for free" }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "subscribe-sub", children: "Get caught up right here, right now." }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "form",
      {
        method: "post",
        action: "https://app.thepoast.com/subscription/form",
        className: "subscribe-form",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "subscribe-input-bar", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "subscribe-email", className: "sr-only", children: "Email address" }, void 0, !1, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "input",
              {
                id: "subscribe-email",
                className: "subscribe-input",
                type: "email",
                name: "email",
                required: !0,
                autoComplete: "email",
                inputMode: "email",
                placeholder: "Email Address *"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/subscribe.tsx",
                lineNumber: 39,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { className: "subscribe-submit", type: "submit", children: "Subscribe" }, void 0, !1, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 49,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 35,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "subscribe-altcha", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 54,
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
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 58,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 64,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "subscribe-legal", children: [
            "By submitting, you agree to our",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react8.Link, { className: "sm", to: "/policies/terms", children: "Terms" }, void 0, !1, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 68,
              columnNumber: 13
            }, this),
            " &",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react8.Link, { className: "sm", to: "/policies/privacy", children: "Privacy Policy" }, void 0, !1, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 69,
              columnNumber: 13
            }, this),
            "."
          ] }, void 0, !0, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 66,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 30,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react8.Link, { to: "/", className: "subscribe-back", children: "Read today\u2019s edition first \u2192" }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/confirm.tsx
var confirm_exports = {};
__export(confirm_exports, {
  default: () => Confirm
});
var import_react9 = require("@remix-run/react");

// public/img/ja6.png
var ja6_default = "/build/_assets/ja6-UFKBF2CN.png";

// app/routes/confirm.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Confirm() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "nav", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react9.Link, { to: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: tp_default, alt: "The Poast Logo" }, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { style: { fontSize: 52 }, children: "\u2713" }, void 0, !1, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { style: { fontSize: 30, textAlign: "center" }, children: "Welcome back to The Poast" }, void 0, !1, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 19,
        columnNumber: 56
      }, this),
      "Expect our fast feed in your inbox every day. It stitches together the best business-minded news, posts, and snarky comments from across the web. You can check out the latest issue ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react9.Link, { to: "/live", children: "here \u2192" }, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 19,
        columnNumber: 243
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 19,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 20,
        columnNumber: 57
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("em", { children: `P.S. If you don't receive an email, please check your spam or promotions folder and "move us" to your primary inbox to ensure you get The Poast each day.` }, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 20,
        columnNumber: 63
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 22,
        columnNumber: 57
      }, this),
      "\u2014The Poast",
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 22,
        columnNumber: 73
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 22,
        columnNumber: 79
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 22,
        columnNumber: 85
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/confirm.tsx",
        lineNumber: 22,
        columnNumber: 91
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/confirm.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { className: "headerimg", src: ja6_default, alt: "The Poast" }, void 0, !1, {
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

// app/routes/feeds.tsx
var feeds_exports = {};
__export(feeds_exports, {
  default: () => Feeds,
  headers: () => headers2,
  links: () => links6,
  loader: () => loader4,
  shouldRevalidate: () => shouldRevalidate2
});
var import_react10 = require("react"), import_react11 = require("@remix-run/react"), import_node2 = require("@remix-run/node");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), links6 = () => [
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
], headers2 = ({ loaderHeaders }) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? "no-store"
});
function shouldRevalidate2() {
  return !1;
}
var FEED_LIMIT2 = 30, TOP_WAIT_MS = 4e3, WORK_TIMEZONE = "America/Toronto";
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
async function loader4() {
  let campaigns = await listFinishedCampaigns(), feeds = getLatestCampaignPerDay(campaigns, FEED_LIMIT2).map((campaign) => {
    let id = String(campaign.id), date = getCampaignDate(campaign) || (/* @__PURE__ */ new Date()).toISOString();
    return {
      id,
      subject: campaign.subject || "The Poast",
      date,
      dateLabel: formatDateLabel(date)
    };
  });
  if (feeds[0]) {
    let top = peekIssue(feeds[0].id) ?? await getIssueWithin(feeds[0].id, TOP_WAIT_MS);
    top && (feeds[0].html = top.body);
  }
  if (feeds[1]) {
    let second = peekIssue(feeds[1].id);
    second && (feeds[1].html = second.body);
  }
  warmIssues(feeds.slice(1).map((f) => f.id));
  let degraded = campaigns.length === 0;
  return (0, import_node2.json)(
    { feeds, degraded },
    {
      headers: {
        // Never cache an empty/failed result.
        "Cache-Control": degraded ? "no-store" : "public, max-age=30, s-maxage=60, stale-while-revalidate=3600"
      }
    }
  );
}
var MAX_CONCURRENT = 2, active = 0, waiting = [];
function schedule(task, priority = !1) {
  return new Promise((resolve, reject) => {
    let run = () => {
      active++, task().then(resolve, reject).finally(() => {
        var _a2;
        active--, (_a2 = waiting.shift()) == null || _a2();
      });
    };
    priority || active < MAX_CONCURRENT ? run() : waiting.push(run);
  });
}
var sleep2 = (ms) => new Promise((r) => setTimeout(r, ms));
async function fetchIssue(id, signal) {
  let url = `/feeds/full/${encodeURIComponent(id)}`, lastError;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (signal.aborted)
      throw new DOMException("Aborted", "AbortError");
    try {
      let res = await fetch(url, {
        signal,
        headers: { Accept: "text/html" }
      });
      if (res.status === 404)
        return null;
      if (!res.ok)
        throw new Error(`Issue request failed: ${res.status}`);
      let text = await res.text();
      if (!text)
        throw new Error("Empty issue");
      return text;
    } catch (error) {
      if (signal.aborted)
        throw error;
      lastError = error, await sleep2(300 * (attempt + 1));
    }
  }
  throw lastError;
}
function FeedCard({ feed, priority }) {
  let ref = (0, import_react10.useRef)(null), [html, setHtml] = (0, import_react10.useState)(feed.html ?? null), [failed, setFailed] = (0, import_react10.useState)(!1);
  return (0, import_react10.useEffect)(() => {
    if (html || failed)
      return;
    let controller = new AbortController(), load = () => schedule(() => fetchIssue(feed.id, controller.signal), priority).then((result) => {
      controller.signal.aborted || (result ? setHtml(result) : setFailed(!0));
    }).catch((error) => {
      controller.signal.aborted || (console.error(`[feeds] Failed to load issue ${feed.id}:`, error), setFailed(!0));
    });
    if (priority)
      return load(), () => controller.abort();
    let element = ref.current;
    if (!element)
      return;
    let observer = new IntersectionObserver(
      ([entry2]) => {
        entry2 != null && entry2.isIntersecting && (observer.disconnect(), load());
      },
      { rootMargin: "1200px 0px", threshold: 0 }
    );
    return observer.observe(element), () => {
      controller.abort(), observer.disconnect();
    };
  }, [feed.id, html, failed, priority]), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "feed-archive-item", "data-feed-id": feed.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { ref, children: html ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    FeedEmbed,
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
      lineNumber: 226,
      columnNumber: 11
    },
    this
  ) : failed ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    import_react11.Link,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { children: feed.subject }, void 0, !1, {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 246,
          columnNumber: 13
        }, this),
        feed.dateLabel && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { opacity: 0.6, marginTop: 6 }, children: feed.dateLabel }, void 0, !1, {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 248,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { opacity: 0.6, marginTop: 6 }, children: "Read this edition" }, void 0, !1, {
          fileName: "app/routes/feeds.tsx",
          lineNumber: 250,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 234,
      columnNumber: 11
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "div",
    {
      className: "feeds-skeleton feed-lazy-placeholder",
      "aria-hidden": "true",
      style: {
        width: "100%",
        height: getCachedHeight(feed.id, !0) ?? 900
      }
    },
    void 0,
    !1,
    {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 253,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/feeds.tsx",
    lineNumber: 224,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/feeds.tsx",
    lineNumber: 223,
    columnNumber: 5
  }, this);
}
function Feeds() {
  let { feeds, degraded } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "feeds-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("header", { className: "feed-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: "/img/tp.png", alt: "The Poast", loading: "eager", decoding: "async" }, void 0, !1, {
        fileName: "app/routes/feeds.tsx",
        lineNumber: 278,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/feeds.tsx",
        lineNumber: 277,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { href: "#subscribe", className: "feed-subscribe", children: "Subscribe" }, void 0, !1, {
        fileName: "app/routes/feeds.tsx",
        lineNumber: 281,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 276,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { className: "feeds-stream", children: feeds.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "feeds-empty", children: degraded ? "The archive is taking a moment. Please refresh shortly." : "No feeds yet." }, void 0, !1, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 288,
      columnNumber: 11
    }, this) : feeds.map((feed, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(FeedCard, { feed, priority: index === 0 }, feed.id, !1, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 295,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 286,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("footer", { className: "feed-footer", id: "subscribe", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "form",
      {
        method: "post",
        action: "https://app.thepoast.com/subscription/form",
        className: "feed-subscribe-form",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "feed-subscribe-heading", children: "Get The Poast for free" }, void 0, !1, {
            fileName: "app/routes/feeds.tsx",
            lineNumber: 306,
            columnNumber: 11
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
                fileName: "app/routes/feeds.tsx",
                lineNumber: 309,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { className: "feed-submit", type: "submit", children: "Subscribe" }, void 0, !1, {
              fileName: "app/routes/feeds.tsx",
              lineNumber: 316,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/feeds.tsx",
            lineNumber: 308,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/feeds.tsx",
            lineNumber: 322,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/feeds.tsx",
            lineNumber: 321,
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
              fileName: "app/routes/feeds.tsx",
              lineNumber: 325,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/feeds.tsx",
            lineNumber: 331,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "feed-legal", children: [
            "By submitting, you agree to our ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
              fileName: "app/routes/feeds.tsx",
              lineNumber: 334,
              columnNumber: 45
            }, this),
            " ",
            "& ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, !1, {
              fileName: "app/routes/feeds.tsx",
              lineNumber: 335,
              columnNumber: 19
            }, this),
            "."
          ] }, void 0, !0, {
            fileName: "app/routes/feeds.tsx",
            lineNumber: 333,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/feeds.tsx",
        lineNumber: 301,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/feeds.tsx",
      lineNumber: 300,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/feeds.tsx",
    lineNumber: 275,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  headers: () => headers3,
  links: () => links7,
  loader: () => loader5
});
var import_react12 = require("@remix-run/react"), import_node3 = require("@remix-run/node");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), links7 = () => [
  { rel: "stylesheet", href: showscroll_default },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
], headers3 = ({ loaderHeaders }) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? "no-store"
});
async function loader5() {
  let issue = peekLiveIssue() ?? await getLiveIssue();
  return (0, import_node3.json)(
    { issue },
    {
      headers: {
        // Never cache an empty/failed result.
        "Cache-Control": issue ? "public, max-age=30, s-maxage=60, stale-while-revalidate=3600" : "no-store"
      }
    }
  );
}
function Index() {
  let { issue } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("header", { className: "feed-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react12.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
          fileName: "app/routes/index.tsx",
          lineNumber: 52,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("a", { href: "#subscribe", className: "feed-subscribe", children: "Subscribe" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("main", { className: "feed-stream", children: issue ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "feed-embed loaded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      FeedEmbed,
      {
        id: "live",
        html: issue.body,
        title: issue.subject,
        interactive: !0,
        fallbackHeight: 900
      },
      issue.id,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 68,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "feed-empty", children: "Check back soon for today\u2019s edition." }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("footer", { className: "feed-footer", id: "subscribe", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "form",
      {
        method: "post",
        action: "https://app.thepoast.com/subscription/form",
        className: "feed-subscribe-form",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "feed-subscribe-heading", children: "Get The Poast for free" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 90,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "feed-input-bar", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
                lineNumber: 93,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { className: "feed-submit", type: "submit", children: "Subscribe" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 100,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 92,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 105,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
              lineNumber: 109,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 115,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "feed-legal", children: [
            "By submitting, you agree to our",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react12.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 119,
              columnNumber: 13
            }, this),
            " &",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react12.Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 120,
              columnNumber: 13
            }, this),
            "."
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 117,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 85,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

// app/routes/today.tsx
var today_exports = {};
__export(today_exports, {
  default: () => Today,
  headers: () => headers4,
  links: () => links8,
  loader: () => loader6,
  shouldRevalidate: () => shouldRevalidate3
});
var import_react13 = require("react"), import_react14 = require("@remix-run/react"), import_node4 = require("@remix-run/node");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), links8 = () => [
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
], headers4 = ({ loaderHeaders }) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? "no-store"
});
function shouldRevalidate3() {
  return !1;
}
var FEED_LIMIT3 = 30, INLINE_COUNT = 3, FEED_START_DATE = "2026-09-23";
async function loader6() {
  let campaigns = await listFinishedCampaigns(), sinceCutoff = campaigns.filter((campaign) => {
    let d = getCampaignDate(campaign);
    if (!d)
      return !1;
    try {
      return getDateKey(d) >= FEED_START_DATE;
    } catch {
      return !1;
    }
  }), feeds = getLatestCampaignPerDay(sinceCutoff, FEED_LIMIT3).map((campaign, index) => {
    let id = String(campaign.id);
    return {
      id,
      subject: campaign.subject || "The Poast",
      date: getCampaignDate(campaign) || (/* @__PURE__ */ new Date()).toISOString(),
      // Only present if already rendered in server memory (never waits).
      html: index < INLINE_COUNT ? peekLeadStoryHtml(id) ?? void 0 : void 0
    };
  });
  warmLeadStories(feeds.map((f) => f.id));
  let degraded = campaigns.length === 0;
  return (0, import_node4.json)(
    { feeds, degraded },
    {
      headers: {
        // Never cache an empty/failed result.
        "Cache-Control": degraded ? "no-store" : "public, max-age=30, s-maxage=60, stale-while-revalidate=3600"
      }
    }
  );
}
var MAX_CONCURRENT2 = 3, active2 = 0, waiting2 = [];
function schedule2(task) {
  return new Promise((resolve, reject) => {
    let run = () => {
      active2++, task().then(resolve, reject).finally(() => {
        var _a2;
        active2--, (_a2 = waiting2.shift()) == null || _a2();
      });
    };
    active2 < MAX_CONCURRENT2 ? run() : waiting2.push(run);
  });
}
var sleep3 = (ms) => new Promise((r) => setTimeout(r, ms));
async function fetchLead(id, signal) {
  let url = `/feeds/preview/${encodeURIComponent(id)}`, lastError;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (signal.aborted)
      throw new DOMException("Aborted", "AbortError");
    try {
      let res = await fetch(url, {
        signal,
        headers: { Accept: "text/html" }
      });
      if (res.status === 404)
        return null;
      if (!res.ok)
        throw new Error(`Preview failed: ${res.status}`);
      let text = await res.text();
      if (!text)
        throw new Error("Empty preview");
      return text;
    } catch (error) {
      if (signal.aborted)
        throw error;
      lastError = error, await sleep3(500 * (attempt + 1));
    }
  }
  throw lastError;
}
function formatDate(date) {
  try {
    return new Date(date).toLocaleDateString("en-CA", {
      timeZone: "America/Toronto",
      dateStyle: "long"
    });
  } catch {
    return "";
  }
}
function FeedCard2({ feed }) {
  let ref = (0, import_react13.useRef)(null), [html, setHtml] = (0, import_react13.useState)(feed.html ?? null), [failed, setFailed] = (0, import_react13.useState)(!1);
  return (0, import_react13.useEffect)(() => {
    if (html || failed)
      return;
    let element = ref.current;
    if (!element)
      return;
    let controller = new AbortController(), observer = new IntersectionObserver(
      ([entry2]) => {
        entry2 != null && entry2.isIntersecting && (observer.disconnect(), schedule2(() => fetchLead(feed.id, controller.signal)).then((result) => {
          controller.signal.aborted || (result ? setHtml(result) : setFailed(!0));
        }).catch((error) => {
          controller.signal.aborted || (console.error(`[feeds] Failed to load feed ${feed.id}:`, error), setFailed(!0));
        }));
      },
      { rootMargin: "1200px 0px", threshold: 0 }
    );
    return observer.observe(element), () => {
      controller.abort(), observer.disconnect();
    };
  }, [feed.id, html, failed]), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { className: "feed-archive-item", "data-feed-id": feed.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { ref, style: { position: "relative" }, children: html ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(FeedEmbed, { id: feed.id, html, title: feed.subject }, void 0, !1, {
      fileName: "app/routes/today.tsx",
      lineNumber: 202,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_react14.Link,
      {
        to: `/feeds/${feed.id}`,
        prefetch: "intent",
        "aria-label": `Read: ${feed.subject}`,
        style: { position: "absolute", inset: 0, zIndex: 1 }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/today.tsx",
        lineNumber: 204,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/today.tsx",
    lineNumber: 201,
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
          fileName: "app/routes/today.tsx",
          lineNumber: 224,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { style: { opacity: 0.6, marginTop: 6 }, children: formatDate(feed.date) }, void 0, !1, {
          fileName: "app/routes/today.tsx",
          lineNumber: 225,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/today.tsx",
      lineNumber: 212,
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
      fileName: "app/routes/today.tsx",
      lineNumber: 230,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/today.tsx",
    lineNumber: 199,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/today.tsx",
    lineNumber: 198,
    columnNumber: 5
  }, this);
}
function Today() {
  let { feeds, degraded } = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "feeds-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("header", { className: "feed-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: "/img/tp.png", alt: "The Poast", loading: "eager", decoding: "async" }, void 0, !1, {
        fileName: "app/routes/today.tsx",
        lineNumber: 255,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/today.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("a", { href: "#subscribe", className: "feed-subscribe", children: "Subscribe" }, void 0, !1, {
        fileName: "app/routes/today.tsx",
        lineNumber: 258,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/today.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("main", { className: "feeds-stream", children: feeds.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { className: "feeds-empty", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: degraded ? "The archive is taking a moment. Please refresh shortly." : "No feeds yet." }, void 0, !1, {
      fileName: "app/routes/today.tsx",
      lineNumber: 266,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/today.tsx",
      lineNumber: 265,
      columnNumber: 11
    }, this) : feeds.map((feed) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(FeedCard2, { feed }, feed.id, !1, {
      fileName: "app/routes/today.tsx",
      lineNumber: 273,
      columnNumber: 31
    }, this)) }, void 0, !1, {
      fileName: "app/routes/today.tsx",
      lineNumber: 263,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("footer", { className: "feed-footer", id: "subscribe", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "form",
      {
        method: "post",
        action: "https://app.thepoast.com/subscription/form",
        className: "feed-subscribe-form",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "feed-subscribe-heading", children: "Get The Poast for free" }, void 0, !1, {
            fileName: "app/routes/today.tsx",
            lineNumber: 283,
            columnNumber: 11
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
                fileName: "app/routes/today.tsx",
                lineNumber: 286,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { className: "feed-submit", type: "submit", children: "Subscribe" }, void 0, !1, {
              fileName: "app/routes/today.tsx",
              lineNumber: 293,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/today.tsx",
            lineNumber: 285,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/today.tsx",
            lineNumber: 299,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/today.tsx",
            lineNumber: 298,
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
              fileName: "app/routes/today.tsx",
              lineNumber: 302,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/today.tsx",
            lineNumber: 308,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "feed-legal", children: [
            "By submitting, you agree to our ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
              fileName: "app/routes/today.tsx",
              lineNumber: 311,
              columnNumber: 45
            }, this),
            " ",
            "& ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, !1, {
              fileName: "app/routes/today.tsx",
              lineNumber: 312,
              columnNumber: 19
            }, this),
            "."
          ] }, void 0, !0, {
            fileName: "app/routes/today.tsx",
            lineNumber: 310,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/today.tsx",
        lineNumber: 278,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/today.tsx",
      lineNumber: 277,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/today.tsx",
    lineNumber: 252,
    columnNumber: 5
  }, this);
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => Index2,
  links: () => links9,
  loader: () => loader7
});
var import_react15 = require("react"), import_react16 = require("@remix-run/react"), import_node5 = require("@remix-run/node");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), links9 = () => [
  { rel: "stylesheet", href: showscroll_default },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
], LIVE_CAMPAIGN_ID2 = 1, CONTENT_TTL_MS = 30 * 1e3, cachedIssue = null;
function issueResponse(issue, isDraft = !0) {
  return (0, import_node5.json)(
    { issue, isDraft },
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
async function fetchCampaignPreviewHtml(id, headers5) {
  let response = await fetchWithTimeout(
    `https://app.thepoast.com/api/campaigns/${id}/preview`,
    { headers: headers5 },
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
async function loader7({ request }) {
  let now = /* @__PURE__ */ new Date(), username = process.env.LISTMONK_USERNAME, token = process.env.LISTMONK_TOKEN;
  if (!username || !token)
    return issueResponse((cachedIssue == null ? void 0 : cachedIssue.data) ?? null, !0);
  let checkNow = Date.now();
  if (cachedIssue && checkNow - cachedIssue.timestamp < CONTENT_TTL_MS)
    return issueResponse(cachedIssue.data, !0);
  let previewHeaders = { Authorization: `Basic ${Buffer.from(`${username}:${token}`).toString("base64")}`, Accept: "text/html" }, body = await fetchCampaignPreviewHtml(
    LIVE_CAMPAIGN_ID2,
    previewHeaders
  );
  if (!body)
    return issueResponse((cachedIssue == null ? void 0 : cachedIssue.data) ?? null, !0);
  let issue = {
    id: LIVE_CAMPAIGN_ID2,
    subject: "Today's Edition",
    date: now.toISOString(),
    body: prepareIssueHtml2(body, now)
  };
  return cachedIssue = { data: issue, timestamp: checkNow }, issueResponse(issue, !0);
}
function FeedEmbed2({ html, title }) {
  let iframeRef = (0, import_react15.useRef)(null), [loaded, setLoaded] = (0, import_react15.useState)(!1);
  return (0, import_react15.useEffect)(() => {
    let frame = iframeRef.current;
    if (!frame)
      return;
    let updateHeight = () => {
      var _a2, _b2;
      let doc2 = frame.contentDocument;
      if (doc2) {
        let height = Math.max(
          ((_a2 = doc2.documentElement) == null ? void 0 : _a2.scrollHeight) || 0,
          ((_b2 = doc2.body) == null ? void 0 : _b2.scrollHeight) || 0
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
  }, [html]), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: `feed-embed${loaded ? " loaded" : ""}`, children: [
    !loaded && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "feed-skeleton", style: { minHeight: "400px" } }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 297,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "iframe",
      {
        ref: iframeRef,
        srcDoc: html,
        title,
        onLoad: () => {
          var _a2, _b2;
          let frame = iframeRef.current;
          if (frame != null && frame.contentDocument) {
            let height = Math.max(
              ((_a2 = frame.contentDocument.documentElement) == null ? void 0 : _a2.scrollHeight) || 0,
              ((_b2 = frame.contentDocument.body) == null ? void 0 : _b2.scrollHeight) || 0
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
function Index2() {
  let { issue, isDraft } = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("header", { className: "feed-topbar", children: [
      isDraft && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "feed-status", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "status-dot" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react16.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
          lineNumber: 339,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 338,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("a", { href: "#subscribe", className: "feed-subscribe", children: "Subscribe" }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 347,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$.tsx",
      lineNumber: 331,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("main", { className: "feed-stream", children: issue ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(FeedEmbed2, { html: issue.body, title: issue.subject }, issue.id, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 354,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "feed-empty", children: "Check back soon for today\u2019s edition." }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 356,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 352,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("footer", { className: "feed-footer", id: "subscribe", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "form",
      {
        method: "post",
        action: "https://app.thepoast.com/subscription/form",
        className: "feed-subscribe-form",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "feed-subscribe-heading", children: "Get The Poast for free" }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 366,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "feed-input-bar", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { className: "feed-submit", type: "submit", children: "Subscribe" }, void 0, !1, {
              fileName: "app/routes/$.tsx",
              lineNumber: 376,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/$.tsx",
            lineNumber: 368,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 382,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 381,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/$.tsx",
            lineNumber: 391,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "feed-legal", children: [
            "By submitting, you agree to our",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react16.Link, { to: "/policies/terms", children: "Terms" }, void 0, !1, {
              fileName: "app/routes/$.tsx",
              lineNumber: 395,
              columnNumber: 13
            }, this),
            " &",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react16.Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-7QPJYKWG.js", imports: ["/build/_shared/chunk-MG463TXR.js", "/build/_shared/chunk-IU43IUTG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-G46SOXIB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-UQC3CQAX.js", imports: ["/build/_shared/chunk-3K2JK6MY.js", "/build/_shared/chunk-MG3UHPBD.js", "/build/_shared/chunk-3QGVQ3TW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/confirm": { id: "routes/confirm", parentId: "root", path: "confirm", index: void 0, caseSensitive: void 0, module: "/build/routes/confirm-K6SDVPDP.js", imports: ["/build/_shared/chunk-3YPO5SKL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feeds": { id: "routes/feeds", parentId: "root", path: "feeds", index: void 0, caseSensitive: void 0, module: "/build/routes/feeds-VXT5Y5QM.js", imports: ["/build/_shared/chunk-Y4OZZ37Y.js", "/build/_shared/chunk-3K2JK6MY.js", "/build/_shared/chunk-3QGVQ3TW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feeds.$id": { id: "routes/feeds.$id", parentId: "root", path: "feeds/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/feeds.$id-GCDSDWKX.js", imports: ["/build/_shared/chunk-Y4OZZ37Y.js", "/build/_shared/chunk-3K2JK6MY.js", "/build/_shared/chunk-MG3UHPBD.js", "/build/_shared/chunk-3QGVQ3TW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/feeds.full.$id": { id: "routes/feeds.full.$id", parentId: "root", path: "feeds/full/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/feeds.full.$id-PPNRNRLN.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feeds.preview.$id": { id: "routes/feeds.preview.$id", parentId: "root", path: "feeds/preview/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/feeds.preview.$id-TSSBU4VE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-Z2BJ7SSL.js", imports: ["/build/_shared/chunk-Y4OZZ37Y.js", "/build/_shared/chunk-3K2JK6MY.js", "/build/_shared/chunk-MG3UHPBD.js", "/build/_shared/chunk-3QGVQ3TW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/privacy": { id: "routes/policies/privacy", parentId: "root", path: "policies/privacy", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/privacy-YVQKJPPY.js", imports: ["/build/_shared/chunk-CQPJTLHL.js", "/build/_shared/chunk-MG3UHPBD.js", "/build/_shared/chunk-3YPO5SKL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/terms": { id: "routes/policies/terms", parentId: "root", path: "policies/terms", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/terms-3C647DNU.js", imports: ["/build/_shared/chunk-CQPJTLHL.js", "/build/_shared/chunk-MG3UHPBD.js", "/build/_shared/chunk-3YPO5SKL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/subscribe": { id: "routes/subscribe", parentId: "root", path: "subscribe", index: void 0, caseSensitive: void 0, module: "/build/routes/subscribe-KO2HFZ5D.js", imports: ["/build/_shared/chunk-3YPO5SKL.js", "/build/_shared/chunk-3QGVQ3TW.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/today": { id: "routes/today", parentId: "root", path: "today", index: void 0, caseSensitive: void 0, module: "/build/routes/today-YNT6URMH.js", imports: ["/build/_shared/chunk-Y4OZZ37Y.js", "/build/_shared/chunk-3K2JK6MY.js", "/build/_shared/chunk-3QGVQ3TW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "68b73fc9", hmr: void 0, url: "/build/manifest-68B73FC9.js" };

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
  "routes/feeds.$id": {
    id: "routes/feeds.$id",
    parentId: "root",
    path: "feeds/:id",
    index: void 0,
    caseSensitive: void 0,
    module: feeds_id_exports
  },
  "routes/subscribe": {
    id: "routes/subscribe",
    parentId: "root",
    path: "subscribe",
    index: void 0,
    caseSensitive: void 0,
    module: subscribe_exports
  },
  "routes/confirm": {
    id: "routes/confirm",
    parentId: "root",
    path: "confirm",
    index: void 0,
    caseSensitive: void 0,
    module: confirm_exports
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
  "routes/today": {
    id: "routes/today",
    parentId: "root",
    path: "today",
    index: void 0,
    caseSensitive: void 0,
    module: today_exports
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
