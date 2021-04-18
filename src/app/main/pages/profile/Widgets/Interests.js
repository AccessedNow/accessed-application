import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {buildPartyAvatarUrl} from 'app/utils/urlHelper';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  timelineDot: {
    background: 'none',
    boxShadow: 'none',
    borderRadius: '4px',
    padding: 0
  },
  timeline: {
    marginBottom: '30px',
    'li::before:': {
      content: 'none'
    }
  },
  timelineContent: {
    marginBottom: '30px'
  }
}));

export default function Interests(props) {
  const classes = useStyles();

  if(!props.interests){
    return null;
  }


  return (
    <Timeline  className={classes.timeline}>
      <Grid container spacing={3}>
      {props.interests.map(interest => (
        <Grid key={interest.id} item xs={6}>
          <div className="flex w-full items-center">
            {interest.avatar ? (
              <Avatar variant={interest.partyType=='PERSON'?"circle":"rounded"} className={classes.avatar + " w-48 h-48 mr-12 border"} src={buildPartyAvatarUrl(interest)} />
            ) : (
              <Avatar variant={interest.partyType=='PERSON'?"circle":"rounded"} className={classes.avatar + " w-48 h-48 mr-12 border"} src="" />
            )}
            <div className="flex flex-col min-w-0 mx-8 sm:mc-16">
              <Typography color="inherit" className="truncate" align="left">
                {interest.name}
              </Typography>
              <Typography variant="caption" align="left">{interest.noOfFollowers } followers</Typography>
            </div>
          </div>
        </Grid>
      ))}
      </Grid>
    </Timeline>
  );
}
