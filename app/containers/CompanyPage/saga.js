import { call, put, takeEvery } from "redux-saga/effects";
import { companyListSuccess, companyListError } from './actions';
import request from "../../utils/request";


export function* fetchCompanyListSaga(params) {
  let option = {
    requestURL: `http://accessed.us-west-2.elasticbeanstalk.com/api/search/all?searchType=COMPANY&page=${params.page}&size=${params.limit}&sortBy=groupName&direction=${params.sortBy}`,
    method: 'GET',
  };

  try {
    const response = yield call(request, option);
    yield put(companyListSuccess(response));
  } catch (error) {
    yield put(companyListError(error));
  }
}


export function* applyFilter(parameter) {
  yield fetchCompanyListSaga(parameter.params);
}


// Watcher Saga
export default function* companyWatch() {
  yield takeEvery('COMPANY_LIST', fetchCompanyListSaga);
  yield takeEvery('COMPANY_LIST_FILTER', applyFilter);
}