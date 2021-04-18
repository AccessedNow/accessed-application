import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from 'app/services/userService';


export const getPeopleAlsoViewed = createAsyncThunk('user/peopleAlsoViewed', async params => {
  const response = await userService.getPeopleAlsoViewed(params.id);
  return response;
});


const peopleAlsoViewedsSlice = createSlice({
  name: 'user/peopleAlsoViewed',
  initialState: null,
  extraReducers: {
    [getPeopleAlsoViewed.fulfilled]: (state, action) => action.payload
  }
});


export default peopleAlsoViewedsSlice.reducer;
