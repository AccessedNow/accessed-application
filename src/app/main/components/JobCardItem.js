import _ from '@lodash';
import history from '@history';
import { Link } from 'react-router-dom';
import { emphasize, styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Paper';
import Paper from '@mui/material/Typography';

import { useDispatch, useSelector } from 'react-redux';
import { dateDifference, dateDiff } from '../../utils/helper';
import CompanyAvatar from './CompanyAvatar';



const StyledCardItem = styled(Paper)(({ theme }) => ({
  background: 'white',
  borderWidth: 1,
  borderColor: theme.palette.background.paper,
  textDecoration: 'none!important',
  '&:hover': {
    color: '#40a9ff',
    boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
  },
}));

function JobCardItem(props) {
  const dispatch = useDispatch();
  const avatar = props.job.company && props.job.company.avatar?props.job.company.avatar:'';
  let location = [];

  if(props.job.city){
    location.push(props.job.city);
  }
  if(props.job.state){
    location.push(props.job.state);
  }
  if(props.job.country){
    location.push(props.job.country);
  }


  if(!props.job || !props.job.company){
    return null;
  }

  const handleClick = (event) => {
    history.push({
      pathname: `/jobs/view/${props.job.jobId}`,
      state: { fromDashboard: true }
    });
  };

  return  (
    <StyledCardItem role="button" component={Link} variant="outlined"
      to={`/jobs/view/${props.job.jobId}`}
      sx={{ maxWidth: 345 }}
      className="flex flex-col job-item rounded-6 p-16 cursor-pointer">
      <div className="flex flex-row justify-between items-start justify-start mb-16">
        <CompanyAvatar
            sx={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'background.default',
            }}
            src={avatar}
            variant="square"
            className="w-64 h-64 rounded-4"
          />
        <IconButton size="small" aria-label="add to favorites">
          <FavoriteIcon fontSize="inherit"/>
        </IconButton>
      </div>


      <div className="flex flex-col flex-auto items-start justify-start m-0  h-160" >
        <div>
          <Typography variant="h3" className="text-14 font-500 plain-text">
            {props.job.title}
          </Typography>
          <Typography variant="h4" color="text.secondary" className="text-13">
            {props.job.company.name}
          </Typography>
          <Typography variant="body" color="text.secondary" className="text-13">
            {location.join(', ')}
          </Typography>
        </div>
        {props.job.noOfApplied &&
        <div className="flex flex-row items-center justify-start mt-12">
          <IconButton size="small" aria-label="clock">
            <AccessTimeIcon fontSize="inherit"/>
          </IconButton>
          <Typography variant="body2" color="text.secondary" className="flex">
            Be an early applicant
          </Typography>
        </div>
        }
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex">
          <Typography variant="body2" color="text.secondary" className="flex items-start">
            2d ago
          </Typography>
        </div>
        <div className="flex">
          <IconButton size="small" aria-label="more">
            <MoreVertIcon fontSize="inherit" />
          </IconButton>
        </div>
      </div>

    </StyledCardItem>
  );
}

export default JobCardItem;
