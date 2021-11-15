import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import { styled } from '@mui/material/styles';
import { useDeepCompareEffect } from '@fuse/hooks';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import reducer from './store';
import ContentHeader from './ContentHeader';
import CandidateList from './CandidateList';
import CandidateDrawer from './CandidateDrawer';
import Toolbar from './Toolbar';

import SidebarContent from './SidebarContent';
import {searchCandidates} from "../store/candidatesSlice";

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



function Candidates() {

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
        leftSidebarContent={<SidebarContent />}
        header={<ContentHeader pageLayout={pageLayout} />}
        contentToolbar={<Toolbar />}
        content={<CandidateList />}

        ref={pageLayout}
         innerScroll
      />;
      <CandidateDrawer />
    </>
  )
}

export default withReducer('candidatesApp', reducer)(Candidates);
