import {
  configureStore,
} from "@reduxjs/toolkit";
import stateManger from '../reducer/stateManager';
import alertSlice from "../reducer/alertSlice";
import favouriteSlice from "../reducer/favouriteSlice";
import currCharacterSlice from "../reducer/currCharacterSlice";

import createSagaMiddleware from 'redux-saga';
import charactersSaga from "../saga/randmSaga";
import initSaga from "../saga/initSate";
import currCharacterSaga from "../saga/currCharacterSaga";

const sagaMiddleware = createSagaMiddleware();
const initMiddleware = createSagaMiddleware();
const currCharMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    manager: stateManger,
    alerts: alertSlice,
    favourites: favouriteSlice,
    currCharacter: currCharacterSlice,
  },
  middleware: [
    sagaMiddleware,
    initMiddleware,
    currCharMiddleware
  ],
});

currCharMiddleware.run(currCharacterSaga);
initMiddleware.run(initSaga);
sagaMiddleware.run(charactersSaga);
