import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import AppBar from '@material-ui/core/AppBar';
import Collapse from '@material-ui/core/Collapse';

import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import FollowIcon from '@material-ui/icons/Add';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {buildPartyAvatarUrl, buildPartyCoverUrl} from 'app/utils/urlHelper';
import feedService from 'app/services/feedService';

const useStyles = makeStyles(theme => ({
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
	},
  avatar: {
  },
  addButton: {
	  border: `1px solid ${theme.palette.secondary.dark}`,
    padding: '4px'
  },
  expand: {
    width: '100%',
    textAlign: 'center'
  },
  expandOpen: {
  }
}));

function LinkedPages(props) {
  const routeParams = useParams();
	const classes = useStyles(props);
  const [pages, setPages] = useState(null);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect((params) => {
    feedService.getPartyPages(props.id, props.type)
      .then(res => {
        setPages(res)
      });
  }, [routeParams]);

	if(!pages || (pages && pages.length==0)){
	  return null;
  }

	return (
    <Card className="rounded-4">
      <AppBar position="static" elevation={0} className="bg-transparent">
        <Toolbar className="px-8">
          <Typography variant="subtitle1" color="primary" className="flex-1 px-12">
            Affiliated Pages
          </Typography>

        </Toolbar>
      </AppBar>

      <CardContent className="p-0">
        <List className="p-0">
          {pages.content.map((page, idx) => (
            <div>
              {idx<=4 && (
                <ListItem key={page.id} className="px-12">
                  <a href={`/page/${page.id}`}>
                  {page.avatar ? (
                    <Avatar variant="rounded" className={classes.avatar + " w-48 h-48 mr-12 border"} src={buildPartyAvatarUrl(page)} />
                  ) : (
                    <Avatar variant="rounded" className={classes.avatar + " w-48 h-48 mr-12 border"} src="" />
                  )}
                  </a>
                  <ListItemText className="pr-48">
                    <div className="">
                      <Typography
                        className="font-medium text-15"
                        display="block"
                        color="primary"
                        paragraph={false}
                        variant="h6"
                      >
                        <a href={`/page/${page.id}`}>{page.name}</a>
                      </Typography>
                      <Typography
                        paragraph={true}
                        display="block"
                        className=""
                      >
                        {page.headLine}
                      </Typography>
                    </div>
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <FollowIcon className={classes.addButton + ' rounded-full text-32'}/>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
            </div>
          ))}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {pages.content.map((page, idx) => (
              <div>
                {idx>4 && (
                  <ListItem key={page.id} className="px-12">
                    <a href={`/page/${page.id}`}>
                    {page.avatar ? (
                      <Avatar variant="rounded" className={classes.avatar + " w-48 h-48 mr-12 border"} src={buildPartyAvatarUrl(page)} />
                    ) : (
                      <Avatar variant="rounded" className={classes.avatar + " w-48 h-48 mr-12 border"} src="" />
                    )}
                    </a>
                    <ListItemText className="pr-48">
                      <div className="">
                        <Typography
                          className="font-medium text-15"
                          display="block"
                          color="primary"
                          paragraph={false}
                          variant="h6"
                        >
                          <a href={`/page/${page.id}`}>{page.name}</a>
                        </Typography>
                        <Typography
                          paragraph={true}
                          display="block"
                          className=""
                        >
                          {page.headLine}
                        </Typography>
                      </div>
                    </ListItemText>
                    <ListItemSecondaryAction>
                      <FollowIcon className={classes.addButton + ' rounded-full text-32'}/>
                    </ListItemSecondaryAction>
                  </ListItem>
                )}
              </div>
            ))}
          </Collapse>
        </List>
      </CardContent>
      {pages.length>5 && (
      <CardActions disableSpacing>
        <Typography
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          color="primary"
          paragraph={true}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {!expanded?'Show More':'Show Less'}
        </Typography>
      </CardActions>
      )}
    </Card>
	);
}

export default LinkedPages;
