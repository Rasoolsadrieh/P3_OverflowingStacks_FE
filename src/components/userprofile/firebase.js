// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1zG0JHMLCoepmrXm13krwazBH98wP6M4",
  authDomain: "userprofile-7dd80.firebaseapp.com",
  projectId: "userprofile-7dd80",
  storageBucket: "userprofile-7dd80.appspot.com",
  messagingSenderId: "342901295107",
  appId: "1:342901295107:web:8b36e2ae77a4bcd9b5a636"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);