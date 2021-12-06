import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import queryString from 'query-string';
import _ from 'lodash';

export const getUserRecentActivities = createAsyncThunk(
  'getUser/activities',
  async (params, { getState }) => {
    const user = getState().auth.user;
    const pagination = getState().recentActivity.activities.pagination;
    const searchText = getState().recentActivity.activities.searchText;

    let queryParams = _.cloneDeep(pagination);
    queryParams.query= searchText?searchText:'';
    queryParams.page = queryParams.page==0?queryParams.page:queryParams.page--;
    queryParams = new URLSearchParams(queryParams);
    const response = await axios.get(`http://localhost:5000/api/user/${params.username}/recent-activity?${queryParams}`, {headers: {userId: user.data.id}});
    const data = await response.data.data;

    return data;
  }
);

export const addArticleComment = createAsyncThunk(
  'article/comment/add',
  async (params, { dispatch, getState }) => {
    const response = await axios.post(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/feeds/${params.id}/comments`, params.form, {headers: {userId: user.data.id}});
    const data = await response.data;

    // dispatch(getTodos());

    return data;
  }
);


export const saveArticle = createAsyncThunk(
  'article/save',
  async (params, { dispatch, getState }) => {
    const response = await axios.post(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/feeds/${params.id}/save?type=${params.type}`, null, {headers: {userId: user.data.id}});
    const data = await response.data;

    // dispatch(getTodos());

    return data;
  }
);


const activitiesAdapter = createEntityAdapter({});

export const { selectAll: selectActivities, selectById: selectActivitiesById } = activitiesAdapter.getSelectors(
  function(state) {
    return state.activitiesApp.activities
  }
);

const activitiesSlice = createSlice({
  name: 'user/activities',
  initialState: activitiesAdapter.getInitialState({
    data: [],
    loading: true,
    searchText: '',
    totalPage: 0,
    totalElements: 0,
    pagination: {
      page: 0,
      size: 20,
      sortBy: 'createdDate',
      direction: 'DESC'
    },
    routeParams: {}
  }),
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination.query = {
        page: action.payload.page?parseInt(action.payload.page):0,
        size: action.payload.size?parseInt(action.payload.size):20,
        sortyBy: action.payload.sortBy?action.payload.orderBy:'createdDate',
        direction: action.payload.direction?action.payload.direction:'DESC',
      };
    },
  },
  extraReducers: {
    [addArticleComment.fulfilled]: activitiesAdapter.upsertOne,
    [saveArticle.fulfilled]: activitiesAdapter.upsertOne,
    [getUserRecentActivities.fulfilled]: (state, action) => {
      state.data = action.payload.content;
      state.totalPages = action.payload.totalPages;
      state.totalElements = action.payload.totalElements;

    },
  },
});

export const {
  setLoading,
  setPagination,
  setSearchText
} = activitiesSlice.actions;

export default activitiesSlice.reducer;
