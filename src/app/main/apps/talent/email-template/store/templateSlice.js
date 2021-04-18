import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllEmailTemplates = createAsyncThunk('departmentApp/members', async (routeParams, { getState }) => {
	routeParams = routeParams
	const response = await axios.get('/api/email-template/all', {
		params: routeParams
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});


const emailTemplateSlice = createSlice({
	name: 'emailTemlateApp/all',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getAllEmailTemplates.fulfilled]: (state, action) => action.payload
	}
});

export default emailTemplateSlice.reducer;
