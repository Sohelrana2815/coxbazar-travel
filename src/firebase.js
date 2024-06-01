// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgj31VhmIHiYVFDNHt4yB9X3wtp7xDpg0",
  authDomain: "coxbazar-travel.firebaseapp.com",
  projectId: "coxbazar-travel",
  storageBucket: "coxbazar-travel.appspot.com",
  messagingSenderId: "860404350560",
  appId: "1:860404350560:web:f76f478247bcdf16294d05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
