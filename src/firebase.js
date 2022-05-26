import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfQ_Vt45pATJmAuWhKBJ_J7m1Mqii51m4",
  authDomain: "notes-ef456.firebaseapp.com",
  databaseURL: "https://notes-ef456-default-rtdb.firebaseio.com",
  projectId: "notes-ef456",
  storageBucket: "notes-ef456.appspot.com",
  messagingSenderId: "392674787511",
  appId: "1:392674787511:web:2059fe00921e13bda20d32"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;