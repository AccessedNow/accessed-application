import _ from '@lodash';
import { styled } from '@mui/material/styles';
import { amber, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import format from 'date-fns/format';


const StyledListItem = styled(ListItem)(({ theme, completed }) => ({
  '& .todo-title, & .todo-notes': {
    textDecoration: 'line-through',
  },

}));

function CandidateListItem(props) {
  const dispatch = useDispatch();

  return (
    <StyledListItem
      className="py-20 px-0 sm:px-8"
      dense
      button
    >
      <div className="flex flex-col sm:flex-row items-center justify-start">
        <div className="px-8 order-first sm:order-none">
          {props.candidate.avatar ? (
            <Avatar alt={props.candidate.firstName} src={props.candidate.avatar} className="w-60 h-60"/>
          ) : (
            <Avatar
              sx={{
                backgroundColor: (theme) => theme.palette.primary[100],
              }}
              className="w-60 h-60"
            >
              {props.candidate.firstName[0]}
            </Avatar>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col relative overflow-hidden px-8">
        <Typography className="font-medium">{props.candidate.firstName + ' ' + props.candidate.lastName}</Typography>

        <div className="flex flex-col py-4">
          <Typography className="truncate text-14 pb-2">{props.candidate.jobTitle}</Typography>
        </div>
      </div>

      <Divider/>
    </StyledListItem>
  );
}

export default CandidateListItem;
