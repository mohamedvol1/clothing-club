import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';

import rootSaga from './rootSaga';

const sagaMiddleWare = createSagaMiddleWare();

const middleWares = [sagaMiddleWare];

if (process.env.NODE_ENV === 'development') {
  middleWares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleWare.run(rootSaga)

const persistor = persistStore(store)

export { store, persistor }