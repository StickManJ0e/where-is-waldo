// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbA1wN2AGli-tZlv_SBO-0kdZtC3OjhFM",
  authDomain: "where-is-waldo-64ca4.firebaseapp.com",
  projectId: "where-is-waldo-64ca4",
  storageBucket: "where-is-waldo-64ca4.appspot.com",
  messagingSenderId: "968276203608",
  appId: "1:968276203608:web:0580093fd982b38fe4122d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);