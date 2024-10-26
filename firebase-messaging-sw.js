// Service Worker
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// self.addEventListener('fetch', () => {
// 	const urlParams = new URLSearchParams(location.search);
// 	self.firebaseConfig = Object.fromEntries(urlParams);
// });

const firebaseConfig = {
	apiKey: "AIzaSyCEg8Zjd1RtY7UXNKKU6OOqrF6DCOS4Hpw",
	authDomain: "indi-sys.firebaseapp.com",
	projectId: "indi-sys",
	storageBucket: "indi-sys.appspot.com",
	messagingSenderId: "418797173759",
	appId: "1:418797173759:web:8981b33c9a05246bd985ca",
	measurementId: "G-ZCYPNLXHE8"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging()

// if (isSupported) {
const channel = new BroadcastChannel('notifications');
messaging.onBackgroundMessage(function (payload) {
	//can not console.log here
	channel.postMessage(payload);
});
// }

// self.addEventListener('push', function (event) {
// 	var notification = event.data.json();
// 	event.waitUntil(
// 		self.registration.showNotification(notification.title, notification.options)
// 	);
// });
