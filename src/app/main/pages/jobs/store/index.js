import { combineReducers } from '@reduxjs/toolkit';
import jobsLandingSlice from './jobsLandingSlice';
import results from './jobsSearchSlice';

const reducer = combineReducers({
  jobsLandingSlice,
  results
});

export default reducer;
