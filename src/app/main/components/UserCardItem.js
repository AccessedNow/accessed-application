import _ from '@lodash';
import history from '@history';
import clsx from 'clsx';
import { emphasize, styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import PersonAdd from '@mui/icons-material/PersonAdd';

import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddCircle from '@mui/icons-material/AddCircle';

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


  if(!props.profile){
    return null;
  }

  return  (
    <StyledCardItem variant={props.variant?props.variant:null} onClick={handleClick} className="cursor-pointer">
      <CardMedia
        component="img"
        height="193"
        image={profile.avatar}
        alt={profile.name}
        className="h-192 relative"
      />
      <CardContent className="px-16 relative">
        <div className="flex flex-col">
          <div className="text-right">
            <span className="bg-white">
              <IconButton color="primary" variant="contained" onClick={handleClick} size="large" className=" -mt-48  shadow p-0 bg-white">
                <AddCircle className="text-32" />
              </IconButton>
            </span>
          </div>
          <div className="border-b-1 mb-10 -mt-10">
            <Typography fontWeight={600} className="text-14">
              {profile.firstName + ' ' + profile.lastName}
            </Typography>
            <Typography variant="subtitle2" color={'text.secondary'} className="text-12 mb-10">
              {profile.jobTitle}
            </Typography>
          </div>
          <Typography variant="body2" fontWeight={500} className="text-12">
            {profile.noOfFollowers} followers
          </Typography>
        </div>
      </CardContent>
    </StyledCardItem>
  );
}

export default ProfileItem;
