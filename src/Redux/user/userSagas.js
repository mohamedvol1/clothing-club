import { takeLatest, all, call, put } from "@redux-saga/core/effects";
import { auth, createUserProfileDocument, googleProvider, getCurrentUser } from "../../firebase/firebase.utils";
import { SignInSuccess, SignInError, signOutSuccess, signOutError, signUpError } from "./userAction";

import { CHECK_USER_SESSION, EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START, SIGN_OUT_START, SIGN_UP_START } from './userActionTypes'

export function* getSnapshotFromAuth( userAuth, extraData ) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, extraData);
    const userSnapShot = yield userRef.get();
    yield put(SignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
  } catch (error) {
    yield put(SignInError(error.message))
  }
}



// singn in with google

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    // signing in the new user 
    yield getSnapshotFromAuth(user)
  } catch (error) {
    yield put(SignInError(error.message))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(
    GOOGLE_SIGN_IN_START, 
    signInWithGoogle
  )
}

//sigin in with emaail and password

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password); 
    yield getSnapshotFromAuth(user)
  } catch (error) {
    yield put(SignInError(error.message))
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(
    EMAIL_SIGN_IN_START, 
    signInWithEmail
  )
}

// checking for user session

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) {
      console.log('###############', userAuth)
    }
    console.log('77777777777777777', userAuth)
    yield getSnapshotFromAuth(userAuth);
  } catch(error) {
    yield put(SignInError(error.message))
  }
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}

// sign up with email and password

export function* signUpWithEmailAndPassword({ payload: {email, password, displayName} }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield getSnapshotFromAuth(user, { displayName })
    console.log('user from auth', user)
  } catch(error) {
    yield put(signUpError(error.message))
  }
}

export function* onSingUpStart() {
  yield takeLatest(SIGN_UP_START, signUpWithEmailAndPassword)
}

// sign out 

export function* singOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutError(error.message))
  }
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, singOut)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSingUpStart)
  ])
}