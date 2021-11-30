import { combineReducers } from '@reduxjs/toolkit';

import questionTemplates from '../../../store/questionTemplatesSlice';

const reducer = combineReducers({
  questionTemplates
});

export default reducer;
