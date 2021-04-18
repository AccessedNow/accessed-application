import FuseChipSelect from '@fuse/core/FuseChipSelect';
import { useDebounce, useForm, useUpdateEffect } from '@fuse/hooks';
import _ from '@lodash';
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
import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLabel } from './store/boardSlice';
import { closeCardDialog, removeCard, updateCard } from './store/cardSlice';
import { updateJob } from './store/jobSlice';


import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActions, CardContent, CardHeader, Divider, Link, Menu, MenuItem, Select, Switch } from '@material-ui/core';



const JobForm = React.forwardRef((props, ref) => {
	const rootRef = useRef(null);
	const dispatch = useDispatch();
	//const [questions, setQuestions] = useState([]);
	const [questionObj, setquestionObj] = useState();
	const [requiredType, setRequiredType] = useState("Optional");
	const [newQuestion, setNewquestion] = useState(false);
	const [showAddOption, setShowAddOption] = useState(false);
	const requiredTypes = [{ id: 0, name: "Optional" }, { id: 1, name: "Required" }];
	const questionTypes = [
		{ id: "SINGLELINE", type: "Text (Single Line)" },
		{ id: "MULTILINE", type: "Text (Multi Line)" },
		{ id: "YESNO", type: "Yes/No" },
		{ id: "SINGLECHOICE", type: "Single choice" },
		{ id: "MULTIPLECHOICE", type: "Multiple choice" },
		{ id: "VIDEOANSWER", type: "Video answer" },
		{ id: "ADDFILE", type: "Add File" },
		{ id: "INFOBOX", type: "Info Box" }];
	const job = useSelector(({ jobCreateApp }) => jobCreateApp.job.job);
	const [selectedQuestion, setSelectedQuestion] = useState({});

	const { form: cardForm, handleChange, setForm, setInForm } = useForm(job);
	const { form: questionForm, handleChange: handleQuestionChange, setForm: setQuestionForm, setInForm: setInQuestionForm, resetForm } = useForm({

		"id": new Date().getTime(),
		"type": "SINGLELINE",
		"question": "",
		"options": [{
			id: new Date().getTime(),
			option: ""
		}],
		"isRequired": true,

	});
	useEffect(() => {
		if (job)
			setForm(job);
	}, [job])
	React.useImperativeHandle(ref, () => ({
		handleFormSubmit() {
			dispatch(updateJob(cardForm));
		}
	}));
	function addNewQuestion(object) {

		setQuestionForm(object ? object : {
			"id": new Date().getTime(),
			"type": "SINGLELINE",
			"question": "",
			"options": [{
				id: new Date().getTime(),
				option: ""
			}],
			"isRequired": true
		});
		if (object) {
			setSelectedQuestion(object);
		}
		else {
			setNewquestion(true);
		}
	}


	function updateQuestion(e, type, index) {
		if (type === "options") {
			let option = questionForm.options[index];
			option.option = e.target.value;
			questionForm.options[index] = option;
			setInQuestionForm(type, questionForm.options);
		}
		else {
			setInQuestionForm(type, e.target.value);
		}
	}
	function saveQuestion(shouldAddNew, object) {
		let index = cardForm.questions.findIndex(m => m.id === (object ? object.id : questionForm.id));
		if (index > -1) {
			setInForm("questions", cardForm.questions.map((item, idx) => {
				if (idx === index)
					return (object ? object : questionForm);
				else
					return item;
			}));
		}
		else {

			setInForm("questions", [...cardForm.questions, questionForm]);
		}
		setNewquestion(shouldAddNew);
		resetForm();

	}
	function updateForm(e, object, type, index) {
		if (type === "options") {
			let option = object.options[index];
			option.option = e.target.value;
			object.options[index] = option;
			saveQuestion(false, object);
		}
		else {
			let updatedObject = object;
			updatedObject[type] = e.target.value;
			saveQuestion(false, updatedObject);
		}

	}
	function addMoreOption() {
		setInQuestionForm("options", [...questionForm.options, { id: new Date().getTime(), option: "" }]);
		if (questionForm.options.length === 4) {
			setShowAddOption(false);
		}
	}
	function deleteQuestion(id) {
		setInForm("questions", cardForm.questions.filter(m => m.id !== id));
		if(questionForm.id===id)
		{
			setQuestionForm({});
		}
	}

	function changeApplicationPreferences(e, type) {

		switch (type) {
			case "linkedIn":
				setInForm("applicationPreferences", { ...cardForm.applicationPreferences, linkedIn: e.target.checked });
				break;
			case "indeed":
				setInForm("applicationPreferences", { ...cardForm.applicationPreferences, indeed: e.target.checked });
				break;
			case "socialMediaShare":
				setInForm("applicationPreferences", { ...cardForm.applicationPreferences, socialMediaShare: e.target.checked });
				break;
			case "jobLocation":
				setInForm("applicationPreferences", { ...cardForm.applicationPreferences, jobLocation: e.target.checked });
				break;
		}

	}

	function handleExpand(question) {
		setNewquestion(false);
		setSelectedQuestion(question);
	}
	function saveEditForm() {
		setSelectedQuestion({});
	}
	function cancelForm() {
		setNewquestion(false);
		setSelectedQuestion({});
		setQuestionForm({});
	}




	return (
		<>

			<DialogContent className="p-16 sm:p-24" ref={rootRef}>
				<div className="flex flex-col items-center mb-24 w-full">
					<div className="w-full">
						<fieldset className="p-20 border-1">
							<legend className="font-600 text-16">Screening questions</legend>
							{
								cardForm.questions && cardForm.questions.map((question, index) => (
									<>
										{question.id !== questionForm.id &&
											<div className="flex items-center  w-full border-1 cursor-pointer transition-all" onClick={() => addNewQuestion(question)}>
												<div className="flex-1 ml-10">{question.question}</div>
												<div className="flex ml-10">
													<IconButton variant="primary" onClick={() => addNewQuestion(question)}>
														<Icon>edit</Icon>
													</IconButton>
													<IconButton className="ml-10" onClick={() => { deleteQuestion(question.id) }}>
														<Icon>delete</Icon>
													</IconButton>
												</div>
											</div>
										}
										{
											question.id === questionForm.id &&
											<Card className="w-full border-1 mt-10" elevation={0}>
												<CardHeader
													avatar={<Select
														key={questionForm.type}
														value={questionForm.type}
														onChange={(e) => updateQuestion(e, "type")}

													>
														{
															questionTypes && questionTypes.map((question, index) => (
																<MenuItem key={index} value={question.id}>{question.type}</MenuItem>
															))
														}


													</Select>}
													action={
														<Select
															value={questionForm.isRequired ? 1 : 0}
															onChange={(e) => updateQuestion(e, "isRequired")}
														>
															{
																requiredTypes && requiredTypes.map((question, index) => (
																	<MenuItem key={index} value={question.id}>{question.name}</MenuItem>
																))
															}


														</Select>
													}


												/>
												<CardContent>
													<Divider></Divider>
													<TextField
														label="Type Question"
														type="text"
														name="question"
														variant="outlined"
														fullWidth
														required
														value={questionForm.question}
														key={"quest"}
														onChange={(e) => updateQuestion(e, "question")}
													/>

													{
														(questionForm.type === "SINGLECHOICE" || questionForm.type === "MULTIPLECHOICE") &&
														<div className="flex flex-col w-full">
															<Typography className="font-600 text-16 mt-10">Answers</Typography>
															{
																questionForm.options && questionForm.options.map((option, index) =>
																(
																	<TextField
																		name={"choice" + index}
																		variant="outlined"
																		fullWidth
																		value={option.option}
																		className="mt-5"
																		onChange={(e) => updateQuestion(e, "options", index)}

																	/>
																))

															}
															{questionForm.options && questionForm.options.length < 4 &&
																<Button variant="outlined" className="mt-10" onClick={() => addMoreOption()} >Add</Button>
															}
														</div>
													}

													{
														questionForm.type === "SINGLELINE" &&
														<div className="flex flex-col w-full">
															<Typography className="font-600 text-16 mt-10">Answer</Typography>

															<TextField
																name="choice"
																variant="outlined"
																fullWidth
																value={questionForm.answer}
																onChange={(e) => updateQuestion(e, "answer")}
															/>


														</div>
													}
													{
														questionForm.type === "MULTILINE" &&
														<div className="flex flex-col w-full">
															<Typography className="font-600 text-16 mt-10">Answer</Typography>
															<TextField
																name="choice"
																variant="outlined"
																fullWidth
																multiline
																rows="4"
																value={questionForm.answer}
																onChange={(e) => updateQuestion(e, "answer")}
															/>
														</div>
													}
													{
														questionForm.type === "INFOBOX" &&
														<div className="flex flex-col w-full">
															<TextField
																name="choice"
																variant="outlined"
																fullWidth
																multiline
																value={questionForm.answer}
																onChange={(e) => updateQuestion(e, "answer")}
															/>
														</div>
													}

													<Divider></Divider>
												</CardContent>
												<CardActions className="flex items-right">
													<Button variant="outlined" onClick={() => cancelForm()}>
														Cancel
							</Button>

													<Button variant="outlined" onClick={() => saveQuestion(false)}>
														Save
							</Button>
													<Button variant="outlined" onClick={() => deleteQuestion(questionForm.id)}>
														Delete
							</Button>
												</CardActions>
											</Card>
										}
									</>

								))

							}

							{
								newQuestion &&
								<Card className="w-full border-1 mt-10" elevation={0}>
									<CardHeader
										avatar={<Select
											key={questionForm.type}
											value={questionForm.type}
											onChange={(e) => updateQuestion(e, "type")}

										>
											{
												questionTypes && questionTypes.map((question, index) => (
													<MenuItem key={index} value={question.id}>{question.type}</MenuItem>
												))
											}


										</Select>}
										action={
											<Select
												value={questionForm.isRequired ? 1 : 0}
												onChange={(e) => updateQuestion(e, "isRequired")}
											>
												{
													requiredTypes && requiredTypes.map((question, index) => (
														<MenuItem key={index} value={question.id}>{question.name}</MenuItem>
													))
												}


											</Select>
										}


									/>
									<CardContent>
										<Divider></Divider>
										<TextField
											label="Type Question"
											type="text"
											name="question"
											variant="outlined"
											fullWidth
											required
											value={questionForm.question}
											key={"quest"}
											onChange={(e) => updateQuestion(e, "question")}
										/>

										{
											(questionForm.type === "SINGLECHOICE" || questionForm.type === "MULTIPLECHOICE") &&
											<div className="flex flex-col w-full">
												<Typography className="font-600 text-16 mt-10">Answers</Typography>
												{
													questionForm.options && questionForm.options.map((option, index) =>
													(
														<TextField
															name={"choice" + index}
															variant="outlined"
															fullWidth
															value={option.option}
															className="mt-5"
															onChange={(e) => updateQuestion(e, "options", index)}

														/>
													))

												}
												{questionForm.options && questionForm.options.length < 4 &&
													<Button variant="outlined" className="mt-10" onClick={() => addMoreOption()} >Add</Button>
												}
											</div>
										}

										{
											questionForm.type === "SINGLELINE" &&
											<div className="flex flex-col w-full">
												<Typography className="font-600 text-16 mt-10">Answer</Typography>

												<TextField
													name="choice"
													variant="outlined"
													fullWidth
													value={questionForm.answer}
													onChange={(e) => updateQuestion(e, "answer")}
												/>


											</div>
										}
										{
											questionForm.type === "MULTILINE" &&
											<div className="flex flex-col w-full">
												<Typography className="font-600 text-16 mt-10">Answer</Typography>
												<TextField
													name="choice"
													variant="outlined"
													fullWidth
													multiline
													rows="4"
													value={questionForm.answer}
													onChange={(e) => updateQuestion(e, "answer")}
												/>
											</div>
										}
										{
											questionForm.type === "INFOBOX" &&
											<div className="flex flex-col w-full">
												<TextField
													name="choice"
													variant="outlined"
													fullWidth
													multiline
													value={questionForm.answer}
													onChange={(e) => updateQuestion(e, "answer")}
												/>
											</div>
										}

										<Divider></Divider>
									</CardContent>
									<CardActions className="flex items-right">
										<Button variant="outlined" onClick={() => cancelForm()}>
											Cancel
							</Button>
										<Button variant="outlined" onClick={() => saveQuestion(true)}>
											Save and add another
							</Button>
										<Button variant="outlined" onClick={() => saveQuestion(false)}>
											Save
							</Button>
									</CardActions>
								</Card>

							}
							{
								!newQuestion &&

								<Button color="primary" className="w-full mt-10 border-1 border-dashed" onClick={() => { addNewQuestion() }}>Add</Button>
							}
						</fieldset>
					</div>

					<div className="w-full mt-10">
						<fieldset className="p-20 border-1">
							<legend className="font-600 text-16">Personal Information</legend>
							<div className="flex flex-col mt-16 mb-12">
								{/* <Typography className="font-600 text-16">Personal Information</Typography> */}
								<Typography className="font-500 text-12">Decide what should be dispalyed on the application form</Typography>
							</div>

							<div className="flex justify-between flex-wrap">
								<div className="flex flex-col flex-1">
									<Typography className="text-16">CV/Resume</Typography>
									<Switch
										value={cardForm.requiredResume}
										onChange={(e) => setInForm("requiredResume", e.target.value)}
									></Switch>
								</div>
								<div className="flex flex-col flex-1 ml-10">
									<Typography className="text-16">Cover Letter</Typography>
									<Switch
										value={cardForm.requiredCoverLetter}
										onChange={(e) => setInForm("requiredCoverLetter", e.target.value)}
									></Switch>
								</div>
							</div>
							<div className="flex flex-wrap mt-10">
								<div className="flex flex-col flex-1">
									<Typography className="text-16">Photo</Typography>
									<Switch
										value={cardForm.requiredPhoto}
										onChange={(e) => setInForm("requiredPhoto", e.target.value)}
									></Switch>
								</div>
								<div className="flex flex-col flex-1 ml-10">
									<Typography className="text-16">Phone</Typography>
									<Switch
										value={cardForm.requiredPhone}
										onChange={(e) => setInForm("requiredPhone", e.target.value)}
									></Switch>
								</div>
							</div>
						</fieldset>
					</div>

					<div className="w-full mt-10">
						<fieldset className="p-20 border-1">
							<legend className="font-600 text-16">Application Preferences</legend>
							<div className="flex flex-col mt-16 mb-12">

								<Typography className="font-500 text-12">Decide what should be dispalyed on the application form</Typography>
							</div>

							<div className="flex justify-between flex-wrap">
								<div className="flex flex-col flex-1">
									<Typography className="text-16">Apply with LinkedIn</Typography>
									<Switch
										value={cardForm.linkedIn}
										onChange={(e) => changeApplicationPreferences(e, "linkedIn")}
									></Switch>
								</div>
								<div className="flex flex-col flex-1 ml-10">
									<Typography className="text-16">Apply with indeed</Typography>
									<Switch
										value={cardForm.indeed}
										onChange={(e) => changeApplicationPreferences(e, "indeed")}
									></Switch>
								</div>
							</div>
							<div className="flex flex-wrap mt-10">
								<div className="flex flex-col flex-1">
									<Typography className="text-16">Social Media Share</Typography>
									<Switch
										value={cardForm.socialMediaShare}
										onChange={(e) => changeApplicationPreferences(e, "socialMediaShare")}
									></Switch>
								</div>
								<div className="flex flex-col flex-1 ml-10">
									<Typography className="text-16">Job Location</Typography>
									<Switch
										value={cardForm.jobLocation}
										onChange={(e) => changeApplicationPreferences(e, "jobLocation")}
									></Switch>
								</div>
							</div>
						</fieldset>
					</div>

				</div>
			</DialogContent>
		</>
	);
});

export default JobForm;
