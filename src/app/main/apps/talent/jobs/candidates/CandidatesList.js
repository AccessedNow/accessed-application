import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import withReducer from 'app/store/withReducer';
import { withRouter } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CandidatesMultiSelectMenu from './CandidatesMultiSelectMenu';
import CandidatesTable from './CandidatesTable';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import reducer from '../store';
import { setSelectedItem, updateCandidate, getCandidates, openEditCandidateDialog, removeCandidate, toggleStarredCandidate, selectCandidates } from '../store/candidatesSlice';
import BoardCardDialog from '../board/dialogs/card/BoardCardDialog';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/core';
import { openCardDialog } from '../store/cardSlice';

const options = [{ value: 'Change Status', icon: '' }, { value: 'Change Progress', icon: 'show_chart' }, { value: 'Change Rating', icon: 'star' }, { value: 'Archive', icon: 'archive' }];


function CandidatesList(props) {
	const dispatch = useDispatch();
	const candidates = useSelector(selectCandidates);	
	const routeParams = useParams();
	const searchText = "";	
	let visibleColumns = useSelector(({ jobApp }) => jobApp.jobs.visibleCandidatesColumns);
	const [filteredData, setFilteredData] = useState(null);

	useDeepCompareEffect(() => {
		dispatch(getCandidates(routeParams));
	}, [dispatch, routeParams]);

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

	const columns = React.useMemo(
		() => {

			let initialCoulms = [
				{
					Header: ({ selectedFlatRows }) => {
						const selectedRowIds = selectedFlatRows.map(row => row.original.id);

						return (
							selectedFlatRows.length > 0 && <CandidatesMultiSelectMenu selectedCandidateIds={selectedRowIds} />
						);
					},
					accessor: 'avatar',
					Cell: ({ row }) => {
						return <Avatar className="mx-8" alt={row.original.applicant.firstName} src={row.original.applicant.avatar} />;
					},
					className: 'justify-center',
					width: 64,
					sortable: false
				},
				{
					Header: 'Applicants',
					accessor: 'firstName',
					Cell: ({ row }) => {
						return <Typography className="mx-8">{row.original.applicant.firstName} {row.original.applicant.lastName}</Typography>;
					},
					className: 'font-bold',
					sortable: true
				},
				{
					Header: 'Position',
					accessor: 'position',
					Cell: ({ row }) => {
						return <Typography className="mx-8">{row.original.applicant.position}</Typography>;
					},
					sortable: true
				},
				{
					Header: 'Progress',
					accessor: 'progress',
					Cell: ({ row }) => {
						return (
							<div className={`mx-8`}>
								<BorderLinearProgress variant="determinate" value={row.original.progress * 10} />
							</div>
						);
					},
					sortable: true
				},
				{
					Header: 'Rate',
					accessor: 'rating',
					sortable: true
				},
				{
					Header: 'Applied',
					accessor: 'appliedOn',
					sortable: true
				},
				// {
				// 	Header: 'Company',
				// 	accessor: 'company',
				// 	sortable: true
				// },
				// {
				// 	Header: 'Job Title',
				// 	accessor: 'jobTitle',
				// 	sortable: true
				// },
				// {
				// 	Header: 'Email',
				// 	accessor: 'email',
				// 	sortable: true
				// },
				// {
				// 	Header: 'Phone',
				// 	accessor: 'phone',
				// 	sortable: true
				// },
				{
					id: 'action',
					width: 128,
					sortable: false,
					Cell: ({ row }) => (
						<div className="flex items-center">
							<ButtonGroup aria-label="contained primary button group">
								<IconButton
									variant="contained"
									onClick={ev => {
										ev.stopPropagation();
										dispatch(toggleStarredCandidate(row.original.id));
									}}
								>

									<Icon>edit</Icon>

								</IconButton>
								<IconButton
									variant="contained"
									onClick={ev => {
										ev.stopPropagation();
										dispatch(removeCandidate(row.original.id));
									}}
								>
									<Icon>attachment</Icon>
								</IconButton>

								<ThreeDotsMenu data={row.original} />
							</ButtonGroup>
						</div >
					)
				}
			]
			if (visibleColumns.find(m => m.name === "Evaluation" && m.checked !== true))
				initialCoulms = initialCoulms.filter(m => m.Header !== "Rate");
			return initialCoulms;
		},
		[dispatch, visibleColumns]
	);

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

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			<>
				<CandidatesTable
					columns={columns}
					data={filteredData}
					onRowClick={(ev, row) => {
						if (row) {
							dispatch(setSelectedItem(row.original.id));
							dispatch(openCardDialog(row.original));
						}
					}}
				/>
				<BoardCardDialog />
			</>
		</FuseAnimate>
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
export default withReducer('jobApp', reducer)(withRouter(CandidatesList));

