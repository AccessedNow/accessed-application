import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import queryString from 'query-string';
import _ from 'lodash';

export const getCurrentUser = createAsyncThunk(
  'user/profile',
  async (params, { getState }) => {
    const user = getState().auth.user;
    let response = null;
    if(user.data.tagName===params.tagName){
      response = await axios.get(`http://localhost:5000/api/user/current`, {headers: {userId: user.data.id}});
    } else{
      response = await axios.get(`http://localhost:5000/api/user/${params.username}`, {headers: {userId: user.data.id}});
    }

    const data = response?response.data.data:null;

    return data;
  }
);

export const getUserConnectionCounts = createAsyncThunk(
  'user/connections',
  async (params, { getState }) => {
    const user = getState().auth.user;
    let response = await axios.get(`http://localhost:5000/api/user/${user.data.id}/connections`, {headers: {userId: user.data.id}});
    const data = response?response.data.data:null;

    return data;
  }
);

export const getUserConnections = createAsyncThunk(
  'user/connections/search',
  async (params, { getState }) => {
    const user = getState().auth.user;
    let response = await axios.get(`http://localhost:5000/api/user/${user.data.id}/connections/search`, {headers: {userId: user.data.id}});
    const data = response?response.data.data:null;

    return data;
  }
);


export const followUser = createAsyncThunk(
  'user/follow',
  async (params, { dispatch, getState }) => {
    let response = null;
    if(!params.follow) {
      response = await axios.post(`http://localhost:5000/api/user/${params.id}/follow`, null);
    } else {
      response = await axios.delete(`http://localhost:5000/api/user/${params.id}/follow`, null);
    }
    const data = await response.data;


    return data;
  }
);



const userSlice = createSlice({
  name: 'user/profile',
  initialState: null,
  reducers: {},
  extraReducers: {
    [followUser.fulfilled]: {},
    [getCurrentUser.fulfilled]: (state, action) => {
      return action.payload;
    }
  },
});

export const {
  setLoading,
} = userSlice.actions;

export default userSlice.reducer;
