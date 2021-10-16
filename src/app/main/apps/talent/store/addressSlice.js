import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTemplates = createAsyncThunk('company/templates', async (routeParams, { getState }) => {
	routeParams = routeParams;
	const response = await axios.get('/api/address/all', {
		params: routeParams
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});


const addressSlice = createSlice({
	name: 'jobCreate/address',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getAllLocations.fulfilled]: (state, action) => action.payload
	}
});

export default addressSlice.reducer;
