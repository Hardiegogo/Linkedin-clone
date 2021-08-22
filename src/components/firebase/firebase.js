import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC95pAD0LLNziIaFcHk-7BXEwbUkkjEvUA",
  authDomain: "linkedin-clone-d549a.firebaseapp.com",
  projectId: "linkedin-clone-d549a",
  storageBucket: "linkedin-clone-d549a.appspot.com",
  messagingSenderId: "200888072339",
  appId: "1:200888072339:web:97022ae022c009eba6b566",
  measurementId: "G-HCXQMLL235"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth=firebase.auth();


export {db,auth}