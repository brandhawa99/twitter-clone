// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARAPCsLSOiif6RtLrDKQ57DOIVuNafIwU",
  authDomain: "twitter-clone-480c7.firebaseapp.com",
  projectId: "twitter-clone-480c7",
  storageBucket: "twitter-clone-480c7.appspot.com",
  messagingSenderId: "1087804026581",
  appId: "1:1087804026581:web:d353f52d9eae0501653c5c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();