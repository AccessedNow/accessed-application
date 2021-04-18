import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import JobCard2 from '../../../components/JobCard/JobCard2';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function HighlightJobs(props) {
	const dispatch = useDispatch();
  const jobs = useSelector(({ jobsLandingPage }) => {
    return jobsLandingPage.jobsLandingSlice?jobsLandingPage.jobsLandingSlice.highlightJobs:null;
  });
	const classes = useStyles(props);


	if(!jobs){
	  return null;
  }

  return (

    <Grid container spacing={3}>
      {jobs.map(job => (
      <Grid item xs={3}>
        <JobCard2 job={job}/>
      </Grid>
      ))}
    </Grid>
  );
}

export default HighlightJobs;
