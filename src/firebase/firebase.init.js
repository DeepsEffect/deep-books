// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPfs7w566eTUKJWOzU6d836P6loAMlk9U",
  authDomain: "deepseffect-assignment-08-ph.firebaseapp.com",
  projectId: "deepseffect-assignment-08-ph",
  storageBucket: "deepseffect-assignment-08-ph.appspot.com",
  messagingSenderId: "684665735443",
  appId: "1:684665735443:web:949664291afdd75c59b2e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);