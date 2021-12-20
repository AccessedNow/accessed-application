import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { colors } from '@mui/material';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import DraftsIcon from '@mui/icons-material/Drafts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import InboxIcon from '@mui/icons-material/Inbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';
import SchoolIcon from '@mui/icons-material/School';

import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';

import { useTheme } from '@mui/material/styles';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled('div')(({ theme }) => ({
  paddingTop: 16,
  '& .cover': {
    background: 'url("assets/images/covers/cover6.png")',
    backgroundSize: 'cover!important',
    backgroundPosition: 'center center!important',
  },
  '& .avatar': {
    background: 'url("assets/images/avatars/chan.jpeg")',
    backgroundSize: 'cover!important',
    backgroundPosition: 'center center!important',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  '& .user-avatar': {
    borderWidth: 6,
    borderColor: '#fff'
  },
  '& .user-detail': {
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: colors.blue["600"],
    // backgroundColor: '#EAFFFD'
    // backgroundColor: '#5AA9E6',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
}));

function SidebarContent(props) {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Container className="">
      <Paper
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        className={clsx('flex flex-col items-center justify-center rounded-0 shadow-none lg:rounded-6 lg:shadow')}
      >
        <div className="cover w-full h-72"></div>
        <Avatar className="user-avatar w-96 h-96 -mt-48 items-center justify-start" src="assets/images/avatars/Abbott.jpg"/>
        <div className="px-16 pb-20 text-center">
          <Typography fontWeight={600} className="text-12 md:text-16">
            Victor Doan
          </Typography>
          <Typography variant="subtitle2" color={'text.secondary'} className="mb-10">
            @victordoan
          </Typography>
        </div>
        <div className="flex flex-col w-full px-16 py-10 border-t-1">
          <div className="flex flex-row justify-between">
            <Typography variant="caption" fontWeight={600} color={"text.secondary"} className="">
              Who viewed your profile
            </Typography>
            <Typography variant="caption" fontWeight={600} color={"text.secondary"} className="">
              64
            </Typography>
          </div>
          <div className="flex flex-row justify-between">
            <Typography variant="caption" fontWeight={600} color={"text.secondary"} className="">
              Views of your post
            </Typography>
            <Typography variant="caption" fontWeight={600} color={"text.secondary"} className="">
              154
            </Typography>
          </div>
        </div>
        <div className="flex flex-col w-full px-16 py-10 border-t-1">
          <Typography variant="caption" color={"text.secondary"} className="">
            Accessed exclusive tools and insights
          </Typography>
          <Typography variant="caption" fontWeight={600} className="">
            Try Premium Free for 1 Month
          </Typography>
        </div>
        <div className="flex flex-col w-full px-16 py-10 border-t-1">
          <Typography variant="caption" color={"text.secondary"} className="">
            Saved items
          </Typography>
        </div>
      </Paper>
      <Paper
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        className={clsx('flex flex-col items-center justify-center mt-20 rounded-0 shadow-none lg:rounded-6 lg:shadow')}
      >
        <div className="flex flex-row justify-between w-full py-12 px-16 border-b-1">
          <Typography className="text-10 md:text-12">
            About
          </Typography>
        </div>
        <div className="w-full">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon size="small">
                  <WorkIcon size="inherit" />
                </ListItemIcon>
                <ListItemText primary="UI/UX Designer at Apple" className="text-14" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon  size="small">
                  <WorkIcon size="inherit"/>
                </ListItemIcon>
                <ListItemText primary="Former UI Designer at Tesla" className="text-14" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon  size="small">
                  <SchoolIcon size="inherit" />
                </ListItemIcon>
                <ListItemText primary="Studied Art at Drexel University" className="text-14" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <div className="flex flex-row justify-between w-full p-16">
          <Button  variant="contained" color="primary" size="small" aria-label="follow" className="w-full rounded-6 mr-5">
            <Typography className="">Follow</Typography>
          </Button>
          <Button  variant="outlined" color="inherit" size="small" aria-label="follow" className="w-full rounded-6">
            <Typography className="">Connect</Typography>
          </Button>
        </div>
      </Paper>
    </Container>
  );
}

export default SidebarContent;
