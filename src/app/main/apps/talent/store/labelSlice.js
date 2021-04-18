import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLabels = createAsyncThunk('labels/all', async () => {
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
	name: 'labels/all',
	initialState: labelsAdapter.getInitialState(null),
	reducers: {},
	extraReducers: {
		[getLabels.fulfilled]: labelsAdapter.setAll
	}
});

export default labelsSlice.reducer;
