import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {openNewCompanyDialog} from "./store/companySlice";

function CompanyToolbar(props) {
	const dispatch = useDispatch();

	function handleOrderChange(ev) {
	}

	return (
		<div className="flex justify-between w-full">
			<div className="flex" />
			<div className="flex items-center">
        <IconButton onClick={ev => dispatch(openNewCompanyDialog())}>
          <Icon>add</Icon>
        </IconButton>
				<FormControl className="">
					<Select onChange={handleOrderChange} displayEmpty name="filter" className="">
						<MenuItem value="">
							<em>Order by</em>
						</MenuItem>
						<MenuItem value="startDate">Start Date</MenuItem>
						<MenuItem value="dueDate">Due Date</MenuItem>
						<MenuItem value="title">Title</MenuItem>
					</Select>
				</FormControl>
				<IconButton onClick={ev => console.log('click')}>
					<Icon>sort</Icon>
				</IconButton>
			</div>
		</div>
	);
}

export default CompanyToolbar;
