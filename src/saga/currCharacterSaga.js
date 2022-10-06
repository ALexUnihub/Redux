import { put, takeEvery, call, select } from 'redux-saga/effects';
import { setCurrCharacter, getCurrCharacterId } from '../reducer/currCharacterSlice';
import { setIsError } from '../reducer/stateManager';

function* workGetCurrCharacter() {
  const currId = yield select(getCurrCharacterId);
  const response = yield call(() => fetch(`https://rickandmortyapi.com/api/character/${currId}`));
  const responseJSON = yield response.json();

  if (responseJSON.error) {
    yield put(setIsError(true));
  } else {
    yield put(setIsError(false));
    const episode = yield call(() => fetch(responseJSON.episode[0]));
    const episodeJSON = yield episode.json();
    // console.log(episodeJSON.name, responseJSON);
    yield put(setCurrCharacter({ character: responseJSON, episode: episodeJSON.name }));
  }
}

function* watchSetCurrCharacter() {
  yield takeEvery('currCharacter/fetchCurrCharacter', workGetCurrCharacter);
}

export default function* currCharacterSaga() {
  yield call(watchSetCurrCharacter);
}