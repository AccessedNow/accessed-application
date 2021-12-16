import * as React from 'react';
import qs from 'qs';

import dateFormat from "dateformat";
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
import { withRouter } from 'react-router-dom';
import reducer from "./store";
import {getProfile, followUser, getUserRelationships} from "./store/profileSlice";

import Image from '../../../components/Image';
import Header from './Header';

import ProfileHeader from './ProfileHeader';

import RightSidebarContent from './RightSidebarContent';
import {openNewMemberDialog} from "../../../apps/talent/store/membersSlice";

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-topBg': {
    marginTop: '20px!important',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    background: 'url("assets/images/profile/morain-lake.jpg")!important',
    backgroundSize: 'cover!important',
    backgroundPosition: 'center center!important',
    height: '240px!important',
    minHeight: 240,
    [theme.breakpoints.down('lg')]: {
      height: '240px!important',
      minHeight: 240,
    },
  },
  '& .FusePageSimple-header': {
    background: 'none',
    width: '100%',
    maxWidth: 1120,
    margin: 'auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    aliginItesm: 'flex-start',
    height: 'auto',
    minHeight: 'auto',
    [theme.breakpoints.down('lg')]: {
      height: 240,
      minHeight: 240,
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
    '& .activities': {
      '& .activity-text': {
        display: '-webkit-box',
        '-webkit-line-clamp': '2',
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden'
      },
      '& .activity-image': {
        border: '1px solid #eee',
        backgroundSize: 'cover!important',
        backgroundPosition: 'center center!important',
      }
    }
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

function ProfileDetail(props) {
  const pageLayout = useRef(null);
  const dispatch = useDispatch();
  const routeParams = useParams();
  const [loading, setLoading] = useState(true);
  const [relationships, setRelationships] = useState();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const user = useSelector(({ auth }) => auth.user);
  const profile = useSelector(({ profileDetail }) => profileDetail.profile);
  const params = qs.parse(props.location.search, { ignoreQueryPrefix: true });

  useDeepCompareEffect(() => {
    dispatch(getProfile(routeParams)).then((data) => {

      dispatch(getUserRelationships({id: data.payload.id})).then((response) => {
        setLoading(false);
        setRelationships(response.payload)
      });
    });

  }, [dispatch, routeParams]);

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }




  if (loading) {
    return <FuseLoading />;
  }

  return (
    <Root
      header={params.type==='1'?<Header selectedTab={selectedTab} handleTabChange={handleTabChange  } profile={profile} relationships={relationships}/>:<></>}
      content={
        <div>
          <div>

          </div>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.1 } }}>
            <ProfileHeader profile={profile} relationships={relationships}/>
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
          <Paper variant="outlined" className="activities flex flex-col pt-24 mb-16 rounded-6">
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
                <Grid item xs={6} className="activity-item mb-20">
                  <div className="flex flex-row">

                    <div className="activity-image w-64 h-64 rounded-6" style={{'background-image': "assets/images/cover/cover1.png"}}>
                      <Image className="w-full h-64" src={activity.dataResource.resource.imageUrl} fallbackSrc="assets/images/cover/cover1.png" />
                    </div>
                    <div  className="flex flex-col w-full mx-24 pb-20">
                      <div>
                        <Typography variant="h6" fontWeight={600} className="activity-text text-14">
                          {activity.dataResource.text}
                        </Typography>
                      </div>
                      <Typography variant="caption" className="text-12">
                        {user.data.name} {activity.type==='POST?'? ' posted this':''}
                      </Typography>
                      <Typography variant="caption" className="text-12">
                        {activity.dataResource.noOfComments?`${activity.dataResource.noOfComments} commented`:'' } - {activity.dataResource.noOfReactions?`${activity.dataResource.noOfReactions} reacted`:'' }
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
                    <Avatar variant="square" className="w-64 h-64 rounded-4" src={exp.employer.avatar}/>
                    <div  className={clsx('flex flex-col w-full mx-24 pb-20', index===(profile.experiences.length-1)?'':'border-b-1')} >
                      <div>
                        <Typography variant="body2" fontWeight={600}>
                          {exp.employmentTitle}
                        </Typography>
                      </div>
                      <Typography variant="body2">
                        {exp.employer.name}
                      </Typography>
                      <Typography variant="body2">
                        {exp.fromDate?dateFormat(new Date(exp.fromDate), "mmm yyyy"): ''} - {exp.thruDate?dateFormat(new Date(exp.thruDate), "mmm yyyy"):exp.isCurrent?'Present':''}
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
                    <Avatar alt={edu.institute.name} variant="square" className="w-64 h-64 rounded-4" src={edu.institute.avatar}/>
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
                    <Avatar variant="square" className="w-64 h-64 rounded-4" src={interest.avatar}/>
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

export default withReducer('profileDetail', reducer)(withRouter(ProfileDetail));
