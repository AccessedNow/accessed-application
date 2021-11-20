import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import queryString from 'query-string';
import _ from 'lodash';

export const searchJobs = createAsyncThunk(
  'jobs/search',
  async (params, { getState }) => {
    let queryParams = _.cloneDeep(params.pagination);
    queryParams.query= params.query;
    queryParams.page = queryParams.page==0?queryParams.page:queryParams.page--;
    queryParams = new URLSearchParams(queryParams);
    const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/search?${queryParams}`, params.filter);
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

export const searchSkills = createAsyncThunk(
  'search/skills',
  async (query) => {
    const response = await axios.get(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/common/skills/search?query=${query}&id=`, null);
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
      createdDate: "",
      distance: [],
      level: [],
      city: [],
      state: [],
      country: [],
      company: [],
      employmentType: [],
      industry: [],
      tags: [],
      workFromHome: "REMOTE",
      isPromoted: false
    },
    pagination: {
      page: 0,
      size: 20,
      sortBy: 'createdDate',
      direction: 'DESC'
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
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
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
    setSelectedItem: (state, action) => {
      state.searchText = action.payload;
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
  setFilter,
  setLoading,
  setPagination,
  setSelectedItem,
  setSearchText,
  toggleOrderDescending,
  changeOrder,
  updatePage
} = jobsSlice.actions;

export default jobsSlice.reducer;
