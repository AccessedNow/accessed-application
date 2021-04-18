import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Avatar from '@material-ui/core/Avatar';

import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
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
  },
  timelineItem: {
    '&::before': {
      content: 'none'
    }

  },
  timelineContent: {
  },
  timelineConnector: {
    width: 1
  }
}));

export default function Experiences(props) {
  const classes = useStyles();

  if(!props.experiences || (props.experiences && props.experiences.length==0)){
    return null;
  }


  return (
    <Timeline  className={classes.timeline}>
      {props.experiences.map((experience, idx) => (
      <TimelineItem key={experience.id} className={classes.timelineItem}>
        <TimelineSeparator>
          <TimelineDot className={classes.timelineDot}>
            <a href={`/company/${experience.employer.id}`}><Avatar variant="rounded" className={classes.avatar + " w-64 h-64 border"} src={buildPartyAvatarUrl(experience.employer)} /></a>
          </TimelineDot>
          {(idx<(props.experiences.length-1) && <TimelineConnector className={classes.timelineConnector}/> )}
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent  + (idx<(props.experiences.length-1)? ' mb-28':'' )}>
          <Paper elevation={3} className={classes.paper + ' shadow-0'}>
            <Typography variant="h6" component="h1">
              {experience.employmentTitle}
            </Typography>
            <Typography>{experience.employer.name}</Typography>
            <Typography>{experience.fromDate} - {experience.thruDate}</Typography>
            <Typography>{experience.description}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      ))}

    </Timeline>
  );
}
