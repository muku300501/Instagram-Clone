import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZup31LcnvmzQC02y6m0bk5KcErmN5yrc",
  authDomain: "instagram-cd5f7.firebaseapp.com",
  databaseURL: "https://instagram-cd5f7.firebaseio.com",
  projectId: "instagram-cd5f7",
  storageBucket: "instagram-cd5f7.appspot.com",
  messagingSenderId: "664689884676",
  appId: "1:664689884676:web:1d9738b5b8574d9ed9ff51",
  measurementId: "G-9CH753VQC9",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
