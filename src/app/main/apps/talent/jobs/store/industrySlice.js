import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import JobService from 'app/services/jobService';
import axios from 'axios';

export const getAllIndustries = createAsyncThunk('jobs/industry', async (searchText, { getState }) => {
	return JobService
		.getIndustries(searchText)
		.then(data => {			
			return data;
		})
		.catch(error => {
			return searchText;
		});
});


const industrySlice = createSlice({
	name: 'jobs/industry',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getAllIndustries.fulfilled]: (state, action) => action.payload
	}
});

export default industrySlice.reducer;
