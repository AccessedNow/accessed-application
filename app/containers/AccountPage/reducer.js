/*
 * RegisterReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_FORGOT_STATUS, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  userData: {},
  forgotPasswordToogle: false,
  loginSuccess: '',
  loginError: '',
  loginErrorMesage: '',
  registerSuccess: '',
  registerError: '',
  registerErrorMesage: '',
};

/* eslint-disable default-case, no-param-reassign */
const accountReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_FORGOT_STATUS:
        console.log('test')
        draft.forgotPasswordToogle = action.status;
        break;
      case REGISTER_USER_SUCCESS:
        draft.registerSuccess = action.response;
        break;
      case REGISTER_USER_ERROR:
        draft.registerError = action.error;
        break;
      case LOGIN_USER_SUCCESS:
        draft.loginSuccess = action.response;
        break;
      case LOGIN_USER_ERROR:
        draft.loginError = action.error;
        break;
    }
  });

export default accountReducer;