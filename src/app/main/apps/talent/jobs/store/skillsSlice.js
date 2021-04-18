import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import JobService from 'app/services/jobService';
import axios from 'axios';

export const getAllSkills = createAsyncThunk('jobs/skills', async (searchText, { getState }) => {
	
	return JobService
		.getSkills(searchText)
		.then(data => {
			
			return data;
		})
		.catch(error => {
			return searchText;
		});
});


const skillSlice = createSlice({
	name: 'jobs/skills',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getAllSkills.fulfilled]: (state, action) => action.payload
	}
});

export default skillSlice.reducer;
