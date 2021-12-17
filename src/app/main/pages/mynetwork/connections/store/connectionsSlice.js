import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import queryString from 'query-string';
import _ from 'lodash';
import ApiClient from '../../../../../services/apiManager';

export const getUserConnections = createAsyncThunk(
  'user/connections/search',
  async (params, { getState }) => {
    const user = getState().auth.user;
    let response = await axios.get(`http://localhost:5000/api/user/${user.data.id}/connections/search`, {headers: {userId: user.data.id}});
    const data = response?response.data.data:null;

    return data;
  }
);

export const getUserInvitations = createAsyncThunk(
  'user/connections/invitations/search',
  async (params, { getState }) => {
    const user = getState().auth.user;
    let response = await axios.get(`http://localhost:5000/api/user/${user.data.id}/invitations/search?type=${params.type}`, {headers: {userId: user.data.id}});
    const data = response?response.data.data:null;

    return data;
  }
);


export const cancelInvitation = createAsyncThunk(
  'user/connections/invitations/cancel',
  async (params, { getState }) => {
    const user = getState().auth.user;
    let response = await axios.put(`http://localhost:5000/api/user/${user.data.id}/invitations/${params.id}`, {status: 'SENDER_CANCELLED'}, {headers: {userId: user.data.id}});
    const data = response?response.data.data:null;

    return data;
  }
);



const connectionsAdapter = createEntityAdapter({});

const connectionsSlice = createSlice({
  name: 'user/connections/all',
  initialState: connectionsAdapter.getInitialState({
    data: [],
    loading: true,
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
      isPromoted: false,
      allowRemote: false
    },
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

    // [getUserConnections.fulfilled]: (state, action) => {
    //   state.data = action.payload.content;
    // }
  },
});

export const {
  setLoading,
  setSearchText,
  setPagination
} = connectionsSlice.actions;



export default connectionsSlice.reducer;
