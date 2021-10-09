import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';


export const registerCompany = createAsyncThunk(
  'company/register',
  async (form, { getState, dispatch }) => {
    const response = await axios.post(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/company/register`, {...form}, {headers: {userId: getState().auth.user.data.id}});
    const data = await response.data.data;

    if(form.avatar){
      dispatch(uploadAvatar(form.avatar));
    }

    dispatch(showMessage({ message: 'Company Created' }));

    return data;
  }
);


export const getCompany = createAsyncThunk('company/detail', async (params, { dispatch, getState }) => {
  const response = await axios.get(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/company/${params.id}`,  {headers: {userId: getState().auth.user.data.id}});
  const data = await response.data.data;
  return data;
});

export const getCompanyRelationships = createAsyncThunk('company/relationship', async (params, { dispatch, getState }) => {
  const response = await axios.get(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/company/${params.id}/relationship`, {headers: {userId: getState().auth.user.data.id}} );
  const data = await response.data.data;
  return data;
});

export const followCompany = createAsyncThunk(
  'company/follow',
  async (id, { dispatch, getState }) => {
    const response = await axios.post(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/company/${id}/follow`, null, {headers: {userId: getState().auth.user.data.id}});
    const data = await response.data;
    return data;
  }
);


export const unfollowCompany = createAsyncThunk(
  'company/unfollow',
  async (params) => {
    const response = await axios.delete(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/company/${params._id}/follow`, null, {headers: {userId: getState().auth.user.data.id}});
    const data = await response.data.data.content;
    return data;
  }
);

export const getCompanyFeed = createAsyncThunk(
  'company/feeds',
  async (params, { dispatch, getState }) => {
    const response = await axios.get(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/feeds/latest?id=${params.id}&page=0&size=10&type=COMPANY`, {headers: {userId: getState().auth.user.data.id}} );
    const data = await response.data.data.content;
    return data;
  }
);


export const getCompanyJobs = createAsyncThunk(
  'company/jobs',
  async (params) => {
    const filter = {
      "level": [],
      "city": [],
      "state": [],
      "country": [],
      "company": [],
      "employmentType": [],
      "industry": [],
      "tags": []
    };

    const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/company/${params.id}/jobs/search?query=&page=0&size=25&sortBy=createdDate&direction=DESC`, filter );
    const data = await response.data.data.content;
    return data;
  }
);

export const uploadAvatar = createAsyncThunk(
  'company/upload/avatar',
  async (file) => {
    const formData = new FormData();
    formData.append(
      "file",
      file
    );
    const response = await axios.post(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/company/${id}/upload/avatar`, formData, {headers: {userId: getState().auth.user.data.id}});
    const data = await response.data;
    return data;
  }
);

const jobSlice = createSlice({
  name: 'job/detail',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getCompany.fulfilled]: (state, action) => action.payload,
    [getCompanyRelationships.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [getCompanyFeed.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [getCompanyJobs.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [followCompany.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [unfollowCompany.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
    })
  },
});

export default jobSlice.reducer;
