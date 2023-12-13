// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlaoWcxEqZLrup8DouxZBM2trFymzyhKk",
  authDomain: "wokapp-eb4c0.firebaseapp.com",
  projectId: "wokapp-eb4c0",
  storageBucket: "wokapp-eb4c0.appspot.com",
  messagingSenderId: "623495054446",
  appId: "1:623495054446:web:58e4bd3c79896f55fe127f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)