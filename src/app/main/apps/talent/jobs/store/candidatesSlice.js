import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCandidates = createAsyncThunk('jobApp/jobs/getCandidates', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().jobApp.candidates.routeParams;
	const response = await axios.get('/api/candidates/all', {
		params: routeParams
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});

export const getCandidateById = createAsyncThunk('jobApp/jobs/getCandidate', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().jobApp.candidates.routeParams;
	const response = await axios.get('/api/candidates/candidate', {
		params: routeParams
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});


export const getBoardCandidates = createAsyncThunk('jobApp/jobs/getBoardCandidates', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().jobApp.candidates.routeParams;
	const response = await axios.get('/api/jobs/board/candidates', {
		params: routeParams
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});



export const getCandidatesCompare = createAsyncThunk('jobApp/jobs/compare', async (routeParams, { getState }) => {
	const id = getState().candidatesCompare.candidates.compare;
	const response = await axios.get('/api/candidates/compare', {
		params: {
			id: id
		}
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});






export const addCandidate = createAsyncThunk(
	'jobApp/jobs/addCandidate',
	async (candidate, { dispatch, getState }) => {
		const response = await axios.post('/api/candidates-app/add-candidate', { candidate });
		const data = await response.data;

		dispatch(getCandidates());

		return data;
	}
);
export const updateCandidate = createAsyncThunk(
	'jobApp/jobs/updateCandidate',
	async (candidate, { dispatch, getState }) => {
		const response = await axios.post('/api/candidates/update', { candidate });
		const data = await response.data;
		dispatch(getCandidates());
		return data;
	}
);

export const removeCandidate = createAsyncThunk(
	'jobApp/jobs/removeCandidate',
	async (candidateId, { dispatch, getState }) => {
		const response = await axios.post('/api/candidates-app/remove-candidate', { candidateId });
		const data = await response.data;
		dispatch(getCandidates());

		return data;
	}
);

export const removeCandidates = createAsyncThunk(
	'jobApp/jobs/removeCandidates',
	async (candidateIds, { dispatch, getState }) => {
		const response = await axios.post('/api/candidates-app/remove-candidates', { candidateIds });
		const data = await response.data;

		dispatch(getCandidates());

		return data;
	}
);

export const toggleStarredCandidate = createAsyncThunk(
	'jobApp/jobs/toggleStarredCandidate',
	async (candidateId, { dispatch, getState }) => {
		const response = await axios.post('/api/candidates-app/toggle-starred-candidate', { candidateId });
		const data = await response.data;

		dispatch(getCandidates());

		return data;
	}
);

export const toggleStarredCandidates = createAsyncThunk(
	'jobApp/jobs/toggleStarredCandidates',
	async (candidateIds, { dispatch, getState }) => {
		const response = await axios.post('/api/candidates-app/toggle-starred-candidates', { candidateIds });
		const data = await response.data;

		dispatch(getCandidates());

		return data;
	}
);

export const setCandidatesStarred = createAsyncThunk(
	'jobApp/jobs/setCandidatesStarred',
	async (candidateIds, { dispatch, getState }) => {
		const response = await axios.post('/api/candidates-app/set-candidates-starred', { candidateIds });
		const data = await response.data;
		dispatch(getCandidates());
		return data;
	}
);

export const setCandidatesUnstarred = createAsyncThunk(
	'jobApp/jobs/setCandidatesUnstarred',
	async (candidateIds, { dispatch, getState }) => {
		const response = await axios.post('/api/candidates-app/set-candidates-unstarred', { candidateIds });
		const data = await response.data;

		dispatch(getCandidates());

		return data;
	}
);

const candidatesAdapter = createEntityAdapter({});

export const { selectAll: selectCandidates, selectById: selectCandidatesById } = candidatesAdapter.getSelectors(
	state => state.jobApp.candidates
);

const candidatesSlice = createSlice({
	name: 'jobApp/candidates',
	initialState: candidatesAdapter.getInitialState({
		isGrid: false,
		selectedMenu: null,
		filter: {
			experience: [0, 100],
			location: [],
			industry: [],
			rating: [0, 10],
			level: [],
			salary: [0, 100],
			skill: [],
			tag: []
		},
		compare: [],
		// sort:{},
		pagination: {
			sortBy: "createdDate",
			page: 0,
			size: 10
		},
		selectedItemId: '1',
		selected:null,
		searchText: '',
		routeParams: {},
		candidateDialog: {
			type: 'new',
			props: {
				open: false
			},
			data: null
		},
		availabilityDialog: {
			type: 'new',
			props: {
				open: false
			},
			data: null
		}
	}),
	reducers: {
		setSelectedItem: (state, action) => {			
			state.selectedItemId = action.payload;
		},
		setCandidatesSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
		openNewCandidateDialog: (state, action) => {
			state.candidateDialog = {
				type: 'new',
				props: {
					open: true
				},
				data: null
			};
		},
		closeNewCandidateDialog: (state, action) => {
			state.candidateDialog = {
				type: 'new',
				props: {
					open: false
				},
				data: null
			};
		},
		openCheckAvailabilityeDialog: (state, action) => {
			state.availabilityDialog = {
				type: 'new',
				props: {
					open: true
				},
				data: null
			};
		},
		closeCheckAvailabilityDialog: (state, action) => {
			state.availabilityDialog = {
				type: 'new',
				props: {
					open: false
				},
				data: null
			};
		},
		openEditCandidateDialog: (state, action) => {
			state.candidateDialog = {
				type: 'edit',
				props: {
					open: true
				},
				data: action.payload
			};
		},
		showCandidate: (state, action) => {
			state.candidate = {
				type: 'edit',
				props: {
					open: true
				},
				data: action.payload
			};
		},
		closeEditCandidateDialog: (state, action) => {
			state.candidateDialog = {
				type: 'edit',
				props: {
					open: false
				},
				data: null
			};
		},
		toggleView: (state, action) => {
			state.isGrid = !state.isGrid;
		},
		updatePagination: (state, action) => {
			state.pagination = {
				sortBy: action.payload.sortBy,
				page: action.payload.page,
				size: action.payload.size
			}
		},
		updateFilter: (state, action) => {
			state.filter = action.payload;
		},
		clearFilter: (state, action) => {
			state.filter = {
				experience: [0, 100],
				location: [],
				industry: [],
				rating: [0, 10],
				level: [],
				salary: [0, 100],
				skill: [],
				tag: []
			}
			state.routeParams = "";
		},
		setSelectedMenu: (state, action) => {
			state.selectedMenu = action.payload
		}
	},
	extraReducers: {
		[updateCandidate.fulfilled]: candidatesAdapter.upsertOne,
		[addCandidate.fulfilled]: candidatesAdapter.addOne,
		[getCandidates.fulfilled]: (state, action) => {
			const { data, routeParams } = action.payload;
			candidatesAdapter.setAll(state, data);
			state.routeParams = routeParams;
			state.searchText = '';
		},
		[getBoardCandidates.fulfilled]: (state, action) => {
			const { data, routeParams } = action.payload;
			candidatesAdapter.setAll(state, data);
			state.routeParams = routeParams;
			state.searchText = '';
		},
		[getCandidateById.fulfilled]: (state, action) => {
			const { data, routeParams } = action.payload;
			state.selected=data;
			
		},
	}
});

export const { setSelectedItem } = candidatesSlice.actions;

export const {
	setCandidatesSearchText,
	toggleView,
	openNewCandidateDialog,
	closeNewCandidateDialog,
	openEditCandidateDialog,
	closeEditCandidateDialog,
	openCheckAvailabilityeDialog,
	closeCheckAvailabilityDialog,
	updatePagination,
	updateFilter,
	clearFilter,
	setSelectedMenu
} = candidatesSlice.actions;

export default candidatesSlice.reducer;
