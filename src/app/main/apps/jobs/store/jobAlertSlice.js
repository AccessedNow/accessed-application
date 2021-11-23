import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';

export const getAlerts = createAsyncThunk('jobs/alerts', async () => {
  const response = await axios.get('/api/todo-app/labels');
  const data = await response.data;

  return data;
});

export const addJobAlert = createAsyncThunk(
  'jobs/alerts/add',
  async (jobAlert, { dispatch, getState }) => {
    const user = getState().auth.user;
    const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/users/${user.data.id}/alerts`, jobAlert, {headers: {userId: user.data.id}});

    const data = await response.data;

    dispatch(
      showMessage({
        message: 'Job Alert Saved',
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })
    );

    return data;
  }
);
const jobAlertAdapter = createEntityAdapter({});

const jobAlertSlice = createSlice({
  name: 'jobs/alerts',
  reducers: {},
  extraReducers: {},
});

export const {} = jobAlertSlice.actions;


export default jobAlertSlice.reducer;
