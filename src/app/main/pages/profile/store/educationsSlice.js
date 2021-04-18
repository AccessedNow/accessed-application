import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from 'app/services/userService';


export const getUserEducations = createAsyncThunk('user/educations', async params => {
  const response = await userService.getEducations(params.id);
  return response;
});


const userEducations = createSlice({
  name: 'user/educations',
  initialState: null,
  extraReducers: {
    [getUserEducations.fulfilled]: (state, action) => action.payload
  }
});


export default userEducations.reducer;
