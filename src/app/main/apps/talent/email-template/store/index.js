import { combineReducers } from '@reduxjs/toolkit';
import templates from './templateSlice';


const reducer = combineReducers({
  templates
});

export default reducer;
