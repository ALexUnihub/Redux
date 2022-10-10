import { put, call, all } from 'redux-saga/effects';
import { setFavsId } from '../reducer/charactersSlice';
import { setCurrCharacter } from '../reducer/currCharacterSlice';
import { setPage, setName, setSpecies, setInputValue } from '../reducer/stateManager';

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
  let name = currURL.searchParams.get('name');
  let page = currURL.searchParams.get('page');
  let species = currURL.searchParams.get('species');
  
  if (name) {
    yield put(setName(name));
    yield put(setInputValue(name));
  }
  
  if (page) {
    page = parseInt(page);
    yield put(setPage(page));
  }
  
  if (species) {
    yield put(setSpecies(species));
  }
}

export default function* initSaga() {
  yield all([
    fetchFavouritesState(),
    setFavouritesState(),
    setStateFromURL(),
  ]);
}