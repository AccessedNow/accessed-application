import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import JobService from 'app/services/jobService';
import axios from 'axios';

// export const getCategories = createAsyncThunk('academyApp/categories/getCategories', async () => {
// 	const response = await axios.get('/api/academy-app/categories');
// 	const data = await response.data;

// 	return data;
// });

export const getCategories = createAsyncThunk('jobCreateApp/categories/getCategories', async (searchText) => {
	debugger;
	return JobService
		.getCategories(searchText)
		.then(data => {
			// dispatch(updateJobId(data));
			// dispatch(setActiveStep(2));
			// dispatch(showMessage({ message: 'Job Saved' }));
			return data;
		})
		.catch(error => {
			return searchText;
		});
});

const categoriesAdapter = createEntityAdapter({});

export const { selectAll: selectCategories, selectById: selectCategoryById } = categoriesAdapter.getSelectors(
	state => state.jobCreateApp.categories
);

const categorySlice = createSlice({
	name: 'jobCreateApp/categories',
	initialState: categoriesAdapter.getInitialState({}),
	reducers: {},
	extraReducers: {
		[getCategories.fulfilled]: (state, action) => {
			
			categoriesAdapter.setAll(state, action.payload);
			
		}
	}
});

export default categorySlice.reducer;
