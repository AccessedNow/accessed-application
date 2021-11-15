import _ from '@lodash';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { styled } from '@mui/material/styles';
import {useState} from 'react';

import PropTypes from 'prop-types';

import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { motion } from 'framer-motion';
import CandidateList from '../components/candidate-list/CandidateList';


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
        <Box sx={{ p: 3 }}>
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


function SidebarContent(props) {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);
  const candidate = useSelector(({ candidateApp }) => candidateApp.candidate);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant="scrollable" scrollButtons="auto" value={tab} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="Recommended" {...a11yProps(0)} />
          <Tab label="Calendar" {...a11yProps(1)} />
          <Tab label="Evaluations" {...a11yProps(2)} />
          <Tab label="Notes" {...a11yProps(3)} />
          <Tab label="Chat" {...a11yProps(4)} />
          <Tab label="Activity" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        {candidate.id &&
          <CandidateList id={candidate.id}/>
        }
      </TabPanel>
      <TabPanel value={tab} index={1}>
        2
      </TabPanel>
      <TabPanel value={tab} index={2}>
        3
      </TabPanel>
      <TabPanel value={tab} index={3}>
        4
      </TabPanel>
      <TabPanel value={tab} index={4}>
        5
      </TabPanel>
      <TabPanel value={tab} index={5}>
        6
      </TabPanel>
    </Box>
  );
}

export default SidebarContent;
