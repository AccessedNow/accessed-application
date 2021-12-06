import FusePageSimple from '@fuse/core/FusePageSimple';
import { motion } from 'framer-motion';
import withReducer from 'app/store/withReducer';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Header from './Header';
import SidebarContent from './SidebarContent';
import FeedItem from './FeedItem';
import RightSidebarContent from './RightSidebarContent';

import reducer from './store';
import { getUserRecentActivities } from './store/activitiesSlice';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 0,
    height: 0,
  },
  '& .FusePageSimple-contentWrapper': {
    padding: 16,
    paddingBottom: 80,
    [theme.breakpoints.up('sm')]: {
      padding: 24,
    },
  },
  '& .FusePageSimple-content': {
    display: 'flex',
    minHeight: '100%',
  },
  '& .FusePageSimple-sidebar': {
    border: 0,
  },
  '& .FusePageSimple-rightSidebar': {
    width: '100%'
  },
}));


const container = {
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};


function RecentActivity(props) {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const pageLayout = useRef(null);
  const activities = useSelector(({ recentActivity }) => recentActivity.activities);

  useEffect(() => {
    dispatch(getUserRecentActivities(routeParams));
  }, [dispatch, routeParams]);

  return (
    <>
      <Root
        content={
          <div className="flex flex-col w-full items-center">
            {activities.data.map((post) => (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
                className="w-full"
              >
                <FeedItem post={post}/>
              </motion.div>
            ))}
          </div>
        }
        leftSidebarContent={<SidebarContent />}
        rightSidebarContent={
          <RightSidebarContent />
        }
        innerScroll
        ref={pageLayout}
      />
    </>
  );
}

export default withReducer('recentActivity', reducer)(RecentActivity);
