// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeA9wjW_WE-dw9aUEqE5BXBC7jF8GhBcc",
    authDomain: "beauty-website-demo.firebaseapp.com",
    projectId: "beauty-website-demo",
    storageBucket: "beauty-website-demo.appspot.com",
    messagingSenderId: "748251767941",
    appId: "1:748251767941:web:8f1a9dcda823a1bc1735ec",
    measurementId: "G-CSS58G94PG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);