import { put, takeEvery, call, select } from 'redux-saga/effects';
import { setFavCharactersLength } from '../reducer/favouriteSlice';

export function* setFavouritesState() {
  let arr = localStorage.getItem('FAV_CHARS');
  if (arr !== null) {
    arr = JSON.parse(arr);
    yield put(setFavCharactersLength(arr.length));
  } else {
    yield put(setFavCharactersLength(0));
  }
}

export default function* initSaga() {
  yield call(setFavouritesState);
}