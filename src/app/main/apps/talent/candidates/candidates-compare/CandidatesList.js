import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CandidatesMultiSelectMenu from './CandidatesMultiSelectMenu';
import CandidatesTable from './CandidatesTable';
import JobSkillsTable from './JobSkillsTable';
import { removeCandidate, setSelectedItem, selectCandidates, addToBoard,getCandidates } from './store/candidatesCompareSlice';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/core';

const options = [{ value: 'Change Status', icon: '' }, { value: 'Change Progress', icon: 'show_chart' }, { value: 'Change Rating', icon: 'star' }, { value: 'Add To Board', icon: 'developer_board' }, { value: 'Archive', icon: 'archive' }];


function CandidatesList(props) {
	const dispatch = useDispatch();
	const candidates = useSelector(selectCandidates);
	
	const anchorRef = React.useRef(null);


	const searchText = useSelector(({ candidatesCompare }) => candidatesCompare.candidates.searchText);

	const [filteredData, setFilteredData] = useState(null);
	const [skills, setSkills] = useState(null);



	const columns = React.useMemo(
		() => [
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
				Header: 'Experience',
				accessor: 'noOfMonths',
				Cell: ({ row }) => {
					return <Typography className="mx-8">{(row.original.applicant.noOfMonths / 12).toFixed(2)}</Typography>;
				},
				sortable: true
			},
			{
				Header: 'Level',
				accessor: 'level',
				Cell: ({ row }) => {
					return <Typography className="mx-8">{row.original.applicant.level}</Typography>;
				},
				sortable: true
			},
			{
				Header: 'Rate',
				accessor: 'rating',
				sortable: true
			},

			{
				Header: 'Salary',
				accessor: 'salary',
				Cell: ({ row }) => {
					return <Typography className="mx-8">{row.original.applicant.salary}</Typography>;
				},
				sortable: true
			},
			{
				Header: 'Started Date',
				accessor: 'appliedOn',
				sortable: true
			},
			{
				id: 'action',
				width: 128,
				sortable: false,
				Cell: ({ row }) => (
					<div className="flex items-center">

						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch(removeCandidate(row.original.id));
								dispatch(getCandidates());
							}}
						>
							<Icon>delete</Icon>
						</IconButton>
						<ThreeDotsMenu data={row.original} />
					</div>
				)
			}
		],
		[dispatch]
	);
	const skillsColumns = React.useMemo(
		() => [
			{
				Header: 'Skill',
				accessor: 'name',
				Cell: ({ row }) => {
					return <Chip
						label={row.original.skill.name}
						clickable
						color="primary"
					/>;
				},
				className: 'w-56 font-bold',
				sortable: true

			},
			{
				Header: "Applicants",
				accessor: 'avatar',
				Cell: ({ row }) => {
					return (
						<div className="flex">

							{row.original.applicants.map((applicant) => (
								<Avatar src={applicant.avatar} alt={applicant.firstName} />
							))}
						</div>
					)
				},
				className: 'justify-center',
				width: 64,
				sortable: false
			}

		],
		[dispatch]
	);



	useEffect(() => {
		function getFilteredArray(entities, _searchText) {
			if (_searchText.length === 0) {
				return candidates;
			}
			return FuseUtils.filterArrayByString(candidates, _searchText);
		}
		function groupSkills() {
			let filteredSkills = [];
			candidates.forEach((candidate) => {
				candidate.applicant.skills.forEach((item) => {
					let applicant = candidate.applicant;

					let index = filteredSkills.findIndex(m => m.skill.id === item.id);
					if (index > -1)
						filteredSkills[index].applicants.push(applicant);
					else
						filteredSkills.push({ "skill": item, "applicants": [applicant] });

				})
			})
			setSkills(filteredSkills);
		}

		if (candidates) {
			setFilteredData(getFilteredArray(candidates, searchText));
			groupSkills();
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
						}
					}}
				/>
				{
					skills ?
						<JobSkillsTable
							columns={skillsColumns}
							data={skills}
							onRowClick={(ev, row) => {
								if (row) {
									dispatch(setSelectedItem(row.original.id));
								}
							}}
						/>
						: null
				}

			</>
		</FuseAnimate>
	);
}
const ThreeDotsMenu = (props) => {

	const [anchorEl, setAnchorEl] = React.useState(null);
	const dispatch = useDispatch();
	function handleMenuClick(index, row) {
		console.log(row);
		// if (index === 0) {
		// 	let candidate = row;
		// 	//candidate.applicant.status = !candidate.applicant.status;
		// 	dispatch(updateCandidate(candidate))
		// }
		if (index === 2) {
			dispatch(addToBoard(row.id));
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
