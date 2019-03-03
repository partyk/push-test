import '@babel/polyfill';
// import registerServiceWorker from './registerServiceWorker';
import {initializeFirebase, askForPermissioToReceiveNotifications} from './push-notification';

// registerServiceWorker();
initializeFirebase();

document.getElementById('push-register').addEventListener('click', (e) => {
    console.log('click');
    e.preventDefault();
    askForPermissioToReceiveNotifications();
});