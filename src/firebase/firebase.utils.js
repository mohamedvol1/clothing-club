import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCwKLOXDYSaC6zNC1QuCrbPm9NLrZAh2xs",
  authDomain: "clothing-club-db.firebaseapp.com",
  projectId: "clothing-club-db",
  storageBucket: "clothing-club-db.appspot.com",
  messagingSenderId: "489066786931",
  appId: "1:489066786931:web:3147900f72f7d7a9edba06",
  measurementId: "G-2PWRC990VF"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
