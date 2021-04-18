import { combineReducers } from '@reduxjs/toolkit';
import projects from './projectsSlice';
import widgets from './widgetsSlice';
import companies from './companySlice';

const reducer = combineReducers({
	widgets,
	projects,
	companies
});

export default reducer;
