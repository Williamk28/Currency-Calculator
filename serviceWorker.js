'use strict';

const cacheName = "cacheV1";
const files = [
    "/",
    "index.html",
    "styles.css",
    "normalize.css",
    "model.js",
    "view.js",
    "controller.js",
    "images/Australia.png",
    "images/Brazil.png",
    "images/Bulgaria.png",
    "images/Canada.png",
    "images/China.png",
    "images/Croatia.png",
    "images/CzechRepublic.png",
    "images/Denmark.png",
    "images/Europe.png",
    "images/HongKong.png",
    "images/Hungary.png",
    "images/Iceland.png",
    "images/India.png",
    "images/Indonesia.png",
    "images/Japan.png",
    "images/Latvia.png",
    "images/Logo128.png",
    "images/Logo192.png",
    "images/Malaysia.png",
    "images/Mexico.png",
    "images/NewZealand.png",
    "images/Norway.png",
    "images/Philippines.png",
    "images/Poland.png",
    "images/Romania.png",
    "images/Russia.png",
    "images/Singapore.png",
    "images/SouthAfrica.png",
    "images/SouthKorea.png",
    "images/Sweden.png",
    "images/Switzerland.png",
    "images/Thailand.png",
    "images/Turkey.png",
    "images/UK.png",
    "images/USA.png"
];

self.addEventListener("install", event => {
    console.log("Service Worker installing!");
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(files);
            })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});