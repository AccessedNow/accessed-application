import * as React from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';

import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Box from '@mui/material/Box';

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import withReducer from 'app/store/withReducer';
import reducer from "./store";
import {getCompany} from "./store/companySlice";
import AboutTab from './tabs/AboutTab';
import PhotosVideosTab from './tabs/PhotosVideosTab';
import TimelineTab from './tabs/TimelineTab';
import JobTab from './tabs/JobTab';
import FeedTab from './tabs/FeedTab';

import CompanySidebarContent from './CompanySidebarContent';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 36,
    height: 36,
    background: 'none',
    [theme.breakpoints.up('lg')]: {
      minHeight: 36,
      height: 36,
    },
  },
  '& .FusePageSimple-wrapper': {
    marginTop: 20,
    minHeight: 0,
    // width: '100%'
    margin: 'auto',
    width: 1120,
  },

  '& .FusePageSimple-content': {
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',

  },
  '& .FusePageSimple-content': {
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    '& .profile-header': {
      background: 'url("assets/images/profile/morain-lake.jpg")!important',
      backgroundSize: 'cover!important',
      backgroundPosition: 'center center!important',
      height: 320,
      minHeight: 320,
      [theme.breakpoints.down('lg')]: {
        height: 240,
        minHeight: 240,
      },
    },
  },

  '& .FusePageSimple-toolbar': {
    width: '100%',
    maxWidth: 1120,
    margin: 'auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'auto',
    height: 'auto',
    aliginItesm: 'flex-start',
  },
  '& .FusePageSimple-sidebar': {
    // width: 360
  },
  '& .FusePageSimple-sidebarContent': {
  },
  '& .FusePageSimple-rightSidebar': {
    width: 288,
    marginLeft: 20,
    border: 'none',
  },
}));

function CompanyPage() {
  const pageLayout = useRef(null);
  const dispatch = useDispatch();
  const routeParams = useParams();
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(true);

  const company = useSelector(({ companyPage }) => companyPage.company);

  useDeepCompareEffect(() => {
    dispatch(getCompany(routeParams)).then(() => setLoading(false));
  }, [dispatch, routeParams]);


  function handleTabChange(event, value) {
    setSelectedTab(value);
  }

  if (loading) {
    return <FuseLoading />;
  }

  return (
    <Root
      header={<></>}
      content={
        <div>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.1 } }}>
            <Card className="mb-32">
              <CardMedia
                component="img"
                height="72"
                image="assets/images/profile/morain-lake.jpg"
                className="h-128"
              />
              <CardContent>
                <div className="w-full px-16 flex flex-col md:flex-row flex-1 items-center">
                  <Avatar
                    sx={{
                      borderWidth: 4,
                      borderStyle: 'solid',
                      borderColor: 'background.default',
                    }}
                    className="w-72 h-72"
                    src={company.avatar}
                    variant="square"
                  />
                  <div className="flex flex-col md:flex-row flex-1 items-center justify-between p-8">
                    <Typography
                      className="md:px-16 text-24 md:text-20 font-semibold tracking-tight"
                      variant="h4"
                      color="inherit"
                    >
                      {company.name}
                    </Typography>
                    <div className="flex items-center justify-end -mx-4 mt-24 md:mt-0">
                      <Button className="mx-8" variant="contained" color="secondary" aria-label="Follow">
                        Follow
                      </Button>
                      <Button variant="contained" color="primary" aria-label="Send Message">
                        Send Message
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardActions>
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
                    label="About"
                  />
                  <Tab
                    className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
                    disableRipple
                    label="Posts"
                  />
                  <Tab
                    className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
                    disableRipple
                    label="Jobs"
                  />
                </Tabs>
              </CardActions>
            </Card>
          </motion.div>
          <div className="">
            {selectedTab === 0 && <AboutTab />}
            {selectedTab === 1 && <FeedTab />}
            {selectedTab === 2 && <JobTab />}
          </div>
        </div>
      }
      rightSidebarContent={
        <CompanySidebarContent />
      }
      sidebarInner
      ref={pageLayout}

    />
  );
}

export default withReducer('companyPage', reducer)(CompanyPage);
