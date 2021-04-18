import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
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
    borderColor: theme.palette.divider
  },
  card: {
    borderWidth: '1px',
    borderColor: theme.palette.divider,
    height: '230px'
  }
}));

function JobCard(props) {
  const classes = useStyles();
	const {job} = props;

	return (
    <Card elevation={0} className={classes.card}>
      <CardHeader
        avatar={
          <a href={`/company/${job.company.id}`}><Avatar variant="rounded" className={classes.avatar + " w-48 h-48 mr-12 border"} src={buildPartyAvatarUrl(job.company)} /></a>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title=""
        subheader=""
      />
      <CardMedia
        image="/material-ui-static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography className="font-medium" variant="body2" color="textSecondary" component="p">
          <a href={`/jobs/${job.jobId}`}>{job.title}</a>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <a href={`/company/${job.company.id}`}>{job.company.name}</a>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {job.city}, {job.country}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="textSecondary" component="p">
          9 hours ago
        </Typography>
      </CardActions>
    </Card>
	);
}

export default JobCard;
