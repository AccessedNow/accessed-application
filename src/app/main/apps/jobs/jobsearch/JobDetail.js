import FuseUtils from '@fuse/utils';
import FusePageSimple from '@fuse/core/FusePageSimple';

import _ from '@lodash';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FontDownload from '@mui/icons-material/FontDownload';
import Favorite from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectJobs, selectJobsById } from './store/jobsSlice';
import JobDetailHeader from './JobDetailHeader';
import {removeProduct, saveProduct} from "../../e-commerce/store/productSlice";


const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-topBg': {
    background: 'url("assets/images/profile/morain-lake.jpg")!important',
    backgroundSize: 'cover!important',
    backgroundPosition: 'center center!important',
  },

  '& .FusePageSimple-header': {
    background: 'none',
    height: 320,
    minHeight: 320,
    [theme.breakpoints.down('lg')]: {
      height: 240,
      minHeight: 240,
    },
  },

  '& .FusePageSimple-wrapper': {
    background: 'transparent',
  },

  '& .FusePageSimple-content': {
    width: '100%',
    maxWidth: 1120,
    margin: 'auto',
  },

  '& .FusePageSimple-toolbar': {
    width: '100%',
    maxWidth: 1120,
    margin: 'auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'auto',
    height: 'auto',
    aliginItesm: 'flex-start',
  },
}));

function JobDetail(props) {
  const selectedItem = useSelector((state) =>
    selectJobsById(state, state.jobSearch.jobs.selectedItemId)
  );

  if (!selectedItem) {
    return null;
  }


  let salary='';
  if(selectedItem.salaryFixed){
    salary = selectedItem.salaryFixed;
  } else if(selectedItem.salaryRangeLow && !selectedItem.salaryRangeHigh) {
    salary = 'from ' + selectedItem.salaryRangeLow;
  } else if(selectedItem.salaryRangeHigh && !selectedItem.salaryRangeLow) {
    salary = 'max ' + selectedItem.salaryRangeHigh;
  } else {
    salary = selectedItem.salaryRangeLow + '-' + selectedItem.salaryRangeHigh;
  }



  function handleSaveJob() {
    dispatch(saveProduct(getValues()));
  }

  function handleApplyJob() {
    dispatch(removeProduct()).then(() => {
      history.push('/apps/e-commerce/products');
    });
  }

  return (
    <div className="w-full pb-48 items-center">
      <JobDetailHeader company={selectedItem.company}/>
      <div className="flex flex-1 w-full items-center justify-between">
        <motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.3 } }}>
          <Typography className="text-16 sm:text-20 truncate font-semibold">
            {selectedItem.title}
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
          {selectedItem.company.name} - {selectedItem.country}
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
          <Typography variant="caption" className="mt-4">
            {selectedItem.level}
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Typography variant="caption" className="mt-4">
            LEVEL
          </Typography>
          <Typography variant="caption" className="mt-4 font-800">
            {selectedItem.level}
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Typography variant="caption" className="mt-4">
            EMPLOYMENT
          </Typography>
          <Typography variant="caption" className="mt-4">
            {selectedItem.employmentType}
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Typography variant="caption" className="mt-4">
            SALARY
          </Typography>
          <Typography variant="caption" className="mt-4">
            {salary}
          </Typography>
        </div>
      </div>
      <div className="w-full items-center justify-between">
        <Typography variant="h6" className="mb-10 text-14">
          Code Splitting
        </Typography>

        <Typography className="mb-16" component="p">
          Code-splitting your app can help you “lazy-load” just the things that are currently needed
          by the user, which can dramatically improve the performance of your app. While you haven’t
          reduced the overall amount of code in your app, you’ve avoided loading code that the user
          may never need, and reduced the amount of code needed during the initial load.
        </Typography>
      </div>
      <div className="w-full items-center justify-between">
        <Typography variant="h6" className="mb-10 text-14">
          Code Splitting
        </Typography>

        <Typography className="mb-16" component="p">
          Code-splitting your app can help you “lazy-load” just the things that are currently needed
          by the user, which can dramatically improve the performance of your app. While you haven’t
          reduced the overall amount of code in your app, you’ve avoided loading code that the user
          may never need, and reduced the amount of code needed during the initial load.
        </Typography>
      </div>
      <div className="w-full items-center justify-between">
        <Typography variant="h6" className="mb-10 text-14">
          Code Splitting
        </Typography>

        <Typography className="mb-16" component="p">
          Code-splitting your app can help you “lazy-load” just the things that are currently needed
          by the user, which can dramatically improve the performance of your app. While you haven’t
          reduced the overall amount of code in your app, you’ve avoided loading code that the user
          may never need, and reduced the amount of code needed during the initial load.
        </Typography>
      </div>
    </div>
  );
}

export default JobDetail;
