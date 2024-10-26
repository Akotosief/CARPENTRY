// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByf8MeGBqoqPDRXJBfiwyoOllIyODQc38",
  authDomain: "carpentry-d0a37.firebaseapp.com",
  projectId: "carpentry-d0a37",
  storageBucket: "carpentry-d0a37.appspot.com",
  messagingSenderId: "104100625346",
  appId: "1:104100625346:web:edd45b7aaa819d475ef45b",
  measurementId: "G-XB4DM64EP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);