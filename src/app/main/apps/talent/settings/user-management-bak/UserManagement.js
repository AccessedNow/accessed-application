import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import MailAppHeader from './MailAppHeader';
import MailToolbar from './mail/MailToolbar';
import MailsToolbar from './mails/MailsToolbar';
import MailDetails from './mail/MailDetails';
import MailList from './mails/MailList';
import reducer from './store';
import { getFilters } from './store/filtersSlice';
import { getFolders } from './store/foldersSlice';
import { getLabels } from './store/labelsSlice';

function UserManagement(props) {
	const dispatch = useDispatch();

	const pageLayout = useRef(null);
	const routeParams = useParams();

	useEffect(() => {
		dispatch(getFilters());
		dispatch(getFolders());
		dispatch(getLabels());
	}, [dispatch]);

	return (
		<FusePageSimple
			classes={{
				root: 'w-full',
				content: 'flex flex-col',
				header: 'items-center min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			// header={<MailAppHeader pageLayout={pageLayout} />}
			contentToolbar={routeParams.mailId ? <MailToolbar /> : <MailsToolbar />}
			content={routeParams.mailId ? <MailDetails /> : <MailList />}
			// leftSidebarHeader={<MailAppSidebarHeader />}
			// leftSidebarContent={<MailAppSidebarContent />}
			ref={pageLayout}
			innerScroll
		/>
	);
}

export default withReducer('mailApp', reducer)(UserManagement);
