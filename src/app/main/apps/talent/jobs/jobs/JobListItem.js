import _ from '@lodash';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import JobChip from '../JobChip';
import { toggleInSelectedJobs } from '../store/jobsSlice';
import { selectLabelsEntities } from '../store/labelsSlice';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
const pathToRegexp = require('path-to-regexp');

const useStyles = makeStyles(theme => ({
	jobItem: {
		// borderBottom: `1px solid  ${theme.palette.divider}`,

		'&.unread': {
			background: 'rgba(0,0,0,0.03)'
		},
		'&.selected': {
			'&::after': {
				content: '""',
				position: 'absolute',
				left: 0,
				display: 'block',
				height: '100%',
				width: 3,
				backgroundColor: theme.palette.primary.main
			}
		}
	},
	avatar: {
		backgroundColor: theme.palette.primary[500]
	},
	linkText: {
		color: 'inherit !important',
		textDecoration: 'none !important',
		background:'transparent !important'
	},
	gridStyle:
	{
		gridTemplateColumns: 'repeat(12,1fr)',
		position: 'relative'
	}
}));

const JobListItem = props => {
	const dispatch = useDispatch();
	const selectedJobIds = useSelector(({ jobApp }) => jobApp.jobs.selectedJobIds);
	const labels = useSelector(selectLabelsEntities);
	const routeParams = useParams();

	const classes = useStyles(props);
	const toPath = pathToRegexp.compile(props.match.path);
	const checked = selectedJobIds.length > 0 && selectedJobIds.find(id => id === props.job.jobId) !== undefined;
const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2
	});
	return (
		<ListItem
			dense
			button
			to={`/talent/jobs/${props.job.jobId}`}
			component={Link}
			className={clsx(
				classes.jobItem,
				checked && 'selected',
				!props.job.read && 'unread',
				'py-0 px-0 mb-16',
				classes.linkText
			)}
		>
		<Card className="flex flex-col rounded-8 w-full"
			>
			<CardHeader
				avatar={
					<Avatar alt={props.job.company.name} src={props.job.company.avatar} />
				}
				action={
					<IconButton>
						<Icon>more_vert</Icon>
					</IconButton>
				}
				title={
					<span className="flex">
						<Typography className="font-medium" color="primary" paragraph={false}>
							{props.job.title}
						</Typography>
					</span>
				}
				subheader={props.job.city + ", " + props.job.country}
			/>
			<CardContent className="flex flex-col flex-auto items-center justify-center p-0">
				<div className="flex items-center w-full pl-56" >

					{props.job.tags && props.job.tags.length > 0 ?
						props.job.tags.map(item => (
							<Chip
								variant="default"
								size="small"
								label={item}
								className="my-5 mx-5"
							></Chip>
						))
						: null}
				</div>

				<div className="flex px-68 pt-24 w-full justify-between">
					<div className="flex flex-col">
						<Typography>Posted 6 days ago - {props.job.candidates.length} applicants</Typography>
						<div className={"grid pt-10 pl-12 " + classes.gridStyle}>
							{
								props.job.candidates.slice(0, 4).map((candidate) => (
									<Avatar className="w-32 h-32 -ml-10" src={candidate.applicant.avatar} />
								))
							}


						</div>
					</div>

					<table className={'text-justify'}>
						<tbody>
							<tr className="type">

								<td className={classes.tableTD}>Seniority Level : </td>
								<td className={classes.tableTD}>{props.job.level.name}</td>
							</tr>

							<tr className="size">

								<td className={classes.tableTD}>Employment Type : </td>
								<td className={classes.tableTD}>{props.job.employmentType.name}</td>
							</tr>

							<tr className="location">
								<td className={classes.tableTD}>
									Salary :
								</td>
								<td className={classes.tableTD} colspan="2">
									{formatter.format(props.job.salaryRangeLow)} - {formatter.format(props.job.salaryRangeHigh)}
								</td>
							</tr>
						</tbody>
					</table>

				</div>
			</CardContent>
		</Card >

		</ListItem>
		// 	<ListItem
		// 		dense
		// 		button
		// 		to={`/apps/hr/jobs/${props.job.jobId}`}
		// 		component={Link}
		// 		className={clsx(
		// 			classes.jobItem,
		// 			checked && 'selected',
		// 			!props.job.read && 'unread',
		// 			'py-16 px-0 md:px-8 ',
		// 			classes.linkText
		// 		)}
		// 	>
		// 		{/* <Checkbox
		// 			tabIndex={-1}
		// 			disableRipple
		// 			checked={checked}
		// 			onChange={() => dispatch(toggleInSelectedJobs(props.job.jobId))}
		// 			onClick={ev => ev.stopPropagation()}
		// 		/> */}

		// 		<div className="flex flex-1 flex-col relative overflow-hidden">
		// 			<div className="flex items-center justify-between px-16 pb-8">
		// 				<Typography variant="subtitle1" className="">
		// 					{props.job.title}
		// 				</Typography>
		// 				<IconButton>
		// 					<Icon>more_vert</Icon>
		// 				</IconButton>
		// 			</div>
		// 			<div className="flex px-16 py-0">

		// 				<Typography>{props.job.title}</Typography>

		// 			</div>
		// 			<div className="flex mb-10 justify-between mt-5 mb-5 w-full px-16">
		// 				<div>{props.job.city + "," + props.job.country}</div>
		// 				<div>Exp: {(props.job.minMonthExperience / 12).toFixed(2)} yrs</div>

		// 				<div>Lvl: {props.job.level.name}</div>
		// 			</div>
		// 			<div className="flex px-16 py-8">


		// 				{props.job.tags && props.job.tags.length > 0 ?
		// 					props.job.tags.map(item => (
		// 						<Chip
		// 							variant="default"
		// 							size="small"
		// 							label={item}
		// 							className="my-5 mx-5"
		// 						></Chip>
		// 					))
		// 					: null}
		// 			</div>

		// 			{/*<div className="flex justify-end px-12">*/}
		// 			{/*{!_.isEmpty(labels) &&*/}
		// 			{/*props.job.labels.map(label => (*/}
		// 			{/*<JobChip*/}
		// 			{/*className="mx-2 mt-4"*/}
		// 			{/*title={labels[label].title}*/}
		// 			{/*color={labels[label].color}*/}
		// 			{/*key={label}*/}
		// 			{/*/>*/}
		// 			{/*))}*/}
		// 			{/*</div>*/}
		// 		</div>
		// 	</ListItem>
		//
	);
};

export default withRouter(JobListItem);
