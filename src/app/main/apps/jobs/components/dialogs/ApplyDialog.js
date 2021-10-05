import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { green } from '@mui/material/colors';
import { useTheme, styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Fab from '@mui/material/Fab';
import FormControl from '@mui/material/FormControl';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';



import _ from '@lodash';
import * as yup from 'yup';
import withReducer from 'app/store/withReducer';
import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import { Controller, useForm } from 'react-hook-form';
// import ApplyForm from "./ApplyForm";


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

const course = {
  id: '15459251a6d6b397565',
  title: 'Basics of Angular',
  slug: 'basics-of-angular',
  description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  category: 'web',
  length: 30,
  totalSteps: 11,
  activeStep: 0,
  updated: 'Jun 28, 2017',
  steps: [
    {
      id: '0',
      title: 'Introduction',
      content:
      '<h1>Step 1 - Introduction</h1>' +
      '<br>' +
      'This is an example step of the course. You can put anything in here from example codes to videos.'
    }
  ]
};


function ApplyDialog(props) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { control, watch, reset, handleSubmit, formState, getValues } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const [personName, setPersonName] = React.useState([]);
  const { isValid, dirtyFields, errors } = formState;
  const activeStep = props.applicationDialog.activeStep !== 0 ? props.applicationDialog.activeStep : 1;


  const initDialog = useCallback(() => {
    reset({
      ...defaultValues,
      ...props.applicationDialog.data,
    });

  }, [props.applicationDialog.data, reset]);


  /**
   * On Dialog Open
   */
  useEffect(() => {
    initDialog();
  }, [initDialog]);

  /**
   * Form Submit
   */
  function onSubmit(data) {
    dispatch(props.apply(data));
    closeComposeDialog();
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

  };


  function handleChangeActiveStep(index) {
    dispatch(props.updateStep( index + 1 ));
  }

  function handleNext() {
    dispatch(props.updateStep(activeStep + 1));
  }

  function handleBack() {
    dispatch(props.updateStep(activeStep - 1));
  }



  return (
    <Dialog
      {...props}
      onClose={(ev) => dispatch(props.closedialog())}
      open={props.applicationDialog.dialogOpen}
      fullWidth
      maxWidth="md"
    >
      {/*<AppBar position="static" elevation={0} className="bg-white ">*/}
        {/*<Toolbar className="flex w-full">*/}
          {/*<Typography variant="subtitle1" color="primary">*/}
            {/*Apply to {props.job.company.name}*/}
          {/*</Typography>*/}
        {/*</Toolbar>*/}

      {/*</AppBar>*/}
      {/*<form*/}
        {/*noValidate*/}
        {/*onSubmit={handleSubmit(onSubmit)}*/}
        {/*className="flex flex-col md:overflow-hidden"*/}
      {/*>*/}
        {/*<DialogContent classes={{ root: 'p-24' }}>*/}

          {/*<div className="flex">*/}
            {/*<Controller*/}
              {/*control={control}*/}
              {/*name="email"*/}
              {/*render={({ field }) => (*/}
                {/*<TextField*/}
                  {/*{...field}*/}
                  {/*className="mb-24"*/}
                  {/*label="Email"*/}
                  {/*id="email"*/}
                  {/*variant="outlined"*/}
                  {/*fullWidth*/}
                {/*/>*/}
              {/*)}*/}
            {/*/>*/}
          {/*</div>*/}
          {/*<div className="flex">*/}
            {/*<Controller*/}
              {/*control={control}*/}
              {/*name="phone"*/}
              {/*render={({ field }) => (*/}
                {/*<TextField*/}
                  {/*{...field}*/}
                  {/*className="mb-24"*/}
                  {/*label="Phone"*/}
                  {/*id="phone"*/}
                  {/*variant="outlined"*/}
                  {/*fullWidth*/}
                {/*/>*/}
              {/*)}*/}
            {/*/>*/}
          {/*</div>*/}


          {/*<div className="flex">*/}
            {/*<Controller*/}
              {/*control={control}*/}
              {/*name="Available Date"*/}
              {/*render={({ field }) => (*/}
                {/*<TextField*/}
                  {/*{...field}*/}
                  {/*className="mb-24"*/}
                  {/*id="availableDate"*/}
                  {/*label="Available Date"*/}
                  {/*type="date"*/}
                  {/*InputLabelProps={{*/}
                    {/*shrink: true,*/}
                  {/*}}*/}
                  {/*variant="outlined"*/}
                  {/*fullWidth*/}
                {/*/>*/}
              {/*)}*/}
            {/*/>*/}
          {/*</div>*/}

          {/*<div className="flex">*/}
            {/*<Controller*/}
              {/*control={control}*/}
              {/*name="notes"*/}
              {/*render={({ field }) => (*/}
                {/*<TextField*/}
                  {/*{...field}*/}
                  {/*className="mb-24"*/}
                  {/*label="Cover Letter"*/}
                  {/*id="coverLetter"*/}
                  {/*variant="outlined"*/}
                  {/*multiline*/}
                  {/*rows={5}*/}
                  {/*fullWidth*/}
                {/*/>*/}
              {/*)}*/}
            {/*/>*/}
          {/*</div>*/}
          {/*<div className="flex">*/}
            {/*<FormControl className="flex w-full">*/}
              {/*<InputLabel id="demo-multiple-checkbox-label">Resume</InputLabel>*/}
              {/*<Select*/}
                {/*labelId="demo-multiple-checkbox-label"*/}
                {/*id="demo-multiple-checkbox"*/}
                {/*multiple*/}
                {/*value={personName}*/}
                {/*onChange={handleChange}*/}
                {/*input={<OutlinedInput label="Resume" />}*/}
                {/*renderValue={(selected) => selected.join(', ')}*/}
                {/*MenuProps={MenuProps}*/}
              {/*>*/}
                {/*{names.map((name) => (*/}
                  {/*<MenuItem key={name} value={name}>*/}
                    {/*<Checkbox  />*/}
                    {/*<ListItemText primary={name} />*/}
                  {/*</MenuItem>*/}
                {/*))}*/}
              {/*</Select>*/}
            {/*</FormControl>*/}
          {/*</div>*/}
        {/*</DialogContent>*/}
        {/*<DialogActions className="justify-between p-4 pb-16">*/}
          {/*<div className="px-16">*/}
            {/*<Button*/}
              {/*variant="contained"*/}
              {/*color="secondary"*/}
              {/*type="submit"*/}
              {/*disabled={_.isEmpty(dirtyFields) || !isValid}*/}
            {/*>*/}
              {/*Apply*/}
            {/*</Button>*/}
          {/*</div>*/}
        {/*</DialogActions>*/}

      {/*</form>*/}

      <DialogTitle >
        <Typography variant="subtitle1" color="primary">
          Apply to {props.job.company.name}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:overflow-hidden"
        >
          <div className="flex flex-1 relative overflow-hidden">
            <FuseScrollbars className="w-full overflow-auto">
              <SwipeableViews
                className="overflow-hidden"
                index={activeStep - 1}
                enableMouseEvents
                onChangeIndex={handleChangeActiveStep}
              >
                  <div
                    className="flex justify-center pb-64 sm:p-24 sm:pb-64 md:p-32 md:pb-64"
                  >
                    <Paper elevation={0} className="w-full max-w-lg rounded-20 text-14 leading-normal">
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
                    </Paper>
                  </div>
              </SwipeableViews>
            </FuseScrollbars>
          </div>
        </form>
      </DialogContent>
      <DialogActions className="justify-between p-4 pb-16">
        <div className="flex justify-center w-full absolute left-0 right-0 bottom-0 pb-16 md:pb-32">
          <div className="flex justify-between w-full max-w-xl px-8">
            <div>
              {activeStep !== 1 && (
                <Typography variant="subtitle1" color="inherit" onClick={handleBack}>
                  Back
                </Typography>
              )}
            </div>
            <div>
              {activeStep < course.steps.length ? (
                <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={_.isEmpty(dirtyFields) || !isValid}
                >
                  Save
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogActions>

    </Dialog>
  );
}

export default ApplyDialog;
