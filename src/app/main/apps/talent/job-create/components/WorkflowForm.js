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
import {getCompanyPipelineTemplates} from "../../store/templateSlice";

import WorkflowList from '../../components/workflow/WorkflowList';



const validationSchema = yup.object({
  questionTemplate: yup
    .object()
    .required('Please specify your a template')

});

const initialValues = {
  pipelineTemplateId: '',
  autoRejectBlackList: false,
  stages: [
    {
      type: "APPLIED",
      name: "Applied",
      timeLimit: 7,
      tasks: []
    }
  ]
};


const WorkflowForm = (props) => {
  const dispatch = useDispatch();
  const routeParams = useParams();


  const theme = useTheme();
  const [job, setJob] = React.useState(props.job);

  const defaultValues = _.merge(
    {},
    initialValues
  );
  const { formState, handleSubmit, getValues, reset, watch, setValue, control } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const { isValid, dirtyFields, errors } = formState;
  const form = watch();

  const [templates, setTemplates] = React.useState([]);

  console.log('workflowForm', form)

  useEffect(() => {
    dispatch(getCompanyPipelineTemplates(routeParams)).then((response) => {
      setTemplates(response.payload);
    });

  }, [dispatch, routeParams]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
  };


  const handleTemplateChange = (event, idx) => {
    if(!idx && idx!==0){
      // setSelectedTemplate([]);
    } else {

    }

  };


  /**
   * Form Submit
   */
  function onSubmit(data) {
    // dispatch(addJob(data));
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
              <Grid item container xs={12}>
                <Typography
                  variant={'subtitle2'}
                  fontWeight={700}
                  className="w-full"
                >
                  Pipeline
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Manage candidates by setting up a hiring pipeline for your job.  Learn more
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
                      Stages
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} className="flex flex-col items-start justify-start">

                <Controller
                  name="stages"
                  control={control}
                  defaultValue={[]}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <div className="w-full">
                        <WorkflowList list={value} onListChange={(val) => onChange(val)} />
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

          </Paper>
        )}
      </Grid>
    </Grid>
  );
};

WorkflowForm.propTypes = {};
WorkflowForm.defaultProps = {
  variant: 'edit',
  job: null,
};


export default withRouter(WorkflowForm);
