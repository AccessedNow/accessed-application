import AppBar from '@material-ui/core/AppBar';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import { getPartyFollowers } from './store/followerSlice';
import {buildPartyAvatarUrl} from 'app/utils/urlHelper';

import feedService from 'app/services/feedService';


function Followers(props) {
  const dispatch = useDispatch();
  const [followers, setFollowers] = useState(null);

  console.log('props', props)
  useEffect(() => {

    if(props) {
      // feedService.getPartyFollowers(props.id, props.partyType, 0, 20)
      //   .then(res => {
      //     setFollowers(res)
      //   });

    }

  }, [props]);

  if(!followers){
    return null;
  }

	return (
    <Card className="w-full rounded-4">
      <AppBar position="static" elevation={0}  className="bg-transparent">
        <Toolbar className="px-8">
          <Typography variant="subtitle1" color="primary" className="flex-1 px-12">
            Followers
          </Typography>
          <Button className="normal-case" color="primary" size="small">
            <ArrowRightAlt />
          </Button>
        </Toolbar>
      </AppBar>
      <CardContent className="flex flex-wrap p-8">
        {followers.content.map(follower => (
          <a href={`/user/${follower.id}`}>
          <img
            key={follower.id}
            className="w-56  m-4 rounded-full block"
            src={buildPartyAvatarUrl(follower)}
            alt={follower.name}
          />
          </a>
        ))}
      </CardContent>
    </Card>

  );
}

export default Followers;
