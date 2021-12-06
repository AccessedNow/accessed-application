import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';
import {searchCandidates} from "./candidatesSlice";
import {addContact} from "../../contacts/store/contactsSlice";


export const searchMembers = createAsyncThunk(
  'members/search',
  async (searchText, { getState }) => {
    let user = getState().auth.user.data;
    const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/members?${searchText}`, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);

export const getCompanyInvites = createAsyncThunk(
  'company/invites',
  async ({ getState }) => {
    let user = getState().auth.user.data;
    const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/members/invites?`, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);

export const inviteMembers = createAsyncThunk(
  'members/invite',
  async (form, { dispatch, getState }) => {
    delete form.id;
    let user = getState().auth.user.data;
    const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/members`, form, {headers: {userId: user.id}});
    const data = await response.data;

    // dispatch(getTodos());

    return data;
  }
);



export const deleteMember = createAsyncThunk(
  'members/delete',
  async (id, { getState }) => {
    let user = getState().auth.user.data;
    const response = await axios.delete(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/members/${id}`, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);

export const updateMember = createAsyncThunk(
  'members/update',
  async (member, { dispatch, getState }) => {
    const response = await axios.post('/api/todo-app/update-todo', member);
    const data = await response.data;

    dispatch(searchMembers());

    return data;
  }
);

export const removeMember = createAsyncThunk(
  'members/remove',
  async (memberId, { dispatch, getState }) => {
    const response = await axios.post('/api/todo-app/remove-todo', memberId);
    const data = await response.data;

    // dispatch(getTodos());

    return data;
  }
);


const membersAdapter = createEntityAdapter({
  selectId: member => member._id
})

export const { selectAll: selectMembers, selectById: selectMembersById } =
  membersAdapter.getSelectors((state) => state.membersApp.members);


const membersSlice = createSlice({
  name: 'talent/members',
  initialState: membersAdapter.getInitialState({
    searchText: '',
    data: [],
    roles: [],
    memberDialog: {
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
    setRoles: (state, action) => {
      state.roles = [];
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    selectAllMembers: (state, action) => {
      state.selectedMemberIds = state.ids;
    },
    deselectAllMembers: (state, action) => {
      state.selectedMemberIds = [];
    },
    selectMembersByParameter: (state, action) => {
      const [parameter, value] = action.payload;
      state.selectedMemberIds = state.ids.filter((id) => state.entities[id][parameter] === value);
    },
    toggleInSelectedMembers: (state, action) => {
      const memberId = action.payload;
      state.selectedMemberIds = state.selectedMemberIds.includes(memberId)
        ? state.selectedMemberIds.filter((id) => id !== memberId)
        : [...state.selectedMemberIds, memberId];
    },
    openMemberDialog: (state, action) => {
      state.memberDialog = {
        type: 'edit',
        props: {
          open: true,
        },
        data: action.payload,
      };
    },
    closeMemberDialog: (state, action) => {
      state.memberDialog = {
        type: 'edit',
        props: {
          open: false,
        },
        data: null,
      };
    },
    openNewMemberDialog: (state, action) => {
      state.memberDialog = {
        type: 'new',
        props: {
          open: true,
        },
        data: null,
      };
    },
    closeNewMemberDialog: (state, action) => {
      state.memberDialog = {
        type: 'new',
        props: {
          open: false,
        },
        data: null,
      };
    },
    openEditMemberDialog: (state, action) => {
      state.memberDialog = {
        type: 'edit',
        props: {
          open: true,
        },
        data: action.payload,
      };
    },
    closeEditMemberDialog: (state, action) => {
      state.memberDialog = {
        type: 'edit',
        props: {
          open: false,
        },
        data: null,
      };
    },
  },
  extraReducers: {
    [updateMember.fulfilled]: membersAdapter.upsertOne,
    [deleteMember.fulfilled]: membersAdapter.removeOne,
    [searchMembers.fulfilled]: (state, action) => {

      const { payload, routeParams } = action;
      if(payload.content){
        state.selectedItem = payload.content[0]
      }

      membersAdapter.setAll(state, action.payload);
      state.data = action.payload;

    }
  },
});

export const {
  toggleOrderDescending,
  changeOrder,
  selectAllMembers,
  deselectAllMembers,
  selectMembersByParameter,
  toggleInSelectedMembers,
  openMemberDialog,
  closeMemberDialog,
  openNewMemberDialog,
  closeNewMemberDialog,
  openEditMemberDialog,
  closeEditMemberDialog,
  setRoles,
  setSearchText,
  setFilter } = membersSlice.actions;

export default membersSlice.reducer;
