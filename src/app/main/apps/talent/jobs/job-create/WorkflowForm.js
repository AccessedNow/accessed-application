import FuseChipSelect from '@fuse/core/FuseChipSelect';
import { useDebounce, useForm, useUpdateEffect } from '@fuse/hooks';
import _ from '@lodash';
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent, CardHeader, Divider, makeStyles, Menu, MenuItem, Select } from '@material-ui/core';
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
import { Editor } from '@tinymce/tinymce-react';
import LabelModel from 'app/main/apps/scrumboard/model/LabelModel';
import { fromPairs } from 'lodash';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemberDialog from '../members/MemberDialog';
import { getAllMembers, openCardDialog } from '../store/memberSlice';
import { updateJob } from './store/jobSlice';
import { getAllTemplates, getPipeLineTemplate, getProfileTemplate, getTemplateById } from './store/templateSlice';
const actionsTypes = ["Send an Email", "Add a Note", "Add Task", "Add Tags", "Evaluation Request", "Add Followers", "Assign To"]
const types = ["SOURCED", "APPLY", "PHONESCREEN", "INTERVIEW", "EVALUATION", "OFFER", "HIRE"];
const questionTypes = [
	{ id: "SINGLELINE", type: "Text (Single Line)" },
	{ id: "MULTILINE", type: "Text (Multi Line)" },
	{ id: "YESNO", type: "Yes/No" },
	{ id: "SINGLECHOICE", type: "Single choice" },
	{ id: "MULTIPLECHOICE", type: "Multiple choice" },
	{ id: "VIDEOANSWER", type: "Video answer" },
	{ id: "ADDFILE", type: "Add File" },
	{ id: "INFOBOX", type: "Info Box" }];
const useStyles = makeStyles(theme => ({
	gridStyle:
	{
		gridTemplateColumns: 'repeat(100,1fr)',
		position: 'relative'
	}
}));
const WorkflowForm = React.forwardRef((props, ref) => {
	const dispatch = useDispatch();
	const pipeLineTemplates = useSelector(({ jobCreateApp }) => jobCreateApp.templates.pipleLineTemplates);
	const profileTemplates = useSelector(({ jobCreateApp }) => jobCreateApp.templates.profileTemplates);
	const company = useSelector(({ auth }) => auth.user.selectedCompany);

	const [selectedStage, setSelectedStage] = useState({});
	const [selectedField, setSelectedField] = useState({});
	const job = useSelector(({ jobCreateApp }) => jobCreateApp.job.job);
	const [newQuestion, setNewquestion] = useState(false);
	const [newField, setNewField] = useState(false);
	const { form: cardForm, handleChange, setForm, setInForm } = useForm(job);
	const { form: pipeLineForm, handleChange: handlePipeLineChange, setForm: setPipeLineForm, setInForm: setInPipeLineForm, resetForm } = useForm({
		id: 0,
		name: "",
		type: "",
		timeLimit: "",
		actions: [

		]
	});
	const { form: profileForm, handleChange: handleProfileChange, setForm: setProfileForm, setInForm: setInProfileForm, resetForm: resetProfileForm } = useForm({
		id: 0,
		name: "",
		type: ""
	});


	useEffect(() => {
		if (job)
			setForm(job);
	}, [job])


	useEffect(() => {
		if (pipeLineTemplates && pipeLineTemplates.length > 0) {			
			setInForm("pipeLine", pipeLineTemplates[0])
		}
		if (profileTemplates && profileTemplates.length > 0) {			
			setInForm("profileField", profileTemplates[0])
		}

	}, [pipeLineTemplates, profileTemplates])

	useEffect(() => {
		//dispatch(getAllTemplates(company));
		dispatch(getPipeLineTemplate(company));
		dispatch(getProfileTemplate());
		dispatch(getAllMembers())
	}, [dispatch])


	React.useImperativeHandle(ref, () => ({
		handleFormSubmit() {
			dispatch(updateJob(cardForm));
		}
	}));


	function handleClick(object) {

		setPipeLineForm(object ? object : {
			id: 0,
			name: "",
			type: "",
			timeLimit: "",
			actions: [

			]
		});
		if (object) {
			setSelectedStage(object);
		}
		else {
			setNewquestion(true);
		}
	}
	function handleStageChange(e, type, object) {
		if (type === "actions") {
			// let action = pipeLineForm.actions[index];
			// option.name = e.target.value;
			// questionForm.options[index] = option;
			// setInQuestionForm(type, questionForm.options);
			setInPipeLineForm(type, object);
		}
		else {
			setInPipeLineForm(type, e.target.value);
		}
	}
	function addMoreAction(object) {
		setInPipeLineForm("actions", [...pipeLineForm.actions, object]);
	}
	function savePipeLineStage() {
		let pipeLine = cardForm.pipeLine;
		let index = cardForm.pipeLine.stages && cardForm.pipeLine.stages.findIndex(m => m.id === (pipeLineForm.id));
		if (index > -1) {
			setInForm("pipeLine", {
				...cardForm.pipeLine, stages: cardForm.pipeLine.stages.map((item, idx) => {
					if (item.id === pipeLineForm.id)
						return pipeLineForm;
					else
						return item;
				})
			});
		}
		else {

			setInForm("pipeLine", { ...pipeLine, stages: [...pipeLine.stages, pipeLineForm] });
		}
		setNewquestion(false);
		setSelectedStage({});
		setPipeLineForm({});

	}
	function deleteStage(id) {
		let pipeLine = cardForm.pipeLine
		pipeLine.stages = pipeLine.stages.filter(m => m.id !== id);
		setInForm("pipeLine", pipeLine);
		// if (questionForm.id === id) {
		// 	setPipeLineForm({});
		// }
	}
	function cancelForm() {
		setSelectedStage({});
		setPipeLineForm({});
	}
	const handleEditorChange = (content, editor) => {
		setInForm("autoConfirmationEmail", { ...cardForm.autoConfirmationEmail, email: content })
	}

	function handleProfileClick(object) {

		setProfileForm(object ? object : {
			id: new Date().getTime(),
			name: "",
			type: ""
		});
		if (object) {
			setSelectedField(object);
		}
		else {
			setNewField(true);
		}
	}
	function handleFieldChange(e, type, object) {
		setInProfileForm(type, e.target.value);
	}

	function saveProfileField() {
		
		let index = cardForm.profileField.fields && cardForm.profileField.fields.findIndex(m => m.id === (profileForm.id));
		if (index > -1) {
			setInForm("profileField", {
				...cardForm.profileField, fields: cardForm.profileField.fields.map((item, idx) => {
					if (item.id === profileForm.id)
						return profileForm;
					else
						return item;
				})
			});
		}
		else {

			setInForm("profileField", { ...cardForm.profileField, fields: [...cardForm.profileField.fields, profileForm] });
		}
		setNewField(false);
		setSelectedField({});
		setProfileForm({});

	}
	function deleteProfileField(id) {
		let profile = cardForm.profileField
		profile.fields = profile.fields.filter(m => m.id !== id);
		setInForm("profileField", profile);
		// if (questionForm.id === id) {
		// 	setPipeLineForm({});
		// }
	}
	function cancelProfileForm() {
		setSelectedField({});
		setProfileForm({});
	}

	return (
		<>

			<DialogContent className="p-16 sm:p-24">
				<div className="flex flex-col items-center mb-24 w-full">
					<div className="w-full">
						<fieldset className="p-20 border-1">
							<legend className="font-600 text-16">Pipeline</legend>
							{
								cardForm.pipeLine &&
								<Card className="w-full" elevation={0}>
									<CardHeader
										action={
											<Select
												value={cardForm.pipeLine.templateId ? cardForm.pipeLine.templateId : pipeLineTemplates[0].id}
												onChange={(e) => setInForm("pipeLine", { ...pipeLineTemplates.find(m => m.id === e.target.value), templateId: e.target.value })}
											>
												{

													pipeLineTemplates && pipeLineTemplates.map((temp, index) => (
														<MenuItem key={index} value={temp.id}>{temp.name}</MenuItem>
													))

												}

											</Select>
										}
										subheader="Manage candidates by setting up a hiring pipeline for your job"

									/>
									<CardContent>
										<fieldset className="p-24 border-1 rounded-8">
											<legend className="font-600 text-16">
												Fixed Stages
	</legend>

											{cardForm.pipeLine && cardForm.pipeLine.stages.filter(m => m.isDefault).map((stage, index) => (
												<div className="mt-10">
													{stage.id !== selectedStage.id &&
														<div className="flex w-full border-1 cursor-pointer" key={index}
															onClick={() => handleClick(stage)}>
															<div className="flex flex-1 items-center ml-10">
																{stage.name}
															</div>
															<div className="flex">
																<IconButton variant="primary">
																	<Icon>edit</Icon>
																</IconButton>

															</div>
														</div>
													}
													{stage.id === selectedStage.id &&
														<div className="flex flex-col border-1 flex p-12">
															<div className="w-full flex">
																<div className="flex-col flex-1">
																	<Typography>Stage Name</Typography>
																	<TextField
																		variant="outlined"
																		className="w-full"
																		name="name"
																		value={pipeLineForm.name}
																		onChange={(e) => handleStageChange(e, "name", stage)}>
																	</TextField>
																</div>
																<Select className="min-w-96 ml-10 max-h-52 mt-20"
																	variant="outlined" value={stage.type} disabled>
																	{
																		types && types.map((type, index) => (
																			<MenuItem key={index} value={type}>{type}</MenuItem>
																		))
																	}

																</Select>
																<Select className="min-w-96 ml-10 max-h-52 mt-20" variant="outlined"
																	name="timeLimit"
																	value={pipeLineForm.timeLimit}
																	onChange={(e) => handleStageChange(e, "timeLimit", stage)}>
																	<MenuItem value="">No time Limit</MenuItem>
																	<MenuItem value="7D">7 days</MenuItem>
																	<MenuItem value="14D">14 days</MenuItem>
																	<MenuItem value="21D">21 days</MenuItem>
																</Select>


															</div>
															<div>
																<ActionMenu pipeLineForm={pipeLineForm} stage={stage} handleStageChange={handleStageChange} addMoreAction={addMoreAction} />
															</div>

															<div className="mt-10 p-12">
																<Divider className="h-1 mb-5"></Divider>
																<Button variant="outlined" onClick={() => cancelForm()}>
																	Cancel
							</Button>

																<Button className="ml-10" variant="outlined" onClick={() => savePipeLineStage()}>
																	Save
							</Button>
															</div>
														</div>
													}
												</div>

											))}
										</fieldset>
										<fieldset className="p-24 border-1 rounded-8 mt-10">
											<legend className="font-600 text-16">
												Custom Stages
	</legend>
											{cardForm.pipeLine && cardForm.pipeLine.stages.filter(m => !m.isDefault).map((stage, index) => (
												<div className="mt-10">
													{stage.id !== selectedStage.id &&
														<div className="flex w-full border-1 cursor-pointer" key={index}
															onClick={() => handleClick(stage)}>


															<div className="flex flex-1 items-center ml-10">
																{stage.name}
															</div>
															<div className="flex">
																<IconButton variant="primary">
																	<Icon>edit</Icon>
																</IconButton>
																<IconButton className="ml-10" onClick={() => deleteStage(stage.id)}>
																	<Icon>delete</Icon>
																</IconButton>
															</div>
														</div>
													}
													{stage.id === selectedStage.id &&
														<div className="flex flex-col border-1 flex p-12">
															<div className="w-full flex">
																<div className="flex-col flex-1">
																	<Typography>Stage Name</Typography>
																	<TextField
																		variant="outlined"
																		className="w-full"
																		name="name"
																		value={pipeLineForm.name}
																		onChange={(e) => handleStageChange(e, "name", stage)}>
																	</TextField>
																</div>
																<Select className="min-w-96 ml-10 max-h-52 mt-20"
																	variant="outlined" value={stage.type} onChnage={(e) => handleStageChange(e, "type", stage)}>
																	{
																		types && types.map((type, index) => (
																			<MenuItem key={index} value={type}>{type}</MenuItem>
																		))
																	}

																</Select>
																<Select className="min-w-96 ml-10 max-h-52 mt-20" variant="outlined"
																	name="timeLimit"
																	value={pipeLineForm.timeLimit}
																	onChange={(e) => handleStageChange(e, "timeLimit", stage)}>
																	<MenuItem value="">No time Limit</MenuItem>
																	<MenuItem value="7D">7 days</MenuItem>
																	<MenuItem value="14D">14 days</MenuItem>
																	<MenuItem value="21D">21 days</MenuItem>
																</Select>


															</div>
															<div>
																<ActionMenu pipeLineForm={pipeLineForm} stage={stage} handleStageChange={handleStageChange} addMoreAction={addMoreAction} />
															</div>

															<div className="mt-10 p-12">
																<Divider className="h-1 mb-5"></Divider>
																<Button variant="outlined" onClick={() => cancelForm()}>
																	Cancel
							</Button>

																<Button className="ml-10" variant="outlined" onClick={() => savePipeLineStage()}>
																	Save
							</Button>
															</div>
														</div>
													}
												</div>


											))}
											{newQuestion &&
												<div className="flex flex-col border-1 flex p-12">
													<div className="w-full flex">
														<div className="flex-col flex-1">
															<Typography>Stage Name</Typography>
															<TextField
																variant="outlined"
																className="w-full"
																name="name"
																value={pipeLineForm.name}
																onChange={(e) => handleStageChange(e, "name")}>
															</TextField>
														</div>
														<Select className="min-w-96 ml-10 max-h-52 mt-20"
															variant="outlined" value={pipeLineForm.type} onChnage={(e) => handleStageChange(e, "type")}>
															{
																types && types.map((type, index) => (
																	<MenuItem key={index} value={type}>{type}</MenuItem>
																))
															}

														</Select>
														<Select className="min-w-96 ml-10 max-h-52 mt-20" variant="outlined"
															name="timeLimit"
															value={pipeLineForm.timeLimit}
															onChange={(e) => handleStageChange(e, "timeLimit")}>
															<MenuItem value="">No time Limit</MenuItem>
															<MenuItem value="7D">7 days</MenuItem>
															<MenuItem value="14D">14 days</MenuItem>
															<MenuItem value="21D">21 days</MenuItem>
														</Select>


													</div>
													<div>
														<ActionMenu pipeLineForm={pipeLineForm} handleStageChange={handleStageChange} addMoreAction={addMoreAction} />
													</div>

													<div className="mt-10 p-12">
														<Divider className="h-1 mb-5"></Divider>
														<Button variant="outlined" onClick={() => cancelForm()}>
															Cancel
							</Button>

														<Button className="ml-10" variant="outlined" onClick={() => savePipeLineStage()}>
															Save
							</Button>
													</div>
												</div>
											}
										</fieldset>
									</CardContent>
								</Card>



							}
							{!newQuestion &&
								<Button className="w-full m-10 border-1 border-dashed" onClick={() => handleClick()}>Add</Button>
							}
						</fieldset>
					</div>
					<div className="w-full mt-10">
						<fieldset className="p-20 border-1">
							<legend className="font-600 text-16">Profile Fields</legend>
							{
								cardForm.pipeLine &&
								<Card className="w-full" elevation={0}>
									<CardHeader
										action={
											<Select
												value={cardForm.profileField.templateId ? cardForm.profileField.templateId : profileTemplates[0].id}
												onChange={(e) => setInForm("profileField", { ...cardForm.profileField, templateId: e.target.value })}
											>
												{
													profileTemplates && profileTemplates.map((temp, index) => (
														<MenuItem key={index} value={temp.id}>{temp.name}</MenuItem>
													))
												}

											</Select>
										}
										subheader="Manage candidates by setting up a hiring pipeline for your job"

									/>
									<CardContent>
										{cardForm.profileField && cardForm.profileField.fields && cardForm.profileField.fields.map((field, index) => (
											<>
												{field.id !== selectedField.id &&
													<div className="border-1 flex" key={index}
														onClick={() => handleProfileClick(field)}>
														<div className="flex flex-1 items-center ml-10">
															{field.name}
														</div>
														<div className="flex">
															<IconButton variant="primary">
																<Icon>edit</Icon>
															</IconButton>
															<IconButton className="ml-10" onClick={() => deleteProfileField(field.id)}>
																<Icon>delete</Icon>
															</IconButton>
														</div>
													</div>
												}
												{field.id === selectedField.id &&
													<div className="flex flex-col border-1 flex p-12">
														<div className="w-full flex">
															<div className="flex-col flex-1">
																<Typography>Field Name</Typography>
																<TextField
																	variant="outlined"
																	className="w-full"
																	name="name"
																	value={profileForm.name}
																	onChange={(e) => handleFieldChange(e, "name", field)}>
																</TextField>
															</div>
															<Select className="min-w-96 ml-10 max-h-52 mt-20"
																variant="outlined" value={field.type}
																onChange={(e) => handleFieldChange(e, "type", field)}>
																{
																	questionTypes && questionTypes.map((type, index) => (
																		<MenuItem key={index} value={type.id}>{type.type}</MenuItem>
																	))
																}

															</Select>


														</div>
														<div className="mt-10 p-12">
															<Divider className="h-1 mb-5"></Divider>
															<Button variant="outlined" onClick={() => cancelProfileForm()}>
																Cancel
							</Button>

															<Button className="ml-10" variant="outlined" onClick={() => saveProfileField()}>
																Save
							</Button>
														</div>
													</div>
												}

												{
													newField &&
													<div className="flex flex-col border-1 flex p-12">
														<div className="w-full flex">
															<div className="flex-col flex-1">
																<Typography>Field Name</Typography>
																<TextField
																	variant="outlined"
																	className="w-full"
																	name="name"
																	value={profileForm.name}
																	onChange={(e) => handleFieldChange(e, "name")}>
																</TextField>
															</div>
															<Select className="min-w-96 ml-10 max-h-52 mt-20"
																variant="outlined" 
																defaultValue={profileForm.type}
																onChange={(e) => handleFieldChange(e, "type")}>
																{
																	questionTypes && questionTypes.map((type, index) => (
																		<MenuItem key={index} value={type.id}>{type.type}</MenuItem>
																	))
																}

															</Select>


														</div>
														<div className="mt-10 p-12">
															<Divider className="h-1 mb-5"></Divider>
															<Button variant="outlined" onClick={() => cancelProfileForm()}>
																Cancel
							</Button>

															<Button className="ml-10" variant="outlined" onClick={() => saveProfileField()}>
																Save
							</Button>
														</div>
													</div>

												}
											</>
										))}

									</CardContent>
								</Card>



							}
							{
								!newField &&
								<Button className="w-full m-10 border-1 border-dashed"
								onClick={() => handleProfileClick()}>Add</Button>
							}
						</fieldset>
					</div>
					<div className="w-full mt-10">
						<fieldset className="p-20 border-1">
							<legend className="font-600 text-16">Auto Confirmation Email</legend>
							{
								cardForm.autoConfirmationEmail &&
								<Editor
									initialValue={cardForm.autoConfirmationEmail.email}
									init={{
										height: 200,
										menubar: false,
										plugins: [
											'advlist autolink lists link image charmap print preview anchor',
											'searchreplace visualblocks code fullscreen',
											'insertdatetime media table paste code help wordcount'
										],
										toolbar:
											'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
									}}
									onEditorChange={handleEditorChange}
								/>
							}
							{/* <Button className="w-full">Add</Button> */}
						</fieldset>
					</div>

				</div>
			</DialogContent>
		</>
	);
});
const ActionMenu = (props) => {

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [selectedActionType, setSelectedActionType] = React.useState(null);
	const [actions, setActions] = React.useState([]);
	const dispatch = useDispatch();
	const classes = useStyles(props);
	const tags = useSelector(({ jobCreateApp }) => jobCreateApp.tags);

	function handleMenuClick(e, index, row) {
		setAnchorEl(null);
		props.addMoreAction({ id: index + 1, meta: { actionType: index + 1, members: [] } });
	}

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
	}

	const handleClose = () => {
		setAnchorEl(null);
	}
	const deleteAction = (id) => {

		props.handleStageChange(null, "actions", props.pipeLineForm.actions.filter(m => m.id !== id));
	}
	const handleAddMember = (selectedMembers) => {
		props.handleStageChange(null, "actions", props.pipeLineForm.actions.map((item) => {
			if (item.id === selectedActionType)
				return { ...item, meta: { ...item.meta, members: selectedMembers } }
			else
				return item;
		}));

	}

	const handleActionChange = (e, type, action) => {
		let object = action;
		object.meta[type] = e.target.value;
		props.handleStageChange(null, "actions", props.pipeLineForm.actions.map(m => {
			if (m.id === object.id)
				return object;
			else
				return m;
		}));
	}
	const handleEditorChange = (content, editor, type, action) => {

		let object = action;
		object.meta[type] = content;
		props.handleStageChange(null, "actions", props.pipeLineForm.actions.map(m => {
			if (m.id === object.id)
				return object;
			else
				return m;
		}));
	}

	const chipChange = (type, value, action) => {

		let object = action;
		object.meta[type] = value.map(m => { return m.value });
		props.handleStageChange(null, "actions", props.pipeLineForm.actions.map(m => {
			if (m.id === object.id)
				return object;
			else
				return m;
		}));
	}

	const singleChipChange = (type, value, action) => {

		let object = action;
		object.meta[type] = value.value;
		props.handleStageChange(null, "actions", props.pipeLineForm.actions.map(m => {
			if (m.id === object.id)
				return object;
			else
				return m;
		}));
	}


	const { data } = props;
	return (
		<div className="mt-10">
			{
				props.pipeLineForm.actions && props.pipeLineForm.actions.length > 0 &&
				<>
					<Typography className="font-500 text-16">Automated Actions [{props.pipeLineForm.actions.length}]</Typography>
					<span className="text-12">When candidate is moved to this stage, automatically...</span>
				</>
			}
			{
				props.pipeLineForm.actions && props.pipeLineForm.actions.map((item, index) => (
					<>
						{
							item.meta.actionType === 1 &&
							<div className="border-1 flex flex-col mt-10">
								<div className="flex items-center p-12">
									<Typography className="font-500 text-16 flex-1">Send an email</Typography>
									<div className="flex items-center">
										<IconButton className="ml-10" onClick={() => deleteAction(item.id)}>
											<Icon>delete</Icon>
										</IconButton>
									</div>
								</div>
								<Divider className="h-1"></Divider>
								<div className="flex items-center p-12">
									<Typography className="font-500 text-16">From</Typography>
									<Select className="min-w-42 ml-10" variant="outlined" value={item.meta && item.meta.from} name="from" onChange={(e) => handleActionChange(e, "from", item)}>
										<MenuItem value="1">Any Any</MenuItem>
									</Select>
								</div>
								<Divider className="h-1"></Divider>
								<TextField
									variant="outlined"
									placeholder="Title"
									value={item.meta && item.meta.title}
									name="title"
									onChange={(e) => handleActionChange(e, "title", item)}>

								</TextField>
								<div >
									<Editor

										initialValue={item.meta && item.meta.email}
										init={{
											height: 200,
											menubar: false,
											plugins: [
												'advlist autolink lists link image charmap print preview anchor',
												'searchreplace visualblocks code fullscreen',
												'insertdatetime media table paste code help wordcount'
											],
											toolbar:
												'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
										}}
										onEditorChange={(content, editor) => handleEditorChange(content, editor, "email", item)}
									/>
								</div>

							</div>
						}
						{item.meta.actionType === 2 &&
							<div className="border-1 flex flex-col mt-10">
								<div className="flex items-center p-12">
									<Typography className="font-500 text-16 flex-1">Add a note</Typography>
									<div className="flex items-center">
										<IconButton className="ml-10" onClick={() => deleteAction(item.id)}>
											<Icon>delete</Icon>
										</IconButton>
									</div>
								</div>
								<Divider className="h-1"></Divider>
								<TextField
									rows="4"
									className="p-12"
									value={item.meta && item.meta.note}
									name="note"
									onChange={(e) => handleActionChange(e, "note", item)}>

								</TextField>

								<div className="p-12">
									<Select className="min-w-42 ml-10"
										value={item.meta && item.meta.visibility}
										name="visibility"
										onChange={(e) => handleActionChange(e, "visibility", item)}>
										<MenuItem value="1">Visible to everyone</MenuItem>
									</Select>
								</div>
							</div>
						}
						{item.meta.actionType === 3 &&
							<div className="border-1 flex flex-col mt-10">
								<div className="flex items-center p-12">
									<Typography className="font-500 text-16 flex-1">Add task</Typography>
									<div className="flex items-center">
										<IconButton className="ml-10" onClick={() => deleteAction(item.id)}>
											<Icon>delete</Icon>
										</IconButton>
									</div>
								</div>
								<Divider className="h-1"></Divider>
								<TextField
									className="p-12"
									placeholder="Enter the task"
									value={item.meta && item.meta.task}
									name="task"
									onChange={(e) => handleActionChange(e, "task", item)}
								>

								</TextField>



								<div className="p-12">
									<TextField
										label="Due date"
										type="date"
										name="dueDate"
										value={item.meta && item.meta.dueDate}
										onChange={(e) => handleActionChange(e, "dueDate", item)}
										placeholder=" Choose a due date"
										className="w-full sm:w-auto"
										InputLabelProps={{
											shrink: true
										}}
										variant="outlined"
										InputProps={{
											endAdornment: (
												<InputAdornment position="end">
													<Icon color="action">today</Icon>
												</InputAdornment>
											)
										}}
									/>
									<div className="w-full flex flex-col p-12">
										<Typography>Assign people</Typography>
										<div className={"grid pt-10 pl-12 " + classes.gridStyle}>
											{
												item.meta && item.meta.members && item.meta.members.map((member) => (
													<Avatar className="w-32 h-32 -ml-10" src={member.avatar} />
												))
											}


										</div>
										<Button className="mt-10" variant="outlined" onClick={ev => { setSelectedActionType(item.id); dispatch(openCardDialog(item.meta.members)) }}>Assign</Button>

									</div>
								</div>
							</div>
						}

						{item.meta.actionType === 4 &&
							<div className="border-1 flex flex-col mt-10">
								<div className="flex items-center p-12">
									<Typography className="font-500 text-16 flex-1">Add tags</Typography>
									<div className="flex items-center">
										<IconButton className="ml-10" onClick={() => deleteAction(item.id)}>
											<Icon>delete</Icon>
										</IconButton>
									</div>
								</div>
								<div className="w-full p-12">
									<FuseChipSelect
										className=""
										placeholder="Select tags"
										isMulti
										textFieldProps={{
											variant: 'outlined'
										}}
										options={tags && tags.data && tags.data.map(tag => ({
											value: tag.name,
											label: (
												<span className="flex items-center">
													<span className="mx-8">{tag.name}</span>
												</span>
											)
										}))}
										value={item.meta && item.meta.tags && item.meta.tags.map(tag => {
											let slectedInd = tags && tags.data && tags.data.find(m => m.name === tag);
											if (slectedInd)
												return {
													value: slectedInd.name,
													label: slectedInd.name
												}


										})}
										onChange={value => chipChange('tags', value, item)}
										variant="fixed"
									/>

								</div>
							</div>
						}
						{item.meta.actionType === 5 &&
							<div className="border-1 flex flex-col mt-10">
								<div className="flex items-center p-12">
									<Typography className="font-500 text-16 flex-1">Evaluation request</Typography>
									<div className="flex items-center">
										<IconButton className="ml-10" onClick={() => deleteAction(item.id)}>
											<Icon>delete</Icon>
										</IconButton>
									</div>
								</div>
								<div className="w-full flex flex-col p-12">
									<Typography>Select an evaluation form</Typography>
									<FuseChipSelect
										className="mt-2"
										placeholder="Select an evaluation form"
										textFieldProps={{
											variant: 'outlined'
										}}
										value={
											item.meta && item.meta.evaluationForm &&
											{
												value: item.meta.evaluationForm,
												label: item.meta.evaluationForm
											}

										}
										options={tags && tags.data && tags.data.map(tag => ({
											value: tag.name,
											label: (
												<span className="flex items-center">
													<span className="mx-8">{tag.name}</span>
												</span>
											)
										}))}
										onChange={value => singleChipChange('evaluationForm', value, item)}
										variant="fixed"
									/>

									<div className="w-full flex flex-col p-12">
										<Typography>Assign people</Typography>
										<div className={"grid pt-10 pl-12 " + classes.gridStyle}>
											{
												item.meta && item.meta.members && item.meta.members.map((member) => (
													<Avatar className="w-32 h-32 -ml-10" src={member.avatar} />
												))
											}


										</div>
										<Button className="mt-10" variant="outlined" onClick={ev => { setSelectedActionType(item.id); dispatch(openCardDialog(item.meta.members)) }}>Assign</Button>

									</div>


								</div>
							</div>
						}
						{item.meta.actionType === 6 &&
							<div className="border-1 flex flex-col mt-10">
								<div className="flex items-center p-12">
									<Typography className="font-500 text-16 flex-1">Add followers</Typography>
									<div className="flex items-center">
										<IconButton className="ml-10" onClick={() => deleteAction(item.id)}>
											<Icon>delete</Icon>
										</IconButton>
									</div>
								</div>
								<div className="w-full flex flex-col p-12">
									<Typography>Assign people</Typography>
									<div className={"grid pt-10 pl-12 " + classes.gridStyle}>
										{
											item.meta && item.meta.members && item.meta.members.map((member) => (
												<Avatar className="w-32 h-32 -ml-10" src={member.avatar} />
											))
										}


									</div>
									<Button className="mt-10" variant="outlined" onClick={ev => { setSelectedActionType(item.id); dispatch(openCardDialog(item.meta.members)) }}>Assign</Button>

								</div>
							</div>
						}

						{item.meta.actionType === 7 &&
							<div className="border-1 flex flex-col mt-10">
								<div className="flex items-center p-12">
									<Typography className="font-500 text-16 flex-1">Assign to</Typography>
									<div className="flex items-center">
										<IconButton className="ml-10" onClick={() => deleteAction(item.id)}>
											<Icon>delete</Icon>
										</IconButton>
									</div>
								</div>
								<div className="w-full flex flex-col p-12">
									<Typography>Assign people</Typography>
									<div className={"grid pt-10 pl-12 " + classes.gridStyle}>
										{
											item.meta && item.meta.members && item.meta.members.map((member) => (
												<Avatar className="w-32 h-32 -ml-10" src={member.avatar} />
											))
										}


									</div>
									<Button className="mt-10" variant="outlined" onClick={ev => { setSelectedActionType(item.id); dispatch(openCardDialog(item.meta.members)) }}>Assign</Button>

								</div>
							</div>
						}
					</>


				))

			}
			<Button onClick={(event) => {
				event.preventDefault();
				event.stopPropagation();
				handleClick(event);
			}}
				className="mt-10"
				variant="outlined">
				Action
			</Button>
			<Menu
				id="card-actions-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={(event) => {
					event.preventDefault();
					event.stopPropagation();
					handleClose(event);
				}}
			>
				{
					actionsTypes.map((action, index) => (
						<MenuItem onClick={(event) => {
							event.preventDefault();
							event.stopPropagation();
							handleMenuClick(event, index, data)
						}}>
							{/* <Icon className="mr-10" fontSize="small">{option.icon}</Icon> */}
							{action}
						</MenuItem>
					))
				}

			</Menu>
			<MemberDialog addMember={handleAddMember} />
		</div >
	)
}
export default WorkflowForm;
