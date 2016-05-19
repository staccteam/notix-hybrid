$(function() {
    var push = PushNotification.init({
        android: {
            senderID: "72429857274"
        }
    });
    push.on('notification', function(data) {
        alert("New Notification! " + data.message + " " + data.message);
    });
});