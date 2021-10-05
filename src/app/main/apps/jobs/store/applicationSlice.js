import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';

export const apply = createAsyncThunk(
  'application/submit',
  async ({ boardId, card }, { dispatch }) => {
    const response = await axios.post('http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/100158/apply/api/scrumboard-app/card/update', {
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

// export const updateCourse = createAsyncThunk(
//   'academyApp/course/updateCourse',
//   async (_data, { getState, dispatch }) => {
//     const { id } = getState().academyApp.course;
//
//     const response = await axios.post('/api/academy-app/course/update', { id, ..._data });
//     const data = await response.data;
//
//     dispatch(showMessage({ message: 'Course Saved' }));
//
//     return data;
//   }
// );




const applicationSlice = createSlice({
  name: 'application/dialog',
  initialState: {
    activeStep: 1,
    dialogOpen: false,
    form: null,
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
    updateStep: (state, action) => {
      state.activeStep = action.payload;
      // state.data = null;
    },
  },
  extraReducers: {
    [apply.fulfilled]: (state, action) => {
      state.data = action.payload;
    }
  },
});

export const { updateStep, openDialog, closeDialog } = applicationSlice.actions;

export default applicationSlice.reducer;
