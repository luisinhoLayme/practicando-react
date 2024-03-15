// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBamitHnbfQjUGLkR4OOYs8apWhxtFtfYY",
  authDomain: "react-journal-app-c84a6.firebaseapp.com",
  projectId: "react-journal-app-c84a6",
  storageBucket: "react-journal-app-c84a6.appspot.com",
  messagingSenderId: "696572576489",
  appId: "1:696572576489:web:17d977f69f37cb2db7a678"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )

