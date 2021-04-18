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
import { selectActivity,updatePagination } from '../store/activitySlice';
// import { setSelected } from './store/candidatesSlice';
// import HeaderSearch from "./HeaderSearch";
import { FormatColorResetOutlined } from '@material-ui/icons';


const options = ['Add All to Comparison'];

function ActivityHeader(props) {
	const dispatch = useDispatch();

	const activities = useSelector(selectActivity);
	const pagination = useSelector(({ candidatesApp }) => candidatesApp.activity.pagination);


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
		if (pagination.page + 1 < (activities && activities.length / pagination.size)) {
			let paging = {
				sortBy: pagination.sortBy,
				page: pagination.page + 1,
				size: pagination.size
			}
			dispatch(updatePagination(paging));
		}
	}

	return (
		<div className="flex flex-1 items-center justify-between">
			<div className="flex flex-1 item-center justify-left">

			</div>
			<div className="flex flex-1 items-center">
				<IconButton
					color="primary"
					onClick={prevPage}>
					<Icon>chevron_left</Icon>
				</IconButton>
				<span><Typography>{pagination.page + 1} / {activities && Math.ceil(activities.length / pagination.size)}</Typography></span>
				<IconButton
					color="primary"
					onClick={nextPage}
				>
					<Icon>chevron_right</Icon>
				</IconButton>
			</div>
			<div className="flex flex-1 items-center justify-end">



			</div>
		</div>
	);
}

export default ActivityHeader;
