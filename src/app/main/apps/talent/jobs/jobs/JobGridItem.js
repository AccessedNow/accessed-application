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
import LinearProgress from '@material-ui/core/LinearProgress';
const pathToRegexp = require('path-to-regexp');

const useStyles = makeStyles(theme => ({
	jobItem: {
		borderBottom: `1px solid  ${theme.palette.divider}`,

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
		textDecoration: 'none !important'
	},
	actionDiv:
	{
		border: '1px solid red',
		borderRadius: 5,
		paddingRight: 5,
		fontSize: 12,
		color: 'red'
	}
}));

const JobGridItem = props => {
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
		<div className="w-full pb-24 sm:w-1/2 lg:w-1/3 sm:p-16"
		onClick={()=>props.history.push('/talent/jobs/'+props.job.jobId)}>
			<Card elevation={1} className="flex flex-col rounded-8 mb-16">
				<CardHeader
					avatar={<Avatar alt={props.job.company.name} src={props.job.company.avatar} />
					}
					action={
						<div className={`flex items-center mt-12 ` + classes.actionDiv}>
							<Icon size="small">history</Icon>
							<span className="ml-5">2d left</span>
						</div>
					}
				/>
				<CardContent className="flex flex-col flex-auto justify-center p-0 px-16">
					<span className="flex flex-col">
						<Typography className="font-medium" color="primary" paragraph={false}>
							{props.job.title}
						</Typography>
						<Typography className="font-medium" color="primary" paragraph={false}>
							{props.job.city + ", " + props.job.country}
						</Typography>
					</span>
					<span className="flex justify-end mt-36">3 / 5</span>
					<LinearProgress
						className="w-full mb-5"
						variant="determinate"
						value={(4 * 100) / 5}
						color="secondary"
					/>
				</CardContent>
				<CardActions>
					<Avatar className="w-32 h-32 ml-12" src={props.job.createdBy.avatar} alt={props.job.createdBy.firstName} />
				</CardActions>
			</Card>
		</div>
	);
};

export default withRouter(JobGridItem);
