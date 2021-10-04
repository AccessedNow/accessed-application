import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import FormControl from '@mui/material/FormControl';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import _ from '@lodash';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog, apply} from '../store/applicationSlice';

const defaultValues = {
  email: '',
  phone: '',
  availableDate: '',
  coverLetter: ''
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const schema = yup.object().shape({
  email: yup.string().required('You must enter an email'),
});

function ApplyDialog(props) {
  const dispatch = useDispatch();
  const { control, watch, reset, handleSubmit, formState, getValues } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const [personName, setPersonName] = React.useState([]);
  const { isValid, dirtyFields, errors } = formState;

  /**
   * Form Submit
   */
  function onSubmit(data) {
    dispatch(apply(data));
    closeDialog();
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

  };

  return (
    <Dialog
      classes={{
        paper: 'm-24',
      }}
      {...props}
      onClose={(ev) => dispatch(closeDialog())}
      open={props.dialogOpen}
      fullWidth
      maxWidth="xs"
    >
      <AppBar position="static" elevation={0}>
        <Toolbar className="flex w-full">
          <Typography variant="subtitle1" color="inherit">
            Apply to {props.job.company.name}
          </Typography>
        </Toolbar>
        <div className="flex flex-col items-center justify-center pb-24">
          <Avatar className="w-96 h-96" alt="contact avatar" src="" />
          <Typography variant="h6" color="inherit" className="pt-8">
            {/*{name}*/}
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
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Email"
                  id="email"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>
          <div className="flex">
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Phone"
                  id="phone"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>


          <div className="flex">
            <Controller
              control={control}
              name="Available Date"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  id="availableDate"
                  label="Available Date"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>

          <div className="flex">
            <Controller
              control={control}
              name="notes"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Cover Letter"
                  id="coverLetter"
                  variant="outlined"
                  multiline
                  rows={5}
                  fullWidth
                />
              )}
            />
          </div>
          <div className="flex">
            <FormControl className="flex w-full">
              <InputLabel id="demo-multiple-checkbox-label">Resume</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Resume" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox  />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
              Apply
            </Button>
          </div>
        </DialogActions>

      </form>
    </Dialog>
  );
}

export default ApplyDialog;
