import { combineReducers } from '@reduxjs/toolkit';
import page from './pageSlice';
import peopleAlsoViewed from './peopleAlsoViewedSlice';


const reducer = combineReducers({
  page,
  peopleAlsoViewed
});

export default reducer;
