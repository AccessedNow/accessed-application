import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseUtils from '@fuse/utils';
import _ from '@lodash';

import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import JobListItem from '../../../../../components/JobListItem/JobListItem';
import {selectFiles} from "./store/jobsSearchSlice";
import {setSelectedItem} from "./store/filesSlice";
import {makeStyles} from "@material-ui/core/styles/index";

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


function SearchResult(props) {
  const dispatch = useDispatch();
  const results = useSelector(selectFiles);
  const classes = useStyles();
  const selectedItemId = useSelector(({ jobWorkflowPage }) => jobWorkflowPage.results.selectedItemId);

  // const classes = useStyles();
	if(results & results.length && selectedItemId==null){

    dispatch(setSelectedItem(results[0].jobId));
	}

	if (results.length === 0) {
		return (
			<FuseAnimate delay={100}>
				<div className="flex flex-1 items-center justify-center h-full">
					<Typography color="textSecondary" variant="h5">
						There are no jobs!
					</Typography>
				</div>
			</FuseAnimate>
		);
	}

	return (
	  <div>

      <List className="w-full p-0">
        <FuseAnimateGroup
          enter={{
            animation: 'transition.slideUpBigIn'
          }}
        >
          {results.map(job => (
            <div key={job.jobId} onClick={ev => {dispatch(setSelectedItem(job.jobId)); props.pageLayout.current.toggleRightSidebar()}}>
              <Paper key={job.jobId} elevation={0} className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography className="font-medium" gutterBottom variant="subtitle1">
                          {job.title}
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
              <Divider />
            </div>
          ))}
        </FuseAnimateGroup>
      </List>
    </div>
	);
}

export default SearchResult;
