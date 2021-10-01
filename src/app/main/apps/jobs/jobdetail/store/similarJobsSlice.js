import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';

export const getSimilarJobs = createAsyncThunk('job/similar', async (params) => {
  const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/${params.id}/similar?size=10` );
  const data = await response.data.data.content;
  return data;
});


const jobSlice = createSlice({
  name: 'job/similar',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getSimilarJobs.fulfilled]: (state, action) => action.payload
  },
});

export default jobSlice.reducer;
