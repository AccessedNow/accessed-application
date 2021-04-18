import FuseAnimate from '@fuse/core/FuseAnimate';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotesSearch from './NotesSearch';
import { openNewContactDialog } from './store/contactsSlice';

function UserManagementHeader(props) {
	const dispatch = useDispatch();

	return (
		<div className="flex flex-1 items-center justify-between p-8 sm:p-24 relative">
			<div className="flex flex-shrink items-center sm:w-224">

				<div className="flex items-center">
					<FuseAnimate animation="transition.expandIn" delay={300}>
						<Icon className="text-32">account_box</Icon>
					</FuseAnimate>
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Typography variant="h6" className="mx-12 hidden sm:flex">
							Members
						</Typography>
					</FuseAnimate>
				</div>
			</div>

			<div className="flex flex-1 items-center justify-end">
        <Tooltip title="Add Member">
          <IconButton onClick={ev => dispatch(openNewContactDialog())}>
            <Icon>person_add</Icon>
          </IconButton>
        </Tooltip>
				<NotesSearch />
			</div>
		</div>
	);
}

export default UserManagementHeader;
