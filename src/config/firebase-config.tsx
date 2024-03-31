// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {
  FirebaseAuth,
  FirebaseDatabase,
  FirestoreDatabase,
} from "refine-firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOXC7VLhyGC7-OmotNf8qq-cuugu5C8Fw",
  authDomain: "triptour-63a6f.firebaseapp.com",
  databaseURL: "https://triptour-63a6f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "triptour-63a6f",
  storageBucket: "triptour-63a6f.appspot.com",
  messagingSenderId: "371074619895",
  appId: "1:371074619895:web:1af89fffe377ce7d67f6f2",
  measurementId: "G-5RJD65W9KX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const firebaseAuth = new FirebaseAuth();
export const firestoreDatabase = new FirestoreDatabase();
export const firebaseDatabase = new FirebaseDatabase();
export default db;

