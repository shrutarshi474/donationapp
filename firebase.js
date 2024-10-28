// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5JcpPQyXrm2CKPnByF8Vf6B17ZUb2H9E",
  authDomain: "donation-app-98de9.firebaseapp.com",
  projectId: "donation-app-98de9",
  storageBucket: "donation-app-98de9.appspot.com",
  messagingSenderId: "494772265486",
  appId: "1:494772265486:web:d050e900f036d9ac76925f",
  measurementId: "G-5TCWSMM899",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
