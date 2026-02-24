const cacheName = 'khidma-school-v10';
const assets = [
  '/rasd-tools/',
  '/rasd-tools/index.html',
  '/rasd-tools/manifest.json',
  '/rasd-tools/icon-180x180.png',
  '/rasd-tools/icon-192x192.png',
  '/rasd-tools/icon-512x512.png'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching assets');
      return cache.addAll(assets);
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
