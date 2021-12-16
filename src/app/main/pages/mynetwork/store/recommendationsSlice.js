import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRecommendations = createAsyncThunk(
  'user/getRecommendations',
  async (params, { getState }) => {
    const user = getState().auth.user;
    let response = null;
    response = await axios.get(`http://localhost:5000/api/suggestions`, {headers: {userId: user.data.id}});


    const data = response?response.data.data:null;

    return data;
  }
);

const recommendationsAdapter = createEntityAdapter({});

const recommendationsSlice = createSlice({
  name: 'user/recommendations',
  initialState: recommendationsAdapter.getInitialState({
    data: [],
    loading: true,
  }),
  reducers: {
  },
  extraReducers: {
    [getRecommendations.fulfilled]: (state, action) => {
      state.data = action.payload
    },
  },
});


export default recommendationsSlice.reducer;
