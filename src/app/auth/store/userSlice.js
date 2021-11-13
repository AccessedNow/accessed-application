/* eslint import/no-extraneous-dependencies: off */
import axios from 'axios';
import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import history from '@history';
import _ from '@lodash';
import { setInitialSettings, setDefaultSettings } from 'app/store/fuse/settingsSlice';
import { showMessage } from 'app/store/fuse/messageSlice';
import auth0Service from 'app/services/auth0Service';
import firebaseService from 'app/services/firebaseService';
import jwtService from 'app/services/jwtService';
import { authRoles } from 'app/auth';

import {
  setNavigation,
  resetNavigation,
} from 'app/store/fuse/navigationSlice';


export const getTalentUser = createAsyncThunk('user/talent', async (params) => {
  const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/session?company=${params.company}`, {headers: {userId: params.id}} );
  const data = await response.data.data;

  return data === undefined ? null : data;
});

export const setUserDataAuth0 = (tokenData) => async (dispatch) => {
  const user = {
    role: ['admin'],
    from: 'auth0',
    data: {
      displayName: tokenData.username || tokenData.name,
      photoURL: tokenData.picture,
      email: tokenData.email,
      settings:
        tokenData.user_metadata && tokenData.user_metadata.settings
          ? tokenData.user_metadata.settings
          : {},
      shortcuts:
        tokenData.user_metadata && tokenData.user_metadata.shortcuts
          ? tokenData.user_metadata.shortcuts
          : [],
    },
  };

  return dispatch(setUserData(user));
};

export const setUserDataFirebase = (user, authUser) => async (dispatch) => {
  if (
    user &&
    user.data &&
    user.data.settings &&
    user.data.settings.theme &&
    user.data.settings.layout &&
    user.data.settings.layout.style
  ) {
    // Set user data but do not update
    return dispatch(setUserData(user));
  }

  // Create missing user settings
  return dispatch(createUserSettingsFirebase(authUser));
};

export const createUserSettingsFirebase = (authUser) => async (dispatch, getState) => {
  const guestUser = getState().auth.user;
  const fuseDefaultSettings = getState().fuse.settings.defaults;
  const { currentUser } = firebase.auth();

  /**
   * Merge with current Settings
   */
  const user = _.merge({}, guestUser, {
    uid: authUser.uid,
    from: 'firebase',
    role: ['admin'],
    data: {
      displayName: authUser.displayName,
      email: authUser.email,
      settings: { ...fuseDefaultSettings },
    },
  });
  currentUser.updateProfile(user.data);

  dispatch(updateUserData(user));

  return dispatch(setUserData(user));
};

export const setUserData = (user) => async (dispatch, getState) => {
  /*
        You can redirect the logged-in user to a specific route depdispatch(setNavigation([
            {
                'id'      : 'auth',
                'title'   : 'Auth',
                'type'    : 'group',
                'icon'    : 'apps',
                'children': [
                    {
                        'id'   : 'login',
                        'title': 'Login',
                        'type' : 'item',
                        'url'  : '/login',
                        auth   : authRoles.onlyGuest,
                        'icon' : 'lock'
                    },
                    {
                        'id'   : 'register',
                        'title': 'Register',
                        'type' : 'item',
                        'url'  : '/register',
                        auth   : authRoles.onlyGuest,
                        'icon' : 'person_add'
                    },
                ]
            }
        ]));ending on his role
         */



  dispatch(setNavigation([
    {
      'id': 'auth',
      'title': 'Auth',
      'type': 'group',
      'icon': 'apps',
      'children': [
        {
          'id': 'dashboard',
          'title': 'Dashboard',
          'type': 'item',
          'url': '/talent/dashboard',
          auth: authRoles.admin,
          'icon': 'lock'
        },
        {
          'id': 'jobs',
          'title': 'Jobs',
          'type': 'item',
          'url': '/talent/jobs',
          auth: authRoles.admin,
          'icon': 'lock'
        },
        {
          'id': 'candidates',
          'title': 'Candidates',
          'type': 'item',
          'url': '/talent/candidates',
          auth: authRoles.admin,
          'icon': 'lock'
        },
        {
          'id': 'settings',
          'title': 'Settings',
          'type': 'item',
          'url': '/settings',
          auth: authRoles.admin,
          'icon': 'lock'
        },
      ]
    }
  ]));

  history.location.state = {
    redirectUrl: user.role === 'admin' ? 'talent/dashboard' : '', // for example 'apps/academy'
  };

  /*
    Set User Settings
     */

  const settings = {
    layout: {
      style: 'layout1',
      config: {
        scroll: 'content',
        navbar: {
          display: true,
          folded: true,
          position: 'left'
        },
        toolbar: {
          display: true,
          style: 'fixed',
          position: 'below'
        },
        footer: {
          display: false,
          style: 'fixed',
          position: 'below'
        },
        mode: 'fullwidth'
      }
    },
    customScrollbars: true,
    theme: {
      main: 'accessed',
      navbar: 'accessed',
      toolbar: 'accessed',
      footer: 'defaultDark'
    }
  };


  // dispatch(setDefaultSettings(user.data.settings));
  dispatch(setDefaultSettings(settings));

  user.data.preferredCompany = user.data.preferredCompany?user.data.preferredCompany:user.data.company.length?user.data.company[0].companyId:null
  dispatch(setUser(user));
};

export const updateUserSettings = (settings) => async (dispatch, getState) => {
  const oldUser = getState().auth.user;
  const user = _.merge({}, oldUser, { data: { settings } });

  dispatch(updateUserData(user));

  return dispatch(setUserData(user));
};

export const updateUserShortcuts = (shortcuts) => async (dispatch, getState) => {
  const { user } = getState().auth;
  const newUser = {
    ...user,
    data: {
      ...user.data,
      shortcuts,
    },
  };

  dispatch(updateUserData(newUser));

  return dispatch(setUserData(newUser));
};

export const logoutUser = () => async (dispatch, getState) => {
  const { user } = getState().auth;

  if (!user.role || user.role.length === 0) {
    // is guest
    return null;
  }

  history.push({
    pathname: '/',
  });

  switch (user.from) {
    case 'firebase': {
      firebaseService.signOut();
      break;
    }
    case 'auth0': {
      auth0Service.logout();
      break;
    }
    default: {
      jwtService.logout();
    }
  }

  dispatch(setInitialSettings());

  return dispatch(userLoggedOut());
};

export const updateUserData = (user) => async (dispatch, getState) => {
  if (!user.role || user.role.length === 0) {
    // is guest
    return;
  }
  switch (user.from) {
    case 'firebase': {
      firebaseService
        .updateUserData(user)
        .then(() => {
          dispatch(showMessage({ message: 'User data saved to firebase' }));
        })
        .catch((error) => {
          dispatch(showMessage({ message: error.message }));
        });
      break;
    }
    case 'auth0': {
      auth0Service
        .updateUserData({
          settings: user.data.settings,
          shortcuts: user.data.shortcuts,
        })
        .then(() => {
          dispatch(showMessage({ message: 'User data saved to auth0' }));
        })
        .catch((error) => {
          dispatch(showMessage({ message: error.message }));
        });
      break;
    }
    default: {
      jwtService
        .updateUserData(user)
        .then(() => {
          dispatch(showMessage({ message: 'User data saved with api' }));
        })
        .catch((error) => {
          dispatch(showMessage({ message: error.message }));
        });
      break;
    }
  }
};

const initialState = {
  role: [], // guest
  data: {
    id: 5,
    displayName: 'John Doe',
    firstName: 'John',
    lastName: 'Doe',
    photoURL: 'assets/images/avatars/Velazquez.jpg',
    email: 'guest@accessed.co',
    shortcuts: ['calendar', 'mail', 'contacts', 'todo'],
    preferredCompany: 25
  },
  // data: {
  //   shortcuts: [],
  // },
};

const userSlice = createSlice({
  name: 'auth/user',
  initialState,
  reducers: {
    setUser: (state, action) => action.payload,
    userLoggedOut: (state, action) => initialState,
    setPreferredCompany: (state, action) => {
      state.data.preferredCompany = action.payload;
    },
  },
  extraReducers: {},
});

export const { setUser, userLoggedOut, setPreferredCompany } = userSlice.actions;

export default userSlice.reducer;
