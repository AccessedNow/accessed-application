import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import FuseLoading from '@fuse/core/FuseLoading';
import clsx from 'clsx';

import { colors } from '@mui/material';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import DraftsIcon from '@mui/icons-material/Drafts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import InboxIcon from '@mui/icons-material/Inbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';
import SchoolIcon from '@mui/icons-material/School';

import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';

import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {getUserConnectionCounts} from "../user/store/userSlice";

const Container = styled('div')(({ theme }) => ({
  paddingTop: 16,
  '& .cover': {
    background: 'url("assets/images/covers/cover6.png")',
    backgroundSize: 'cover!important',
    backgroundPosition: 'center center!important',
  },
  '& .avatar': {
    background: 'url("assets/images/avatars/chan.jpeg")',
    backgroundSize: 'cover!important',
    backgroundPosition: 'center center!important',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  '& .user-avatar': {
    borderWidth: 6,
    borderColor: '#fff'
  },
  '& .user-detail': {
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: colors.blue["600"],
    // backgroundColor: '#EAFFFD'
    // backgroundColor: '#5AA9E6',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
}));

function SidebarContent(props) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [connections, setConnections] = useState(null);


  useEffect(() => {
    dispatch(getUserConnectionCounts()).then((data) => {
      setConnections(data.payload);
    });
  }, [dispatch]);

  if(!connections){
    return null
  }


  return (
      <Paper
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        className={clsx('flex flex-col items-center justify-center mt-20 rounded-0 shadow-none lg:rounded-6 lg:shadow')}
      >
        <div className="flex flex-row justify-between w-full py-12 px-16 border-b-1">
          <Typography variant="body" fontWeight={500}>
            Manage Your Network
          </Typography>
        </div>
        <div className="w-full">
          <List>
            <ListItem disablePadding
              secondaryAction={
                <Typography className="text-10 md:text-12">
                  {connections.connections.count?connections.connections.count:''}
                </Typography>
              }>
              <ListItemButton component="a" href="/mynetwork/connections">
                <ListItemText primary="Connections" className="text-14" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding
                secondaryAction={
                  <Typography className="text-10 md:text-12">
                    {connections.company.count?connections.company.count:''}
                  </Typography>
                }>
              <ListItemButton component="a" href="/mynetwork/following">
                <ListItemText primary="People I follow" className="text-14" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding
                  secondaryAction={
                    <Typography className="text-10 md:text-12">
                      {connections.company.count?connections.company.count:''}
                    </Typography>
                  }>
              <ListItemButton>
                <ListItemText primary="Company" className="text-14" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding
                secondaryAction={
                  <Typography className="text-10 md:text-12">
                    {connections.group.count?connections.group.count:''}
                  </Typography>
                }>
              <ListItemButton>
                <ListItemText primary="Groups" className="text-14" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding
                  secondaryAction={
                    <Typography className="text-10 md:text-12">
                      {connections.page.count?connections.page.count:''}
                    </Typography>
                  }>
              <ListItemButton>
                <ListItemText primary="Pages" className="text-14" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Hashtags" className="text-14" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Paper>
  );
}

export default SidebarContent;
