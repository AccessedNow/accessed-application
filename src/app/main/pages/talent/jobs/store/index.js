import { combineReducers } from '@reduxjs/toolkit';
import results from './jobsSearchSlice';
import job from './jobSlice';

const reducer = combineReducers({
  results,
  job
});

export default reducer;
