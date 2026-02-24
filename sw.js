const cacheName = 'khidma-school-v2';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon-192×192.png',
  './icon-512×512.png'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
