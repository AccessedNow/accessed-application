import FusePageCarded from '@fuse/core/FusePageCarded';
import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';

import React, { useState, useEffect, useRef } from 'react';
import { useDeepCompareEffect } from '@fuse/hooks';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import reducer from './store';
import DetailSidebarHeader from './DetailSidebarHeader';

import JobsHeader from './JobsHeader';
import JobsSearchFilter from './JobsSearchFilter';
import SearchResult from './SearchResult';
import TodoToolbar from './TodoToolbar';
import JobSearchItemSelected from './JobSearchItemSelected';


import Ad from '../../../components/Ad/Ad';
import TopJobs from './TopJobs';

import {searchJobs} from "./store/jobsSearchSlice";
import jobService from 'app/services/jobService';
import {getFiles} from "../../apps/file-manager/store/filesSlice";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 140,
//     width: 100,
//   },
//   control: {
//     padding: theme.spacing(2),
//   },
// }));

function JobSearchPage() {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const pageLayout = useRef(null);
  // const classes = useStyles();

  const [employment, setEmployment] = useState([]);
  const [level, setLevel] = useState([]);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');





  // useEffect(() => {
  //   // jobService
  //   //   .getJobLanding()
  //   //   .then(res => {
  //   //     setData(res)
  //   //   });
  //   // dispatch(searchJobs({}));
  // }, []);

  useEffect(() => {
    dispatch(searchJobs());
  }, [dispatch]);


  // if(!result){
  //   // return <FuseLoading/>
  // }

  return (
    <>
      <FusePageSimple
        classes={{
          contentWrapper: 'p-0 pb-80',
          content: 'w-full w-1/3 min-h-full',
          contentToolbar: 'w-1/3',
          leftSidebar: 'w-300 border-0 border-r-1 h-full',
          header: 'min-h-72 h-72',
          rightSidebar: 'w-320 md:w-full w-7/8 min-h-full'
        }}
        header={<JobsHeader pageLayout={pageLayout} />}
        contentToolbar={<TodoToolbar />}
        content={<SearchResult  pageLayout={pageLayout}/>}
        // content={
        //   <div className="flex flex-col w-full items-center">
        //
        //   </div>
        // }
        leftSidebarContent={<JobsSearchFilter />}
        rightSidebarContent={<JobSearchItemSelected/>}
        sidebarInner
        ref={pageLayout}
        innerScroll
      />
    </>
	);
}

export default withReducer('jobSearchPage', reducer)(JobSearchPage);
