import { call, put, takeEvery } from "redux-saga/effects";
import { companySuccess, companyError } from './actions';
import request from "../../../utils/request";
import axios from 'axios';
import {findCompanyRelationById} from "../../../services/api/company.service.api";
import {findCompanyById} from "../../../services/api/party.service.api";


export function* fetchCompanyDetailSaga(params) {

  try {

    const detail = yield call(() => findCompanyById(params.id));
    const relationship = yield call(() => findCompanyRelationById(params.id));



    const company = detail.data.data;
    company.relationship = relationship.data;
    yield put(companySuccess(company));


  } catch (error) {
    yield put(companyError(error));
  }
}


// Watcher Saga
export default function* companyWatch() {
  yield takeEvery('FETCH_COMPANY_DETAIL', fetchCompanyDetailSaga);
}
