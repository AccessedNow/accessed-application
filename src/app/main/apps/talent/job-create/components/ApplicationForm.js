import FuseUtils from '@fuse/utils/FuseUtils';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import _ from '@lodash';
import { useTheme } from '@mui/material/styles';
import { useFormik } from 'formik';
import { useForm, Controller } from 'react-hook-form';
import React, { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import DoneIcon from '@mui/icons-material/Done';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import {
  getJob,
  addJob,
  updateJob
} from '../../store/jobSlice';
import {getCompanyTemplates} from "../../store/templateSlice";

import Application from "../components/Application";
// import QuestionList from "../components/QuestionList";
import QuestionList from '../../components/checklist/QuestionList';
import JobModel from "../../models/JobModel";


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




const validationSchema = yup.object({
  questionTemplate: yup
    .object()
    .required('Please specify your a template')

});

const initialValues = {
  questions: []
};


const listOfTypes = [
  {}
];

const ApplicationForm = (props) => {
  const dispatch = useDispatch();
  const routeParams = useParams();


  const theme = useTheme();
  const [job, setJob] = React.useState(props.job);

  const defaultValues = _.merge(
    {},
    initialValues,
    job
  );
  const { formState, handleSubmit, getValues, reset, watch, setValue, control } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const { isValid, dirtyFields, errors } = formState;
  const form = watch();



  const [templates, setTemplates] = React.useState([]);
  const [selectedTemplate, setSelectedTemplate] = React.useState('');
  const [questions, setQuestions] = React.useState();
  console.log('applicationForm', job)

  useEffect(() => {
    dispatch(getCompanyTemplates(routeParams)).then((response) => {
      setTemplates(response.payload);
    });

  }, [dispatch, routeParams]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
  };

  function handleFieldChange(event) {
    // props.onListItemChange(
    //   _.setIn(
    //     props.job,
    //     event.target.name,
    //     event.target.type === 'checkbox' ? event.target.checked : event.target.value
    //   )
    // );
    // props.job.applicationForm[event.target.name] = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    const check = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    // setJob({
    //   ...job,
    //   'applicationForm': {
    //     resume: true
    //   }
    // });
    var someProperty = {...job}
    const field = event.target.name.split('.');
    someProperty.applicationForm[field[0]][field[1]] = event.target.checked;
    setJob(someProperty)

  }

  const handleTemplateChange = (event, idx) => {
    if(!idx && idx!==0){
      setSelectedTemplate([]);
    } else {
      setSelectedTemplate(templates[idx]);
      setQuestions(selectedTemplate.questions)
      // console.log(selectedTemplate)
      // let templateQuestions = _.reduce(selectedTemplate.questions, function(res, q){q.isEdit=false; res.push(q); return res;}, []);
      // console.log(selectedTemplate)
      // setQuestions(templateQuestions);
      // console.log('q', questions)

    }

  };

  const handleAdd = (event) => {
    console.log(event.target)
  };

  /**
   * Form Submit
   */
  function onSubmit(data) {
    dispatch(addJob(data));
  }

  if(!Object.keys(form).length === 0){
    return
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={7}>
        <Box className="flex flex-col items-start justify-start px-20">
          {/*<form*/}
            {/*noValidate*/}
            {/*onSubmit={handleSubmit(onSubmit)}*/}
            {/*className="flex flex-col md:overflow-hidden"*/}
          {/*>*/}

            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography
                  variant={'subtitle2'}
                  fontWeight={700}
                  className="w-full"
                >
                  Personal information
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Decide what should be displayed on the application form.
                </Typography>
                <div className="mt-20 w-full">
                  <Grid container spacing={2} item xs={12}>
                    <Grid item xs={8}  sm={8}>
                    </Grid>
                    <Grid item xs={2} sm={2}>
                      <Typography
                        variant={'subtitle2'}
                        fontWeight={600}
                      >
                        Display
                      </Typography>
                    </Grid>
                    <Grid item xs={2} sm={2}>
                      <Typography
                        variant={'subtitle2'}
                        fontWeight={600}
                      >
                        Required
                      </Typography>
                    </Grid>
                  </Grid>
                  {Object.keys(job.applicationForm).map((item, idx) => (
                  <Grid container spacing={2} item xs={12}>
                    <Grid item xs={8}  sm={8}>
                      <Typography
                        variant={'subtitle2'}
                      >
                        {item}
                      </Typography>
                    </Grid>
                    <Grid item xs={2} sm={2} justifyContent="flex-end">
                      <Checkbox
                        index={idx}
                        checked={job.applicationForm[item].isDisplay}
                        onChange={handleFieldChange}
                        name={`${item}.isDisplay`}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                      {/*<Controller*/}
                        {/*name="applicationForm"*/}
                        {/*control={control}*/}
                        {/*defaultValue={job.applicationForm[item]}*/}
                        {/*render={({ field: { onChange, value } }) => {*/}
                          {/*return (*/}
                            {/*<Checkbox*/}
                          {/*checked={value.isDisplay}*/}
                          {/*onChange={(val) => onChange(val)}*/}
                          {/*name={item.isDisplay}*/}
                          {/*inputProps={{ 'aria-label': 'controlled' }}*/}
                          {/*/>*/}
                          {/*);*/}
                        {/*}}*/}
                      {/*/>*/}
                    </Grid>
                    <Grid item xs={2} sm={2} justifyContent="flex-end">
                      <Checkbox
                        index={idx}
                        checked={props.job.applicationForm[item].isRequired}
                        onChange={handleFieldChange}
                        name={`${item}.isRequired`}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    </Grid>
                  </Grid>
                    ))}
                </div>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item container xs={12}>
                <Typography
                  variant={'subtitle2'}
                  fontWeight={700}
                  className="w-full"
                >
                  Ask candidates about their qualifications
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Add screening questions below to find the best candidates more easily
                </Typography>
              </Grid>
              <Grid item container xs={12}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'center' }}
                  justifyContent={'space-between'}
                  width={1}
                  margin={'0 auto'}
                >
                  <Box marginBottom={{ xs: 1, sm: 0 }}>
                    <Typography
                      variant={'subtitle2'}
                      sx={{ marginBottom: 2 }}
                      fontWeight={700}
                    >
                      Screening Questions
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} className="flex flex-col items-start justify-start">
                {/*<QuestionList />*/}
                {/*<div className="w-full mt-20">*/}
                  {/*<Button*/}
                    {/*variant="contained"*/}
                    {/*className="w-full rounded-6 border-1"*/}
                    {/*onClick={handleAdd}*/}
                  {/*>*/}
                    {/*+ Add*/}
                  {/*</Button>*/}
                {/*</div>*/}

                <Controller
                  name="questions"
                  control={control}
                  defaultValue={[]}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <div className="w-full">
                        <QuestionList list={value} onListChange={(val) => onChange(val)} />
                      </div>
                    );
                  }}
                />

              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item container xs={12}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'center' }}
                  justifyContent={'space-between'}
                  width={1}
                  margin={'0 auto'}
                >
                  <div className="px-16">
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      disabled={_.isEmpty(dirtyFields) || !isValid}
                      className="rounded-6"
                    >
                      Save
                    </Button>
                  </div>
                </Box>
              </Grid>
            </Grid>
          {/*</form>*/}
        </Box>
      </Grid>
      <Grid item xs={12} sm={5}>
        {Object.keys(form).length !== 0 && (
        <Paper
          component={motion.div}
          variant="outlined"
          className="flex flex-col items-center justify-start w-full overflow-hidden rounded-8 mb-20 "
          >
          <Application applicationForm={props.job.applicationForm}/>

          </Paper>
        )}
      </Grid>
    </Grid>
  );
};

ApplicationForm.propTypes = {};
ApplicationForm.defaultProps = {
  variant: 'edit',
  job: null,
};


export default withRouter(ApplicationForm);
