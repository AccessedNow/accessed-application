import { useEffect, useState } from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Ad from "../../../components/Ad";
import MediaAd from "../../../components/MediaAd";
import {followUser} from "./store/profileSlice";

function MyConnections(props) {

  const {profile, relationships} = props;

  if (!profile || relationships) {
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
  );
}

export default MyConnections;
