import { call, put, takeEvery } from "redux-saga/effects";
import { companyListSuccess, companyListError } from './actions';
import request from "../../utils/request";


export function* fetchCompanyListSaga() {
  let option = {
    requestURL: `http://accessed.us-west-2.elasticbeanstalk.com/api/search/all?searchType=COMPANY&page=0&size=10&sortBy=groupName&direction=DESC`,
    method: 'GET',
  };

  try {
    const response = yield call(request, option);
    yield put(companyListSuccess(response));
  } catch (error) {
    yield put(companyListError(error));
  }
}

// Watcher Saga
export default function* companyWatch() {
  yield takeEvery('COMPANY_LIST', fetchCompanyListSaga);
}