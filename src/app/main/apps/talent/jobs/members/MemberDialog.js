import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCardDialog } from '../store/jobsSlice';
import { getAllMembers } from '../store/memberSlice';
import MemberCardForm from './MemberCardForm';
import reducer from '../store';
const useStyles = makeStyles(theme => ({
	paper: {
		color: theme.palette.text.primary
	}
}));

function MemberDialog(props) {
	const dispatch = useDispatch();
	const memberDialogOpen = useSelector(({ memberApp }) => memberApp.members.dialogOpen);

	const classes = useStyles(props);
	useEffect(() => {
		getAllMembers();
	}, [])
	return (
		<Dialog
			classes={{
				paper: clsx(classes.paper, 'w-full m-24')
			}}
			onClose={ev => dispatch(closeCardDialog())}
			open={memberDialogOpen}
		>
			<MemberCardForm onAddMember={props.addMember}/>
		</Dialog>
	);
}
export default withReducer('memberApp', reducer)(MemberDialog);

