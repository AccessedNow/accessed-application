import FuseChipSelect from '@fuse/core/FuseChipSelect';
import { useDebounce, useForm, useUpdateEffect } from '@fuse/hooks';
import _ from '@lodash';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import LabelModel from 'app/main/apps/scrumboard/model/LabelModel';
import moment from 'moment';
import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLabel } from '../../../store/boardSlice';
import { closeCardDialog, removeCard, updateCard } from '../../../store/cardSlice';
import Box from '@material-ui/core/Box';
import CardActivity from './activity/CardActivity';
import CardAttachment from './attachment/CardAttachment';
import CardChecklist from './checklist/CardChecklist';
import CardComment from './comment/CardComment';
import CheckListMenu from './toolbar/CheckListMenu';
import DueMenu from './toolbar/DueMenu';
import LabelsMenu from './toolbar/LabelsMenu';
import MembersMenu from './toolbar/MembersMenu';
import OptionsMenu from './toolbar/OptionsMenu';
import { Chip, Divider } from '@material-ui/core';
import CandidateDetailHeader from './CandidateDetailHeader';
import { selectCandidatesById, getCandidateById } from '../../../store/candidatesSlice';
import FusePageSimple from '@fuse/core/FusePageSimple';
import CandidateDetail from '../../../candidate/CandidateDetail';
import CandidatesSuggestions from '../../../candidate/CandidatesSuggestions';
import CandidatesSuggestionHeader from '../../../candidate/CandidatesSuggestionHeader';
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `scrollable-auto-tab-${index}`,
		'aria-controls': `scrollable-auto-tabpanel-${index}`,
		width: 'auto',
		minWidth: 'auto'
	};
}
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
}));
function BoardCardForm(props) {
	const dispatch = useDispatch();
	const selectedItemId = useSelector(state => state.jobApp.candidates.selectedItemId);
	const selectedItem = useSelector(state => state.jobApp.candidates.selected);
	console.log(selectedItemId);
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const pageLayout = useRef(null);
	useEffect(() => {
		dispatch(getCandidateById({ id: selectedItemId }));
	}, []);


	const classes = useStyles();
	return (
		<>
			<DialogTitle component="div" className="p-0">
				<AppBar position="static" elevation={1}>
					<Toolbar className="flex w-full overflow-x-auto px-8 sm:px-16">
						<div className="flex flex-1">
							{/* <IconButton
								onClick={ev => {
									pageLayout.current.toggleLeftSidebar();
								}}
								aria-label="open left sidebar"
							>
								<Icon>menu</Icon>
							</IconButton> */}
						</div>
						<IconButton color="inherit" onClick={ev => dispatch(closeCardDialog())}>
							<Icon>close</Icon>
						</IconButton>
					</Toolbar>
				</AppBar>
			</DialogTitle>

			<DialogContent className="p-16 sm:p-24">
				<FusePageSimple
					classes={{
						root: 'bg-red',
						header: 'h-96 min-h-96 sm:h-160 sm:min-h-160 ',
						leftSidebar: 'w-400 border-0',
						// rightSidebar: 'w-320'
					}}
					content={<CandidateDetail />}
					leftSidebarVariant="temporary"
					leftSidebarContent={<CandidatesSuggestions pageLayout={pageLayout} />}
					leftSidebarHeader={<CandidatesSuggestionHeader />}
					sidebarInner
					ref={pageLayout}

				/>
			</DialogContent>
		</>
	);
}

export default BoardCardForm;
