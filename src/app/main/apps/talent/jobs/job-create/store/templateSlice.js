import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import PipeLineService from 'app/services/jobService/pipeLineService.js';
import axios from 'axios';

// export const getAllTemplates = createAsyncThunk('jobCreateApp/templates', async (routeParams, { getState }) => {
//    return PipeLineService
// 		.getCompanyPipeLines(routeParams)
// 		.then(data => {
// 			return data.map(m => { return { ...m, id: m._id } });
// 		})
// 		.catch(error => {
// 			return routeParams;
// 		});
// });

// export const getTemplateById = createAsyncThunk('jobCreateApp/templates', async (routeParams, { getState }) => {
//     routeParams = routeParams;
//     const response = await axios.get('/api/templates/getTemplateById', {
//         params: routeParams
//     });
//     const data = await response.data;
//     //debugger;
//     return { data, routeParams };
// });




export const getPipeLineTemplate = createAsyncThunk('jobCreateApp/getPipeLineTemplate', async (routeParams, { getState }) => {
    // return PipeLineService
    //     .getCompanyPipeLines(routeParams)
    //     .then(data => {
    //         return data.map(m => { return { ...m, id: m._id } });
    //     })
    //     .catch(error => {
    //         return routeParams;
    //     });
    routeParams = routeParams;
    const response = await axios.get('/api/templates/getTemplateByType', {
        params: "PIPELINE"
    });
    const data = await response.data;
    //debugger;
    return { data, routeParams };
});


export const getProfileTemplate = createAsyncThunk('jobCreateApp/getProfileTemplate', async (routeParams, { getState }) => {
    routeParams = routeParams;
    const response = await axios.get('/api/templates/getTemplateByType', {
        params: "PROFILE"
    });
    const data = await response.data;
    //debugger;
    return { data, routeParams };
});


const templateAdapter = createEntityAdapter({});
export const { selectAll: selectTemplate, selectById: selectTemplateById } = templateAdapter.getSelectors(
    state => state.jobCreateApp.templates
);
const templatesSlice = createSlice({
    name: 'jobCreateApp/templates',
    initialState: templateAdapter.getInitialState({
        pipleLineTemplates: [],
        profileTemplates: []
    }),
    reducers: {},
    extraReducers: {
        // [getTemplateById.fulfilled]: (state, action) => action.payload,
        [getProfileTemplate.fulfilled]: (state, action) => {
            state.profileTemplates = action.payload.data;
        },
        [getPipeLineTemplate.fulfilled]: (state, action) => {
            state.pipleLineTemplates = action.payload.data;
        }
    }
});

export default templatesSlice.reducer;
