let bodys = "This notification was generated from a push!edited"
let titles = "Explore this new world!edited"
let message = "Hello world!edited"
let closes = "Close edited"
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
            {action: 'close', title: closes, icon:'images/xmark.png'}
        ] 
    };
    e.waitUntil(self.registration.showNotification(message, options))
});
