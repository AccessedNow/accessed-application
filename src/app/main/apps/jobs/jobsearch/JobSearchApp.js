import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { colors } from '@mui/material';

import { styled } from '@mui/material/styles';

import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';


import JobSearchHeader from './JobSearchHeader';
import JobList from '../../../components/JobList';
import JobDetail from './JobDetail';

import reducer from './store';
import {searchJobs, setSelectedItem, setLoading, setPagination} from '../store/jobsSlice';


const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-wrapper': {
    marginBottom: 40
  },
  '& .FusePageSimple-topBg': {
    height: '0!important',
    padding: '0!important'
  },
  '& .FusePageSimple-header': {
    minHeight: 'auto',
    height: 'auto',
    background: `white!important`,
    margin: '20px 0',
    padding: 20,
    borderRadius: 6,
    borderColor: (theme) => theme('borderColor')
  },
  '& .FusePageSimple-contentWrapper': {
    padding: '0 !important',
    paddingBottom: 80,
    borderTopLeftRadius: 6,
    [theme.breakpoints.up('sm')]: {
      padding: 24,
    },
  },
  '& .FusePageSimple-content': {
      minHeight: '100%',
    borderRight: '1px solid #eee',
    // marginRight: 20
  },
  '& .FusePageSimple-sidebar': {
    width: 600,
    border: 0,
    backgroundColor: 'white!important',
    borderTopRightRadius: 6,
  },
}));

const label = { inputProps: { 'aria-label': 'Off' } };


function JobSearchApp(props) {
  const dispatch = useDispatch();
  const pageLayout = useRef(null);
  const routeParams = useParams();


  const data = useSelector(({ jobSearchApp }) => jobSearchApp.jobs.data);
  const searchText = useSelector(({ jobSearchApp }) => jobSearchApp.jobs.searchText);
  const filter = useSelector(({ jobSearchApp }) => jobSearchApp.jobs.filter);
  const pagination = useSelector(({ jobSearchApp }) => jobSearchApp.jobs.pagination);
  const loading = useSelector(({ jobSearchApp }) => jobSearchApp.jobs.loading);
  const [location, setLocation] = useState('')
  useEffect(() => {
    dispatch(searchJobs({query: searchText, filter: filter, pagination: pagination}));
  }, [dispatch, routeParams]);

  function handlePagination() {
    // dispatch(removeProduct()).then(() => {
    //   history.push('/apps/e-commerce/products');
    // });
  }


  const jobAlertText = ''.concat(searchText?searchText:'Job')
                          .concat(' in ')
                          .concat(location?location:'United States');


  return (
    <>
      <Root
        header={<JobSearchHeader pageLayout={pageLayout}  />}
        content={
          <div className="">
            {/*<React.Fragment key={'right'}>*/}
            {/*<Button onClick={toggleDrawer('right', true)}>{'right'}</Button>*/}
            {/*<SwipeableDrawer*/}
            {/*anchor={'right'}*/}
            {/*open={state['right']}*/}
            {/*onClose={toggleDrawer('right', false)}*/}
            {/*onOpen={toggleDrawer('right', true)}*/}
            {/*>*/}
            {/*{list('right')}*/}
            {/*</SwipeableDrawer>*/}
            {/*</React.Fragment>*/}
            <div className="flex flex-1 w-full items-center justify-between border-b-1 p-12 bg-white">
              <div>
                <Typography>
                  {jobAlertText}
                </Typography>
                <Typography className="text-10 font-400">
                  {pagination.totalElements?pagination.totalElements + ' results':''}
                </Typography>
              </div>
              <div>
                <Switch {...label} defaultChecked />
                <Typography className="text-10 font-400">
                  Job Alert
                </Typography>
              </div>
            </div>

            {data &&
            <JobList jobs={data} pagination={pagination} setSelectedItem={setSelectedItem} handlePagination={handlePagination}/>
            }
          </div>
        }
        // leftSidebarContent={<JobFilter></JobFilter>}
        rightSidebarContent={
          <div className="bg-white">
            <JobDetail />
          </div>
        }
        sidebarInner
        ref={pageLayout}
      />
    </>
  );
}

export default withReducer('jobSearchApp', reducer)(JobSearchApp);
