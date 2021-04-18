import { useForm } from '@fuse/hooks';
import _ from '@lodash';
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
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	removeCompany,
	updateCompany,
  addCompany,
	closeNewCompanyDialog,
	closeEditCompanyDialog
} from './store/companySlice';
import clsx from "clsx";

const defaultFormState = {
	id: '',
	name: '',
	subdomain: '',
	language: '',
	avatar: 'assets/images/avatars/profile.jpg',
	email: '',
	phone: '',
	address: {
		street: '',
		city: '',
		state: '',
		country: '',
		postalCode: ''
	},
	birthday: '',
	notes: ''
};

function CompanyDialog(props) {
	const dispatch = useDispatch();
	const companyDialog = useSelector(({ settingsCompany }) => settingsCompany.company.companyDialog);

	const { form, handleChange, setForm } = useForm(defaultFormState);

	const initDialog = useCallback(() => {
		/**
		 * Dialog type: 'edit'
		 */
		if (companyDialog.type === 'edit' && companyDialog.data) {
			setForm({ ...companyDialog.data });
		}

		/**
		 * Dialog type: 'new'
		 */
		if (companyDialog.type === 'new') {
			setForm({
				...defaultFormState,
				...companyDialog.data,
				id: FuseUtils.generateGUID()
			});
		}
	}, [companyDialog.data, companyDialog.type, setForm]);

	useEffect(() => {
		/**
		 * After Dialog Open
		 */
		if (companyDialog.props.open) {
			initDialog();
		}
	}, [companyDialog.props.open, initDialog]);

	function closeComposeDialog() {
		return companyDialog.type === 'edit' ? dispatch(closeEditCompanyDialog()) : dispatch(closeNewCompanyDialog());
	}

	function canBeSubmitted() {
		return form.name.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();

		if (companyDialog.type === 'new') {
			dispatch(addCompany(form));
		} else {
			dispatch(updateCompany(form));
		}
		closeComposeDialog();
	}

	function handleRemove() {
		dispatch(removeCompany(form.id));
		closeComposeDialog();
	}

  function handleUploadChange(e) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = () => {
      setForm(
        _.set({ ...form }, `images`, [
          {
            id: FuseUtils.generateGUID(),
            url: `data:${file.type};base64,${btoa(reader.result)}`,
            type: 'image'
          },
          ...form.images
        ])
      );
    };

    reader.onerror = () => {
      console.log('error on load image');
    };
  }

	return (
		<Dialog
			classes={{
				paper: 'm-24 rounded-8'
			}}
			{...companyDialog.props}
			onClose={closeComposeDialog}
			fullWidth
			maxWidth="xs"
		>
			<AppBar position="static" elevation={1}>
				<Toolbar className="flex w-full">
					<Typography variant="subtitle1" color="inherit">
						{companyDialog.type === 'new' ? 'New Company' : 'Edit Company'}
					</Typography>
				</Toolbar>
				<div className="flex flex-col items-center justify-center pb-24">
          <label
            htmlFor="button-file"
						color="white"
            className={clsx(
              'flex items-center justify-center relative w-128 h-128 rounded-8 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
            )}
          >
            <input
              accept="image/*"
              className="hidden"
              id="button-file"
              type="file"
              onChange={handleUploadChange}
            />
            <Icon fontSize="large" color="action">
              cloud_upload
            </Icon>
          </label>
				</div>
			</AppBar>
			<form noValidate onSubmit={handleSubmit} className="flex flex-col md:overflow-hidden">
				<DialogContent classes={{ root: 'p-24' }}>
					<div className="flex">
						<div className="min-w-48 pt-20">
              <Icon color="action">domain</Icon>
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

					<div className="flex">
						<div className="min-w-48 pt-20">
							<Icon color="action">phone</Icon>
						</div>
						<TextField
							className="mb-24"
							label="Phone"
							id="phone"
							name="phone"
							value={form.phone}
							onChange={handleChange}
							variant="outlined"
							fullWidth
						/>
					</div>

					<div className="flex">
						<div className="min-w-48 pt-20">
							<Icon color="action">email</Icon>
						</div>
						<TextField
							className="mb-24"
							label="Email"
							id="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							variant="outlined"
							fullWidth
						/>
					</div>



					<div className="flex">
						<div className="min-w-48 pt-20">
							<Icon color="action">home</Icon>
						</div>
						<TextField
							className="mb-24"
							label="Address"
							id="address"
							name="address"
							value={form.address}
							onChange={handleChange}
							variant="outlined"
							fullWidth
						/>
					</div>

					<div className="flex">
						<div className="min-w-48 pt-20">
							<Icon color="action">note</Icon>
						</div>
						<TextField
							className="mb-24"
							label="Notes"
							id="notes"
							name="notes"
							value={form.notes}
							onChange={handleChange}
							variant="outlined"
							multiline
							rows={5}
							fullWidth
						/>
					</div>
				</DialogContent>

				{companyDialog.type === 'new' ? (
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
		</Dialog>
	);
}

export default CompanyDialog;
