import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';

import { showMessage } from 'app/store/fuse/messageSlice';


export const getJobApplications = createAsyncThunk('talent/job/applications', async (params, {getState}) => {
  const user = getState().auth.user;
  const pagination = getState().jobDetail.applications.pagination;
  const filter = getState().jobDetail.applications.filter;
  const searchText = getState().jobDetail.applications.searchText;
  let queryParams = _.cloneDeep(pagination);
  queryParams.query= searchText?searchText:'';
  queryParams.page = queryParams.page==0?queryParams.page:queryParams.page--;
  queryParams = new URLSearchParams(queryParams);
  const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.data.preferredCompany}/jobs/${params.jobId}/applications?${queryParams}`, filter, {headers: {userId: user.data.id}} );
  const data = await response.data.data;

  return data === undefined ? null : data;
});


const jobSlice = createSlice({
  name: 'talent/job/applications',
  initialState: {
    data: [],
    dialogOpen: false,
    loading: true,
    selectedItem: null,
    searchText: '',
    searchLocation: null,
    orderBy: '',
    orderDescending: false,
    totalPage: 0,
    totalElements: 0,
    selectedApplicationIds: [],
    filter: {
      status: ["ACTIVE", "DISQUALIFIED", "REJECTED"],
      level: [],
      city: [],
      state: [],
      country: [],
      company: [],
      employmentType: [],
      industry: [],
      tags: [],
      sources: [],
      skills: [],
      stages: []
    },
    pagination: {
      page: 0,
      size: 20,
      sortBy: 'createdDate',
      direction: 'DESC'
    },
  },
  reducers: {
    setSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    selectAllApplications: (state, action) => {
      state.selectedApplicationIds = state.ids;
    },
    deselectAllApplications: (state, action) => {
      state.selectedApplicationIds = [];
    },
    selectCandidatesByParameter: (state, action) => {
      const [parameter, value] = action.payload;
      state.selectedApplicationIds = state.ids.filter((id) => state.entities[id][parameter] === value);
    },
    toggleInSelectedApplications: (state, action) => {
      const applicationId = action.payload;
      state.selectedApplicationIds = state.selectedApplicationIds.includes(applicationId)
        ? state.selectedApplicationIds.filter((id) => id !== applicationId)
        : [...state.selectedApplicationIds, applicationId];
    },
  },
  extraReducers: {
    [getJobApplications.fulfilled]: (state, action) => {
      if(action.payload.content){
        state.selectedItem = action.payload.content[0]
      }

      state.data = action.payload.content;
      state.pagination.totalPages = action.payload.totalPages;
      state.pagination.totalElements = action.payload.totalElements;
    }
  },
});

export const { setSearchText, setFilter, selectAllApplications, deselectAllApplications, toggleInSelectedApplications} = jobSlice.actions;

export default jobSlice.reducer;
