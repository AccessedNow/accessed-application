import withReducer from 'app/store/withReducer';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import AlarmIcon from '@mui/icons-material/Alarm';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterIcon from '@mui/icons-material/FilterList';
import ColumnIcon from '@mui/icons-material/ViewWeek';
import ListViewIcon from '@mui/icons-material/FormatListBulleted';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import PlaceIcon from '@mui/icons-material/Place';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import clsx from 'clsx';
import GlobalStyles from '@mui/material/GlobalStyles';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDeepCompareEffect } from '@fuse/hooks';
import { withRouter, useParams } from 'react-router-dom';

import {getJob} from "../store/jobSlice";
import reducer from './store';
import BoardTab from './tabs/BoardTab';


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
        <Box sx={{ p: 1 }}>
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

const Root = styled('div')(({ theme }) => ({

  '& .FusePageSimple-wrapper': {
    background: 'transparent',
  },

  '& .FusePageSimple-content': {
    width: '100%',
    margin: 'auto',
  },
  '& .header': {
    height: '13em',
    '& .MuiToolbar-root': {
      height: '13em'
    }
  },
  '& .MuiTabs-root': {
    '& .Mui-selected': {
      // color: theme.palette.mode === 'dark' ? '#8796A5' : '#fff',
    }
  }


}));


function JobDetail() {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const job = useSelector(({ jobDetail }) => jobDetail.job);
  const containerRef = useRef(null);

  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };


  useEffect(() => {
  }, [dispatch]);

  useDeepCompareEffect(() => {
    dispatch(getJob(routeParams));
  }, [dispatch, routeParams]);


  if(!job){
    return null;
  }

  return (
    <Root>
      <GlobalStyles
        styles={(theme) => ({
          '#fuse-main': {
            height: '100vh',
          },
        })}
      />
      <div className="flex flex-1 flex-auto flex-col w-full h-full relative" ref={containerRef}>
        <AppBar position="static" color="inherit" elevation={0} className="header">
          <Toolbar className="flex items-center justify-between px-4 sm:px-24 h-48 sm:h-64 sm:h-96 container">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex items-center justify-center">
                  <Icon component={motion.span} initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.2 } }} className="text-12 md:text-12">chevron_left</Icon>
                  <Typography component={motion.span} initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.2 } }} delay={300} className="text-12 md:text-12 mx-12">
                    {'back'}
                  </Typography>
                </div>
                <div className="flex">
                  <IconButton color="inherit" onClick={() => toggleSettingsDrawer(true)} size="medium">
                    <Icon>settings</Icon>
                  </IconButton>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start justify-between w-full">
                <div className="mb-10">
                  <Typography variant="h5" className="font-600 mb-5">{job.title}</Typography>
                  <Stack direction="row" spacing={1}>
                    <div className="">
                      <Icon component={motion.span} initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.2 } }} className="text-12 md:text-12">check_box</Icon>
                      <Typography component={motion.span} initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.2 } }} delay={300} className="text-12 md:text-12 mx-5 font-semibold">
                        {job.jobFunction.name}
                      </Typography>
                    </div>
                    <div className="">
                      <Icon component={motion.span} initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.2 } }} className="text-12 md:text-12">work_outline</Icon>
                      <Typography component={motion.span} initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.2 } }} delay={300} className="text-12 md:text-12 mx-5 font-semibold">
                        {job.employmentType}
                      </Typography>
                    </div>
                    <div className="">
                      <Icon component={motion.span} initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.2 } }} className="text-12 md:text-12">place</Icon>
                      <Typography component={motion.span} initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.2 } }} delay={300} className="text-12 md:text-12 mx-5 font-semibold">
                        {job.city}, {job.country}
                      </Typography>
                    </div>
                  </Stack>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <Typography variant="caption" className="text-11 font-600 mb-5">HIRING TEAM</Typography>
                    <div>
                      {/*{job.members.map((member) => (*/}
                      {/*<Avatar*/}
                        {/*sx={{*/}
                          {/*borderWidth: 2,*/}
                          {/*borderStyle: 'solid',*/}
                          {/*borderColor: 'white',*/}
                        {/*}}*/}
                        {/*className="w-40 h-40 md:w-32 md:h-32"*/}
                        {/*src={member.avatar}*/}
                      {/*/>*/}
                        {/*))}*/}
                      <AvatarGroup max={4}>
                        <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" className="w-40 h-40" />
                        <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg" />
                        <Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />
                        <Avatar alt="Agnes Walker" src="/material-ui-static/images/avatar/4.jpg" />
                        <Avatar alt="Trevor Henderson" src="/material-ui-static/images/avatar/5.jpg" />
                      </AvatarGroup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center justify-between w-full">
                <Box className="flex">
                  <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                    <Tabs value={tab} onChange={handleTabChange} aria-label="tabs">
                      <Tab label="Candidates" {...a11yProps(0)} size="small" className="text-12" />
                      <Tab label="Detail" {...a11yProps(1)} />
                      <Tab label="Insight" {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                </Box>
                <Stack direction="row" spacing={1} className="flex">
                  <IconButton fontSize="small">
                    <FilterIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton fontSize="small" aria-label="column" color="secondary">
                    <ColumnIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton fontSize="small" color="secondary" >
                    <ListViewIcon fontSize="inherit" />
                  </IconButton>
                </Stack>
              </div>
            </div>


          </Toolbar>
        </AppBar>

        <TabPanel value={tab} index={0} className={clsx('flex flex-1 overflow-x-auto overflow-y-hidden')}>
          <BoardTab />
        </TabPanel>

      </div>
    </Root>
  );
}

export default withReducer('jobDetail', reducer)(withRouter(JobDetail));
