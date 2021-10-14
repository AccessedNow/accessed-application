import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllMembers = createAsyncThunk('jobs/members', async (routeParams, { getState }) => {
	routeParams = routeParams
	const response = await axios.get('/api/members/all', {
		params: routeParams
	});
	const data = await response.data;
	//debugger;
	return { data, routeParams };
});



const membersAdapter = createEntityAdapter({});

export const { selectAll: selectMembers, selectById: selectMemberById } = membersAdapter.getSelectors(
	state => state.memberApp.members
);


const memberSlice = createSlice({
	name: 'memberApp/members',
	initialState: membersAdapter.getInitialState({
		selectedMembers: [],
		dialogOpen: false,
		administrators: [],
		invitedMembers:[]
	}),
	reducers: {
		openCardDialog: (state, action) => {
			state.dialogOpen = true;
			state.selectedMembers = action.payload;
		},
		closeCardDialog: (state, action) => {
			state.dialogOpen = false;
			state.selectedMembers = [];
			state.administrators = [];
			state.invitedMembers = [];
		},
		
		openTeamCardDialog: (state, action) => {
			state.dialogOpen = true;
			state.selectedMembers = action.payload.members;
			state.administrators = action.payload.administrators;
			state.invitedMembers=  action.payload.invitedMembers;
		},
	},
	extraReducers: {
		[getAllMembers.fulfilled]: (state, action) => action.payload
	}
});
export const {
	openCardDialog, closeCardDialog,
	openTeamCardDialog
} = memberSlice.actions;
export default memberSlice.reducer;
