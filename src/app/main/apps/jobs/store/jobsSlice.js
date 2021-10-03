import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchJobs = createAsyncThunk(
  'jobs/search',
  async (routeParams, { getState }) => {
    let filters = {
      "createdDate": "",
      "level": [],
      "city": [],
      "state": [],
      "country": [],
      "company": [],
      "employmentType": [],
      // "industry": [],
      "tags": [],
      "workFromHome": "REMOTE",
      "isPromoted": false
    }
    routeParams = routeParams || getState().jobSearch.jobs.routeParams;
    const response = await axios.post('http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/search?size=25&page=0&sortBy=relevant&direction=ASC&query=', filters);
    const data = await response.data.data;

    return data;
  }
);


export const saveJob = createAsyncThunk(
  'job/save',
  async (job, { dispatch, getState }) => {
    const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/${job._id}/bookmark?token=612c8ce7d5d6d21536fdfb4e`, {});
    const data = await response.data;

    // dispatch(getTodos());

    return data;
  }
);

export const getJob = createAsyncThunk(
  'job/detail',
  async (job, { dispatch, getState }) => {
    const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/${job.jobId}`, null);
    const data = await response.data.data;
    // dispatch(getTodos());

    return data;
  }
);

const jobsAdapter = createEntityAdapter({});
// const jobsAdapter = createEntityAdapter({
//   selectId: function(job) {
//     return job._id
//   }
// })

// export const { selectAll: selectJobs, selectById: selectJobsById } = jobsAdapter.getSelectors(
//   function(state) {
//     return state.jobSearch.jobs
//   }
// );

const jobsSlice = createSlice({
  name: 'jobs/search',
  initialState: jobsAdapter.getInitialState({
    data: null,
    selectedItem: null,
    searchText: '',
    noOfElements: 0,
    pagination: {
      page: 0,
      size: 20,
      orderBy: 'createdDate',
      orderDescending: true,
    },
    routeParams: {},
    jobDialog: {
      type: 'new',
      props: {
        open: false,
      },
      data: null,
    },
  }),
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    setSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
    toggleOrderDescending: (state, action) => {
      state.orderDescending = !state.orderDescending;
    },
    changeOrder: (state, action) => {
      state.orderBy = action.payload;
    },

  },
  extraReducers: {
    [saveJob.fulfilled]: jobsAdapter.upsertOne,
    // [searchJobs.fulfilled]: (state, action) => action.payload,
    [searchJobs.fulfilled]: (state, action) => {
      state.data = action.payload;
      if(!state.selectedItem && action.payload.content){
        state.selectedItem = action.payload.content[0]
      }

      state.page = action.payload.page;
      state.size = action.payload.size;

    },
  },
});

export const {
  setSelectedItem,
  setSearchText,
  toggleOrderDescending,
  changeOrder
} = jobsSlice.actions;

export default jobsSlice.reducer;
