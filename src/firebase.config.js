// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBths0NCBZ1fXhH_o3eFWX99VcnZEaTdEY",
    authDomain: "rapid-resume.firebaseapp.com",
    projectId: "rapid-resume",
    storageBucket: "rapid-resume.appspot.com",
    messagingSenderId: "670586737942",
    appId: "1:670586737942:web:6cd07b04c8eed633136c37",
    measurementId: "G-J53WZS8945",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore();

export { app, firestore };
