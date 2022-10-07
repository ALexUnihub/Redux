import { put, takeEvery, call, select, all } from 'redux-saga/effects';
import { setCurrCharacter, setCurrCharIsFavourite, getCurrCharacterId } from '../reducer/currCharacterSlice';
import { getNewFavChar, getFavCharacterId } from '../reducer/charactersSlice';
import { setIsError } from '../reducer/stateManager';

function* workGetCurrCharacter() {
  const currId = yield select(getCurrCharacterId);
  const response = yield call(() => fetch(`https://rickandmortyapi.com/api/character/${currId}`));
  let responseJSON = yield response.json();

  if (responseJSON.error) {
    yield put(setIsError(true));
  } else {
    yield put(setIsError(false));
    const episode = yield call(() => fetch(responseJSON.episode[0]));
    const episodeJSON = yield episode.json();

    const favsId = yield select(getFavCharacterId);
    let isFavourite = false;

    let idx = favsId.indexOf(responseJSON.id);
    if (idx > -1) {
      isFavourite = true;
    }
    responseJSON.isFavourite = isFavourite;

    yield put(setCurrCharacter({ character: responseJSON, episode: episodeJSON.name }));
  }
}

function* setIsFavourite() {
  const char = yield select(getNewFavChar);
  let isFavourite = false;

  if (char.toAdd) {
    isFavourite = true;
  }

  yield put(setCurrCharIsFavourite(isFavourite));
}

function* watchSetCurrCharacter() {
  yield takeEvery('currCharacter/fetchCurrCharacter', workGetCurrCharacter);
}

function* watchSetIsFavourite() {
  yield takeEvery('favourites/addCharOnLocalStorage', setIsFavourite);
}

export default function* currCharacterSaga() {
  yield all([
    watchSetCurrCharacter(),
    watchSetIsFavourite(),
  ]);
}