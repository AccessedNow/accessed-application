import * as React from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';

import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CheckIcon from '@mui/icons-material/Check';
import PropTypes from 'prop-types';
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
import reducer from "../store";
import {getCompany, getCompanyRelationships, followCompany} from "../store/companySlice";
import HomeTab from './tabs/HomeTab';
import AboutTab from './tabs/AboutTab';
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CompanyDetail() {
  const pageLayout = useRef(null);
  const dispatch = useDispatch();
  const routeParams = useParams();
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [relationships, setRelationships] = useState();
  const [tabIndex, setTabIndex] = React.useState(0);
  const company = useSelector(({ companyDetail }) => companyDetail.company);


  useDeepCompareEffect(() => {
    dispatch(getCompany(routeParams)).then(() => setLoading(false));
    dispatch(getCompanyRelationships(routeParams)).then((response) => {
      setRelationships(response.payload.relationships)
    });
  }, [dispatch, routeParams]);


  const handleTabChange = (event, index) => {
    setTabIndex(index);
  };

  const handleFollow = (event) => {
    dispatch(followCompany(company.id))
  };

  if (loading) {
    return <FuseLoading />;
  }

  return (
    <Root
      header={<></>}
      content={
        <div>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.1 } }}>
            <Card variant="outlined" className="mb-20 rounded-8 md:rounded-0 lg:rounded-0">
              <CardMedia
                component="img"
                height="192"
                image="assets/images/profile/morain-lake.jpg"
                className="h-192"
              />
              <CardContent>
                <div className="w-full px-16 flex flex-col md:flex-row flex-1 items-center">
                  <Avatar
                    sx={{
                      borderWidth: 1,
                      borderStyle: 'solid',
                      borderColor: 'background.default',
                    }}
                    className="w-96 h-96 rounded-6"
                    src={company.avatar}
                    variant="square"
                  />
                  <div className="flex flex-col md:flex-row flex-1 items-center justify-between p-8">
                    <Typography
                      className="md:px-16 sm:text-24 md:text-20 lg:text-16 font-semibold tracking-tight"
                      color="inherit"
                    >
                      {company.name}
                    </Typography>
                    <div className="flex items-center justify-end -mx-4 mt-24 md:mt-0">
                      {relationships && relationships.hasFollowed ?
                        <Button variant="outlined" startIcon={<CheckIcon />}>
                          Following
                        </Button>
                        :
                        <Button variant="outlined" startIcon={<AddIcon />} onClick={handleFollow}>
                          Follow
                        </Button>
                      }
                      {company.website &&
                      <Button variant="contained" color="primary" aria-label="Send Message">
                        Visit website
                      </Button>
                      }
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardActions className="px-0 pb-0">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={tabIndex} onChange={handleTabChange}>
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="About" {...a11yProps(1)} />
                    <Tab label="Posts" {...a11yProps(1)} />
                    <Tab label="Jobs" {...a11yProps(2)} />
                  </Tabs>
                </Box>
              </CardActions>
            </Card>
          </motion.div>
          <div className="">
            <TabPanel value={tabIndex} index={0} className="px-0">
              <HomeTab />
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
              <AboutTab />
            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
              <FeedTab />
            </TabPanel>
            <TabPanel value={tabIndex} index={3}>
              <JobTab />
            </TabPanel>

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

export default withReducer('companyDetail', reducer)(CompanyDetail);
