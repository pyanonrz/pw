let bodys = "This notification was generated from a push! from let"
let titles = "Explore this new world! from let"
self.addEventListener('push', function(e) {
    var options = {
        body: bodys,
        icon: 'images/example.png',
        vibration: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {action: 'explore', title: titles, icon: 'images/checkmark.png'},
            {action: 'close', title: 'Close', icon:'images/xmark.png'}
        ] 
    };
    e.waitUntil(self.registration.showNotification('Hello world!', options))
});
