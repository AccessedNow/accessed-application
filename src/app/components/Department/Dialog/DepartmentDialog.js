import FuseChipSelect from '@fuse/core/FuseChipSelect';
import { useForm } from '@fuse/hooks';
import FuseUtils from '@fuse/utils/FuseUtils';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Autocomplete } from '@material-ui/lab';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	removeDepartment,
	updateDepartment,
	addDepartment,
	closeNewDepartmentDialog,
	closeEditDepartmentDialog
} from '../store/departmentsSlice';



function DepartmentDialog(props) {
	const dispatch = useDispatch();
	const [locValue, setLocValue] = React.useState("");
	const [inputLocValue, setInputLocValue] = React.useState('');
	const address = useSelector(({ departmentApp }) => departmentApp.address);
	const members = useSelector(({ departmentApp }) => departmentApp.members);
	const selectedDepartment = useSelector(({ departmentApp }) => departmentApp.departments.selectedDepartment);
	const company = useSelector(({ auth }) => auth.user.selectedCompany);
	const DepartmentDialog = useSelector(({ departmentApp }) => departmentApp.departments && departmentApp.departments.departmentDialog);
	const defaultFormState = {
		// id: selectedDepartment ? selectedDepartment.id : '',
		name: selectedDepartment ? selectedDepartment.name : '',
		company:company
		// manager: selectedDepartment ? selectedDepartment.manager : {},
		// location: selectedDepartment ? selectedDepartment.location : '',
		// noOfEmployee: selectedDepartment ? selectedDepartment.noOfEmployee : 3
	};
	const { form, handleChange, setForm, setInForm } = useForm(defaultFormState);

	const initDialog = useCallback(() => {
		/**
		 * Dialog type: 'edit'
		 */
		if (DepartmentDialog.type === 'edit' && DepartmentDialog.data) {
			setForm({ ...DepartmentDialog.data });
		}

		/**
		 * Dialog type: 'new'
		 */
		if (DepartmentDialog.type === 'new') {
			setForm({
				...defaultFormState,
				...DepartmentDialog.data,
				// id: FuseUtils.generateGUID()
			});
		}
	}, [DepartmentDialog.data, DepartmentDialog.type, setForm]);

	useEffect(() => {
		/**
		 * After Dialog Open
		 */
		if (DepartmentDialog.props.open) {
			initDialog();
		}
	}, [DepartmentDialog.props.open, initDialog]);

	function closeComposeDialog() {
		return dispatch(closeNewDepartmentDialog());
	}

	function canBeSubmitted() {
		return form.name.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();

		if (DepartmentDialog.type === 'new') {
			dispatch(addDepartment(form));
		} else {
			dispatch(updateDepartment(form));
		}
		closeComposeDialog();
	}

	function handleRemove() {
		dispatch(removeDepartment(form));
		closeComposeDialog();
	}
	const handleManager = (event, newValue) => {
		let selectedMember = members.data.find(m => m.id === newValue.value);

		setInForm("manager", selectedMember);

	};
	const handleLocation = (event, newValue) => {

		setInForm("location", newValue.value);

	};
	return (
		<Dialog
			classes={{
				paper: 'm-24 rounded-8'
			}}
			{...DepartmentDialog.props}
			onClose={closeComposeDialog}
			fullWidth
			maxWidth="xs"
		>
			<AppBar position="static" elevation={1}>
				<Toolbar className="flex w-full">
					<Typography variant="subtitle1" color="inherit">
						{DepartmentDialog.type === 'new' ? 'New Department' : 'Edit Department'}
					</Typography>
				</Toolbar>
				<div className="flex flex-col items-center justify-center pb-24">
					{DepartmentDialog.type === 'edit' && (
						<Typography variant="h6" color="inherit" className="pt-8">
							{form.name}
						</Typography>
					)}
				</div>
			</AppBar>
			<form noValidate onSubmit={handleSubmit} className="flex flex-col md:overflow-hidden">
				<DialogContent classes={{ root: 'p-24' }}>
					<div className="flex">
						<div className="min-w-48 pt-20">
							<Icon color="action">account_circle</Icon>
						</div>

						<TextField
							className="mb-24"
							label="Name"
							autoFocus
							id="name"
							name="name"
							value={form.name}
							onChange={handleChange}
							variant="outlined"
							required
							fullWidth
						/>
					</div>

					{/* <div className="flex w-full">
						<div className="min-w-48 pt-20">
							<Icon color="action">account_circle</Icon>
						</div>


						{members && members.hasOwnProperty("data") &&
							<FuseChipSelect
								className="text-24 w-full"
								value={{
									value: form.manager.id,
									label: form.manager.firstName && (form.manager.firstName + " " + form.manager.lastName)
								}}
								onChange={value => handleManager(null, value)}
								placeholder="Select Manager"
								textFieldProps={{
									variant: 'outlined'
								}}
								options={members && members.data && members.data.map(member => ({
									value: member.id,
									label: member.firstName + " " + member.lastName

								}))}

								variant="fixed"
							/>
						}
					</div>

					<div className="flex mt-12">
						<div className="min-w-48 pt-20">
							<Icon color="action">home</Icon>
						</div>

						{address && address.hasOwnProperty("data") &&
							<FuseChipSelect
								className="text-24 w-full"
								value={{
									value: form.location,
									label: form.location
								}}
								onChange={value => handleLocation(null, value)}
								placeholder="Select Location"
								textFieldProps={{
									variant: 'outlined'
								}}
								options={address && address.data && address.data.map(addr => ({
									value: addr.city + ", " + addr.state+ ", " + addr.country,
									label: addr.city + ", " + addr.state+ ", " + addr.country

								}))}

								variant="fixed"
							/>
						}
					</div> */}

				</DialogContent>

				{DepartmentDialog.type === 'new' ? (
					<DialogActions className="justify-between p-8">
						<div className="px-16">
							<Button
								variant="contained"
								color="primary"
								onClick={handleSubmit}
								type="submit"
								disabled={!canBeSubmitted()}
							>
								Add
							</Button>
						</div>
					</DialogActions>
				) : (
					<DialogActions className="justify-between p-8">
						<div className="px-16">
							<Button
								variant="contained"
								color="primary"
								type="submit"
								onClick={handleSubmit}
								disabled={!canBeSubmitted()}
							>
								Save
							</Button>
						</div>
						<IconButton onClick={handleRemove}>
							<Icon>delete</Icon>
						</IconButton>
					</DialogActions>
				)}
			</form>
		</Dialog >
	);
}

export default DepartmentDialog;
