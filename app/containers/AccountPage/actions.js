/*
 * Home Actions
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

import { CHANGE_FORGOT_STATUS, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {object} userData The new text of the input field
 *
 * @return {object} An action object with a type of SUBMIT_REGISTER
 */

export function changeForgotStatus(status) {
  return {
    type: CHANGE_FORGOT_STATUS,
    status,
  };
}


export function loginUser(userData) {
  return {
    type: LOGIN_USER,
    payLoad: userData,
  };
}

export function loginSuccess(response) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: response
  }
};

export function loginFailure(error) {
  return {
    type: LOGIN_USER_ERROR,
    payload: error,
    error: true
  }
};

 export function registerUser(userData) {
  return {
    type: REGISTER_USER,
    payLoad: userData,
  };
}

export function registerSuccess(response) {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: response
  }
};

export function registerFailure(error) {
  return {
    type: REGISTER_USER_ERROR,
    payload: error,
    error: true
  }
};


