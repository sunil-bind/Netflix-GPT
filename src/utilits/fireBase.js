// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "netflixgpt-c1875.firebaseapp.com",
  projectId: "netflixgpt-c1875",
  storageBucket: "netflixgpt-c1875.firebasestorage.app",
  messagingSenderId: "321455349907",
  appId: "1:321455349907:web:8871818229fa4c98ba6d66",
  measurementId: "G-J2QMG21CTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();