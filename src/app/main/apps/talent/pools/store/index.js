import { combineReducers } from '@reduxjs/toolkit';

import pools from '../../store/poolsSlice';

const reducer = combineReducers({
  pools
});

export default reducer;
