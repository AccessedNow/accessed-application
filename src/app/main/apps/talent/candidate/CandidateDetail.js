import FusePageSimple from '@fuse/core/FusePageSimple';
import {useState} from 'react';
import DocViewer from "react-doc-viewer";

import withReducer from 'app/store/withReducer';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useDeepCompareEffect } from '@fuse/hooks';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CandidateNotes from '../components/candidate-notes/CandidateNotes';
import ExperienceList from '../components/experience-list/ExperienceList';
import ResumeList from '../components/resume-list/ResumeList';
import NotesTab from './tabs/NotesTab';

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


function CandidateDetail() {

  const dispatch = useDispatch();
  const pageLayout = useRef(null);
  const routeParams = useParams();
  const candidate = useSelector(({ candidateApp }) => candidateApp.candidate);

  const [tab, setTab] = useState(0);

  useEffect(() => {
  }, [dispatch, routeParams]);

  useDeepCompareEffect(() => {
  }, [dispatch, routeParams]);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return(
    <div className="h-full">
      <Box sx={{ width: '100%' }} className="bg-white">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs variant="scrollable" scrollButtons="auto" value={tab} onChange={handleTabChange} aria-label="basic tabs example">
            <Tab label="Detail" {...a11yProps(0)} />
            <Tab label="Experiences" {...a11yProps(1)} />
            <Tab label="Resume" {...a11yProps(2)} />
            <Tab label="Questionaires" {...a11yProps(3)} />
            <Tab label="More" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography variant={'subtitle2'} fontWeight={600}>
                EMAIL
              </Typography>
              <Typography variant={'body'}>
                {candidate.firstName}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant={'subtitle2'} fontWeight={600}>
                PHONE
              </Typography>
              <Typography variant={'body'}>
                {candidate.phoneNumnber}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant={'subtitle2'} fontWeight={600}>
                LOCATION
              </Typography>

              <Typography variant={'body'}>
                {candidate.primaryAddress?candidate.primaryAddress.city + ' ' + candidate.primaryAddress.country:''}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant={'subtitle2'} fontWeight={600}>
                EMAIL
              </Typography>
              <Typography variant={'body'}>
                {candidate.firstName}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant={'subtitle2'} fontWeight={600}>
                EMAIL
              </Typography>
              <Typography variant={'body'}>
                {candidate.firstName}
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <ExperienceList experiences={candidate.experiences}/>
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <ResumeList id={candidate.id} />
        </TabPanel>
        <TabPanel value={tab} index={3}>
          4
        </TabPanel>
        <TabPanel value={tab} index={4}>
          5
        </TabPanel>
      </Box>
    </div>
  )
}

export default CandidateDetail;
