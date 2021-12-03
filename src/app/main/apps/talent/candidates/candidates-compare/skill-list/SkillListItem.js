import _ from '@lodash';
import format from 'date-fns/format';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { amber, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const ITEM_HEIGHT = 48;

const StyledListItem = styled(ListItem)(({ theme, completed }) => ({
  ...(completed && {
    '& .todo-title, & .todo-notes': {
      textDecoration: 'line-through',
    },
  }),
}));

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

function SkillListItem(props) {


  return (
    <StyledListItem
      disableRipple
      className="px-0 py-8 mb-10 bg-white rounded-6"
      dense
      button
    >
      <div className="flex flex-1 flex-row justify-between relative overflow-hidden px-8">
        <Chip label={props.skill.name} variant="outlined" />
      </div>

    </StyledListItem>
  );
}

export default SkillListItem;
