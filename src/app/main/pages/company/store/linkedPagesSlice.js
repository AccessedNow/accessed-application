import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import feedService from 'app/services/feedService';


export const getLinkedPages = createAsyncThunk('company/pages', async params => {
  const response = await feedService.getPartyPages(params.id);
  return response;
});


const linkedPagesSlice = createSlice({
  name: 'company/pages',
  initialState: null,
  extraReducers: {
    [getLinkedPages.fulfilled]: (state, action) => action.payload
  }
});


export default linkedPagesSlice.reducer;
