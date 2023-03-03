// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDEu_zWpQYi1wxkYX3JH3tiTBaUbtv_Qs",
  authDomain: "chat-man-34aea.firebaseapp.com",
  projectId: "chat-man-34aea",
  storageBucket: "chat-man-34aea.appspot.com",
  messagingSenderId: "775353851670",
  appId: "1:775353851670:web:ee104c7d5600c8af3a3a37",
  measurementId: "G-3N7MGMM9M7"
};

// Initialize Firebase
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
