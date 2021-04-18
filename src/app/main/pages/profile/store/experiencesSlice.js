import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from 'app/services/userService';


export const getUserExperiences = createAsyncThunk('user/experiences', async params => {
  const response = await userService.getExperiences(params.id);
  return response;
});


const userExperiences = createSlice({
  name: 'user/experiences',
  initialState: null,
  extraReducers: {
    [getUserExperiences.fulfilled]: (state, action) => action.payload
  }
});


export default userExperiences.reducer;
