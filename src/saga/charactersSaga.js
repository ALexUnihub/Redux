import { put, takeEvery, call, select } from 'redux-saga/effects';

import { setCharacterFavourite, setFavsId, getNewFavChar } from '../reducer/charactersSlice';

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

export default function* localStorageSaga() {
  yield call(watchLocalStorage);
}