import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JobsSearchBar from './JobsSearchBar';
import { toggleVariateDescSize } from './store/notesSlice';

function JobsHeader(props) {
	const dispatch = useDispatch();

	return (
		<div className="flex flex-1 items-center justify-between p-8 sm:p-24 relative">
			<div className="flex flex-shrink items-center sm:w-224">
				<Hidden lgUp>
					<IconButton
						onClick={ev => props.pageLayout.current.toggleLeftSidebar()}
						aria-label="open left sidebar"
					>
						<Icon>menu</Icon>
					</IconButton>
				</Hidden>

				<div className="flex items-center">
					<Icon className="text-32">work</Icon>
					<Typography variant="h6" className="mx-12 hidden sm:flex">
						Jobs
					</Typography>
				</div>
			</div>

			<div className="flex flex-1 items-center justify-end">
				<JobsSearchBar />
			</div>
		</div>
	);
}

export default JobsHeader;
