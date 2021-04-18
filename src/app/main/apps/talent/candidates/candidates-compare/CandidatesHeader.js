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

import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { setCandidatesSearchText } from './store/candidatesCompareSlice';
import HeaderSearch from "./HeaderSearch";


const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

function CandidatesHeader(props) {
	const dispatch = useDispatch();
	const candidates = useSelector(({ candidatesCompare }) => candidatesCompare.candidates);
	const searchText = useSelector(({ candidatesCompare }) => candidatesCompare.candidates.searchText);
	const mainTheme = useSelector(selectMainTheme);

	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const handleClick = () => {
		console.info(`You clicked ${options[selectedIndex]}`);
	};

	const handleMenuItemClick = (event, index) => {
		setSelectedIndex(index);
		setOpen(false);
	};

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	return (
		<div className="flex flex-1 items-center justify-between p-4 sm:p-24">
			<div className="flex flex-shrink items-center sm:w-224">
				<Hidden lgUp>
					<IconButton
						onClick={ev => {
							props.pageLayout.current.toggleLeftSidebar();
						}}
						aria-label="open left sidebar"
					>
						<Icon>menu</Icon>
					</IconButton>
				</Hidden>

				<div className="flex items-center">
					<FuseAnimate animation="transition.expandIn" delay={300}>
						<Icon className="text-32">people</Icon>
					</FuseAnimate>
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Typography variant="h6" className="mx-12 hidden sm:flex">
							{candidates.ids.length} Candidates
						</Typography>
					</FuseAnimate>
				</div>
			</div>
			<div className="flex flex-1 items-center justify-end">

			</div>

			<div className="flex flex-1 items-center justify-end">
				<ButtonGroup>
					<Button
						variant="contained"
						startIcon={<Icon className="text-20">save_alt</Icon>}
					>
						{`Import CSV`}
					</Button>
					<Button
						variant="contained"
						startIcon={<Icon className="text-20">add</Icon>}
					>
						{`Add Candidate`}
					</Button>
				</ButtonGroup>
				{/* <HeaderSearch /> */}
			</div>
		</div>
	);
}

export default CandidatesHeader;
