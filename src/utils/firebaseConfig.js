// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp-US3rMuceTKHYfizPqtkzZYA6mB_3OI",
  authDomain: "ecomm-sagitario.firebaseapp.com",
  projectId: "ecomm-sagitario",
  storageBucket: "ecomm-sagitario.appspot.com",
  messagingSenderId: "586406053087",
  appId: "1:586406053087:web:3c9e39e3960663dd5e156a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);