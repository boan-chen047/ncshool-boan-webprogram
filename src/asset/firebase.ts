// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlszvP7-NECJIUk05wQ_z2Qo5Qo1Q26dU",
  authDomain: "nschool-d73fc.firebaseapp.com",
  projectId: "nschool-d73fc",
  storageBucket: "nschool-d73fc.firebasestorage.app",
  messagingSenderId: "496593676466",
  appId: "1:496593676466:web:4af877dbf1177b1ff9c1ab",
  measurementId: "G-RMF3W49LN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();