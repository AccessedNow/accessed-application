import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllLabels = createAsyncThunk('jobs/labels', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().jobApp.jobs.routeParams;
	const response = await axios.get('/api/labels/all', {
		params: routeParams
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});


const labelSlice = createSlice({
	name: 'jobs/labels',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getAllLabels.fulfilled]: (state, action) => action.payload
	}
});

export default labelSlice.reducer;
