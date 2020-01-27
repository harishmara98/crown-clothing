import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQ2L1sSnYiflnJuyw_svrENE0aqEbXp-E",
    authDomain: "crown-db-485ac.firebaseapp.com",
    databaseURL: "https://crown-db-485ac.firebaseio.com",
    projectId: "crown-db-485ac",
    storageBucket: "crown-db-485ac.appspot.com",
    messagingSenderId: "814222993095",
    appId: "1:814222993095:web:882ebbb250e3e0647380e2",
    measurementId: "G-6T8MTSF1DZ"
  };

  firebase.initializeApp(config);

  export const auth =  firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

