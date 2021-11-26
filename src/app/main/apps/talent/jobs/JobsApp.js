import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { colors } from '@mui/material';

import { styled } from '@mui/material/styles';

import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import ContentHeader from './ContentHeader';
import SidebarContent from './SidebarContent';
import JobList from '../components/job-list/JobList';
import Toolbar from './Toolbar';

import reducer from './store';
import {searchJobs, setSelectedItem, setLoading, setPagination} from '../store/jobsSlice';

const Root = styled(FusePageSimple)(({ theme }) => ({


  '& .FusePageSimple-header': {
    minHeight: 72,
    height: 72,
  },
  '& .FusePageSimple-contentWrapper': {
    padding: 0,
    paddingBottom: 80,
    [theme.breakpoints.up('sm')]: {
      padding: 0,
    },
  },

  '& .FusePageCarded-content': {
    display: 'flex',
  },
  '& .FusePageCarded-contentCard': {
    overflow: 'hidden',
  },
  '& .FusePageSimple-sidebar': {
    width: 320,


    '& .FusePageSimple-sidebarContent': {
      background: 'white',
    }
  },
  '& tr': {
    '& .MuiTableCell-root': {
      // border: 'none'
    },

    '.cell-wrapper': {
      height: '100%',
    },

    '& > :first-child': {
      // borderTopLeftRadius: 6,
      // borderBottomLeftRadius: 6
    },
    '& > :last-child': {
      // borderTopRightRadius: 6,
      // borderBottomRightRadius: 6
    },
    '& > :n-child': {
      height: 72
    }
  },
  '& tr:hover': {
    '& .MuiTableCell-root': {
      // backgroundColor: '#eee'
    }

  },
}));


const label = { inputProps: { 'aria-label': 'Off' } };


function JobsApp(props) {
  const dispatch = useDispatch();
  const pageLayout = useRef(null);
  const routeParams = useParams();


  const jobs = useSelector(({ jobSearchApp }) => jobSearchApp.jobs.data);
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

  return (
    <>
      <Root
        leftSidebarContent={<SidebarContent />}
        header={<ContentHeader pageLayout={pageLayout} />}
        contentToolbar={<Toolbar />}
        content={
          <div className="">
            {jobs &&
            <JobList jobs={jobs} pagination={pagination} setSelectedItem={setSelectedItem} handlePagination={handlePagination}/>
            }
          </div>
        }

        innerScroll
        ref={pageLayout}
      />
    </>
  );
}

export default withReducer('jobSearchApp', reducer)(JobsApp);
