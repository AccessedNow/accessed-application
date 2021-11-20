import { combineReducers } from '@reduxjs/toolkit';
import jobs from './jobsSlice';

// import filters from './filtersSlice';
// import folders from './foldersSlice';
// import labels from './labelsSlice';
// import todos from './todosSlice';

const reducer = combineReducers({
  jobs,

  // todos,
  // folders,
  // labels,
  // filters,
});

export default reducer;
