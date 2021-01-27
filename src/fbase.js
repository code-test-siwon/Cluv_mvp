import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3puH4kRAd0bzL4mX3OszY2ZgTCYfiOT8",
  authDomain: "cluv-4e536.firebaseapp.com",
  projectId: "cluv-4e536",
  storageBucket: "cluv-4e536.appspot.com",
  messagingSenderId: "535501389999",
  appId: "1:535501389999:web:604b04a806c5a6b737d45a",
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
