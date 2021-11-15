import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ExperienceListItem from './ExperienceListItem';

function ExperienceList(props) {
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
        {props.experiences.map((exp) => (
            <ExperienceListItem experience={exp} />
        ))}
    </List>
  );
}

export default ExperienceList;
