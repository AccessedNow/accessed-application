import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import jobService from 'app/services/jobService';



export const getJobs = createAsyncThunk('jobApp/jobs/getJobs', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().jobApp.jobs.routeParams;
	const response = await axios.get('/api/jobs/getJobs', {
		params: routeParams,
		pagination: getState().jobApp.jobs.pagination,
		filter: getState().jobApp.jobs.filter
	});
	const data = await response.data;

	return { data, routeParams };
});


// export const addJob = createAsyncThunk(
// 	'jobApp/jobs/addJob',
// 	async (job, { dispatch, getState }) => {
// 		const response = await axios.post('/api/jobs/add-job', { job });
// 		const data = await response.data;

// 		dispatch(getJobs());

// 		return data;
// 	}
// );

export const addJob = (object) => async dispatch => {
	debugger;
	return jobService
		.addJob(object)
		.then(data => {

			return data;
		})
		.catch(error => {
			return object;
		});
};





export const setFolderOnSelectedJobs = createAsyncThunk(
	'jobApp/jobs/setFolderOnSelectedJobs',
	async (id, { dispatch, getState }) => {
		const { selectedJobIds } = getState().jobApp.jobs;

		const response = await axios.post('/api/job-app/set-folder', {
			selectedJobIds,
			folderId: id
		});
		const data = await response.data;

		dispatch(getJobs());

		return data;
	}
);

export const toggleLabelOnSelectedJobs = createAsyncThunk(
	'jobApp/jobs/toggleLabelOnSelectedJobs',
	async (id, { dispatch, getState }) => {
		const { selectedJobIds } = getState().jobApp.jobs;

		const response = await axios.post('/api/job-app/toggle-label', {
			selectedJobIds,
			labelId: id
		});
		const data = await response.data;

		dispatch(getJobs());

		return data;
	}
);

const jobsAdapter = createEntityAdapter({});

export const { selectAll: selectJobs, selectById: selectJobById } = jobsAdapter.getSelectors(
	state => state.jobApp.jobs
);

const jobsSlice = createSlice({
	name: 'jobApp/jobs',
	initialState: jobsAdapter.getInitialState({
		selectedMembers:[],
		dialogOpen: false,
		searchText: '',
		routeParams: {},
		selectedJobIds: [],
		pagination: {
			sortBy: "createdDate",
			page: 0,
			size: 5,
			total: 0
		},
		filter: {
			experience: [0, 100],
			owner: [],
			industry: [],
			rating: [0, 10],
			level: [],
			salary: [0, 100],
			skill: [],
			tag: [],
			status: []
		},
		isGrid: false,
		visibleCandidatesColumns: [{ name: 'Name', checked: true, disabled: true },
		{ name: 'Evaluation', checked: true },
		{ name: 'Date', checked: true },
		{ name: 'Tasks', checked: true },
		{ name: 'Tags', checked: true },
		{ name: 'Last Activity', checked: true },
		{ name: 'Social', checked: true }],
		jobDialog: {
			type: 'new',
			props: {
				open: false
			},
			data: null
		},
	}),
	reducers: {
		setJobsSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
		selectAllJobs: (state, action) => {
			state.selectedJobIds = state.ids;
		},
		deselectAllJobs: (state, action) => {
			state.selectedJobIds = [];
		},
		selectJobsByParameter: (state, action) => {
			const [parameter, value] = action.payload;
			state.selectedJobIds = state.ids.filter(id => state.entities[id][parameter] === value);
		},
		toggleInSelectedJobs: (state, action) => {
			const jobId = action.payload;
			state.selectedJobIds = state.selectedJobIds.includes(jobId)
				? state.selectedJobIds.filter(id => id !== jobId)
				: [...state.selectedJobIds, jobId];
		},
		updateFilter: (state, action) => {
			state.filter = action.payload;
		},
		clearFilter: (state, action) => {
			state.filter = {
				experience: [0, 100],
				owner: [],
				industry: [],
				rating: [0, 10],
				level: [],
				salary: [0, 100],
				skill: [],
				tag: [],
				status: []
			}
			state.routeParams = "";
		},
		updatePagination: (state, action) => {
			state.pagination = action.payload
		},
		toggleView: (state, action) => {
			state.isGrid = !state.isGrid;
		},
		updateVisibleCandidatesColumns: (state, action) => {
			state.visibleCandidatesColumns = action.payload;
		},
		openNewJobDialog: (state, action) => {
			state.jobDialog = {
				type: 'new',
				props: {
					open: true
				},
				data: null
			};
		},
		closeNewJobDialog: (state, action) => {
			state.jobDialog = {
				type: 'new',
				props: {
					open: false
				},
				data: null
			};
		},
		openEditJobDialog: (state, action) => {
			state.jobDialog = {
				type: 'edit',
				props: {
					open: true
				},
				data: action.payload
			};
		},
		closeEditJobDialog: (state, action) => {
			state.jobDialog = {
				type: 'edit',
				props: {
					open: false
				},
				data: null
			};
		},
		openCardDialog: (state, action) => {
			state.dialogOpen = true;
			state.selectedMembers = action.payload;
		},
		closeCardDialog: (state, action) => {
			state.dialogOpen = false;
			state.selectedMembers = [];
		}
	},
	extraReducers: {
		[getJobs.fulfilled]: (state, action) => {
			const { data, total, routeParams } = action.payload;
			jobsAdapter.setAll(state, data.data);
			state.pagination.total = data.total;
			state.routeParams = routeParams;
			state.selectedJobIds = [];
		},

	}
});

export const {
	setJobsSearchText,
	selectAllJobs,
	deselectAllJobs,
	selectJobsByParameter,
	toggleInSelectedJobs,
	updateFilter,
	clearFilter,
	updatePagination,
	toggleView,
	updateVisibleCandidatesColumns,
	openNewJobDialog,
	closeNewJobDialog,
	openEditJobDialog,
	closeEditJobDialog,
	openCardDialog, closeCardDialog
} = jobsSlice.actions;

export default jobsSlice.reducer;
