import withReducer from 'app/store/withReducer';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import ChevronRight from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import FontDownload from '@mui/icons-material/FontDownload';
import Favorite from '@mui/icons-material/Favorite';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Box from '@mui/material/Box';

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDeepCompareEffect } from '@fuse/hooks';
import { withRouter, useParams } from 'react-router-dom';
import JobDetailHeader from './JobDetailHeader';

import {getJob, saveJob, applyJob} from "./store/jobSlice";
import reducer from './store';
import {getSimilarJobs} from "./store/similarJobsSlice";
import JobList from "../components/JobList";

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
  const job = useSelector(({ jobDetail }) => jobDetail.job);
  const similarJobs = useSelector(({ jobDetail }) => jobDetail.similarJobs);

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

  const activities = [
    {
      id: '1',
      user: {
        name: 'Alice Freeman',
        avatar: 'assets/images/avatars/alice.jpg'
      },
      message: 'started following you.',
      time: '13 mins. ago'
    },
    {
      id: '2',
      user: {
        name: 'Andrew Green',
        avatar: 'assets/images/avatars/andrew.jpg'
      },
      message: 'sent you a message.',
      time: 'June 10,2015'
    },
    {
      id: '3',
      user: {
        name: 'Garry Newman',
        avatar: 'assets/images/avatars/garry.jpg'
      },
      message: 'shared a public post with your group.',
      time: 'June 9,2015'
    },
    {
      id: '4',
      user: {
        name: 'Carl Henderson',
        avatar: 'assets/images/avatars/carl.jpg'
      },
      message: 'wants to play Fallout Shelter with you.',
      time: 'June 8,2015'
    }
  ];

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
    dispatch(saveJob(getValues()));
  }

  function handleApplyJob() {
    dispatch(applyJob(getValues()));
  }



  return (
    <Root>
        <motion.div variants={container} initial="hidden" animate="show">
          <div className="md:flex">
            <div className="flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32">
              <Card
                component={motion.div}
                variants={item}
                className="w-full overflow-hidden rounded-16 shadow mb-32"
              >
                <JobDetailHeader company={job.company}/>
                <div className="w-full items-center justify-between px-32 py-40">
                  <div className="flex flex-1 w-full items-center justify-between">
                    <motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.3 } }}>
                      <Typography className="text-16 sm:text-20 truncate font-semibold">
                        {job.title}
                      </Typography>
                    </motion.div>
                    <motion.div
                      className="flex"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                    >
                      <IconButton aria-label="Apply" onClick={handleApplyJob} size="large">
                        <FontDownload fontSize="inherit"/>
                      </IconButton>
                      <IconButton aria-label="Save" onClick={handleSaveJob} size="large">
                        <Favorite fontSize="inherit"/>
                      </IconButton>
                    </motion.div>
                  </div>
                  <div className="flex flex-1 w-full items-center justify-between mb-40">
                    <Typography className="truncate">
                      {job.company.name} - {job.country}
                    </Typography>
                    <Typography className="truncate">
                      Posted 1 week ago - 12 Applicants
                    </Typography>
                  </div>
                  <div className="flex flex-1 w-full items-center justify-between mb-20">
                    <div className="flex flex-col items-center justify-center">
                      <Typography variant="caption" className="mt-4">
                        EXPERIENCE
                      </Typography>
                      <Typography variant="caption" className="mt-4 font-600">
                        {job.level}
                      </Typography>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <Typography variant="caption" className="mt-4">
                        LEVEL
                      </Typography>
                      <Typography variant="caption" className="mt-4 font-600">
                        {job.level}
                      </Typography>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <Typography variant="caption" className="mt-4">
                        EMPLOYMENT
                      </Typography>
                      <Typography variant="caption" className="mt-4 font-600">
                        {job.employmentType}
                      </Typography>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <Typography variant="caption" className="mt-4">
                        SALARY
                      </Typography>
                      <Typography variant="caption" className="mt-4 font-600">
                        {salary}
                      </Typography>
                    </div>
                  </div>
                  <div className="w-full items-center justify-between" mb-40>
                    <Typography variant="h6" className="mb-10 text-14 mb-30">
                      Description
                    </Typography>

                    <Typography className="mb-16" component="p" style={{whiteSpace: "pre-line"}}>
                      {job.description}
                    </Typography>
                  </div>
                  <Card className="rounded-16">
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
                  </Card>
                </div>
              </Card>
            </div>

            <div className="flex flex-col md:w-320">
              {similarJobs &&
              <Card component={motion.div} variants={item} className="w-full rounded-16 shadow mb-32">
                <AppBar position="static" elevation={0} className="bg-transparent">
                  <Toolbar className="px-8">
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      className="flex-1 px-12 font-medium"
                    >
                      Similar Jobs
                    </Typography>
                    <Button color="primary" size="small" className="font-medium">
                      See All
                    </Button>
                  </Toolbar>
                </AppBar>
                <CardContent className="p-0">
                  <JobList jobs={similarJobs}/>
                </CardContent>
              </Card>
              }
            </div>
          </div>
        </motion.div>

    </Root>
  );
}

export default withReducer('jobDetail', reducer)(JobDetail);
