import { combineReducers } from '@reduxjs/toolkit';
import jobs from './jobsSlice';

const reducer = combineReducers({
  jobs,


});

export default reducer;
