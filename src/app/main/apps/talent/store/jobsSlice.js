import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getJobs = createAsyncThunk(
  'job/getJobs',
  async (routeParams, { getState }) => {
    routeParams = routeParams || getState().todoApp.todos.routeParams;
    const response = await axios.get('/api/todo-app/todos', {
      params: routeParams,
    });
    const data = await response.data;

    return { data, routeParams };
  }
);

export const getJob = createAsyncThunk('job/detail', async (params) => {
  const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/${params.id}` );
  const data = await response.data.data;
  return data;
});


export const addJob = createAsyncThunk(
  'job/addJob',
  async (todo, { dispatch, getState }) => {
    const response = await axios.post('/api/todo-app/new-todo', todo);
    const data = await response.data;

    dispatch(getTodos());

    return data;
  }
);

export const updateJob = createAsyncThunk(
  'job/updateJob',
  async (todo, { dispatch, getState }) => {
    const response = await axios.post('/api/todo-app/update-todo', todo);
    const data = await response.data;

    dispatch(getTodos());

    return data;
  }
);

export const removeJob = createAsyncThunk(
  'job/removeJob',
  async (todoId, { dispatch, getState }) => {
    const response = await axios.post('/api/todo-app/remove-todo', todoId);
    const data = await response.data;

    dispatch(getTodos());

    return data;
  }
);

const jobsAdapter = createEntityAdapter({});

export const { selectAll: selectJobs, selectById: selectJobsById } = todosAdapter.getSelectors(
  (state) => state.jobSearch.jobs
);

const jobsSlice = createSlice({
  name: 'jobSearch/jobs',
  initialState: jobsAdapter.getInitialState({
    searchText: '',
    orderBy: '',
    orderDescending: false,
    routeParams: {},
    applyDialog: {
      type: 'new',
      props: {
        open: false,
      },
      data: null,
    },
    job: {
      detail: null
    }
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
    toggleOrderDescending: (state, action) => {
      state.orderDescending = !state.orderDescending;
    },
    changeOrder: (state, action) => {
      state.orderBy = action.payload;
    },
    setNewJob: (state, action) => {
      state.job = {
        detail: null,
      };
    },
    setEditJob: (state, action) => {
      state.todoDialog = {
        props: {
          open: true,
        },
        data: action.payload,
      };
    },
    closeEditTodoDialog: (state, action) => {
      state.todoDialog = {
        type: 'edit',
        props: {
          open: false,
        },
        data: null,
      };
    },
  },
  extraReducers: {
    [updateTodo.fulfilled]: todosAdapter.upsertOne,
    [addTodo.fulfilled]: todosAdapter.addOne,
    [getTodos.fulfilled]: (state, action) => {
      const { data, routeParams } = action.payload;
      todosAdapter.setAll(state, data);
      state.routeParams = routeParams;
      state.searchText = '';
    },
  },
});

export const {
  setTodosSearchText,
  setFilter,
  toggleOrderDescending,
  changeOrder,
  openNewTodoDialog,
  closeNewTodoDialog,
  openEditTodoDialog,
  closeEditTodoDialog,
} = todosSlice.actions;

export default todosSlice.reducer;
