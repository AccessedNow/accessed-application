import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import CandidateDialog from './CandidateDialog';
import AvailabilityDialog from './AvailabilityDialog';
import CandidatesHeader from './CandidatesHeader';
import CandidatesList from './CandidatesList';
import CandidatesGrid from './CandidatesGrid';
import CandidatesSidebarContent from './CandidatesSidebarContent';
import reducer from './store';
import { getCandidates } from './store/candidatesSlice';
import { getAllLocations } from './store/addressSlice';
import { getAllIndustries } from './store/industrySlice';
import { getAllSkills } from './store/skillsSlice';
import CandidateDetailHeader from "./CandidateDetailHeader";
import CandidateDetail from "./CandidateDetail";

function CandidatesApp(props) {
	const dispatch = useDispatch();
	const pageLayout = useRef(null);
	const routeParams = useParams();
	const isGrid = useSelector(({ candidatesApp }) => candidatesApp.candidates && candidatesApp.candidates.isGrid);

	useDeepCompareEffect(() => {
		dispatch(getCandidates(routeParams));
		dispatch(getAllLocations());
		dispatch(getAllIndustries());
		dispatch(getAllSkills());
	}, [dispatch, routeParams]);

	return (
		<>
			<FusePageSimple
				classes={{
					contentWrapper: 'p-0 sm:p-24 h-full',
					content: 'flex flex-col h-full',
          leftSidebar: 'w-320 sm:w-320 border-0',
					rightSidebar: 'w-512',
					header: 'min-h-72 h-72 sm:h-72 sm:min-h-72',
					wrapper: 'min-h-0'
				}}
				header={<CandidatesHeader pageLayout={pageLayout} />}
				content={isGrid ? (<CandidatesGrid />) : (<CandidatesList />)}
				leftSidebarContent={<CandidatesSidebarContent />}
				// rightSidebarHeader={<CandidateDetailHeader />}
				// 		rightSidebarContent={<CandidateDetail />}
				sidebarInner
				ref={pageLayout}

			/>
			<CandidateDialog />
			<AvailabilityDialog />
		</>
	);
}

export default withReducer('candidatesApp', reducer)(CandidatesApp);
