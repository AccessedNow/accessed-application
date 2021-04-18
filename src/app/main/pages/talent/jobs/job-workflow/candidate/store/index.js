import { combineReducers } from '@reduxjs/toolkit';
import candidate from './candidateSlice';


const reducer = combineReducers({
  candidate
});

export default reducer;
