import { combineReducers } from '@reduxjs/toolkit';
import activities from './activitiesSlice';

const reducer = combineReducers({
  activities
});

export default reducer;
