import { combineReducers } from '@reduxjs/toolkit';

import candidates from './candidatesSlice';
import product from './productSlice';
import products from './productsSlice';
import filters from './filtersSlice';
import folders from './foldersSlice';
import labels from './labelsSlice';

const reducer = combineReducers({
  candidates,
  product,
  folders,
  labels,
  filters,
});

export default reducer;
