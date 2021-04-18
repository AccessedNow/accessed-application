import { combineReducers } from '@reduxjs/toolkit';
import company from './companySlice';
import peopleAlsoViewed from './peopleAlsoViewedSlice';
import pages from './linkedPagesSlice';


const reducer = combineReducers({
  company,
  peopleAlsoViewed,
  pages
});

export default reducer;
