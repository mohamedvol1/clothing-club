import { 
  
  GOOGLE_SIGN_IN_START, 
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SET_CURRENT_USER,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_ERROR,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR
 } from './userActionTypes';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
})

// sign in with google actions

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
})


// sign in with email and password actions

export const emailSignInStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
})

// sign up with email and password

export const signUpStart = emailAndPasswordAndDisplayName => ({
  type: SIGN_UP_START,
  payload: emailAndPasswordAndDisplayName
})

export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS
})
//refactor it
export const signUpError = (error) => ({
  type: SIGN_UP_ERROR,
  payload: error
})

// sign out actions
export const signOutStart = () => ({
  type: SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
})

export const signOutError = error => ({
  type: SIGN_OUT_ERROR,
  payload: error
})

// common actions

export const SignInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  payload: user
})

export const SignInError = error => ({
  type: SIGN_IN_ERROR,
  payload: error
})

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
})