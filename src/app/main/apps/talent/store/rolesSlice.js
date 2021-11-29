import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';
import {searchCandidates} from "./candidatesSlice";


export const getCompanyRoles = createAsyncThunk(
  'company/roles',
  async (all, { getState }) => {
    let user = getState().auth.user.data;
    const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/roles?all=${all}`, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);

export const addRole = createAsyncThunk(
  'roles/invite',
  async (form, { dispatch, getState }) => {
    let user = getState().auth.user.data;
    const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/roles`, form, {headers: {userId: user.id}});
    const data = await response.data;

    // dispatch(getTodos());

    return data;
  }
);



export const deleteRole= createAsyncThunk(
  'roles/delete',
  async (id, { getState }) => {
    let user = getState().auth.user.data;
    const response = await axios.delete(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/roles/${id}`, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);

export const updateRole = createAsyncThunk(
  'roles/update',
  async (role, { dispatch, getState }) => {
    const response = await axios.post('/api/todo-app/update-todo', role);
    const data = await response.data;

    dispatch(searchRoles());

    return data;
  }
);


const rolesAdapter = createEntityAdapter({
  selectId: role => role._id
})

export const { selectAll: selectRoles, selectById: selectRolesById } =
  rolesAdapter.getSelectors((state) => state.rolesApp.roles);


const rolesSlice = createSlice({
  name: 'company/roles',
  initialState: rolesAdapter.getInitialState({
    searchText: '',
    data: [],
    selectedRoleIds: [],
    roleDialog: {
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
    selectAllRoles: (state, action) => {
      state.selectedRoleIds = state.ids;
    },
    deselectAllRoles: (state, action) => {
      state.selectedRoleIds = [];
    },
    selectRolesByParameter: (state, action) => {
      const [parameter, value] = action.payload;
      state.selectedRoleIds = state.ids.filter((id) => state.entities[id][parameter] === value);
    },
    toggleInSelectedRoles: (state, action) => {
      const roleId = action.payload;
      state.selectedRoleIds = state.selectedRoleIds.includes(roleId)
        ? state.selectedRoleIds.filter((id) => id !== roleId)
        : [...state.selectedRoleIds, roleId];
    },
    openRoleDialog: (state, action) => {
      state.roleDialog = {
        type: 'edit',
        props: {
          open: true,
        },
        data: action.payload,
      };
    },
    closeRoleDialog: (state, action) => {
      state.roleDialog = {
        type: 'edit',
        props: {
          open: false,
        },
        data: null,
      };
    },
    openNewRoleDialog: (state, action) => {
      state.roleDialog = {
        type: 'new',
        props: {
          open: true,
        },
        data: null,
      };
    },
    closeNewRoleDialog: (state, action) => {
      state.roleDialog = {
        type: 'new',
        props: {
          open: false,
        },
        data: null,
      };
    },
    openEditRoleDialog: (state, action) => {
      state.roleDialog = {
        type: 'edit',
        props: {
          open: true,
        },
        data: action.payload,
      };
    },
    closeEditRoleDialog: (state, action) => {
      state.roleDialog = {
        type: 'edit',
        props: {
          open: false,
        },
        data: null,
      };
    },
  },
  extraReducers: {
    [updateRole.fulfilled]: rolesAdapter.upsertOne,
    [deleteRole.fulfilled]: rolesAdapter.removeOne,
    [getCompanyRoles.fulfilled]: (state, action) => {
      const { payload, routeParams } = action;
      rolesAdapter.setAll(state, action.payload);
      state.data = action.payload;

    }
  },
});

export const {
  toggleOrderDescending,
  changeOrder,
  selectAllRoles,
  deselectAllRoles,
  selectRolesByParameter,
  toggleInSelectedRoles,
  openRoleDialog,
  closeRoleDialog,
  openNewRoleDialog,
  closeNewRoleDialog,
  openEditRoleDialog,
  closeEditRoleDialog,
  setSearchText,
  setFilter } = rolesSlice.actions;

export default rolesSlice.reducer;
