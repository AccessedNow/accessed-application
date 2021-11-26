import { combineReducers } from '@reduxjs/toolkit';
import job from '../../store/jobSlice';
import board from './boardSlice';
import card from './cardSlice';


const reducer = combineReducers({
  job,
  board,
  card
});

export default reducer;
