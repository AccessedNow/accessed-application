/*
 * JobListReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { FETCH_JOB_LIST_SUCCESS, FETCH_JOB_LIST_ERROR } from './constants';

export const initState = {
  jobList: {
    data: {
      content: []
    }
  },
  jobListError: '',
  paginate: {
    current: 0,
    total: 0
  }
};

const jobReducer = (state = initState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_JOB_LIST_SUCCESS:
        draft.jobList = action.payload;
        break;
      case FETCH_JOB_LIST_ERROR:
        draft.jobListError = action.payload
        break;
    }
  })

export default jobReducer;