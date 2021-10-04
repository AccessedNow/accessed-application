import { combineReducers } from '@reduxjs/toolkit';
import job from './jobSlice';
import similarJobs from './similarJobsSlice';
import application from '../../store/applicationSlice';

const reducer = combineReducers({
  job,
  similarJobs,
  application
});

export default reducer;
