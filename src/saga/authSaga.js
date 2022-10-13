import { put, takeEvery, call } from 'redux-saga/effects';
import { loginSucceded } from '../reducer/authSlice';

function* login(...args) {
  if (!args[0].payload.userName || !args[0].payload.userPassword) {
    return;
  }

  const response = yield call(() => 
    fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args[0].payload),
    })
  );

  const responseJSON = yield response.json();
  console.log(responseJSON);

  yield put(loginSucceded(args[0].payload));
}

export default function* watchLogin() {
  yield takeEvery('auth/loginRequest', login);
}