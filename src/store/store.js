import {
  configureStore,
} from "@reduxjs/toolkit";
import mainPageSlice from '../reducer/stateManager';
import alertSlice from "../reducer/alertSlice";
import charactersSlice from "../reducer/charactersSlice";
import currCharacterSlice from "../reducer/currCharacterSlice";

import createSagaMiddleware from 'redux-saga';
import forkSaga from "../saga/forkSaga";

const SagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    mainPage: mainPageSlice,
    alerts: alertSlice,
    characters: charactersSlice,
    currCharacter: currCharacterSlice,
  },
  middleware: [SagaMiddleware],
});

SagaMiddleware.run(forkSaga);
