import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';
import {searchCandidates} from "./candidatesSlice";
import {addContact} from "../../contacts/store/contactsSlice";


export const getCompanyPools = createAsyncThunk(
  'company/pools',
  async (all, { getState }) => {
    let user = getState().auth.user.data;
    const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/pools?all=${all}`, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);

export const addPool = createAsyncThunk(
  'company/pools/add',
  async (form, { dispatch, getState }) => {
    let user = getState().auth.user.data;
    const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/pools`, form, {headers: {userId: user.id}});
    const data = await response.data;

    // dispatch(getTodos());

    return data;
  }
);



export const deletePool= createAsyncThunk(
  'company/pools/delete',
  async (id, { getState }) => {
    let user = getState().auth.user.data;
    const response = await axios.delete(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/pools/${id}`, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);

export const updatePool = createAsyncThunk(
  'company/pools/update',
  async (role, { dispatch, getState }) => {
    const response = await axios.post('/api/todo-app/update-todo', role);
    const data = await response.data;

    dispatch(searchRoles());

    return data;
  }
);


const poolsAdapter = createEntityAdapter({
  selectId: pool => pool._id
})

export const { selectAll: selectPools, selectById: selectPoolsById } =
  poolsAdapter.getSelectors((state) => state.poolsApp.pools);


const poolsSlice = createSlice({
  name: 'company/pools',
  initialState: poolsAdapter.getInitialState({
    searchText: '',
    data: [],
    selectedPoolIds: [],
    poolDialog: {
      type: 'new',
      props: {
        open: false,
      },
      data: null,
    },

  }),
  reducers: {
    setSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({payload: event.target.value || ''}),
    },
    selectAllPools: (state, action) => {
      state.selectedPoolIds = state.ids;
    },
    deselectAllPools: (state, action) => {
      state.selectedPoolIds = [];
    },
    openPoolDialog: (state, action) => {
      state.poolDialog = {
        type: 'edit',
        props: {
          open: true,
        },
        data: action.payload,
      };
    },
    closePoolDialog: (state, action) => {
      state.poolDialog = {
        type: 'edit',
        props: {
          open: false,
        },
        data: null,
      };
    },
  },
  extraReducers: {
    [addPool.fulfilled]: poolsAdapter.addOne,
    [updatePool.fulfilled]: poolsAdapter.upsertOne,
    [deletePool.fulfilled]: poolsAdapter.removeOne,
    [getCompanyPools.fulfilled]: (state, action) => {
      const { payload, routeParams } = action;
      poolsAdapter.setAll(state, action.payload);
      state.data = action.payload;

    }
  },
});

export const {
  toggleOrderDescending,
  changeOrder,
  selectAllPools,
  deselectAllPools,
  openPoolDialog,
  closePoolDialog,
  setSearchText,
} = poolsSlice.actions;

export default poolsSlice.reducer;
