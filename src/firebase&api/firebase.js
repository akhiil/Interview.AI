// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9FOjr4qw0-TcryEdpdZq7htnlaLSyD2o",
  authDomain: "ai-interview-8cfce.firebaseapp.com",
  projectId: "ai-interview-8cfce",
  storageBucket: "ai-interview-8cfce.appspot.com",
  messagingSenderId: "259015461602",
  appId: "1:259015461602:web:9cb51d6f3b9066165eacbb",
  measurementId: "G-840QY41G5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 259015461602-9dh22i2d03jgvourqj0dflbcl3v549se.apps.googleusercontent.com (your client id)
// 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 (your client secret)