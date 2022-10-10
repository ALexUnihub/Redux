import { put, takeEvery, call, select, all } from 'redux-saga/effects';

import { setCharacterFavourite, setFavsId, getNewFavChar, setFavCharacters } from '../reducer/charactersSlice';

function* workSetLocalStorage() {
  let favObj = yield select(getNewFavChar);
  let arr = JSON.parse(localStorage.getItem('FAV_CHARS'));
  if (!arr) {
    arr = [];
  }

  if (favObj.toAdd) {
    arr.push(favObj.char);
    localStorage.setItem('FAV_CHARS', JSON.stringify(arr));
  } else {
    let idxItemToRemove = -1;
    arr.find((item, idx) => {
      if (item.id === favObj.char.id) {
        idxItemToRemove = idx;
        return item;
      }
    });

    const removedCharacter = arr.splice(idxItemToRemove, 1)[0];
    localStorage.setItem('FAV_CHARS', JSON.stringify(arr));
  }
  yield put(setCharacterFavourite(favObj));
  yield put(setFavsId(arr));
}

function* watchLocalStorage() {
  yield takeEvery('favourites/addCharOnLocalStorage', workSetLocalStorage);
}

// favs chars
function* workGetFavs() {
  let favCharacters = JSON.parse(localStorage.getItem('FAV_CHARS'));

  if (!favCharacters) {
    favCharacters = [];
  } else {
    favCharacters = favCharacters.map(item => {
      item.isFavourite = true;
      return item;
    });
  }

  yield put(setFavCharacters(favCharacters));
}


function* watchGetFavs() {
  yield takeEvery('favourites/getFavsFromLocalStorage', workGetFavs);
}

export default function* localStorageSaga() {
  yield all([
    watchLocalStorage(),
    watchGetFavs(),
  ]);
}