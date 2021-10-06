import { yupResolver } from '@hookform/resolvers/yup';
import { DateTimePicker } from '@mui/lab';
import { Controller, useForm } from 'react-hook-form';
import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { amber, red } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import {addTodo} from "../../../todo/store/todosSlice";


const defaultValues = {
  id: null,
  email: '',
  phoneNumber: '',
  resume: '',
  coverLetter: '',
  availableDate: '',
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().required('You must enter an email'),
  phoneNumber: yup.string().required('You must enter a phone number'),
});

function TodoDialog(props) {
  const dispatch = useDispatch();
  const todoDialog = props.applicationDialog;

  const { watch, handleSubmit, formState, reset, control, setValue } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { errors, isValid, dirtyFields } = formState;
  const formId = watch('id');
  const startDate = watch('startDate');

  /**
   * Initialize Dialog with Data
   */
  const initDialog = useCallback(() => {


    /**
     * Dialog type: 'new'
     */
      reset({
        ...defaultValues,
        ...todoDialog.data,
        id: props.job.jobId,
      });

  }, [todoDialog.data, reset]);

  /**
   * On Dialog Open
   */
  useEffect(() => {
    if (todoDialog.dialogOpen) {
      initDialog();
    }
  }, [todoDialog.dialogOpen, initDialog]);


  /**
   * Form Submit
   */
  function onSubmit(data) {
    // dispatch(props.apply({ id: props.job.jobId, ...data }));
    data.availableDate = data.availableDate.getTime()
    dispatch(props.apply({ id: FuseUtils.generateGUID(), ...data }));
    dispatch(props.closeDialog());
  }

  const handleClose = () => {
    dispatch(props.closeDialog());
  }

  return (
    <Dialog open={todoDialog.dialogOpen} onClose={handleClose} fullWidth maxWidth="sm">
      <AppBar position="static" elevation={0} className="bg-white">
        <Toolbar className="flex w-full">
          <Typography variant="subtitle1" color="primary">
            Apply to {props.job.company.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent classes={{ root: 'p-0' }}>


          <div className="px-16 sm:px-24">
            <FormControl className="mt-8 mb-16" required fullWidth>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    autoFocus
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    required
                    variant="outlined"
                  />
                )}
              />
            </FormControl>

            <FormControl className="mt-8 mb-16" required fullWidth>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone"
                    autoFocus
                    error={!!errors.phoneNumber}
                    helperText={errors?.phoneNumber?.message}
                    required
                    variant="outlined"
                  />
                )}
              />
            </FormControl>

            <FormControl className="mt-8 mb-16" required fullWidth>
              <Controller
                name="coverLetter"
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Cover Letter" multiline rows="6" variant="outlined" />
                )}
              />
            </FormControl>

            <div className="mt-8 mb-16" >
              <Controller
                name="availableDate"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <DateTimePicker
                    value={value}
                    onChange={onChange}
                    renderInput={(_props) => (
                      <TextField label="Start Date" className="mt-8 mb-16 mx-4" {..._props} />
                    )}
                  />
                )}
              />
            </div>

            <FormControl fullWidth className="mt-8 mb-16 w-full" >
              <Controller
                name="resume"
                control={control}
                render={({ field }) => (
                  <div>
                    <InputLabel id="demo-simple-select-label">Resume</InputLabel>
                    <Select
                      {...field}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Resume"
                      autoWidth
                      className="w-full"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </div>
                  )}
            />
            </FormControl>

            <div className="mt-8 mb-16 w-full" >
              <Controller
                name="images"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <label
                    htmlFor="button-file"
                    className="productImageUpload flex items-center justify-center relative py-32 border-1 rounded-16 overflow-hidden cursor-pointer"
                  >
                    <input
                      accept="image/*"
                      className="hidden"
                      id="button-file"
                      type="file"
                      onChange={async (e) => {
                        function readFileAsync() {
                          return new Promise((resolve, reject) => {
                            const file = e.target.files[0];
                            if (!file) {
                              return;
                            }
                            const reader = new FileReader();

                            reader.onload = () => {
                              resolve({
                                id: FuseUtils.generateGUID(),
                                url: `data:${file.type};base64,${btoa(reader.result)}`,
                                type: 'image',
                              });
                            };

                            reader.onerror = reject;

                            reader.readAsBinaryString(file);
                          });
                        }

                        const newImage = await readFileAsync();

                        onChange([newImage, ...value]);
                      }}
                    />
                    <Icon fontSize="large" color="action">
                      cloud_upload
                    </Icon>
                  </label>
                )}
              />
            </div>



            <div className="flex">
              <Controller
                name="termsAndCondition"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <IconButton
                    tabIndex={-1}
                    disableRipple
                    onClick={(ev) => onChange(!value)}
                    size="large"
                  >
                    {value ? (
                      <Icon color="secondary">check_circle</Icon>
                    ) : (
                      <Icon color="action">radio_button_unchecked</Icon>
                    )}
                    <Typography variant="subtitle1" color="inherit">
                      You accept our Terms and Conditions and Privacy Policy
                    </Typography>

                  </IconButton>
                )}
              />
            </div>
          </div>
        </DialogContent>

          <DialogActions className="justify-between px-8 py-16">
            <div className="w-full px-16">
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={_.isEmpty(dirtyFields) || !isValid}
                className="w-full rounded-4 p-4"
              >
                Add
              </Button>
            </div>
          </DialogActions>

      </form>
    </Dialog>
  );
}

export default TodoDialog;
