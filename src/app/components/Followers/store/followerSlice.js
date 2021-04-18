import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import feedService from 'app/services/feedService';


export const getPartyFollowers = createAsyncThunk('company/getFollowers', async params => {
  const response = await feedService.getPartyFollowers(params.id, params.page, params.size);
  return response;
});


const followerSlice = createSlice({
	name: 'party/followers',
	initialState: null,
	reducers: {
	},
	extraReducers: {
		[getPartyFollowers.fulfilled]: (state, action) => action.payload
	}
});


export default followerSlice.reducer;
