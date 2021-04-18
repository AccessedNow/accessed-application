import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import hrService from 'app/services/hrService';


export const getJobById = createAsyncThunk('job/detail', async (params, { dispatch }) => {
  const response = await hrService.getJobById(params.id);
  return response;

});

const jobAdapter = createEntityAdapter({});

const jobSlice = createSlice({
  name: 'job/detail',
  initialState: {},
  reducers: {},
  extraReducers: {
    [getJobById.fulfilled]: (state, action) => action.payload
  }
});


export default jobSlice.reducer;
