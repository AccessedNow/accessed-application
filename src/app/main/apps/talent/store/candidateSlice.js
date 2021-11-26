import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';

export const getCandidate = createAsyncThunk(
  'candidate/detail',
  async (params, {getState}) => {
  let user = getState().auth.user.data;
  const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/candidates/${params.candidateId}`, {headers: {userId: user.id}});

  const data = await response.data.data;

  return data === undefined ? null : data;
});



export const removeCandidate = createAsyncThunk(
  'eCommerceApp/product/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().eCommerceApp.product;
    await axios.post('/api/e-commerce-app/remove-product', { id });

    return id;
  }
);

export const updateCandidate = createAsyncThunk(
  'eCommerceApp/product/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { product } = getState().eCommerceApp;

    const response = await axios.post('/api/e-commerce-app/product/save', {
      ...product,
      ...productData,
    });
    const data = await response.data;

    return data;
  }
);

export const getCandidateSimilar = createAsyncThunk(
  'candidate/notes',
  async (id, { getState }) => {
    let user = getState().auth.user.data;
    const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/candidates/${id}/similar`, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);

export const getCandidateExperiences = createAsyncThunk(
  'candidate/experiences',
  async (id, { getState }) => {
    let user = getState().auth.user.data;
    const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/candidates/${id}/experiences?`, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);


export const getCandidateEducations = createAsyncThunk(
  'candidate/educations',
  async (id, { getState }) => {
    let user = getState().auth.user.data;
    const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/candidates/${id}/educations?`, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);


export const getCandidateResumes = createAsyncThunk(
  'candidate/resumes',
  async (id, { getState }) => {
    let user = getState().auth.user.data;
    const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/candidates/${id}/resumes?`, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);


export const getCandidateNotes = createAsyncThunk(
  'candidate/notes',
  async (id, { getState }) => {
    let user = getState().auth.user.data;
    // let sort = getState().candidatesApp.candidates.sort;
    // let searchText = getState().candidatesApp.candidates.searchText;
    // let queryParams = _.merge(sort, {query: searchText});
    // queryParams = new URLSearchParams(queryParams);
    const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/candidates/${id}/notes?`, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);


export const getCandidateActivities = createAsyncThunk(
  'candidate/activities',
  async (id, { getState }) => {
    let user = getState().auth.user.data;
    // let sort = getState().candidatesApp.candidates.sort;
    // let searchText = getState().candidatesApp.candidates.searchText;
    // let queryParams = _.merge(sort, {query: searchText});
    // queryParams = new URLSearchParams(queryParams);
    const response = await axios.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/candidates/${id}/activities?`, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);

export const addCandidateNote = createAsyncThunk(
  'candidate/notes/add',
  async (note, { getState }) => {
    let user = getState().auth.user.data;
    const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/candidates/${note.subject}/notes`, note, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);

const candidateAdapter = createEntityAdapter({});

const candidateSlice = createSlice({
  name: 'talent/candidate',
  initialState: candidateAdapter.getInitialState({
    id: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    resumes: [],
    silarCandidates: [],
    notes: []
  }),
  reducers: {
    resetCandidate: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          id: FuseUtils.generateGUID(),
          name: '',
          handle: '',
          description: '',
          categories: [],
          tags: [],
          images: [],
          priceTaxExcl: 0,
          priceTaxIncl: 0,
          taxRate: 0,
          comparedPrice: 0,
          quantity: 0,
          sku: '',
          width: '',
          height: '',
          depth: '',
          weight: '',
          extraShippingFee: 0,
          active: true,
        },
      }),
    },
  },
  extraReducers: {
    [getCandidate.fulfilled]: (state, action) => action.payload,
    [updateCandidate.fulfilled]: (state, action) => action.payload,
    [removeCandidate.fulfilled]: (state, action) => null,
    [getCandidateSimilar.fulfilled]: (state, action) => {
      state.similarCandidates = action.payload;
    },
    [getCandidateResumes.fulfilled]: (state, action) => {
      state.resumes = action.payload;
    },
    [getCandidateExperiences.fulfilled]: (state, action) => action.payload,
    [getCandidateEducations.fulfilled]: (state, action) => action.payload,
    [getCandidateNotes.fulfilled]: (state, action) => {
      state.notes = action.payload;
    },
    [getCandidateActivities.fulfilled]: (state, action) => {
      state.activities = action.payload;
    },
    // [addCandidateNote.fulfilled]: (state, action) => {
    //   let {notes} = state;
    //   notes.slice().unshift(action.payload);
    //   state.notes = notes;
    // }
  },
});

export const { newProduct, resetProduct } = candidateSlice.actions;

export default candidateSlice.reducer;
