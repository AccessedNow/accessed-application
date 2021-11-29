import { combineReducers } from '@reduxjs/toolkit';

import members from '../../store/membersSlice';
import roles from '../../store/rolesSlice';

const reducer = combineReducers({
  members,
  roles
});

export default reducer;
