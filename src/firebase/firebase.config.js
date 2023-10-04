// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApusLWBrW4dcN7QrnM-qtu6J0ZVkT30Ek",
  authDomain: "dragon-news-a4632.firebaseapp.com",
  projectId: "dragon-news-a4632",
  storageBucket: "dragon-news-a4632.appspot.com",
  messagingSenderId: "34291537218",
  appId: "1:34291537218:web:a35c887472a37af3b764db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth