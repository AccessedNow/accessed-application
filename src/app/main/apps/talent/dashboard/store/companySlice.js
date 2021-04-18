import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCompanies = createAsyncThunk('projectDashboardApp/companies', async () => {
	const response = await axios.get('/api/companies/all');
	return response.data;
});

const companyAdapter = createEntityAdapter({});

export const {
	selectAll: selectCompanies,
	selectEntities: selectCompanyEntities,
	selectById: selectCompanyById
} = companyAdapter.getSelectors(state => state.projectDashboardApp.companies);

const companySlice = createSlice({
	name: 'projectDashboardApp/companies',
	initialState: companyAdapter.getInitialState(),
	reducers: {},
	extraReducers: {
		[getCompanies.fulfilled]: companyAdapter.setAll
	}
});

export default companySlice.reducer;
