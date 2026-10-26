/* Yercaud Lake visitor guide — Service Worker (v2026-10-25) */
const VERSION = 'yercaudlake-v2026-10-25';
const CORE = ['/', '/site.webmanifest', '/favicon.svg', '/icon-192.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin || url.pathname.startsWith('/api/')) return;

  // Navigations: network-first with offline fallback to cached shell.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          if(res.status===200)caches.open(VERSION).then((c) => c.put(req, copy)).catch(()=>{});
          return res;
        })
        .catch(() =>
          caches.match(req).then((hit) => hit || new Response('Offline — reconnect to open this page.', {status:503,headers:{'content-type':'text/plain; charset=utf-8'}}))
        )
    );
    return;
  }

  // Same-origin assets: cache-first with background refresh.
  event.respondWith(
    caches.match(req).then((hit) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            if(res.status===200)caches.open(VERSION).then((c) => c.put(req, copy)).catch(()=>{});
          }
          return res;
        })
        .catch(() => hit);
      return hit || network;
    })
  );
});
