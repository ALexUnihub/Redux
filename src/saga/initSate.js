import { put, call } from 'redux-saga/effects';
import { setFavsId } from '../reducer/charactersSlice';
import { setCurrCharacter } from '../reducer/currCharacterSlice';

export function* setFavouritesState() {
  let arr = localStorage.getItem('FAV_CHARS');
  if (arr !== null) {
    arr = JSON.parse(arr);
    yield put(setFavsId(arr));
  } else {
    yield put(setFavsId([]));
  }
}

export function* fetchFavouritesState() {
  const urlElement = new URL(window.location.href);

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

export function* setStateFromURL() {
  let currURL = new URL(window.location.href);
  let arr = currURL.searchParams.getAll();
  console.log(currURL.search, arr);
}

export default function* initSaga() {
  yield call(fetchFavouritesState);
  yield call(setFavouritesState);
  yield call(setStateFromURL);
}