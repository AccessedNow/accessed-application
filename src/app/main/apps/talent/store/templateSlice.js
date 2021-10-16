import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCompanyTemplates = createAsyncThunk('company/templates', async (routeParams, { getState }) => {
	routeParams = routeParams;
	const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${routeParams.companyId}/questions/templates?query=`, {headers: {userId: getState().auth.user.data.id}});
	const data = await response.data.data;
	//debugger;
	return data;
});


const templateSlice = createSlice({
	name: 'company/templates',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getCompanyTemplates.fulfilled]: (state, action) => action.payload
	}
});

export default templateSlice.reducer;
