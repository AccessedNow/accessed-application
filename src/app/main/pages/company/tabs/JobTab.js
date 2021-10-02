import FuseLoading from '@fuse/core/FuseLoading';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {getCompanyJobs} from "../store/companySlice";
import JobGrid from "../../../components/JobGrid";

function JobTab() {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState(null);
  const test = (x) => x + 1;

  useEffect(() => {
    dispatch(getCompanyJobs(routeParams)).then((res) => {
      setJobs(res.payload);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <FuseLoading />;
  }

  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };


  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <JobGrid jobs={jobs}/>
    </motion.div>
  );
}

export default JobTab;
