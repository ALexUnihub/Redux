import { put, takeEvery, call, select } from 'redux-saga/effects';
import { getNewFavChar } from '../reducer/favouriteSlice';
import { setAlertMessage } from '../reducer/alertSlice';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* workSetAlert() {
  const charObj = yield select(getNewFavChar);
  let alertMessage = `${charObj.char.name}`;
  let messageStatus = ' removed from favourites';

  if (charObj.toAdd) {
    messageStatus = ' added to favourites';
  }

  alertMessage += messageStatus;
  yield put(setAlertMessage({ add: true, message: alertMessage}));
  yield delay(5000);
  yield put(setAlertMessage({ add: false, message: alertMessage}));
}

function* watchSetAlert() {
  yield takeEvery('favourites/addCharOnLocalStorage', workSetAlert);
}

export default function* alertsSaga() {
  yield call(watchSetAlert);
}