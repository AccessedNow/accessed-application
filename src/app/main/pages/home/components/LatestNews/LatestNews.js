import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper variant="outlined" className="flex flex-col items-center justify-center rounded-0 lg:rounded-6 lg:shadow">
      <div className="flex flex-row items-center justify-between w-full pt-12 px-16">
        <Typography className="text-10 md:text-12">
          Latest News
        </Typography>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <div className="w-full">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar variant="square" src="assets/images/avatars/Abbott.jpg" className="rounded-2 w-48 h-48">
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="World's first electried road for charging vehicles open in Sweden" className="text-14" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar variant="square" src="assets/images/avatars/Abbott.jpg" className="rounded-2 w-48 h-48">
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Former UI Designer at Tesla" className="text-14" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar variant="square" src="assets/images/avatars/Abbott.jpg" className="rounded-2 w-48 h-48">
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Studied Art at Drexel University" className="text-14" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </Paper>
  );
}
