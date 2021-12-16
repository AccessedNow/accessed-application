import { combineReducers } from '@reduxjs/toolkit';
import connections from './connectionsSlice';

const reducer = combineReducers({
  connections
});

export default reducer;
