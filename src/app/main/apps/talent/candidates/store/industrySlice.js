import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllIndustries = createAsyncThunk('candidatesApp/candidates/industry', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().candidatesApp.candidates.routeParams;
	const response = await axios.get('/api/industry/all', {
		params: routeParams
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});


const industrySlice = createSlice({
	name: 'candidatesApp/candidates/industry',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getAllIndustries.fulfilled]: (state, action) => action.payload
	}
});

export default industrySlice.reducer;
