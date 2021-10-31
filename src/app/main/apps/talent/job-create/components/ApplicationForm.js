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
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
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
  questionTemplate: '',
  applicationForm: {
    resume: true,
    coverLetter: false,
    photo: true,
    phone: true,
    email: true
  }
};


const ApplicationForm = () => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const theme = useTheme();
  const { control, watch, reset, handleSubmit, formState, getValues } = useForm({
    mode: 'onChange',
    initialValues,
    resolver: yupResolver(validationSchema),
  });
  const form = watch();
  const { isValid, dirtyFields, errors } = formState;
  const [templates, setTemplates] = React.useState([]);
  const [selectedTemplate, setSelectedTemplate] = React.useState('');
  const [age, setAge] = React.useState('');
  const [isEdit, setIsEdit] = React.useState(false);
  const [questions, setQuestions] = React.useState();
  /**
   * Initialize Form
   */
  const initForm = useCallback(() => {

    reset({
      ...initialValues,
      id: FuseUtils.generateGUID(),
    });

  }, [reset]);


  useEffect(() => {
    initForm()
    // dispatch(getCompanyTemplates(routeParams)).then((response) => {
    //   setTemplates(response.payload);
    // });

  }, [dispatch, routeParams, initForm]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setAge(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log(age)
  };

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
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:overflow-hidden"
          >

            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography
                  variant={'subtitle2'}
                  fontWeight={700}
                >
                  Personal information
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Decide what should be displayed on the application form.
                </Typography>
                <div className="mt-20">
                  <Controller
                    control={control}
                    name="resume"
                    render={({ field }) => (
                      <FormControl fullWidth sx={{ minWidth: 120 }} className="mb-16">
                        <InputLabel id="demo-simple-select-label">Resume</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Resume"
                          onChange={handleChange}
                        >
                        <MenuItem value="None">None</MenuItem>
                        <MenuItem value='Optional'>Optional</MenuItem>
                        <MenuItem value='Required'>Required</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  />
                  <Controller
                    control={control}
                    name="resume"
                    render={({ field }) => (
                      <FormControl fullWidth sx={{ minWidth: 120 }} className="mb-16">
                        <InputLabel id="demo-simple-select-label">Cover Letter</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Cover Letter"
                          onChange={handleChange}
                        >
                        <MenuItem value="None">None</MenuItem>
                        <MenuItem value='Optional'>Optional</MenuItem>
                        <MenuItem value='Required'>Required</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  />
                  <Controller
                    control={control}
                    name="resume"
                    render={({ field }) => (
                      <FormControl fullWidth sx={{ minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Photo</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Photo"
                          onChange={handleChange}
                        >
                          <MenuItem value="None">None</MenuItem>
                          <MenuItem value='Optional'>Optional</MenuItem>
                          <MenuItem value='Required'>Required</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item container xs={12}>
                <Typography
                  variant={'subtitle2'}
                  fontWeight={700}
                >
                  Ask candidates about their qualifications
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Add screening questions below to find the best candidates more easily
                </Typography>
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
                  <div className="px-16">
                    <Controller
                      control={control}
                      name="template"
                      render={({ field }) => (
                        <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-label">Template</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedTemplate}
                            label="Template"
                            // onChange={handleTemplateChange}
                          >
                            <MenuItem onClick={(ev) => handleTemplateChange(ev, null)} value="None">None</MenuItem>
                            {templates.map((template, idx) => (
                              <MenuItem onClick={(ev) => handleTemplateChange(ev, idx)} value={template.name}>{template.name}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    />
                    <Controller
                      control={control}
                      name="age"
                      render={({ field }) => (
                        <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-label">Age</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value="10">10</MenuItem>
                            <MenuItem value='20'>20</MenuItem>
                          </Select>
                        </FormControl>
                      )}
                    />
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} className="flex flex-col items-start justify-start">
                  {questions && questions.map((question) =>
                    {question.isEdit?
                      <div className="flex flex-col w-full items-start justify-start border-1 rounded-6">
                        <div className="flex flex-row w-full items-start justify-between px-14">
                          <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                            <Select
                              labelId="demo-simple-select-standard-label"
                              id="demo-simple-select-standard"
                              value={age}
                              onChange={handleChange}
                              label="Type"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                            <Select
                              labelId="demo-simple-select-standard-label"
                              id="demo-simple-select-standard"
                              value={age}
                              onChange={handleChange}
                              label="Optional"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                        <Box marginBottom={2} className="flex w-full">
                          <Divider className="w-full"/>
                        </Box>
                        <div className="flex w-full px-14">
                          <div className="flex flex-col w-full">
                            <Typography
                              variant={'subtitle2'}
                              sx={{marginBottom: 2}}
                              fontWeight={700}
                            >
                              Question
                            </Typography>
                            <Controller
                              control={control}
                              name="title"
                              render={({field}) => (
                                <TextField
                                  {...field}
                                  className="mb-24"
                                  label="Question"
                                  id="question"
                                  error={!!errors.title}
                                  helperText={errors?.title?.message}
                                  variant="outlined"
                                  required
                                  fullWidth
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-end justify-center p-14">
                          <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            type="submit"
                            className="rounded-6 mr-5"
                          >
                            Cancel
                          </Button>
                          <Button
                            size="small"
                            variant="contained"
                            color="secondary"
                            type="submit"
                            className="rounded-6"
                          >
                            Save
                          </Button>
                        </div>
                      </div>
                      :
                      <div className="w-full border-1 p-10">1 {question.text}</div>
                    }
                  )}

                <div className="flex">
                  <Button
                    variant="contained"
                    className="w-full rounded-6 border-1"
                    onClick={handleAdd}
                  >
                    + Add
                  </Button>
                </div>

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
          </form>
        </Box>
      </Grid>
      <Grid item xs={12} sm={5}>
        {Object.keys(form).length !== 0 && (
        <Paper
          component={motion.div}
          variant="outlined"
          className="flex flex-col items-center justify-start w-full overflow-hidden rounded-8 mb-20 "
          >
          <Application/>

          </Paper>
        )}
      </Grid>
    </Grid>
  );
};

export default ApplicationForm;
