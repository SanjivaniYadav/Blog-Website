// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  //import.meta since we are using vite
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-499e6.firebaseapp.com",
  projectId: "mern-blog-499e6",
  storageBucket: "mern-blog-499e6.appspot.com",
  messagingSenderId: "700990732050",
  appId: "1:700990732050:web:73185420338cccd5ba65cb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
