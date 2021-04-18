import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';
import companyService from 'app/services/companyService';


export const getCompany = createAsyncThunk('company/getCompany', async params => {
  const response = await companyService.getCompany(params.id);
  return response;
});


const companySlice = createSlice({
  name: 'company/profile',
  initialState: null,
  reducers: {
    newCompany: {
      reducer: (state, action) => action.payload,
      prepare: event => ({
        payload: {
          id: FuseUtils.generateGUID(),
          partyType: 'COMPANY',
          name: '',
          headline: '',
          avatar: '',
          cover: '',
          industry: [],
          active: true
        }
      })
    },
    updateFollowStatus: (state, action) => {
      state.company.hasFollowed = false;
    }
  },
  extraReducers: {
    [getCompany.fulfilled]: (state, action) => action.payload
  }
});

export const { updateFollowStatus } = companySlice.actions;


export default companySlice.reducer;
