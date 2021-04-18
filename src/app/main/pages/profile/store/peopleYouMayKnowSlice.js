import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from 'app/services/userService';


export const getPeopleYouMayKnow = createAsyncThunk('user/peopleYouMayKnow', async params => {
  const response = await userService.getPeopleAlsoViewed(params.id);
  return response;
});


const peopleYouMayKnowsSlice = createSlice({
  name: 'user/peopleAlsoViewed',
  initialState: null,
  extraReducers: {
    [getPeopleYouMayKnow.fulfilled]: (state, action) => action.payload
  }
});


export default peopleYouMayKnowsSlice.reducer;
