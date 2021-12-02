import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { withRouter, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Toolbar from './Toolbar';
import ApplicationGridItem from './ApplicationGridItem';
import {getJobApplications} from "../../store/applicationsSlice";

function ApplicationGrid(props) {
  const dispatch = useDispatch();
  const routeParams = useParams();

  const applications = useSelector(({ jobDetail }) => jobDetail.applications.data);
  const searchText = useSelector(({ jobDetail }) => jobDetail.applications.searchText);
  const orderBy = useSelector(({ jobDetail }) => jobDetail.applications.searchText);
  const orderDescending = useSelector(({ jobDetail }) => jobDetail.applications.orderDescending);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    if(!filteredData){
      dispatch(getJobApplications(routeParams));
    }

    function getFilteredArray(entities, _searchText) {
      if (_searchText.length === 0) {
        return applications;
      }
      return FuseUtils.filterArrayByString(applications, _searchText);
    }

    if (applications) {
      setFilteredData(
        _.orderBy(
          getFilteredArray(applications, searchText),
          [orderBy],
          [orderDescending ? 'desc' : 'asc']
        )
      );
    }
  }, [dispatch, routeParams, applications, searchText, orderBy, orderDescending]);

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
          There are no applications!
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
    <div>
      <Toolbar />

      <motion.div
        className="flex flex-wrap py-24"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {filteredData.map((application) => (
          <motion.div
            variants={item}
            className="w-full pb-24 sm:w-1/2 lg:w-1/4 sm:p-16"
            key={application._id}
          >
            <ApplicationGridItem application={application} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ApplicationGrid;
