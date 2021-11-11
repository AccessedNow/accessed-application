import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import { styled } from '@mui/material/styles';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import reducer from './store';
import ContentHeader from './ContentHeader';
import ProductsTable from './ProductsTable';
import SidebarContent from './SidebarContent';
import {getLabels} from "./store/labelsSlice";
import {getFilters} from "./store/filtersSlice";
import {getFolders} from "./store/foldersSlice";

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
    dispatch(getFilters());
    dispatch(getFolders());
    dispatch(getLabels());
  }, [dispatch]);

  return <Root
    leftSidebarContent={<SidebarContent />}
    header={<ContentHeader pageLayout={pageLayout} />}
    content={<ProductsTable pageLayout={pageLayout} />}
    ref={pageLayout}
     innerScroll
  />;
}

export default withReducer('candidatesApp', reducer)(Candidates);
