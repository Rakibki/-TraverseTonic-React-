// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwQbOB2aZstvn7hEdv6frL2S35XtDf598",
  authDomain: "traversetonic.firebaseapp.com",
  projectId: "traversetonic",
  storageBucket: "traversetonic.appspot.com",
  messagingSenderId: "797231773605",
  appId: "1:797231773605:web:6f8d1e1dcf8ed91dd59a4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth