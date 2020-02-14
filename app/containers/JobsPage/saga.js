import { call, put, takeEvery } from "redux-saga/effects";
import { jobListSuccess, jobListError, popularJobListSuccess, matchesJobListSuccess, matchesJobListError, popularJobListError } from './actions';
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

export function* fetchPopularJobs(parameters) {
  const params = parameters.params;
  const url = `${Config.jobApiURL}api/jobs/search?query=&page=${params.page}&size=${params.size}&sortBy=createdDate&direction=${params.sortBy}&country=${params.country}`;
  let option = {
    requestURL: url,
    method: 'GET'
  };
  try {
    const response = yield call(request, option);
    yield put(popularJobListSuccess(response));
  } catch (error) {
    yield put(popularJobListError(error));
  }
}

export function* fetchMatchesJobs(parameter) {
  const params = parameter.params;
  const url = `${Config.jobApiURL}api/jobs/search?query=&page=${params.page}&size=${params.size}&sortBy=createdDate&direction=${params.sortBy}&country=${params.country}`;
  let option = {
    requestURL: url,
    method: 'GET'
  };
  try {
    const response = yield call(request, option);
    yield put(matchesJobListSuccess(response));
  } catch (error) {
    yield put(matchesJobListError(error));
  }
}

export function* applyFilter(parameter) {
  yield fetchJobListSaga(parameter.params);
}


// Watcher Saga
export default function* companyWatch() {
  yield takeEvery('JOB_LIST', fetchJobListSaga);
  yield takeEvery('JOB_LIST_FILTER', applyFilter);
  yield takeEvery('POPULAR_JOBS', fetchPopularJobs);
  yield takeEvery('MATCHES_JOBS', fetchMatchesJobs);
}