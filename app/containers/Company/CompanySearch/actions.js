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

import { FETCH_COMPANY_LIST, FETCH_COMPANY_LIST_SUCCESS, FETCH_COMPANY_LIST_ERROR } from './constants';

export function getCompanyList(list) {
  return {
    type: FETCH_COMPANY_LIST,
    list
  };
}

export function companyListSuccess(response) {
  return {
    type: FETCH_COMPANY_LIST_SUCCESS,
    payload: response
  };
}

export function companyListError(error) {
  return {
    type: FETCH_COMPANY_LIST_ERROR,
    payload: error
  };
}
