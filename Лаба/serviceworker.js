const CACHE_NAME = 'кредитный-калькулятор-v1';
const PRECACHE_URLS = [
  'index.html',
  'logo192.jpg',
  'logo512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});