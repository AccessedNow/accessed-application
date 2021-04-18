import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFolders = createAsyncThunk('jobApp/folders/getFolders', async () => {
	const response = await axios.get('/api/job-app/folders');
	const data = await response.data;

	return data;
});

const foldersAdapter = createEntityAdapter({});

export const { selectAll: selectFolders, selectById: selectFolderById } = foldersAdapter.getSelectors(
	state => state.jobApp.folders
);

const foldersSlice = createSlice({
	name: 'jobApp/folders',
	initialState: foldersAdapter.getInitialState({}),
	reducers: {},
	extraReducers: {
		[getFolders.fulfilled]: foldersAdapter.setAll
	}
});

export default foldersSlice.reducer;
