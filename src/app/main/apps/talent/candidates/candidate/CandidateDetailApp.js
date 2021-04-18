import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';


import reducer from '../store';

import CandidateDetailHeader from "../CandidateDetailHeader";
import CandidateDetail from "../CandidateDetail";
import CandidatesSuggestions from './CandidatesSuggestions';
import CandidatesSuggestionHeader from './CandidatesSuggestionHeader';
import { getCandidates } from '../store/candidatesSlice';
import { getCandidate } from '../store/candidateSlice';
import { getRecentActivities } from '../store/activitySlice';
import RightHeader from './RightHeader';
import RightContent from './RightContent';


function CandidateDetailApp(props) {
	const dispatch = useDispatch();
	const pageLayout = useRef(null);
	const routeParams = useParams();


	useDeepCompareEffect(() => {
		dispatch(getCandidates(routeParams));
		dispatch(getCandidate(routeParams));
		dispatch(getRecentActivities(routeParams));
	}, [dispatch, routeParams]);

	return (
		<>
			<FusePageSimple
				classes={{
					root: 'bg-red',
					header: 'h-96 min-h-96 sm:h-160 sm:min-h-160 ',
          leftSidebar: 'w-320 sm:w-320 border-0',
					rightSidebar: 'w-320',
					content: 'h-full',
          rightSidebarContent: 'h-full'
				}}
				header={<CandidateDetailHeader pageLayout={pageLayout} />}
				content={<CandidateDetail />}
				leftSidebarContent={<CandidatesSuggestions pageLayout={pageLayout} />}
				leftSidebarHeader={<CandidatesSuggestionHeader />}
				rightSidebarHeader={<RightHeader />}
				rightSidebarContent={<RightContent pageLayout={pageLayout} />}
				sidebarInner
				ref={pageLayout}

			/>

		</>
	);
}

export default withReducer('candidatesApp', reducer)(CandidateDetailApp);
