const cacheName = 'khidma-v15';
const assets = [
  '/rasd-tools/index.html',
  '/rasd-tools/manifest.json',
  '/rasd-tools/icon-192x192.png',
  '/rasd-tools/icon-512x512.png'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    }).then(() => self.skipWaiting()) // إجبار التحديث فوراً
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim()); // إجبار السيطرة فوراً
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((res) => {
      return res || fetch(evt.request);
    })
  );
});
