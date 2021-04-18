import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCandidate =createAsyncThunk('candidatesApp/candidates/candidate', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().candidatesApp.candidates.routeParams;
	const response = await axios.get('/api/candidates/candidate', {
		params: routeParams
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});




const candidateSlice = createSlice({
	name: 'candidatesApp/candidates/candidate',	
	initialState: {},
	reducers: {},
	extraReducers: {
		[getCandidate.fulfilled]: (state, action) => action.payload
	}
});

export const { setSelectedItem } = candidateSlice.actions;

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
} = candidateSlice.actions;

export default candidateSlice.reducer;
