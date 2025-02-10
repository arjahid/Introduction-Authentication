// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuCwLF3qcISmz5SkaMMv_HQG6C3ntAwgs",
  authDomain: "email-password-auth-699cf.firebaseapp.com",
  projectId: "email-password-auth-699cf",
  storageBucket: "email-password-auth-699cf.firebasestorage.app",
  messagingSenderId: "842077356915",
  appId: "1:842077356915:web:2f981be16daeb18d73fb06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);