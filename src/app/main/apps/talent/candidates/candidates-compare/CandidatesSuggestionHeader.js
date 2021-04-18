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
import { setCandidatesSearchText, updateleftPagination, setCompare, getCandidates } from './store/candidatesCompareSlice';
import { setSelected } from './store/candidateSuggestionsSlice';
import HeaderSearch from "./HeaderSearch";
import { FormatColorResetOutlined } from '@material-ui/icons';
import {
	openFilterSidebar
} from './store/sidebarsSlice';

const options = ['Add All to Comparison'];

function CandidatesSuggestionHeader(props) {
	const dispatch = useDispatch();
	const [allSelect, setAllSelect] = useState(false);
	const suggestions = useSelector(({ candidatesCompare }) => candidatesCompare.candidateSuggestions.data);
	const leftPagination = useSelector(({ candidatesCompare }) => candidatesCompare.candidates.leftPagination);
	const compare = useSelector(({ candidatesCompare }) => candidatesCompare.candidates.compare);
	const selected = useSelector(({ candidatesCompare }) => candidatesCompare.candidateSuggestions.selected);
	useEffect(() => {
		if (selected && suggestions && selected.length === suggestions.length)
			setAllSelect(true);
		else
			setAllSelect(false);
	}, [selected])

	const prevPage = () => {
		if (leftPagination.page > 0) {
			let pagination = {
				size: leftPagination.size,
				page: leftPagination.page - 1,
				pageNumber: leftPagination.pageNumber - 1
			}
			dispatch(updateleftPagination(pagination));
		}
	}
	const nextPage = () => {
		if (leftPagination.pageNumber < (suggestions && suggestions.length / leftPagination.size)) {
			let pagination = {
				size: leftPagination.size,
				page: leftPagination.page + 1,
				pageNumber: leftPagination.pageNumber + 1
			}
			dispatch(updateleftPagination(pagination));
		}
	}
	const selectAll = (e) => {
		if (e.target.checked) {
			let selectedIds = suggestions.map((candidate) => candidate.id);
			dispatch(setSelected({ id: selectedIds.toString() }));
			setAllSelect(true);
		}
		else {
			dispatch(setSelected({ id: "" }));
			setAllSelect(false);
		}
	}
	return (
		<div className="flex items-center flex-wrap justify-evenly">
			<div className="flex item-center justify-left">
				<Hidden lgUp>
					<IconButton
					color="primary"
						onClick={ev => {
							props.pageLayout.current.toggleLeftSidebar();
						}}
						aria-label="open left sidebar"
					>
						<Icon>close</Icon>
					</IconButton>
				</Hidden>

				<HeaderSearch />
			</div>
			<div className="flex  items-center justify-end">
				<IconButton
					color="primary"
					onClick={prevPage}>
					<Icon>chevron_left</Icon>
				</IconButton>
				<span><Typography>{leftPagination.pageNumber} / {suggestions && suggestions.length / leftPagination.size}</Typography></span>
				<IconButton
					color="primary"
					onClick={nextPage}
				>
					<Icon>chevron_right</Icon>
				</IconButton>
			</div>
			<div className="flex  items-center justify-end">
				{allSelect ?
					<ThreeDotsMenu />
					: null}
				<IconButton onClick={() => dispatch(openFilterSidebar())}>
					<Icon color="primary">filter_alt</Icon>
				</IconButton >
				<div color="primary">

					<Checkbox checked={allSelect} onChange={selectAll} iconStyle={{ fill: '#192d3e' }} labelStyle={{ color: '#192d3e' }} />
				</div>


			</div>
		</div>
	);
}
const ThreeDotsMenu = (props) => {

	const [anchorEl, setAnchorEl] = React.useState(null);
	const dispatch = useDispatch();
	const compare = useSelector(({ candidatesCompare }) => candidatesCompare.candidates.compare);
	const selected = useSelector(({ candidatesCompare }) => candidatesCompare.candidateSuggestions.selected);
	function handleMenuClick(index, row) {
		// console.log(row);
		// if (index === 0) {
		// 	let candidate = row;
		// 	//candidate.applicant.status = !candidate.applicant.status;
		//dispatch(setSelected({ id: "" }))
		dispatch(setCompare({ id: compare.toString() + "," + selected.toString() }))
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
