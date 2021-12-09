import FusePageSimple from '@fuse/core/FusePageSimple';
import { motion } from 'framer-motion';
import { colors } from '@mui/material';
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
import FeedItem from '../../../components/FeedItem';
import RightSidebarContent from './RightSidebarContent';

import reducer from './store';
import { getHomeFeeds } from './store/feedsSlice';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 0,
    height: 0,
  },
  '& .FusePageSimple-contentWrapper': {
    padding: 0,
    paddingBottom: 80,
    [theme.breakpoints.up('md')]: {
      padding: 16
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
const PostFeed = styled(Card)(({ theme }) => ({

  borderRadius: 0,
  [theme.breakpoints.up('md')]: {
    borderRadius: 4,
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


function HomeFeed(props) {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const pageLayout = useRef(null);
  const user = useSelector(({ auth }) => auth.user);
  const feeds = useSelector(({ homeFeed }) => homeFeed.feeds);

  useEffect(() => {
    dispatch(getHomeFeeds(routeParams));
  }, [dispatch, routeParams]);

  return (
    <>
      <Root
        content={
          <div className="flex flex-col w-full items-center">
            <PostFeed
              variant="outlined"
              className="w-full overflow-hidden rounded-6 mb-32"
            >
              <div className="flex flex-row items-start justify-start p-16">
                {user.data.avatar ? (
                  <Avatar className="md:mx-4" alt="user photo" src={user.data.avatar}/>
                ) : (
                  <Avatar className="md:mx-4">{user.data.displayName[0]}</Avatar>
                )}
                <Input
                className="px-10 py-5 w-full"
                classes={{ root: 'text-14' }}
                placeholder="Write something.."
                rows="1"
                margin="none"
                disableUnderline
              />
              </div>
              <AppBar
                className="card-footer flex flex-row border-t-1"
                position="static"
                color="default"
                elevation={0}
              >
                <div className="flex-1 items-center">
                  <IconButton aria-label="Add photo" size="large">
                    <Icon>photo</Icon>
                  </IconButton>
                  <IconButton aria-label="Mention somebody" size="large">
                    <Icon>person</Icon>
                  </IconButton>
                  <IconButton aria-label="Add location" size="large">
                    <Icon>location_on</Icon>
                  </IconButton>
                </div>

                <div className="p-8">
                  <Button variant="contained" color="primary" size="small" aria-label="post" className="rounded-6">
                    Post
                  </Button>
                </div>
              </AppBar>
            </PostFeed>

            {feeds.data.map((post) => (
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

export default withReducer('homeFeed', reducer)(HomeFeed);
