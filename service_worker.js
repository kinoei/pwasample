var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
    ".",
    "index.html",
    "file_read.html",
    "camera.html",
    "js/camera.js"
];

// インストール処理
self.addEventListener(`install`, function(event){
    event.waitUntil(
        caches
        .open(CACHE_NAME)
        .then(function(cache){
            return cache.addAll(urlsToCache);
        })
    );
});

// キャッシュロード処理
self.addEventListener('fetch', function(event){
    event.respondWith(
        caches
        .match(event.request)
        .then(function(response){
            return response ? response : fetch(event.request);
        })
    );
});