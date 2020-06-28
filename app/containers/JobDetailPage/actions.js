/*
 * JobDetail Actions
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

import { FETCH_JOB_DETAIL, FETCH_JOB_DETAIL_SUCCESS, FETCH_JOB_DETAIL_ERROR } from './constants';

export function getJobDetail(id) {
  return {
    type: FETCH_JOB_DETAIL,
    id
  };
}

export function getJobDetailSuccess(response) {
  return {
    type: FETCH_JOB_DETAIL_SUCCESS,
    payload: response
  };
}

export function getJobDetailError(error) {
  return {
    type: FETCH_JOB_DETAIL_ERROR,
    payload: error
  };
}
