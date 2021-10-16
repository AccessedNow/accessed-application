import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';


export const getJob = createAsyncThunk('job/detail', async (params) => {
  const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/${params.id}` );
  const data = await response.data.data;
  return data;
});

export const addJob = createAsyncThunk(
  'job/add',
  async (form, { getState, dispatch }) => {
    delete form.id;
    const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs`, {...form}, {headers: {userId: getState().auth.user.data.id}});
    const data = await response.data;

    dispatch(showMessage({ message: 'Job Created' }));

    return data;
  }
);

export const updateJob = createAsyncThunk(
  'job/save',
  async (form, { getState, dispatch }) => {
    const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/${form._id}`, {...form}, {headers: {userId: getState().auth.user.data.id}});
    const data = await response.data;

    dispatch(showMessage({ message: 'Job Saved' }));

    return data;
  }
);


const jobSlice = createSlice({
  name: 'academyApp/course',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getJob.fulfilled]: (state, action) => action.payload,
    [addJob.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [updateJob.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export default jobSlice.reducer;
