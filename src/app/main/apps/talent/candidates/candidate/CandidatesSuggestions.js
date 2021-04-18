import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseUtils from '@fuse/utils';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Menu } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Tooltip from '@material-ui/core/Tooltip';

import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';

// import { setSelected } from '../store/candidatesSlice';
import history from '@history';
import { getCandidates, selectCandidates,setSelectedItem } from '../store/candidatesSlice';
import { Link } from "react-router-dom";

const options = ['Add to Comparison'];

const useStyles = makeStyles(theme => ({
	cardBorder: {
		border: '1px solid #61dafb !important'
	}
}));
function CandidatesSuggestions(props) {
	const dispatch = useDispatch();
	const classes = useStyles();
	const theme = useTheme();
	const candidates = useSelector(selectCandidates);
	const leftPagination = useSelector(({ candidatesApp }) => candidatesApp.candidates.pagination);
	const selected = useSelector(({ candidatesApp }) => candidatesApp.candidates.selected);
	const pageLayout = props.pageLayout;
	console.log(selected);
	console.log(selected && selected.includes(1));

	console.log('suggestion', candidates)
	if (!candidates) {
		return null;
	}


	const setSelectedSuggestion = (id) => {
		let selectedData = [];
		if (selected) {
			if (selected.indexOf(parseInt(id)) > -1)
				selectedData = selected.filter((m) => m !== parseInt(id));
			else
				selectedData = [id];
		}
		else {
			selectedData = [id];
		}
		//	dispatch(setSelected({ id: selectedData.toString() }));
	}

	return (
		<div className="flex flex-col flex-auto flex-shrink-0 w-full">
			<FuseAnimateGroup enter={{ animation: 'transition.slideUpBigIn' }} className="flex flex-wrap">
				{candidates && candidates.slice((leftPagination.page * leftPagination.size), (leftPagination.page * leftPagination.size + leftPagination.size)).map((user) =>
					<div className="w-full pb-24 sm:p-16" key={user.id}
					>
						<Card elevation={1} className={((selected && selected.includes(parseInt(user.id))) ? classes.cardBorder : "") + " flex flex-col rounded-8 border-blue-900 "}
							onClick={() => {
								dispatch(setSelectedItem(user.id));
								history.push('/talent/candidates/' + user.id);
								 pageLayout.current.toggleLeftSidebar();
							}}>
							<CardHeader
								avatar={<Avatar aria-label="Recipe" src={user.applicant.avatar} />}
								action={
									<ThreeDotsMenu data={user} />
								}
								title={
									<span className="flex">
										<Typography className="font-medium" color="primary" paragraph={false}>
											{user.applicant.firstName} {user.applicant.lastName}
										</Typography>
									</span>
								}
								subheader={user.applicant.position}
							/>
							<CardActions className="justify-center">
								<div
									className="flex flex-shrink-0 justify-between w-full px-16"
								>
									<div className="flex">
										<Icon className="text-20 mx-8" color="inherit">
											access_time
										</Icon>
										<Typography className="font-medium truncate" color="inherit">
											{(user.applicant.noOfMonths / 12) < 1 ? 'Less than 1 yr' : (user.applicant.noOfMonths / 12) + ' yrs'}
										</Typography>
									</div>
									<div className="flex items-center">
										<div className="text-16 whitespace-no-wrap">
											{user.applicant.level}
										</div>
									</div>
								</div>
							</CardActions>

						</Card>
					</div>
				)}
			</FuseAnimateGroup>

		</div >
	);
}
const ThreeDotsMenu = (props) => {

	const [anchorEl, setAnchorEl] = React.useState(null);
	const dispatch = useDispatch();
	const compare = useSelector(({ candidatesApp }) => candidatesApp.candidates.compare);
	const selected = useSelector(({ candidatesApp }) => candidatesApp.candidates.selected);
	function handleMenuClick(index, row) {
		//dispatch(setCompare({ id: compare.toString()+","+row.id }))
		dispatch(getCandidates());
		handleClose();
	}

	const handleClick = (e, row) => {
		setAnchorEl(e.currentTarget);
		//	dispatch(setSelected({ id: row.id }));
	}

	const handleClose = () => {
		setAnchorEl(null);
	}

	const { data } = props;

	return (
		<>
			<IconButton onClick={(event) => {
				event.preventDefault();
				event.stopPropagation();
				handleClick(event, data);
			}}>
				<Icon>more_vert</Icon>
			</IconButton>
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
					options.map((option, index) => (
						<MenuItem onClick={(event) => {
							event.preventDefault();
							event.stopPropagation();
							handleMenuClick(index, data)
						}}>

							{option}
						</MenuItem>
					))
				}

			</Menu>
		</>
	)
}
export default CandidatesSuggestions;
