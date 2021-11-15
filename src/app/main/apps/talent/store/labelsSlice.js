import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCompanyLabels = createAsyncThunk(
  'company/labels',
  async (params, {getState}) => {
    let user = getState().auth.user.data;
    const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/labels?query=${params.query}&type=${params.type}`, {headers: {userId: user.id}});

    const data = await response.data.data;

    return data === undefined ? null : data;
  });

const labelsAdapter = createEntityAdapter({});


const labelsSlice = createSlice({
  name: 'todoApp/labels',
  initialState: labelsAdapter.getInitialState({}),
  reducers: {},
  extraReducers: {
    [getCompanyLabels.fulfilled]: labelsAdapter.setAll,
  },
});

export default labelsSlice.reducer;
