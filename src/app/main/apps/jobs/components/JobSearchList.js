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

function JobSearchList(props) {
  const jobs = useSelector(selectJobs);
  const searchText = useSelector(({ jobSearch }) => jobSearch.jobs.searchText);
  const orderBy = useSelector(({ jobSearch }) => jobSearch.jobs.orderBy);
  const orderDescending = useSelector(({ jobSearch }) => jobSearch.jobs.orderDescending);
  const selectedItemId = useSelector(({ jobSearch }) => jobSearch.jobs.selectedItemId);

  const [filteredData, setFilteredData] = useState(null);


  useEffect(() => {
    function getFilteredArray(entities, _searchText) {
      if (_searchText.length === 0) {
        return jobs;
      }
      return FuseUtils.filterArrayByString(jobs, _searchText);
    }


    if (jobs) {
      setFilteredData(
        _.orderBy(
          getFilteredArray(jobs, searchText),
          [orderBy],
          [orderDescending ? 'desc' : 'asc']
        )
      );
    }
  }, [jobs, searchText, orderBy, orderDescending]);

  if (!filteredData) {
    return null;
  }

  if (filteredData.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="textSecondary" variant="h5">
          There are no jobs!
        </Typography>
      </motion.div>
    );
  }

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <List className="p-0">
      <motion.div variants={container} initial="hidden" animate="show">
        {filteredData.map((job) => (
          <motion.div variants={item} key={job._id}>
            <JobListItem job={job} />
          </motion.div>
        ))}
      </motion.div>
    </List>
  );
}

export default JobSearchList;
