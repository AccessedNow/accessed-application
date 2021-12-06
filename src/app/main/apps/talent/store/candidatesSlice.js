import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';
import {getMails} from "../../mail/store/mailsSlice";
import {getContacts} from "../../contacts/store/contactsSlice";
import {getUserData} from "../../contacts/store/userSlice";


export const searchCandidates = createAsyncThunk(
  'candidates/search',
  async (params, { getState }) => {
    let user = getState().auth.user.data;
    let filter = _.merge({}, getState().candidatesApp.candidates.filter);
    filter.company = [user.preferredCompany];

    let sort = getState().candidatesApp.candidates.sort;
    let searchText = getState().candidatesApp.candidates.searchText;
    let queryParams = _.merge(sort, {query: searchText});
    queryParams = new URLSearchParams(queryParams);
    const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/candidates/search?${queryParams}`, filter, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);

export const addCandidate = createAsyncThunk(
  'candidates/add',
  async (candidate, { dispatch, getState }) => {
    const response = await axios.post('/api/todo-app/new-todo', candidate);
    const data = await response.data;

    // dispatch(getTodos());

    return data;
  }
);

export const updateCandidate = createAsyncThunk(
  'candidates/update',
  async (candidate, { dispatch, getState }) => {
    const response = await axios.post('/api/todo-app/update-todo', candidate);
    const data = await response.data;

    dispatch(searchCandidates());

    return data;
  }
);

export const removeCandidate = createAsyncThunk(
  'candidates/remove',
  async (candidateId, { dispatch, getState }) => {
    const response = await axios.post('/api/todo-app/remove-todo', candidateId);
    const data = await response.data;

    // dispatch(getTodos());

    return data;
  }
);


export const removeCandidates = createAsyncThunk(
  'contactsApp/contacts/removeContacts',
  async (contactIds, { dispatch, getState }) => {
    await axios.post('/api/contacts-app/remove-contacts', { contactIds });

    return contactIds;
  }
);

export const setPoolOnSelectedCandidates = createAsyncThunk(
  'mailApp/mails/setFolderOnSelectedMails',
  async (id, { dispatch, getState }) => {
    const { selectedMailIds } = getState().mailApp.mails;

    const response = await axios.post('/api/mail-app/set-folder', {
      selectedMailIds,
      folderId: id,
    });
    const data = await response.data;

    dispatch(getMails());

    return data;
  }
);


export const toggleSubscribeCandidate = createAsyncThunk(
  'contactsApp/contacts/toggleStarredContact',
  async (contactId, { dispatch, getState }) => {
    const response = await axios.post('/api/contacts-app/toggle-starred-contact', { contactId });
    const data = await response.data;

    dispatch(getUserData());

    dispatch(getContacts());

    return data;
  }
);


export const toggleSubscribeCandidates = createAsyncThunk(
  'contactsApp/contacts/toggleStarredContacts',
  async (contactIds, { dispatch, getState }) => {
    const response = await axios.post('/api/contacts-app/toggle-starred-contacts', { contactIds });
    const data = await response.data;

    dispatch(getUserData());

    dispatch(getContacts());

    return data;
  }
);

export const setCandidateStarred = createAsyncThunk(
  'contactsApp/contacts/setContactsStarred',
  async (contactIds, { dispatch, getState }) => {
    const response = await axios.post('/api/contacts-app/set-contacts-starred', { contactIds });
    const data = await response.data;

    dispatch(getUserData());

    dispatch(getContacts());

    return data;
  }
);

export const setCandidatesStarred = createAsyncThunk(
  'contactsApp/contacts/setContactsStarred',
  async (contactIds, { dispatch, getState }) => {
    const response = await axios.post('/api/contacts-app/set-contacts-starred', { contactIds });
    const data = await response.data;

    dispatch(getUserData());

    dispatch(getContacts());

    return data;
  }
);

export const setCandidatesUnstarred = createAsyncThunk(
  'contactsApp/contacts/setContactsUnstarred',
  async (contactIds, { dispatch, getState }) => {
    const response = await axios.post('/api/contacts-app/set-contacts-unstarred', { contactIds });
    const data = await response.data;

    dispatch(getUserData());

    dispatch(getContacts());

    return data;
  }
);


const candidatesAdapter = createEntityAdapter({});

export const { selectAll: selectCandidates, selectById: selectCandidatesById } =
  candidatesAdapter.getSelectors((state) => state.candidatesApp.candidates);

const candidatesSlice = createSlice({
  name: 'talent/candidates',
  initialState: candidatesAdapter.getInitialState({
    searchText: '',
    orderBy: '',
    orderDescending: false,
    totalPage: 0,
    totalElements: 0,
    data: [],
    selectedCandidateIds: [],
    filter: {
      job: null,
      hasApplied: true,
      hasImported: false,
      minYear:0,
      maxYear: 5,
      status: [],
      level: [],
      city: [],
      state: [],
      country: [],
      company: [],
      employmentType: [],
      industry: [],
      tags: [],
      skills: [],
      stages: [],
      sources: []
    },
    sort: {
      page: 0,
      size: 20,
      sortBy: 'createdDate',
      direction: 'DESC'
    },
    candidateDialog: {
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
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    selectAllCandidates: (state, action) => {
      state.selectedCandidateIds = state.ids;
    },
    deselectAllCandidates: (state, action) => {
      state.selectedCandidateIds = [];
    },
    selectCandidatesByParameter: (state, action) => {
      const [parameter, value] = action.payload;
      state.selectedCandidateIds = state.ids.filter((id) => state.entities[id][parameter] === value);
    },
    toggleInSelectedCandidates: (state, action) => {
      const candidateId = action.payload;
      state.selectedCandidateIds = state.selectedCandidateIds.includes(candidateId)
        ? state.selectedCandidateIds.filter((id) => id !== candidateId)
        : [...state.selectedCandidateIds, candidateId];
    },
    openCandidateDialog: (state, action) => {
      state.candidateDialog = {
        type: 'edit',
        props: {
          open: true,
        },
        data: action.payload,
      };
    },
    closeCandidateDialog: (state, action) => {
      state.candidateDialog = {
        type: 'edit',
        props: {
          open: false,
        },
        data: null,
      };
    },
    openNewCandidateDialog: (state, action) => {
      state.candidateDialog = {
        type: 'new',
        props: {
          open: true,
        },
        data: null,
      };
    },
    closeNewCandidateDialog: (state, action) => {
      state.candidateDialog = {
        type: 'new',
        props: {
          open: false,
        },
        data: null,
      };
    },
    openEditCandidateDialog: (state, action) => {
      state.candidateDialog = {
        type: 'edit',
        props: {
          open: true,
        },
        data: action.payload,
      };
    },
    closeEditCandidateDialog: (state, action) => {
      state.candidateDialog = {
        type: 'edit',
        props: {
          open: false,
        },
        data: null,
      };
    },
  },
  extraReducers: {
    [updateCandidate.fulfilled]: candidatesAdapter.upsertOne,
    [addCandidate.fulfilled]: candidatesAdapter.addOne,
    [searchCandidates.fulfilled]: (state, action) => {

      const { payload, routeParams } = action;
      if(payload.content){
        state.selectedItem = payload.content[0]
      }

      candidatesAdapter.setAll(state, payload.content);
      state.data = action.payload.content;
      state.totalPages = action.payload.totalPages;
      state.totalElements = action.payload.totalElements;

    }
  },
});

export const {
  toggleOrderDescending,
  changeOrder,
  selectAllCandidates,
  deselectAllCandidates,
  selectCandidatesByParameter,
  toggleInSelectedCandidates,
  openCandidateDialog,
  closeCandidateDialog,
  openNewCandidateDialog,
  closeNewCandidateDialog,
  openEditCandidateDialog,
  closeEditCandidateDialog,
  setSearchText,
  setFilter } = candidatesSlice.actions;

export default candidatesSlice.reducer;
