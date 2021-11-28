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
import { toggleInSelectedCandidates, openCandidateDialog, updateCandidate, openEditCandidateDialog } from '../store/candidatesSlice';


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
      className="py-20 px-0 sm:px-8"
      completed={props.candidate.hasApplied}
      onClick={(ev) => {
        ev.preventDefault();
        // dispatch(openCandidateDialog(props.candidate));
        history.push(`candidates/${props.candidate.id}`);
      }}
      dense
      button
    >
      <Checkbox
        tabIndex={-1}
        disableRipple
        checked={checked}
        onChange={() => dispatch(toggleInSelectedCandidates(props.candidate.id))}
        onClick={(ev) => ev.stopPropagation()}
      />

      <div className="flex flex-1 relative overflow-hidden  px-8">
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full justify-between mb-12">
            <div className="flex  relative overflow-hidden">
              <Avatar className="w-32 h-32 md:w-64 md:h-64" alt={props.candidate.firstName} src={props.candidate.avatar} />
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
              </div>
            </div>
            <div className="flex">
              <div className="px-8">
                <Hidden smDown>
                  <IconButton
                    onClick={(ev) => {
                      ev.preventDefault();
                      ev.stopPropagation();
                      // dispatch(
                      //   updateCandidate({
                      //     ...props.candidate,
                      //     important: !props.candidate.important,
                      //   })
                      // );
                      dispatch(openCandidateDialog(props.candidate));
                    }}
                    size="large"
                  >
                    {props.candidate.important ? (
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
          <div className="flex flex-row items-start justify-start w-full">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <div className="flex flex-col">
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
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className="flex flex-col">
                  <Typography className="">{props.candidate.primaryAddress.city?props.candidate.primaryAddress.city:props.candidate.primaryAddress.state}</Typography>
                  <Typography className="">{props.candidate.primaryAddress.country}</Typography>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="flex flex-col">
                  {props.candidate.applications.map((app) => (
                    <div key={app.id} className="pb-20">
                      <Typography className="font-600">{app.jobTitle}</Typography>
                      <Typography>{app.currentProgress.stage.name}</Typography>
                      <Typography>{format(new Date(app.currentProgress.stage.updatedAt), 'PP')}</Typography>
                    </div>
                    ))}
                  {props.candidate.applications.length > 2 &&
                  <Button>See {props.candidate.applications.length - 2} more</Button>
                  }
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

    </StyledListItem>
  );
}

export default CandidateListItem;
