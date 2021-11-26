import _ from '@lodash';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Avatar from '@mui/material/Avatar';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import ChecklistModel from 'app/main/apps/scrumboard/model/ChecklistModel';
import { useEffect, useState } from 'react';
// import ActivityListItem from "./NoteListItem";


const CustomTimeline = styled(Timeline)(({ theme }) => ({
  // cursor: 'pointer',
  '& :before': {
    display: 'none'
  },
  '& .MuiTimelineDot-root': {
    margin: 0,
    padding: 2,
    '& .MuiSvgIcon-root': {
      height: '.7em',
      width: '.7em'
    }
  },
  '& .MuiTimelineContent-root': {
    marginLeft: 20,
    paddingLeft: 0,

  }

}));

const CustomTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
  width: 1,
  backgroundColor: '#eee'
}));

const CustomTimelineDot = styled(TimelineDot)(({ theme }) => ({
  backgroundColor: '#eee',
  '&.APPLIED': {
    backgroundColor: '#4CAF50',
  },
  '&.ADDED': {
    backgroundColor: '#2196F3',
  }
}));


function ActivityList(props) {

  if(!props.activities){
    return <span>No Activity</span>
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
    {/*<List>*/}
      {/*{props.activities.map((note) => (*/}
        {/*<motion.div key={note.id}>*/}
          {/*<ActivityListItem note={note}/>*/}
          {/*<Divider />*/}
        {/*</motion.div>*/}
      {/*))}*/}
    {/*</List>*/}

      <CustomTimeline>
        {props.activities.map((activity) => (
          <motion.div variants={container} initial="hidden" animate="show">
            <TimelineItem>
              <TimelineSeparator>
                <CustomTimelineConnector />
                <CustomTimelineDot className={activity.action}>
                  {activity.action === 'ADDED' &&
                  <ImportContactsIcon fontSize="small"/>
                  }
                  {activity.action === 'APPLIED' &&
                  <StickyNote2Icon fontSize="small"/>
                  }
                </CustomTimelineDot>
                <CustomTimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <div className="flex flex-row items-start justify-start">
                  <Avatar
                    sx={{
                      borderWidth: 2,
                      borderStyle: 'solid',
                      borderColor: 'white',
                    }}
                    className="w-40 h-40 md:w-40 md:h-40"
                    src={activity.causer.avatar}
                  />
                  <div className="flex flex-col flex-1 items-start justify-start ml-5">
                    {/*<Typography variant="" className="font-600">*/}
                      {/*{activity.causer.firstName + ' ' + activity.causer.lastName}*/}
                    {/*</Typography>*/}
                    {activity.action === 'ADDED' &&
                      <Typography variant="caption" color="inherit" className="pt-8">
                        <span className="font-600">{activity.causer.firstName}</span> <span className="font-600">Added</span> <span className="italic">{activity.meta.name}</span> to <span className="text-blue-500">{activity.meta.jobTitle}</span>
                      </Typography>
                    }
                    {activity.action === 'APPLIED' &&
                    <Typography variant="caption" color="inherit" className="pt-8">
                      <span className="font-600">{activity.meta.name}</span> <span className="font-600">Applied</span> to <Link href={`jobs/view/${activity.meta.job}`} className="text-blue-500">{activity.meta.jobTitle}</Link>
                    </Typography>
                    }

                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
          </motion.div>
        ))}
      </CustomTimeline>
    </div>
  );
}

export default ActivityList;
