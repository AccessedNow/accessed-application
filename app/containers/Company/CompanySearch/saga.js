import { call, put, takeEvery } from "redux-saga/effects";
import { companyListSuccess, companyListError } from './actions';
import request from "../../../utils/request";
import axios from 'axios';
import {searchCompany} from "../../../services/api/company.service.api"


export function* fetchCompanyListSaga(params) {

  try {
    // const response = yield call(request, option);
    // yield put(companyListSuccess(response));



    const response = yield call(() => searchCompany(params, {
      "ids": [],
      "city": [],
      "state": [],
      "country":[],
      "rating": [],
      "industries": [],
      "size": []
      }));

    yield put(companyListSuccess(response.data));


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
