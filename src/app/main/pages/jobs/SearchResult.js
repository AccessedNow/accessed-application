import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TodoListItem from './TodoListItem';
import JobListItem from '../../../components/JobListItem/JobListItem';
import {selectFiles} from "./store/jobsSearchSlice";
import {setSelectedItem} from "../../apps/file-manager/store/filesSlice";

function SearchResult(props) {
  const dispatch = useDispatch();
  const results = useSelector(selectFiles);
  const selectedItemId = useSelector(({ jobSearchPage }) => jobSearchPage.results.selectedItemId);

  // const classes = useStyles();
	if(results.length && selectedItemId==null){
    dispatch(setSelectedItem(results[0].jobId));
	}

	if (results.length === 0) {
		return (
			<FuseAnimate delay={100}>
				<div className="flex flex-1 items-center justify-center h-full">
					<Typography color="textSecondary" variant="h5">
						There are no jobs!
					</Typography>
				</div>
			</FuseAnimate>
		);
	}

	return (
		<List className="w-full p-0">
			<FuseAnimateGroup
				enter={{
					animation: 'transition.slideUpBigIn'
				}}
			>
				{results.map(job => (
				  <div onClick={ev => {dispatch(setSelectedItem(job.jobId)); props.pageLayout.current.toggleRightSidebar()}}>
            <JobListItem key={job.jobId} job={job} />
						<Divider />
          </div>
				))}
			</FuseAnimateGroup>
		</List>
	);
}

export default SearchResult;
