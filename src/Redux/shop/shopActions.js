import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_ERROR } from './shopActionTypes';

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START
})

export const fetchCollectionsError = errorMessage => ({
  type: FETCH_COLLECTIONS_ERROR,
  payload: errorMessage
})

export const fetchCollectionsSuccess = collections => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collections
})
