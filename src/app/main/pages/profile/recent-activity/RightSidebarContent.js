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

function RightSidebarContent() {
  const [data, setData] = useState(null);

  const groups = [
    {
      id: '1',
      name: 'Android',
      category: 'Technology',
      members: '1.856.546'
    },
    {
      id: '2',
      name: 'Google',
      category: 'Web',
      members: '1.226.121'
    },
    {
      id: '3',
      name: 'Fallout',
      category: 'Games',
      members: '526.142'
    }
  ];

  const friends = [
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
  ];

  useEffect(() => {
    axios.get('/api/profile/about').then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data) {
    return null;
  }


  return (
    <div className="flex flex-col md:w-288 p-0 lg:p-24 lg:ltr:pr-4 lg:rtl:pl-4">
    {/*<div className="flex flex-col md:w-288">*/}
      {/*<div className="mb-20">*/}
        {/*<Ad />*/}
      {/*</div>*/}
      <div className="mb-20">
        <MediaAd />
      </div>
      <div className="flex flex-row  items-center justify-between rounded-8 mb-24 bg-white p-16 shadow-sm">
        <Typography className="text-14">
          Looking for talent
        </Typography>
        <Button variant="contained" size="medium" className="ml-10">
          Post a Job
        </Button>
      </div>

      <Card className="w-full mb-20">
        <CardHeader title={<Typography className="text-14 font-medium">Influencers</Typography>}/>

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

export default RightSidebarContent;
