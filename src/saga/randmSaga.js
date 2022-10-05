import { put, takeEvery, all, call, select } from 'redux-saga/effects';
import {
  setCharacters,
  setPages,
  setIsError,
  setCurrCharacter,
  getQueryParams,
  getCurrCharacterId,
} from '../reducer/stateManager';

function* workGetCharacters() {
  const params = yield select(getQueryParams);

  let species = params.species;
  if (species === 'all') {
    species = '';
  }

  const response = yield call(() => 
    fetch(`https://rickandmortyapi.com/api/character?page=${params.page}&name=${params.name}&species=${species}`)
  );
  const responseJSON = yield response.json();

  if (responseJSON.error) {
    yield put(setIsError(true));
  } else {
    yield put(setIsError(false));
    yield put(setCharacters(responseJSON.results));
    yield put(setPages(responseJSON.info.pages));
  }
}

function* workGetFavCharacter() {
  const currId = yield select(getCurrCharacterId);
  const response = yield call(() => fetch(`https://rickandmortyapi.com/api/character/${currId}`));
  const responseJSON = yield response.json();

  if (responseJSON.error) {
    yield put(setIsError(true));
  } else {
    yield put(setIsError(false));
    yield put(setCurrCharacter(responseJSON));
  }
}

function* watchSetCharacters() {
  yield takeEvery('manager/setCharactersFetch', workGetCharacters);
  yield takeEvery('manager/setSpecies', workGetCharacters);
  yield takeEvery('manager/setName', workGetCharacters);
  yield takeEvery('manager/fetchCurrCharacter', workGetFavCharacter);
}

export default function* charactersSaga() {
  yield call(watchSetCharacters);
}