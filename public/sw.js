/* Mama Minds — Service Worker for offline support */
// Bump this on every deploy that changes index.html/main.js/main.css (or
// any precached asset) — the fetch handler below is cache-first, so a
// stale CACHE_NAME means returning visitors (and installed PWA users
// especially) keep getting old code indefinitely, never the new deploy.
const CACHE_NAME = 'mama-minds-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './images/cover-illustration.png',
  './mama-minds-loading.svg',
  './images/backgrounds/plain-rust.png',
  './images/backgrounds/cream-corner-wallpaper.png',
  './images/backgrounds/sun-motif-pale.jpg',
  './images/backgrounds/raffia-swirl.jpg',
  './images/backgrounds/mudcloth-triangle-dash.jpg',
  './images/backgrounds/sun-motif-terracotta.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
