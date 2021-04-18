import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Tooltip from '@material-ui/core/Tooltip';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import history from '@history';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { selectJobs, updateVisibleCandidatesColumns, openNewJobDialog } from "../store/jobsSlice";




function JobHeader(props) {
	const dispatch = useDispatch();
	const jobs = useSelector(selectJobs);
	const mainTheme = useSelector(selectMainTheme);



	return (
		<div className="flex flex-1 items-center justify-between px-4 sm:px-24">
			<div className="flex flex-shrink items-center sm:w-224">


			</div>


			<div className="flex flex-1 items-center justify-end">
				<ButtonGroup>
					{/* <Button
						variant="contained"
						startIcon={<Icon className="text-20">apps</Icon>}
					>
					</Button> */}
					<Button
						variant="contained"
						startIcon={<Icon className="text-20">save_alt</Icon>}
					>
						{`Import CSV`}
					</Button>
					<Button
						variant="contained"
						onClick={ev => history.push('/apps/hr/jobs/new')}
						startIcon={<Icon className="text-20">add</Icon>}
					>
						{`Add Job`}
					</Button>
				</ButtonGroup>

			</div>
		</div >
	);
}

export default JobHeader;
