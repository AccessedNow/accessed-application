/*
 * JobDetailReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { FETCH_JOB_DETAIL, FETCH_JOB_DETAIL_SUCCESS, FETCH_JOB_DETAIL_ERROR } from './constants';


// The initial state of the App
export const initialState = {
    loading: false,
    error: false,
    jobData: false,
};

/* eslint-disable default-case, no-param-reassign */
const jobReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case FETCH_JOB_DETAIL:
                draft.loading = true;
                draft.error = false;
                draft.jobData = false;
                break;

            case FETCH_JOB_DETAIL_SUCCESS:
                draft.jobData = action.data;
                draft.loading = false;
                break;

            case FETCH_JOB_DETAIL_ERROR:
                draft.error = action.error;
                draft.loading = false;
                break;
        }
    });

export default jobReducer;
