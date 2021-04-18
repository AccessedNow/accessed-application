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
import DialogActions from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import LabelModel from 'app/main/apps/scrumboard/model/LabelModel';
import moment from 'moment';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FuseUtils from '@fuse/utils';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import { Accordion, AccordionDetails, AccordionSummary, Link, Card, CardHeader, CardContent, Select } from '@material-ui/core';
import { closeCardDialog } from '../store/memberSlice';

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
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `scrollable-auto-tab-${index}`,
		'aria-controls': `scrollable-auto-tabpanel-${index}`,
		width: 'auto',
		minWidth: 'auto'
	};
}
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper
	}
}));
function MemberTeamCardForm(props) {
	const dispatch = useDispatch();
	const members = useSelector(({ memberApp }) => memberApp.members);
	const selectedMembers = useSelector(({ memberApp }) => memberApp.members.selectedMembers);
	const administrators = useSelector(({ memberApp }) => memberApp.members.administrators);
	const invited = useSelector(({ memberApp }) => memberApp.members.invitedMembers);
	console.log(members);
	const [value, setValue] = React.useState(0);
	console.log(members);
	const [filteredData, setFilteredData] = useState(
		members &&
		members.data.map(item => {
			if (selectedMembers && selectedMembers.find(member => member.id === item.id)) {
				return { ...item, checked: true };
			} else {
				return item;
			}
		})
	);
	const [selectedmembers, setSelectedMember] = React.useState(selectedMembers);
	const [invitedMembers, setInvitedMembers] = React.useState(invited);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	function getFilteredArray(entities, _searchText) {
		if (_searchText.length === 0) {
			return members;
		}
		return FuseUtils.filterArrayByString(members.data, _searchText);
	}
	const searchMembers = event => {
		if (event.target.value) {
			if (members) {
				setFilteredData(getFilteredArray(members.data, event.target.value));
			}
		}
	};
	const handleMemberCheck = (e, object) => {
		let checkedMembers = selectedmembers;
		if (e.target.checked) {
			checkedMembers = [...checkedMembers, object];
			//object.checked = true;
		} else {
			checkedMembers = checkedMembers.filter(lev => lev.id !== object.id);
			//object.checked = false;
		}

		setFilteredData(
			filteredData.map(item => {
				if (object.id === item.id) {
					return { ...object, checked: e.target.checked };
				} else {
					return item;
				}
			})
		);
		setSelectedMember(checkedMembers);
	};

	const handleInvitedMemberChange = (e, type, index) => {

		setInvitedMembers(invitedMembers.map((member, idx) => {
			if (index == idx) {
				if (type === "email")
					return { ...member, email: e.target.value }
				else
					return { ...member, role: e.target.value }
			}
			else {
				return member;
			}
		}))
	}
	const addMoreMember = () => {
		setInvitedMembers([...invitedMembers, { email: "", role: "" }]);
	}

	const classes = useStyles();
	return (
		<>
			<DialogTitle component="div" className="p-0">
				<AppBar position="static" elevation={1}>
					<Toolbar className="flex w-full overflow-x-auto px-8 sm:px-16">
						<div className="flex flex-1"></div>
						<IconButton color="inherit" onClick={ev => dispatch(closeCardDialog())}>
							<Icon>close</Icon>
						</IconButton>
					</Toolbar>
				</AppBar>
			</DialogTitle>

			<DialogContent className="p-16 sm:p-24">
				<FormControl component="fieldset" className={classes.formControl + ' w-full'}>
					<FormGroup className="w-full">

						<TextField id="outlined-name" label="Search" onChange={e => searchMembers(e)} />
						{filteredData &&
							filteredData.map(member => (
								<div className="w-full flex flex-row justify-between items-center ">
									<div className="flex mt-10">
										<Avatar
											className=" ml-5 w-32 h-32"
											src={member.avatar}
											alt={member.firstName}
										>
											{
												/ {!job.members.avatar || job.members.avatar === '' ? job.members.firstName : ''} /
											}
										</Avatar>
										<Typography className="ml-10">
											{member.firstName} {member.lastName}
										</Typography>
									</div>
									<Checkbox
										onChange={e => handleMemberCheck(e, member)}
										checked={member.checked}
										name={member.id}
									/>
								</div>
							))}


						<div className="flex">
							<Accordion className="w-full">
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<div className="flex w-full">
										<IconButton>
											<Icon>people</Icon>
										</IconButton>
										<div className="flex flex-col w-full">
											<Typography>Administrators</Typography>
											<span>{administrators && administrators.length + " team members"} </span>
										</div>

									</div>
								</AccordionSummary>
								<AccordionDetails className="block">
									{
										administrators &&
										administrators.map((team) => (
											<div className="flex">
												<div className="flex flex-1 items-center">
													<Avatar src={team.avatar} alt={team.firstName}></Avatar>
													<Typography className="ml-10">
														{team.firstName + " " + team.lastName}
													</Typography>
												</div>
												<div className="">
													<IconButton variant="primary">
														<Icon>delete</Icon>
													</IconButton>
												</div>
											</div>
										))
									}
								</AccordionDetails>
							</Accordion>



						</div>

						<Card>
							<CardHeader
								subheader="INVITE TEAM MEMBERS"

							>

							</CardHeader>
							<CardContent>
								<div className="flex flex-col">
									{

										invitedMembers && invitedMembers.map((member, index) => (
											<div className="flex mb-10">

												<TextField
												className="flex-1"
													name="email"
													value={member.email}
													onChange={(e) => handleInvitedMemberChange(e, "email", index)}>

												</TextField>
												<Select value={member.role}
												className="min-w-56 ml-10 flex-1"
													onChange={(e) => handleInvitedMemberChange(e, "role", index)}>
													<MenuItem value="ADMINISTRATOR">
														Administrator
													</MenuItem>
													<MenuItem value="RECRUITER">
														Cooperate recruiter
													</MenuItem>
													<MenuItem value="MANAGER">
														Hiring Manager
													</MenuItem>
													<MenuItem value="REVIEWER">
														Reviewer
													</MenuItem>
												</Select>

											</div>
										))


									}
									<div variant="outlined">
										<Button onClick={() => addMoreMember()}>
											Invite More
										</Button>
									</div>

								</div>
							</CardContent>
						</Card>
					</FormGroup>
				</FormControl>
			</DialogContent>
			<DialogActions>
				<MenuItem
					onClick={event => {
						event.preventDefault();
						event.stopPropagation();

					}}

				>
					<Button onClick={() => dispatch(closeCardDialog())}>Cancel</Button>
					<Button onClick={() => {
						dispatch(closeCardDialog());
						props.onAddMember(selectedmembers,invitedMembers);
					}}>Save</Button>
				</MenuItem>
			</DialogActions>
		</>
	);
}

export default MemberTeamCardForm;
