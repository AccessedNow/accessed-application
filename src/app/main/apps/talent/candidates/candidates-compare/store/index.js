import { combineReducers } from '@reduxjs/toolkit';
import candidates from './candidatesCompareSlice';
import candidateSuggestions from './candidateSuggestionsSlice';
import skill from './skillsSlice';
import sidebars from './sidebarsSlice';


const reducer = combineReducers({
	candidates,
  candidateSuggestions,
  skill,
  sidebars
});

export default reducer;
