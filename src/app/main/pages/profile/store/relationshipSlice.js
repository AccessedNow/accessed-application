import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from 'app/services/userService';


export const getRelationship = createAsyncThunk('user/getRelationship', async params => {
  const response = await userService.getRelationship(params.id);
  return response;
});


const relationshipSlice = createSlice({
  name: 'user/relationship',
  initialState: null,
  extraReducers: {
    [getRelationship.fulfilled]: (state, action) => action.payload
  }
});


export default relationshipSlice.reducer;
