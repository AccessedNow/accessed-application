import { combineReducers } from '@reduxjs/toolkit';
import contacts from './contactsSlice';
import user from './userSlice';
import labels from '../../../store/labelSlice';

const reducer = combineReducers({
	contacts,
	user,
	labels
});

export default reducer;
