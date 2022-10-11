import { takeEvery, select, all, call } from 'redux-saga/effects';

import { getFavCharacters } from '../reducer/charactersSlice';

function* workSetLocalStorage() {
  const favChars = yield select(getFavCharacters);
  localStorage.setItem('FAV_CHARS', JSON.stringify(favChars));
}

export default function* watchLocalStorage() {
  yield takeEvery('characters/addCharacterToFavourits', workSetLocalStorage);
  yield takeEvery('characters/removeCharacterFromFavourits', workSetLocalStorage);
}