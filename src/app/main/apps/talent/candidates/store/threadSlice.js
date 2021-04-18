import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllThreads = createAsyncThunk('candidatesApp/candidates/threads', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().candidatesApp.candidates.routeParams;
	const response = await axios.get('/api/threads/all', {
		params: routeParams
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});


const threadSlice = createSlice({
	name: 'candidatesApp/candidates/threads',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getAllThreads.fulfilled]: (state, action) => action.payload
	}
});

export default threadSlice.reducer;
