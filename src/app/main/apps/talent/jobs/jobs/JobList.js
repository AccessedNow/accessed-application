import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseUtils from '@fuse/utils';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import { getJobs, selectJobs } from '../store/jobsSlice';
import JobListItem from './JobListItem';
import JobListHeader from './JobListHeader';

function JobList(props) {
	const dispatch = useDispatch();
	const jobs = useSelector(selectJobs);
	const searchText = useSelector(({ jobApp }) => jobApp.jobs.searchText);

	const routeParams = useParams();
	const [filteredData, setFilteredData] = useState(null);
	const { t } = useTranslation('jobApp');



	useEffect(() => {
		function getFilteredArray() {
			if (searchText.length === 0) {
				return jobs;
			}
			return FuseUtils.filterArrayByString(jobs, searchText);
		}

		if (jobs) {
			setFilteredData(getFilteredArray());
		}
	}, [jobs, searchText]);

	if (!filteredData) {
		return null;
	}

	if (filteredData.length === 0) {
		return (
			<FuseAnimate delay={100}>
				<div className="flex flex-1 items-center justify-center h-full">
					<Typography color="textSecondary" variant="h5">
						No records found
					</Typography>
				</div>
			</FuseAnimate>
		);
	}

	return (
		<>
		
			<List className="p-0">
				<FuseAnimateGroup
					enter={{
						animation: 'transition.slideUpBigIn'
					}}
				>
					{filteredData.map(job => (
						<JobListItem job={job} key={job.id} />
					))}
				</FuseAnimateGroup>
			</List>
		</>
	);
}

export default withRouter(JobList);
