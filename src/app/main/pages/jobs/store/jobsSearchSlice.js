import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import jobService from 'app/services/jobService';


export const searchJobs = createAsyncThunk('fileManagerApp/files/getFiles', async () => {
  const response = await jobService.searchJobs({query: '', page: 0, size: 10, sort: 'createdDate', direction: 'DESC'});
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
  return state.jobSearchPage.results
});

const jobsSearchSlice = createSlice({
  name: 'fileManagerApp/files',
  initialState: filesAdapter.getInitialState({
    selectedItemId: null
  }),
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItemId = action.payload;
    }
  },
  extraReducers: {
    [searchJobs.fulfilled]: filesAdapter.setAll
  }
});

export const { setSelectedItem } = jobsSearchSlice.actions;

export default jobsSearchSlice.reducer;
