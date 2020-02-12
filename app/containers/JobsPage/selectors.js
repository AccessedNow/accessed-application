/**
 * Jobpage selectors
 */

import { createSelector } from 'reselect';
import { initState } from './reducer';

const selectJob = state => state.job || initState;

const jobs = () =>
  createSelector(
    selectJob,
    jobState => jobState.jobList.data
  );

export { selectJob, jobs };