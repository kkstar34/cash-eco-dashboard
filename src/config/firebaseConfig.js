// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfxR1owcY90EzG8Lo7q_tIItCE7Gn_hmQ",
  authDomain: "casheco-b7268.firebaseapp.com",
  projectId: "casheco-b7268",
  storageBucket: "casheco-b7268.appspot.com",
  messagingSenderId: "218741074429",
  appId: "1:218741074429:web:521f5bea1dfe3bfd451194",
  measurementId: "G-5098WGYCFD"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;