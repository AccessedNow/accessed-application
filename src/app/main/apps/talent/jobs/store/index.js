import { combineReducers } from '@reduxjs/toolkit';
import filters from './filtersSlice';
import folders from './foldersSlice';
import labels from './labelsSlice';
import job from './jobSlice';
import jobs from './jobsSlice';
import skills from './skillsSlice';
import board from './boardSlice';
import boards from './boardsSlice';
import card from './cardSlice';
import candidates from './candidatesSlice';
import members from './memberSlice';
import tags from './tagsSlice';
import activity from './activitySlice';

const reducer = combineReducers({
	jobs,
	job,
	folders,
	labels,
	filters,
	skills,
	boards,
	board,
	card,
	candidates,
	members,
	tags,
	activity
});

export default reducer;
