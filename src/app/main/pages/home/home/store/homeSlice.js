import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import queryString from 'query-string';
import _ from 'lodash';
import ApiClient from '../../../../../services/apiManager';
import {getContacts} from "../../../../apps/contacts/store/contactsSlice";

export const getHomeFeeds = createAsyncThunk(
  'home/feeds',
  async (params, { getState }) => {
    const user = getState().auth.user;
    const pagination = getState().homePage.home.pagination;
    const searchText = getState().homePage.home.searchText;

    let queryParams = _.cloneDeep(pagination);
    queryParams.query= searchText?searchText:'';
    queryParams.page = queryParams.page==0?queryParams.page:queryParams.page--;
    queryParams = new URLSearchParams(queryParams);
    const response = await axios.get(`http://localhost:5000/api/feeds/latest?${queryParams}`, {headers: {userId: user.data.id}});
    // const response = await ApiClient.get(`http://localhost:5000/api/feeds/latest?${queryParams}`);
    const data = await response.data.data;

    return data;
  }
);


export const addArticle = createAsyncThunk(
  'contactsApp/contacts/addContact',
  async (contact, { dispatch, getState }) => {
    const response = await axios.post('/api/contacts-app/add-contact', { contact });
    const data = await response.data;

    dispatch(getContacts());

    return data;
  }
);

export const updateArticle = createAsyncThunk(
  'contactsApp/contacts/updateContact',
  async (contact, { dispatch, getState }) => {
    const response = await axios.post('/api/contacts-app/update-contact', { contact });
    const data = await response.data;

    dispatch(getContacts());

    return data;
  }
);

export const removeArticle = createAsyncThunk(
  'contactsApp/contacts/removeContact',
  async (contactId, { dispatch, getState }) => {
    await axios.post('/api/contacts-app/remove-contact', { contactId });

    return contactId;
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


const homeAdapter = createEntityAdapter({});

export const { selectAll: selectActivities, selectById: selectActivitiesById } = homeAdapter.getSelectors(
  function(state) {
    return state.homePage.home
  }
);

const homeSlice = createSlice({
  name: 'user/activities',
  initialState: homeAdapter.getInitialState({
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
    articleDialog: {
      type: 'new',
      props: {
        open: false,
      },
      data: null,
    },
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
    openNewArticleDialog: (state, action) => {
      state.articleDialog = {
        type: 'new',
        props: {
          open: true,
        },
        data: null,
      };
    },
    closeNewArticleDialog: (state, action) => {
      state.articleDialog = {
        type: 'new',
        props: {
          open: false,
        },
        data: null,
      };
    },
    openEditArticleDialog: (state, action) => {
      state.articleDialog = {
        type: 'edit',
        props: {
          open: true,
        },
        data: action.payload,
      };
    },
    closeEditArticleDialog: (state, action) => {
      state.articleDialog = {
        type: 'edit',
        props: {
          open: false,
        },
        data: null,
      };
    },
  },
  extraReducers: {
    [addArticleComment.fulfilled]: homeAdapter.upsertOne,
    [saveArticle.fulfilled]: homeAdapter.upsertOne,
    [getHomeFeeds.fulfilled]: (state, action) => {
      state.data = action.payload.content;
      state.totalPages = action.payload.totalPages;
      state.totalElements = action.payload.totalElements;

    },
  },
});

export const {
  setLoading,
  setPagination,
  setSearchText,
  openNewArticleDialog,
  closeNewArticleDialog,
  openEditArticleDialog,
  closeEditArticleDialog,
} = homeSlice.actions;

export default homeSlice.reducer;
