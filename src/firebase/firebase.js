// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth    } from 'firebase/auth';
import {  getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvNeh6j3N9i2du9PaxFeIHnsxD1ysCMYw",
  authDomain: "talkiee-a9b42.firebaseapp.com",
  projectId: "talkiee-a9b42",
  storageBucket: "talkiee-a9b42.appspot.com",
  messagingSenderId: "171618350906",
  appId: "1:171618350906:web:abb313500ec80eda480203"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
