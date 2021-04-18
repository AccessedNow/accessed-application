import { combineReducers } from '@reduxjs/toolkit';
import departments from './departmentsSlice';
import members from './memberSlice';
import address from './addressSlice';

const reducer = combineReducers({
	departments,	
	members,
	address
});

export default reducer;
