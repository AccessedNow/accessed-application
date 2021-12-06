import React from 'react';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';

import withReducer from 'app/store/withReducer';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {searchMembers, setRoles, openNewMemberDialog} from "../store/membersSlice";
import {getCompanyRoles} from "../store/rolesSlice";

import reducer from "./store";
import MemberList from "./MemberList";
import InvitationList from "./InvitationList";
import MemberDialog from './MemberDialog';
import InvitationDialog from './InvitationDialog';

import {openNewContactDialog} from "../../contacts/store/contactsSlice";
import {addPool} from "../store/poolsSlice";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Must enter name')

});

const initialValues = {
  name: ''
};

const Members = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const { control, watch, reset, handleSubmit, formState, getValues } = useForm({
    mode: 'onChange',
    initialValues,
    resolver: yupResolver(validationSchema),
  });
  const form = watch();
  const { isValid, dirtyFields, errors } = formState;


  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleOpen = () => {
    reset({
      ...initialValues,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function onSubmit(ev) {
    ev.preventDefault();
    if (messageText === '') {
      return;
    }

    // dispatch(addPool({
    //   name
    // })).then(() => {
    //   handleClose();
    // });
  }

  useEffect(() => {
    dispatch(getCompanyRoles(true));
  }, [dispatch]);


  return (
        <Box>
          <div className="flex flex-row justify-between">
            <Typography variant="h6" gutterBottom fontWeight={700}>
              Members
            </Typography>
            <Button startIcon={<AddIcon />} variant="contained" size="small" className="py-5 rounded-6" onClick={(ev) => dispatch(openNewMemberDialog())}>
              Add
            </Button>
          </div>
          <Typography variant={'subtitle2'} color={'text.secondary'}>
            Manage roles, access contact information and invite team members.
            <Link color={'primary'} href={'/terms-conditions'} underline={'none'}>
              Learn more.
            </Link>
          </Typography>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="flex flex-row justify-between justify-end">
            <Tabs value={tab} onChange={handleTabChange} aria-label="members tab">
              <Tab label="Team" {...a11yProps(0)} />
              <Tab label="Invitations" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <Box sx={{ width: '100%' }}>
            <TabPanel value={tab} index={0}>
              <MemberList/>
            </TabPanel>
            <TabPanel value={tab} index={1}>
              <InvitationList/>
            </TabPanel>
          </Box>
          <InvitationDialog />
          <Dialog fullWidth={true} maxWidth="sm" open={open} onClose={handleClose}>
            <DialogTitle>Add Pool</DialogTitle>
            <DialogContent>
              <form
                noValidate
                onSubmit={onSubmit}
                className="flex flex-col md:overflow-hidden"
              >
                <DialogContentText>
                  Define pool name
                </DialogContentText>
                <Controller
                  control={control}
                  name="name"
                  className="bg-white border-1"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Name"
                      id="name"
                      error={!!errors.name}
                      helperText={errors?.name?.message}
                      required
                      fullWidth
                    />
                  )}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" disabled={_.isEmpty(dirtyFields) || !isValid}>Save</Button>
            </DialogActions>
          </Dialog>
        </Box>

  );
};

export default withReducer('membersApp', reducer)(Members);
;
