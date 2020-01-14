/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeEvery } from 'redux-saga/effects';
import { registerSuccess, registerFailure } from './actions';

import request from 'utils/request';

/**
 * registration request/response handler
 */
export function* registerSaga(action) {
  console.log('reg', action.payload)
  const requestURL = `https://api.github.com/users/test/repos?type=all&sort=updated`;
  try {
    const response = yield call(request, requestUrl, 'POST', action.payload.userData); //, action.payload.userData
    yield put(registerSuccess(response))
  } catch(error) {
    yield put(registerFailure(error))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* registerWatch() {
  console.log('watch')
  yield takeEvery("REGISTER_USER", registerSaga);
}

