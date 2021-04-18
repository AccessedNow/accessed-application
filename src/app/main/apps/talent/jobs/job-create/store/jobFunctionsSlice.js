import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import JobService from 'app/services/jobService';
import axios from 'axios';

export const getAllJobFunctions = createAsyncThunk('jobCreateApp/jobFunctions', async (searchText, { getState }) => {
	return JobService
		.getSkills(searchText)
		.then(data => {

			return data;
		})
		.catch(error => {
			return searchText;
		});
});


const jobFunctionsSlice = createSlice({
	name: 'jobCreateApp/jobFunctions',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getAllJobFunctions.fulfilled]: (state, action) => action.payload
	}
});

export default jobFunctionsSlice.reducer;
