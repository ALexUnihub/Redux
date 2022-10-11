import { put, takeEvery, call, select } from 'redux-saga/effects';
import {
  setPages,
  setIsError,
  getQueryParams,
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

function* watchSetCharacters() {
  yield takeEvery('favourites/setCharactersFetch', workGetCharacters);
  yield takeEvery('manager/setSpecies', workGetCharacters);
  yield takeEvery('manager/setName', workGetCharacters);
}

export default function* charactersSaga() {
  yield call(watchSetCharacters);
}