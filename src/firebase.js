// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBa1rGmCeh_N58ZdGczzkIi82iqHb1GpMo",
  authDomain: "feedback-form-c8edd.firebaseapp.com",
  databaseURL: "https://feedback-form-c8edd-default-rtdb.firebaseio.com", // root URL
  projectId: "feedback-form-c8edd",
  storageBucket: "feedback-form-c8edd.appspot.com",
  messagingSenderId: "503122892448",
  appId: "1:503122892448:web:3b417f8dbc5296c75a1bc5"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
