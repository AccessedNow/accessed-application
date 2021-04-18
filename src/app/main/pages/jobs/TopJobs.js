import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
	}
}));

function PopularGroup(props) {
	// const user = useSelector(({ contactsApp }) => contactsApp.user);

	const dispatch = useDispatch();

	const classes = useStyles(props);

  let groups= [
    {
      id: '1',
      name: 'Android Group',
      category: 'Technology',
      members: '1.856.546',
      avatar: 'assets/images/avatars/android_group.png'
    },
    {
      id: '2',
      name: 'Google Group',
      category: 'Web',
      members: '1.226.121',
      avatar: 'assets/images/avatars/google_group.png'
    },
    {
      id: '3',
      name: 'Fallout Group',
      category: 'Games',
      members: '526.142',
      avatar: 'assets/images/avatars/fallout_group.jpg'
    }
  ];

  let friends= [
    {
      id: '1',
      name: 'Garry Newman',
      avatar: 'assets/images/avatars/garry.jpg'
    },
    {
      id: '2',
      name: 'Carl Henderson',
      avatar: 'assets/images/avatars/carl.jpg'
    },
    {
      id: '3',
      name: 'Jane Dean',
      avatar: 'assets/images/avatars/jane.jpg'
    },
    {
      id: '4',
      name: 'Garry Arnold',
      avatar: 'assets/images/avatars/garry.jpg'
    },
    {
      id: '5',
      name: 'Vincent Munoz',
      avatar: 'assets/images/avatars/vincent.jpg'
    },
    {
      id: '6',
      name: 'Alice Freeman',
      avatar: 'assets/images/avatars/alice.jpg'
    },
    {
      id: '7',
      name: 'Andrew Green',
      avatar: 'assets/images/avatars/andrew.jpg'
    }
  ]



	return (
    <Card className="rounded-4">
      <AppBar position="static" elevation={0} className="bg-transparent">
        <Toolbar className="px-8">
          <Typography variant="subtitle1" color="primary" className="flex-1 px-12">
            Popular Groups
          </Typography>
          <Button className="normal-case" color="primary" size="small">
            See 6 more
          </Button>
        </Toolbar>
      </AppBar>

      <CardContent className="p-0">
        <List className="p-0">
          {groups.map(group => (
            <ListItem key={group.id} className="px-8">
              <Avatar className="mx-8" alt={group.name} src={group.avatar}>
                {group.name[0]}
              </Avatar>
              <ListItemText
                primary={
                  <div className="flex">
                    <Typography
                      className="font-medium"
                      color="secondary"
                      paragraph={false}
                    >
                      {group.name}
                    </Typography>
                  </div>
                }
                secondary={group.members}
              />
              <ListItemSecondaryAction>
                <IconButton>
                  <Icon>more_vert</Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
	);
}

export default PopularGroup;
