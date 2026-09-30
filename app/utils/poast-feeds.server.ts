// app/utils/poast-feeds.server.ts

const LISTMONK_BASE_URL = "https://app.thepoast.com";

const FEED_TIMEZONE =
  process.env.LISTMONK_FEED_TIMEZONE || "America/Toronto";

export const FEED_LIMIT = 30;

const MIN = 60_000;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;

export type Campaign = {
  id: number | string;
  created_at?: string | null;
  updated_at?: string | null;
  started_at?: string | null;
  send_at?: string | null;
  subject?: string | null;
  name?: string | null;
  status?: string | null;
  body?: string | null;
  template_id?: number | null;
  [key: string]: unknown;
};

export type LeadStory = {
  text: string;
  image: string | null;
  imageAlt: string;
};

export type Issue = {
  id: string;
  subject: string;
  date: string;
  body: string;
};

/** Listmonk is unreachable / erroring (as opposed to "not found"). */
export class UpstreamError extends Error {}

/* -------------------------------------------------------------------------- */
/*            CACHE: fresh -> stale-while-revalidate -> stale-on-error        */
/* -------------------------------------------------------------------------- */

type Entry = { value: unknown; freshUntil: number; staleUntil: number };

const MAX_ENTRIES = 400;
const store = new Map<string, Entry>();
const inflight = new Map<string, Promise<unknown>>();

function remember(key: string, value: unknown, freshMs: number, staleMs: number) {
  const now = Date.now();

  // "Not found" results are only remembered briefly.
  if (value == null) {
    freshMs = Math.min(freshMs, 15_000);
    staleMs = freshMs;
  }

  store.delete(key);
  store.set(key, {
    value,
    freshUntil: now + freshMs,
    staleUntil: now + Math.max(staleMs, freshMs),
  });

  while (store.size > MAX_ENTRIES) {
    const oldest = store.keys().next().value;
    if (oldest === undefined) break;
    store.delete(oldest);
  }
}

async function cached<T>(
  key: string,
  freshMs: number,
  staleMs: number,
  load: () => Promise<T>
): Promise<T> {
  const now = Date.now();
  const hit = store.get(key);

  if (hit && now < hit.freshUntil) {
    return hit.value as T;
  }

  // One upstream request per key, no matter how many callers.
  const refresh = (): Promise<T> => {
    let promise = inflight.get(key) as Promise<T> | undefined;

    if (!promise) {
      promise = load()
        .then((value) => {
          remember(key, value, freshMs, staleMs);
          return value;
        })
        .finally(() => {
          inflight.delete(key);
        });

      inflight.set(key, promise);
    }

    return promise;
  };

  // Stale but usable: answer instantly, refresh in the background.
  if (hit && now < hit.staleUntil) {
    refresh().catch(() => {});
    return hit.value as T;
  }

  try {
    return await refresh();
  } catch (error) {
    // Upstream is failing: an expired copy beats an error page.
    if (hit) return hit.value as T;
    throw error;
  }
}

function peek<T>(key: string): T | null {
  const hit = store.get(key);
  if (!hit || Date.now() >= hit.staleUntil) return null;
  return (hit.value as T) ?? null;
}

/* -------------------------------------------------------------------------- */
/*                              LISTMONK HTTP                                 */
/* -------------------------------------------------------------------------- */

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function getAuthHeaders(accept: string): Record<string, string> {
  const username = process.env.LISTMONK_USERNAME;
  const token = process.env.LISTMONK_TOKEN;

  if (!username || !token) {
    throw new UpstreamError("Missing LISTMONK_USERNAME or LISTMONK_TOKEN");
  }

  return {
    Authorization: `Basic ${Buffer.from(`${username}:${token}`).toString("base64")}`,
    Accept: accept,
  };
}

/**
 * GET from Listmonk.
 *  - returns the body text on success
 *  - returns null ONLY on a real 404
 *  - throws UpstreamError on timeouts / network errors / 5xx / 429
 *    (retried once before giving up)
 */
async function upstream(
  path: string,
  accept: string,
  timeoutMs = 7000,
  attempts = 2
): Promise<string | null> {
  const headers = getAuthHeaders(accept);
  let lastError: unknown;

  for (let attempt = 0; attempt < attempts; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    let fatal = false;

    try {
      const res = await fetch(`${LISTMONK_BASE_URL}${path}`, {
        headers,
        signal: controller.signal,
      });

      if (res.status === 404) return null;
      if (res.ok) return await res.text();

      lastError = new UpstreamError(`Listmonk ${res.status} for ${path}`);
      fatal = res.status < 500 && res.status !== 429;
    } catch (error) {
      lastError = error;
    } finally {
      clearTimeout(timer);
    }

    if (fatal) break;
    if (attempt < attempts - 1) await sleep(250 * 2 ** attempt);
  }

  throw lastError instanceof UpstreamError
    ? lastError
    : new UpstreamError(`Listmonk request failed for ${path}: ${String(lastError)}`);
}

async function upstreamJson<T>(path: string, timeoutMs?: number): Promise<T | null> {
  const text = await upstream(path, "application/json", timeoutMs);
  if (text == null) return null;

  try {
    return JSON.parse(text) as T;
  } catch {
    throw new UpstreamError(`Invalid JSON from Listmonk for ${path}`);
  }
}

/* -------------------------------------------------------------------------- */
/*                              LISTMONK API                                  */
/* -------------------------------------------------------------------------- */

const CAMPAIGN_LIST_KEY = "campaigns:finished";

/**
 * Finished campaigns (metadata only). Never throws: returns [] if Listmonk
 * is down and nothing is cached.
 */
export async function listFinishedCampaigns(): Promise<Campaign[]> {
  try {
    return await cached(CAMPAIGN_LIST_KEY, 5 * MIN, DAY, async () => {
      const params = new URLSearchParams({
        status: "finished",
        order_by: "updated_at",
        order: "DESC",
        page: "1",
        per_page: "100",
        no_body: "true", // lighter list response (ignored by old versions)
      });

      const payload = await upstreamJson<{ data?: { results?: Campaign[] } }>(
        `/api/campaigns?${params}`,
        9000
      );

      const results = payload?.data?.results;

      if (!Array.isArray(results)) {
        throw new UpstreamError("Unexpected Listmonk campaign list response");
      }

      return results;
    });
  } catch (error) {
    console.error("[feeds] Campaign list failed:", error);
    return [];
  }
}

/** Metadata from the cached list, without any network call. */
function peekListedCampaign(id: string): Campaign | null {
  const list = peek<Campaign[]>(CAMPAIGN_LIST_KEY);
  return list?.find((c) => String(c.id) === id) ?? null;
}

/**
 * One campaign. null = genuinely not found. Throws UpstreamError on outages.
 */
export function getCampaign(id: string | number): Promise<Campaign | null> {
  const key = String(id);

  return cached(`campaign:${key}`, 10 * MIN, DAY, async () => {
    const payload = await upstreamJson<{ data?: Campaign }>(
      `/api/campaigns/${encodeURIComponent(key)}`
    );
    return payload?.data ?? null;
  });
}

/**
 * Listmonk's rendered preview HTML. null = not found. Throws on outages.
 * Finished campaigns don't change, so this lives in cache for a long time.
 */
export function getCampaignPreview(id: string | number): Promise<string | null> {
  const key = String(id);

  return cached(`preview:${key}`, 6 * HOUR, 7 * DAY, async () => {
    const html = await upstream(
      `/api/campaigns/${encodeURIComponent(key)}/preview`,
      "text/html",
      10_000
    );
    return html && html.trim() ? html : null;
  });
}

async function getTemplate(templateId: number): Promise<string> {
  try {
    const payload = await upstreamJson<{ data?: { body?: string } }>(
      `/api/templates/${templateId}`
    );
    return payload?.data?.body || "";
  } catch {
    return "";
  }
}

/** Fallback renderer if the preview endpoint isn't available. */
async function renderFromBody(campaign: Campaign): Promise<string> {
  let full = campaign;
  let body = campaign.body || "";

  if (!body) {
    const fetched = await getCampaign(campaign.id);
    if (fetched) full = fetched;
    body = fetched?.body || "";
  }

  if (!body) return "";

  if (full.template_id) {
    const template = await getTemplate(full.template_id);
    if (template) {
      body = template.replace(/\{\{\s*template\s+"content"\s*\}\}/gi, body);
    }
  }

  return body;
}

/**
 * Final HTML for a campaign id (preview preferred, body+template fallback).
 */
async function getRawHtml(id: string): Promise<string | null> {
  const preview = await getCampaignPreview(id).catch(() => null);
  if (preview) return preview;

  const campaign = await getCampaign(id);
  if (!campaign) return null;

  return (await renderFromBody(campaign)) || null;
}

export async function getRenderedCampaignHtml(campaign: Campaign): Promise<string> {
  return (await getRawHtml(String(campaign.id))) ?? "";
}

/* -------------------------------------------------------------------------- */
/*                             CAMPAIGN DATES                                 */
/* -------------------------------------------------------------------------- */

export function getCampaignDate(campaign: Campaign): string | null {
  return (
    campaign.started_at ||
    campaign.send_at ||
    campaign.updated_at ||
    campaign.created_at ||
    null
  );
}

function getTimestamp(campaign: Campaign): number {
  const date = getCampaignDate(campaign);
  if (!date) return 0;
  const timestamp = new Date(date).getTime();
  return Number.isFinite(timestamp) ? timestamp : 0;
}

/** Calendar date (YYYY-MM-DD) in the Poast timezone. */
export function getDateKey(dateString: string): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: FEED_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(dateString));

  const values: Record<string, string> = {};
  for (const part of parts) values[part.type] = part.value;

  return `${values.year}-${values.month}-${values.day}`;
}

/** One campaign per calendar day; the newest that day wins. */
export function getLatestCampaignPerDay(
  campaigns: Campaign[],
  limit = FEED_LIMIT
): Campaign[] {
  const sorted = [...campaigns].sort((a, b) => getTimestamp(b) - getTimestamp(a));
  const seen = new Set<string>();
  const result: Campaign[] = [];

  for (const campaign of sorted) {
    const date = getCampaignDate(campaign);
    if (!date) continue;

    const day = getDateKey(date);
    if (seen.has(day)) continue;

    seen.add(day);
    result.push(campaign);
    if (result.length >= limit) break;
  }

  return result;
}

/* -------------------------------------------------------------------------- */
/*                           TEMPLATE RESOLUTION                              */
/* -------------------------------------------------------------------------- */

const MONTHS_LONG = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const MONTHS_SHORT = MONTHS_LONG.map((m) => m.slice(0, 3));
const WEEKDAYS_LONG = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
];
const WEEKDAYS_SHORT = WEEKDAYS_LONG.map((d) => d.slice(0, 3));

/** Y/M/D/weekday in the Poast timezone (not the server's timezone). */
function zonedParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: FEED_TIMEZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "short",
  }).formatToParts(date);

  const v: Record<string, string> = {};
  for (const p of parts) v[p.type] = p.value;

  return {
    year: Number(v.year),
    month: Number(v.month),
    day: Number(v.day),
    weekday: Math.max(0, WEEKDAYS_SHORT.indexOf(v.weekday)),
  };
}

function formatGoDate(date: Date, layout: string): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  const { year, month, day, weekday } = zonedParts(date);

  const tokens: Array<[string, string]> = [
    ["Monday", WEEKDAYS_LONG[weekday]],
    ["January", MONTHS_LONG[month - 1]],
    ["2006", String(year)],
    ["Mon", WEEKDAYS_SHORT[weekday]],
    ["Jan", MONTHS_SHORT[month - 1]],
    ["06", pad(year % 100)],
    ["02", pad(day)],
    ["01", pad(month)],
    ["2", String(day)],
    ["1", String(month)],
  ];

  let result = "";
  let i = 0;

  outer: while (i < layout.length) {
    for (const [token, value] of tokens) {
      if (layout.startsWith(token, i)) {
        result += value;
        i += token.length;
        continue outer;
      }
    }
    result += layout[i];
    i += 1;
  }

  return result;
}

export function resolveTemplateTags(html: string, referenceDate: Date): string {
  const withDates = html.replace(
    /\{\{\s*Date\s+"([^"]*)"\s*\}\}/gi,
    (_match, layout: string) => {
      try {
        return formatGoDate(referenceDate, layout);
      } catch {
        return "";
      }
    }
  );

  return withDates.replace(/\{\{[\s\S]*?\}\}/g, "");
}

/* -------------------------------------------------------------------------- */
/*                               HTML CLEANUP                                 */
/* -------------------------------------------------------------------------- */

function decodeHtmlEntities(text: string): string {
  return text.replace(
    /&(#\d+|#x[0-9a-f]+|amp|nbsp|quot|apos|lt|gt);/gi,
    (_match, entity: string) => {
      const lower = entity.toLowerCase();

      if (lower === "amp") return "&";
      if (lower === "nbsp") return " ";
      if (lower === "quot") return '"';
      if (lower === "apos") return "'";
      if (lower === "lt") return "<";
      if (lower === "gt") return ">";

      try {
        if (lower.startsWith("#x")) return String.fromCodePoint(parseInt(lower.slice(2), 16));
        if (lower.startsWith("#")) return String.fromCodePoint(parseInt(lower.slice(1), 10));
      } catch {
        return "";
      }

      return "";
    }
  );
}

function stripHtml(html: string): string {
  return decodeHtmlEntities(
    html
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
}

function cleanText(text: string): string {
  return text.replace(/\u00a0/g, " ").replace(/\u200b/g, "").replace(/\s+/g, " ").trim();
}

function isNoiseText(text: string): boolean {
  if (!text || text.length < 8) return true;

  return /^(view online|view in browser|subscribe|sign up|unsubscribe|privacy policy|terms|the poast|today's edition|today’s edition|poast of the day)$/i.test(
    text
  );
}

function clipText(text: string, max = 220): string {
  if (text.length <= max) return text;
  const clipped = text.slice(0, max + 1).replace(/\s+\S*$/, "").trim();
  return `${clipped}…`;
}

function getAttribute(tag: string, name: string): string {
  const regex = new RegExp(`${name}\\s*=\\s*["']([^"']+)["']`, "i");
  return tag.match(regex)?.[1] || "";
}

function normalizeImageUrl(src: string): string {
  try {
    return new URL(src, `${LISTMONK_BASE_URL}/`).toString();
  } catch {
    return src;
  }
}

function isBadImage(tag: string, src: string, alt: string): boolean {
  const haystack = `${tag} ${src} ${alt}`.toLowerCase();

  if (
    /data:image|^cid:|tracking|pixel|spacer|unsubscribe|avatar|headshot|profile|author|social[-_ ]?icon|facebook|instagram|linkedin|twitter|youtube/.test(
      haystack
    )
  ) {
    return true;
  }

  return getAttribute(tag, "width") === "1" && getAttribute(tag, "height") === "1";
}

type ImageCandidate = { src: string; alt: string; index: number; length: number };

function findFirstContentImage(html: string): ImageCandidate | null {
  const regex = /<img\b[^>]*>/gi;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(html))) {
    const tag = match[0];
    const src =
      getAttribute(tag, "src") ||
      getAttribute(tag, "data-src") ||
      getAttribute(tag, "data-original") ||
      "";
    const alt = getAttribute(tag, "alt");

    if (!src || isBadImage(tag, src, alt)) continue;

    return {
      src: normalizeImageUrl(src),
      alt: cleanText(decodeHtmlEntities(alt)),
      index: match.index,
      length: tag.length,
    };
  }

  return null;
}

function extractBlocks(html: string, tags: string[]): string[] {
  if (!html) return [];

  const regex = new RegExp(`<(${tags.join("|")})\\b[^>]*>([\\s\\S]*?)<\\/\\1>`, "gi");
  const result: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(html))) {
    const text = cleanText(stripHtml(match[2]));
    if (!isNoiseText(text)) result.push(text);
  }

  return result;
}

const lastMeaningful = (values: string[]) => {
  for (let i = values.length - 1; i >= 0; i--) {
    if (!isNoiseText(values[i])) return values[i];
  }
  return "";
};

const firstMeaningful = (values: string[]) => values.find((v) => !isNoiseText(v)) || "";

function removeSubjectPrefix(text: string, subject: string): string {
  if (!text || !subject) return text;
  const escaped = subject.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`^${escaped}\\s*[-:|—–]?\\s*`, "i"), "").trim();
}

const HEADINGS = ["h1", "h2", "h3", "h4"];

export function extractLeadingStory(html: string, subject: string): LeadStory {
  const image = findFirstContentImage(html);
  let text = "";

  if (image) {
    const before = html.slice(0, image.index);
    text =
      lastMeaningful(extractBlocks(before, ["p"])) ||
      lastMeaningful(extractBlocks(before, HEADINGS));

    if (!text) {
      const after = html.slice(image.index + image.length, image.index + image.length + 12000);
      text =
        firstMeaningful(extractBlocks(after, ["p"])) ||
        firstMeaningful(extractBlocks(after, HEADINGS));
    }
  } else {
    text =
      firstMeaningful(extractBlocks(html, ["p"])) ||
      firstMeaningful(extractBlocks(html, HEADINGS));
  }

  text = removeSubjectPrefix(cleanText(text), subject);

  if (!text && image?.alt) text = image.alt;
  if (!text) text = subject || "The Poast";

  return {
    text: clipText(text, 220),
    image: image?.src || null,
    imageAlt: image?.alt || clipText(text, 120),
  };
}

/* -------------------------------------------------------------------------- */
/*                         SHARED IFRAME NORMALIZATION                        */
/* -------------------------------------------------------------------------- */

const INJECTED_HEAD = `
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

/** Full issue HTML for the detail iframe. */
export function prepareIssueHtml(html: string, referenceDate: Date): string {
  if (!html) return "";

  const resolved = resolveTemplateTags(html, referenceDate);

  if (/<head[^>]*>/i.test(resolved)) {
    return resolved.replace(/<head[^>]*>/i, (m) => `${m}${INJECTED_HEAD}`);
  }

  if (/<html[^>]*>/i.test(resolved)) {
    return resolved.replace(
      /<html([^>]*)>/i,
      (m, attrs) => `<html${attrs}><head>${INJECTED_HEAD}</head>`
    );
  }

  return `<head>${INJECTED_HEAD}</head>${resolved}`;
}

/* -------------------------------------------------------------------------- */
/*                         FIRST STORYBOARD (LEAD CARD)                       */
/* -------------------------------------------------------------------------- */

type HtmlTag = {
  name: string;
  start: number;
  end: number;
  raw: string;
  closing: boolean;
  selfClosing: boolean;
};

const VOID_HTML_TAGS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

function scanHtmlTags(html: string, startAt = 0): HtmlTag[] {
  const tags: HtmlTag[] = [];
  const regex = /<!--[\s\S]*?-->|<\/?[a-zA-Z][^>]*>/g;
  regex.lastIndex = startAt;

  let match: RegExpExecArray | null;

  while ((match = regex.exec(html))) {
    const raw = match[0];
    if (raw.startsWith("<!--")) continue;

    const nameMatch = raw.match(/^<\/?\s*([a-zA-Z0-9:-]+)/);
    if (!nameMatch) continue;

    const name = nameMatch[1].toLowerCase();

    tags.push({
      name,
      start: match.index,
      end: regex.lastIndex,
      raw,
      closing: raw.startsWith("</"),
      selfClosing: /\/\s*>$/.test(raw) || VOID_HTML_TAGS.has(name),
    });
  }

  return tags;
}

type StoryboardExtraction = {
  htmlOpen: string;
  headHtml: string;
  bodyOpen: string;
  bodyClose: string;
  doctype: string;
  ancestors: HtmlTag[];
  storyboard: string;
};

/** Finds the first .storyboard div and keeps its full parent chain. */
function extractFirstStoryboardDocument(html: string): StoryboardExtraction | null {
  const htmlOpen = html.match(/<html\b[^>]*>/i)?.[0] || "<html>";
  const bodyOpenMatch = html.match(/<body\b[^>]*>/i);
  const bodyCloseMatch = html.match(/<\/body\s*>/i);
  const doctype = html.match(/<!doctype[^>]*>/i)?.[0] || "<!doctype html>";
  const headHtml = html.match(/<head\b[^>]*>[\s\S]*?<\/head\s*>/i)?.[0] || "";

  const bodyOpen = bodyOpenMatch?.[0] || "<body>";
  const bodyClose = bodyCloseMatch?.[0] || "</body>";

  const bodyStart = bodyOpenMatch?.index ?? 0;
  const bodyEnd = bodyCloseMatch?.index ?? html.length;
  const bodyHtml = html.slice(bodyStart, bodyEnd);

  // If there is no <body> tag, scan from the very beginning.
  const tags = scanHtmlTags(bodyHtml, bodyOpenMatch ? bodyOpen.length : 0);

  const stack: HtmlTag[] = [];
  let storyboardTag: HtmlTag | null = null;
  let storyboardAncestors: HtmlTag[] = [];

  for (const tag of tags) {
    if (tag.closing) {
      if (storyboardTag && stack.length > 0) {
        const top = stack[stack.length - 1];

        if (top.start === storyboardTag.start && top.name === tag.name) {
          return {
            htmlOpen,
            headHtml,
            bodyOpen,
            bodyClose,
            doctype,
            ancestors: storyboardAncestors,
            storyboard: html.slice(bodyStart + storyboardTag.start, bodyStart + tag.end),
          };
        }
      }

      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].name === tag.name) {
          stack.length = i;
          break;
        }
      }

      continue;
    }

    if (!storyboardTag && tag.name === "div") {
      if (/\bstoryboard\b/i.test(getAttribute(tag.raw, "class"))) {
        storyboardTag = tag;
        storyboardAncestors = stack.filter(
          (a) => a.name !== "html" && a.name !== "head" && a.name !== "body"
        );
      }
    }

    if (!tag.selfClosing) stack.push(tag);
  }

  return null;
}

/**
 * Only the first storyboard, with its original parent chain preserved.
 * (Click handling lives in the page as a real <Link> overlay.)
 */
export function prepareLeadStoryHtml(
  html: string,
  referenceDate: Date,
  _feedId?: string
): string {
  if (!html) return "";

  const extracted = extractFirstStoryboardDocument(
    resolveTemplateTags(html, referenceDate)
  );

  if (!extracted) return "";

  let content = extracted.storyboard;

  for (let i = extracted.ancestors.length - 1; i >= 0; i--) {
    const ancestor = extracted.ancestors[i];
    content = `${ancestor.raw}${content}</${ancestor.name}>`;
  }

  const head = extracted.headHtml
    ? extracted.headHtml.replace(/<head\b[^>]*>/i, (m) => `${m}${INJECTED_HEAD}`)
    : `<head>${INJECTED_HEAD}</head>`;

  return `${extracted.doctype}
${extracted.htmlOpen}
${head}
${extracted.bodyOpen}
${content}
${extracted.bodyClose}
</html>`;
}

/* -------------------------------------------------------------------------- */
/*                       HIGH-LEVEL, CACHED ROUTE HELPERS                     */
/* -------------------------------------------------------------------------- */

async function getReferenceDate(id: string): Promise<Date> {
  // The campaign list is usually already in memory, so this is free.
  const campaign = peekListedCampaign(id) ?? (await getCampaign(id));
  const raw = campaign ? getCampaignDate(campaign) : null;
  const date = raw ? new Date(raw) : null;

  return date && Number.isFinite(date.getTime()) ? date : new Date();
}

/** Lead-story card HTML for the archive. null = no storyboard / not found. */
export function getLeadStoryHtml(id: string): Promise<string | null> {
  return cached(`lead:${id}`, 6 * HOUR, 7 * DAY, async () => {
    const [raw, date] = await Promise.all([getRawHtml(id), getReferenceDate(id)]);
    if (!raw) return null;
    return prepareLeadStoryHtml(raw, date, id) || null;
  });
}

/** Full issue for the detail page. null = not found. Throws on outages. */
export function getIssue(id: string): Promise<Issue | null> {
  return cached(`issue:${id}`, 30 * MIN, 7 * DAY, async () => {
    // Metadata (subject/date) is usually already in the cached campaign
    // list, which saves a Listmonk round-trip on the critical path.
    const listed = peekListedCampaign(id);

    const [campaign, raw] = await Promise.all([
      listed ? Promise.resolve(listed) : getCampaign(id),
      getRawHtml(id),
    ]);

    if (!campaign || !raw) return null;

    const rawDate = getCampaignDate(campaign);
    const parsed = rawDate ? new Date(rawDate) : null;
    const referenceDate =
      parsed && Number.isFinite(parsed.getTime()) ? parsed : new Date();

    const body = prepareIssueHtml(raw, referenceDate);
    if (!body) return null;

    return {
      id: String(campaign.id),
      subject: campaign.subject || "The Poast",
      date: rawDate || referenceDate.toISOString(),
      body,
    };
  });
}

/**
 * getIssue, but gives up waiting after `ms` and returns null. The underlying
 * request keeps running (and fills the cache), so nothing is wasted.
 * Never throws.
 */
export async function getIssueWithin(id: string, ms: number): Promise<Issue | null> {
  let timer: ReturnType<typeof setTimeout> | undefined;

  try {
    return await Promise.race([
      getIssue(id).catch(() => null),
      new Promise<null>((resolve) => {
        timer = setTimeout(() => resolve(null), ms);
      }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

/** Already-rendered lead HTML, if in memory. Never hits the network. */
export function peekLeadStoryHtml(id: string): string | null {
  const value = peek<string | null>(`lead:${id}`);
  return typeof value === "string" ? value : null;
}

/** Already-rendered full issue, if in memory. Never hits the network. */
export function peekIssue(id: string): Issue | null {
  return peek<Issue | null>(`issue:${id}`) ?? null;
}

let warming = false;

/**
 * Background pre-render of lead stories (used by /today).
 * Low concurrency to be gentle on Listmonk. Never throws.
 */
export function warmLeadStories(ids: string[]) {
  if (warming || ids.length === 0) return;
  warming = true;

  const queue = ids.map((id, index) => ({ id, withIssue: index < 5 }));

  const worker = async () => {
    for (let job = queue.shift(); job; job = queue.shift()) {
      try {
        await getLeadStoryHtml(job.id);
        if (job.withIssue) await getIssue(job.id);
      } catch {
        // Ignore; the real request will retry.
      }
    }
  };

  Promise.all([worker(), worker(), worker()]).finally(() => {
    warming = false;
  });
}

let warmingIssues = false;

/**
 * Background pre-render of full issues (used by /feeds), in order, newest
 * first. Low concurrency, never throws.
 */
export function warmIssues(ids: string[], max = 8) {
  if (warmingIssues || ids.length === 0) return;
  warmingIssues = true;

  const queue = ids.slice(0, max);

  const worker = async () => {
    for (let id = queue.shift(); id; id = queue.shift()) {
      try {
        await getIssue(id);
      } catch {
        // Ignore; the real request will retry.
      }
    }
  };

  Promise.all([worker(), worker()]).finally(() => {
    warmingIssues = false;
  });
}

/* -------------------------------------------------------------------------- */
/*                     LIVE "TODAY'S EDITION" (index route)                   */
/* -------------------------------------------------------------------------- */

const LIVE_CAMPAIGN_ID = 1;
const LIVE_KEY = "live:issue";

/**
 * The live campaign's preview, always served from memory when possible.
 * Fresh for 20s, then stale-while-revalidate for up to 15 minutes.
 * Never throws.
 */
export async function getLiveIssue(): Promise<Issue | null> {
  try {
    return await cached<Issue | null>(LIVE_KEY, 20_000, 15 * MIN, async () => {
      const html = await upstream(
        `/api/campaigns/${LIVE_CAMPAIGN_ID}/preview`,
        "text/html",
        6000
      );

      if (!html || !html.trim()) return null;

      const now = new Date();

      return {
        id: String(LIVE_CAMPAIGN_ID),
        subject: "Today's Edition",
        date: now.toISOString(),
        body: prepareIssueHtml(html, now),
      };
    });
  } catch (error) {
    console.error("[feeds] Live issue failed:", error);
    return null;
  }
}

/** Live issue if already in memory. Never hits the network. */
export function peekLiveIssue(): Issue | null {
  return peek<Issue | null>(LIVE_KEY) ?? null;
}

// Keep the live issue warm so even the first visitor gets it instantly.
// The interval (25s) is longer than the freshness window (20s), so every
// tick triggers a background refresh.
const liveGlobal = globalThis as unknown as { __poastLiveWarm?: boolean };

if (!liveGlobal.__poastLiveWarm) {
  liveGlobal.__poastLiveWarm = true;
  setTimeout(() => void getLiveIssue(), 300);
  setInterval(() => void getLiveIssue(), 25_000).unref?.();
}