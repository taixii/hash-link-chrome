import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBybRuFtg4gmhvLbqasCDUYtcBxRkW6yAo",
  authDomain: "hash-link.firebaseapp.com",
  projectId: "hash-link",
  storageBucket: "hash-link.appspot.com",
  messagingSenderId: "357095374223",
  appId: "1:357095374223:web:1afe0a35ce019630985ffa",
  measurementId: "G-K7GKNJ7XKV",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;
