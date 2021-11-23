import _ from '@lodash';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import throttle from 'lodash/throttle';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef, useMemo } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {getTitleSuggestion, searchJobLocations, setSearchText} from "../../../jobs/store/jobsSlice";
import {addJobAlert} from "../../../jobs/store/jobAlertSlice";
import {addTodo, updateTodo} from "../../../todo/store/todosSlice";

const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const defaultValues = {
  title: '',
  level: '',
  employmentType: '',
  city: '',
  state: '',
  country: '',
  company: '',
  companySize: '',
  industry: '',
  remote: true
};


/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  title: yup.string().required('You must enter a title'),
  // location: yup.string().required('You must enter a location'),
});


export default function JobAlertDialog(props) {
  const dispatch = useDispatch();
  const { watch, handleSubmit, formState, reset, control, setValue } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { errors, isValid, dirtyFields } = formState;
  const jobAlertForm = watch();

  const [inputJobTitle, setInputJobTitle] = useState('');
  const [jobTitles, setJobTitles] = useState([]);

  const [inputLocation, setInputLocation] = useState('');
  const [locations, setLocations] = useState([]);

  useEffect(() => {

  }, [dispatch]);

  const fetchJobTitles = useMemo(
    () =>
      throttle((request, callback) => {
        dispatch(getTitleSuggestion(request.input, callback)).then((data) => {
          setJobTitles(_.uniq(data.payload))
        });
      }, 200),
    [],
  );

  const fetchLocations = useMemo(
    () =>
      throttle((request, callback) => {
        dispatch(searchJobLocations(request.input, callback)).then((data) => {
          setLocations(data.payload)
        });
      }, 200),
    [],
  );

  const handleSearchJobTitle = (event, newInputValue) => {
    setInputJobTitle(newInputValue);
    fetchJobTitles({ input: newInputValue }, (results) => {
      let newOptions = [];

      if (newInputValue) {
        newOptions = [value];
      }

      if (results) {
        newOptions = [...newOptions, ...results];
      }

      setJobTitles(newOptions);

    });
  }

  const handleSearchLocation = (event, newInputValue) => {
    setInputLocation(newInputValue);
    fetchLocations({ input: newInputValue }, (results) => {
      let newOptions = [];

      if (newInputValue) {
        newOptions = [value];
      }

      if (results) {
        newOptions = [...newOptions, ...results];
      }

      setLocations(newOptions);

    });
  }

  /**
   * Form Submit
   */
  function onSubmit(data) {
    const location = data.location;
    delete data.location;
    const form = _.merge(data, location);
    dispatch(addJobAlert(form));
    props.handleClose();
  }

  return (
    <CustomDialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      fullWidth={false}
      maxWidth="sm"
    >
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        Create Job Alert
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Box
          sx={{
            width: 300
          }}
        >
          <Controller
            name="title"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                freeSolo
                value={value}
                onChange={(event, newValue) => {
                  onChange(newValue);
                }}
                inputValue={inputJobTitle}
                onInputChange={handleSearchJobTitle}
                id="controllable-job-title"
                options={jobTitles}
                renderInput={(params) => <TextField {...params} label="Job title *" />}
                className="mb-20"
              />
            )}
          />
          <Controller
            name="location"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                freeSolo
                value={inputLocation}
                getOptionLabel={(option) => {
                  let value = '';
                  if(typeof option === 'string') {
                    value = option
                  } else {
                    value = _.values(_.omitBy(_.pickBy(option, _.identity), _.isNumber)).join(', ');
                  }
                  return value;
                }}
                onChange={(event, newValue) => {
                  // setInputLocation(newValue);
                  onChange({city: newValue.city, state: newValue.state, country: newValue.country})
                }}
                inputValue={inputLocation}
                onInputChange={handleSearchLocation}
                id="controllable-location"
                options={locations}
                renderInput={(params) => <TextField {...params} label="City, state, country *" />}
                className="mb-20"
              />
            )}
          />
          <Controller
            name="remote"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="flex flex-row justify-between">
                <Typography className="font-600 ">Allow Remote</Typography>
                <Switch
                  checked={value}
                  onChange={onChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </div>
            )}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disabled={_.isEmpty(dirtyFields) || !isValid}
        >
          Save
        </Button>
      </DialogActions>
      </form>
    </CustomDialog>
  );
}
