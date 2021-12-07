import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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
  '& .user-avatar': {
    borderWidth: 6,
    borderColor: '#fff'
  },
}));

function SidebarContent(props) {
  const dispatch = useDispatch();

  return (
    <Container className="">
      <Paper
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        className={clsx('flex flex-col items-center justify-center rounded-0 shadow-none lg:rounded-6 lg:shadow')}
      >
        <div className="cover w-full h-96"></div>
        <Avatar className="user-avatar w-96 h-96 -mt-48 items-center justify-start" src="assets/images/avatars/Abbott.jpg"/>
        <div className="px-16 pb-20 text-center">
          <Typography fontWeight={600} className="text-12 md:text-16">
            Victor Doan
          </Typography>
          <Typography variant="subtitle2" color={'text.secondary'} className="mb-10">
            @victordoan
          </Typography>
          <Typography variant="subtitle2" className="italic">
            “The best way to predict the future is to create it.”
          </Typography>
        </div>
      </Paper>
    </Container>
  );
}

export default SidebarContent;
