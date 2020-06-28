/**
 * JobDetail selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectJob = state =>  state.job || initialState;


const makeSelectJob = (state) => createSelector(
    selectJob,
    jobState => jobState.job.data,
  );

export { selectJob, makeSelectJob };
