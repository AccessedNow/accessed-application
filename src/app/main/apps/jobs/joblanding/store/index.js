import { combineReducers } from '@reduxjs/toolkit';
import jobLanding from './jobLandingSlice';

const reducer = combineReducers({
  jobLanding,
});

export default reducer;
