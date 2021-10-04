import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import queryString from 'query-string';
import _ from 'lodash';

export const searchJobs = createAsyncThunk(
  'jobs/search',
  async (routeParams, { getState }) => {
    routeParams = routeParams || getState().jobSearch.jobs.routeParams;
    let filter = getState().jobSearch.jobs.filter;
    let query = _.cloneDeep(getState().jobSearch.jobs.pagination.query);
    query.page--;
    query = new URLSearchParams(query);
    const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/search?${query}`, filter);
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

export const getTitleSuggestion = createAsyncThunk(
  'job/titleSuggestion',
  async (query) => {
    const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/search/suggestions?query=${query}`, null);
    const data = await response.data.data;
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
    data: [],
    loading: true,
    selectedItem: null,
    searchText: '',
    noOfElements: 0,
    filter: {
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
    },
    pagination: {
      query: {
        page: 0,
        size: 20,
        sortyBy: 'createdDate',
        direction: 'DESC'
      }
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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination.query = {
        page: action.payload.page?parseInt(action.payload.page):0,
        size: action.payload.size?parseInt(action.payload.size):20,
        sortyBy: action.payload.sortBy?action.payload.orderBy:'createdDate',
        direction: action.payload.direction?action.payload.direction:'DESC',
      };
    },
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
    updatePage: (state, action) => {
      state.pagination.query.page = action.payload;
    },
  },
  extraReducers: {
    [saveJob.fulfilled]: jobsAdapter.upsertOne,
    // [searchJobs.fulfilled]: (state, action) => action.payload,
    [searchJobs.fulfilled]: (state, action) => {

      if(action.payload.content){
        state.selectedItem = action.payload.content[0]
      }

      state.data = action.payload.content;
      state.pagination.totalPages = action.payload.totalPages;
      state.pagination.totalElements = action.payload.totalElements;

    },
  },
});

export const {
  setLoading,
  setPagination,
  setSelectedItem,
  setSearchText,
  toggleOrderDescending,
  changeOrder,
  updatePage
} = jobsSlice.actions;

export default jobsSlice.reducer;
