import { fork } from "redux-saga/effects";
import { watchShowAddAlert, watchShowRemoveAlert } from './alertSaga';
import watchSetCharacters from "./fetchCharsSaga";
import initSaga from "./initSate";
import watchLocalStorage from "./charactersSaga";
import watchSetCurrCharacter from "./currCharacterSaga";

export default function* forkSaga() {
  yield fork(watchShowAddAlert);
  yield fork(watchShowRemoveAlert);
  yield fork(watchSetCharacters);
  yield fork(initSaga);
  yield fork(watchLocalStorage);
  yield fork(watchSetCurrCharacter);
}