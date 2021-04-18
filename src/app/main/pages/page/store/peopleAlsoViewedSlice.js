import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import pageService from 'app/services/pageService';


export const getPeopleAlsoViewed = createAsyncThunk('page/peopleAlsoViewed', async params => {
  const response = await pageService.getPeopleAlsoViewed(params.id);
  return response;
});


const peopleAlsoViewedSlice = createSlice({
  name: 'page/peopleAlsoViewed',
  initialState: null,
  extraReducers: {
    [getPeopleAlsoViewed.fulfilled]: (state, action) => action.payload
  }
});


export default peopleAlsoViewedSlice.reducer;
