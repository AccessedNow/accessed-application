import { combineReducers } from '@reduxjs/toolkit';

import candidate from '../../store/candidateSlice';

const reducer = combineReducers({
  candidate
});

export default reducer;
