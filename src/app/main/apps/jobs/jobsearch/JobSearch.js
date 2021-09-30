import * as React from 'react';
import PropTypes from 'prop-types';
import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import Switch from '@mui/material/Switch';
import { motion } from 'framer-motion';


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
import reducer from './store';
import { searchJobs, selectJobsById } from './store/jobsSlice';
import JobList from './JobList';
import JobDetail from './JobDetail';
import JobFilter from './JobFilter';

import TopJobs from './TopJobs';
import {getFiles} from "../../file-manager/store/filesSlice";

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 72,
    height: 72,
    [theme.breakpoints.up('lg')]: {
      minHeight: 136,
      height: 136,
    },
  },
  '& .FusePageSimple-wrapper': {
    minHeight: 0,
  },
  '& .FusePageSimple-contentWrapper': {
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      padding: 0,
      height: '100%',
    },
  },
  '& .FusePageSimple-content': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  '& .FusePageSimple-sidebar': {
    width: 360
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


  return (
    <>
      <Root
        header={
          <div className="flex flex-col flex-1">
            <div className="flex items-center p-24 px-12">
              <Hidden lgUp>
                <IconButton
                  onClick={(ev) => pageLayout.current.toggleLeftSidebar()}
                  aria-label="open left sidebar"
                  size="large"
                >
                  <Icon>menu</Icon>
                </IconButton>
              </Hidden>
            </div>
          </div>
        }
        contentToolbar={
          <div className="flex flex-col flex-shrink-0 items-center justify-between py-24">
            <div className="flex w-full sm:w-320 mb-16 sm:mb-0 mx-16">
              <Typography color="textSecondary">
                Turn on job alerts
              </Typography>
            </div>
            <div className="flex w-full sm:w-320 mx-16" variant="outlined">
              <Switch {...label} defaultChecked />
            </div>
          </div>

        }
        content={
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} lg={5} className="m:border-r-1 lg:border-r-1 sm:px-12 min-h-full">
              <JobList/>
            </Grid>
            <Grid component={Box} item xs={7} display={{ xs: "none", lg: "block" }} className="border-r-1 border-solid">
              <JobDetail />
            >
            </Grid>
          </Grid>

        }
        leftSidebarContent={<JobFilter></JobFilter>}
        innerScroll
        ref={pageLayout}
      />
    </>
  );
}

export default withReducer('jobSearch', reducer)(JobSearch);
