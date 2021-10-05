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
    },
    {
      id: '1',
      title: 'Get the sample code',
      content:
      '<h1>Step 2 - Get the sample code</h1>' +
      '<br>' +
      'This is an example step of the course. You can put anything in here from example codes to videos.'
    },
    {
      id: '2',
      title: 'Create a Firebase project and Set up your app',
      content:
      '<h1>Step 3 - Create a Firebase project and Set up your app</h1>' +
      '<br>' +
      'This is an example step of the course. You can put anything in here from example codes to videos.'
    }
  ]
};

function ApplyForm(props) {
  const dispatch = useDispatch();
  const theme = useTheme();

  const routeParams = useParams();
  const pageLayout = useRef(null);


  const activeStep = course && course.activeStep !== 0 ? course.activeStep : 1;



  // useDeepCompareEffect(() => {
  //   /**
  //    * Get the Course Data
  //    */
  //   dispatch(props.getCourse(routeParams));
  // }, [dispatch, routeParams]);

  useEffect(() => {
    /**
     * If the course is opened for the first time
     * Change ActiveStep to 1
     */
    if (course && course.activeStep === 0) {
      dispatch(props.updateStep({ activeStep: 1 }));
    }
  }, [dispatch, course]);

  function handleChangeActiveStep(index) {
    dispatch(props.updateStep( index + 1 ));
  }

  function handleNext() {
    dispatch(props.updateCourse(course.activeStep + 1));
  }

  function handleBack() {
    dispatch(props.updateCourse(course.activeStep));
  }



  return (
    <div>
      <div className="flex flex-1 relative overflow-hidden">
        <FuseScrollbars className="w-full overflow-auto">
          <SwipeableViews
            className="overflow-hidden"
            index={activeStep - 1}
            enableMouseEvents
            onChangeIndex={handleChangeActiveStep}
          >
            {course.steps.map((step, index) => (
              <div
                className="flex justify-center p-16 pb-64 sm:p-24 sm:pb-64 md:p-48 md:pb-64"
                key={step.id}
              >
                <Paper className="w-full max-w-lg rounded-20 p-16 md:p-24 shadow text-14 leading-normal">
                  <div
                    dangerouslySetInnerHTML={{ __html: step.content }}
                    dir={theme.direction}
                  />
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
              {activeStep < course.steps.length ? (
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
    </div>
  );
}

export default ApplyForm;
