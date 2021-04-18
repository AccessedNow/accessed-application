import FusePageCarded from '@fuse/core/FusePageCarded';
import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';

import React, { useState, useEffect, useRef } from 'react';
import { useDeepCompareEffect } from '@fuse/hooks';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';

import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import reducer from './store';
import {buildPartyAvatarUrl, buildPartyCoverUrl} from 'app/utils/urlHelper';
import JobsHeader from './JobsHeader';
import JobsSidebarContent from './JobsSidebarContent';
import Ad from '../../../components/Ad/Ad';
import TopJobs from './TopJobs';
import JobDetail from './JobDetail';

import {getJobsLanding} from "./store/jobsLandingSlice";
import JobCard from '../../../components/JobCard/JobCard';
import Categories from './Categories';
import HighlightJobs from './HighlightJobs';
import PopularJobs from './PopularJobs';
import jobService from 'app/services/jobService';
import {getNotes} from "../../apps/notes/store/notesSlice";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
  },
  listIem: {
    minwidth: 'auto',
    padding: 0
  }
}));

function JobDetailPage() {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const [job, setJob] = useState(null);
  const pageLayout = useRef(null);
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    jobService
      .getJobById(routeParams.id)
      .then(res => {
        setJob(res)
      });
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if(!job){
    return <FuseLoading/>
  }

  return (
    <>
      <FusePageSimple
        classes={{
          contentWrapper: 'p-16 sm:p-24 pb-80',
          content: 'flex w-full',
          leftSidebar: 'w-256 border-0',
          header: 'min-h-72 h-72'
        }}
        content={
          <div className="w-full">

            <div className="flex flex-col md:flex-row container">
              <div className="flex flex-1 flex-col ">
                <JobDetail job={job}/>
                <Paper className="flex flex-1 flex-col min-w-0 md:ltr:mr-20 md:rtl:ml-20 mt-32 px-20">
                  <Typography variant="subtitle1" color="primary" className="flex-1 px-12 pt-32 font-medium">
                    About Company
                  </Typography>

                  <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
                    <div className="flex flex-1 flex-col w-full items-center md:flex-row md:justify-start">
                      <div className="flex w-full items-center">
                        <Avatar variant="rounded" className={classes.avatar + " w-48 h-48 mr-12 border"} src={buildPartyAvatarUrl(job.company)} />
                        <div className="flex flex-col min-w-0 mx-8 sm:mc-16">
                          <Typography color="inherit" className="text-16 text-24 md:text-24 truncate" align="left">
                            {job.company.name}
                          </Typography>
                          <Typography variant="caption" align="left">{job.company.noOfFollowers } followers</Typography>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <Button
                        className={" mr-12"}
                        variant="contained"
                        color="primary"
                        disabled={!job.company.hasFollowed}
                        startIcon={<AddIcon />}
                      >
                        Follow
                      </Button>
                    </div>
                  </div>
                  <Typography variant="body" color="primary" className="flex-1 px-12 pt-32">
                    We are the global leaders in Data & Analytics recruitment and we’re proud to say, our customers believe we’re good at it. Our clients have given us a Net Promoter Score (NPS) of 83, whilst our candidates have given us 88, both far above industry averages. <br /><br />

                    Having actively chosen to focus on Data & Analytics, we’ve immersed ourselves in the market and are now an integral part of this business community. <br /><br />

                    We have seen unprecedented growth in our specialist sector and always have a wide range of vacancies at junior, senior, and executive levels across Data & Technology, Data Science, Digital Analytics, Life Science Analytics, Marketing & Insight, Risk Analytics. <br /><br/>

                    As global leaders, we operate in four offices globally, recruiting for roles across the UK, US, Benelux, France, Germany, the Nordics and Spain.
                  </Typography>

                </Paper>
              </div>
              <div className="flex flex-col md:w-320 px-10">
                <div className="widget w-full pb-32">
                  <Ad/>
                </div>
              </div>


            </div>

          </div>
        }
        leftSidebarContent={<JobsSidebarContent />}
        sidebarInner
        ref={pageLayout}
        innerScroll
      />
    </>
	);
}

export default withReducer('jobDetailPage', reducer)(JobDetailPage);
