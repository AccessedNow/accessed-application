import { useEffect, useState } from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Ad from "../../components/Ad";
import MediaAd from "../../components/MediaAd";

function MainSidebarContent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/profile/about').then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data) {
    return null;
  }

  const { general, contact, groups, friends } = data;

  return (
    <div className="flex flex-col md:w-288">
      {/*<div className="mb-20">*/}
        {/*<Ad />*/}
      {/*</div>*/}
      <div className="mb-20">
        <MediaAd />
      </div>
      <Card className="w-full mb-20 rounded-16 shadow">
        <AppBar position="static" elevation={0}>
          <Toolbar className="px-8">
            <Typography
              variant="subtitle1"
              color="inherit"
              className="flex-1 px-12 font-medium"
            >
              Friends
            </Typography>
            <Button color="inherit" size="small">
              See 454 more
            </Button>
          </Toolbar>
        </AppBar>
        <CardContent className="flex flex-wrap p-16">
          {friends.map((friend) => (
            <img
              key={friend.id}
              className="w-64 m-4 rounded-16 block"
              src={friend.avatar}
              alt={friend.name}
            />
          ))}
        </CardContent>
      </Card>
      <Card className="w-full mb-20">
        <AppBar position="static" elevation={0}>
          <Toolbar className="px-8">
            <Typography
              variant="subtitle1"
              color="inherit"
              className="flex-1 px-12 font-medium"
            >
              Joined Groups
            </Typography>
            <Button color="inherit" size="small">
              See 6 more
            </Button>
          </Toolbar>
        </AppBar>
        <CardContent className="p-0">
          <List className="p-0">
            {groups.map((group) => (
              <ListItem key={group.id} className="px-8">
                <Avatar className="mx-8" alt={group.name}>
                  {group.name[0]}
                </Avatar>
                <ListItemText
                  primary={
                    <div className="flex">
                      <Typography className="font-medium" color="secondary" paragraph={false}>
                        {group.name}
                      </Typography>

                      <Typography className="mx-4 font-normal" paragraph={false}>
                        {group.category}
                      </Typography>
                    </div>
                  }
                  secondary={group.members}
                />
                <ListItemSecondaryAction>
                  <IconButton size="large">
                    <Icon>more_vert</Icon>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      <div className="flex flex-row  items-center rounded-8 bg-white p-16 shadow-sm">
        <Typography className="text-14">
          Looking for talent
        </Typography>
        <Button variant="contained" size="medium" className="ml-10">
          Post a Job
        </Button>
      </div>



    </div>
  );
}

export default MainSidebarContent;
