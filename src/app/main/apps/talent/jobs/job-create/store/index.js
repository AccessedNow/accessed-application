import { combineReducers } from '@reduxjs/toolkit';
import job from './jobSlice';

import course from './courseSlice';
import courses from './coursesSlice';
import categories from './categoriesSlice';
import skills from '../../store/skillsSlice';
import industries from '../../store/industrySlice';
import tags from '../../store/tagsSlice';
import labels from './labelsSlice';
import address from '../../store/addressSlice';
import departments from './departmentsSlice';
import templates from './templateSlice';
import jobFunctions from './jobFunctionsSlice';
import members from '../../store/memberSlice';


const reducer = combineReducers({
	job,
	categories,
	courses,
	course,
	skills,
	tags,
	labels,
	address,
	departments,
	templates,
	jobFunctions,
	industries,
	members
});

export default reducer;
