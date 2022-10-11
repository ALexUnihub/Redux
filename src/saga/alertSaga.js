import { put, takeEvery, call, select, delay, all } from 'redux-saga/effects';
import { getNewFavChar } from '../reducer/charactersSlice';
import { addCharAlert, removeCharAlert, removeAlert, getLastAlertId, addAlert } from '../reducer/alertSlice';

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

// function* showAlert(...args) {
//   if (args[0].payload.inFavourits) {
//     yield put(addAlert(`${args[0].payload.char.name} removed from favourites`));
//   } else {
//     yield put(addAlert(`${args[0].payload.char.name} added to favourites`));
//   }
//   const id = yield select(getLastAlertId);

//   yield delay(5000);
//   yield put(removeAlert(id));
// }

function* watchShowAddAlert(...args) {
  yield takeEvery('favourites/addCharacterToFavourits', showAddAlert);
}

function* watchShowRemoveAlert(...args) {
  yield takeEvery('favourites/removeCharacterFromFavourits', showRemoveAlert);
}

export default function* alertsSaga() {
  // yield call(watchSetAlert);
  yield all([
    watchShowAddAlert(),
    watchShowRemoveAlert(),
  ]);
}