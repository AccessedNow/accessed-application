import { combineReducers } from '@reduxjs/toolkit';
import user from './userSlice';
import relationship from './relationshipSlice';
import peopleAlsoViewed from './peopleAlsoViewedSlice';
import experiences from './experiencesSlice';
import educations from './educationsSlice';

const reducer = combineReducers({
  user,
  relationship,
  peopleAlsoViewed,
  experiences,
  educations
});

export default reducer;
