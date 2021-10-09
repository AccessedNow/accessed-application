import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import jobService from 'app/services/jobService';

import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';

export const getJobLanding = createAsyncThunk('job/landing', async (params, { dispatch, getState }) => {
  const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/landing`, {headers: {userId: getState().auth.user.data.id}});
  // const response = await jobService.getJobLanding()
  return response.data.data;
});

const jobLandingAdapter = createEntityAdapter({});


const jobLandingSlice = createSlice({
  name: 'job/detail',
  initialState: null,
  reducers: {

  },
  extraReducers: {
    [getJobLanding.fulfilled]: (state, action) => action.payload
  },
});

export const { } = jobLandingSlice.actions;

export default jobLandingSlice.reducer;
