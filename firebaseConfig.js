// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import the auth function

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkcOSUHqLXnSpnE9BdedJzpWRhRmlzkkk",
  authDomain: "midterm-f7836.firebaseapp.com",
  projectId: "midterm-f7836",
  storageBucket: "midterm-f7836.appspot.com",
  messagingSenderId: "839036608980",
  appId: "1:839036608980:web:e17bf44e75227eab53b641",
  measurementId: "G-SN38CSZFN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Auth

// Export the necessary variables
export { app, auth }; // Now auth is defined