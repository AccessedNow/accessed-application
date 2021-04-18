import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllActivities = createAsyncThunk('jobApp/jobs/activities', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().jobApp.jobs.routeParams;
	const response = await axios.get('/api/activities/all', {
		params: routeParams,
		pagination: getState().jobApp.activity.pagination
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});

export const getRecentActivities = createAsyncThunk('jobApp/jobs/recentActivities', async (routeParams, { getState }) => {
	routeParams = routeParams ||getState().jobApp.jobs.routeParams;
	const response = await axios.get('/api/activities/recent', {
		params: routeParams,
		pagination: getState().jobApp.activity.pagination
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});
const activityAdapter = createEntityAdapter({});
export const { selectAll: selectActivity, selectById: selectActivityById } = activityAdapter.getSelectors(
	state => state.jobApp.activity
);
const activitySlice = createSlice({
	name: 'jobApp/activity',
	initialState: activityAdapter.getInitialState({
		pagination: {
			sortBy: "createdDate",
			page: 0,
			size: 10
		},
		recent: []

	}),
	reducers: {
		updatePagination: (state, action) => {
			state.pagination = {
				sortBy: action.payload.sortBy,
				page: action.payload.page,
				size: action.payload.size
			}
		},
	},
	extraReducers: {
		[getAllActivities.fulfilled]: (state, action) => action.payload,
		[getRecentActivities.fulfilled]: (state, action) => {
			const { data, routeParams } = action.payload;
			activityAdapter.setAll(state, data);
			state.routeParams = routeParams;
			state.searchText = '';
		}
	}
});
export const {
	updatePagination,
} = activitySlice.actions;
export default activitySlice.reducer;
