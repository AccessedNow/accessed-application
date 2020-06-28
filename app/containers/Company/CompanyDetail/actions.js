/*
 * Company Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { FETCH_COMPANY_DETAIL, FETCH_COMPANY_DETAIL_SUCCESS, FETCH_COMPANY_DETAIL_ERROR } from './constants';

export function getCompany(params) {
  return {
    type: FETCH_COMPANY_DETAIL,
    params
  };
}

export function companySuccess(response) {
  return {
    type: FETCH_COMPANY_DETAIL_SUCCESS,
    payload: response
  };
}

export function companyError(error) {
  return {
    type: FETCH_COMPANY_DETAIL_ERROR,
    payload: error
  };
}
