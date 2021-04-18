import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { setCandidatesUnstarred, setCandidatesStarred, removeCandidates } from '../store/candidatesSlice';

function CandidatesMultiSelectMenu(props) {
	const dispatch = useDispatch();
	const { selectedCandidateIds } = props;

	const [anchorEl, setAnchorEl] = useState(null);

	function openSelectedCandidateMenu(event) {
		setAnchorEl(event.currentTarget);
		console.log(anchorEl);
	}

	function closeSelectedCandidatesMenu() {
		setAnchorEl(null);
	}
	const useStyles = makeStyles(theme => ({
		linkText: {
			color: 'inherit !important',
			textDecoration: 'none !important'
		}
	}));
	const classes = useStyles();
	 const routeParams = useParams();
	return (
		<>
			<IconButton
				className="p-0"
				aria-owns={anchorEl ? 'selectedCandidatesMenu' : null}
				aria-haspopup="true"
				onClick={openSelectedCandidateMenu}
			>
				<Icon>more_horiz</Icon>
			</IconButton>
			<Menu
				id="selectedCandidatesMenu"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={closeSelectedCandidatesMenu}
			>
				<MenuList>
					<MenuItem
						onClick={() => {
							dispatch(removeCandidates(selectedCandidateIds));
							closeSelectedCandidatesMenu();
						}}
					>
						<ListItemIcon className="min-w-40">
							<Icon>delete</Icon>
						</ListItemIcon>
						<ListItemText primary="Remove" />
					</MenuItem>
					<MenuItem
						onClick={() => {
							dispatch(setCandidatesStarred(selectedCandidateIds));
							closeSelectedCandidatesMenu();
						}}
					>
						<ListItemIcon className="min-w-40">
							<Icon>star</Icon>
						</ListItemIcon>
						<ListItemText primary="Starred" />
					</MenuItem>
					<MenuItem
						onClick={() => {
							dispatch(setCandidatesUnstarred(selectedCandidateIds));
							closeSelectedCandidatesMenu();
						}}
					>
						<ListItemIcon className="min-w-40">
							<Icon>star_border</Icon>
						</ListItemIcon>
						<ListItemText primary="Unstarred" />
					</MenuItem>
					<MenuItem
						className={classes.linkText}
						component={Link}
						to={`/apps/candidates/compare?id=${selectedCandidateIds}&jobId=${routeParams.jobId}`}
						onClick={() => {
							//dispatch(compareCandidates(selectedCandidateIds));
							closeSelectedCandidatesMenu();
						}}
					>

						<ListItemIcon className="min-w-40">
							<Icon>compare</Icon>
						</ListItemIcon>
						<ListItemText >Candidates Compare</ListItemText>
					</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
}

export default CandidatesMultiSelectMenu;
