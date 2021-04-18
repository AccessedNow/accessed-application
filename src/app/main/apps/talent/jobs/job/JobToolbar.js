import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import { updateJob,removeJob } from '../store/jobSlice';
import { updateVisibleCandidatesColumns,openEditJobDialog } from '../store/jobsSlice';
import Checkbox from '@material-ui/core/Checkbox';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const pathToRegexp = require('path-to-regexp');

function JobToolbar(props) {
	const dispatch = useDispatch();
	const job = useSelector(({ jobApp }) => jobApp.job);
	const theme = useTheme();
	const [anchorEL, setAnchorEL] = useState(null);

	const toPath = pathToRegexp.compile(props.match.path);
	let options = useSelector(({ jobApp }) => jobApp.jobs.visibleCandidatesColumns);

	const routeParams = useParams();
	const matchParams = { ...routeParams };
	delete matchParams.jobId;
	const deselectUrl = toPath(matchParams);

	if (!job) {
		return null;
	}

	const handleChange = (e) => {
		let modifiedoptions = options.map((option) => {
			if (option.name === e.target.name)
				return { ...option, checked: e.target.checked }
			else
				return option;
		});

		dispatch(updateVisibleCandidatesColumns(modifiedoptions));
	}
	return (
		<div className="flex flex-1 items-center justify-between overflow-hidden sm:px-16">
			<IconButton onClick={() => props.history.push('/apps/hr/jobs')}>
				<Icon>{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}</Icon>
			</IconButton>

			<div className="flex items-center justify-start" aria-label="Toggle star">
				<FuseAnimate animation="transition.expandIn" delay={100}>
					<>
						<IconButton
							onClick={(e) => setAnchorEL(e.currentTarget)}
						>
							<Icon>view_module</Icon>
						</IconButton>
						<Menu open={Boolean(anchorEL)} anchorEl={anchorEL}
							onClose={(event) => {
								event.preventDefault();
								event.stopPropagation();
								setAnchorEL(null);
							}}>

							{
								options.map((option) => (
									<MenuItem>
										<Checkbox name={option.name} checked={option.checked} onChange={(e) => { option.disabled ? e.stopPropagation() : handleChange(e) }} /> {option.name}
									</MenuItem>
								))}


						</Menu>
					</>
				</FuseAnimate>
				<FuseAnimate animation="transition.expandIn" delay={100}>
					<IconButton onClick={() => dispatch(updateJob({ starred: !job.starred }))}>
						{job.starred ? <Icon>star</Icon> : <Icon>star_border</Icon>}
					</IconButton>
				</FuseAnimate>
				<FuseAnimate animation="transition.expandIn" delay={100}>
					<IconButton 	onClick={ev => dispatch(removeJob(job.jobId))}>
						<Icon>delete</Icon>
					</IconButton>
				</FuseAnimate>

				<FuseAnimate animation="transition.expandIn" delay={100}>
					<IconButton onClick={ev => dispatch(openEditJobDialog())}>
						{job.important ? <Icon>edit</Icon> : <Icon>edit</Icon>}
					</IconButton>
				</FuseAnimate>
			
				<FuseAnimate animation="transition.expandIn" delay={100}>
					<IconButton>
						<Icon>more_vert</Icon>
					</IconButton>
				</FuseAnimate>

			</div>
		</div>
	);
}

export default withRouter(JobToolbar);
