var versionNumber = '0.0.17';

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('sample:app:' + versionNumber).then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/favicon.ico',
          '/manifest.json'
        ]);
      }),
      
    );
  });
  
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
  
        return fetch(event.request, {mode: 'no-cors'}).then(function (response) {
          
          // response may be used only once
          // we need to save clone to put one copy in cache
          // and serve second one
          let responseClone = response.clone();
          
          if(event.request.url.indexOf('/')>-1 && (event.request.url.indexOf('.css')>-1 || event.request.url.indexOf('.js')>-1)){
            caches.open('sample:appcontrols:' + versionNumber).then(function(cache){
                cache.put(event.request, responseClone);
            });
          }
          
          
          return response;
        }).catch(function () {
          return caches.match('/gallery/myLittleVader.jpg');
        });
      }
    }));
  });

  self.addEventListener('activate', function(event) {
    var cacheKeeplist = ['sample:app:' + versionNumber, 'sample:appcontrols:' + versionNumber];  
    event.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (cacheKeeplist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }));
      })
    );
  });
  
  
  
  
  