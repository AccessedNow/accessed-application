import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import queryString from 'query-string';
import _ from 'lodash';
import ApiClient from '../../../../../services/apiManager';

export const getProfile = createAsyncThunk(
  'user/profile',
  async (params, { getState }) => {
    const user = getState().auth.user;
    let response = null;
    // if(user.data.tagName===params.tagName){
    //   response = await axios.get(`http://localhost:5000/api/user/current`, {headers: {userId: user.data.id}});
    // } else{
      response = await axios.get(`http://localhost:5000/api/user/tag/${params.username}`, {headers: {userId: user.data.id}});
    // }

    const data = response?response.data.data:null;

    return data;
  }
);

export const getUserRelationships = createAsyncThunk(
  'user/detail',
  async (params, { getState }) => {
    const user = getState().auth.user;
    let response = await axios.get(`http://localhost:5000/api/user/${params.id}/relationship`, {headers: {userId: user.data.id}});
    const data = response?response.data.data:null;

    return data;
  }
);


export const getUserTopSkills = createAsyncThunk(
  'user/top-skills',
  async (params, { getState }) => {
    const user = getState().auth.user;
    let response = await axios.get(`http://localhost:5000/api/user/${params.id}/skills/list`, {headers: {userId: user.data.id}});
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



const profileSlice = createSlice({
  name: 'user/profile',
  initialState: null,
  reducers: {},
  extraReducers: {
    [followUser.fulfilled]: {},
    [getProfile.fulfilled]: (state, action) => {
      return action.payload;
    }
  },
});

export const {
  setLoading,
} = profileSlice.actions;

export default profileSlice.reducer;
