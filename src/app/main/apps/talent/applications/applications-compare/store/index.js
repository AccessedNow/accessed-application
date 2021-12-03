import { combineReducers } from '@reduxjs/toolkit';

import candidates from '../../../store/candidatesSlice';

const reducer = combineReducers({
  candidates,
});

export default reducer;
