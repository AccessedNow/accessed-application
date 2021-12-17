import { combineReducers } from '@reduxjs/toolkit';
import followings from './followingsSlice';

const reducer = combineReducers({
  followings
});

export default reducer;
