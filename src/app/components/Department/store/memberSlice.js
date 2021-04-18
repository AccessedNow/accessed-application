import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllMembers = createAsyncThunk('departmentApp/members', async (routeParams, { getState }) => {
	routeParams = routeParams
	const response = await axios.get('/api/members/all', {
		params: routeParams
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});


const memberSlice = createSlice({
	name: 'departmentApp/members',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getAllMembers.fulfilled]: (state, action) => action.payload
	}
});

export default memberSlice.reducer;
