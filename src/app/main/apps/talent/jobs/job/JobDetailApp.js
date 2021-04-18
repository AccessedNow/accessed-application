import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import JobDetails from '../job/JobDetails';
import JobToolbar from '../job/JobToolbar';
import JobHeader from './JobHeader';

import JobAppHeader from '../JobAppHeader';
import JobAppSidebarContent from '../JobAppSidebarContent';
import JobAppSidebarHeader from '../JobAppSidebarHeader';
import JobAppSidebarFilter from '../JobAppSidebarFilter';

import JobList from '../jobs/JobList';
import JobsToolbar from '../jobs/JobsToolbar';
import JobListHeader from '../jobs/JobListHeader';
import reducer from '../store';
import { getFilters } from '../store/filtersSlice';
import { getFolders } from '../store/foldersSlice';
import { getLabels } from '../store/labelsSlice';
import { getAllSkills } from '../store/skillsSlice';
import {getAllMembers} from '../store/memberSlice';
import {getAllTags} from '../store/tagsSlice';
import { getJobs } from '../store/jobsSlice';
import { getRecentActivities } from '../store/activitySlice';
import JobDialog from './JobDialog';

function JobDetailApp(props) {
	const dispatch = useDispatch();

	const pageLayout = useRef(null);
	const routeParams = useParams();

	useEffect(() => {
		dispatch(getJobs(routeParams));
		dispatch(getAllSkills(routeParams));
		dispatch(getAllMembers(routeParams));
		dispatch(getAllTags(routeParams));
		dispatch(getLabels());
		dispatch(getRecentActivities(routeParams));
	}, [dispatch, routeParams]);

	return (
		<>
		<FusePageSimple
			classes={{
				root: 'w-full',
				contentWrapper: 'p-0 sm:p-24 h-full',
				content: 'flex flex-col',
				header: 'min-h-72 h-72 sm:h-72 sm:min-h-72 items-center',
				leftSidebar: 'w-320 sm:w-320 border-0'
			}}
			header={<JobHeader pageLayout={pageLayout} />}
			contentToolbar={<JobToolbar />}
			content={<JobDetails />}
		
			sidebarInner
			ref={pageLayout}

		/>
		<JobDialog />
		</>
	);
}

export default withReducer('jobApp', reducer)(JobDetailApp);
