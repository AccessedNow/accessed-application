import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';
import history from '@history';
export const getJob = createAsyncThunk('jobApp/job/getJob', async params => {
	const response = await axios.get('/api/jobs/job', { params });
	const data = await response.data;
	return data;
});

export const updateJob = createAsyncThunk('jobApp/job/updateJob', async (_data, { getState, dispatch }) => {
	const { id } = getState().jobApp.job;

	const response = await axios.post('/api/job-app/update-job', { id, ..._data });
	const data = await response.data;

	dispatch(showMessage({ message: 'Job Saved' }));

	return data;
});
export const removeJob = createAsyncThunk(
	'jobApp/job/removeJob',
	async (jobId, { dispatch, getState }) => {
		const response = await axios.post('/api/jobs/remove-job', { jobId });
		//const data = await response.data;
		dispatch(showMessage({ message: 'Job Removed' }));	

		history.push('/apps/hr/jobs')
		return jobId;
	}
);
export const addMembers = createAsyncThunk(
	'jobApp/job/addMembers',
	async (members, { dispatch, getState }) => {
		let selectedItem = getState().jobApp.job;
		if (selectedItem) {
			selectedItem = { ...selectedItem, members: members };
		}

		dispatch(updateJob(selectedItem));
		return selectedItem;
	}
);

export const addSkills = createAsyncThunk(
	'jobApp/job/addSkills',
	async (skills, { dispatch, getState }) => {
		let selectedItem = getState().jobApp.job;
		if (selectedItem) {
			selectedItem = { ...selectedItem, skills: [...selectedItem.skills, ...skills.map((skill)=>{return skill.label;} )] };
		}

		dispatch(updateJob(selectedItem));
		return selectedItem;
	}
);

export const addTags = createAsyncThunk(
	'jobApp/job/addTags',
	async (tags, { dispatch, getState }) => {
		let selectedItem = getState().jobApp.job;
		if (selectedItem) {
			selectedItem = { ...selectedItem, tags: [...selectedItem.tags,...tags.map((tag)=>{return tag.label;} )] };
		}
		dispatch(updateJob(selectedItem));
		return selectedItem;
	}
);

export const addLabels = createAsyncThunk(
	'jobApp/job/addLabels',
	async (labels, { dispatch, getState }) => {
		let selectedItem = getState().jobApp.job;
		if (selectedItem) {
			selectedItem = { ...selectedItem, labels: [...selectedItem.labels, ...labels.map((label)=>{return label.label;} )] };
		}
		dispatch(updateJob(selectedItem));
		return selectedItem;
	}
);


const jobSlice = createSlice({
	name: 'jobApp/job',
	initialState: null,
	reducers: {},
	extraReducers: {
		[getJob.fulfilled]: (state, action) => action.payload,
		[updateJob.fulfilled]: (state, action) => ({
			...state,
			...action.payload
		})
	}
});

export default jobSlice.reducer;
