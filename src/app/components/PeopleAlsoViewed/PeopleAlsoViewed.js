import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import AppBar from '@material-ui/core/AppBar';
import CardActions from '@material-ui/core/CardActions';
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
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FollowIcon from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {buildPartyAvatarUrl, buildPartyCoverUrl} from 'app/utils/urlHelper';

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

function PeopleAlsoViewed(props) {

	const dispatch = useDispatch();

	const classes = useStyles(props);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


	if(!props.items){
	  return null;
  }
	return (
    <Card className="rounded-4">
      <AppBar position="static" elevation={0} className="bg-transparent">
        <Toolbar className="px-8">
          <Typography variant="subtitle1" color="primary" className="flex-1 px-12">
            People Also Viewed
          </Typography>

        </Toolbar>
      </AppBar>

      <CardContent className="p-0">
        <List className="p-0">
          {props.items.map((party, idx) => (
          	<div key={party.id}>
							{idx<=4 && (
							<ListItem key={party.id} className="px-12">
                <a href={`/${party.partyType=='PERSON'?'user':party.partyType.toLowerCase()}/${party.id}`}>
								{party.avatar ? (
									<Avatar variant={party.partyType=='PERSON'?'circle':"rounded"} className={classes.avatar + " w-48 h-48 mr-12 border"} src={buildPartyAvatarUrl(party)} />
								) : (
									<Avatar variant={party.partyType=='PERSON'?'circle':"rounded"}  className={classes.avatar + " w-48 h-48 mr-12 border"} src="" />
								)}
                </a>
								<ListItemText className="pr-48">
									<div className="">
										<Typography
											className="font-medium text-15 font-700"
											display="block"
											color="primary"
											paragraph={false}
											variant="h6"
										>
                      <a href={`/${party.partyType=='PERSON'?'user':party.partyType.toLowerCase()}/${party.id}`}>{party.name}</a>
										</Typography>

                    {party.partyType=='PERSON' && (
										<Typography
											paragraph={true}
											display="block"
											className=""
										>
											{party.headLine?party.headLine:party.currentPosition.employmentTitle + " at " + party.currentPosition.employer}
										</Typography>
                    )}

                    {party.partyType=='COMPANY' && (
                      <Typography
                        paragraph={true}
                        display="block"
                        className=""
                      >
                        {party.industry?party.industry[0].name:''}
                      </Typography>
                    )}

									</div>
								</ListItemText>
								<ListItemSecondaryAction>
                  <a>
                  {party.partyType=='PERSON' && (<PersonAddIcon className={classes.addButton + ' rounded-full text-32'}/>)}
                  {party.partyType=='COMPANY' && (<FollowIcon className={classes.addButton + ' rounded-full text-32'}/>)}
                  </a>
								</ListItemSecondaryAction>
							</ListItem>
							)}
						</div>
          ))}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
					{props.items.map((party, idx) => (
            <div key={party.id}>
              {idx>4 && (
                <ListItem key={party.id} className="px-12">
                  <a href={`/${party.partyType=='PERSON'?'user':party.partyType.toLowerCase()}/${party.id}`}>
                  {party.avatar ? (
                    <Avatar variant={party.partyType=='PERSON'?'circle':"rounded"}  className={classes.avatar + " w-48 h-48 mr-12 border"} src={buildPartyAvatarUrl(party)} />
                  ) : (
                    <Avatar variant={party.partyType=='PERSON'?'circle':"rounded"}  className={classes.avatar + " w-48 h-48 mr-12 border"} src="" />
                  )}
                  </a>
                  <ListItemText className="pr-48">
                    <div className="">
                      <Typography
                        className="font-medium text-15 font-700"
                        display="block"
                        color="primary"
                        paragraph={false}
                        variant="h6"
                      >
                        <a href={`/${party.partyType=='PERSON'?'user':party.partyType.toLowerCase()}/${party.id}`}>{party.name}</a>
                      </Typography>
                      {party.partyType=='PERSON' && (
                        <Typography
                          paragraph={true}
                          display="block"
                          className=""
                        >
                          {party.headLine?party.headLine:party.currentPosition.employmentTitle + " at " + party.currentPosition.employer}
                        </Typography>
                      )}

                      {party.partyType=='COMPANY' && (
                        <Typography
                          paragraph={true}
                          display="block"
                          className=""
                        >
                          {party.industry?party.industry[0].name:''}
                        </Typography>
                      )}
                    </div>
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <a>
                    {party.partyType=='PERSON' && (<PersonAddIcon className={classes.addButton + ' rounded-full text-32'}/>)}
                    {party.partyType=='COMPANY' && (<FollowIcon className={classes.addButton + ' rounded-full text-32'}/>)}
                    </a>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
            </div>
          ))}
					</Collapse>
        </List>
      </CardContent>
      {props.items.length>5 && (
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

export default PeopleAlsoViewed;
