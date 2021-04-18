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
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Tooltip from '@material-ui/core/Tooltip';
import history from '@history';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { selectJobs,toggleView,openNewJobDialog } from "./store/jobsSlice";


const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

function JobHeader(props) {
	const dispatch = useDispatch();
	const jobs = useSelector(selectJobs);
	const mainTheme = useSelector(selectMainTheme);
    const pagination = useSelector(({ jobApp }) => jobApp.jobs.pagination);

	return (
		<div className="flex flex-1 items-center justify-between px-4 sm:px-24">
			<div className="flex flex-shrink items-center sm:w-224">
				<Hidden lgUp>
					<IconButton
						onClick={ev => props.pageLayout.current.toggleLeftSidebar()}
						aria-label="open left sidebar"
					>
						<Icon>menu</Icon>
					</IconButton>
				</Hidden>
				<div className="flex items-center">
					<FuseAnimate animation="transition.expandIn" delay={300}>
						<Icon className="text-32">work</Icon>
					</FuseAnimate>
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Typography variant="h6" className="mx-12 hidden sm:flex">
							{pagination.total} Jobs
						</Typography>
					</FuseAnimate>
				</div>
			</div>


			<div className="flex flex-1 items-center justify-end">
				<ButtonGroup>
					<Button
					 onClick={ev => dispatch(toggleView())}
						variant="contained"
						startIcon={<Icon className="text-20">apps</Icon>}
					>
					</Button>
					<Button
						variant="contained"
						startIcon={<Icon className="text-20">save_alt</Icon>}
					>
						{`Import CSV`}
					</Button>
					<Button
						variant="contained"
						onClick={ev => history.push('/talent/jobs/new')}
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
