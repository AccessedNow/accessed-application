import _ from '@lodash';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Avatar from '@mui/material/Avatar';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import List from '@mui/material/List';

import EvaluationListItem from "./EvaluationListItem";

function EvaluationList(props) {

  if(!props.evaluations){
    return <span>No Evaluations</span>
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
      {props.evaluations.map((evaluation) => (
        <motion.div variants={container} initial="hidden" animate="show">
          <EvaluationListItem evaluation={evaluation}/>
        </motion.div>
      ))}
    </List>
  );
}

export default EvaluationList;
