import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openNewDepartmentDialog } from './store/departmentsSlice'



function DepartmentHeader(props) {
	const dispatch = useDispatch();
	const departments = useSelector(({ departmentApp }) => departmentApp.departments);



	return (
		<div className="flex flex-1 items-center justify-between p-4 sm:p-24">
			<div className="flex flex-shrink items-center sm:w-224">
				{/* <Hidden lgUp>
					<IconButton
						onClick={ev => {
							props.pageLayout.current.toggleLeftSidebar();
						}}
						aria-label="open left sidebar"
					>
						<Icon>menu</Icon>
					</IconButton>
				</Hidden> */}

				<div className="flex items-center">
					<FuseAnimate animation="transition.expandIn" delay={300}>
						<Icon className="text-32">people</Icon>
					</FuseAnimate>
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Typography variant="h6" className="mx-12 hidden sm:flex">
							{departments.ids.length} Departments
						</Typography>
					</FuseAnimate>
				</div>
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
						onClick={ev => dispatch(openNewDepartmentDialog())}
					>
						{`Add Department`}
					</Button>
				</ButtonGroup>
				{/* <HeaderSearch /> */}
			</div>
		</div>
	);
}

export default DepartmentHeader;
