import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';
import withReducer from 'app/store/withReducer';
import { styled } from '@mui/material/styles';
import { useDeepCompareEffect } from '@fuse/hooks';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import reducer from './store';

import ContentHeader from './ContentHeader';
import CandidateDetail from './CandidateDetail';
import SidebarContent from './SidebarContent';

import {getCandidate, resetCandidate} from "../store/candidateSlice";

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 150,
    height: 192,
    [theme.breakpoints.up('sm')]: {
      minHeight: 'auto',
      height: 'auto!important',
    },
  },
  '& .FusePageSimple-sidebarHeader': {
    minHeight: 96,
    height: 96,
    [theme.breakpoints.up('sm')]: {

      minHeight: 160,
      height: 160,
    },
  },
  '& .FusePageSimple-contentWrapper': {
    padding: 0,
    paddingBottom: 80,
    [theme.breakpoints.up('sm')]: {
      padding: 0,
    },
  },

  '& .FusePageSimple-rightSidebar': {
    width: 600,
    backgroundColor: 'white'
  },

  '& .FusePageSimple-sidebarContent': {
    backgroundColor: 'white'
  }
}));



function CandidateApp() {

  const dispatch = useDispatch();
  const pageLayout = useRef(null);
  const routeParams = useParams();
  const candidate = useSelector(({ candidateApp }) => candidateApp.candidate);

  useEffect(() => {
    dispatch(resetCandidate());
    dispatch(getCandidate(routeParams));
  }, [dispatch, routeParams]);

  useDeepCompareEffect(() => {
  }, [dispatch, routeParams]);

  if(!candidate){
    return <FuseLoading/>
  }
  return(
    <>
      <Root
        rightSidebarContent={<SidebarContent />}
        header={<ContentHeader pageLayout={pageLayout} />}
        content={<CandidateDetail />}

        ref={pageLayout}
         innerScroll
      />;
    </>
  )
}

export default withReducer('candidateApp', reducer)(withRouter(CandidateApp));
