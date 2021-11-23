import FuseLoading from '@fuse/core/FuseLoading';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Paper from '@mui/material/Paper';

import Typography from '@mui/material/Typography';

import {getCompanyJobs} from "../../store/companySlice";
import JobGrid from "../../../../components/JobGrid";
import JobAlertDialog from '../dialogs/JobAlertDialog';


function JobTab() {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const [loading, setLoading] = useState(true);
  const [jobAlert, setJobAlert] = useState(false);
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

  const handleJobAlertDialog = () => {
    setJobAlert(true);
  };


  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <Paper className="flex flex-row items-start justify-start justify-between w-full border-1 rounded-6 p-20 mb-12">
        <div className="flex flex-row">
          <Icon className="">access_time</Icon>
          <div className="flex ml-10 flex-col ">
            <Typography className="text-14 font-600" color="inherit">Create job alert for Limeade</Typography>
            <Typography variant="body2" className="" color="inherit">Get notified when Limeade posts new jobs that match your interest.</Typography>
          </div>
        </div>
        <Button variant="outlined" onClick={handleJobAlertDialog}>Create Job Alert</Button>
      </Paper>
      <JobGrid jobs={jobs}/>
      <JobAlertDialog open={jobAlert}/>
    </motion.div>
  );
}

export default JobTab;
