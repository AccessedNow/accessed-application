import _ from '@lodash';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { amber, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { selectLabelsEntities } from './store/labelsSlice';
import { openCandidateDialog, updateCandidate, openEditCandidateDialog } from './store/candidatesSlice';

import TodoChip from './TodoChip';
import {dateDiff} from "../../../../utils/helper";

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

function CandidateListItem(props) {
  const dispatch = useDispatch();
  const labels = useSelector(selectLabelsEntities);
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
      className="py-20 px-0 sm:px-8"
      completed={props.candidate.hasApplied}
      onClick={(ev) => {
        ev.preventDefault();
        dispatch(openCandidateDialog(props.candidate));
      }}
      dense
      button
    >
      <IconButton
        tabIndex={-1}
        disableRipple
        onClick={(ev) => {
          ev.stopPropagation();
          dispatch(
            updateCandidate({
              ...props.candidate,
              completed: !props.candidate.hasApplied,
            })
          );
        }}
        size="large"
      >
        {props.candidate.hasApplied ? (
          <Icon color="secondary">check_circle</Icon>
        ) : (
          <Icon color="action">radio_button_unchecked</Icon>
        )}
      </IconButton>

      {/*<div className="flex flex-1 flex-col relative overflow-hidden px-8">*/}
        {/*<Typography*/}
          {/*className="todo-title truncate text-14 font-medium"*/}
          {/*color={props.candidate.hasApplied ? 'textSecondary' : 'inherit'}*/}
        {/*>*/}
          {/*{props.candidate.title}*/}
        {/*</Typography>*/}

        {/*<Typography color="textSecondary" className="todo-notes truncate">*/}
          {/*{_.truncate(props.candidate.about.replace(/<(?:.|\n)*?>/gm, ''), { length: 180 })}*/}
        {/*</Typography>*/}

        {/*<div className="flex -mx-2 mt-8">*/}
          {/*{props.candidate.tags.map((label) => (*/}
            {/*<CandidateChip*/}
              {/*className="mx-2 mt-4"*/}
              {/*title={labels[label].title}*/}
              {/*color={labels[label].color}*/}
              {/*key={label}*/}
            {/*/>*/}
          {/*))}*/}
        {/*</div>*/}
      {/*</div>*/}
      <div className="flex flex-1 relative overflow-hidden  px-8">
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full justify-between mb-12">
            <div className="flex  relative overflow-hidden">
              <Avatar className=""  sx={{ width: 60, height: 60 }} alt={props.candidate.firstName} src={props.candidate.avatar} />
              <div className="flex flex-1 flex-col relative overflow-hidden px-8">
                <Typography
                  className="truncate text-14 font-medium"
                  color={props.candidate.hasApplied ? 'textSecondary' : 'inherit'}
                >
                  {props.candidate.firstName + ' ' + props.candidate.lastName}
                </Typography>

                <Typography className="">
                  {props.candidate.jobTitle}
                </Typography>
                <Typography className="">
                  {props.candidate.primaryAddress.country}
                </Typography>
              </div>
            </div>
            <div className="flex">
              <div className="px-8">
                <IconButton
                  onClick={(ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    dispatch(
                      updateCandidate({
                        ...props.candidate,
                        important: !props.candidate.important,
                      })
                    );
                  }}
                  size="large"
                >
                  {props.candidate.important ? (
                    <Icon style={{ color: red[500] }}>error</Icon>
                  ) : (
                    <Icon>error_outline</Icon>
                  )}
                </IconButton>
                <IconButton
                  onClick={(ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    dispatch(
                      updateCandidate({
                        ...props.candidate,
                        starred: !props.candidate.starred,
                      })
                    );
                  }}
                  size="large"
                >
                  {props.candidate.hasSaved ? (
                    <Icon style={{ color: amber[500] }}>favorite</Icon>
                  ) : (
                    <Icon>favorite_border</Icon>
                  )}
                </IconButton>
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
          <div className="flex flex-row w-full mb-4 items-start justify-start">
            <div className="w-72 pr-12 talign-right">
              <Typography className="truncate text-12 font-600" color="">
                Current
              </Typography>
            </div>
            <div>
              <Typography className="text-12" color="">
                Growth Market Manager at Flexis
              </Typography>
            </div>
          </div>
          <div className="flex w-full mb-4">
            <div className="inline-block w-72 pr-12 talign-right">
              <Typography className="truncate text-12 font-600" color="">
                Past
              </Typography>
            </div>
            <div className="inline-block">
              <Typography className="text-12" color="">
                Campaign Marketing Manager
              </Typography>
              <Typography className="text-12" color="">
                Campaign Marketing Manager
              </Typography>
              <Link href="#" underline="none">
                <Typography className="text-12" color="">
                  More
                </Typography>
              </Link>
            </div>
          </div>
          <div className="flex w-full mb-4">
            <div className="inline-block w-72 pr-12 talign-right">
              <Typography className="truncate text-12 font-600" color="">
                Education
              </Typography>
            </div>
            <div className="inline-block">
              <Typography className="truncate text-12" color="">
                University of Southern California | 2007 - 2012
              </Typography>
            </div>
          </div>
          <div className="flex w-full mb-4">
            <div className="inline-block w-72 pr-12 talign-right">
              <Typography className="truncate text-12-12 font-600" color="">
                Insight
              </Typography>
            </div>
            <div className="inline-block">
              <Typography className="text-12" color="">
                Open to new opportunities
              </Typography>
            </div>
          </div>
          {props.candidate.applications.length &&
          <div className="flex w-full mb-4">
            <div className="inline-block w-72 pr-12 talign-right">
              <Typography className="truncate text-12 font-600" color="">
                Application
              </Typography>
            </div>
            <div className="inline-block">
              <Typography className="text-12" color="">
                {props.candidate.applications.length} jobs
              </Typography>
            </div>
          </div>
          }
        </div>
      </div>

    </StyledListItem>
  );
}

export default CandidateListItem;
