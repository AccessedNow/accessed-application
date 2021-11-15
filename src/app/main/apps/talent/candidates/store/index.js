import { combineReducers } from '@reduxjs/toolkit';

import candidates from '../../store/candidatesSlice';
import filters from '../../store/filtersSlice';
import folders from '../../store/foldersSlice';
import labels from '../../store/labelsSlice';

const reducer = combineReducers({
  candidates,
  folders,
  labels,
  filters,
});

export default reducer;
