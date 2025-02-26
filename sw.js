self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('govlawhealth-v1').then(cache => {
            return cache.addAll([
                '/GovLawHealth-Portal/index.html',
                '/GovLawHealth-Portal/government.html',
                '/GovLawHealth-Portal/law.html',
                '/GovLawHealth-Portal/health.html'
            ]);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
