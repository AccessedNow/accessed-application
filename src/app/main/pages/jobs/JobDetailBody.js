import FuseAnimate from '@fuse/core/FuseAnimate';
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { withStyles, userTheme } from '@material-ui/core/styles';
import {makeStyles} from "@material-ui/core/styles/index";
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';


import Grid from '@material-ui/core/Grid';
import React from 'react';
import { selectMainThemeDark } from 'app/store/fuse/settingsSlice';
import {buildPartyAvatarUrl, buildPartyCoverUrl} from 'app/utils/urlHelper';
import {formatNumberShortHand} from 'app/utils/helper';


/* eslint-disable react/jsx-no-bind */
const styles = theme => ({
	root: props => ({
		backgroundImage: `url("../../assets/images/banners/google_banner.jpg")`,
		color: '#FFFFFF',
		backgroundSize: 'cover',
		backgroundPosition: '0 50%',
		backgroundRepeat: 'no-repeat',
		'&:before': {
			content: "''",
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			zIndex: 1
		}
	})
});

const useStyles = makeStyles((theme) => ({

  avatar: {
    borderColor: theme.palette.divider
  },
  media: {
    height: 195,
  }
}));


function JobDetailBody(props)  {
  const {job} = props;
  const classes = useStyles();

  if(!job){
    return null;
  }

  return (
    <div>
      <div className="flex w-full px-20">
        <div className="w-full items-center md:flex-row md:justify-start">
          <Typography variant="h5" color="primary" className="flex-1 px-0 md:px-12">
            {job.title}
          </Typography>
          <Typography variant="subtitle1" color="primary" className="flex-1 px-0 md:px-12">
            <a href={`/company/${job.company.id}`}>{job.company.name}</a> - {job.city}, {job.country}
          </Typography>
          <Typography variant="subtitle1" color="primary" className="flex-1 px-0 md:px-12">
            Posted 1 day ago - 12 applicants
          </Typography>
        </div>
        <div className="flex-start justify-end">
          <div className="flex">
            <Button
              className={" mr-12"}
              variant="contained"
              color="primary"
            >
              Apply
            </Button>
            <Button
              className="whitespace-no-wrap normal-case"
              variant="outlined"
              color="primary"
              startIcon={<AddIcon />}
            >
              Save
            </Button>
          </div>

        </div>
      </div>
      <div className="px-20">
        <Grid container direction="row" justify="center" alignItems="center" className="pt-32 px-0 md:px-12">
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle1" color="primary" className="font-bold" >
              Experience
            </Typography>
            <Typography variant="body1" color="primary">
              {job.minMonthExperience/12} - {job.maxMonthExperience/12} Years
            </Typography>

          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle1" color="primary" className="px-0 md:px-12 font-bold">
              Level
            </Typography>
            <Typography variant="subtitle1" color="primary" className="px-0 md:px-12">
              {job.level.name}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle1" color="primary" className="flex-1 px-0 md:px-12 font-bold">
              Employment
            </Typography>
            <Typography variant="subtitle1" color="primary" className="px-0 md:px-12">
              {job.employmentType.name}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle1" color="primary" className="flex-1 px-0 md:px-12 font-bold">
              Salary
            </Typography>
            <Typography variant="subtitle1" color="primary" className="px-0 md:px-12">
              {formatNumberShortHand(job.salaryRangeLow)} - {formatNumberShortHand(job.salaryRangeHigh)} {job.currency}
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="subtitle1" color="primary" className="flex-1 px-0 md:px-12 pt-32 font-medium">
          Role Overview
        </Typography>
        <Typography variant="body1" color="primary" className="flex-1 px-0 md:px-12">
          {job.description}
        </Typography>

        <Typography variant="subtitle1" color="primary" className="flex-1 px-0 md:px-12 pt-20 font-medium">
          Qualifications
        </Typography>
        {job.qualifications && (
        <List className="px-20">
          {job.qualifications.map((qualification, idx) => (
            <ListItem key={idx} className={classes.listItem} alignItems="flex-start">
              <ListItemIcon className="min-w-0">
                <Checkbox
                  edge="start"
                  checked={true}
                  disabled={true}
                  tabIndex={-1}
                  disableRipple
                  color="primary"
                  className="p-0"
                />
              </ListItemIcon>
              <ListItemText primary={qualification} className="pl-10"/>
            </ListItem>
          ))}
        </List>
        )}

        <Typography variant="subtitle1" color="primary" className="flex-1 px-0 md:px-12 pt-20 font-medium">
          Responbilities
        </Typography>
        {job.responsibilities && (
        <List className="px-20">
          {job.responsibilities.map((responsbility, idx) => (
            <ListItem key={idx} className={classes.listItem} alignItems="flex-start">
              <ListItemIcon className="min-w-0">
                <Checkbox
                  edge="start"
                  checked={true}
                  disabled={true}
                  tabIndex={-1}
                  disableRipple
                  color="primary"
                  className="p-0"
                />
              </ListItemIcon>
              <ListItemText primary={responsbility} className="pl-10" />
            </ListItem>
          ))}
        </List>
        )}

      </div>
    </div>
  )}


export default JobDetailBody;
