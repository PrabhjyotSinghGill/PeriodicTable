import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApe4k34dSUNgNcC8dj3Xk9p0nlxhU4G1o",
    authDomain: "periodic-table-ec648.firebaseapp.com",
    projectId: "periodic-table-ec648",
    storageBucket: "periodic-table-ec648.appspot.com",
    messagingSenderId: "832885158240",
    appId: "1:832885158240:web:1a2d72700310d5d0586e05",
    measurementId: "G-9RZLRQHK9C"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();

export default firebaseApp;

