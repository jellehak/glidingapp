/// <reference lib="WebWorker" />

// import { version } from '../package.json';

const CACHE_NAME = 'glidingapp.com';
const CACHE_VERSION = "1.0.0";
const urlsToCache = [
  './',
  './assets/app.js',
  './assets/index.css'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(`${CACHE_VERSION}-${CACHE_NAME}`)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter((key) => key.indexOf(CACHE_VERSION) !== 0)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  const request = event.request;

  if (request.method !== "GET") {
    event.respondWith(fetch(request));
    return;
  }

  if (
    request.headers.get("Accept")?.indexOf("text/html") !== -1 &&
    request.url.startsWith(this.origin)
  ) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_VERSION + CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((response) => response || caches.match("/")))
    );
    return;
  } else {
    event.respondWith(
      caches.match(request)
        .then((response) => response || fetch(request))
    );
  }
});