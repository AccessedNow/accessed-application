import _ from '@lodash';
import { styled } from '@mui/material/styles';
import { amber, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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

function ConnectionListItem(props) {
  const dispatch = useDispatch();
  const { user } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledListItem
      disableRipple
      className="py-20 px-0 sm:px-8"
      onClick={(ev) => {
        ev.preventDefault();
        // dispatch(openEditTodoDialog(props.todo));
      }}
      dense
      button
    >
      <div className="flex flex-row w-full">
        <div>
          {user.avatar ? (
            <Avatar className="md:mx-4 w-64 h-64" alt="user photo" src={user.avatar}/>
          ) : (
            <Avatar className="md:mx-4 w-64 h-64">{user.firstName[0]}</Avatar>
          )}
        </div>
        <div className="flex flex-1 flex-col relative overflow-hidden px-8">
          <Typography className="truncate text-14 font-medium">
            {user.name}
          </Typography>

          <Typography color="textSecondary" className="todo-notes truncate">
            {_.truncate(user.headline.replace(/<(?:.|\n)*?>/gm, ''), { length: 180 })}
          </Typography>
        </div>
      </div>

      <div className="flex flex-row px-8">
        <IconButton
          onClick={(ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            dispatch(
              // updateTodo({
              //   ...props.todo,
              //   important: !props.todo.important,
              // })
            );
          }}
          size="large"
        >
            <Icon>chat_bubble_outline</Icon>
        </IconButton>
        <IconButton
          onClick={handleOpen}
          size="large"
        >
          <Icon>more_vert</Icon>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Remove</MenuItem>
        </Menu>
      </div>
    </StyledListItem>
  );
}

export default ConnectionListItem;
