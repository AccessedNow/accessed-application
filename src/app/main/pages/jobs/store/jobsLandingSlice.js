import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';
import jobService from 'app/services/jobService';


export const getJobsLanding = createAsyncThunk('jobs/landing', async params => {
  const response = await jobService.getJobLanding();
  return response;
});


const jobsLandingSlice = createSlice({
  name: 'jobsLanding',
  initialState: null,
  reducers: {
  },
  extraReducers: {
    [getJobsLanding.fulfilled]: (state, action) => action.payload
  }
});


export default jobsLandingSlice.reducer;
