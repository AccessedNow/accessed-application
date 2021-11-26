import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';

import TextField from '@mui/material/TextField';
import ChecklistModel from 'app/main/apps/scrumboard/model/ChecklistModel';
import { useEffect, useState } from 'react';
import _ from '@lodash';
import NoteListItem from "./NoteListItem";


function NoteList(props) {

  if(!props.notes){
    return <span>No Notes</span>
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
    <List>
      {props.notes.map((note) => (
        <motion.div variants={container} initial="hidden" animate="show">
          <NoteListItem note={note}/>
          <Divider />
        </motion.div>
      ))}
    </List>
  );
}

export default NoteList;
