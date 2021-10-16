import withReducer from 'app/store/withReducer';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import FontDownload from '@mui/icons-material/FontDownload';
import Favorite from '@mui/icons-material/Favorite';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDeepCompareEffect } from '@fuse/hooks';
import { withRouter, useParams } from 'react-router-dom';
import JobDetailHeader from '../components/JobDetailHeader';
import JobDetailBody from '../components/JobDetailBody';

import {getJob, saveJob, applyJob, openDialog, closeDialog, updateStep} from "./store/jobSlice";
import reducer from './store';
import {getSimilarJobs} from "./store/similarJobsSlice";
import ApplyDialog from "../components/dialogs/ApplyDialog";
import TodoDialog from "../components/dialogs/TodoDialog";

import JobGrid from "../../../components/JobGrid";
import Ad from "../../../components/Ad";
import MediaAd from "../../../components/MediaAd";

// const Root = styled(FusePageSimple)(({ theme }) => ({
//
//   '& .FusePageSimple-wrapper': {
//     background: 'transparent',
//   },
//
//   '& .FusePageSimple-content': {
//     width: '100%',
//     maxWidth: 1120,
//     margin: 'auto',
//   },
//
//
// }));
const Root = styled('div')({
  padding: 24,
  width: '100%',
  maxWidth: 1120,
  margin: 'auto',
});

function JobDetail() {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const job = useSelector(({ jobDetail }) => jobDetail.job.detail);
  const similarJobs = useSelector(({ jobDetail }) => jobDetail.similarJobs);
  const applicationDialog = useSelector(({ jobDetail }) => jobDetail.job.applicationDialog);

  const [showDetails, setShowDetails] = useState(false);
  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    dispatch(getSimilarJobs(routeParams));
  }, [dispatch]);

  useDeepCompareEffect(() => {
    dispatch(getJob(routeParams));
  }, [dispatch, routeParams]);

  if (!job) {
    return null;
  }

  let salary='';
  if(job.salaryFixed){
    salary = job.salaryFixed;
  } else if(job.salaryRangeLow && !job.salaryRangeHigh) {
    salary = 'from ' + job.salaryRangeLow;
  } else if(job.salaryRangeHigh && !job.salaryRangeLow) {
    salary = 'max ' + job.salaryRangeHigh;
  } else {
    salary = job.salaryRangeLow + '-' + job.salaryRangeHigh;
  }


  function handleSaveJob() {
    dispatch(saveJob(id));
  }

  function handleApplyJob(job) {
    dispatch(openDialog(job));
  }

  if(!job){
    return null;
  }

  return (
    <Root>
        <motion.div variants={container} initial="hidden" animate="show">
          <div className="md:flex">
            <div className="flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32">
              <Card
                component={motion.div}
                variant="outlined"
                className="w-full overflow-hidden rounded-8 mb-20 "
              >
                <JobDetailHeader company={job.company}/>
                <JobDetailBody job={job}/>

                <CardActions className="flex items-center justify-center text-center border-t-1">

                  <Typography variant="span" color="text.secondary" className="flex" onClick={() => {
                    setShowDetails(!showDetails);
                  }}>
                    {!showDetails? 'See More' : 'See Less' }
                  </Typography>

                </CardActions>

              </Card>
              <Card variant="outlined" className="mb-20 rounded-8" >
                <CardHeader
                  action={
                    <IconButton aria-label="Learn more">
                      <ChevronRight />
                    </IconButton>
                  }
                  title={<Typography className="text-14 font-medium">
                    ABOUT THE COMPANY
                  </Typography>}
                  subheader="Learn more"
                />

                <CardContent className="p-32">
                  <div className="flex justify-end z-10 container">
                    <Avatar variant="square" className="w-72 h-72" alt={job.company.name} src={job.company.avatar} />
                    <div className="flex flex-1 flex-col relative overflow-hidden px-8">
                      <Typography color="textSecondary" className="text-14 font-700">
                        {job.company.name}
                      </Typography>
                      <Typography className="text-14 font-medium">
                        {job.company.primaryAddress.country}
                      </Typography>
                    </div>

                  </div>
                </CardContent>
                {!showDetails &&
                <CardActions className="text-center">
                  <Typography variant="span" color="text.secondary" className="">
                    See More
                  </Typography>
                </CardActions>
                }
              </Card>
              <div>
                {similarJobs &&
                  <JobGrid jobs={similarJobs}/>
                }
              </div>
            </div>

            <div className="flex flex-col md:w-288">
              <div className="mb-20">
                <Ad />
              </div>
              <div className="mb-20">
                <MediaAd />
              </div>
              <div className="flex flex-row  items-center rounded-8 bg-white p-16 shadow-sm">
                <Typography className="text-14">
                  Looking for talent
                </Typography>
                <Button variant="contained" size="medium" className="ml-10">
                  Post a Job
                </Button>
              </div>


            </div>
          </div>
        </motion.div>
        {/*<ApplyDialog job={job} updateStep={updateStep} openDialog={openDialog} closedialog={closeDialog} applicationDialog={applicationDialog}/>*/}
        <TodoDialog job={job} apply={applyJob} openDialog={openDialog} closeDialog={closeDialog}  applicationDialog={applicationDialog}/>
    </Root>
  );
}

export default withReducer('jobDetail', reducer)(JobDetail);
