import { combineReducers } from '@reduxjs/toolkit';
import job from '../../store/jobSlice';
import board from './boardSlice';
import card from './cardSlice';
import applications from './applicationsSlice';


const reducer = combineReducers({
  job,
  applications,
  board,
  card,
});

export default reducer;
