/*
 * JobList Actions
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

import { FETCH_JOB_LIST, FETCH_JOB_LIST_SUCCESS, FETCH_JOB_LIST_ERROR, FETCH_POPULAR_JOBS_ERROR, FETCH_POPULAR_JOBS_SUCCESS, FETCH_MATCHES_JOBS_SUCCESS, FETCH_MATCHES_JOBS_ERROR } from './constants';

export function getJobList(list) {
  return {
    type: FETCH_JOB_LIST,
    list
  };
}

export function jobListSuccess(response) {
  return {
    type: FETCH_JOB_LIST_SUCCESS,
    payload: response
  };
}

export function jobListError(error) {
  return {
    type: FETCH_JOB_LIST_ERROR,
    payload: error
  };
}

export function popularJobListSuccess(response) {
  return {
    type: FETCH_POPULAR_JOBS_SUCCESS,
    payload: response
  };
}

export function popularJobListError(response) {
  return {
    type: FETCH_POPULAR_JOBS_ERROR,
    payload: response
  };
}

export function matchesJobListSuccess(response) {
  return {
    type: FETCH_MATCHES_JOBS_SUCCESS,
    payload: response
  };
}

export function matchesJobListError(response) {
  return {
    type: FETCH_MATCHES_JOBS_ERROR,
    payload: response
  };
}
