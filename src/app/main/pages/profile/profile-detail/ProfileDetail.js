import * as React from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';

import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CheckIcon from '@mui/icons-material/Check';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Box from '@mui/material/Box';

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import withReducer from 'app/store/withReducer';
import reducer from "./store";
import {getProfile, followUser, getUserRelationships} from "./store/profileSlice";

import RightSidebarContent from './RightSidebarContent';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 36,
    height: 36,
    background: 'none',
    [theme.breakpoints.up('lg')]: {
      minHeight: 36,
      height: 36,
    },
  },
  '& .FusePageSimple-wrapper': {
    marginTop: 20,
    minHeight: 0,
    // width: '100%'
    margin: 'auto',
    width: 1120,
  },

  '& .FusePageSimple-content': {
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',

  },
  '& .FusePageSimple-content': {
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    '& .profile-header': {
      background: 'url("assets/images/profile/morain-lake.jpg")!important',
      backgroundSize: 'cover!important',
      backgroundPosition: 'center center!important',
      height: 320,
      minHeight: 320,
      [theme.breakpoints.down('lg')]: {
        height: 240,
        minHeight: 240,
      },
    },
  },

  '& .FusePageSimple-toolbar': {
    width: '100%',
    maxWidth: 1120,
    margin: 'auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'auto',
    height: 'auto',
    aliginItesm: 'flex-start',
  },
  '& .FusePageSimple-sidebar': {
    // width: 360
  },
  '& .FusePageSimple-sidebarContent': {
  },
  '& .FusePageSimple-rightSidebar': {
    width: 288,
    marginLeft: 20,
    border: 'none',
  },
}));

function ProfileDetail() {
  const pageLayout = useRef(null);
  const dispatch = useDispatch();
  const routeParams = useParams();
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [relationships, setRelationships] = useState();
  const [tabIndex, setTabIndex] = React.useState(0);
  const profile = useSelector(({ profileDetail }) => profileDetail.profile);


  useDeepCompareEffect(() => {
    dispatch(getProfile(routeParams)).then((data) => {
      setLoading(false);
      dispatch(getUserRelationships({id: data.payload.id})).then((response) => {
        setRelationships(response.payload)
      });
    });

  }, [dispatch, routeParams]);



  const handleFollow = (event) => {
    dispatch(followUser(user.id))
  };

  if (loading) {
    return <FuseLoading />;
  }

  return (
    <Root
      header={<></>}
      content={
        <div>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.1 } }}>
            <Card variant="outlined" className="mb-20 rounded-8 md:rounded-0 lg:rounded-0">
              <CardMedia
                component="img"
                height="192"
                image="assets/images/profile/morain-lake.jpg"
                className="h-192"
              />
              <CardContent>
                <div className="w-full px-16 flex flex-col md:flex-col flex-1">
                  <Avatar
                    sx={{
                      borderWidth: 1,
                      borderStyle: 'solid',
                      borderColor: 'background.default',
                    }}
                    className="w-128 h-128 -mt-96"
                    src={profile.avatar}
                  />
                  <div className="flex flex-col md:flex-col flex-1 mt-16 mb-10">
                    <Typography color="inherit"
                      className="md:px-0 sm:text-24 md:text-24 lg:text-24 font-semibold tracking-tight">
                      {profile.name}
                    </Typography>
                    {profile.jobTitle &&
                      <Typography color="inherit"
                        className="md:px-0 sm:text-14 md:text-16 lg:text-16 tracking-tight">
                        {profile.jobTitle}
                      </Typography>
                    }
                    {profile.headline &&
                      <Typography color={'text.secondary'}
                        className="md:px-0 sm:text-24 md:text-14 lg:text-14 tracking-tight">
                        {profile.headline}
                      </Typography>
                    }

                    <Typography color={'text.secondary'} className="md:px-0 sm:text-24 md:text-14 lg:text-14 tracking-tight">
                      {profile.primaryAddress.city + ', ' + profile.primaryAddress.country}
                    </Typography>
                    {relationships &&
                      <Typography color={'text.secondary'} className="md:px-0 sm:text-24 md:text-14 lg:text-14 tracking-tight">
                        {relationships.relationships.noOfFollowers + ' followers'}
                      </Typography>
                    }
                  </div>
                  <div className="flex">
                    {relationships && relationships.hasFollowed ?
                      <Button variant="outlined" size="small"  className="rounded-6" startIcon={<CheckIcon />}>
                        Following
                      </Button>
                      :
                      <Button variant="filled" size="small" className="rounded-6 border-1" startIcon={<AddIcon />} onClick={handleFollow}>
                        Follow
                      </Button>
                    }

                  </div>
                </div>
              </CardContent>
              <CardActions className="px-0 pb-0">
              </CardActions>
            </Card>
          </motion.div>
        </div>
      }
      rightSidebarContent={
        <RightSidebarContent />
      }
      sidebarInner
      ref={pageLayout}

    />
  );
}

export default withReducer('profileDetail', reducer)(ProfileDetail);
