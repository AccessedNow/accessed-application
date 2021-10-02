import _ from '@lodash';
import { styled } from '@mui/material/styles';
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



const StyledCardItem = styled(Card)(({ theme, completed }) => ({
  ...(completed && {
    background: 'rgba(0,0,0,0.03)',
    '& .job-title, & .job-notes': {
      textDecoration: 'line-through',
    },
    '& a': {
      textDecoration: 'none!important'
    }
  }),
}));

function JobCardItem(props) {
  const dispatch = useDispatch();
  const avatar = props.job.company && props.job.company.avatar?props.job.company.avatar:'';
  if(!props.job || !props.job.company){
    return null;
  }

  return  (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'background.default',
            }}
            className="flex items-center justify-center w-48 h-48"
            src={avatar}
            variant="square"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title=""
        subheader=""
      />
      <CardContent>
        <Link href={`/jobs/view/${props.job.jobId}`}>
          <Typography variant="body">
            {props.job.title}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
          {props.job.company.name}, {props.job.country}
        </Typography>
      </CardContent>
      <CardActions >
        <Typography variant="body2" color="text.secondary">
          2d ago
        </Typography>
        <IconButton size="small" aria-label="add to favorites">
          <FavoriteIcon fontSize="inherit"/>
        </IconButton>
        <IconButton size="small" aria-label="share">
          <ShareIcon fontSize="inherit"/>
        </IconButton>
      </CardActions>

    </Card>
  );
}

export default JobCardItem;
