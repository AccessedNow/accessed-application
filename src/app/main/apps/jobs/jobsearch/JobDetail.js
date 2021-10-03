import FuseUtils from '@fuse/utils';
import FusePageSimple from '@fuse/core/FusePageSimple';
import clsx from 'clsx';
import _ from '@lodash';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import Divider from '@mui/material/Divider';
import ChevronRight from '@mui/icons-material/ChevronRight';
import FontDownload from '@mui/icons-material/FontDownload';
import Favorite from '@mui/icons-material/Favorite';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectJobs, selectJobsById } from './store/jobsSlice';
import JobDetailHeader from './JobDetailHeader';
import {removeProduct, saveProduct} from "../../e-commerce/store/productSlice";
import {dateDiff} from "../../../../utils/helper";


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
  // const selectedItem = useSelector((state) =>
  //   selectJobsById(state, state.jobSearch.jobs.selectedItemId)
  // );

  const selectedItem = useSelector(({ jobSearch }) => jobSearch.jobs.selectedItem);
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
    <div className="w-full pb-48 items-center rounded-10">
      <JobDetailHeader company={selectedItem.company}/>
      <div className="w-full items-center justify-between px-32 py-40">
        <div className="flex flex-1 w-full items-center justify-between">
          <motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.3 } }}>
            <Typography className="text-16 sm:text-20 truncate font-semibold">
              <Link href={`/jobs/view/${selectedItem.jobId}`} style={{textDecoration: "none"}}>{selectedItem.title}</Link>
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
            <Typography variant="caption" className="mt-4 font-600">
              {selectedItem.level}
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Typography variant="caption" className="mt-4">
              LEVEL
            </Typography>
            <Typography variant="caption" className="mt-4 font-600">
              {selectedItem.level}
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Typography variant="caption" className="mt-4">
              EMPLOYMENT
            </Typography>
            <Typography variant="caption" className="mt-4 font-600">
              {selectedItem.employmentType}
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

          <Typography className="mb-16" component="p">
            {selectedItem.description}
          </Typography>
        </div>

        <Card className="" variant="outlined">
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
              <Avatar variant="square" className="w-72 h-72" alt={selectedItem.company.name} src={selectedItem.company.avatar} />
              <div className="flex flex-1 flex-col relative overflow-hidden px-8">
                <Typography color="textSecondary" className="text-14 font-700">
                  {selectedItem.company.name}
                </Typography>
                <Typography className="text-14 font-medium">
                  {selectedItem.company.primaryAddress.country}
                </Typography>
              </div>

            </div>
          </CardContent>
        </Card>



      </div>

    </div>
  );
}

export default JobDetail;
