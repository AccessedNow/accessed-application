import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import hrService from 'app/services/hrService';


export const searchJobs = createAsyncThunk('talent/jobs/getJobs', async () => {
  const response = await hrService.searchJobs({company: 577, query: '', page: 0, size: 10, sort: 'createdDate', direction: 'DESC'});
  return response.content;
});

const filesAdapter = createEntityAdapter({
  selectId: (result) => result.jobId,
});

export const {
  selectAll: selectFiles,
  selectEntities: selectFilesEntities,
  selectById: selectFileById
} = filesAdapter.getSelectors(state => {
  return state.jobWorkflowPage.results
});

const jobsSearchSlice = createSlice({
  name: 'fileManagerApp/files',
  initialState: filesAdapter.getInitialState({
    selectedItemId: null
  }),
  reducers: {
  },
  extraReducers: {
    [searchJobs.fulfilled]: filesAdapter.setAll
  }
});

export const { setSelectedItem } = jobsSearchSlice.actions;

export default jobsSearchSlice.reducer;
