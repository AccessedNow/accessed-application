import { useEffect, useState } from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Ad from "../../../components/Ad";
import MediaAd from "../../../components/MediaAd";

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
      
      <Card variant="outlined" className="w-full mb-20 rounded-6">
        <CardHeader title={<Typography className="text-14 font-medium">People you may know</Typography>}/>

        <CardContent className="p-0">
          <List className="p-0">
            {friends.map((friend) => (
              <ListItem key={friend.id} className="px-8">
                <Avatar className="mx-8 w-52 h-52" alt={friend.name} src={friend.avatar}>
                  {friend.name[0]}
                </Avatar>
                <ListItemText
                  primary={
                    <div className="flex">
                      <Typography className="font-medium" color="inherit" paragraph={false}>
                        {friend.name}
                      </Typography>

                      {/*<Typography className="mx-4 font-normal" paragraph={false}>*/}
                      {/*{friend.category}*/}
                      {/*</Typography>*/}
                    </div>
                  }
                  // secondary={friend.title}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
        <CardActions className="justify-center pb-24">
          <Link href={''}>
            <Typography
              variant="subtitle1"
              color="inherit"
              className="font-medium"
            >
              See all
            </Typography>
          </Link>
        </CardActions>
      </Card>

      <Card className="w-full mb-20">
        <CardHeader title={<Typography className="text-14 font-medium">Connections that work here</Typography>}/>
        <CardContent className="p-0">
          <List className="p-0">
            {groups.map((group) => (
              <ListItem key={group.id} className="px-8">
                <Avatar variant="square" className="mx-8 w-52 h-52" alt={group.name}>
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
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>




    </div>
  );
}

export default MainSidebarContent;
