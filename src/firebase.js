import { initializeApp } from "firebase";

const config = {
  apiKey: "AIzaSyBDYuDjbLrABdYDOjImsUCDjP8IUpPCbRo",
  authDomain: "samer-yt.firebaseapp.com",
  projectId: "samer-yt",
  storageBucket: "samer-yt.appspot.com",
  messagingSenderId: "284174179777",
  appId: "1:284174179777:web:c9d9fcc3c25638fa62a340",
  measurementId: "G-SP8H83JS3Z",
};

const app = initializeApp(config);

const db = app.firestore();

export default db;
