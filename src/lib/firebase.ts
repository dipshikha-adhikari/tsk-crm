// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7xPHycTZfrBWAbEzKXRy1_nxhpVnmFq0",
    authDomain: "local-crm-41aa2.firebaseapp.com",
    projectId: "local-crm-41aa2",
    storageBucket: "local-crm-41aa2.firebasestorage.app",
    messagingSenderId: "14613081060",
    appId: "1:14613081060:web:103fe636b4dd0d8ea8f5f1",
    measurementId: "G-GM41EVTGM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);