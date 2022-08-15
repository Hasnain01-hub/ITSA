// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw4W-AMeLjT9KqrDXIjKZ2pI6gAJjVZCo",
  authDomain: "itsa-3b400.firebaseapp.com",
  projectId: "itsa-3b400",
  storageBucket: "itsa-3b400.appspot.com",
  messagingSenderId: "806901178724",
  appId: "1:806901178724:web:beb2964dac91c2dc2d5a71",
  measurementId: "G-0L5KLFEXHK"
};
console.log(firebaseConfig)
export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const db = app.firestore();
export const logout1 = () => {
  auth.signOut();
};