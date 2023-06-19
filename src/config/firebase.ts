// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTiSXUF3ISwwwV28q7Q7YndPdAO_La2Bw",
  authDomain: "led-colour-lights.firebaseapp.com",
  projectId: "led-colour-lights",
  storageBucket: "led-colour-lights.appspot.com",
  messagingSenderId: "525608878975",
  appId: "1:525608878975:web:fc7968ab29bfbb73c8904a",
  measurementId: "G-MDPXR0S57N"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
