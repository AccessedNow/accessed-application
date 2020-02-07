import { call, put, takeEvery } from "redux-saga/effects";
import { postListSuccess, postListError } from './action';
import request from "../../utils/request";


export function* fetchPostListSaga(action) {
  console.log('Post', action);
  let option = {
    requestURL: `https://jsonplaceholder.typicode.com/posts`,
    method: 'GET',
  };

  try {
    const response = yield call(request, option);
    yield put(postListSuccess(response));
  } catch (error) {
    yield put(postListError(error));
  }
}

// Watcher Saga
export default function* postWatch() {
  console.log('Post Watch');
  yield takeEvery('POST_LIST', fetchPostListSaga);
}
