import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/FavoriteOutlined';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import LocationOncon from '@mui/icons-material/LocationOn';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import PlaceIcon from '@mui/icons-material/Place';
import Rating from '@mui/material/Rating';

import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {categoryImageUrl} from 'app/utils/urlHelper';
import JobCardItem from '../../../components/JobCardItem';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  }
});

function JobLandingContent(props) {
	const dispatch = useDispatch();
  const classes = useStyles(props);
  const jobLanding = useSelector(({ jobLandingPage }) => {
    return jobLandingPage.jobLanding;
  });

	if(!jobLanding){
	  return null;
  }

  return (
    <div>

      <div className="mb-60">
        <Typography className="font-semibold mb-4 text-20">TOP FEATURED EMPLOYERS</Typography>
        <Typography className="mb-20">We can determine what developers needs and what skills they're proficient in.  You'll get access to the community, relevancy to your business, and more qualified employers.</Typography>
        <Divider />
        <Box sx={{ flexGrow: 1 }} className="mt-20">
          <Grid container spacing={3}  className="mt-20">
            {jobLanding.popularCompanies.map((company, index) => (
              index < 8 && (
              <Grid item s={1} md={3} key={company.id}>
                <Card className="rounded-8 border-1">
                  <CardMedia
                    component="img"
                    height="140"
                    image="assets/images/covers/cover1.png"
                    alt="green iguana"
                  />
                  <CardContent className="flex flex-col items-center justify-center m-0 text-center">
                    <Avatar
                      variant="square"
                      sx={{
                        borderWidth: 2,
                        borderStyle: 'solid',
                        borderColor: 'background.default',
                      }}
                      className="flex -mt-48  w-80 h-80 items-center mb-14 rounded-8"
                      src={company.avatar}
                    />
                    <Typography color="inherit" className="flex text-24 sm:text-14 text-gray-900 mb-6">
                      {company.name}
                    </Typography>
                    <Rating name="read-only" value={4.5} size="small" readOnly />
                    <div className="flex items-center justify-center">
                      <IconButton size="small" aria-label="add to favorites" className="flex items-start justify-center">
                        <LocationOncon fontSize="inherit"/>
                      </IconButton>
                      <Typography color="inherit" className="text-12 text-gray-900">
                        San Jose, US | 17 Jobs
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>

              )))}
          </Grid>
        </Box>

      </div>

      {jobLanding.highlightJobs && (
        <div className="mb-60">
          <Typography className="font-semibold mb-4 text-20">HIGHLIGHT JOBS</Typography>
          <Divider />
          <Grid container spacing={3}  className="mt-20">
            {jobLanding.highlightJobs.map((job, index) => (
              index < 8 && (
              <Grid item xs={3} key={job._id}>
                <JobCardItem job={job}/>
              </Grid>
              )))}
          </Grid>

        </div>
      )}

      {jobLanding.popularJobs && (
        <div  className="mb-60">
          <Typography className="font-semibold mb-4 text-20">POPULAR JOBS</Typography>
          <Divider />
          <Grid container spacing={3}  className="mt-20">
            {jobLanding.popularJobs.map((job, index) => (
              index < 8 && (
              <Grid item xs={3} key={job._id}>
                <JobCardItem job={job}/>
              </Grid>
              )))}
          </Grid>

        </div>
      )}

      {jobLanding.newJobs && (
        <div  className="mb-60">
          <Typography className="font-semibold mb-4 text-20">NEW JOBS</Typography>
          <Divider />
          <Grid container spacing={3}  className="mt-20">
            {jobLanding.newJobs.map((job, index) => (
              index < 8 && (
              <Grid item xs={3} key={job._id}>
                <JobCardItem job={job}/>
              </Grid>
              )))}
          </Grid>

        </div>
      )}
    </div>

  );
}

export default JobLandingContent;
