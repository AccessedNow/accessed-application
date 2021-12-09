import { combineReducers } from '@reduxjs/toolkit';
import feeds from './feedsSlice';

const reducer = combineReducers({
  feeds
});

export default reducer;
