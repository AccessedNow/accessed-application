import withReducer from 'app/store/withReducer';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Icon from '@mui/material/Icon';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
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
import JobGrid from "../../../components/JobGrid";
import Ad from "../../../components/Ad";
import MediaAd from "../../../components/MediaAd";

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 0,
    height: 20,
    background: 'none',
    [theme.breakpoints.up('lg')]: {
      minHeight: 36,
      height: 36,
    },
  },
  '& .FusePageSimple-contentWrapper': {
    padding: 0,
    paddingBottom: 80,
    [theme.breakpoints.up('md')]: {
      padding: 0
    },
  },
  '& .FusePageSimple-rightSidebar': {
    width: '100%'
  },
  '& .FusePageSimple-sidebar': {
    border: 0,
  },
  '& .FusePageSimple-rightSidebar': {
    width: 288,
    marginLeft: 20,
    border: 'none',
  },
  // '& .FusePageSimple-wrapper': {
  //   background: 'transparent',
  // },

  // '& .FusePageSimple-content': {
  //   width: '100%',
  //   maxWidth: 1120,
  //   margin: 'auto',
  // },



}));

function JobDetail() {
  const pageLayout = useRef(null);
  const dispatch = useDispatch();
  const routeParams = useParams();
  const job = useSelector(({ jobDetail }) => jobDetail.job.detail);
  const similarJobs = useSelector(({ jobDetail }) => jobDetail.similarJobs);
  const applicationDialog = useSelector(({ jobDetail }) => jobDetail.job.applicationDialog);

  const [showDetail, setShowDetail] = useState(false);
  const [showCompanyDetail, setShowCompanyDetail] = useState(false);
  const [alertChecked, setAlertChecked] = useState(false);
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



  const handleJobAlert = () => {
    setAlertChecked(true);
  };

  if(!job){
    return null;
  }

  return (
    <>
      <Root
        header={<></>}
        content={
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col flex-1">
            <Card
              component={motion.div}
              variant="outlined"
              className="w-full overflow-hidden rounded-8 mb-20 "
            >
              <JobDetailHeader company={job.company}/>
              <JobDetailBody job={job} showDetail={showDetail}/>

              <CardActions className="flex items-center justify-center text-center border-t-1 p-0">
                <Button className="w-full" onClick={() => {setShowDetail(!showDetail);}}>
                  <Typography variant="span" color="text.secondary" className="flex">
                    {!showDetail ? 'See More' : 'See Less'}
                  </Typography>
                </Button>
              </CardActions>

            </Card>
            {!alertChecked &&
              <Paper variant="outlined"
                     className="flex flex-row items-start justify-start justify-between w-full rounded-6 p-20 mb-20">
                <div className="flex flex-row">
                  <Icon className="">access_time</Icon>
                  <div className="flex ml-10 flex-col ">
                    <Typography fontWeight={600} className="text-16" color="inherit">Set alert for similar
                      jobs</Typography>
                    <Typography variant="body2" className="" color="inherit">{`${job.title}, ${job.country}`}</Typography>
                  </div>
                </div>
                {/*<Button variant="outlined" onClick={handleJobAlert}>Create Job Alert</Button>*/}

                <Switch onChange={handleJobAlert}/>
              </Paper>
            }
            <Card variant="outlined" className="mb-20 rounded-8">
              <CardHeader

                title={<Typography className="text-14 font-medium">
                  ABOUT THE COMPANY
                </Typography>}
                subheader="Learn more"
              />

              <CardContent className="p-32">
                <div className="flex justify-end z-10 container">
                  <Avatar variant="square" className="w-72 h-72" alt={job.company.name} src={job.company.avatar}/>
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
              <CardActions className="flex items-center justify-center text-center border-t-1 p-0">
                <Button href={`/company/${job.company.id}`} className="w-full">
                  See More
                </Button>
              </CardActions>

            </Card>
            <div>
              {similarJobs &&
              <JobGrid jobs={similarJobs}/>
              }
            </div>
          </motion.div>
        }
        rightSidebarContent={
          <div className="">
            <div className="mb-20">
              <Ad/>
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
        }
        sidebarInner
        ref={pageLayout}
      />
      </>
  );
}

export default withReducer('jobDetail', reducer)(JobDetail);
