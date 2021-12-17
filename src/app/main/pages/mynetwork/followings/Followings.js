import * as React from 'react';
import qs from 'qs';
import { motion } from 'framer-motion';

import dateFormat from "dateformat";
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import withReducer from 'app/store/withReducer';
import { withRouter } from 'react-router-dom';
import reducer from "./store";

import RecommendationTab from "./tabs/RecommendationTab";
import FollowingsTab from "./tabs/FollowingsTab";


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


const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 0,
    height: 0,
  },
  '& .FusePageSimple-contentWrapper': {
    padding: 0,
    paddingBottom: 80,
    [theme.breakpoints.up('md')]: {
      padding: 16
    },
  },
  '& .FusePageSimple-content': {
    minHeight: '100%',
  },
  '& .FusePageSimple-sidebar': {
    border: 0,
    width: 288,
    marginTop: 16
  },
}));

function Followings(props) {
  const pageLayout = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const params = qs.parse(props.location.search, { ignoreQueryPrefix: true });

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }


  // if (!connections) {
  //   return <FuseLoading />;
  // }

  return (
    <Root
      content={
        <Paper variant="outlined" className="rounded-6 p-20">
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="inherit"
            variant="scrollable"
            scrollButtons={false}
            className="w-full px-24 -mx-4 min-h-40"
            classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
            TabIndicatorProps={{
              children: (
                <Box
                  sx={{ bgcolor: 'text.disabled' }}
                  className="w-full h-full rounded-full opacity-20"
                />
              ),
            }}
          >
            <Tab
              className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
              disableRipple
              label="All"
            />
            <Tab
              className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
              disableRipple
              label="Invitations"
            />
            <Tab
              className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
              disableRipple
              label="Requests"
            />
          </Tabs>
          {selectedTab === 0 && <RecommendationTab />}
          {selectedTab === 1 && <FollowingsTab />}
          {selectedTab === 2 && <div />}
        </Paper>
      }
      sidebarInner
      ref={pageLayout}

    />
  );
}

export default withReducer('people', reducer)(withRouter(Followings));
