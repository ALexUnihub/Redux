import { takeEvery, select, all, call } from 'redux-saga/effects';

import { getFavCharacters } from '../reducer/charactersSlice';

function* workSetLocalStorage() {
  const favChars = yield select(getFavCharacters);
  localStorage.setItem('FAV_CHARS', JSON.stringify(favChars));
}

function* watchLocalStorage() {
  yield takeEvery('favourites/addCharacterToFavourits', workSetLocalStorage);
  yield takeEvery('favourites/removeCharacterFromFavourits', workSetLocalStorage);
}

export default function* localStorageSaga() {
  yield call(watchLocalStorage);
}