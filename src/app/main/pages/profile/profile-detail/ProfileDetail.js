import * as React from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CheckIcon from '@mui/icons-material/Check';
import Grid from '@mui/material/Grid';

import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import withReducer from 'app/store/withReducer';
import reducer from "./store";
import {getProfile, followUser, getUserRelationships} from "./store/profileSlice";

import RightSidebarContent from './RightSidebarContent';
import {openNewMemberDialog} from "../../../apps/talent/store/membersSlice";

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 0,
    height: 0,
    background: 'none',
    [theme.breakpoints.up('lg')]: {
      minHeight: 0,
      height: 0,
    },
  },
  '& .FusePageSimple-wrapper': {

    minHeight: 0,
    // width: '100%'
    margin: 'auto',
    marginTop: 20,
    width: '100%',
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
  const user = useSelector(({ auth }) => auth.user);
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
    dispatch(followUser({id: profile.id, follow: !relationships.relationships.hasFollowed})).then((data) => {
      // setRelationships({
      //   ...relationships,
      //   hasFollowed: !relationships.relationships.hasFollowed
      // });
    });
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
            <Card variant="outlined"  className="mb-20 rounded-8 md:rounded-0 lg:rounded-0">
              <CardMedia
                component="img"
                height="192"
                image="assets/images/profile/morain-lake.jpg"
                className="h-192"
              />
              <CardContent>
                <div className="w-full px-8 flex flex-col md:flex-col flex-1">
                  <div className="flex flex-row justify-between">
                    <Avatar
                    sx={{
                      borderWidth: 1,
                      borderStyle: 'solid',
                      borderColor: 'background.default',
                    }}
                    className="w-128 h-128 -mt-96"
                    src={profile.avatar}
                  />
                    <div className="flex">
                      {relationships && relationships.hasFollowed ?
                        <Button variant="outlined" size="small"  className="rounded-20 py-0" startIcon={<CheckIcon />}>
                          Following
                        </Button>
                        :
                        <Button variant="contained" size="small" className="rounded-20 py-0" startIcon={<AddIcon />} onClick={handleFollow}>
                          Follow
                        </Button>
                      }
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-col flex-1 mt-16 mb-10">
                    <Typography color="inherit"
                      className="md:px-0 sm:text-24 md:text-24 lg:text-24 font-semibold tracking-tight">
                      {profile.name}
                    </Typography>

                    {profile.headline?
                      <Typography color="inherit" className="md:px-0 sm:text-14 md:text-16 lg:text-16 tracking-tight">
                        {'The best way to predict the future is to create it'}
                      </Typography>
                      :
                      <Typography color="inherit" className="md:px-0 sm:text-14 md:text-16 lg:text-16 tracking-tight">
                        {profile.jobTitle} at {profile.experiences[0].employer.name}
                      </Typography>
                    }

                    <Typography color={'text.secondary'} className="md:px-0 sm:text-24 md:text-14 lg:text-14 tracking-tight">
                      {profile.primaryAddress.city + ', ' + profile.primaryAddress.country}
                    </Typography>
                    {relationships &&
                      <Typography fontWeight={600} color={'text.secondary'} className="md:px-0 sm:text-24 md:text-14 lg:text-14 tracking-tight">
                        {relationships.relationships.noOfFollowers + ' followers'}
                      </Typography>
                    }
                  </div>

                </div>
              </CardContent>
              <CardActions className="px-0 pb-0">
              </CardActions>
            </Card>
          </motion.div>
          <Paper variant="outlined" className="flex flex-col p-24 mb-16 rounded-6">
            <div className="flex flex-row justify-between">
              <Typography variant="h6" gutterBottom fontWeight={500} className="mb-20">
                Profile Strength
              </Typography>
              <IconButton aria-label="Add" variant="outlined" size="small" className="rounded-32">
                <AddIcon />
              </IconButton>
            </div>
            <LinearProgress variant="determinate" value={65} />
          </Paper>

          {profile.about &&
          <Paper variant="outlined" className="flex flex-col p-24 mb-16 rounded-6">
            <Typography variant="h6" gutterBottom fontWeight={500} className="mb-20">
              About
            </Typography>
            <Typography variant="p">
              {profile.about}
            </Typography>
          </Paper>
          }

          {relationships && relationships.activities.length &&
          <Paper variant="outlined" className="flex flex-col pt-24 mb-16 rounded-6">
            <div className="flex flex-col px-24">
              <Typography variant="h6" fontWeight={500}>
                Activity
              </Typography>
              <Typography variant="caption" color={'text.secondary'} gutterBottom className="mb-20">
                {relationships.relationships.noOfFollowers} followers
              </Typography>
            </div>
            <Grid container justifyContent="flex-start" className="px-24 mb-20">
              {relationships.activities.map((activity, index)=> (
                <Grid item xs={6} className="mb-20">
                  <div className="flex flex-row">
                    <img className="w-64 h-64 rounded-6" src={activity.image}/>
                    <div  className="flex flex-col w-full mx-24 pb-20">
                      <div>
                        <Typography variant="h6" fontWeight={600} className="text-14">
                          {activity.name}
                        </Typography>
                      </div>
                      <Typography variant="caption" className="text-12">
                        {user.data.name} {activity.type==='POST?'? ' posted this':''}
                      </Typography>
                      <Typography variant="caption" className="text-12">
                        {activity.reactions.like?`${activity.reactions.like} liked`:'' } - {activity.reactions.share?`${activity.reactions.share} shared`:'' }
                      </Typography>

                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
            <div lassName="w-full border-t-1">
              <Button className="w-full">
                See all
              </Button>
            </div>
          </Paper>
          }



          <Paper variant="outlined" className="flex flex-col py-24 mb-16 rounded-6">
            <div className="border-b-1 px-24">
              <div className="flex flex-row justify-between">
                <Typography variant="h6" gutterBottom fontWeight={500} className="mb-20">
                  Experiences
                </Typography>
                <IconButton aria-label="Add" variant="contained" size="small" className="rounded-32 p-0">
                  <AddIcon />
                </IconButton>
              </div>
              <div className="flex flex-col">
                {profile.experiences.map((exp, index)=> (
                  <div className="flex flex-row mb-20">
                    <Avatar variant="square" className="w-64 h-64 rounded-6" src={exp.employer.avatar}/>
                    <div  className={clsx('flex flex-col w-full mx-24 pb-20', index===(profile.experiences.length-1)?'':'border-b-1')} >
                      <div>
                        <Typography variant="body2" fontWeight={600}>
                          {exp.employmentTitle}
                        </Typography>
                      </div>
                      <Typography variant="body2">
                        {exp.employer.name}
                      </Typography>
                      <Typography variant="body2" color={'text.secondary'}>
                        {exp.city + ', ' + exp.country}
                      </Typography>
                      {exp.description &&
                      <Typography variant="body2" className="mt-14">
                        {exp.description}
                      </Typography>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-24">
              <div className="flex flex-row justify-between">
                <Typography variant="h6" gutterBottom fontWeight={500} className="mb-20">
                  Educations
                </Typography>
                <IconButton aria-label="Add" variant="outlined" size="small" className="rounded-32">
                  <AddIcon />
                </IconButton>
              </div>
              <div className="flex flex-col">
                {profile.educations.map((edu)=> (
                  <div className="flex flex-row mb-20 ">
                    <Avatar variant="square" className="w-64 h-64" src={edu.institute.avatar}/>
                    <div className="flex flex-col w-full mx-24 pb-20 border-b-1">
                      <div>
                        <Typography variant="body2" fontWeight={600}>
                          {edu.institute.name}
                        </Typography>
                      </div>
                      {edu.degree &&
                      <Typography variant="body2">
                        {edu.degree + ' - '}
                      </Typography>
                      }
                      <Typography variant="body2" color={'text.secondary'}>
                        {edu.city + ', ' + edu.country}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Paper>
          {relationships && relationships.interests &&
          <Paper variant="outlined" className="flex flex-col pt-24 mb-16 rounded-6">
            <Typography variant="h6" gutterBottom fontWeight={500} className="px-24 mb-20">
              Interests
            </Typography>
            <Grid container justifyContent="flex-start" className="px-24 mb-20">
              {relationships.interests.map((interest, index)=> (
                <Grid item xs={6} className="mb-20">
                  <div className="flex flex-row">
                    <Avatar variant="square" className="w-64 h-64 rounded-6" src={interest.avatar}/>
                    <div  className="flex flex-col w-full mx-24 pb-20">
                      <div>
                        <Typography variant="body2" fontWeight={600}>
                          {interest.name}
                        </Typography>
                      </div>
                      {interest.noOfFollowers &&
                      <Typography variant="body2">
                        {interest.noOfFollowers} followers
                      </Typography>
                      }
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
            <div lassName="w-full border-t-1">
              <Button className="w-full">
                See all
              </Button>
            </div>
          </Paper>
          }

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
