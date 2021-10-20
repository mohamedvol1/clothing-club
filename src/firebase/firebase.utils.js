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

export const createUserProfileDocument = async (userAuth, extraData)  => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const crearedAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        crearedAt,
        ...extraData
      })
    } catch (error) {
      console.log('error creating new user ', error)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
