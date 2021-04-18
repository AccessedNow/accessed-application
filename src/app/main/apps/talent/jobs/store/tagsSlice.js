import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllTags = createAsyncThunk('jobs/tags', async (routeParams, { getState }) => {
	routeParams = routeParams;
	const response = await axios.get('/api/tags/all', {
		params: routeParams
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});


const tagSlice = createSlice({
	name: 'jobs/tags',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getAllTags.fulfilled]: (state, action) => action.payload
	}
});

export default tagSlice.reducer;
