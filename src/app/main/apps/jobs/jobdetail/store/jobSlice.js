import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';
import {getTodos} from "../../../todo/store/todosSlice";

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
  async (form, { getState, dispatch }) => {
    let {id} = form;
    delete form.id;
    const response = await axios.post(`http://localhost:8080/api/jobs/${id}/apply`, {...form}, {headers: {userId: getState().auth.user.data.id}});
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


export const addTodo = createAsyncThunk(
  'todoApp/todos/addTodo',
  async (todo, { dispatch, getState }) => {
    const response = await axios.post('/api/todo-app/new-todo', todo);
    const data = await response.data;

    dispatch(getTodos());

    return data;
  }
);

const jobAdapter = createEntityAdapter({});


const jobSlice = createSlice({
  name: 'job/detail',
  initialState: {
    detail: null,
    applicationDialog: {
      activeStep: 1,
      data: null,
      dialogOpen: false
    },
  },
  reducers: {
    openDialog: (state, action) => {
      state.applicationDialog.dialogOpen = true;
      state.data = action.payload;
    },
    closeDialog: (state, action) => {
      state.applicationDialog.dialogOpen = false;
      state.data = null;
    },
    updateStep: (state, action) => {
      state.applicationDialog.activeStep = action.payload;
      // state.data = null;
    },
  },
  extraReducers: {
    [getJob.fulfilled]: (state, action) => {
      state.detail = action.payload;
    },
    [saveJob.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [applyJob.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [addTodo.fulfilled]: jobAdapter.addOne,
  },
});

export const { updateStep, openDialog, closeDialog } = jobSlice.actions;

export default jobSlice.reducer;
