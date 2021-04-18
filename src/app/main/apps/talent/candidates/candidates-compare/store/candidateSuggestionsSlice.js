import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSuggestionsData = createAsyncThunk('candidates/suggestions', async (routeParams, { getState }) => {
  const jobId = getState().candidatesCompare.candidates.jobId;
  const response = await axios.get('/api/candidates/suggestions', {
    params: {
      jobId: jobId,
      page: getState().candidatesCompare.candidates.pagination.page,
      size: getState().candidatesCompare.candidates.pagination.size
    }
  });
  const data = await response.data;
  //debugger;
  return { data, routeParams };
});


const candidateSuggestionsSlice = createSlice({
  name: 'candidates/suggestions',
  initialState: {},
  pagination: {
    sortBy: "createdDate",
    page: 0,
    size: 10
  },
  selected: [],
  reducers: {
    setSelected: (state, action) => {
      // debugger;
      let Ids = action.payload.id.split(',').map(x => parseInt(x));
			Ids = Ids.filter(function (elem, pos) {
				return Ids.indexOf(elem) == pos;
			})
			state.selected = Ids;
    },
  },
  extraReducers: {
    [getSuggestionsData.fulfilled]: (state, action) => action.payload
  }
});
export const {  setSelected} = candidateSuggestionsSlice.actions;

export default candidateSuggestionsSlice.reducer;
