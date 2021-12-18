import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import queryString from 'query-string';
import _ from 'lodash';


export const getPeopleRecommendations = createAsyncThunk(
  'user/people/recommendations',
  async (params, { getState }) => {
    const user = getState().auth.user;
    const pagination = getState().followingsPage.followings.pagination;
    const searchText = getState().followingsPage.followings.searchText;
    const searchType = getState().followingsPage.followings.searchType;

    let queryParams = _.cloneDeep(pagination);
    queryParams.type= searchType;
    queryParams.query= searchText?searchText:'';
    queryParams.page = queryParams.page==0?queryParams.page:queryParams.page--;
    queryParams = new URLSearchParams(queryParams);
    queryParams = new URLSearchParams(params);
    let response = await axios.get(`http://localhost:5000/api/suggestions/people?${queryParams}`, {headers: {userId: user.data.id}});
    const data = response?response.data.data:null;

    return data;
  }
);

export const getUserFollowings = createAsyncThunk(
  'user/people/following',
  async (params, { getState }) => {
    const user = getState().auth.user;
    const pagination = getState().followingsPage.followings.pagination;
    const searchText = getState().followingsPage.followings.searchText;
    const searchType = getState().followingsPage.followings.searchType;

    let queryParams = _.cloneDeep(pagination);
    queryParams.type= searchType;
    queryParams.query= searchText?searchText:'';
    queryParams.page = queryParams.page==0?queryParams.page:queryParams.page--;
    queryParams = new URLSearchParams(queryParams);
    const response = await axios.get(`http://localhost:5000/api/user/${user.data.id}/following/search?${queryParams}`, {headers: {userId: user.data.id}});
    const data = await response.data.data;

    return data;
  }
);


const followingsAdapter = createEntityAdapter({});

const followingsSlice = createSlice({
  name: 'user/people/all',
  initialState: followingsAdapter.getInitialState({
    data: [],
    loading: true,
    searchText: '',
    searchType: 'PERSON',
    noOfElements: 0,
    totalPage: 0,
    totalElements: 0,
    pagination: {
      page: 0,
      size: 20,
      sortBy: 'createdDate',
      direction: 'DESC'
    },
    routeParams: {}
  }),
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination.query = {
        page: action.payload.page?parseInt(action.payload.page):0,
        size: action.payload.size?parseInt(action.payload.size):20,
        sortyBy: action.payload.sortBy?action.payload.orderBy:'createdDate',
        direction: action.payload.direction?action.payload.direction:'DESC',
      };
    },
  },
  extraReducers: {
    [getPeopleRecommendations.fulfilled]: (state, action) => {
      state.data = action.payload.content;
      state.totalPages = action.payload.totalPages;
      state.totalElements = action.payload.totalElements;
    },
    [getUserFollowings.fulfilled]: (state, action) => {
      state.data = action.payload.content;
      state.totalPages = action.payload.totalPages;
      state.totalElements = action.payload.totalElements;
    }
  },
});

export const {
  setLoading,
  setSearchText,
  setPagination
} = followingsSlice.actions;



export default followingsSlice.reducer;
