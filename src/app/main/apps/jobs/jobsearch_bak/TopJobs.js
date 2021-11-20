import _ from '@lodash';
import { styled } from '@mui/material/styles';
import { amber, red } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import TodoChip from '../components/TodoChip';

function TodoListItem(props) {
  const dispatch = useDispatch();
  const jobs = [
    {
      id: '1',
      user: {
        name: 'Alice Freeman',
        avatar: 'assets/images/avatars/alice.jpg'
      },
      message: 'started following you.',
      time: '13 mins. ago'
    },
    {
      id: '2',
      user: {
        name: 'Andrew Green',
        avatar: 'assets/images/avatars/andrew.jpg'
      },
      message: 'sent you a message.',
      time: 'June 10,2015'
    },
    {
      id: '3',
      user: {
        name: 'Garry Newman',
        avatar: 'assets/images/avatars/garry.jpg'
      },
      message: 'shared a public post with your group.',
      time: 'June 9,2015'
    },
    {
      id: '4',
      user: {
        name: 'Carl Henderson',
        avatar: 'assets/images/avatars/carl.jpg'
      },
      message: 'wants to play Fallout Shelter with you.',
      time: 'June 8,2015'
    }
  ]
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col md:w-320">
      <Card component={motion.div} variants={item} className="w-full rounded-16 shadow mb-32">
        <AppBar position="static" elevation={0}>
          <Toolbar className="px-8">
            <Typography
              variant="subtitle1"
              color="inherit"
              className="flex-1 px-12 font-medium"
            >
              Latest Activity
            </Typography>
            <Button color="inherit" size="small" className="font-medium">
              See All
            </Button>
          </Toolbar>
        </AppBar>
        <CardContent className="p-0">
          <List>
            {jobs.map((job) => (
              <ListItem key={job.id} className="px-12">
                <Avatar className="mx-4" alt={job.user.name} src={job.user.avatar} />
                <ListItemText
                  className="flex-1 mx-4"
                  primary={
                    <div className="flex">
                      <Typography
                        className="font-normal whitespace-nowrap"
                        color="primary"
                        paragraph={false}
                      >
                        {job.user.name}
                      </Typography>

                      <Typography className="px-4 truncate" paragraph={false}>
                        {job.message}
                      </Typography>
                    </div>
                  }
                  secondary={job.time}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
}

export default TodoListItem;
