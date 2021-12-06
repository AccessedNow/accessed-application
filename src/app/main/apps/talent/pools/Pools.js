import React from 'react';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import withReducer from 'app/store/withReducer';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { Controller, useForm } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {getCompanyPools, addPool} from "../store/poolsSlice";

import reducer from "./store";
import PoolList from "./PoolList";
import PoolDialog from './PoolDialog';
import {closeUserSidebar} from "../../chat/store/sidebarsSlice";
import {addJob} from "../store/jobSlice";
import {sendMessage} from "../../chat/store/chatSlice";




const validationSchema = yup.object({
  name: yup
    .string()
    .required('Must enter name')

});

const initialValues = {
  name: ''
};

const Pools = () => {
  const dispatch = useDispatch();
  const [name, setName] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const { control, watch, reset, handleSubmit, formState, getValues } = useForm({
    mode: 'onChange',
    initialValues,
    resolver: yupResolver(validationSchema),
  });
  const form = watch();
  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    dispatch(getCompanyPools());
  }, [dispatch]);

  const handleNameChange = (event) => {
    setName(event.target.value);
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

  // function onSubmit(data) {
  //   dispatch(addPool(data));
  //   handleClose();
  // }

  function onSubmit(ev) {
    ev.preventDefault();
    if (messageText === '') {
      return;
    }

    dispatch(addPool({
      name
    })).then(() => {
      handleClose();
    });
  }

  // const handleSubmit = (ev) => {
  //   dispatch(
  //     addPool({name})
  //   ).then(() => {
  //     // setMessageText('');
  //   });
  // };

  return (
        <Box>
          <div className="flex flex-row justify-between">
            <Typography variant="h6" gutterBottom fontWeight={700}>Pools</Typography>
            {/*<Button*/}
              {/*size="small"*/}
              {/*variant="contained"*/}
              {/*color="secondary"*/}
              {/*className="rounded-6"*/}
              {/*onClick={(ev) => dispatch(openNewMemberDialog())}*/}
            {/*>*/}
              {/*Add*/}
            {/*</Button>*/}
            <Button startIcon={<AddIcon />} variant="contained" size="small" className="py-5 rounded-6" onClick={handleOpen}>
              Add
            </Button>
          </div>
          <Typography variant={'subtitle2'} color={'text.secondary'}>
            Manage candidates with grouping.
            <Link color={'primary'} href={'/terms-conditions'} underline={'none'}>
              Learn more.
            </Link>
          </Typography>
          <Box sx={{ width: '100%' }}>
            <PoolList/>
          </Box>
          <PoolDialog />
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

export default withReducer('poolsApp', reducer)(Pools);
;
