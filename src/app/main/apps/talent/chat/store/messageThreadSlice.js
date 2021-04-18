import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import messageService from 'app/services/messageService';


export const getUserThreads = createAsyncThunk('user/getThreads', async params => {
	console.log('getUserThreads', params)
	let id = params.id;
	let page = params.page?params.page:0;
	let size= params.size?params.size:10;
	let sort = params.sort?params.sort:'createdDate';
  const response = await messageService.getUserThreads(id, page, size, sort);
  updateUserChatList(response);
  return response;
});


export const getUserData = createAsyncThunk('chatApp/user/getUserData', async () => {
	const response = await axios.get('/api/chat/user');
	const data = await response.data;
	return data;
});

export const updateUserData = createAsyncThunk('chatApp/user/updateUserData', async newData => {
	const response = await axios.post('/api/chat/user/data', newData);
	const data = await response.data;

	return data;
});

const messageSlice = createSlice({
	name: 'chatApp/user',
	initialState: null,
	reducers: {
		updateUserChatList: (state, action) => {
			state.chatList = action.payload;
		}
	},
	extraReducers: {
    [getUserThreads.fulfilled]: (state, action) => action.payload
	}
});

export const { updateUserChatList } = messageSlice.actions;

export default messageSlice.reducer;
