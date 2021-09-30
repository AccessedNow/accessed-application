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
    const response = await axios.post('https://52.12.76.229:8000/job-service/api/jobs/search?size=25&page=0&sortBy=relevant&direction=ASC&query=', filters);
    const data = response.data.data.content;

    return { data, routeParams };
  }
);


export const saveJob = createAsyncThunk(
  'job/save',
  async (job, { dispatch, getState }) => {
    const response = await axios.post(`https://52.12.76.229:8000/job-service/api/jobs/${job._id}/bookmark?token=612c8ce7d5d6d21536fdfb4e`, {});
    const data = await response.data;

    // dispatch(getTodos());

    return data;
  }
);

// const jobsAdapter = createEntityAdapter({});
const jobsAdapter = createEntityAdapter({
  selectId: function(job) {
    return job._id
  }
})

export const { selectAll: selectJobs, selectById: selectJobsById } = jobsAdapter.getSelectors(
  function(state) {
    return state.jobSearch.jobs
  }
);

const jobsSlice = createSlice({
  name: 'jobs/search',
  initialState: jobsAdapter.getInitialState({
    selectedItemId: '612356b423b8b141d120d782',
    searchText: '',
    orderBy: '',
    orderDescending: false,
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
      state.selectedItemId = action.payload;
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
    [searchJobs.fulfilled]: (state, action) => {
      const { data, routeParams } = action.payload;
      jobsAdapter.setAll(state, data);
      state.routeParams = routeParams;
      state.searchText = '';
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
