import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Menu } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { getCandidates, updatePagination, selectCandidates } from '../store/candidatesSlice';
// import { setSelected } from './store/candidatesSlice';
// import HeaderSearch from "./HeaderSearch";
import { FormatColorResetOutlined } from '@material-ui/icons';


const options = ['Add All to Comparison'];

function CandidatesSuggestionHeader(props) {
	const dispatch = useDispatch();
	const [allSelect, setAllSelect] = useState(false);
	const candidates = useSelector(selectCandidates);
	const pagination = useSelector(({ candidatesApp }) => candidatesApp.candidates.pagination);
	const compare = useSelector(({ candidatesApp }) => candidatesApp.candidates.compare);
	const selected = useSelector(({ candidatesApp }) => candidatesApp.candidates.selected);
	useEffect(() => {
		if (selected && candidates && selected.length === candidates.length)
			setAllSelect(true);
		else
			setAllSelect(false);
	}, [selected])

	const prevPage = () => {
		if (pagination.page > 0) {
			let paging = {
				sortBy: pagination.sortBy,
				page: pagination.page - 1,
				size: pagination.size
			}
			dispatch(updatePagination(paging));
		}
	}
	const nextPage = () => {
		if (pagination.page + 1 < (candidates && candidates.length / pagination.size)) {
			let paging = {
				sortBy: pagination.sortBy,
				page: pagination.page + 1,
				size: pagination.size
			}
			dispatch(updatePagination(paging));
		}
	}
	const selectAll = (e) => {
		if (e.target.checked) {
			let selectedIds = candidates.map((candidate) => candidate.id);
			//dispatch(setSelected({ id: selectedIds.toString() }));
			setAllSelect(true);
		}
		else {
			//dispatch(setSelected({ id: "" }));
			setAllSelect(false);
		}
	}
	return (
		<div className="flex items-center justify-between mt-24">
			<div className="flex item-center justify-left">
				<IconButton
					color="primary">
					<Icon>thumbs_up_down</Icon>
				</IconButton>
			</div>
		</div>
	);
}
const ThreeDotsMenu = (props) => {

	const [anchorEl, setAnchorEl] = React.useState(null);
	const dispatch = useDispatch();
	const compare = useSelector(({ candidatesApp }) => candidatesApp.candidates.compare);
	const selected = useSelector(({ candidatesApp }) => candidatesApp.candidateSuggestions.selected);
	function handleMenuClick(index, row) {
		// console.log(row);
		// if (index === 0) {
		// 	let candidate = row;
		// 	//candidate.applicant.status = !candidate.applicant.status;
		//dispatch(setSelected({ id: "" }))
		//dispatch(setCompare({ id: compare.toString() + "," + selected.toString() }))
		dispatch(getCandidates());
		handleClose();
		// }
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
			}}
				color="primary">
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
export default CandidatesSuggestionHeader;
