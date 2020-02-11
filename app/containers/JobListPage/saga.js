import { call, put, takeEvery } from "redux-saga/effects";
import { jobListSuccess, jobListError } from './actions';
import request from "../../utils/request";
import Config from "../../Config";


export function* fetchJobListSaga(params) {
  let option = {
    requestURL: `http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/search?query=&page=${params.page}&size=${params.limit}&sortBy=createdDate&direction=${params.sortBy}&country=US`,
    method: 'GET',
  };

  try {
    const response = yield call(request, option);
    yield put(jobListSuccess(response));
  } catch (error) {
    yield put(jobListError(error));
  }
}


export function* applyFilter(parameter) {
  yield fetchJobListSaga(parameter.params);
}


// Watcher Saga
export default function* companyWatch() {
  yield takeEvery('JOB_LIST', fetchJobListSaga);
  yield takeEvery('JOB_LIST_FILTER', applyFilter);
}