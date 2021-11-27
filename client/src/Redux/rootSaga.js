import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shop/shopSagas';
import { cartSages } from './cart/cartSagas';
import { userSagas } from './user/userSagas';

export default function* rootSaga() {
  yield all([
    call(shopSagas),
    call(userSagas),
    call(cartSages)
  ])
}