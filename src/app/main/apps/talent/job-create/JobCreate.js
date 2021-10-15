import FusePageSimple from '@fuse/core/FusePageSimple';
import { useTheme, styled } from '@mui/material/styles';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { green } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import withReducer from 'app/store/withReducer';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import SwipeableViews from 'react-swipeable-views';
import reducer from './store';
import { useState } from 'react';
import { getJob, updateJob } from '../store/jobSlice';
import JobForm from './components/JobForm';
import Billing from './components/Billing';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 72,
    height: 72,
    [theme.breakpoints.up('lg')]: {
      borderBottomLeftRadius: 20,
    },
  },
  '& .FusePageSimple-content': {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  '& .FusePageSimple-sidebar': {
    padding: 24,
    border: 0,
  },
}));

function JobCreate(props) {
  const dispatch = useDispatch();
  const job = useSelector(({ jobCreate }) => jobCreate.job);
  const theme = useTheme();

  const routeParams = useParams();
  const pageLayout = useRef(null);
  const [showDetails, setShowDetails] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: '0',
      title: 'Job Detail',
      content: <JobForm />
    },
    {
      id: '1',
      title: 'Application Form',
      content: <Billing />
    }
  ]

  useDeepCompareEffect(() => {
    /**
     * Get the Job
     */
    
    dispatch(getJob(routeParams));
  }, [dispatch, routeParams]);

  useEffect(() => {
    /**
     * If the course is opened for the first time
     * Change ActiveStep to 1
     */
    if (job && activeStep === 0) {
      // dispatch(upddateJob({ currentStep: 1 }));
    }
  }, [dispatch, job]);

  function handleChangeActiveStep(index) {
    // dispatch(upddateJob({ activeStep: index + 1 }));
    setActiveStep(activeStep+1)
  }

  function handleNext() {
    // dispatch(upddateJob({ activeStep: course.activeStep + 1 }));
    setActiveStep(activeStep+1);
  }

  function handleBack() {
    // dispatch(upddateJob({ activeStep: course.activeStep - 1 }));
    setActiveStep(activeStep-1);
  }

  // const activeStep = job && currentStep !== 0 ? currentStep : 0;

  return (
    <Root
      header={
        <div className="flex flex-1 items-center px-16 lg:px-24">
          <Hidden lgUp>
            <IconButton
              onClick={(ev) => pageLayout.current.toggleLeftSidebar()}
              aria-label="open left sidebar"
              size="large"
            >
              <Icon>menu</Icon>
            </IconButton>
          </Hidden>
          <IconButton to="/apps/academy/courses" component={Link} size="large">
            <Icon>{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}</Icon>
          </IconButton>
          {job && <Typography className="flex-1 text-20 mx-16">Create Job</Typography>}
        </div>
      }
      content={
        job && (
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
                    className="flex justify-center p-16 pb-64 sm:p-24 sm:pb-64 md:p-48 md:pb-64"
                    key={step.id}
                  >
                    <Paper className="w-full max-w-lg rounded-20 p-16 md:p-24 shadow text-14 leading-normal">
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
                  {activeStep < job.steps.length ? (
                    <Fab className="" color="secondary" onClick={handleNext}>
                      <Icon>{theme.direction === 'ltr' ? 'chevron_right' : 'chevron_left'}</Icon>
                    </Fab>
                  ) : (
                    <Fab
                      sx={{ background: `${green[500]}!important`, color: 'white!important' }}
                      to="/apps/academy/courses"
                      component={Link}
                    >
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
        job && (
          <Stepper
            classes={{ root: 'bg-transparent' }}
            activeStep={activeStep - 1}
            orientation="vertical"
          >
            {steps.map((step, index) => {
              return (
                <Step key={step.id} onClick={() => handleChangeActiveStep(index)}>
                  <StepLabel sx={{ cursor: 'pointer!important' }}>{step.title}</StepLabel>
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

export default withReducer('jobCreate', reducer)(JobCreate);
