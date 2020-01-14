/*
 * RegisterReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  userData: {},
  registerSuccess: '',
  registerError: '',
  registerErrorMesage: '',
};

/* eslint-disable default-case, no-param-reassign */
const registerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REGISTER_USER_SUCCESS:
        draft.registerSuccess = action.response;
        break;
      case REGISTER_USER_ERROR:
        draft.registerError = action.error;
        break;
    }
  });

export default registerReducer;