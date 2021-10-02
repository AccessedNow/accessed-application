import * as React from 'react';
import PropTypes from 'prop-types';
import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import Switch from '@mui/material/Switch';
import { motion } from 'framer-motion';

import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import { styled } from '@mui/material/styles';
import reducer from '../store';
import { searchJobs, selectJobsById } from '../store/jobsSlice';
import JobSearchList from '../components/JobSearchList';
import JobDetail from './JobDetail';
import JobSearchHeader from './JobSearchHeader';
import ContactsHeader from './ContactsHeader';
import SearchToolbar from './SearchToolbar';

import JobFilter from './JobFilter';

import TopJobs from './TopJobs';
import {getFiles} from "../../file-manager/store/filesSlice";

const Root = styled(FusePageSimple)(({ theme }) => ({

  margin: 'auto',

  '& .FusePageSimple-header': {
    minHeight: 72,
    // height: 72,
    background: 'none',
    [theme.breakpoints.up('lg')]: {
      minHeight: 72,
      // height: 72,
    },
    '.search': {
      width: 1120,
      padding: 12
    }
  },
  '& .FusePageSimple-wrapper': {
    marginTop: 20,
    minHeight: 0,
    // width: '100%'
    margin: 'auto',
    width: 1120,
  },
  '& .FusePageSimple-contentWrapper': {
    padding: 0,
    marginTop: 20,
    [theme.breakpoints.up('sm')]: {
      padding: 0,
      height: '100%',
    },
  },
  '& .FusePageSimple-content': {
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',

  },
  '& .FusePageSimple-sidebar': {
    // width: 360
  },
  '& .FusePageSimple-sidebarContent': {
    background: 'white'
  },
  '& .FusePageSimple-rightSidebar': {
    width: 550,
    background: 'white',
    marginLeft: 10,
    marginTop: 20,
    border: 'none',
    background: 'white'
  },
}));

const label = { inputProps: { 'aria-label': 'Off' } };
const drawerWidth = 400;


function JobSearch(props) {
  const pageLayout = useRef(null);
  const dispatch = useDispatch();
  const routeParams = useParams();

  const selectedItem = useSelector((state) =>
    selectJobsById(state, state.jobSearch.jobs.selectedItemId)
  );

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container = window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    dispatch(searchJobs(routeParams));
  }, [dispatch]);

  // useDeepCompareEffect(() => {
  //   dispatch(searchJobs(routeParams));
  // }, [dispatch, routeParams]);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : drawerWidth }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (

      <Root
        // header={<JobSearchHeader toggleDrawer={toggleDrawer} pageLayout={pageLayout} />}
        header={<ContactsHeader pageLayout={pageLayout} />}
        contentToolbar={<SearchToolbar />}
        content={
          <div className="">
            <React.Fragment key={'right'}>

              <SwipeableDrawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
              >
                {list('right')}
              </SwipeableDrawer>
            </React.Fragment>
            <div className="flex flex-1 w-full items-center justify-between mb-10 p-12 bg-white">
              <Typography>
                Turn on job alerts
              </Typography>
              <Switch {...label} defaultChecked />
            </div>
            <JobSearchList/>
          </div>
        }
        // leftSidebarContent={<JobFilter></JobFilter>}
        rightSidebarContent={
            <JobDetail />
        }

        sidebarInner
        ref={pageLayout}
        innerScroll
      />
  );
}

export default withReducer('jobSearch', reducer)(JobSearch);
