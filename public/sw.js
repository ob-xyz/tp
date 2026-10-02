// Minimal service worker: makes the site installable.
// Network-first pass-through, so the live feed is never served stale.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
