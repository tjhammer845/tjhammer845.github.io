import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAMV_ZqYvif9QBC2A4bzEvv7mj0MKCraVs",
    authDomain: "portfolio-contact-21e8f.firebaseapp.com",
    databaseURL: "https://portfolio-contact-21e8f.firebaseio.com",
    projectId: "portfolio-contact-21e8f",
    storageBucket: "portfolio-contact-21e8f.appspot.com",
    messagingSenderId: "926494587080",
    appId: "1:926494587080:web:1b78711749e40da9958dfd"
})

var db = firebaseApp.firestore();

export { db };