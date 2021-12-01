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
import Rating from '@mui/material/Rating';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleInSelectedApplications } from '../../store/applicationsSlice';


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

function ApplicationListItem(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const board = useSelector(({ jobDetail }) => jobDetail.job.board);
  const [anchorEl, setAnchorEl] = useState(null);
  const openOption = Boolean(anchorEl);
  const selectedApplicationIds = useSelector(({ jobDetail }) => jobDetail.applications.selectedApplicationIds);
  const checked =
    selectedApplicationIds.length > 0 && selectedApplicationIds.find((id) => id === props.application._id) !== undefined;


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
      className="py-20 px-0 sm:px-8 bg-white"
      completed={props.application.hasApplied}
      onClick={(ev) => {
        ev.preventDefault();
        // dispatch(openCandidateDialog(props.candidate));
        history.push(`candidates/${props.application.id}`);
      }}
      dense
      button
    >
      <Checkbox
        tabIndex={-1}
        disableRipple
        checked={checked}
        onChange={() => dispatch(toggleInSelectedApplications(props.application._id))}
        onClick={(ev) => ev.stopPropagation()}
      />

      <div className="flex flex-1 relative overflow-hidden  px-8">
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-start justify-start w-full">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={4}>
                <div className="flex items-center justify-center relative overflow-hidden">
                  <Avatar className="w-32 h-32 md:w-64 md:h-64" alt={props.application.user.firstName} src={props.application.user.avatar} />
                  <div className="flex flex-1 flex-col relative overflow-hidden px-8">
                    <Typography
                      className="truncate text-14 font-medium"
                      color="inherit"
                    >
                      {props.application.user.firstName + ' ' + props.application.user.lastName}
                    </Typography>

                    <Typography className="">
                      {props.application.user.jobTitle}
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className="flex flex-col items-center">
                  <Typography className="">{props.application.user.primaryAddress.city?props.application.user.primaryAddress.city:props.application.user.primaryAddress.state}</Typography>
                  <Typography className="">{props.application.user.primaryAddress.country}</Typography>
                </div>
              </Grid>
              <Grid item xs={2}>
                <Typography className="">{props.application.currentProgress.stage.name}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Rating precision={0.1} name="read-only" value={props.application.user.rating?props.application.user.rating:0} readOnly />
              </Grid>
              <Grid item xs={2}>
                <div className="flex">
                  <div className="px-8">
                    <Hidden smDown>
                      <IconButton
                        onClick={(ev) => {
                          ev.preventDefault();
                          ev.stopPropagation();
                          // dispatch(openCandidateDialog(props.application));
                        }}
                        size="large"
                      >
                        {props.application.important ? (
                          <Icon style={{ color: red[500] }}>visibility</Icon>
                        ) : (
                          <Icon>visibility</Icon>
                        )}
                      </IconButton>
                    </Hidden>

                    <IconButton
                      onClick={(ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();
                        dispatch(
                          // updateCandidate({
                          //   ...props.application,
                          //   starred: !props.application.starred,
                          // })
                        );
                      }}
                      size="large"
                    >
                      {props.application.hasFollowed ? (
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
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

    </StyledListItem>
  );
}

export default ApplicationListItem;
