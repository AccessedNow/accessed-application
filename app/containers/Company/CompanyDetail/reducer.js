/*
 * CompanyReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { FETCH_COMPANY_DETAIL_SUCCESS, FETCH_COMPANY_DETAIL_ERROR } from './constants';

export const initState = {
  company: {},
  companyError: ''
};

const companyReducer = (state = initState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_COMPANY_DETAIL_SUCCESS:
        console.log("FETCH_COMPANY_DETAIL_SUCCESS", action)
        draft.company = action.payload;
        break;
      case FETCH_COMPANY_DETAIL_ERROR:
        draft.companyError = action.payload
        break;
    }
  })

export default companyReducer;
