import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import { styled } from '@mui/material/styles';
import { useDeepCompareEffect } from '@fuse/hooks';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import reducer from './store';
import Compare from './Compare';

import ApplicationList from './ApplicationList';
import SidebarHeader from './SidebarHeader';
import {searchCandidates} from "../../store/candidatesSlice";

const Root = styled(FusePageSimple)(({ theme }) => ({


  '& .FusePageSimple-header': {
    minHeight: 72,
    height: 72,
  },
  '& .FusePageSimple-contentWrapper': {
    padding: 0,
    paddingBottom: 80,
    [theme.breakpoints.up('sm')]: {
      padding: 20,
    },
  },

  '& .FusePageCarded-content': {
    background: 'white',
    display: 'flex',
  },
  '& .FusePageCarded-contentCard': {
    overflow: 'hidden',
  },
  '& .FusePageSimple-sidebar': {
    width: 320,

    '& .FusePageSimple-sidebarHeader': {
      height: 'auto',
      minHeight: 'auto'
    },
    '& .FusePageSimple-sidebarContent': {
      padding: 10
    }
  },
  '& .FusePageSimple-leftSidebar': {
    border: 0
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



function ApplicationsCompare() {

  const dispatch = useDispatch();

  const pageLayout = useRef(null);
  const routeParams = useParams();

  useEffect(() => {
  }, [dispatch]);

  useDeepCompareEffect(() => {
    dispatch(searchCandidates(routeParams));
  }, [dispatch, routeParams]);

  return(
    <>
      <Root
        leftSidebarHeader={<SidebarHeader />}
        leftSidebarContent={<ApplicationList />}
        content={<Compare />}
        ref={pageLayout}
         innerScroll
      />;
    </>
  )
}

export default withReducer('candidatesApp', reducer)(ApplicationsCompare);
