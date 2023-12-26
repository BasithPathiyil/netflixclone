// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClb_cMQroVIv8EdjsQ1c5gTQ56clCFcws",
  authDomain: "netflixclone-855a3.firebaseapp.com",
  projectId: "netflixclone-855a3",
  storageBucket: "netflixclone-855a3.appspot.com",
  messagingSenderId: "694269363028",
  appId: "1:694269363028:web:d809ac53bb89b14312bec1",
  measurementId: "G-BJL5ZEPB6B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
