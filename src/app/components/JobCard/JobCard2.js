import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import {buildPartyAvatarUrl, buildPartyCoverUrl} from 'app/utils/urlHelper';


const useStyles = makeStyles((theme) => ({
  avatar: {
    borderColor: theme.palette.divider,
    margin: '0 auto'
  },
  card: {
    borderWidth: '1px',
    borderColor: theme.palette.divider,
    // height: '330px'
  },
  ellipses: {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    boxOrient: 'vertical',
    webkitBoxOrient: 'vertical'
  },
}));

function JobCard2(props) {
  const classes = useStyles();
	const {job} = props;

	return (
    <Card elevation={0} className={props.className + ' ' + classes.card + ' justify-items-stretch'}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title=""
        subheader=""
        className="pb-0"
      />
      <CardMedia
        image="/material-ui-static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent className="py-0 justify-center items-center" alignItems="center">
        <a href={`/company/${job.company.id}`}><Avatar variant="rounded" className={classes.avatar + " w-96 h-96 m-"} src={buildPartyAvatarUrl(job.company)} /></a>
        <div className="p-24 text-center">
          <Typography className="font-medium" variant="body2" component="p" className={classes.ellipses + " mb-8"}>
            <a  color="textPrimary" href={`/jobs/${job.jobId}`}>{job.title}</a>
          </Typography>
          <span></span>
          <Typography variant="body2" color="textSecondary" component="p">
            <a href={`/company/${job.company.id}`}>{job.company.name}</a>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {job.city + ", " + job.country}
          </Typography>
        </div>
      </CardContent>
      <CardActions className="p-12 border-t-1">
        <div className="flex w-full">
          <Typography variant="body2" color="textSecondary" component="p" className="flex flex-1">
            9 hours ago
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="flex">
            {job.noOfApplied? job.noOfApplied  + ' applied' : 'Be the first' }
          </Typography>
        </div>
      </CardActions>
    </Card>
	);
}

export default JobCard2;
