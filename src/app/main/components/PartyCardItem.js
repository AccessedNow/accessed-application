import _ from '@lodash';
import history from '@history';
import clsx from 'clsx';
import { emphasize, styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { dateDifference, dateDiff } from '../../utils/helper';



const StyledCardItem = styled(Card)(({ theme }) => ({
  borderRadius: 6,
  background: 'white',
  textDecoration: 'none!important',
  '&:hover': {
    color: '#40a9ff',
    boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
  },
  '& .MuiAvatar-colorDefault': {
    background: 'url("assets/images/profile/morain-lake.jpg")!important',
    backgroundSize: 'cover!important',
    backgroundPosition: 'center center!important',
  }
}));

function ProfileItem(props) {
  const dispatch = useDispatch();
  const { profile, avatarSx } = props;
  let avatarCls = [];
  if(avatarSx && avatarSx.height){
    avatarCls.push('-mt-' + (avatarSx.height/2));
  }

  function handleClick(event) {
    if(props.handleClick) {
      props.handleClick();
    }
  }
  const onError = (ev) => {
    ev.target.src = ev.target.fallbackSrc;
  }

  if(!props.profile){
    return null;
  }



  return  (
    <StyledCardItem variant={props.variant?props.variant:null} onClick={handleClick} className="cursor-pointer">
      <CardMedia
        component="img"
        height="96"
        image="assets/images/covers/cover1.png"
        alt={profile.name}
        className="h-96"
      />
      <CardContent className="flex flex-col items-center justify-start">
        {/*<Avatar src={profile.avatar} className="w-96 h-96 rounded-6 -mt-72"/>*/}
        <Avatar imgProps={{ onError: onError }} alt="Remy Sharp" src={profile.avatar} fallbackSrc="assets/images/avatars/Abbot.jpg" className="w-96 h-96 rounded-6 -mt-72" />
        <div className="w-full flex flex-col items-start justify-center py-16 text-center">
          <Typography fontWeight={600} className="text-14">
            {profile.name}
          </Typography>
          <Typography variant="body2" fontWeight={500} className="flex items-start text-12">
            {profile.noOfFollowers} followers
          </Typography>
        </div>
        <Button variant="outlined" size="small" className="w-full p-0 rounded-4">Follow</Button>
      </CardContent>
    </StyledCardItem>
  );
}

export default ProfileItem;
