import {
  configureStore,
} from "@reduxjs/toolkit";
import stateManger from '../reducer/stateManager';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/saga';
import charactersSaga from "../saga/randmSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    manager: stateManger,
  },
  middleware: [sagaMiddleware],
});


sagaMiddleware.run(charactersSaga);
