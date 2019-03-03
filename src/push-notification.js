import firebase from 'firebase';

export const initializeFirebase = async () => {
    const config = {
        apiKey: 'AIzaSyCqsnxh53Tsd34Ub44Varvxg4KZ308ipZ8',
        authDomain: 'test-push-9afb5.firebaseapp.com',
        databaseURL: 'https://test-push-9afb5.firebaseio.com',
        projectId: 'test-push-9afb5',
        storageBucket: 'test-push-9afb5.appspot.com',
        messagingSenderId: '808497093791'
    };
    firebase.initializeApp(config);
};

export const askForPermissioToReceiveNotifications = async () => {
    try {
        if ('serviceWorker' in navigator) {
            console.log('servise work active');
            const messaging = firebase.messaging();
            await messaging.requestPermission();
            const token = await messaging.getToken();
            console.log('token:', token);

            messaging.onMessage(function (payload) {
                console.log('Message received. ', payload);
                // ...
            });
            // navigator.serviceWorker
            //     .register('/firebase-messaging-sw.js')
            //     .then((registration) => {
            //         console.log(registration);
            //         firebase.messaging().useServiceWorker(registration);
            //     });
        } else {
            console.warn('Service workers aren\'t supported in this browser.');
        }
    } catch (error) {
        console.error(error);
    }
};