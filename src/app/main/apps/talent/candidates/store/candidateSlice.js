import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';

export const getCandidate = createAsyncThunk('eCommerceApp/product/getProduct', async (params) => {
  const response = await axios.get('/api/e-commerce-app/product', { params });
  const data = await response.data;

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

export const addCandidateNote = createAsyncThunk(
  'candidate/notes/add',
  async (note, { getState }) => {
    let user = getState().auth.user.data;
    const response = await axios.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/talent/company/${user.preferredCompany}/candidates/${note.subject}/notes`, note, {headers: {userId: user.id}});
    const data = await response.data.data;

    return data;
  }
);

const candidateSlice = createSlice({
  name: 'talent/candidate',
  initialState: null,
  reducers: {
    resetProduct: () => null,
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
    [getCandidateNotes.fulfilled]: (state, action) => action.payload,
    [addCandidateNote.fulfilled]: (state, action) => action.payload,
  },
});

export const { newProduct, resetProduct } = candidateSlice.actions;

export default candidateSlice.reducer;
