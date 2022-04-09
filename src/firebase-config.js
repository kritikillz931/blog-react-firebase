// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhkvcAGvNWsT8QZwXUZyttxLQ7mgo-2Ic",
  authDomain: "blogproject-24f62.firebaseapp.com",
  projectId: "blogproject-24f62",
  storageBucket: "blogproject-24f62.appspot.com",
  messagingSenderId: "180612929177",
  appId: "1:180612929177:web:072fa42f7fb603cad70a08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()