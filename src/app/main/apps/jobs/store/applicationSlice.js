import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';

export const apply = createAsyncThunk(
  'scrumboardApp/card/updateCard',
  async ({ boardId, card }, { dispatch }) => {
    const response = await axios.post('/api/scrumboard-app/card/update', {
      boardId,
      card,
    });

    const data = await response.data;

    dispatch(
      showMessage({
        message: 'Card Saved',
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })
    );

    return data;
  }
);


const applicationSlice = createSlice({
  name: 'application/dialog',
  initialState: {
    dialogOpen: false,
    data: null,
  },
  reducers: {
    openDialog: (state, action) => {
      state.dialogOpen = true;
      state.data = action.payload;
    },
    closeDialog: (state, action) => {
      state.dialogOpen = false;
      state.data = null;
    },
  },
  extraReducers: {
    [apply.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { openDialog, closeDialog } = applicationSlice.actions;

export default applicationSlice.reducer;
