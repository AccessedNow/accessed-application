import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import reducer from 'app/components/Department/store';
import DepartmentHeader from 'app/components/Department/DepartmentHeader';
import DepartmentList from 'app/components/Department/DepartmentList';
import { getDepartments } from 'app/components/Department/store/departmentsSlice';
import DepartmentDialog from 'app/components/Department/Dialog/DepartmentDialog';
import { getAllMembers } from 'app/components/Department/store/memberSlice';
import { getAllLocations } from 'app/components/Department/store/addressSlice';


function DepartmentApp(props) {
	const dispatch = useDispatch();
	const pageLayout = useRef(null);
	const routeParams = useParams();
	const company = useSelector(({ auth }) =>auth.user.selectedCompany);
	useDeepCompareEffect(() => {
		if (company)
			dispatch(getDepartments(company));

		dispatch(getAllLocations());
		dispatch(getAllMembers());
	}, [dispatch, routeParams, company]);

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
				header={<DepartmentHeader pageLayout={pageLayout} />}
				content={<DepartmentList />}
				//leftSidebarContent={<CandidatesSidebarContent />}
				// rightSidebarHeader={<CandidateDetailHeader />}
				// 		rightSidebarContent={<CandidateDetail />}
				sidebarInner
				ref={pageLayout}

			/>
			<DepartmentDialog />

		</>
	);
}

export default withReducer('departmentApp', reducer)(DepartmentApp);
