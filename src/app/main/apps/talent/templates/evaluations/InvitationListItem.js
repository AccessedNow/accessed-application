import _ from '@lodash';
import format from 'date-fns/format';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { amber, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
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
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleInSelectedMemberss, openMemberDialog, updateMember, openEditMemberDialog } from '../store/membersSlice';
import {updateCandidate} from "../store/candidatesSlice";


const ITEM_HEIGHT = 48;

const StyledListItem = styled(ListItem)(({ theme, completed }) => ({
  ...(completed && {
    background: 'white',
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

function InvitationListItem(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const openOption = Boolean(anchorEl);

  const handleOptionClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleOptionClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledListItem
      disableRipple
      className="py-16 px-0 sm:px-8"
      onClick={(ev) => {
        ev.preventDefault();
        dispatch(openMemberDialog(props.member));
      }}
      dense
      button
    >

      <div className="flex flex-1 relative overflow-hidden  px-8">
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full justify-between">
            <div className="flex  relative overflow-hidden">
              <Avatar className="w-32 h-32 md:w-32 md:h-32" src="assets/images/avatars/profile.jpg" />
              <div className="flex flex-1 flex-col relative overflow-hidden px-8">
                <Typography
                  className="truncate text-14 font-medium">
                  {props.invitation.email}
                </Typography>

                {props.invitation.role &&
                <Typography className="">
                  {props.invitation.role}
                </Typography>
                }
              </div>
            </div>
            <div className="flex">
              <div className="px-8">
                <IconButton
                  onClick={(ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    dispatch(
                      // updateCandidate({
                      //   ...props.candidate,
                      //   starred: !props.candidate.starred,
                      // })
                    );
                  }}
                  size="small"
                >
                  <Icon style={{ color: amber[500] }}>delete</Icon>
                </IconButton>

              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start w-full">

          </div>
        </div>
      </div>

    </StyledListItem>
  );
}

export default InvitationListItem;
