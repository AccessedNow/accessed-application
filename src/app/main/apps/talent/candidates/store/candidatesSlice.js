import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import {searchJobs} from "../../../jobs/store/jobsSlice";

export const searchCandidates = createAsyncThunk(
  'candidates/search',
  async (params, { getState }) => {
    let user = getState().auth.user.data;
    let filter = getState().candidatesApp.candidates.filter;
    let sort = getState().candidatesApp.candidates.sort;
    let searchText = getState().candidatesApp.candidates.searchText;
    let queryParams = _.merge(sort, {query: searchText});
    queryParams = new URLSearchParams(queryParams);
    const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/candidates/search?${queryParams}`, filter, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);

export const getProducts = createAsyncThunk('eCommerceApp/products/getProducts', async () => {
  const response = await axios.get('/api/e-commerce-app/products');
  const data = await response.data;

  return data;
});

export const removeProducts = createAsyncThunk(
  'eCommerceApp/products/removeProducts',
  async (productIds, { dispatch, getState }) => {
    await axios.post('/api/e-commerce-app/remove-products', { productIds });

    return productIds;
  }
);

const candidatesAdapter = createEntityAdapter({});

export const { selectAll: selectCandidates, selectById: selectCandidatesById } =
  candidatesAdapter.getSelectors((state) => state.candidatesApp.candidates);

const candidatesSlice = createSlice({
  name: 'talent/candidates',
  initialState: candidatesAdapter.getInitialState({
    searchText: '',
    totalPage: 0,
    totalElements: 0,
    data: [],
    filter: {
      hasApplied: true,
      hasImported: false,
      minYear:0,
      maxYear: 5,
      status: [],
      level: [],
      city: [],
      state: [],
      country: [],
      company: [25],
      employmentType: [],
      industry: [],
      tags: [],
      skills: [],
      stages: [],
      sources: []
    },
    sort: {
      page: 0,
      size: 20,
      sortBy: 'createdDate',
      direction: 'DESC'
    }
  }),
  reducers: {
    setSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [searchCandidates.fulfilled]: (state, action) => {

      const { payload, routeParams } = action;
      if(payload.content){
        state.selectedItem = payload.content[0]
      }

      candidatesAdapter.setAll(state, payload.content);
      state.data = action.payload.content;
      state.totalPages = action.payload.totalPages;
      state.totalElements = action.payload.totalElements;

    }
  },
});

export const { setSearchText } = candidatesSlice.actions;

export default candidatesSlice.reducer;
