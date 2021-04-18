import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import DepartmentService from 'app/services/jobService/departmentService.js';
import axios from 'axios';

export const getDepartments = createAsyncThunk('jobCreateApp/departments/getDepartment', async (routeParams, { getState }) => {
	return DepartmentService
		.getDepartments(localStorage.getItem("companyId"))
		.then(data => {
			return data.map(m => { return { ...m, id: m._id } });
		})
		.catch(error => {
			return routeParams;
		});
});


const departmentAdapter = createEntityAdapter({});

export const { selectAll: selectDepartments, selectById: selectDepartmentById } = departmentAdapter.getSelectors(
	state => state.jobCreateApp.departments
);

const departmentSlice = createSlice({
	name: 'jobCreateApp/departments',
	initialState: departmentAdapter.getInitialState({
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
		pagination: {
			sortBy: "createdDate",
			page: 0,
			size: 10
		},
		selectedItemId: '1',
		routeParams: {},
		departmentDialog: {
			type: 'new',
			props: {
				open: false
			},
			data: null
		},
	}),
	reducers: {
		setSelectedItem: (state, action) => {
			// debugger;
			state.selectedItemId = action.payload;
		},

		openNewDepartmentDialog: (state, action) => {
			state.departmentDialog = {
				type: 'new',
				props: {
					open: true
				},
				data: null
			};
		},
		closeNewDepartmentDialog: (state, action) => {
			state.departmentDialog = {
				type: 'new',
				props: {
					open: false
				},
				data: null
			};
		},

		openEditDepartmentDialog: (state, action) => {
			state.departmentDialog = {
				type: 'edit',
				props: {
					open: true
				},
				data: action.payload
			};
		},

		closeEditDepartmentDialog: (state, action) => {
			state.candidateDialog = {
				type: 'edit',
				props: {
					open: false
				},
				data: null
			};
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
		}
	},
	extraReducers: {
		// [updateDepartment.fulfilled]: departmentAdapter.upsertOne,
		// [addDepartment.fulfilled]: departmentAdapter.addOne,
		[getDepartments.fulfilled]: (state, action) => {
			departmentAdapter.setAll(state, action.payload);
		}
	}
});

export const { setSelectedItem } = departmentSlice.actions;

export const {
	openNewDepartmentDialog,
	closeNewDepartmentDialog,
	openEditDepartmentDialog,
	closeEditDepartmentDialog,
	updatePagination,
	updateFilter,
	clearFilter,

} = departmentSlice.actions;

export default departmentSlice.reducer;
