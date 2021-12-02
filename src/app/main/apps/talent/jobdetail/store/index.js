import { combineReducers } from '@reduxjs/toolkit';
import job from '../../store/jobSlice';
import board from './boardSlice';
import card from './cardSlice';
import applications from './applicationsSlice';
import folders from './foldersSlice';
import labels from './labelsSlice';

const reducer = combineReducers({
  job,
  applications,
  board,
  card,
  folders,
  labels
});

export default reducer;
