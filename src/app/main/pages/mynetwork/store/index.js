import { combineReducers } from '@reduxjs/toolkit';
import recommendations from './recommendationsSlice';

const reducer = combineReducers({
  recommendations
});

export default reducer;
