import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCandidates = createAsyncThunk('candidates/compare', async (routeParams, { getState }) => {
	const id = getState().candidatesCompare.candidates.compare;
	const response = await axios.get('/api/candidates/compare', {
		params: {
			id: id
		},
		pagination: getState().candidatesCompare.candidates.pagination,
		filter: getState().candidatesCompare.candidates.filter
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});




export const addCandidate = createAsyncThunk(
	'candidatesApp/candidates/addCandidate',
	async (candidate, { dispatch, getState }) => {
		const response = await axios.post('/api/candidates-app/add-candidate', { candidate });
		const data = await response.data;

		dispatch(getCandidates());

		return data;
	}
);



const candidatesAdapter = createEntityAdapter({});

export const { selectAll: selectCandidates, selectById: selectCandidatesById } = candidatesAdapter.getSelectors(
	state => state.candidatesCompare.candidates
);

const candidatesCompareSlice = createSlice({
	name: 'candidates/compare',
	initialState: candidatesAdapter.getInitialState({
		isGrid: false,
		selectedMenu: null,
		leftPagination: {
			page: 0,
			pageNumber: 1,
			size: 5
		},
		filter: {

		},
		jobid: null,
		compare: [],
		// sort:{},
		pagination: {
			sortBy: "createdDate",
			page: 0,
			size: 10
		},
		selectedItemId: '1',
		searchText: '',
		routeParams: {},
		candidateDialog: {
			type: 'new',
			props: {
				open: false
			},
			data: null
		},
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
	}),
	reducers: {
		setSelectedItem: (state, action) => {
			// debugger;
			state.selectedItemId = action.payload;
		},
		setCandidatesSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
		setCompare: (state, action) => {
			let Ids = action.payload.id.split(',').map(x => parseInt(x));
			Ids = Ids.filter(function (elem, pos) {
				return Ids.indexOf(elem) == pos;
			})
			state.compare = Ids;
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
		updatePagination: (state, action) => {
			state.pagination = {
				sortBy: action.payload.sortBy,
				page: action.payload.page,
				size: action.payload.size
			}
		},
		updateleftPagination: (state, action) => {
			state.leftPagination = {
				page: action.payload.page,
				pageNumber: action.payload.pageNumber,
				size: action.payload.size
			}
		},
		removeCandidate: (state, action) => {
			state.compare = state.compare.filter(m => m !== parseInt(action.payload))
		},
		addToBoard: (state, action) => {

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
		}
	},
	extraReducers: {
		[getCandidates.fulfilled]: (state, action) => {
			const { data, routeParams } = action.payload;
			candidatesAdapter.setAll(state, data);
			state.routeParams = routeParams;
			state.searchText = '';
		}
	}
});

export const { updateFilter, clearFilter, setCompare, setSelectedItem, setCandidatesSearchText, removeCandidate, updateleftPagination, addToBoard } = candidatesCompareSlice.actions;

export default candidatesCompareSlice.reducer;
