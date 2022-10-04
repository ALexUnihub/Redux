import { put, takeEvery, all, call } from 'redux-saga/effects'


function* helloSaga() {
  console.log('Hello Sagas!');
}

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// ...

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'manager/setCounterValue', payload: 'INCREMENT' });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery('manager/setAsync', incrementAsync);
}

export default function* rootSaga() {
  yield all([
    call(helloSaga),
    call(watchIncrementAsync),
  ]);
}