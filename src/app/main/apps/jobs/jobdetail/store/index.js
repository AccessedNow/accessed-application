import { combineReducers } from '@reduxjs/toolkit';
import job from './jobSlice';
import similarJobs from './similarJobsSlice';

const reducer = combineReducers({
  job,
  similarJobs,
});

export default reducer;
