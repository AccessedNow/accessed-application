import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import queryString from 'query-string';
import _ from 'lodash';

export const searchSkills = createAsyncThunk(
  'search/skills',
  async (query) => {
    const response = await axios.get(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/common/skills/search?query=${query}&id=`, null);
    const data = await response.data.data;
    return data;
  }
);


export const searchJobFunctions = createAsyncThunk(
  'search/skills',
  async (query) => {
    const response = await axios.get(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/common/jobfunction/search?query=${query}&id=`, null);
    const data = await response.data.data;
    return data;
  }
);

export const searchIndustries = createAsyncThunk(
  'search/skills',
  async (query) => {
    const response = await axios.get(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/common/industry/search?query=${query}&id=`, null);
    const data = await response.data.data;
    return data;
  }
);

const jobsSlice = createSlice({
  name: 'common/search',
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
    changeOrder: (state, action) => {
      state.orderBy = action.payload;
    },
    updatePage: (state, action) => {
      state.pagination.query.page = action.payload;
    },
  },
});

export default commonSlice.reducer;
