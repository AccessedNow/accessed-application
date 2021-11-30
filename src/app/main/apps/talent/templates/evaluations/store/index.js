import { combineReducers } from '@reduxjs/toolkit';

import evaluationTemplates from '../../../store/evaluationTemplatesSlice';

const reducer = combineReducers({
  evaluationTemplates
});

export default reducer;
