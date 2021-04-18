import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLabels = createAsyncThunk('jobCreateApp/labels/getLabels', async () => {
	const response = await axios.get('/api/labels/all');
	const data = await response.data;

	return data;
});


const labelsSlice = createSlice({
	name: 'jobCreateApp/labels',
	initialState:{},
	reducers: {},
	extraReducers: {
		[getLabels.fulfilled]: (state, action) => action.payload
	}
});

export default labelsSlice.reducer;
