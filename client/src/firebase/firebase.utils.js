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

export const addCollectionsAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

export const mapCollectionsSnapshotsToNew = collections => {
  const newCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    };
  })

  return newCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {})
} 

export const getCurrentUser = () => {
   return new Promise((resolve, reject) => {
     const unsubscribe = auth.onAuthStateChanged(userAuth => {
       unsubscribe();
       resolve(userAuth);
     }, reject)
   });
 }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
