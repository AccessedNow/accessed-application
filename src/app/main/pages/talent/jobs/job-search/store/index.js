import { combineReducers } from '@reduxjs/toolkit';
import results from './jobsSearchSlice';
import contacts from './contactsSlice';
import user from './userSlice';

const reducer = combineReducers({
  results,
  contacts,
  user
});

export default reducer;
