import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContacts = createAsyncThunk('contactsApp/contacts/getContacts', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().contactsApp.contacts.routeParams;
	const response = await axios.get('/api/contacts-app/contacts', {
		params: routeParams
	});
	const data = await response.data;

	return { data, routeParams };
});

export const addCompany = createAsyncThunk(
	'contactsApp/contacts/addContact',
	async (contact, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/add-contact', { contact });
		const data = await response.data;

		dispatch(getContacts());

		return data;
	}
);

export const updateCompany = createAsyncThunk(
	'settings/company/updateCompany',
	async (contact, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/update-contact', { contact });
		const data = await response.data;

		dispatch(getContacts());

		return data;
	}
);

export const addAddress = createAsyncThunk(
  'settings/company/addAddress',
  async (contact, { dispatch, getState }) => {
    const response = await axios.post('/api/contacts-app/add-contact', { contact });
    const data = await response.data;

    dispatch(getContacts());

    return data;
  }
);

export const updateAddress = createAsyncThunk(
  'settings/company/updateAddress',
  async (contact, { dispatch, getState }) => {
    const response = await axios.post('/api/contacts-app/update-contact', { contact });
    const data = await response.data;

    dispatch(getContacts());

    return data;
  }
);

export const removeCompany = createAsyncThunk(
	'contactsApp/contacts/removeContact',
	async (contactId, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/remove-contact', { contactId });
		const data = await response.data;
		dispatch(getContacts());

		return data;
	}
);

export const removeContacts = createAsyncThunk(
	'contactsApp/contacts/removeContacts',
	async (contactIds, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/remove-contacts', { contactIds });
		const data = await response.data;

		dispatch(getContacts());

		return data;
	}
);

export const removeAddress = createAsyncThunk(
  'settings/company/removeAddress',
  async (contactId, { dispatch, getState }) => {
    const response = await axios.post('/api/contacts-app/remove-contact', { contactId });
    const data = await response.data;
    dispatch(getContacts());

    return data;
  }
);

export const toggleStarredContact = createAsyncThunk(
	'contactsApp/contacts/toggleStarredContact',
	async (contactId, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/toggle-starred-contact', { contactId });
		const data = await response.data;

		// dispatch(data());

		dispatch(getContacts());

		return data;
	}
);

export const toggleStarredContacts = createAsyncThunk(
	'contactsApp/contacts/toggleStarredContacts',
	async (contactIds, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/toggle-starred-contacts', { contactIds });
		const data = await response.data;


		dispatch(getContacts());

		return data;
	}
);

export const setContactsStarred = createAsyncThunk(
	'contactsApp/contacts/setContactsStarred',
	async (contactIds, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/set-contacts-starred', { contactIds });
		const data = await response.data;


		dispatch(getContacts());

		return data;
	}
);

export const setContactsUnstarred = createAsyncThunk(
	'contactsApp/contacts/setContactsUnstarred',
	async (contactIds, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/set-contacts-unstarred', { contactIds });
		const data = await response.data;


		dispatch(getContacts());

		return data;
	}
);

const contactsAdapter = createEntityAdapter({});

export const { selectAll: selectCompanies, selectById: selectCompanyById } = contactsAdapter.getSelectors(
	state => state.settingsCompany.company
);

const companySlice = createSlice({
	name: 'settings/company',
	initialState: contactsAdapter.getInitialState({
		searchText: '',
		routeParams: {},
		companyDialog: {
			type: 'new',
			props: {
				open: false
			},
			data: null
		},
    addressDialog: {
      type: 'new',
      props: {
        open: false
      },
      data: null
    }
	}),
	reducers: {
		setCompanySearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
    openNewCompanyDialog: (state, action) => {
      state.companyDialog = {
        type: 'new',
        props: {
          open: true
        },
        data: null
      };
    },
    closeNewCompanyDialog: (state, action) => {
      state.companyDialog = {
        type: 'new',
        props: {
          open: false
        },
        data: null
      };
    },
		openEditCompanyDialog: (state, action) => {
			state.companyDialog = {
				type: 'edit',
				props: {
					open: true
				},
				data: action.payload
			};
		},
		closeEditCompanyDialog: (state, action) => {
			state.companyDialog = {
				type: 'edit',
				props: {
					open: false
				},
				data: null
			};
		},
    openNewAddressDialog: (state, action) => {
      state.addressDialog = {
        type: 'new',
        props: {
          open: true
        },
        data: null
      };
    },
    closeNewAddressDialog: (state, action) => {
      state.addressDialog = {
        type: 'new',
        props: {
          open: false
        },
        data: null
      };
    },
    openEditAddressDialog: (state, action) => {
      state.addressDialog = {
        type: 'edit',
        props: {
          open: true
        },
        data: action.payload
      };
    },
    closeEditAddressDialog: (state, action) => {
      state.addressDialog = {
        type: 'edit',
        props: {
          open: false
        },
        data: null
      };
    },
	},
	extraReducers: {
		[updateCompany.fulfilled]: contactsAdapter.upsertOne,
    [updateAddress.fulfilled]: contactsAdapter.upsertOne,
		[addCompany.fulfilled]: contactsAdapter.addOne,
    [addAddress.fulfilled]: contactsAdapter.addOne,
		[getContacts.fulfilled]: (state, action) => {
			const { data, routeParams } = action.payload;
			contactsAdapter.setAll(state, data);
			state.routeParams = routeParams;
			state.searchText = '';
		}
	}
});

export const {
  setCompanySearchText,
	openNewCompanyDialog,
	closeNewCompanyDialog,
  openEditCompanyDialog,
  closeEditCompanyDialog,
  openNewAddressDialog,
  closeNewAddressDialog,
  openEditAddressDialog,
  closeEditAddressDialog
} = companySlice.actions;

export default companySlice.reducer;
