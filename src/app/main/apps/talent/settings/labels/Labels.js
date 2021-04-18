import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import moment from 'moment';
import React from 'react';
import clsx from 'clsx';
import {useSelector} from "react-redux";
import {buildUserAvatar} from "../../../../../utils/urlHelper";



const useStyles = makeStyles(theme => ({
  contactListItem: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&.active': {
      backgroundColor: theme.palette.background.paper
    }
  },
  unreadBadge: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));


function Labels(props) {
  const user = useSelector(({ auth }) => auth && auth.user && auth.user);
  const classes = useStyles(props);

  if(!user){
    return <span>Please Log In</span>
  }
  return (
    <Paper className="py-24 px-32 rounded-0 shadow-none lg:rounded-8 lg:shadow-1">
      <div className="flex items-center">
        {user.data.avatar ? (
          <Avatar className={classes.large} alt="user photo" src={user.data.avatar} />
        ) : (
          <Avatar className={classes.large}>{user.data.firstName[0]}</Avatar>
        )}
        <div className="md:flex flex-col mx-10">
          <Typography component="span" className="normal-case font-bold flex">
            {user.data.firstName} {user.data.lastName}
          </Typography>
          <Typography className="text-11 capitalize" color="textSecondary">
            {user.role.toString()}
            {(!user.role || (Array.isArray(user.role) && user.role.length === 0)) && 'Guest'}
          </Typography>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<EditIcon />}
          >Edit</Button>
        </div>

      </div>
		</Paper>
	);
}

export default Labels;
