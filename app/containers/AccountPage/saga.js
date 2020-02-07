/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeEvery } from 'redux-saga/effects';
import { registerSuccess, registerFailure } from './actions';

import request from '../../utils/request';

/**
 * registration request/response handler
 */
export function* registerSaga(action) {
  console.log('register', action.payload)
  let option = {
    requestURL: `https://api.github.com/users/test/repos?type=all&sort=updated`,
    method: 'POST',
    payload: action.payload.userData
  }
  try {
    const response = yield call(request, option); //, action.payload.userData
    yield put(registerSuccess(response))
  } catch (error) {
    yield put(registerFailure(error))
  }
}

/**
 * login request/response handler
 */
export function* loginSaga(action) {
  console.log('login', action.payload)
  let option = {
    requestURL: `https://api.github.com/users/test/repos?type=all&sort=updated`,
    method: 'POST',
    payload: action.payload.userData
  }
  try {
    const response = yield call(request, option); //, action.payload.userData
    yield put(loginSuccess(response))
  } catch (error) {
    yield put(loginFailure(error))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* accountWatch() {
  console.log('watch')
  yield takeEvery("LOGIN_USER", loginSaga);
  yield takeEvery("REGISTER_USER", registerSaga);
}
