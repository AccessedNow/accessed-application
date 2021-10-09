import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import { useDeepCompareEffect } from '@fuse/hooks';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/FavoriteOutlined';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuIcon from '@mui/icons-material/Menu';
import PlaceIcon from '@mui/icons-material/Place';
import LocationOncon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import reducer from './store';

import JobsHeader from './JobsHeader';
import JobsSidebarContent from './JobsSidebarContent';
import Ad from '../../../components/Ad';
import TopJobs from './TopJobs';

import {getJobLanding} from "./store/jobLandingSlice";
import { getTitleSuggestion } from '../store/jobsSlice';
import JobCardItem from '../../../components/JobCardItem';
import JobLandingSidebarContent from './JobLandingSidebarContent';
import Categories from './Categories';
import {buildPartyAvatarUrl} from 'app/utils/urlHelper';


const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-topBg': {
    // background: 'url("assets/images/profile/morain-lake.jpg")!important',
    backgroundSize: 'cover!important',
    backgroundPosition: 'center center!important',
  },

  '& .FusePageSimple-header': {
    height: 50,
    minHeight: 50,
    [theme.breakpoints.down('lg')]: {
      // height: 240,
      // minHeight: 240,
    },
  },

  '& .FusePageSimple-wrapper': {
    background: 'transparent',
  },

  '& .FusePageSimple-content': {
    width: '100%',
    // maxWidth: 1120,
    margin: 'auto',
    '& .banner': {
      // background: 'url("assets/images/backgrounds/portrait-people.jpg")!important',
      backgroundSize: 'cover!important',
      backgroundPosition: 'center center!important',
    },
  },

  '& .FusePageSimple-toolbar': {
    width: '100%',
    margin: 'auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'auto',
    height: 'auto',
    aliginItesm: 'flex-start',
  },
  '& .FusePageSimple-sidebar': {
    border: 0,
  },
  '& .FusePageSimple-toolbar': {
    width: '100%',
    margin: 'auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'auto',
    height: 'auto',
    aliginItesm: 'flex-start',
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


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    borderColor: theme.palette.divider,
    margin: '0 auto'
  },
  paper: {
    height: 140,
    width: 100,
  },
  form: {
    flexGrow: 1,
    padding: '40px 100px',
    input: {
      background: theme.palette.grey[500]
    }
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    background: 'none'
  },
  jobCard: {
    height: 300
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  header: {
    background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 40%)`,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    height: 500
  },
  headerIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.04,
    fontSize: 512,
    width: 512,
    height: 512,
    pointerEvents: 'none'
  },
  headerBg: {
    position: 'absolute',
    top: -200,
    left: 0,
    opacity: 0.2,
    pointerEvents: 'none'
  }
}));

function JobLandingPage() {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const pageLayout = useRef(null);
  const classes = useStyles();
  const [title, setTitle] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [menuTab, setMenuTab] = useState(0);
  const [categoryTab, setCategoryTab] = React.useState('0');
  const [suggestion, setSuggestion] = React.useState([]);


  const jobLanding = useSelector(({ jobLandingPage }) => {
    return jobLandingPage.jobLanding;
  });


  const handleCategoryTab = (event, newValue) => {
    setCategoryTab(newValue);
  };

  const handleMenuTab = (event, newValue) => {
    setMenuTab(newValue);
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };


  useEffect(() => {
    // jobService
    //   .getJobLanding()
    //   .then(res => {
    //     setData(res)
    //   });
    dispatch(getJobLanding());
  }, []);

  const handleTitleChange = (event) => {
    dispatch(getTitleSuggestion(event.target.value)).then((response) => {
      let data = _.reduce(response.payload, function(res, item, i){res.push({id: i, label: item}); return res;}, []);
      setSuggestion(data)
    });
  }


  if(!jobLanding){
    return <FuseLoading/>
  }

  jobLanding.highlightJobs = jobLanding.highlightJobs.slice(0,8);
  jobLanding.popularJobs = jobLanding.popularJobs.slice(0,8);
  jobLanding.newJobs = jobLanding.newJobs.slice(0,8);
  jobLanding.popularCompanies = jobLanding.popularCompanies.slice(0,8);

  return (
    <Root
      // header={
      //   <div className="flex flex-1 items-start justify-between relative">
      //     <AppBar position="static">
      //       <Tabs variant="scrollable" value={menuTab} onChange={handleMenuTab} aria-label="basic tabs example">
      //         <Tab label="Home" {...a11yProps(0)} />
      //         <Tab label="My Jobs" {...a11yProps(1)} />
      //       </Tabs>
      //     </AppBar>
      //   </div>
      // }
      contentToolbar={
        <>
          <div className='banner relative w-full overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-0 h-200 sm:h-288'>
            <Typography color="inherit" className="text-24 sm:text-40 font-light">
              The Easiest Way to Get Your New Job
            </Typography>
            <img className={classes.headerBg} src="assets/images/backgrounds/portrait-people.jpg" />
            <Paper component="div" className="search flex sm:flex-col lg:flex-row py-0 rounded-8 bg-white">
              <div className="flex flex-1 flex-col">
                <div className="flex">
                  <div className="flex">
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                    <Autocomplete
                      freeSolo
                      disablePortal
                      id="combo-box-demo"
                      options={suggestion}
                      sx={{ width: 300 }}
                      renderInput={(params) =>
                        <TextField
                          {...params}
                          label="Search by title"
                          InputProps={{
                            ...params.InputProps,
                            type: 'search',
                          }}
                          onChange={handleTitleChange}
                          className="border-0"
                        />
                      }
                    />
                  </div>
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <div className="flex">
                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="locations">
                      <PlaceIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="City, state, or country"
                      inputProps={{ 'aria-label': 'search google maps' }}
                    />

                  </div>
                </div>

              </div>
            </Paper>
          </div>

          <div className="flex flex-row items-center justify-between w-full px-80 bg-white opacity-75">
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
          <Tabs
            value={menuTab}
            onChange={handleMenuTab}
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
              label="Timeline"
            />
            <Tab
              className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
              disableRipple
              label="About"
            />
            <Tab
              className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
              disableRipple
              label="Photos & Videos"
            />
          </Tabs>
        </>
      }
      content={
        <div className="flex flex-col w-full items-start">
          <TabPanel value={menuTab} index={0} className="w-full flex">



            <div className="py-40 px-80 ">

              <Card className={classes.card + " w-full mb-40 rounded-4"} elevation={0}>
                <AppBar position="static" elevation={0} className="bg-transparent">
                  <div
                    className={clsx(
                      'relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 mt-50'
                    )}
                  >
                    <Typography color="inherit" className="text-24 sm:text-30 text-gray-900">
                      Browse Jobs By Category
                    </Typography>
                  </div>
                </AppBar>

                <CardContent className="p-0 m-auto text-center" alignItems="center">
                  <Categories/>
                  {/*<Button variant="contained" className="mt-32 text-center" color="primary">*/}
                    {/*Browse All Categories*/}
                  {/*</Button>*/}
                </CardContent>
              </Card>

              <div className="mb-60">
                <Typography className="font-semibold mb-4 text-20">TOP FEATURED EMPLOYERS</Typography>
                <Typography className="mb-20">We can determine what developers needs and what skills they're proficient in.  You'll get access to the community, relevancy to your business, and more qualified employers.</Typography>
                <Divider />
                <Box sx={{ flexGrow: 1 }} className="mt-20">
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                      <Card className="rounded-8 border-1">
                        <CardMedia
                          component="img"
                          height="140"
                          image="assets/images/covers/cover1.png"
                          alt="green iguana"
                        />
                        <CardContent className="flex flex-col items-center justify-center m-0 text-center">
                          <Avatar
                            variant="square"
                            sx={{
                              borderWidth: 2,
                              borderStyle: 'solid',
                              borderColor: 'background.default',
                            }}
                            className="flex -mt-48  w-80 h-80 items-center mb-14 rounded-8"
                            src="assets/images/company/nbc.png"
                          />
                          <Typography color="inherit" className="flex text-24 sm:text-14 text-gray-900 mb-6">
                            NBC
                          </Typography>
                          <Rating name="read-only" value={4.5} size="small" readOnly />
                          <div className="flex items-center justify-center">
                            <IconButton size="small" aria-label="add to favorites" className="flex items-start justify-center">
                              <LocationOncon fontSize="inherit"/>
                            </IconButton>
                            <Typography color="inherit" className="text-12 text-gray-900">
                              San Jose, US | 17 Jobs
                            </Typography>
                          </div>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Card className="rounded-8 border-1">
                        <CardMedia
                          component="img"
                          height="140"
                          image="assets/images/covers/cover4.png"
                          alt="green iguana"
                        />
                        <CardContent className="flex flex-col items-center justify-center m-0 text-center">
                          <Avatar
                            variant="square"
                            sx={{
                              borderWidth: 2,
                              borderStyle: 'solid',
                              borderColor: 'background.default',
                            }}
                            className="flex -mt-48  w-80 h-80 items-center mb-14 rounded-8"
                            src="assets/images/company/hackernews.png"
                          />
                          <Typography color="inherit" className="flex text-24 sm:text-14 text-gray-900 mb-6">
                            Hacker News
                          </Typography>
                          <Rating name="read-only" value={4.5} size="small" readOnly />
                          <div className="flex items-center justify-center">
                            <IconButton size="small" aria-label="add to favorites" className="flex items-start justify-center">
                              <LocationOncon fontSize="inherit"/>
                            </IconButton>
                            <Typography color="inherit" className="text-12 text-gray-900">
                              San Jose, US | 17 Jobs
                            </Typography>
                          </div>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Card className="rounded-8 border-1">
                        <CardMedia
                          component="img"
                          height="140"
                          image="assets/images/covers/cover6.png"
                          alt="green iguana"
                        />
                        <CardContent className="flex flex-col items-center justify-center m-0 text-center">
                          <Avatar
                            variant="square"
                            sx={{
                              borderWidth: 2,
                              borderStyle: 'solid',
                              borderColor: 'background.default',
                            }}
                            className="flex -mt-48  w-80 h-80 items-center mb-14 rounded-8"
                            src="assets/images/company/theverge.png"
                          />
                          <Typography color="inherit" className="flex text-24 sm:text-14 text-gray-900 mb-6">
                            The Verge
                          </Typography>
                          <Rating name="read-only" value={5} size="small" readOnly />
                          <div className="flex items-center justify-center">
                            <IconButton size="small" aria-label="add to favorites" className="flex items-start justify-center">
                              <LocationOncon fontSize="inherit"/>
                            </IconButton>
                            <Typography color="inherit" className="text-12 text-gray-900">
                              San Jose, US | 17 Jobs
                            </Typography>
                          </div>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Card  className="rounded-8 border-1">
                        <CardMedia
                          component="img"
                          height="140"
                          image="assets/images/covers/cover9.png"
                          alt="green iguana"
                        />
                        <CardContent className="flex flex-col items-center justify-center m-0 text-center">
                          <Avatar
                            variant="square"
                            sx={{
                              borderWidth: 2,
                              borderStyle: 'solid',
                              borderColor: 'background.default',
                            }}
                            className="flex -mt-40  w-80 h-80 talign-center rounded-8"
                            src="assets/images/company/reddit.png"
                          />
                          <Typography color="inherit" className="flex text-24 sm:text-14 text-gray-900 mb-6">
                            Reddit
                          </Typography>
                          <Rating name="read-only" value={4} size="small" readOnly />
                          <div className="flex items-center justify-center">
                            <IconButton size="small" aria-label="add to favorites" className="flex items-start justify-center">
                              <LocationOncon fontSize="inherit"/>
                            </IconButton>
                            <Typography color="inherit" className="text-12 text-gray-900">
                              San Jose, US  |  17 Jobs
                            </Typography>
                          </div>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>

              </div>

              {jobLanding.highlightJobs && (
              <div className="mb-60">
                <Typography className="font-semibold mb-4 text-20">HIGHLIGHT JOBS</Typography>
                <Divider />
                <Grid container spacing={3}  className="mt-20">
                  {jobLanding.highlightJobs.map(job => (
                    <Grid item xs={3}>
                      <JobCardItem job={job}/>
                    </Grid>
                  ))}
                </Grid>

              </div>
              )}

              {jobLanding.popularJobs && (
                <div  className="mb-60">
                  <Typography className="font-semibold mb-4 text-20">POPULAR JOBS</Typography>
                  <Divider />
                  <Grid container spacing={3}  className="mt-20">
                    {jobLanding.popularJobs.map(job => (
                      <Grid item xs={3}>
                        <JobCardItem job={job}/>
                      </Grid>
                    ))}
                  </Grid>

                </div>
              )}

              {jobLanding.newJobs && (
                <div  className="mb-60">
                  <Typography className="font-semibold mb-4 text-20">NEW JOBS</Typography>
                  <Divider />
                  <Grid container spacing={3}  className="mt-20">
                    {jobLanding.newJobs.map(job => (
                      <Grid item xs={3}>
                        <JobCardItem job={job}/>
                      </Grid>
                    ))}
                  </Grid>

                </div>
              )}

            </div>

          </TabPanel>
          <TabPanel value={menuTab} index={1} className="w-full px-80">
            {jobLanding.viewedJobs && (
              <Card className={classes.card + " w-full mb-16 rounded-4"} elevation={0}>
                <CardContent className="m-auto text-center" alignItems="center">
                  <Grid container spacing={3}>
                    {jobLanding.viewedJobs.map(job => (
                      <Grid item xs={3}>
                        <JobCardItem job={job}/>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
                <Button variant="contained" className="mt-32 text-center" color="primary">
                  More
                </Button>
              </Card>
            )}
          </TabPanel>
          <TabPanel value={menuTab} index={2} className="w-full px-80">
            {jobLanding.savedJobs && (
              <Card className={classes.card + " w-full mb-16 rounded-4"} elevation={0}>
                <CardContent className="m-auto text-center" alignItems="center">
                  <Grid container spacing={3}>
                    {jobLanding.savedJobs.map(job => (
                      <Grid item xs={3}>
                        <JobCardItem job={job}/>
                      </Grid>
                    ))}
                  </Grid>
                  <Button variant="contained" className="mt-32 text-center" color="primary">
                    More
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabPanel>
          <TabPanel value={menuTab} index={3}>
            Job Applied
          </TabPanel>
          <TabPanel value={menuTab} index={4}>
            Job Alert
          </TabPanel>


        </div>
      }
      ref={pageLayout}
      innerScroll
    />
	);
}

export default withReducer('jobLandingPage', reducer)(JobLandingPage);
