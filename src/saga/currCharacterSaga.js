import { put, takeEvery, call } from 'redux-saga/effects';
import { setCurrCharacter } from '../reducer/currCharacterSlice';

function* workGetCurrCharacter(...args) {
  const response = yield call(() => fetch(`https://rickandmortyapi.com/api/character/${args[0].payload}`));
  let responseJSON = yield response.json();

  yield put(setCurrCharacter(responseJSON));
}

export default function* watchSetCurrCharacter() {
  yield takeEvery('currCharacter/fetchCurrCharacter', workGetCurrCharacter);
}