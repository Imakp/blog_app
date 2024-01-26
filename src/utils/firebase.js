// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "quantumize-d7edf.firebaseapp.com",
  projectId: "quantumize-d7edf",
  storageBucket: "quantumize-d7edf.appspot.com",
  messagingSenderId: "781925351705",
  appId: "1:781925351705:web:ce900c1e06c93ef7acc588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);