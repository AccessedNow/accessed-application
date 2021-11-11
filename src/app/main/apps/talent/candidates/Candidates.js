import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import { styled } from '@mui/material/styles';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import reducer from './store';
import ProductsHeader from './ProductsHeader';
import ProductsTable from './ProductsTable';
import SidebarContent from './SidebarContent';
import {getLabels} from "./store/labelsSlice";
import {getFilters} from "./store/filtersSlice";
import {getFolders} from "./store/foldersSlice";

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 0,
    height: 0,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 0,
      height: 0,
    },
  },
  '& .FusePageCarded-content': {
    display: 'flex',
  },
  '& .FusePageCarded-contentCard': {
    overflow: 'hidden',
  },
  '& tr': {
    '& .MuiTableCell-root': {
      border: 'none'
    },

    '.cell-wrapper': {
      height: '100%',
    },

    '& > :first-child': {
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6
    },
    '& > :last-child': {
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6
    },
    '& > :n-child': {
      height: 72
    }
  },
  '& tr:hover': {
    '& .MuiTableCell-root': {
      backgroundColor: '#eee'
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
     content={<ProductsTable pageLayout={pageLayout} />}
    ref={pageLayout}
     innerScroll
  />;
}

export default withReducer('candidatesApp', reducer)(Candidates);
