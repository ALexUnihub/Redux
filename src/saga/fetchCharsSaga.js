import { put, takeEvery, call } from 'redux-saga/effects';
import {
  setPages,
  setIsError,
} from '../reducer/stateManager';
import { setCharacters } from '../reducer/charactersSlice';

function* workGetCharacters(...args) {
  let params = args[0].payload;

  if (!params.page) {
    params.page = 1;
  }
  if (!params.species) {
    params.species = '';
  }
  if (!params.name) {
    params.name = '';
  }

  const response = yield call(() => 
    fetch(`https://rickandmortyapi.com/api/character?page=${params.page}&name=${params.name}&species=${params.species}`)
  );
  const responseJSON = yield response.json();

  if (responseJSON.error) {
    yield put(setIsError(true));
  } else {
    yield put(setCharacters(responseJSON.results));
    yield put(setPages(responseJSON.info.pages));
  }
}

export default function* watchSetCharacters() {
  yield takeEvery('characters/setCharactersFetch', workGetCharacters);
}