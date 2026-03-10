importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyByntuUF4fqHzyY31HM3Ohrpt7DiuyY",
    authDomain: "borj-al-arab-app.firebaseapp.com",
    projectId: "borj-al-arab-app",
    storageBucket: "borj-al-arab-app.appspot.com",
    messagingSenderId: "61888251877",
    appId: "1:61888251877:web:7ac9987017bc4dae2bd10c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon.png'
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
});