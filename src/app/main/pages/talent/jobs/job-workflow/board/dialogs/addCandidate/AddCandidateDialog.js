import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAddCandidateDialog } from '../../../store/cardSlice';
import AddCandidateDialogContent from './AddCandidateDialogContent';

const useStyles = makeStyles(theme => ({
	paper: {
		color: theme.palette.text.primary
	}
}));

function AddCandidateDialog(props) {
	const dispatch = useDispatch();
	const candidateDialogOpen = useSelector(({ scrumboardApp }) => scrumboardApp.card.addCandidateDialogOpen);

	const classes = useStyles(props);

	return (
		<Dialog
			classes={{
				paper: clsx(classes.paper, 'max-w-sm w-full m-16')
			}}
			onClose={ev => dispatch(closeAddCandidateDialog())}
			open={candidateDialogOpen}
		>
			<AddCandidateDialogContent />
		</Dialog>
	);
}

export default AddCandidateDialog;
