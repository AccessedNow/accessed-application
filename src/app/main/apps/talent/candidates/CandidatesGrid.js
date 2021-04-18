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

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Tooltip from '@material-ui/core/Tooltip';
import { Menu } from '@material-ui/core';

import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';

import CandidatesMultiSelectMenu from './CandidatesMultiSelectMenu';
import CandidatesTable from './CandidatesTable';
import { setSelectedItem, openCheckAvailabilityeDialog, updateCandidate, openEditCandidateDialog, removeCandidate, toggleStarredCandidate, selectCandidates } from './store/candidatesSlice';
import { updateTodo } from "../../todo/store/todosSlice";
import { Link } from "react-router-dom";

const options = [{ value: 'Change Status', icon: '' }, { value: 'Change Progress', icon: 'show_chart' }, { value: 'Change Rating', icon: 'star' }, { value: 'Archive', icon: 'archive' }];



function CandidatesList(props) {
	const dispatch = useDispatch();
	const theme = useTheme();
	const candidates = useSelector(selectCandidates);
	const anchorRef = React.useRef(null);


	const searchText = useSelector(({ candidatesApp }) => candidatesApp.candidates.searchText);
	const user = useSelector(({ candidatesApp }) => candidatesApp.user);

	const [filteredData, setFilteredData] = useState(null);

	const [selectedIndex, setSelectedIndex] = React.useState(1);
	const [open, setOpen] = React.useState(false);
	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};
	const useStyles = makeStyles(theme => ({
		cardRatingText: {
			fontSize: 12,
			padding: 5
		}
	}));
	const classes = useStyles();
	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	const handleMenuItemClick = (event, index) => {
		setSelectedIndex(index);
		setOpen(false);
	};

	const BorderLinearProgress = withStyles(theme => ({
		root: {
			height: 10,
			borderRadius: 5
		},
		colorPrimary: {
			backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
		},
		bar: {
			borderRadius: 5,
			backgroundColor: '#faeaa8'
		}
	}))(LinearProgress);

	useEffect(() => {
		function getFilteredArray(entities, _searchText) {
			if (_searchText.length === 0) {
				return candidates;
			}
			return FuseUtils.filterArrayByString(candidates, _searchText);
		}

		if (candidates) {
			setFilteredData(getFilteredArray(candidates, searchText));
		}
	}, [candidates, searchText]);

	if (!filteredData) {
		return null;
	}

	if (filteredData.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="textSecondary" variant="h5">
					There are no candidates!
				</Typography>
			</div>
		);
	}
	function handleFavoriteClick(row) {
		let candidate = row;
		//candidate.applicant.status = !candidate.applicant.status;
		dispatch(updateCandidate(candidate))

	}
	return (
		<div className="flex flex-col flex-auto flex-shrink-0 w-full">
			<FuseAnimateGroup enter={{ animation: 'transition.slideUpBigIn' }} className="flex flex-wrap py-24">
				{filteredData.map((user) =>
					<div className="w-full pb-24 sm:w-1/2 lg:w-1/3 sm:p-16" key={user.id}
						onClick={ev => dispatch(setSelectedItem(user.id))}
					>
						<Card elevation={1} className="flex flex-col h-256 rounded-8">
							<CardHeader
								avatar={<Avatar aria-label="Recipe" src={user.applicant.avatar} />}
								action={
									<ThreeDotsMenu data={user.id} />
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
							<CardContent className="flex flex-col flex-auto items-center justify-center p-0">
								<div className="flex items-center justify-around w-full" >
									<Typography color="secondary" className={classes.cardRatingText}>
										{user.rating + `.0`} RATING
											</Typography>
									<div className={classes.root + " w-64"}>
										<BorderLinearProgress variant="determinate" value={user.progress * 10} />
									</div>
									<div>
										<IconButton onClick={()=>handleFavoriteClick(user)}>
											<Icon>favorite</Icon>
										</IconButton>
									</div>
								</div>
								<Divider className="h-1 w-full" />
								<div className="flex mb-10 justify-center mt-5 mb-5">
									<div>Exp: {(user.applicant.noOfMonths / 12).toFixed(2)} yrs</div>
									<Divider orientation="vertical" flexItem className="mx-10" />
									<div>Lvl: {user.applicant.level}</div>
								</div>
								<Divider className="h-1 w-full" />
								<div className="flex flex-wrap mb-6 -mx-4 mt-6">

									<Tooltip title="">
										<Avatar className="mx-4 w-32 h-32" src="assets/images/avatars/Abbott.jpg" />
									</Tooltip>
									<Tooltip title="">
										<Avatar className="mx-4 w-32 h-32" src="assets/images/avatars/Arnold.jpg" />
									</Tooltip>

									<div />
								</div>
							</CardContent>
							<Divider className="h-1 w-full" />
							<CardActions className="justify-center">
								<Button
									className="justify-start px-32"
									color="secondary"
									onClick={ev => dispatch(openCheckAvailabilityeDialog())}
								>
									Check Availibilty
									</Button>
							</CardActions>
							<LinearProgress
								className="w-full"
								variant="determinate"
								value={(4 * 100) / 5}
								color="secondary"
							/>
						</Card>
					</div>
				)}
			</FuseAnimateGroup>

		</div>
	);
}
const ThreeDotsMenu = (props) => {

	const [anchorEl, setAnchorEl] = React.useState(null);
	const dispatch = useDispatch();
	function handleMenuClick(index, row) {
		console.log(row);
		if (index === 0) {
			let candidate = row;
			//candidate.applicant.status = !candidate.applicant.status;
			dispatch(updateCandidate(candidate))
		}
	}

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
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
				handleClick(event);
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
							<Icon className="mr-10" fontSize="small">{option.icon}</Icon>
							{option.value}
						</MenuItem>
					))
				}

			</Menu>
		</>
	)
}
export default CandidatesList;
