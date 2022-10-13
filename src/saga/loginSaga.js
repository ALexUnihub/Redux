import { put, takeEvery, call, take } from 'redux-saga/effects';
import { logout, setIsLogin, loginFailed } from '../reducer/authSlice';

function* login(...args) {
  if (!args[0].payload.userName || !args[0].payload.userPassword) {
    return;
  }

  try {
    const response = yield call(() => 
    fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(args[0].payload),
    })
  );

  if (!response.ok) {
    const responseText = yield response.text();
    yield put(loginFailed(`Login failed: ${responseText}`));
    throw new Error(responseText);
  }

  yield put(setIsLogin(document.cookie.includes('isLogin')));
  yield take('auth/logout');
  yield put(logout());
  } catch (error) {
    console.log('err:', error);
  }
  
}

function* register(...args) {
  if (!args[0].payload.userName || !args[0].payload.userPassword) {
    return;
  }

  try {
    const response = yield call(() => 
    fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(args[0].payload),
    })
  );

  if (!response.ok) {
    const responseText = yield response.text();
    yield put(loginFailed(`Register failed: ${responseText}`));
    throw new Error(responseText);
  }

  yield put(setIsLogin(document.cookie.includes('isLogin')));
  yield take('auth/logout');
  yield put(logout());
  } catch (error) {
    console.log('err:', error);
  }
}

function* workLogout() {
  try {
    const response = yield call(() => 
      fetch('http://localhost:8080/api/logout', {
        credentials: 'include'
      })
    )

    yield put(setIsLogin(document.cookie.includes('isLogin')));
  } catch (error) {
    console.log(error);
  }
}

export function* watchLogin() {
  yield takeEvery('auth/loginRequest', login);
}

export function* watchLogout() {
  yield takeEvery('auth/logout', workLogout);
}

export function* watchRegister() {
  yield takeEvery('auth/registerRquest', register);
}