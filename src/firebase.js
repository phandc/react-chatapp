import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAe_sC1A8kzwYst3_1jJ-HV0tqBJWJdJYQ",
    authDomain: "unichat-d0cef.firebaseapp.com",
    projectId: "unichat-d0cef",
    storageBucket: "unichat-d0cef.appspot.com",
    messagingSenderId: "995756088437",
    appId: "1:995756088437:web:a10262faf3fdfd5c52ac3c"
}).auth();