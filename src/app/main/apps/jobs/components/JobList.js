import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import FuseLoading from '@fuse/core/FuseLoading';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectJobs, set } from '../store/jobsSlice';
import JobListItem from './JobListItem';

function JobList(props) {

  return (
    <List className="p-0">
      {props.jobs.map((job) => (
          <JobListItem job={job} />
      ))}
    </List>
  );
}

export default JobList;
