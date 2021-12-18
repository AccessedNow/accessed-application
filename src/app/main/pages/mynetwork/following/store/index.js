import { combineReducers } from '@reduxjs/toolkit';
import following from './followingsSlice';

const reducer = combineReducers({
  following
});

export default reducer;
