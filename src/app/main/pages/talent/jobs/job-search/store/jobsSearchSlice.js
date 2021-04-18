import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import jobService from 'app/services/jobService';


export const searchJobs = createAsyncThunk('fileManagerApp/files/getFiles', async () => {
  const response = await jobService.searchJobs({query: '', page: 0, size: 10, sort: 'createdDate', direction: 'DESC'});
  return response.content;
  // return [
  //   {
  //     "id": 1,
  //     "status": "ACTIVE",
  //     "minMonthExperience": 72,
  //     "maxMonthExperience": 96,
  //     "hasSaved": true,
  //     "title": "Python Developer",
  //     "currency": "USD",
  //     "expirationDate": 1580545602,
  //     "requiredOnDate": 1581755202,
  //     "salaryRangeLow": 65000,
  //     "salaryRangeHigh": 80000,
  //     "level": {
  //       "_id": "5e7876e071e3f344565769e6",
  //       "experienceLevelId": 6,
  //       "shortCode": "EXECUTIVE",
  //       "name": "Executive"
  //     },
  //     "city": "San Jose",
  //     "state": "California",
  //     "country": "US",
  //     "employmentType": {
  //       "_id": "5e988910f55fb39897de3d78",
  //       "employmentTypeId": 2,
  //       "shortCode": "PARTTIME",
  //       "name": "Part Time"
  //     },
  //     "promotion": {
  //       "_id": "5e7c286171e3f344565896b1",
  //       "promotionId": 1,
  //       "type": "HOT",
  //       "createdDate": 1585192803,
  //       "startDate": 1585194023,
  //       "endDate": 1587871203,
  //       "status": "ACTIVE",
  //       "name": "Hot"
  //     },
  //     "qualifications": [],
  //     "responsibilities": [],
  //     "company": {
  //       "id": 1049,
  //       "createdDate": 1588668816078,
  //       "createdBy": null,
  //       "lastModifiedDate": null,
  //       "lastModifiedBy": null,
  //       "status": "ACTIVE",
  //       "followers": null,
  //       "partyType": "COMPANY",
  //       "name": "USA Today",
  //       "headline": "",
  //       "about": null,
  //       "avatar": "logo.png",
  //       "cover": "",
  //       "isCoverDefault": false,
  //       "rating": null,
  //       "hasFollowed": false,
  //       "hasBlocked": false,
  //       "hasInvited": false,
  //       "hasReceived": false,
  //       "hasJoined": true,
  //       "hasRequested": false,
  //       "noOfFollowers": 5,
  //       "noOfFollowings": 0,
  //       "noOfConnections": 0,
  //       "hasConnected": false,
  //       "hasNotification": false,
  //       "shareUrl": "https://www.accessed.com/company/kUjrHFBwJDmDtGdVB6BlRg==",
  //       "links": [],
  //       "size": 0,
  //       "yearFounded": 0,
  //       "type": null,
  //       "noOfMembers": 1,
  //       "noOfEmployees": 4,
  //       "website": "",
  //       "ticketSymbol": null,
  //       "isSponsor": false,
  //       "hasVerified": false,
  //
  //       "active": true
  //     },
  //     "createdBy": 87,
  //     "createdDate": 1602670713516,
  //     "jobId": 358293,
  //   },
  //   {
  //     "id": 2,
  //     "status": "ACTIVE",
  //     "minMonthExperience": 72,
  //     "maxMonthExperience": 96,
  //     "noOfResources": 1,
  //     "hasSaved": true,
  //     "isExternal": false,
  //     "shareUrl": "https://www.anymay.com/jobs/358292",
  //     "workflowId": 100001,
  //     "title": "Python Developer",
  //     "currency": "USD",
  //     "expirationDate": 1580545602,
  //     "requiredOnDate": 1581755202,
  //     "salaryRangeLow": 95000,
  //     "salaryRangeHigh": 120000,
  //     "salaryFixed": null,
  //     "jobFunction": "TECH",
  //     "level": {
  //       "_id": "5e7876e071e3f344565769e6",
  //       "experienceLevelId": 6,
  //       "shortCode": "EXECUTIVE",
  //       "name": "Executive"
  //     },
  //     "city": "San Jose",
  //     "state": "California",
  //     "country": "US",
  //     "employmentType": {
  //       "_id": "5e988910f55fb39897de3d78",
  //       "employmentTypeId": 2,
  //       "shortCode": "PARTTIME",
  //       "name": "Part Time"
  //     },
  //     "promotion": {
  //       "_id": "5e7c286171e3f344565896b1",
  //       "promotionId": 1,
  //       "type": "HOT",
  //       "createdDate": 1585192803,
  //       "startDate": 1585194023,
  //       "endDate": 1587871203,
  //       "status": "ACTIVE",
  //       "name": "Hot"
  //     },
  //     "qualifications": [],
  //     "responsibilities": [],
  //     "company": {
  //       "id": 1055,
  //       "createdDate": 1588668816078,
  //       "createdBy": null,
  //       "lastModifiedDate": null,
  //       "lastModifiedBy": null,
  //       "status": "ACTIVE",
  //       "followers": null,
  //
  //       "partyType": "COMPANY",
  //       "name": "Vice News",
  //       "headline": "",
  //       "about": null,
  //       "avatar": "logo.png",
  //       "cover": "",
  //       "isCoverDefault": false,
  //       "rating": null,
  //       "hasFollowed": true,
  //       "hasBlocked": false,
  //       "hasInvited": false,
  //       "hasReceived": false,
  //       "hasJoined": true,
  //       "hasRequested": false,
  //       "noOfFollowers": 10,
  //       "noOfFollowings": 0,
  //       "noOfConnections": 0,
  //       "hasConnected": false,
  //       "hasNotification": false,
  //       "shareUrl": "https://www.accessed.com/company/tf7MlY8+xhyJjhiiBtBtLw==",
  //       "links": [],
  //       "size": 0,
  //       "yearFounded": 0,
  //       "type": null,
  //       "noOfMembers": 1,
  //       "noOfEmployees": 4,
  //       "website": "",
  //       "ticketSymbol": null,
  //       "isSponsor": false,
  //       "hasVerified": false,
  //
  //       "active": true
  //     },
  //     "createdBy": 87,
  //     "createdDate": 1602670702871,
  //     "jobId": 358292
  //   },
  // ];
});

const filesAdapter = createEntityAdapter({
  selectId: (result) => result.jobId,
});

export const {
  selectAll: selectFiles,
  selectEntities: selectFilesEntities,
  selectById: selectFileById
} = filesAdapter.getSelectors(state => {
  return state.jobSearchPage.results
});

const jobsSearchSlice = createSlice({
  name: 'fileManagerApp/files',
  initialState: filesAdapter.getInitialState({
    selectedItemId: null
  }),
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItemId = action.payload;
    }
  },
  extraReducers: {
    [searchJobs.fulfilled]: filesAdapter.setAll
  }
});

export const { setSelectedItem } = jobsSearchSlice.actions;

export default jobsSearchSlice.reducer;
