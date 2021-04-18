import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import { useDebounce, useForm, useUpdateEffect } from '@fuse/hooks';
import SwipeableViews from 'react-swipeable-views';
import reducer from './store';
import { getCourse, updateCourse } from './store/courseSlice';
import JobForm from './JobForm';
import ApplicationForm from './ApplicationForm';
import WorkflowForm from './WorkflowForm';
import TeamForm from './TeamForm';
import { getAllSkills } from '../store/skillsSlice';
import { getAllTags } from '../store/tagsSlice';
import { getLabels } from './store/labelsSlice';
import { getAllLocations } from '../store/addressSlice';
import { setActiveStep } from './store/jobSlice';
import { getDepartments } from './store/departmentsSlice';
import { getAllTemplates } from './store/templateSlice';
import { getCategories } from './store/categoriesSlice';
import { getAllIndustries } from '../store/industrySlice';
import { getAllJobFunctions } from './store/jobFunctionsSlice';
import { getAllMembers } from '../store/memberSlice';

const useStyles = makeStyles(theme => ({
  stepLabel: {
    cursor: 'pointer!important'
  },
  successFab: {
    background: `${green[500]}!important`,
    color: 'white!important'
  }
}));

function JobCreate(props) {
  const dispatch = useDispatch();
  const activeStepSelected = useSelector(({ jobCreateApp }) => jobCreateApp.job.activeStep);
  const theme = useTheme();
  const [activeStep, setActiveStep1] = useState(1);
  const jobForm = useRef();
  const applicationForm = useRef();
  const workflowForm = useRef();
  const teamForm = useRef();
  const routeParams = useParams();
  const classes = useStyles(props);
  const pageLayout = useRef(null);
  const job = useSelector(({ jobCreateApp }) => jobCreateApp.job.job);



  const { form: cardForm, handleChange, setForm, setInForm } = useForm(job);
  const steps = [
    {
      id: '0',
      title: 'Create Job',
      content: <JobForm ref={jobForm} />
    },
    {
      id: '1',
      title: 'Application Form',
      content: <ApplicationForm ref={applicationForm} />
    },
    {
      id: '2',
      title: 'Workflow',
      content: <WorkflowForm ref={workflowForm} />
    },
    {
      id: '3',
      title: 'Team & Company',
      content: <TeamForm ref={teamForm} />
    }
  ]

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
    steps: steps
  };





  useDeepCompareEffect(() => {
    console.log(routeParams)
    if (routeParams && routeParams.jobId) {
      dispatch(getCourse(routeParams));
    }

  }, [dispatch, routeParams]);

  useEffect(() => {
    if (activeStepSelected)
      setActiveStep1(activeStepSelected);
  }, [dispatch, activeStepSelected]);
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAllIndustries());
    dispatch(getAllJobFunctions());
    dispatch(getAllSkills());
    dispatch(getAllTags());
    dispatch(getLabels());
    dispatch(getAllLocations());
    dispatch(getDepartments());
  }, []);



  function handleChangeActiveStep(index) {
    //if (cardForm.jobId)
    dispatch(setActiveStep(index + 1));
    //dispatch(updateCourse({ activeStep: index + 1 }));
  }

  function handleNext() {
    if (activeStep === 1) {
      jobForm.current.handleFormSubmit();
    }
    else if (activeStep === 2) {
      applicationForm.current.handleFormSubmit();
    }
    else if (activeStep === 3) {
      workflowForm.current.handleFormSubmit();
    }
    else if (activeStep === 4) {
      teamForm.current.handleFormSubmit();
    }

    // dispatch(updateCourse({ activeStep: course.activeStep + 1 }));
  }

  function handleBack() {
    dispatch(setActiveStep(activeStep - 1));
    //dispatch(updateCourse({ activeStep: course.activeStep - 1 }));
  }

  //const activeStep = course && course.activeStep !== 0 ? course.activeStep : 1;

  return (
    <FusePageSimple
      classes={{
        content: 'flex flex-col flex-auto overflow-hidden',
        header: 'h-72 min-h-72'
      }}
      header={
        <div className="flex flex-1 items-center px-16 lg:px-24">
          <Hidden lgUp>
            <IconButton
              onClick={ev => pageLayout.current.toggleLeftSidebar()}
              aria-label="open left sidebar"
            >
              <Icon>menu</Icon>
            </IconButton>
          </Hidden>
          <IconButton to="/apps/hr/jobs" component={Link}>
            <Icon>{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}</Icon>
          </IconButton>
          {course && <Typography className="flex-1 text-20 mx-16">{steps[activeStep - 1].title}</Typography>}
        </div>
      }
      content={
        course && (
          <div className="flex flex-1 relative overflow-hidden">
            <FuseScrollbars className="w-full overflow-auto">
              <SwipeableViews
                className="overflow-hidden"
                index={activeStep - 1}
                enableMouseEvents
                onChangeIndex={handleChangeActiveStep}
              >
                {steps.map((step, index) => (
                  <div
                    className="flex pb-64 sm:pb-64 md:pb-64"
                    key={step.id}
                  >
                    <Paper className="w-full rounded-8 p-16 md:p-24" elevation={1}>
                      {step.content}
                    </Paper>
                  </div>
                ))}
              </SwipeableViews>
            </FuseScrollbars>

            <div className="flex justify-center w-full absolute left-0 right-0 bottom-0 pb-16 md:pb-32">
              <div className="flex justify-between w-full max-w-xl px-8">
                <div>
                  {activeStep !== 1 && (
                    <Fab className="" color="secondary" onClick={handleBack}>
                      <Icon>{theme.direction === 'ltr' ? 'chevron_left' : 'chevron_right'}</Icon>
                    </Fab>
                  )}
                </div>
                <div>
                  {activeStep < steps.length ? (
                    <Fab className="" color="secondary" onClick={handleNext}>
                      <Icon>{theme.direction === 'ltr' ? 'chevron_right' : 'chevron_left'}</Icon>
                    </Fab>
                  ) : (
                    <Fab className={classes.successFab} to="/apps/academy/courses" component={Link}>
                      <Icon>check</Icon>
                    </Fab>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      }
      leftSidebarContent={
        steps && (
          <Stepper classes={{ root: 'bg-transparent' }} activeStep={activeStep - 1} orientation="vertical">
            {steps.map((step, index) => {
              return (
                <Step key={step.id} onClick={() => handleChangeActiveStep(index)}>
                  <StepLabel classes={{ root: classes.stepLabel }}>{step.title}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        )
      }
      innerScroll
      ref={pageLayout}
    />
  );
}

export default withReducer('jobCreateApp', reducer)(JobCreate);
