import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ChecklistModel from 'app/main/apps/scrumboard/model/ChecklistModel';
import { useEffect, useState } from 'react';
import _ from '@lodash';
import NoteListItem from "./NoteListItem";


function NoteList(props) {

  if(!props.notes || !props.notes.content){
    return <span>No Notes</span>
  }

  return (
    <div>
      {props.notes.content.map((note) => (
        <motion.div key={note.id}>
          <NoteListItem note={note}/>
          <Divider />
        </motion.div>
      ))}
    </div>
  );
}

export default NoteList;
