import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import hrService from 'app/services/hrService';
import {getContacts} from "./contactsSlice";


export const searchApplications = createAsyncThunk('talent/job/getApplications', async (routeParams) => {
  const data = await hrService.searchApplications(routeParams.id, {query: '', page: 0, size: 10, sort: 'createdDate', direction: 'DESC'});
  return { data, routeParams };
});

const applicationsAdapter = createEntityAdapter({
  selectId: (result) => result.applicationId,
});

export const {
  selectAll: selectFiles,
  selectEntities: selectFilesEntities,
  selectById: selectFileById
} = applicationsAdapter.getSelectors(state => {
  return state.jobWorkflowPage.applications
});

const applicationsSearchSlice = createSlice({
  name: 'job/getApplications',
  initialState: applicationsAdapter.getInitialState({
    searchText: '',
    routeParams: {},
    contactDialog: {
      type: 'new',
      props: {
        open: false
      },
      data: null
    }
  }),
  reducers: {
  },
  extraReducers: {
    [searchApplications.fulfilled]: (state, action) => {
      const { data, routeParams } = action.payload;
      applicationsAdapter.setAll(state, data);
      state.routeParams = routeParams;
      state.searchText = '';
    }
  }
});

export const { setSelectedItem } = applicationsSearchSlice.actions;

export default applicationsSearchSlice.reducer;
