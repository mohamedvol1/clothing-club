import { takeLatest, call, put, all } from 'redux-saga/effects';
import { FETCH_COLLECTIONS_START } from './shopActionTypes';
import { firestore, mapCollectionsSnapshotsToNew } from '../../firebase/firebase.utils';
import { fetchCollectionsError, fetchCollectionsSuccess } from './shopActions';

export function* fetchCollectionsStart() {
  yield takeLatest(
    FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}

export function* fetchCollectionsAsync() {
  yield console.log('pew pew')

  try {
    const collectionsRef = firestore.collection('collections'); 
    const snapshot = yield collectionsRef.get();
    const collectionsMap = yield call(mapCollectionsSnapshotsToNew, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsError(error.message))
  }
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}