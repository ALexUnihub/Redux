import {
  configureStore,
} from "@reduxjs/toolkit";
import mainPageSlice from '../reducer/mainPageSlice';
import alertSlice from "../reducer/alertSlice";
import charactersSlice from "../reducer/charactersSlice";
import currCharacterSlice from "../reducer/currCharacterSlice";
import createSagaMiddleware from 'redux-saga';
import forkSaga from "../saga/forkSaga";
// auth
import authSlice from "../reducer/authSlice";

const SagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    mainPage: mainPageSlice,
    alerts: alertSlice,
    characters: charactersSlice,
    currCharacter: currCharacterSlice,
    auth: authSlice,
  },
  middleware: [SagaMiddleware],
});

SagaMiddleware.run(forkSaga);
