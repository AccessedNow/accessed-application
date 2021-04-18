import FusePageCarded from '@fuse/core/FusePageCarded';
import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import React, { useState, useEffect, useRef } from 'react';
import { useDeepCompareEffect } from '@fuse/hooks';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import FavoriteIcon from '@material-ui/icons/FavoriteOutlined';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import LocationOncon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import reducer from './store';

import JobsHeader from './JobsHeader';
import JobsSidebarContent from './JobsSidebarContent';
import Ad from '../../../components/Ad/Ad';
import TopJobs from './TopJobs';

import {getJobsLanding} from "./store/jobsLandingSlice";
import JobCard from '../../../components/JobCard/JobCard';
import Categories from './Categories';
import JobCard2 from '../../../components/JobCard/JobCard2';
import {buildPartyAvatarUrl} from 'app/utils/urlHelper';


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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
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

function JobsLandingPage() {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const [data, setData] = useState(null);
  const pageLayout = useRef(null);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [title, setTitle] = React.useState('');
  const [location, setLocation] = React.useState('');

  const jobLanding = useSelector(({ jobsLandingPage }) => {
    return jobsLandingPage.jobsLandingSlice;
  });



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };


  useEffect(() => {
    // jobService
    //   .getJobLanding()
    //   .then(res => {
    //     setData(res)
    //   });
    dispatch(getJobsLanding());
  }, []);


  if(!jobLanding){
    return <FuseLoading/>
  }

  jobLanding.highlightJobs = jobLanding.highlightJobs.slice(0,8);
  jobLanding.popularJobs = jobLanding.popularJobs.slice(0,8);
  jobLanding.newJobs = jobLanding.newJobs.slice(0,8);
  jobLanding.popularCompanies = jobLanding.popularCompanies.slice(0,8);

  return (
    <>
      <FusePageSimple
        classes={{
          contentWrapper: 'p-0 pb-80',
          content: 'flex min-h-full',
          leftSidebar: 'w-256 border-0',
          header: 'p-0 min-h-72 h-72'
        }}
        header={
          <div className="flex flex-1 items-center justify-between relative">
            <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Home" {...a11yProps(0)} />
                <Tab label="Viewed" {...a11yProps(1)} />
                <Tab label="Saved" {...a11yProps(2)} />
                <Tab label="Applied" {...a11yProps(3)} />
                <Tab label="Alerts" {...a11yProps(4)} />
              </Tabs>
            </AppBar>
          </div>
        }
        content={
          <div className="flex flex-col w-full items-center">
            <TabPanel value={value} index={0} className="w-full">

                  <div
                    className={clsx(
                      classes.header,
                      'relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-288'
                    )}
                  >
                    <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                      <Typography color="inherit" className="text-24 sm:text-40 font-light">
                        The Easiest Way to Get Your New Job
                      </Typography>
                    </FuseAnimate>
                    <img className={classes.headerBg} src="assets/images/backgrounds/portrait-people.jpg" />
                    <Grid container spacing={3} className={classes.form}>
                      <Grid item xs={12} sm={6} className="bg-none">
                        <TextField
                          id="standard-search"
                          placeholder="Search title, skill, or company"
                          type="search"
                          variant="outlined"
                          className={classes.input + ' w-full bg-grey-50'}
                          InputLabelProps={{
                            shrink: false,
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}  className="bg-none">
                        <TextField
                          id="standard-search"
                          placeholder="Search city, state"
                          type="search"
                          variant="outlined"
                          className={classes.input + ' w-full bg-grey-50'}
                          InputLabelProps={{
                            shrink: false,
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LocationOncon />
                              </InputAdornment>
                            ),
                          }}
                        />


                      </Grid>
                    </Grid>
                  </div>


              <div className="py-40 px-80 ">
                <Card className={classes.card + " w-full mb-16 rounded-4"} elevation={0}>
                  <AppBar position="static" elevation={0} className="bg-transparent">
                    <div
                      className={clsx(
                        'relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 mt-50'
                      )}
                    >
                      <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                        <Typography color="inherit" className="text-24 sm:text-30 text-gray-900">
                          Browse Jobs By Category
                        </Typography>
                      </FuseAnimate>
                    </div>
                  </AppBar>

                  <CardContent className="m-auto text-center" alignItems="center">
                    <Categories/>
                    <Button variant="contained" className="mt-32 text-center" color="primary">
                      Browse All Categories
                    </Button>
                  </CardContent>
                </Card>

                <Card className={classes.card + " w-full mb-16 rounded-4"} elevation={0}>
                  <AppBar position="static" elevation={0} className="bg-transparent">
                    <div
                      className={clsx(
                        'relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 mt-50'
                      )}
                    >
                      <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                        <Typography color="inherit" className="text-24 sm:text-30 text-gray-900">
                          Popular Companies
                        </Typography>
                      </FuseAnimate>
                    </div>
                  </AppBar>

                  <CardContent className="m-auto text-center" alignItems="center">
                    <Grid container spacing={3}>
                      {jobLanding.popularCompanies.map(company => (
                        <Grid item xs={3}>
                          <Card >
                            <CardHeader
                              action={
                                <IconButton aria-label="settings">
                                  <FavoriteIcon  />
                                </IconButton>
                              }
                              title=""
                              subheader=""
                              className="pb-0"
                            />
                            <CardContent alignItems="center" className="m-auto item-center justify-center m-0 text-center pb-40" >
                              <a href={`/company/${company.id}`}><Avatar variant="rounded" className={classes.avatar + " w-96 h-96 text-center"} src={buildPartyAvatarUrl(company)} /></a>
                            </CardContent>
                            <CardActions className="p-12 border-t-1">
                              <div className="flex w-full">
                                <Typography gutterBottom variant="subtitle1" component="h6" alignItems="center" className="text-center m-0">
                                  <a href={`/company/${company.id}`}>{company.name}</a>
                                </Typography>
                              </div>
                            </CardActions>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                    <Button variant="contained" className="mt-32 text-center" color="primary">
                      Browse All Popular Companies
                    </Button>
                  </CardContent>
                </Card>

                {jobLanding.highlightJobs && (
                  <Card className={classes.card + " w-full mb-16 rounded-4"} elevation={0}>
                    <AppBar position="static" elevation={0} className="bg-transparent">
                      <div
                        className={clsx(
                          'relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 mt-50'
                        )}
                      >
                        <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                          <Typography color="inherit" className="text-24 sm:text-30 text-gray-900">
                            Highlight Jobs
                          </Typography>
                        </FuseAnimate>
                      </div>
                    </AppBar>

                    <CardContent alignItems="center">
                      <Grid container spacing={3}>
                        {jobLanding.highlightJobs.map(job => (
                          <Grid item xs={3}>
                            <JobCard2 job={job}/>
                          </Grid>
                        ))}
                      </Grid>
                      <Button variant="contained" className="mt-32 text-center" color="primary">
                        Browse All Highlight Jobs
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {jobLanding.popularJobs && (
                  <Card className={classes.card + " w-full mb-16 rounded-4"} elevation={0}>
                    <AppBar position="static" elevation={0} className="bg-transparent">
                      <div
                        className={clsx(
                          'relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 mt-50'
                        )}
                      >
                        <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                          <Typography color="inherit" className="text-24 sm:text-30 text-gray-900">
                            Popular Jobs
                          </Typography>
                        </FuseAnimate>
                      </div>
                    </AppBar>

                    <CardContent className="m-auto text-center" alignItems="center">
                      <Grid container spacing={3}>
                        {jobLanding.popularJobs.map(job => (
                          <Grid item xs={3} className="justify-items-stretch">
                            <JobCard2 job={job} />
                          </Grid>
                        ))}
                      </Grid>
                      <Button variant="contained" className="mt-32 text-center" color="primary">
                        Browse All Popular Jobs
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {jobLanding.newJobs && (
                  <Card className={classes.card + " w-full mb-16 rounded-4"} elevation={0}>
                    <AppBar position="static" elevation={0} className="bg-transparent">
                      <div
                        className={clsx(
                          'relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 mt-50'
                        )}
                      >
                        <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                          <Typography color="inherit" className="text-24 sm:text-30 text-gray-900">
                            New Jobs
                          </Typography>
                        </FuseAnimate>
                      </div>
                    </AppBar>

                    <CardContent className="m-auto text-center" alignItems="center">
                      <Grid container spacing={3}>
                        {jobLanding.newJobs.map(job => (
                          <Grid item xs={3} className="justify-items-stretch">
                            <JobCard2 job={job}/>
                          </Grid>
                        ))}
                      </Grid>
                      <Button variant="contained" className="mt-32 text-center" color="primary">
                        Browse All New Jobs
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

            </TabPanel>
            <TabPanel value={value} index={1} className="w-full px-80">
              {jobLanding.viewedJobs && (
                <Card className={classes.card + " w-full mb-16 rounded-4"} elevation={0}>
                  <CardContent className="m-auto text-center" alignItems="center">
                    <Grid container spacing={3}>
                      {jobLanding.viewedJobs.map(job => (
                        <Grid item xs={3}>
                          <JobCard2 job={job}/>
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
            <TabPanel value={value} index={2} className="w-full px-80">
              {jobLanding.savedJobs && (
                <Card className={classes.card + " w-full mb-16 rounded-4"} elevation={0}>
                  <CardContent className="m-auto text-center" alignItems="center">
                    <Grid container spacing={3}>
                      {jobLanding.savedJobs.map(job => (
                        <Grid item xs={3}>
                          <JobCard2 job={job}/>
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
            <TabPanel value={value} index={3}>
              Job Applied
            </TabPanel>
            <TabPanel value={value} index={4}>
              Job Alert
            </TabPanel>


          </div>
        }
        sidebarInner
        ref={pageLayout}
        innerScroll
      />
    </>
	);
}

export default withReducer('jobsLandingPage', reducer)(JobsLandingPage);
