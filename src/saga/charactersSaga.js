import { put, takeEvery, call, select, all } from 'redux-saga/effects';

import { setCharacterFavourite, setFavsId, getNewFavChar, setFavCharacters, getFavCharacters } from '../reducer/charactersSlice';

function* workSetLocalStorage() {
  const favChars = yield select(getFavCharacters);
  localStorage.setItem('FAV_CHARS', JSON.stringify(favChars));
}

function* watchLocalStorage() {
  yield takeEvery('favourites/addCharacterToFavourits', workSetLocalStorage);
  yield takeEvery('favourites/removeCharacterFromFavourits', workSetLocalStorage);
}

// favs chars
// function* workGetFavs() {
//   let favCharacters = JSON.parse(localStorage.getItem('FAV_CHARS'));

//   if (!favCharacters) {
//     favCharacters = [];
//   } else {
//     favCharacters = favCharacters.map(item => {
//       item.isFavourite = true;
//       return item;
//     });
//   }

//   yield put(setFavCharacters(favCharacters));
// }


// function* watchGetFavs() {
//   yield takeEvery('favourites/getFavsFromLocalStorage', workGetFavs);
// }

export default function* localStorageSaga() {
  yield all([
    watchLocalStorage(),
    // watchGetFavs(),
  ]);
}