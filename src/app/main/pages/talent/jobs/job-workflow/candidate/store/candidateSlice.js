import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';
import userService from 'app/services/userService';


export const getProfile = createAsyncThunk('user/getProfile', async params => {
  const response = await userService.getProfile(params.id);
  return response;
});

export const getProfileDetail = createAsyncThunk('user/getProfile', async params => {
  const response = await userService.getUserDetail(params.id);
  return response;
});

const userSlice = createSlice({
  name: 'user/profile',
  initialState: null,
  reducers: {
    newUser: {
      reducer: (state, action) => action.payload,
      prepare: event => ({
        payload: {
          id: FuseUtils.generateGUID(),
          partyType: 'PERSON',
          name: '',
          headline: '',
          avatar: '',
          cover: '',
          industry: [],
          active: true
        }
      })
    }
  },
  extraReducers: {
    [getProfile.fulfilled]: (state, action) => action.payload
  }
});


export default userSlice.reducer;
