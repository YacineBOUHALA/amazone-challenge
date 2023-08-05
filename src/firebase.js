import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKwibQddTVzcKULS6TwA8eNoekeRkFIsY",
  authDomain: "clone-94b7e.firebaseapp.com",
  projectId: "clone-94b7e",
  storageBucket: "clone-94b7e.appspot.com",
  messagingSenderId: "587277451325",
  appId: "1:587277451325:web:17a1afa5e662639f7d6a54",
  measurementId: "G-QXZ685V49J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};