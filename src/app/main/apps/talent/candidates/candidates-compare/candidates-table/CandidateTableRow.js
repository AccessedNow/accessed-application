import _ from '@lodash';
import format from 'date-fns/format';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { amber, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Checkbox from '@mui/material/Checkbox';
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
import { toggleInSelectedCandidates, openCandidateDialog, updateCandidate, openEditCandidateDialog } from '../../../store/candidatesSlice';


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

function CandidateTableRow(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const openOption = Boolean(anchorEl);
  const selectedCandidateIds = useSelector(({ candidatesApp }) => candidatesApp.candidates.selectedCandidateIds);
  const checked =
    selectedCandidateIds.length > 0 && selectedCandidateIds.find((id) => id === props.candidate.id) !== undefined;


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
      className="px-0 py-8 mb-10 bg-white"
      completed={props.candidate.hasApplied}
      onClick={(ev) => {
        ev.preventDefault();
        // dispatch(openCandidateDialog(props.candidate));
        history.push(`candidates/${props.candidate.id}`);
      }}
      dense
      button
    >
      <div className="flex flex-1 flex-col relative overflow-hidden px-8">
        <div className="flex flex-row w-full justify-between">
          <div className="flex  relative overflow-hidden">
            <Avatar className="w-32 h-32 md:w-40 md:h-40" alt={props.candidate.firstName} src={props.candidate.avatar} />
            <div className="flex flex-1 flex-col justify-center relative overflow-hidden px-8">
              <Typography
                className="truncate text-14 font-medium"
                color={props.candidate.hasApplied ? 'textSecondary' : 'inherit'}
              >
                {props.candidate.firstName + ' ' + props.candidate.lastName}
              </Typography>

              <Typography className="">
                {props.candidate.jobTitle}
              </Typography>
              <Typography className="">{props.candidate.primaryAddress.city?props.candidate.primaryAddress.city + ' ' + props.candidate.primaryAddress.country:props.candidate.primaryAddress.country}</Typography>
            </div>
          </div>
          <div className="flex">
            <div className="px-8">

              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls="long-menu"
                aria-expanded={openOption ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleOptionClick}
              >
                <MoreVertIcon />
              </IconButton>
              <div>

                <Menu
                  id="long-menu"
                  MenuListProps={{
                    'aria-labelledby': 'long-button',
                  }}
                  anchorEl={anchorEl}
                  open={openOption}
                  onClose={handleOptionClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: '20ch',
                    },
                  }}
                >
                  {["Invite", "Flag"].map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleOptionClose}>
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
          </div>
        </div>

      </div>

    </StyledListItem>
  );
}

export default CandidateTableRow;
