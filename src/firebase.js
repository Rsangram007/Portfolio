import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBblBnchTQRIC5huE7euamh0L_SUrMejec",
  authDomain: "sangram-portfolio.firebaseapp.com",
  projectId: "sangram-portfolio",
  storageBucket: "sangram-portfolio.appspot.com",
  messagingSenderId: "734855045098",
  appId: "1:734855045098:web:72e71fe3a47e4257f25c93"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();