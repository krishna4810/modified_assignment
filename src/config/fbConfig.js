import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCQsz6EX__NFhLWsUb636Hyu7b-myhzq6c",
    authDomain: "transactions-a0d86.firebaseapp.com",
    projectId: "transactions-a0d86",
    storageBucket: "transactions-a0d86.appspot.com",
    messagingSenderId: "948920481307",
    appId: "1:948920481307:web:3c26dbaa789556b43a6abe"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampInSnapshots:true});
  // Initialize Firebase
  export default firebase;