
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {categoryImageUrl} from 'app/utils/urlHelper';

import JobDetailHeader from './JobDetailHeader';
import JobDetailBody from './JobDetailBody';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function JobDetail(props) {

	const classes = useStyles(props);
  const {job} = props;

	if(!job){
	  return null;
  }

  return (

    <Paper className={props.className + " min-w-0 md:ltr:mr-20 md:rtl:ml-20"}>
      <JobDetailHeader profile={job.company} />
      <JobDetailBody job={job}/>

    </Paper>
  );
}

export default JobDetail;
