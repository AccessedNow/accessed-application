import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getJobDetailSuccess, getJobDetailError } from './actions';
import request from "../../utils/request";
import Config from "../../config/Config";
import {FETCH_JOB_DETAIL, FETCH_JOB_DETAIL_SUCCESS, FETCH_JOB_DETAIL_ERROR} from "./constants";


export function* fetchJobDetail(id) {
  console.log('fetchJobDetail', id.id)

    let jobId = id.id;
  let option = {
    requestURL: `http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/${jobId}`,
    method: 'GET',
  };


  try {
    const response = yield call(request, option);

    console.log('response', response)
    yield put(getJobDetailSuccess(response));
  } catch (error) {
    yield put(getJobDetailError(error));
  }
}


// Watcher Saga
export default function* jobWatch() {
  yield takeLatest(FETCH_JOB_DETAIL, fetchJobDetail);
}
