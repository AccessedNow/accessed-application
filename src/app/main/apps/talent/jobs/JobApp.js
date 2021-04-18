import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useEffect, useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import JobDetails from './job/JobDetails';
import JobToolbar from './job/JobToolbar';
import JobHeader from './JobHeader';

import JobAppHeader from './JobAppHeader';
import JobAppSidebarContent from './JobAppSidebarContent';
import JobAppSidebarHeader from './JobAppSidebarHeader';
import JobAppSidebarFilter from './JobAppSidebarFilter';

import JobList from './jobs/JobList';
import JobGrid from './jobs/JobGrid';
import JobsToolbar from './jobs/JobsToolbar';
import JobListHeader from './jobs/JobListHeader';
import reducer from './store';
import { getAllSkills } from './store/skillsSlice';
import { getJobs } from './store/jobsSlice';
import JobDialog from './job/JobDialog';

function JobApp(props) {
	const dispatch = useDispatch();
	const isGrid = useSelector(({ jobApp }) => jobApp.jobs.isGrid);
	const pageLayout = useRef(null);
	const routeParams = useParams();

	useEffect(() => {
		dispatch(getJobs(routeParams));
		dispatch(getAllSkills(routeParams));
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
			contentToolbar={<JobListHeader />}
			content={isGrid ? <JobGrid /> : <JobList />}
			leftSidebarContent={<JobAppSidebarFilter pageLayout={pageLayout} />}
			sidebarInner
			ref={pageLayout}

		/>
		<JobDialog />
		</>
	);
}

export default withReducer('jobApp', reducer)(JobApp);
