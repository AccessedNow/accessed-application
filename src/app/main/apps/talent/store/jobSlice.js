import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';

import { showMessage } from 'app/store/fuse/messageSlice';
import {getProduct, removeProduct, saveProduct} from "../../e-commerce/store/productSlice";


export const getJob = createAsyncThunk('talent/job/detail', async (params, {getState}) => {
  const user = getState().auth.user;
  const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.data.preferredCompany}/jobs/${params.jobId}`, {headers: {userId: user.data.id}} );
  const data = await response.data.data;

  return data === undefined ? null : data;
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

export const removeJob = createAsyncThunk(
  'job/delete',
  async (form, { getState, dispatch }) => {
    const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/${form._id}`, {...form}, {headers: {userId: getState().auth.user.data.id}});
    const data = await response.data;

    dispatch(showMessage({ message: 'Job Saved' }));

    return data;
  }
);


const jobSlice = createSlice({
  name: 'talent/job',
  initialState: null,
  reducers: {
    resetJob: () => null,
    newJob: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          id: FuseUtils.generateGUID(),
          title: '',
          description: '',
          qualifications: [],
          minimumQualifications: [],
          responsibilities: [
            "Prepare, plan and lead scrum teams and meetings with product and engineering teams",
            "Determine and define clear deliverables, roles, and responsibilities for team members required for specific projects or initiatives"
          ],
          allowRemote: false,
          category: '',
          jobFunction: '',
          employmentType: '',
          education: '',
          level: '',
          industry: [],
          minMonthExperience: null,
          maxMonthExperience: null,
          salaryRangeLow: '',
          salaryRangeHigh: '',
          currency: '',
          district: '',
          city: '',
          state: '',
          country: '',
          tags: [],
          company: {
            id: 1,
            name: 'Hacker News',
            avatar: ''
          }
        },
      }),
    },
  },
  extraReducers: {
    [getJob.fulfilled]: (state, action) => action.payload,
    [updateJob.fulfilled]: (state, action) => action.payload,
    [removeJob.fulfilled]: (state, action) => null,
  },
});

export const { newJob, resetJob } = jobSlice.actions;

export default jobSlice.reducer;
