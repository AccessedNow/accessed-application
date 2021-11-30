import FuseUtils from '@fuse/utils/FuseUtils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import * as yup from 'yup';
import EmailList from '../components/email-list/EmailList';


import {
  closeNewMemberDialog,
  closeEditMemberDialog,
  inviteMembers
} from '../store/membersSlice';

const defaultValues = {
  id: '',
  emails: [],
  role: '',
  note: ''
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  emails: yup.string().email('You must enter a valid email'),
});

function InvitationDialog(props) {
  const dispatch = useDispatch();
  const memberDialog = useSelector(({ membersApp }) => membersApp.members.memberDialog);
  const roles = useSelector(({ membersApp }) => membersApp.roles.data);

  const { formState, handleSubmit, reset, register, watch, control, setValue } = useForm({ mode: 'onChange', defaultValues: defaultValues });
  const form = watch();
  const { isValid, dirtyFields, errors } = formState;

  const id = watch('id');
  const email = watch('email');
  const note = watch('note');
  const [open, setOpen] = useState(false);

  /**
   * Initialize Dialog with Data
   */
  const initDialog = useCallback(() => {

    /**
     * Dialog type: 'new'
     */
      reset({
        ...defaultValues,
        ...memberDialog.data,
        id: FuseUtils.generateGUID(),
      });

  }, [memberDialog.data, reset]);

  /**
   * On Dialog Open
   */
  useEffect(() => {
    if (memberDialog.props.open) {
      initDialog();
    }
  }, [memberDialog.props.open, initDialog]);

  /**
   * Close Dialog
   */
  function closeComposeDialog() {
    return dispatch(closeNewMemberDialog());
  }

  /**
   * Form Submit
   */
  function onSubmit(data) {
    dispatch(addMember(data));
    closeComposeDialog();
  }

  /**
   * Remove Event
   */
  function handleRemove() {
    dispatch(removeMember(id));
    closeComposeDialog();
  }

  const handleChange = (event) => {
    // setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  console.log(form)

  return (
    <Dialog
      classes={{
        paper: 'm-24',
      }}
      {...memberDialog.props}
      onClose={closeComposeDialog}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle id="alert-dialog-title">
        <Typography variant="h6">Invite members</Typography>
        <Typography variant="caption">Invite your coworkers to collaborate and hire faster.</Typography>
      </DialogTitle>
      {/*<form*/}
        {/*noValidate*/}
        {/*onSubmit={handleSubmit(onSubmit)}*/}
        {/*className="flex flex-col md:overflow-hidden"*/}
      {/*>*/}
        <DialogContent classes={{ root: 'p-24' }}>
          <div className="flex flex-col">
            <div className="mb-14">
              <Typography
                variant={'subtitle2'}
                sx={{ marginBottom: 1 }}
                fontWeight={700}
              >
                Emails
              </Typography>
              <Controller
                name="emails"
                control={control}
                defaultValue={[]}
                render={({ field: { onChange, value } }) => {
                  return (
                    <EmailList list={value} onListChange={(val) => onChange(val)} />
                  );
                }}
              />
            </div>
            <div className="mb-14">
              <Typography
                variant={'subtitle2'}
                sx={{ marginBottom: 1 }}
                fontWeight={700}
              >
                Select Role
              </Typography>
              <Controller
                name="role"
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                  <FormControl sx={{ m: 0, minWidth: 120 }} className="w-full">
                    <InputLabel id="demo-controlled-open-select-label">Role</InputLabel>
                    <Select
                      labelId="role-select"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {roles.map((role) => {
                        <MenuItem value={role._id}>{role.name}</MenuItem>
                      })}

                    </Select>
                  </FormControl>
                )}
              />
            </div>
            <div className="mb-14">
              <Typography
                variant={'subtitle2'}
                sx={{ marginBottom: 1 }}
                fontWeight={700}
              >
                Add a message
              </Typography>
              <Controller
                name="note"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Add your message"
                    className="w-full"
                    margin="normal"
                    multiline
                    variant="outlined"
                  />
                )}
              />
            </div>

          </div>

        </DialogContent>

          <DialogActions className="justify-between p-4 pb-16">
            <div className="px-16">
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={_.isEmpty(dirtyFields) || !isValid}
                onClick={() => dispatch(inviteMembers(form))}
              >
                Send
              </Button>
            </div>
          </DialogActions>
      {/*</form>*/}
    </Dialog>
  );
}

export default InvitationDialog;
