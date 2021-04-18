import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLabels = createAsyncThunk('jobApp/labels/getLabels', async () => {
	const response = await axios.get('/api/labels/all');
	const data = await response.data;

	return data;
});

const labelsAdapter = createEntityAdapter({});

export const {
	selectAll: selectLabels,
	selectEntities: selectLabelsEntities,
	selectById: selectLabelById
} = labelsAdapter.getSelectors(state => state.jobApp.labels);

const labelsSlice = createSlice({
	name: 'jobApp/labels',
	initialState: labelsAdapter.getInitialState(null),
	reducers: {},
	extraReducers: {
		[getLabels.fulfilled]: labelsAdapter.setAll
	}
});

export default labelsSlice.reducer;
