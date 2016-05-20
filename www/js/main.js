$(function() {
    var push = PushNotification.init({
        "android": {
            "senderID": "72429857274",
            "icon": "notificationicon"
        }
    });
    push.on('notification', function(data) {
        navigator.notification.alert("New Notification! " + data.message + " " + data.message);
    });
});