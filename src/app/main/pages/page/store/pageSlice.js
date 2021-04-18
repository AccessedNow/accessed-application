import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';
import pageService from 'app/services/pageService';


export const getPage = createAsyncThunk('page/getPage', async params => {
  console.log('getPage', params)
  const response = await pageService.getPage(params.id);
  return response;
});


const pageSlice = createSlice({
  name: 'page/profile',
  initialState: null,
  reducers: {
    newCompany: {
      reducer: (state, action) => action.payload,
      prepare: event => ({
        payload: {
          id: FuseUtils.generateGUID(),
          partyType: 'PAGE',
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
      state.page.hasFollowed = false;
    }
  },
  extraReducers: {
    [getPage.fulfilled]: (state, action) => action.payload
  }
});

export const { updateFollowStatus } = pageSlice.actions;


export default pageSlice.reducer;
