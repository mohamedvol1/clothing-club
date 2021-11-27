import { takeLatest, call, put, all } from 'redux-saga/effects';
import { SIGN_OUT_SUCCESS } from '../user/userActionTypes';
import { clearCart } from './cartAction';

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* cartSages() {
  yield all([call(onSignOutSuccess)])
}