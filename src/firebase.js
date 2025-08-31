// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBa1rGmCeh_N58ZdGczzkIi82iqHb1GpMo",
  authDomain: "feedback-form-c8edd.firebaseapp.com",
  projectId: "feedback-form-c8edd",
  storageBucket: "feedback-form-c8edd.firebasestorage.app",
  messagingSenderId: "503122892448",
  appId: "1:503122892448:web:3b417f8dbc5296c75a1bc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
export const db = getFirestore(app);
