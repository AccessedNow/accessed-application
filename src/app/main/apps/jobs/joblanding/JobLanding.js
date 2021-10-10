import _ from '@lodash';
import FuseLoading from '@fuse/core/FuseLoading';

import { styled, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import LinearProgress from '@mui/material/LinearProgress';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PlaceIcon from '@mui/icons-material/Place';

import SearchIcon from '@mui/icons-material/Search';

import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import Typography from '@mui/material/Typography';
import withReducer from 'app/store/withReducer';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import reducer from './store';

import {getJobLanding} from "./store/jobLandingSlice";
import { getTitleSuggestion } from '../store/jobsSlice';
import JobCardItem from '../../../components/JobCardItem';
import JobLandingSidebarContent from './JobLandingSidebarContent';
import Categories from './Categories';
import JobLandingContent from './JobLandingContent';

import {buildPartyAvatarUrl} from 'app/utils/urlHelper';

const Root = styled('div')(({ theme }) => ({
  '& .FusePageSimple-topBg': {
    background: 'url("assets/images/profile/morain-lake.jpg")!important',
    backgroundSize: 'cover!important',
    backgroundPosition: 'center center!important',

  },
  '& .header': {
    // background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    // background: 'url("assets/images/profile/morain-lake.jpg")!important',
    // backgroundSize: 'cover!important',
    // backgroundPosition: 'center center!important',
    color: theme.palette.getContrastText(theme.palette.primary.main),
    '& .header-banner': {
      position: 'absolute',
      top: -64,
      left: 0,
      opacity: 0.5,
      fontSize: 512,
      width: '100%',
      height: 512,
      pointerEvents: 'none',
      background: 'url("assets/images/backgrounds/job-landing.png")!important',
      backgroundSize: 'cover!important',
      backgroundPosition: 'center center!important',


    },

    '& .header-search': {
      position: 'relative',
      zIndex: 1,
      '& fieldset': {
        border: 0
      },
      '& .search-btn': {
        // borderTopLeftRadius: 0,
        // borderTopRightRadius: 8,
        // borderBottomRightRadius: 8,
        // borderBottomLeftRadius: 0,
        [theme.breakpoints.down('sm')]: {
          borderRadius: 0
        },
      }
    },

  },
}));

function JobLanding(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [filteredData, setFilteredData] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [location, setLocation] = React.useState('');
  const [menuTab, setMenuTab] = useState(0);
  const [categoryTab, setCategoryTab] = React.useState('0');
  const [suggestion, setSuggestion] = React.useState([]);

  useEffect(() => {
    dispatch(getJobLanding());
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearchText(event.target.value)
  }

  const handleCategoryTab = (event, newValue) => {
    setCategoryTab(newValue);
  };

  const handleMenuTab = (event, newValue) => {
    setMenuTab(newValue);
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <Root className="flex flex-col flex-auto flex-shrink-0 w-full">
      <div className="header relative overflow-hidden flex flex-shrink-0 items-start md:items-center justify-center h-120 sm:h-512">
        <div className="header-search flex flex-col max-w-2xl mx-auto w-full px-0 sm:px-16 py-0 md:py-24 relative" style={{'z-index': 1}}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0 } }}>
            <Hidden smDown>
              <Typography color="inherit" className="text-29 sm:text-40 font-500 tracking-tight mb-8" color="primary">
                There Are <span className="text-blue-800" color="secondary">93,178</span> Postings Here <br /> For you!
              </Typography>
              <Typography color="inherit" className="text-14 sm:text-14 tracking-tight mb-10" color="primary">
                Find Jobs, Employment & Career Opportunities
              </Typography>
            </Hidden>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }}>
            <Paper
              component="form" className="flex flex-col md:flex-row justify-between md:w-2/3 md:border-1 p-0 md:p-8 rounded-none shadow-none md:rounded-8 mb-10"
            >
              <FormControl className="w-full border-0">
                {/*<InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>*/}
                <OutlinedInput
                  id="outlined-adornment-password"
                  className="border-0 rounded-8"
                  type="text"
                  value={searchText}
                  placeholder="Search"
                  onChange={handleSearch}
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                       <Visibility />
                      </SearchIcon>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Hidden smDown>
                <Divider orientation="vertical" variant="middle" flexItem  />
              </Hidden>
              <Hidden mdUp>
                <Divider flexItem  />
              </Hidden>
              <FormControl className="w-full border-0 rounded-8">
                {/*<InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>*/}
                <OutlinedInput
                  id="outlined-adornment-password"
                  className=""
                  type="text"
                  value={searchText}
                  placeholder="Location"
                  onChange={handleSearch}
                  startAdornment={
                    <InputAdornment position="start">
                      <PlaceIcon
                        aria-label="toggle visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="start"
                      >
                        <Visibility />
                      </PlaceIcon>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button variant="contained" className="search-btn rounded-6 px-32">Search</Button>
            </Paper>
            <Hidden smDown>
              <Typography color="inherit" className="text-12 sm:text-14 tracking-tight" color="primary">
                Popular Searches : Designer, Developer, Web, IOS, PHP, Senior Engineer
              </Typography>
            </Hidden>
          </motion.div>
        </div>
        <Hidden smDown>
          <div className="header-banner lg:bg-transparent"></div>
        </Hidden>
      </div>
      <div className="flex flex-row items-center justify-center w-full bg-white opacity-75 mb-40">
        <div className="flex flex-row items-center justify-between w-full max-w-2xl">
          <div className="flex items-center px-16 py-20">
            <img className="max-h-24" src="assets/images/company/national.png"/>
          </div>
          <div className="flex items-center px-16 py-20">
            <img className="max-h-24" src="assets/images/company/polygon.png"/>
          </div>
          <div className="flex items-center px-16 py-20">
            <img className="max-h-24" src="assets/images/company/reddit.png"/>
          </div>
          <div className="flex items-center px-16 py-20">
            <img className="max-h-24" src="assets/images/company/techradar.png"/>
          </div>
          <div className="flex items-center px-16 py-20">
            <img className="max-h-24" src="assets/images/company/reuter.png"/>
          </div>
          <div className="flex items-center px-16 py-20">
            <img className="max-h-24" src="assets/images/company/theverge.png"/>
          </div>
          <div className="flex items-center px-16 py-20">
            <img className="max-h-24" src="assets/images/company/axios.png"/>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 max-w-2xl w-full mx-auto px-8 sm:px-16 py-24">
        <div className="mb-40">
          <Typography color="inherit" className="font-semibold mb-4 text-20">
            BROWSE JOBS BY CATEGORY
          </Typography>
          <Categories />
        </div>
        <JobLandingContent/>

      </div>
    </Root>
  );
}

export default withReducer('jobLandingPage', reducer)(JobLanding);
