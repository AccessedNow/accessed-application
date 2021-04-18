import { combineReducers } from '@reduxjs/toolkit';
import candidates from './candidatesSlice';
import address from './addressSlice';
import industry from './industrySlice';
import thread from './industrySlice';
import skill from './skillsSlice';
import candidate from './candidateSlice';
import activity from './activitySlice';

const reducer = combineReducers({
	candidates,
	address,
	industry,
	thread,
	skill,
	candidate,
	activity
});

export default reducer;
