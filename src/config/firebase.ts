// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBinGaBhQTAz79E5ZEg2zmbfXJSLezjEek",
  authDomain: "pedro-1-573ce.firebaseapp.com",
  projectId: "pedro-1-573ce",
  storageBucket: "pedro-1-573ce.appspot.com",
  messagingSenderId: "470567725881",
  appId: "1:470567725881:web:6299b6dcd04f17a56a96e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app)