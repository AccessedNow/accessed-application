import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllSkills = createAsyncThunk('candidatesApp/candidates/skills', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().candidatesApp.candidates.routeParams;
	const response = await axios.get('/api/skills/all', {
		params: routeParams
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});


const skillSlice = createSlice({
	name: 'candidatesApp/candidates/skills',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getAllSkills.fulfilled]: (state, action) => action.payload
	}
});

export default skillSlice.reducer;
