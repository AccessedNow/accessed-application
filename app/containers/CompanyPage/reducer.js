/*
 * CompanyReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { FETCH_COMPANY_LIST_SUCCESS, FETCH_COMPANY_LIST_ERROR } from './constants';

export const initState = {
  companyList: {
    data: {
      content: []
    }
  },
  companyListError: '',
  paginate: {
    current: 0,
    total: 0,
    limit: 10
  }
};

const companyReducer = (state = initState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_COMPANY_LIST_SUCCESS:
        draft.companyList = action.payload;
        draft.paginate.total = action.payload.data.totalPages;
        draft.paginate.current = action.payload.data.number;
        draft.paginate.limit = action.payload.data.size;
        break;
      case FETCH_COMPANY_LIST_ERROR:
        draft.companyListError = action.payload
        break;
    }
  })

export default companyReducer;