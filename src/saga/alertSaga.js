import { put, takeEvery, select, delay } from 'redux-saga/effects';
import { removeAlert, getLastAlertId, addAlert } from '../reducer/alertSlice';

function* showAddAlert(...args) {
  yield put(addAlert(`${args[0].payload.name} added to favourites`));

  const id = yield select(getLastAlertId);

  yield delay(5000);
  yield put(removeAlert(id));
}

function* showRemoveAlert(...args) {
  yield put(addAlert(`${args[0].payload.name} removed from favourites`));

  const id = yield select(getLastAlertId);

  yield delay(5000);
  yield put(removeAlert(id));
}

export function* watchShowAddAlert(...args) {
  yield takeEvery('characters/addCharacterToFavourits', showAddAlert);
}

export function* watchShowRemoveAlert(...args) {
  yield takeEvery('characters/removeCharacterFromFavourits', showRemoveAlert);
}