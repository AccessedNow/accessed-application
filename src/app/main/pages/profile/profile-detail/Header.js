import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import PhotoIcon from '@mui/icons-material/Photo';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Ad from "../../../components/Ad";
import MediaAd from "../../../components/MediaAd";
import {followUser} from "./store/profileSlice";

const Root = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.getContrastText(theme.palette.background.default),
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  [theme.breakpoints.down('lg')]: {
    borderRadius: 0
  },
}));

function ProfileHeader(props) {

  const {profile, relationships} = props;

  if (!profile) {
    return null;
  }



  const handleFollow = (event) => {
    dispatch(followUser({id: profile.id, follow: !relationships.relationships.hasFollowed})).then((data) => {
      // setRelationships({
      //   ...relationships,
      //   hasFollowed: !relationships.relationships.hasFollowed
      // });
    });
  };

  return (
    <Root variant='outlined' className="header-wrapper">
      <div className="w-full px-24 pb-48 flex flex-col md:flex-row flex-1 items-center">
        <IconButton aria-label="Upload">
          <PhotoIcon />
        </IconButton>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.1 } }}>
          <Avatar
            sx={{
              borderWidth: 4,
              borderStyle: 'solid',
              borderColor: 'background.default',
            }}
            className="-mt-64  w-128 h-128"
            src={profile.avatar}
          />
        </motion.div>
        <div className="flex flex-col md:flex-row flex-1 items-center justify-between p-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          >
            <Typography
              className="md:px-16 text-24 md:text-32 font-semibold tracking-tight"
              variant="h4"
              color="inherit"
            >
              {profile.firstName + ' ' + profile.lastName}
            </Typography>
            {profile.headline?
              <Typography color="inherit" className="md:px-16 sm:text-14 md:text-16 lg:text-16 tracking-tight">
                {'The best way to predict the future is to create it'}
              </Typography>
              :
              <Typography color="inherit" className="md:px-16 sm:text-14 md:text-16 lg:text-16 tracking-tight">
                {profile.jobTitle} at {profile.experiences[0].employer.name}
              </Typography>
            }

            <Typography color={'text.secondary'} className="md:px-16 sm:text-24 md:text-14 lg:text-14 tracking-tight">
              {profile.primaryAddress.city + ', ' + profile.primaryAddress.country}
            </Typography>
            {relationships &&
            <Typography fontWeight={600} color={'text.secondary'} className="md:px-16 sm:text-24 md:text-14 lg:text-14 tracking-tight">
              {relationships.relationships.noOfFollowers + ' followers'}
            </Typography>
            }
          </motion.div>

          <div className="flex items-center justify-end -mx-4 mt-24 md:mt-0">
            <Button className="mx-8" variant="contained" color="secondary" aria-label="Follow">
              Follow
            </Button>
            <Button variant="contained" color="primary" aria-label="Send Message">
              Send Message
            </Button>
          </div>
        </div>
      </div>
      {/*<Tabs*/}
        {/*value={props.selectedTab}*/}
        {/*onChange={props.handleTabChange}*/}
        {/*indicatorColor="primary"*/}
        {/*textColor="inherit"*/}
        {/*variant="scrollable"*/}
        {/*scrollButtons={false}*/}
        {/*className="w-full px-24 -mx-4 min-h-40"*/}
        {/*classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}*/}
        {/*TabIndicatorProps={{*/}
          {/*children: (*/}
            {/*<Box*/}
              {/*sx={{ bgcolor: 'text.disabled' }}*/}
              {/*className="w-full h-full rounded-full opacity-20"*/}
            {/*/>*/}
          {/*),*/}
        {/*}}*/}
      {/*>*/}
        {/*<Tab*/}
          {/*className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "*/}
          {/*disableRipple*/}
          {/*label="Timeline"*/}
        {/*/>*/}
        {/*<Tab*/}
          {/*className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "*/}
          {/*disableRipple*/}
          {/*label="About"*/}
        {/*/>*/}
        {/*<Tab*/}
          {/*className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "*/}
          {/*disableRipple*/}
          {/*label="Photos & Videos"*/}
        {/*/>*/}
      {/*</Tabs>*/}
    </Root>
  );
}

export default ProfileHeader;
