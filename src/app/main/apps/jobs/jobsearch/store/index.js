import { combineReducers } from '@reduxjs/toolkit';
import jobs from '../../store/jobsSlice';

const reducer = combineReducers({
  jobs,
});

export default reducer;
