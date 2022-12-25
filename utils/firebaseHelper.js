

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
    // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOv7zDy0pbXOrkk3kmM-eFiR7eqHYnMBk",
  authDomain: "whatsapp-rn-8e33d.firebaseapp.com",
  projectId: "whatsapp-rn-8e33d",
  storageBucket: "whatsapp-rn-8e33d.appspot.com",
  messagingSenderId: "659882354366",
  appId: "1:659882354366:web:382c9c6b359a875221e0ef",
  measurementId: "G-P53LF0R6HP"
};

// Initialize Firebase
return initializeApp(firebaseConfig);

}