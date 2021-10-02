import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';

export const getJob = createAsyncThunk('job/detail', async (params) => {
  const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/${params.id}` );
  const data = await response.data.data;
  return data;
});

export const saveJob = createAsyncThunk(
  'job/save',
  async (job, { getState, dispatch }) => {
    const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/${job._id}/bookmark?token=612c8ce7d5d6d21536fdfb4e`, null, {headers: {userId: getState().auth.user.data.id}});
    const data = await response.data;

    dispatch(showMessage({ message: 'Job Saved' }));

    return data;
  }
);


export const applyJob = createAsyncThunk(
  'job/apply',
  async (_data, { getState, dispatch }) => {
    const { id } = getState().mailApp.mail;

    const response = await axios.post('/api/job/apply', { id, ..._data });
    const data = await response.data;

    dispatch(showMessage({ message: 'Job Applied' }));

    return data;
  }
);

export const getSimilarJobs = createAsyncThunk(
  'job/similar',
  async (params) => {
    const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/${params.id}/similar` );
    const data = await response.data.data.content;

    return data;
  }
);


const jobSlice = createSlice({
  name: 'job/detail',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getJob.fulfilled]: (state, action) => action.payload,
    [saveJob.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [applyJob.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
    })
  },
});

export default jobSlice.reducer;
