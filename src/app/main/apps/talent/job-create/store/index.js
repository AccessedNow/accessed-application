import { combineReducers } from '@reduxjs/toolkit';
import job from '../../store/jobSlice';
import categories from './categoriesSlice';

const reducer = combineReducers({
  categories,
  job,
});

export default reducer;
