import _ from '@lodash';
import history from '@history';
import { emphasize, styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { dateDifference, dateDiff } from '../../utils/helper';



const StyledCardItem = styled(Card)(({ theme }) => ({
  background: 'white',
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
    <StyledCardItem variant="outlined" sx={{ maxWidth: 345 }} className="job-item rounded-8 cursor-pointer" onClick={handleClick}>
      <CardHeader
        action={
          <IconButton size="small" aria-label="add to favorites">
            <FavoriteIcon fontSize="inherit"/>
          </IconButton>
        }
        title=""
        subheader=""
        className="flex pb-0"
      />
      <CardContent className="flex flex-col flex-auto items-center justify-center talign-center m-0 text-center h-160" >
        <Avatar
          sx={{
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'background.default',
          }}
          className="flex items-center justify-center talign-center mb-16 w-64 h-64 rounded-4"
          src={avatar}
          variant="square"
        />
        <Typography variant="h3" className="text-14 font-500 plain-text">
          {props.job.title}
        </Typography>
        <Typography variant="h4" color="text.secondary" className="text-13">
          {props.job.company.name}
        </Typography>
        <Typography variant="body" color="text.secondary" className="text-13">
          {location.join(', ')}
        </Typography>
      </CardContent>
      <CardActions className="flex flex-row justify-between">
        <Typography variant="body2" color="text.secondary" className="flex items-start">
          2d ago
        </Typography>
        <div className="flex items-end">
          {/*<IconButton size="small" aria-label="add to favorites">*/}
            {/*<FavoriteIcon fontSize="inherit"/>*/}
          {/*</IconButton>*/}
        </div>
      </CardActions>

    </StyledCardItem>
  );
}

export default JobCardItem;
