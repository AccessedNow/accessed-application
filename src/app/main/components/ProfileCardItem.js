import _ from '@lodash';
import history from '@history';
import clsx from 'clsx';
import { emphasize, styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
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



const StyledItem = styled('div')(({ theme }) => ({

  textDecoration: 'none!important',
  '&:hover': {
    color: '#40a9ff',
    boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
  },
}));

function ProfileCardItem(props) {
  const dispatch = useDispatch();
  const { profile, avatarSx } = props;
  const name = profile.partyType==='PERSON'? profile.firstName + ' ' + profile.lastName:profile.name;

  let avatarCls = [];
  if(avatarSx && avatarSx.height){
    avatarCls.push('-mt-' + (avatarSx.height/2));
  }

  function handleClick(event) {
    if(props.handleClick) {
      props.handleClick();
    }
  }


  if(!profile){
    return null;
  }

  return  (
    <StyledItem onClick={handleClick} className="flex flex-col cursor-pointer">
      <div className="p-20 border-b-1">
        <Avatar
          src={profile.avatar}
          alt={name}
          className={clsx("w-72 h-72", profile.partyType!=='PERSON'?'rounded-4':'')}
        />
        <Box sx={{ flexGrow: 1 }} className="flex flex-col justify-between min-h-96 mt-6">
          <div>
            <Typography fontWeight={600} className="text-14">
              {name}
            </Typography>
            {profile.partyType === 'PERSON' ?
              <Typography variant="subtitle2" color={'text.secondary'} className="text-12 mb-10">
                {profile.jobTitle}
              </Typography>
              :
              <Typography variant="subtitle2" color={'text.secondary'} className="text-12 mb-10">
                {profile.industry.name}
              </Typography>
            }
          </div>
          <Typography variant="body2" fontWeight={500} className="text-12">
            {profile.noOfFollowers} followers
          </Typography>
        </Box>
      </div>
      {profile.hasFollowed ?
        <Button color="secondary" startIcon={<CheckIcon/>} variant="text" className="flex-grow-0">
          Following
        </Button>
        :
        <Button color="secondary" variant="text" className="flex-grow-0">
          Follow
        </Button>
      }
    </StyledItem>
  );
}

export default ProfileCardItem;
