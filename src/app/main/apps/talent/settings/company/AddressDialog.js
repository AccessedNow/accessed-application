import { useForm } from '@fuse/hooks';
import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { amber, red } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import moment from 'moment/moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAddress, addAddress, closeNewAddressDialog, closeEditAddressDialog, updateAddress } from './store/companySlice';

const defaultFormState = {
	id: '',
	name: '',
	street: '',
	city: '',
	state: '',
	country: '',
	isPrimary: false
};

function AddressDialog(props) {
	const dispatch = useDispatch();
	const addressDialog = useSelector(({ settingsCompany }) => settingsCompany.company.addressDialog);

	const { form, handleChange, setForm } = useForm({ ...defaultFormState });
	const startDate = moment(form.startDate).format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS);
	const dueDate = moment(form.dueDate).format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS);

	const initDialog = useCallback(() => {
		/**
		 * Dialog type: 'edit'
		 */
		if (addressDialog.type === 'edit' && addressDialog.data) {
			setForm({ ...addressDialog.data });
		}

		/**
		 * Dialog type: 'new'
		 */
		if (addressDialog.type === 'new') {
			setForm({
				...defaultFormState,
				...addressDialog.data,
				id: FuseUtils.generateGUID()
			});
		}
	}, [addressDialog.data, addressDialog.type, setForm]);

	useEffect(() => {
		/**
		 * After Dialog Open
		 */
		if (addressDialog.props.open) {
			initDialog();
		}
	}, [addressDialog.props.open, initDialog]);

	function closeaddressDialog() {
		return addressDialog.type === 'edit' ? dispatch(closeEditAddressDialog()) : dispatch(closeNewAddressDialog());
	}

	function handleToggleImportant() {
		setForm({
			...form,
			important: !form.important
		});
	}

	function handleToggleStarred() {
		setForm({
			...form,
			starred: !form.starred
		});
	}


	function toggleCompleted() {
		setForm({
			...form,
			completed: !form.completed
		});
	}

	function canBeSubmitted() {
		return form.title.length > 0;
	}

	return (
		<Dialog
			{...addressDialog.props}
			onClose={closeaddressDialog}
			fullWidth
			maxWidth="sm"
			classes={{
				paper: 'rounded-8'
			}}
		>
			<AppBar position="static" elevation={1}>
				<Toolbar className="flex w-full">
					<Typography variant="subtitle1" color="inherit">
						{addressDialog.type === 'new' ? 'New Todo' : 'Edit Todo'}
					</Typography>
				</Toolbar>
			</AppBar>

			<DialogContent classes={{ root: 'p-0' }}>
				<div className="mb-16">
					<div className="flex items-center justify-between p-12">
						<div className="flex">
							<Checkbox
								tabIndex={-1}
								checked={form.completed}
								onChange={toggleCompleted}
								onClick={ev => ev.stopPropagation()}
							/>
						</div>

						<div className="flex items-center justify-start" aria-label="Toggle star">
							<IconButton onClick={handleToggleImportant}>
								{form.important ? (
									<Icon style={{ color: red[500] }}>error</Icon>
								) : (
									<Icon>error_outline</Icon>
								)}
							</IconButton>

							<IconButton onClick={handleToggleStarred}>
								{form.starred ? (
									<Icon style={{ color: amber[500] }}>star</Icon>
								) : (
									<Icon>star_outline</Icon>
								)}
							</IconButton>
						</div>
					</div>
					<Divider className="mx-24" />
				</div>

				<div className="px-16 sm:px-24">
					<FormControl className="mt-8 mb-16" required fullWidth>
						<TextField
							label="Title"
							autoFocus
							name="title"
							value={form.title}
							onChange={handleChange}
							required
							variant="outlined"
						/>
					</FormControl>

					<FormControl className="mt-8 mb-16" required fullWidth>
						<TextField
							label="Notes"
							name="notes"
							multiline
							rows="6"
							value={form.notes}
							onChange={handleChange}
							variant="outlined"
						/>
					</FormControl>
					<div className="flex -mx-4">
						<TextField
							name="startDate"
							label="Start Date"
							type="datetime-local"
							className="mt-8 mb-16 mx-4"
							InputLabelProps={{
								shrink: true
							}}
							inputProps={{
								max: dueDate
							}}
							value={startDate}
							onChange={handleChange}
							variant="outlined"
						/>
						<TextField
							name="dueDate"
							label="Due Date"
							type="datetime-local"
							className="mt-8 mb-16 mx-4"
							InputLabelProps={{
								shrink: true
							}}
							inputProps={{
								min: startDate
							}}
							value={dueDate}
							onChange={handleChange}
							variant="outlined"
						/>
					</div>
				</div>
			</DialogContent>

			{addressDialog.type === 'new' ? (
				<DialogActions className="justify-between p-8">
					<div className="px-16">
						<Button
							variant="contained"
							color="primary"
							onClick={() => {
								dispatch(addAddress(form)).then(() => {
                  closeaddressDialog();
								});
							}}
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
							onClick={() => {
								dispatch(updateAddress(form)).then(() => {
                  closeaddressDialog();
								});
							}}
							disabled={!canBeSubmitted()}
						>
							Save
						</Button>
					</div>
					<IconButton
						className="min-w-auto"
						onClick={() => {
							dispatch(removeAddress(form.id)).then(() => {
                closeaddressDialog();
							});
						}}
					>
						<Icon>delete</Icon>
					</IconButton>
				</DialogActions>
			)}
		</Dialog>
	);
}

export default AddressDialog;
