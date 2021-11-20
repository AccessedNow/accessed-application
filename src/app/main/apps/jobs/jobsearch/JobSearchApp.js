import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';


import JobSearchHeader from './JobSearchHeader';
import JobList from '../../../components/JobList';
import JobDetail from './JobDetail';

import reducer from './store';
import {searchJobs, setSelectedItem, setLoading, setPagination} from '../store/jobsSlice';
import {removeProduct} from "../../e-commerce/store/productSlice";


const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-topBg': {
    height: '0!important',
    padding: '0!important'
  },
  '& .FusePageSimple-header': {
    minHeight: 'auto',
    height: 'auto',
    background: (theme) => theme('colors.light-green.100'),
    margin: '20px 0',
    padding: 20,
    borderRadius: 6,
    borderColor: (theme) => theme('borderColor')
  },
  '& .FusePageSimple-contentWrapper': {
    padding: '0 !important',
    paddingBottom: 80,
    [theme.breakpoints.up('sm')]: {
      padding: 24,
    },
  },
  '& .FusePageSimple-content': {
      minHeight: '100%',
    borderRight: '1px solid #eee',
    marginRight: 20
  },
  '& .FusePageSimple-sidebar': {
    width: 600,
    border: 0,
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

  useEffect(() => {
    dispatch(searchJobs({query: searchText, filter: filter, pagination: pagination}));
  }, [dispatch, routeParams]);

  function handlePagination() {
    // dispatch(removeProduct()).then(() => {
    //   history.push('/apps/e-commerce/products');
    // });
  }



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
            <div className="flex flex-1 w-full items-center justify-between border-t-1 border-b-1 p-12 bg-white">
              <Typography>
                Turn on job alerts
              </Typography>
              <Switch {...label} defaultChecked />
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
