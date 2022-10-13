import { put, takeEvery, delay, select } from 'redux-saga/effects';
import { removeAlert, getLastAlertId, addAlert } from '../reducer/alertSlice';


function* loginFailedAlert(...args) {
  console.log(args[0].payload);
  yield put(addAlert(args[0].payload));

  const id = yield select(getLastAlertId);

  yield delay(5000);
  yield put(removeAlert(id));
}

export default function* watchLoginFailedAlert() {
  yield takeEvery('auth/loginFailed', loginFailedAlert);
}