import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDrMhixNVeARwXtJ9xwEk2UyRb1Ah3BBn8",
    authDomain: "appcbta.firebaseapp.com",
    projectId: "appcbta",
    storageBucket: "appcbta.appspot.com",
    messagingSenderId: "655970061604",
    appId: "1:655970061604:web:3229a61922f7a4852f77b1"
  };
  // Initialize Firebase
 const fb= firebase.initializeApp(firebaseConfig);

 export const db=fb.firestore();
