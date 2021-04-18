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
import history from '@history';
import MenuItem from '@material-ui/core/MenuItem';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DepartmentTable from './DepartmentTable';
import DepartmentMultiSelectMenu from './DepartmentMultiSelectMenu';
import { removeDepartment, selectDepartments, openEditDepartmentDialog } from './store/departmentsSlice';

import { Menu } from '@material-ui/core';

const options = [{ value: 'Change Status', icon: '' }, { value: 'Change Progress', icon: 'show_chart' }, { value: 'Change Rating', icon: 'star' }, { value: 'Archive', icon: 'archive' }];


function DepartmentList(props) {
	const dispatch = useDispatch();
	const candidates = useSelector(selectDepartments);

	const [filteredData, setFilteredData] = useState(null);

	const columns = React.useMemo(
		() => [


			{
				Header: 'Department',
				accessor: 'name',
				sortable: true
			},
			{
				Header: 'Manager',
				accessor: 'manager',
				Cell: ({ row }) => {
					return <div className="flex items-center">
						<Avatar className="mx-8" alt={row.original.manager && row.original.manager.firstName} src={row.original.manager && row.original.manager.avatar} />
						<Typography>{row.original.manager && row.original.manager.firstName + " " + row.original.manager.lastName}</Typography>
					</div>;
				},
				sortable: true
			},
			{
				Header: 'No Of Employees',
				accessor: 'noOfEmployee',
				sortable: true
			},


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
									dispatch(openEditDepartmentDialog(row.original))
								}}
							>

								<Icon>edit</Icon>

							</IconButton>

							<IconButton
								variant="contained"
								onClick={ev => {
									ev.stopPropagation();
									dispatch(removeDepartment(row.original))
								}}
							>

								<Icon>delete</Icon>

							</IconButton>
							{/* <ThreeDotsMenu data={row.original} /> */}
						</ButtonGroup>
					</div >
				)
			}
		],
		[dispatch]
	);

	useEffect(() => {

		if (candidates) {
			setFilteredData(candidates);
		}
	}, [candidates]);

	if (!filteredData) {
		return null;
	}

	if (filteredData.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="textSecondary" variant="h5">
					There are no departments!
				</Typography>
			</div>
		);
	}

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			<DepartmentTable
				columns={columns}
				data={filteredData}
				onRowClick={(ev, row) => {

				}}
			/>
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
			//dispatch(updateCandidate(candidate))
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
export default DepartmentList;
