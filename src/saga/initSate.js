import { put, call } from 'redux-saga/effects';
import { setFavCharacters } from '../reducer/charactersSlice';

export function* setFavouritesState() {
  let obj = JSON.parse(localStorage.getItem('FAV_CHARS'));

  if (!obj) {
    obj = {};
  }
  yield put(setFavCharacters(obj))
}

export default function* initSaga() {
  yield call(setFavouritesState);
}