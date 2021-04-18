import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';
import jobService from 'app/services/jobService';



export const jobTitleSuggestion = createAsyncThunk('academyApp/course/getCourse', async (searchText, { getState, dispatch }) => {
	return jobService
		.getTitleSuggestion(searchText)
		.then(data => {
			return data;
		})
		.catch(error => {
			return searchText;
		});
});

export const updateCourse = createAsyncThunk(
	'academyApp/course/updateCourse',
	async (_data, { getState, dispatch }) => {
		const { id } = getState().academyApp.course;

		const response = await axios.post('/api/academy-app/course/update', { id, ..._data });
		const data = await response.data;

		dispatch(showMessage({ message: 'Course Saved' }));

		return data;
	}
);

export const addJob = (object) => async dispatch => {

	return jobService
		.addJob(object)
		.then(data => {
			let newObject = object;
			newObject = { ...newObject, jobId: data.jobId }
			dispatch(updateJobId(newObject));
			dispatch(setNextActiveStep());
			dispatch(showMessage({ message: 'Job Saved' }));
			return data;
		})
		.catch(error => {
			return object;
		});
};

export const updateJob = (object) => async dispatch => {
	debugger;
	return jobService
		.updateJob(object)
		.then(data => {
			dispatch(setNextActiveStep());
			dispatch(showMessage({ message: 'Job Updated' }));
			return data;
		})
		.catch(error => {
			return object;
		});
};

const courseSlice = createSlice({
	name: 'academyApp/course',
	initialState: {
		jobId: '',
		activeStep: 1,
		titleSuggestions: [],
		job: {
			minMonthExperience: 0,
			maxMonthExperience: 0,
			skills: [],
			labels: [],
			tags: [],
			workflowId: 0,
			title: "",
			description: "",
			expirationDate: 0,
			requiredOnDate: 0,
			salaryRangeLow: 0,
			salaryRangeHigh: 0,
			salaryFixed: null,
			jobFunction: "",
			industry: [],
			level: "LEVEL1",
			city: "",
			state: "",
			country: "",
			currency: "USD",
			postalCode: "",
			employmentType: "",
			company: 469,
			createdBy: 5,
			qualifications: [],
			minimumQualifications: [],
			category: "",
			education: "",
			department: "",
			questions: [],
			requiredResume: false,
			requiredCoverLetter: false,
			requiredPhoto: false,
			requiredPhone: false,
			applicationPreferences: {
				linkedIn: false,
				indeed: false,
				socialMediaShare: false,
				jobLocation: false
			},
			pipeLine:
			{
				id: 0,
				name: "",
				templateId: 1,
				stages: [],
			},
			profileField: {
				id: 0,
				name: "",
				templateId: 1,
				stages: [],
			},
			autoConfirmationEmail: {},
			// team: {
			// 	members: [],
			// 	administrators: [{
			// 		id: 224,
			// 		firstName: "Wayne",
			// 		lastName: "Doe 1",
			// 		headline: "I am Wayne Doe 1",
			// 		about: null,
			// 		favorite: false,
			// 		salary: 100,
			// 		position: "Sr. Designer",
			// 		avatar: "assets/images/avatars/katherine.jpg",
			// 		createdDate: 4645645456

			// 	}],
			// 	invitedMembers: []
			// }

		},

	},
	reducers: {
		updateJobId: (state, action) => {
			state.job = action.payload;

		},
		setActiveStep: (state, action) => {
			state.activeStep = action.payload;
		},
		setNextActiveStep:(state,action)=>
		{
			if(state.activeStep<4)
			{
				state.activeStep=state.activeStep+1;
			}
		}

	},

	extraReducers: {
		[updateCourse.fulfilled]: (state, action) => ({
			...state,
			...action.payload
		}),
		[jobTitleSuggestion.fulfilled]: (state, action) => {
			state.titleSuggestions = action.payload;
		}
	}
});
export const { updateJobId, setActiveStep ,setNextActiveStep} = courseSlice.actions;
export default courseSlice.reducer;
