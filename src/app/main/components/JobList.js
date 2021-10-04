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
  const data = useSelector(({ jobSearch }) => jobSearch.jobs.data);
  const pagination = useSelector(({ jobSearch }) => jobSearch.jobs.pagination);

  const [loading, setLoading] = useState(true);

  const handleChange = (event, value) => {
    let query = queryString.parse(history.location.search);
    query.page = value
    let url = '?'+ (new URLSearchParams(query));
    history.push(url);
    setLoading(true);
    // dispatch(updatePage(value));
    dispatch(searchJobs(routeParams)).then(({payload}) => {
      setLoading(false);
      scrollToTop();
    })
  };

  const scrollToTop = () => {
    // contentScrollEl.current.scrollTop = 0;
  };



  return (
    <div>
      <List className="p-0" type={props.type}>
        {data.map((job) => (
          <JobListItem job={job} setSelectedItem={props.setSelectedItem}/>

        ))}
      </List>
      <Stack spacing={2}>
        <Pagination count={pagination.totalPages} page={pagination.query.page} onChange={handleChange} />
      </Stack>
    </div>
  );
}

export default JobList;
