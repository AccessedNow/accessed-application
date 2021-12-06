import FuseUtils from '@fuse/utils/FuseUtils';
import { yupResolver } from '@hookform/resolvers/yup';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import _ from '@lodash';
import * as yup from 'yup';

import {
  deletePool,
  updatePool,
  closePoolDialog,
} from '../store/poolsSlice';

const defaultValues = {
  id: '',
  name: ''
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup.string().required('You must enter a name'),
});

function PoolDialog(props) {
  const dispatch = useDispatch();
  const poolDialog = useSelector(({ poolsApp }) => poolsApp.pools.poolDialog);

  const { control, watch, reset, handleSubmit, formState, getValues } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const id = watch('id');
  const name = watch('name');

  /**
   * Initialize Dialog with Data
   */
  const initDialog = useCallback(() => {
    /**
     * Dialog type: 'edit'
     */
    reset({ ...poolDialog.data });


  }, [poolDialog.data, poolDialog.type, reset]);

  /**
   * On Dialog Open
   */
  useEffect(() => {
    if (poolDialog.props.open) {
      initDialog();
    }
  }, [poolDialog.props.open, initDialog]);

  /**
   * Close Dialog
   */
  function closeComposeDialog() {
    return dispatch(closePoolDialog());
  }

  /**
   * Form Submit
   */
  function onSubmit(data) {
    dispatch(updatePool({ ...poolDialog.data, ...data }));
    closeComposeDialog();
  }

  /**
   * Remove Event
   */
  function handleRemove() {
    dispatch(removeMember(id));
    closeComposeDialog();
  }

  return (
    <Dialog
      classes={{
        paper: 'm-24',
      }}
      {...poolDialog.props}
      onClose={closeComposeDialog}
      fullWidth
      maxWidth="xs"
    >
      <AppBar position="static" elevation={0}>
        <Toolbar className="flex w-full">
          <Typography variant="subtitle1" color="inherit">
            Edit Pool
          </Typography>
        </Toolbar>
        <div className="flex flex-col items-center justify-center pb-24">
            <Typography variant="h6" color="inherit" className="pt-8">
              {name}
            </Typography>
        </div>
      </AppBar>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:overflow-hidden"
      >
        <DialogContent classes={{ root: 'p-24' }}>
          <div className="flex">
            <div className="min-w-48 pt-20">
              <Icon color="action">account_circle</Icon>
            </div>
                <TextField
                  value={''}
                  className="mb-24"
                  label="Name"
                  id="name"
                  variant="outlined"
                  required
                  fullWidth
                />
            />
          </div>

        </DialogContent>
        <DialogActions className="justify-between p-4 pb-16">
          <div className="px-16">
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              disabled={_.isEmpty(dirtyFields) || !isValid}
            >
              Save
            </Button>
          </div>
          <IconButton onClick={handleRemove} size="large">
            <Icon>delete</Icon>
          </IconButton>
        </DialogActions>

      </form>
    </Dialog>
  );
}

export default PoolDialog;
