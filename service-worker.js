const CACHE_NAME = 'bookbrief-v1';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './images/icon-192.svg',
    './images/icon-512.svg',
    './images/silent-patient.jpg',
    './images/stranger-again.png',
    './images/atomic-habits.jpg',
    './images/alchemist.jpg',
    './images/it-ends-with-us.jpg',
    './images/gone-girl.jpg',
    './images/da-vinci-code.jpg',
    './images/dragon-tattoo.jpg',
    './images/housemaid.jpg',
    './images/woman-in-window.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                const fetchRequest = event.request.clone();
                return fetch(fetchRequest).then(
                    response => {
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        return response;
                    }
                );
            })
    );
});
