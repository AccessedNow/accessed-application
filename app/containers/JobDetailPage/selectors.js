/**
 * Jobpage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectJob = state => state.job || initialState;

const makeSelectJob = () =>
    createSelector(
        selectJob,
        jobState => jobState.job,
    );

export { selectJob, makeSelectJob };
