import { fork } from "redux-saga/effects";
import { watchShowAddAlert, watchShowRemoveAlert } from './alertSaga';
import watchSetCharacters from "./fetchCharsSaga";
import watchLocalStorage from "./charactersSaga";
import watchSetCurrCharacter from "./currCharacterSaga";
import { watchLogin, watchRegister, watchLogout } from "./loginSaga";
import watchLoginFailedAlert from "./loginAlertSaga";

export default function* forkSaga() {
  yield fork(watchShowAddAlert);
  yield fork(watchShowRemoveAlert);
  yield fork(watchSetCharacters);
  yield fork(watchLocalStorage);
  yield fork(watchSetCurrCharacter);
  yield fork(watchLogin);
  yield fork(watchRegister);
  yield fork(watchLogout);
  yield fork(watchLoginFailedAlert);
}