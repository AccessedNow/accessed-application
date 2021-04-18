import FuseChipSelect from '@fuse/core/FuseChipSelect';
import { useDebounce, useForm, useUpdateEffect } from '@fuse/hooks';
import _ from '@lodash';
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
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
import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemberDialog from '../members/MemberDialog';
import MemberTeamDialog from '../members/MemberTeamDialog';
import { getAllMembers, openTeamCardDialog } from '../store/memberSlice';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { updateJob } from '../store/jobSlice';

const TeamForm = React.forwardRef((props, ref) => {
	const rootRef = useRef(null);
	const dispatch = useDispatch();
	const job = useSelector(({ jobCreateApp }) => jobCreateApp.job.job);
	const { form: cardForm, handleChange, setForm, setInForm } = useForm(job);
	const handleAddMember = (selectedMembers, invitedMembers) => {
		setInForm("team", { ...cardForm.team, members: selectedMembers, invitedMembers: invitedMembers });
	}
	React.useImperativeHandle(ref, () => ({
		handleFormSubmit() {
			dispatch(updateJob(cardForm));
		}
	}));
	return (
		<>
			<DialogContent className="p-16 sm:p-24" ref={rootRef}>
				<div className="flex flex-col items-center mb-24 w-full">
					<div className="w-full">
						<Card className="w-full border-1 mt-10" elevation={0}>
							<CardHeader
								title="Team members"
								subheader="Assign team members to work on and access this job."
							/>
							<CardContent>
								<div className="flex flex-col">
									<div className="flex flex-col pl-24">

										{
											cardForm.team &&
											cardForm.team.members &&
											cardForm.team.members.map((team) => (
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
									</div>
									<div className="flex">
										<Accordion className="w-full">
											<AccordionSummary
												expandIcon={<ExpandMoreIcon />}>
												<div className="flex w-full">
													<IconButton>
														<Icon>people</Icon>
													</IconButton>
													<div className="flex flex-col w-full">
														<Typography>Administrators</Typography>
														<span>{cardForm.team &&
															cardForm.team.administrators && cardForm.team.administrators.length + " team members"} </span>
													</div>

												</div>
											</AccordionSummary>
											<AccordionDetails className="block">
												{
													cardForm.team &&
													cardForm.team.administrators &&
													cardForm.team.administrators.map((team) => (
														<div className="flex">
															<div className="flex flex-1 items-center">
																<Avatar src={team.avatar} alt={team.firstName}></Avatar>
																<Typography>
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
								</div>
							</CardContent>
							<CardActions>
								<Button onClick={() => dispatch(openTeamCardDialog({ members: cardForm.team.members, administrators: cardForm.team.administrators, invitedMembers: cardForm.team.invitedMembers }))}>
									Add team meber
								</Button>
							</CardActions>
						</Card>
						<MemberTeamDialog addMember={handleAddMember} />
					</div>
				</div>
			</DialogContent>
		</>
	);
});

export default TeamForm;
