import { combineReducers } from '@reduxjs/toolkit';

import emailTemplates from '../../../store/emailTemplatesSlice';

const reducer = combineReducers({
  emailTemplates
});

export default reducer;
