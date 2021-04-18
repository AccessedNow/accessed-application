import _ from '@lodash';
import FuseAnimate from '@fuse/core/FuseAnimate';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import LinearProgress from '@material-ui/core/LinearProgress';
import Carousel from 'react-material-ui-carousel'
import JobCard from '../../../../components/JobCard/JobCard';
import JobListItem from '../../../../components/JobListItem/JobListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import jobService from 'app/services/jobService';

import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  searchBar: {
    padding: '2px 4px',
    margin: '0 0 20px 0',
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  grid: {

  }
}));


function JobsTab(props) {
  const classes = useStyles();
  const {company} = props;
	const [data, setData] = useState(null);

	useEffect(() => {
    jobService
      .getCompanyJobs(company.id)
      .then(res => {
        setData(res)
      });
	}, []);

	if (!data) {
		return null;
	}


  function buttonStatus(course) {
    switch (course.activeStep) {
      case course.totalSteps:
        return 'COMPLETED';
      case 0:
        return 'START';
      default:
        return 'CONTINUE';
    }
  }


	return (
				<FuseAnimateGroup
					enter={{
						animation: 'transition.slideUpBigIn'
					}}
				>
          <Paper component="form" className={classes.searchBar}>
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder={`Search ${company.name} Jobs`}
              inputProps={{ 'aria-label': 'search google jobs' }}
            />

            <Button variant="contained" color="primary" className={classes.iconButton} aria-label="directions">
              Search
            </Button>
          </Paper>

          <Card className="w-full mb-16 rounded-4">
            <AppBar position="static" elevation={0} className="bg-transparent">
              <Toolbar className="px-8">
                <Typography variant="subtitle1" color="primary" className="flex-1 px-12">
                  Recommended jobs for you
                </Typography>
              </Toolbar>
            </AppBar>

            <CardContent>

              <FuseAnimateGroup
                enter={{
                  animation: 'transition.slideUpBigIn'
                }}
                className="flex flex-wrap py-24"
              >
                <Grid container spacing={3}>
                  {data.recommended.map(job => {
                    return (
                      <Grid item xs={4}>
                        <JobCard className="w-full" key={job.jobId} job={job}/>
                      </Grid>
                    );
                  })}
                </Grid>
              </FuseAnimateGroup>

						</CardContent>
					</Card>

          <Card className="w-full mb-16 rounded-4">
            <AppBar position="static" elevation={0} className="bg-transparent">
              <Toolbar className="px-8">
                <Typography variant="subtitle1" color="primary" className="flex-1 px-12">
                  Recently posted jobs
                </Typography>
              </Toolbar>
            </AppBar>

            <CardContent>
              {data.latest.map(job => {
                return (
                  <JobListItem key={job.jobId} job={job}/>
                );
              })}
            </CardContent>
            <Divider />
            <CardActions className="justify-center">
              <Button
                to={`/jobs/search`}
                component={Link}
                className="justify-start px-32"
                color="secondary"
              >
                See all jobs
              </Button>
            </CardActions>
          </Card>
				</FuseAnimateGroup>
	);
}

export default JobsTab;
