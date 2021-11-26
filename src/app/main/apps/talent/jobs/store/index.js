import { combineReducers } from '@reduxjs/toolkit';
import jobs from '../../store/jobsSlice';
import filters from '../../store/filtersSlice';
import labels from '../../store/labelsSlice';

const reducer = combineReducers({
  jobs,
  labels,
  filters,
});

export default reducer;
