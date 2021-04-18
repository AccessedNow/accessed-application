import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import {buildPartyAvatarUrl, buildPartyCoverUrl} from 'app/utils/urlHelper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    borderColor: theme.palette.divider
  },
  paper: {
    padding: theme.spacing(2),
    margin: '0',
    borderBottom: `1px solid  ${theme.palette.divider}`,
    '&:last-child': {
      borderBottom: 'none'
    }

  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  listItem: {
    color: 'inherit!important',
    textDecoration: 'none!important',
    height: 40,
    width: 'calc(100% - 16px)',
    borderRadius: '0 20px 20px 0',
    paddingLeft: 24,
    paddingRight: 12,
    '&.active': {
      backgroundColor: theme.palette.secondary.main,
      color: `${theme.palette.secondary.contrastText}!important`,
      pointerEvents: 'none',
      '& .list-item-icon': {
        color: 'inherit'
      }
    },
    '& .list-item-icon': {
      marginRight: 16
    }
  }
}));

function JobListItem(props) {
  const classes = useStyles();
	const {job} = props;

	if(!job){
	  return null;
  }
	return (
    <Paper elevation={0} className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar variant="rounded" className={classes.avatar + " w-48 h-48 mr-12 border"} src={buildPartyAvatarUrl(job.company)} />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography className="font-medium" gutterBottom variant="subtitle1">
                <a href={`/jobs/${job.jobId}`}>{job.title}</a>
              </Typography>
              <Typography variant="body2" gutterBottom>
                <a href={`/company/${job.company.id}`}>{job.company.name}</a> in {job.state}, {job.country}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ID: {job.jobId}
              </Typography>
            </Grid>

          </Grid>
          <Grid item>
            {job.hasSaved ? (
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
              ) : (
              <IconButton aria-label="add to favorites" color="secondary">
                <FavoriteBorderIcon />
              </IconButton>
              )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
	);
}

export default JobListItem;
