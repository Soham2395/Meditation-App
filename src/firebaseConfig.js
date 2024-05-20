import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBy3bdF3pPgKJSrWCQZoFwPTqhWa8G885Q",
    authDomain: "meditation-app-632c2.firebaseapp.com",
    projectId: "meditation-app-632c2",
    storageBucket: "meditation-app-632c2.appspot.com",
    messagingSenderId: "1065369861533",
    appId: "1:1065369861533:web:65ddb0af171e1026ca8374",
    measurementId: "G-33P3CC63WF"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
