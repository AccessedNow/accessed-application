import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import CandidatesHeader from './CandidatesHeader';
import CandidatesList from './CandidatesList';
import CandidatesSuggestions from './CandidatesSuggestions';
import CandidatesSuggestionHeader from './CandidatesSuggestionHeader';
import reducer from './store';
import { getAllSkills } from './store/skillsSlice';
import { getCandidates, setCompare ,selectCandidates} from './store/candidatesCompareSlice';
import { getSuggestionsData } from './store/candidateSuggestionsSlice';


import qs from 'qs';

function CandidatesCompare(props) {
	const dispatch = useDispatch();
	const pageLayout = useRef(null);
	const routeParams = useParams();
	const query = qs.parse(props.location.search, { ignoreQueryPrefix: true });
	const candidates = useSelector(selectCandidates);
	dispatch(setCompare(query));

	useDeepCompareEffect(() => {
		dispatch(getCandidates(routeParams));

		dispatch(getSuggestionsData(routeParams));
	}, [dispatch, routeParams]);
	

	return (
		<>
			<FusePageSimple
				classes={{
					contentWrapper: 'p-0 sm:p-24 h-full',
					content: 'flex flex-col h-full',
					leftSidebar: 'w-400 border-0',
					rightSidebar: 'w-512',
					header: 'min-h-72 h-72 sm:h-72 sm:min-h-72',
					wrapper: 'min-h-0'
				}}
				header={<CandidatesHeader pageLayout={pageLayout} />}
				content={<CandidatesList />}
				leftSidebarHeader={<CandidatesSuggestionHeader pageLayout={pageLayout}/>}
				leftSidebarContent={<CandidatesSuggestions />}
				// rightSidebarHeader={<CandidateDetailHeader />}
				// rightSidebarContent={<CandidateDetail />}
				sidebarInner
				ref={pageLayout}

			/>
		</>
	);
}

export default withReducer('candidatesCompare', reducer)(CandidatesCompare);
