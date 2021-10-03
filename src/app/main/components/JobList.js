import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import FuseLoading from '@fuse/core/FuseLoading';
import List from '@mui/material/List';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import JobListItem from './JobListItem';

function JobList(props) {

  const data = useSelector(({ jobSearch }) => jobSearch.jobs.data);

  if(!data){
    return <span>No Jobs</span>;
  }

  const jobs = data.content;



  return (
    <div>
      <List className="p-0" type={props.type}>
        {jobs.map((job) => (
          <JobListItem job={job} setSelectedItem={props.setSelectedItem}/>

        ))}
      </List>
      <Stack spacing={2}>
        <Pagination count={10} />
      </Stack>
    </div>
  );
}

export default JobList;
