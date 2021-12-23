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
import ArticleDialog from '../dialogs/article/ArticleDialog';

import reducer from './store';
import { getHomeFeeds } from './store/homeSlice';
import {openNewArticleDialog} from "./store/homeSlice";

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


function Home(props) {
  const dispatch = useDispatch();
  const pageLayout = useRef(null);
  const user = useSelector(({ auth }) => auth.user);
  const home = useSelector(({ homePage }) => homePage.home);

  useEffect(() => {
    dispatch(getHomeFeeds());
  }, [dispatch]);

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
                onClick={(ev) => dispatch(openNewArticleDialog())}
              />
              </div>
              <AppBar
                className="card-footer flex flex-row border-t-1"
                position="static"
                color="inherit"
                elevation={0}
              >
                <div className="flex flex-row flex-1 items-center justify-between px-40">
                  <Button size="large" variant="text" className="rounded-4"  startIcon={ <Icon color="primary">photo</Icon>}>
                    <Typography fontWeight={600} color={"text.secondary"}>Photo</Typography>
                  </Button>
                  <Button size="large" variant="text" className="rounded-4" startIcon={ <Icon color="warning" >person</Icon>}>
                    <Typography fontWeight={600} color={"text.secondary"}>Job</Typography>
                  </Button>
                  <Button size="large" variant="text" className="rounded-4" startIcon={ <Icon color="success" >location_on</Icon>}>
                    <Typography fontWeight={600} color={"text.secondary"}>Feeling</Typography>
                  </Button>
                </div>

              </AppBar>
            </PostFeed>

            {home.data.map((post) => (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
                className="w-full"
              >
                <FeedItem post={post}/>
              </motion.div>
            ))}
            <ArticleDialog />
          </div>
        }
        leftSidebarContent={<SidebarContent />}
        rightSidebarContent={
          <RightSidebarContent />
        }

        sidebarInner
        ref={pageLayout}
      />
    </>
  );
}

export default withReducer('homePage', reducer)(Home);
