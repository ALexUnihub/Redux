import { put, takeEvery, call, select } from 'redux-saga/effects';
import { setFavCharactersLength, setFavsId } from '../reducer/favouriteSlice';
import { setCurrCharacter } from '../reducer/currCharacterSlice';

export function* setFavouritesState() {
  let arr = localStorage.getItem('FAV_CHARS');
  if (arr !== null) {
    arr = JSON.parse(arr);
    // yield put(setFavCharactersLength(arr.length));
    yield put(setFavsId(arr));
  } else {
    // yield put(setFavCharactersLength(0));
    yield put(setFavsId([]));
  }
}

export function* fetchFavouritesState() {
  const urlElement = new URL(window.location.href);
  // console.log(urlElement.searchParams, urlElement);

  if (Object.keys(urlElement.searchParams).length === 0) {
    const pathnameArr = urlElement.pathname.split('/');
    const currId = parseInt(pathnameArr[pathnameArr.length - 1]);

    if (currId) {
      const response = yield call(() => fetch(`https://rickandmortyapi.com/api/character/${currId}`));
      const responseJSON = yield response.json();
      const episode = yield call(() => fetch(responseJSON.episode[0]));
      const episodeJSON = yield episode.json();
      yield put(setCurrCharacter({ character: responseJSON, episode: episodeJSON.name }));
    }
  }
}

export default function* initSaga() {
  yield call(fetchFavouritesState);
  yield call(setFavouritesState);
}