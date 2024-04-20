import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBcbN-egT_0rxQhF3GYWLAvkum24Av7uaM",
    authDomain: "authreact-c3d94.firebaseapp.com",
    projectId: "authreact-c3d94",
    storageBucket: "authreact-c3d94.appspot.com",
    messagingSenderId: "532594728782",
    appId: "1:532594728782:web:3710c09306e2fc85d2081f",
    measurementId: "G-BDEGGJCPKJ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth };
