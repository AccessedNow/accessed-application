import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import companyService from 'app/services/companyService';


export const getPeopleAlsoViewed = createAsyncThunk('company/peopleAlsoViewed', async params => {
  const response = await companyService.getPeopleAlsoViewed(params.id);
  return response;
});


const peopleAlsoViewedSlice = createSlice({
  name: 'company/peopleAlsoViewed',
  initialState: null,
  extraReducers: {
    [getPeopleAlsoViewed.fulfilled]: (state, action) => action.payload
  }
});


export default peopleAlsoViewedSlice.reducer;
