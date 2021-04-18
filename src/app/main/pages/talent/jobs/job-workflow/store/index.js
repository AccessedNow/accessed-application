import { combineReducers } from '@reduxjs/toolkit';
import results from './jobsSearchSlice';
import contacts from './contactsSlice';
import user from './userSlice';
import board from './boardSlice';
import card from './cardSlice';
import todos from './todosSlice';
import job from '../../store/jobSlice';
import applications from '../store/applicationsSearchSlice';


const reducer = combineReducers({
  results,
  contacts,
  user,
  job,
  board,
  card,
  todos,
  applications
});

export default reducer;
