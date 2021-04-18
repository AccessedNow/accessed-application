import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import jobService from 'app/services/jobService';
import { getUserData } from './userSlice';

export const getContacts = createAsyncThunk('jobSearchPage/contacts/getContacts', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().jobSearchPage.contacts.routeParams;
	// const response = await axios.get('/api/contacts-app/contacts', {
	// 	params: routeParams
	// });
	// const data = await response.data;
	// return { data, routeParams };
  const data = await jobService.searchJobs({query: '', page: 0, size: 10, sort: 'createdDate', direction: 'DESC'});
	return data;
});

export const addContact = createAsyncThunk(
	'jobSearchPage/contacts/addContact',
	async (contact, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/add-contact', { contact });
		const data = await response.data;

		dispatch(getContacts());

		return data;
	}
);

export const updateContact = createAsyncThunk(
	'jobSearchPage/contacts/updateContact',
	async (contact, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/update-contact', { contact });
		const data = await response.data;

		dispatch(getContacts());

		return data;
	}
);

export const removeContact = createAsyncThunk(
	'jobSearchPage/contacts/removeContact',
	async (contactId, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/remove-contact', { contactId });
		const data = await response.data;
		dispatch(getContacts());

		return data;
	}
);

export const removeContacts = createAsyncThunk(
	'jobSearchPage/contacts/removeContacts',
	async (contactIds, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/remove-contacts', { contactIds });
		const data = await response.data;

		dispatch(getContacts());

		return data;
	}
);

export const toggleStarredContact = createAsyncThunk(
	'jobSearchPage/contacts/toggleStarredContact',
	async (contactId, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/toggle-starred-contact', { contactId });
		const data = await response.data;

		dispatch(getUserData());

		dispatch(getContacts());

		return data;
	}
);

export const toggleStarredContacts = createAsyncThunk(
	'jobSearchPage/contacts/toggleStarredContacts',
	async (contactIds, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/toggle-starred-contacts', { contactIds });
		const data = await response.data;

		dispatch(getUserData());

		dispatch(getContacts());

		return data;
	}
);

export const setContactsStarred = createAsyncThunk(
	'jobSearchPage/contacts/setContactsStarred',
	async (contactIds, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/set-contacts-starred', { contactIds });
		const data = await response.data;

		dispatch(getUserData());

		dispatch(getContacts());

		return data;
	}
);

export const setContactsUnstarred = createAsyncThunk(
	'jobSearchPage/contacts/setContactsUnstarred',
	async (contactIds, { dispatch, getState }) => {
		const response = await axios.post('/api/contacts-app/set-contacts-unstarred', { contactIds });
		const data = await response.data;

		dispatch(getUserData());

		dispatch(getContacts());

		return data;
	}
);

const contactsAdapter = createEntityAdapter({
  selectId: (result) => result.jobId,
});

export const { selectAll: selectContacts, selectById: selectContactsById } = contactsAdapter.getSelectors(
	state => state.jobSearchPage.contacts
);

const contactsSlice = createSlice({
	name: 'jobSearchPage/contacts',
	initialState: contactsAdapter.getInitialState({
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
		setContactsSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
		openNewContactDialog: (state, action) => {
			state.contactDialog = {
				type: 'new',
				props: {
					open: true
				},
				data: null
			};
		},
		closeNewContactDialog: (state, action) => {
			state.contactDialog = {
				type: 'new',
				props: {
					open: false
				},
				data: null
			};
		},
		openEditContactDialog: (state, action) => {
			state.contactDialog = {
				type: 'edit',
				props: {
					open: true
				},
				data: action.payload
			};
		},
		closeEditContactDialog: (state, action) => {
			state.contactDialog = {
				type: 'edit',
				props: {
					open: false
				},
				data: null
			};
		}
	},
	extraReducers: {
		[updateContact.fulfilled]: contactsAdapter.upsertOne,
		[addContact.fulfilled]: contactsAdapter.addOne,
		[getContacts.fulfilled]: (state, action) => {
			const data = action.payload;
			contactsAdapter.setAll(state, data.content);
			// state.routeParams = routeParams;
			state.totalPages = data.totalPages;
			state.totalElements = data.totalElements;
			state.number = data.number;
			state.size = data.size;

			state.searchText = '';
		}
	}
});

export const {
	setContactsSearchText,
	openNewContactDialog,
	closeNewContactDialog,
	openEditContactDialog,
	closeEditContactDialog
} = contactsSlice.actions;

export default contactsSlice.reducer;
