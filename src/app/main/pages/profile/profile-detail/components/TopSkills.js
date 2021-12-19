import _ from '@lodash';
import { styled } from '@mui/material/styles';
import { amber, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


const StyledListItem = styled(ListItem)(({ theme, completed }) => ({
  ...(completed && {
    background: 'rgba(0,0,0,0.03)',
    '& .todo-title, & .todo-notes': {
      textDecoration: 'line-through',
    },
  }),
}));

function TopSkills(props) {
  const dispatch = useDispatch();
  const { list } = props;


  return (
    <Paper variant="outlined" className="activities flex flex-col pt-24 mb-16 rounded-6">
      <div className="flex flex-col px-24">
        <Typography variant="h6" fontWeight={500}>
          Skills & Endorsements
        </Typography>
      </div>

      <div className="w-full">
        <div className="flex flex-col  px-24">
          {list.map((skillEndorsement, index)=> (
            <div className="flex flex-col py-20 border-b-1">
              <div className="flex flex-row items-center">
                <Typography variant="h6" fontWeight={600} className="text-16">
                  {skillEndorsement.skill.name}
                </Typography>

                <Typography variant="body2"  className="text-16 ml-20">
                  {skillEndorsement.noOfEndorsement}
                </Typography>
              </div>

            </div>
          ))}
        </div>
        <Button className="w-full">
          See all
        </Button>
      </div>
    </Paper>
  );
}

export default TopSkills;
