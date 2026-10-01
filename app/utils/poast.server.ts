/**
 * Shared Listmonk helper (server only).
 * Creates a subscriber through Listmonk's admin API, or merges into the
 * existing one if the email is already in your database.
 *
 * Env vars (same ones book.tsx already uses):
 *   LISTMONK_USERNAME, LISTMONK_TOKEN   (or LISTMONK_API_USER / LISTMONK_API_TOKEN)
 *   LISTMONK_URL                        (optional, defaults to https://app.thepoast.com)
 */

type Json = Record<string, unknown>;

function config() {
  const baseUrl = (
    process.env.LISTMONK_URL || "https://app.thepoast.com"
  ).replace(/\/+$/, "");
  const apiUser = process.env.LISTMONK_API_USER || process.env.LISTMONK_USERNAME;
  const apiToken = process.env.LISTMONK_API_TOKEN || process.env.LISTMONK_TOKEN;

  const missing: string[] = [];
  if (!apiUser) missing.push("LISTMONK_USERNAME");
  if (!apiToken) missing.push("LISTMONK_TOKEN");
  if (missing.length) {
    throw new Error(`Missing env vars: ${missing.join(", ")}`);
  }
  return { baseUrl, apiUser: apiUser as string, apiToken: apiToken as string };
}

async function listmonk(path: string, init: RequestInit = {}) {
  const { baseUrl, apiUser, apiToken } = config();
  return fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${apiUser}:${apiToken}`,
      ...(init.headers || {}),
    },
  });
}

function explain(step: string, status: number, body: string) {
  let hint = "";
  if (status === 401) hint = "Credentials rejected. Check LISTMONK_USERNAME / LISTMONK_TOKEN.";
  else if (status === 403) hint = "API user lacks permission (needs subscribers:manage and access to the list).";
  else if (status === 404) hint = "Path not found. Check LISTMONK_URL.";
  else if (status === 400) hint = "Listmonk rejected the data (often a wrong list ID).";
  return `Listmonk ${step} failed (HTTP ${status}). ${hint} Response: ${body.slice(0, 300)}`;
}

export type UpsertOptions = {
  email: string;
  name: string;
  /** Numeric Listmonk list ID. Omit to save the subscriber on no list. */
  listId?: number;
  /** Flat attributes merged into subscribers.attribs */
  attribs: Json;
  /** attribs key holding a running history array, e.g. "tips" */
  historyKey: string;
  /** The entry to append to that history array */
  historyEntry: Json;
  /** Replace the name of an existing subscriber? Default: keep theirs. */
  overwriteName?: boolean;
};

export async function upsertSubscriber(opts: UpsertOptions) {
  const { email, name, listId, attribs, historyKey, historyEntry } = opts;
  const lists = listId ? [listId] : [];

  const createRes = await listmonk("/api/subscribers", {
    method: "POST",
    body: JSON.stringify({
      email,
      name,
      status: "enabled",
      lists,
      preconfirm_subscriptions: true,
      attribs: { ...attribs, [historyKey]: [historyEntry] },
    }),
  });

  if (createRes.ok) return;
  if (createRes.status !== 409) {
    throw new Error(explain("create", createRes.status, await createRes.text()));
  }

  // Already exists: find them and merge.
  const query = `subscribers.email = '${email.replace(/'/g, "''")}'`;
  const findRes = await listmonk(
    `/api/subscribers?per_page=1&query=${encodeURIComponent(query)}`
  );
  if (!findRes.ok) {
    throw new Error(explain("lookup", findRes.status, await findRes.text()));
  }
  const existing = (await findRes.json())?.data?.results?.[0];
  if (!existing) throw new Error("Email exists but lookup returned nothing");

  const existingAttribs: Json = existing.attribs ?? {};
  const history = Array.isArray(existingAttribs[historyKey])
    ? (existingAttribs[historyKey] as unknown[])
    : [];

  // PUT replaces memberships, so keep every list they're already on.
  const listIds = Array.from(
    new Set<number>([
      ...((existing.lists ?? []) as { id: number }[]).map((l) => l.id),
      ...lists,
    ])
  );

  const updateRes = await listmonk(`/api/subscribers/${existing.id}`, {
    method: "PUT",
    body: JSON.stringify({
      email: existing.email,
      name: opts.overwriteName ? name : existing.name || name,
      status: existing.status,
      lists: listIds,
      preconfirm_subscriptions: true,
      attribs: {
        ...existingAttribs,
        ...attribs,
        [historyKey]: [...history, historyEntry].slice(-20),
      },
    }),
  });

  if (!updateRes.ok) {
    throw new Error(explain("update", updateRes.status, await updateRes.text()));
  }
}