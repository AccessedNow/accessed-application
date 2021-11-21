import * as React from 'react';
import queryString from 'query-string';

import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import FuseLoading from '@fuse/core/FuseLoading';
import List from '@mui/material/List';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useParams, useHistory } from "react-router-dom";

import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JobListItem from './JobListItem';
import {searchJobs, setPagination, updatePage} from "../apps/jobs/store/jobsSlice";

function JobList(props) {
  const contentScrollEl = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const routeParams = useParams();

  const [loading, setLoading] = useState(true);

  const handleChange = (event, value) => {
    props.onChange();
  };

  const scrollToTop = () => {
    // contentScrollEl.current.scrollTop = 0;
  };



  return (
    <div className="bg-white">
      <List className="p-0" type={props.type}>
        {props.jobs.map((job) => (
          <JobListItem key={job._id} job={job} setSelectedItem={props.setSelectedItem}/>

        ))}
      </List>
      <Stack spacing={2} className="py-10">
        <Pagination count={props.pagination.totalPages} page={props.pagination.page} onChange={handleChange} />
      </Stack>
    </div>
  );
}

export default JobList;
