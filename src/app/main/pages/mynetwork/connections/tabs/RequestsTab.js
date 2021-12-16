import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';

import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUserInvitations} from "../store/connectionsSlice";
import RequestListItem from "../components/RequestListItem";

function RequestsTab() {
  const dispatch = useDispatch();

  const [requests, setRequests] = useState();
  const test = (x) => x + 1;

  useEffect(() => {
    dispatch(getUserInvitations({ type: 'OUT' })).then((data) => {
      setRequests(data.payload);
    });
  }, []);

  if (!requests) {
    return null;
  }

  const { content } = requests;

  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <div className="md:flex max-w-2xl">
        <div className="w-full p-20 ">
          {content && content.length ?
            <List className="p-0">
              <motion.div variants={container} initial="hidden" animate="show">
                {content.map((invitation) => (
                  <motion.div variants={item} key={invitation.id} className="w-full">
                    <RequestListItem invitation={invitation} className="w-full"/>
                    <Divider />
                  </motion.div>
                ))}
              </motion.div>
            </List>
            :
            <div>No Requests</div>
          }
        </div>

      </div>
    </motion.div>
  );
}

export default RequestsTab;
